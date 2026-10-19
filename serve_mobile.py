import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
import socket
import ssl
import json
import urllib.parse
import threading
import datetime
import http.server
import socketserver
import qrcode
from PIL import Image

# -------------------------------------------------------------
# GLOBAL IN-MEMORY RELAYS FOR CHAT, WEBRTC SIGNALING & RADAR
# -------------------------------------------------------------
ROOM_CHATS = {}       # room_id -> list of message dicts
ROOM_SIGNALS = {}     # room_id -> list of signal dicts
ACTIVE_MEMBERS = {}   # client_id -> member telemetry dict
DATA_LOCK = threading.Lock()

def ensure_ssl_certificates(app_dir):
    cert_path = os.path.join(app_dir, "cert.pem")
    key_path = os.path.join(app_dir, "key.pem")
    if os.path.exists(cert_path) and os.path.exists(key_path):
        return cert_path, key_path
    
    try:
        from cryptography import x509
        from cryptography.x509.oid import NameOID
        from cryptography.hazmat.primitives import hashes
        from cryptography.hazmat.primitives.asymmetric import rsa
        from cryptography.hazmat.primitives import serialization
        import ipaddress

        key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
        subject = issuer = x509.Name([
            x509.NameAttribute(NameOID.COUNTRY_NAME, 'US'),
            x509.NameAttribute(NameOID.ORGANIZATION_NAME, 'Planfit Local'),
            x509.NameAttribute(NameOID.COMMON_NAME, 'localhost'),
        ])
        cert = x509.CertificateBuilder().subject_name(
            subject
        ).issuer_name(
            issuer
        ).public_key(
            key.public_key()
        ).serial_number(
            x509.random_serial_number()
        ).not_valid_before(
            datetime.datetime.now(datetime.timezone.utc)
        ).not_valid_after(
            datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(days=365)
        ).add_extension(
            x509.SubjectAlternativeName([
                x509.DNSName('localhost'),
                x509.IPAddress(ipaddress.IPv4Address('127.0.0.1')),
            ]),
            critical=False,
        ).sign(key, hashes.SHA256())

        with open(key_path, 'wb') as f:
            f.write(key.private_bytes(
                encoding=serialization.Encoding.PEM,
                format=serialization.PrivateFormat.TraditionalOpenSSL,
                encryption_algorithm=serialization.NoEncryption(),
            ))

        with open(cert_path, 'wb') as f:
            f.write(cert.public_bytes(serialization.Encoding.PEM))
            
        print("  ✓ Generated self-signed SSL certificate for HTTPS mode")
        return cert_path, key_path
    except Exception as e:
        print(f"  Notice: SSL generation skipped ({e})")
        return None, None

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

class PlanfitRelayHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and disable caching for API endpoints
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        qs = urllib.parse.parse_qs(parsed.query)

        # 1. API: Get Chat Messages
        if path == "/api/chat":
            room = qs.get("room", ["PLANFIT-ROOM-1"])[0]
            since = int(qs.get("since", [0])[0])
            with DATA_LOCK:
                msgs = ROOM_CHATS.get(room, [])
                new_msgs = [m for m in msgs if m.get("timestamp", 0) > since]
            
            resp = json.dumps({"status": "ok", "messages": new_msgs}).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(resp)))
            self.end_headers()
            self.wfile.write(resp)
            return

        # 2. API: Get WebRTC Call Signals
        if path == "/api/signal":
            room = qs.get("room", ["PLANFIT-ROOM-1"])[0]
            client_id = qs.get("client", [""])[0]
            with DATA_LOCK:
                signals = ROOM_SIGNALS.get(room, [])
                # Return signals intended for this client or broadcast, and not sent by self
                my_signals = [s for s in signals if s.get("sender") != client_id and (s.get("target") == client_id or not s.get("target"))]
                # Filter out signals older than 30s
                now = datetime.datetime.now().timestamp()
                ROOM_SIGNALS[room] = [s for s in signals if now - s.get("created", 0) < 30]
            
            resp = json.dumps({"status": "ok", "signals": my_signals}).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(resp)))
            self.end_headers()
            self.wfile.write(resp)
            return

        # 3. API: Get Live Members & GPS Radar
        if path in ("/api/locations", "/api/members"):
            now = datetime.datetime.now().timestamp()
            with DATA_LOCK:
                # Active within last 45s
                active = [m for m in ACTIVE_MEMBERS.values() if now - m.get("last_seen", 0) < 45]
            resp = json.dumps({"status": "ok", "members": active}).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(resp)))
            self.end_headers()
            self.wfile.write(resp)
            return

        # Static files fallback
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length).decode("utf-8") if length > 0 else "{}"
        try:
            payload = json.loads(body)
        except Exception:
            payload = {}

        # 1. API: Send Chat Message
        if path == "/api/chat":
            room = payload.get("room", "PLANFIT-ROOM-1")
            msg = {
                "id": payload.get("id") or str(datetime.datetime.now().timestamp()),
                "sender": payload.get("sender", "Anonymous"),
                "senderName": payload.get("senderName", "User"),
                "text": payload.get("text", ""),
                "timestamp": int(payload.get("timestamp") or datetime.datetime.now().timestamp() * 1000)
            }
            with DATA_LOCK:
                if room not in ROOM_CHATS:
                    ROOM_CHATS[room] = []
                ROOM_CHATS[room].append(msg)
                # Keep last 100 messages
                if len(ROOM_CHATS[room]) > 100:
                    ROOM_CHATS[room] = ROOM_CHATS[room][-100:]

            resp = json.dumps({"status": "ok", "message": msg}).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(resp)))
            self.end_headers()
            self.wfile.write(resp)
            return

        # 2. API: Send WebRTC Call Signal
        if path == "/api/signal":
            room = payload.get("room", "PLANFIT-ROOM-1")
            signal_item = {
                "sender": payload.get("sender"),
                "senderName": payload.get("senderName", "Partner"),
                "target": payload.get("target"),
                "type": payload.get("type"),
                "data": payload.get("data"),
                "created": datetime.datetime.now().timestamp()
            }
            with DATA_LOCK:
                if room not in ROOM_SIGNALS:
                    ROOM_SIGNALS[room] = []
                ROOM_SIGNALS[room].append(signal_item)

            resp = json.dumps({"status": "ok"}).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(resp)))
            self.end_headers()
            self.wfile.write(resp)
            return

        # 3. API: Heartbeat & Location Telemetry
        if path in ("/api/location", "/api/locations"):
            client_id = payload.get("id") or str(payload.get("name", "User"))
            with DATA_LOCK:
                ACTIVE_MEMBERS[client_id] = {
                    "id": client_id,
                    "name": payload.get("name", "Gym Member"),
                    "lat": payload.get("lat"),
                    "lng": payload.get("lng"),
                    "acc": payload.get("acc"),
                    "venue": payload.get("venue", "Planfit Gym"),
                    "split": payload.get("split", "Active Routine"),
                    "volume": payload.get("volume", "0 kg"),
                    "last_seen": datetime.datetime.now().timestamp()
                }

            resp = json.dumps({"status": "ok"}).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(resp)))
            self.end_headers()
            self.wfile.write(resp)
            return

        self.send_response(404)
        self.end_headers()

def main():
    http_port = 5000
    https_port = 5443
    local_ip = get_local_ip()
    app_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(app_dir)

    http_url = f"http://{local_ip}:{http_port}"
    https_url = f"https://{local_ip}:{https_port}"

    cert_path, key_path = ensure_ssl_certificates(app_dir)

    # Generate QR Code for HTTPS (or HTTP)
    qr_target = https_url if cert_path else http_url
    qr = qrcode.QRCode(version=1, box_size=10, border=4)
    qr.add_data(qr_target)
    qr.make(fit=True)
    img_qr = qr.make_image(fill_color="black", back_color="white")
    qr_path = os.path.join(app_dir, "qr_code.png")
    img_qr.save(qr_path)

    # Print server banner
    print("=" * 70)
    print("⚡ PLANFIT WORKOUT TRACKER • REAL-TIME RELAY & SOCIAL SERVER ⚡")
    print("=" * 70)
    print(f"\n📱 1. SECURE HTTPS (Recommended for Camera & Mic WebRTC Calling):")
    print(f"      👉  {https_url}  👈")
    print(f"      (Accept self-signed certificate in browser to enable camera/mic)\n")
    print(f"📱 2. STANDARD HTTP:")
    print(f"      👉  {http_url}  👈\n")
    print(f"💾 QR Code saved to: {qr_path}")
    print(f"📦 Native Android APK available at: {http_url}/Planfit_Workout_Tracker.apk")
    print("-" * 70)
    print("📱 Terminal QR Code (Scan with phone):\n")
    try:
        qr_terminal = qrcode.QRCode()
        qr_terminal.add_data(qr_target)
        qr_terminal.print_ascii(invert=True)
    except Exception:
        pass
    print("-" * 70)
    print("💡 To connect multiple devices together for real-time calling & texting:")
    print("   • Open the URL above on both phones or computers.")
    print("   • Go to the '🌐 Connect' tab -> join the same Room Code (e.g., PLANFIT-ROOM-1).")
    print("   • Enjoy live peer-to-peer audio/video calls, texting & radar telemetry!")
    print("\nPress Ctrl+C to stop the server.\n")
    print("=" * 70)

    # Start HTTPS server in background thread if cert exists
    if cert_path and key_path:
        def run_https():
            try:
                ssl_ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
                ssl_ctx.load_cert_chain(certfile=cert_path, keyfile=key_path)
                with socketserver.TCPServer(("0.0.0.0", https_port), PlanfitRelayHandler) as httpsd:
                    httpsd.socket = ssl_ctx.wrap_socket(httpsd.socket, server_side=True)
                    httpsd.serve_forever()
            except Exception as e:
                print(f"HTTPS server error: {e}")

        t = threading.Thread(target=run_https, daemon=True)
        t.start()

    # Start HTTP server on main thread
    with socketserver.TCPServer(("0.0.0.0", http_port), PlanfitRelayHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    main()
