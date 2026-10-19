// ========================================================
// CORE DATA & STORAGE
// ========================================================
const FULL_LIBRARY = [
  {
    "id": "flat_db_press",
    "name": "Flat Dumbbell Press",
    "category": "Chest",
    "target": "Chest (Pectoralis Major)",
    "sets": "4 Sets",
    "reps": "16, 14, 12, 10 Reps (Pyramid)",
    "notes": "Drive through the chest, maintain arch and retracted scapula.",
    "image": "Flat Dumbbel Press.jfif",
    "image_url": "./images/Flat Dumbbel Press.jfif"
  },
  {
    "id": "incline_bb_press",
    "name": "Incline Bench Press",
    "category": "Chest",
    "target": "Upper Chest (Clavicular Head)",
    "sets": "4 Sets",
    "reps": "16, 14, 12, 10 Reps",
    "notes": "30-degree incline angle. Focus on upper chest squeeze at top.",
    "image": "Incline bench press.jfif",
    "image_url": "./images/Incline bench press.jfif"
  },
  {
    "id": "incline_db_fly",
    "name": "Incline Dumbbell Fly",
    "category": "Chest",
    "target": "Upper Chest Stretch & Contraction",
    "sets": "4 Sets",
    "reps": "10-15 Reps",
    "notes": "Slight bend at elbows. Deep stretch at bottom, squeeze at peak.",
    "image": "incline dumbbell fly.jfif",
    "image_url": "./images/incline dumbbell fly.jfif"
  },
  {
    "id": "butterfly_pec_deck",
    "name": "Butterfly Machine (Pec Deck)",
    "category": "Chest",
    "target": "Inner & Middle Chest",
    "sets": "4 Sets",
    "reps": "10-15 Reps",
    "notes": "Seat height set so handles are mid-chest. 2-second peak contraction.",
    "image": "butterfly machine.jfif",
    "image_url": "./images/butterfly machine.jfif"
  },
  {
    "id": "decline_bb_press",
    "name": "Decline Barbell Press",
    "category": "Chest",
    "target": "Lower Chest (Costal Head)",
    "sets": "4 Sets",
    "reps": "16, 14, 12, 10 Reps",
    "notes": "Secure legs under rollers. Lower bar strictly to lower sternum.",
    "image": "decline barbell press.jfif",
    "image_url": "./images/decline barbell press.jfif"
  },
  {
    "id": "decline_fly",
    "name": "Decline Dumbbell Fly",
    "category": "Chest",
    "target": "Lower & Outer Pectorals",
    "sets": "4 Sets",
    "reps": "10-15 Reps",
    "notes": "Controlled descent focusing on stretch at bottom position.",
    "image": "decline fly.jfif",
    "image_url": "./images/decline fly.jfif"
  },
  {
    "id": "chest_press_machine",
    "name": "Machine Chest Press",
    "category": "Chest",
    "target": "Full Chest Mass & Density",
    "sets": "4 Sets",
    "reps": "10-12 Reps",
    "notes": "Explosive concentric press, slow 3-second negative descent.",
    "image": "chest press machine.jfif",
    "image_url": "./images/chest press machine.jfif"
  },
  {
    "id": "flat_bench_db_press",
    "name": "Flat Bench Dumbbell Press",
    "category": "Chest",
    "target": "Pectoralis Major & Stabilizers",
    "sets": "4 Sets",
    "reps": "12-15 Reps",
    "notes": "Full depth stretch and explosive press bringing bells together.",
    "image": "flat bench dumbell press.jfif",
    "image_url": "./images/flat bench dumbell press.jfif"
  },
  {
    "id": "push_up",
    "name": "Bodyweight Push-Ups",
    "category": "Chest",
    "target": "Chest, Triceps & Core Stabilizers",
    "sets": "3 Sets",
    "reps": "Failure (20-30 Reps)",
    "notes": "Strict plank position. Touch chest to ground and lock out.",
    "image": "push up.jfif",
    "image_url": "./images/push up.jfif"
  },
  {
    "id": "cabel_triceps_curl",
    "name": "Cable Triceps Pushdown",
    "category": "Triceps",
    "target": "Triceps Lateral & Medial Heads",
    "sets": "4 Sets",
    "reps": "10-15 Reps",
    "notes": "Keep elbows pinned to your ribs; flare rope or push rod at bottom.",
    "image": "cabel triceps curl.jfif",
    "image_url": "./images/cabel triceps curl.jfif"
  },
  {
    "id": "reverse_rod_triceps",
    "name": "Reverse Grip Triceps Extension",
    "category": "Triceps",
    "target": "Triceps Medial Head",
    "sets": "4 Sets",
    "reps": "10-15 Reps",
    "notes": "Underhand supinated grip on rod; isolate elbow extension.",
    "image": "reverse rod triceps curls.jfif",
    "image_url": "./images/reverse rod triceps curls.jfif"
  },
  {
    "id": "skull_crushers",
    "name": "EZ Bar Skull Crushers",
    "category": "Triceps",
    "target": "Triceps Long Head (Stretch Position)",
    "sets": "4 Sets",
    "reps": "10-12 Reps",
    "notes": "Lower bar toward forehead/behind head; elbows point at ceiling.",
    "image": "skull crushers.jfif",
    "image_url": "./images/skull crushers.jfif"
  },
  {
    "id": "smith_close_grip_bench",
    "name": "Smith Close-Grip Bench Press",
    "category": "Triceps",
    "target": "Triceps Mass & Lockout Strength",
    "sets": "4 Sets",
    "reps": "10-12 Reps",
    "notes": "Shoulder-width grip. Keep elbows tucked 45 degrees to torso.",
    "image": "smith close grip bench press.jfif",
    "image_url": "./images/smith close grip bench press.jfif"
  },
  {
    "id": "lat_pulldown",
    "name": "Wide Grip Lat Pulldown",
    "category": "Back",
    "target": "Lats (Latissimus Dorsi Width)",
    "sets": "4 Sets",
    "reps": "16, 14, 12, 10 Reps (Pyramid)",
    "notes": "Pull to upper chest. Squeeze shoulder blades down and back.",
    "image": "lat pull down.jfif",
    "image_url": "./images/lat pull down.jfif"
  },
  {
    "id": "close_grip_pulldown",
    "name": "Close Grip V-Bar Pulldown",
    "category": "Back",
    "target": "Lower Lats & Mid-Back Thickness",
    "sets": "4 Sets",
    "reps": "10-15 Reps",
    "notes": "Drive elbows straight down to hip pockets with torso arched.",
    "image": "close grip pull down.jfif",
    "image_url": "./images/close grip pull down.jfif"
  },
  {
    "id": "iso_lateral_lat_pulldown",
    "name": "Iso-Lateral Lat Pulldown",
    "category": "Back",
    "target": "Unilateral Lat Symmetry",
    "sets": "4 Sets",
    "reps": "10-12 Reps",
    "notes": "Allows independent arm motion for maximal contraction.",
    "image": "iso lateral lat pulldown.jfif",
    "image_url": "./images/iso lateral lat pulldown.jfif"
  },
  {
    "id": "seated_row",
    "name": "Cable Seated Row",
    "category": "Back",
    "target": "Rhomboids, Mid-Traps & Lats",
    "sets": "4 Sets",
    "reps": "10-15 Reps",
    "notes": "Keep upright posture; drive elbows back and pinch scapulae.",
    "image": "seated row.jfif",
    "image_url": "./images/seated row.jfif"
  },
  {
    "id": "incline_db_bentrow",
    "name": "Incline Dumbbell Bent-Over Row",
    "category": "Back",
    "target": "Upper Back & Rear Delts",
    "sets": "4 Sets",
    "reps": "10-12 Reps",
    "notes": "Chest supported on incline bench; eliminates momentum.",
    "image": "incline dumbbell bentrow.jfif",
    "image_url": "./images/incline dumbbell bentrow.jfif"
  },
  {
    "id": "rack_pull",
    "name": "Power Rack Pulls",
    "category": "Back",
    "target": "Spinal Orectors, Traps & Glutes",
    "sets": "4 Sets",
    "reps": "8-10 Reps (Heavy)",
    "notes": "Bar set just below knees. Drive hips forward and lock out.",
    "image": "rack pull.jfif",
    "image_url": "./images/rack pull.jfif"
  },
  {
    "id": "shrugs",
    "name": "Dumbbell Trap Shrugs",
    "category": "Back",
    "target": "Upper Trapezius",
    "sets": "4 Sets",
    "reps": "15-20 Reps",
    "notes": "Straight up toward ears, 2-sec hold at peak. No rolling.",
    "image": "shrugs.jfif",
    "image_url": "./images/shrugs.jfif"
  },
  {
    "id": "standing_biceps_curl",
    "name": "Standing Biceps Curl",
    "category": "Biceps",
    "target": "Biceps Brachii Mass",
    "sets": "4 Sets",
    "reps": "10-12 Reps",
    "notes": "Supinate wrists at top; keep upper arms locked vertically.",
    "image": "biceps curl.jfif",
    "image_url": "./images/biceps curl.jfif"
  },
  {
    "id": "preacher_bicep_curl",
    "name": "Preacher Bicep Curl",
    "category": "Biceps",
    "target": "Biceps Short Head & Peak",
    "sets": "4 Sets",
    "reps": "10-12 Reps",
    "notes": "Triceps flush against pad; prevent shoulder compensation.",
    "image": "preacher bicep curl.jfif",
    "image_url": "./images/preacher bicep curl.jfif"
  },
  {
    "id": "hammer_cabel_curl",
    "name": "Cable Hammer Curl",
    "category": "Biceps",
    "target": "Brachialis & Brachioradialis",
    "sets": "4 Sets",
    "reps": "12-15 Reps",
    "notes": "Neutral thumbs-up grip with rope; builds forearm and arm width.",
    "image": "hammer cabel curl.jpg",
    "image_url": "./images/hammer cabel curl.jpg"
  },
  {
    "id": "wall_biceps_curl",
    "name": "Strict Wall Bicep Curl",
    "category": "Biceps",
    "target": "Strict Isolated Biceps",
    "sets": "4 Sets",
    "reps": "10-12 Reps",
    "notes": "Back, head, and glutes pinned against wall to prevent cheating.",
    "image": "wall biceps curl.jfif",
    "image_url": "./images/wall biceps curl.jfif"
  },
  {
    "id": "smith_shoulder_press",
    "name": "Smith Machine Shoulder Press",
    "category": "Shoulders",
    "target": "Anterior & Lateral Deltoids",
    "sets": "4 Sets",
    "reps": "16, 14, 12, 10 Reps (Pyramid)",
    "notes": "Lower bar to chin level; explode up without locking elbows.",
    "image": "smith shoulder press.jfif",
    "image_url": "./images/smith shoulder press.jfif"
  },
  {
    "id": "overhead_db_press",
    "name": "Seated Overhead Dumbbell Press",
    "category": "Shoulders",
    "target": "Deltoid Mass & Overhead Power",
    "sets": "4 Sets",
    "reps": "10-12 Reps",
    "notes": "Keep core tight. Press upward in arc until bells almost touch.",
    "image": "overhead dumbbell press.jfif",
    "image_url": "./images/overhead dumbbell press.jfif"
  },
  {
    "id": "front_raises",
    "name": "Front Dumbbell Raises",
    "category": "Shoulders",
    "target": "Anterior (Front) Deltoid",
    "sets": "4 Sets",
    "reps": "12-15 Reps",
    "notes": "Raise to eye level; control the 3-second descent.",
    "image": "Front raises.jfif",
    "image_url": "./images/Front raises.jfif"
  },
  {
    "id": "upright_row",
    "name": "Cable Upright Row",
    "category": "Shoulders",
    "target": "Lateral Delts & Traps",
    "sets": "4 Sets",
    "reps": "12-15 Reps",
    "notes": "Lead with elbows high; pull to mid-chest with hands wide.",
    "image": "upright row.jfif",
    "image_url": "./images/upright row.jfif"
  },
  {
    "id": "upright_row_reverse_fly",
    "name": "Upright Row & Reverse Fly",
    "category": "Shoulders",
    "target": "Lateral & Posterior Delts Superset",
    "sets": "4 Sets",
    "reps": "12 Reps Each",
    "notes": "Superset combo for round 3D deltoid development.",
    "image": "upright row and reverse fly.jfif",
    "image_url": "./images/upright row and reverse fly.jfif"
  },
  {
    "id": "front_squat",
    "name": "Barbell Front Squats",
    "category": "Legs",
    "target": "Quadriceps & Core Stability",
    "sets": "4 Sets",
    "reps": "16, 14, 12, 10 Reps",
    "notes": "High elbows rack position. Keep torso upright; break parallel.",
    "image": "fornt squart.jfif",
    "image_url": "./images/fornt squart.jfif"
  },
  {
    "id": "goblet_squats",
    "name": "Dumbbell Goblet Squats",
    "category": "Legs",
    "target": "Quads & Adductors Depth",
    "sets": "4 Sets",
    "reps": "12-15 Reps",
    "notes": "Hold heavy dumbbell tight to chest; push knees out in descent.",
    "image": "goblet squats.jfif",
    "image_url": "./images/goblet squats.jfif"
  },
  {
    "id": "wide_grip_leg_press",
    "name": "Wide-Stance Leg Press",
    "category": "Legs",
    "target": "Inner Thighs, Quads & Glutes",
    "sets": "4 Sets",
    "reps": "12-15 Reps",
    "notes": "Feet high and wide on platform. Full depth without pelvis lifting.",
    "image": "wide grip leg press.jfif",
    "image_url": "./images/wide grip leg press.jfif"
  },
  {
    "id": "leg_extension",
    "name": "Leg Extension Machine",
    "category": "Legs",
    "target": "Quadriceps Isolation & Rectus Femoris",
    "sets": "4 Sets",
    "reps": "15-20 Reps",
    "notes": "Hold 1-sec squeeze at top contraction. Control descent.",
    "image": "leg extension.jfif",
    "image_url": "./images/leg extension.jfif"
  },
  {
    "id": "hamstring_curl",
    "name": "Lying Hamstring Curl",
    "category": "Legs",
    "target": "Biceps Femoris (Hamstrings)",
    "sets": "4 Sets",
    "reps": "12-15 Reps",
    "notes": "Keep hips pressed firmly into bench; avoid lower back arching.",
    "image": "hamstring curl.jfif",
    "image_url": "./images/hamstring curl.jfif"
  },
  {
    "id": "walking_lunges",
    "name": "Walking Dumbbell Lunges",
    "category": "Legs",
    "target": "Quads, Glutes & Unilateral Balance",
    "sets": "4 Sets",
    "reps": "12-16 Steps per leg",
    "notes": "Knee reaches 90-degree angle lightly above floor. Drive forward.",
    "image": "lunges.jfif",
    "image_url": "./images/lunges.jfif"
  },
  {
    "id": "glute_bridge",
    "name": "Barbell Glute Bridge",
    "category": "Legs",
    "target": "Gluteus Maximus & Hamstrings",
    "sets": "4 Sets",
    "reps": "12-15 Reps",
    "notes": "Drive through heels, squeeze glutes hard for 2 seconds at lockout.",
    "image": "glute bridge.jfif",
    "image_url": "./images/glute bridge.jfif"
  },
  {
    "id": "seated_calves_raise",
    "name": "Seated Calf Raise",
    "category": "Legs",
    "target": "Soleus Muscle (Deep Calves)",
    "sets": "4 Sets",
    "reps": "15-20 Reps",
    "notes": "Full stretch at bottom, slow 2-second raise onto toes.",
    "image": "seated calves raise.jfif",
    "image_url": "./images/seated calves raise.jfif"
  },
  {
    "id": "standing_calves_raise",
    "name": "Standing Calf Machine Raise",
    "category": "Legs",
    "target": "Gastrocnemius (Upper Calves)",
    "sets": "4 Sets",
    "reps": "15-20 Reps",
    "notes": "Knees locked straight; full dorsiflexion stretch and plantar flexion.",
    "image": "standing calves raise.jfif",
    "image_url": "./images/standing calves raise.jfif"
  },
  {
    "id": "weighted_plank",
    "name": "Weighted Core Plank",
    "category": "Core",
    "target": "Transverse Abdominis & Deep Core",
    "sets": "4 Sets",
    "reps": "45-60 Seconds Hold",
    "notes": "Rigid bodyline from head to heels. Squeeze glutes and brace abs.",
    "image": "planks.jfif",
    "image_url": "./images/planks.jfif"
  }
];
const DEFAULT_WORKOUT_DATA = [
  {
    "day_id": "monday",
    "day_name": "MONDAY",
    "focus": "Upper Chest and Triceps",
    "accent": "#38bdf8",
    "warmup": [
      {
        "name": "Light weight shoulder press",
        "details": "2 \u00d7 20 reps (use light weight)"
      },
      {
        "name": "Flat Bench Press",
        "details": "2 \u00d7 20 reps (warm-up pump)"
      }
    ],
    "exercises": [
      {
        "num": "1",
        "name": "Flat Dumbbell Press",
        "target": "Chest (Pectoralis Major)",
        "sets": "4 Sets",
        "reps": "16, 14, 12, 10 Reps (Pyramid)",
        "notes": "Drive through the chest, maintain arch and retracted scapula.",
        "image": "Flat Dumbbel Press.jfif",
        "image_url": "./images/Flat Dumbbel Press.jfif"
      },
      {
        "num": "2",
        "name": "Incline Bench Press",
        "target": "Upper Chest (Clavicular Head)",
        "sets": "4 Sets",
        "reps": "16, 14, 12, 10 Reps",
        "notes": "30-degree incline angle. Focus on upper chest squeeze at top.",
        "image": "Incline bench press.jfif",
        "image_url": "./images/Incline bench press.jfif"
      },
      {
        "num": "3",
        "name": "Incline Dumbbell Fly",
        "target": "Upper Chest Stretch & Contraction",
        "sets": "4 Sets",
        "reps": "10-15 Reps",
        "notes": "Slight bend at elbows. Deep stretch at bottom, squeeze at peak.",
        "image": "incline dumbbell fly.jfif",
        "image_url": "./images/incline dumbbell fly.jfif"
      },
      {
        "num": "4",
        "name": "Butterfly (Pec Deck)",
        "target": "Inner & Middle Chest",
        "sets": "4 Sets",
        "reps": "10-15 Reps",
        "notes": "Keep chest high, elbows pinned slightly flared, pause at full contraction.",
        "image": "butterfly machine.jfif",
        "image_url": "./images/butterfly machine.jfif"
      },
      {
        "num": "5",
        "name": "Smith Close Grip Bench Press",
        "target": "Triceps (Lateral & Medial Heads)",
        "sets": "3 Sets",
        "reps": "10-15 Reps",
        "notes": "Shoulder-width grip. Keep elbows tucked close to torso.",
        "image": "smith close grip bench press.jfif",
        "image_url": "./images/smith close grip bench press.jfif"
      },
      {
        "num": "6",
        "name": "Skull Crusher",
        "target": "Triceps (Long Head)",
        "sets": "4 Sets",
        "reps": "10-15 Reps",
        "notes": "Lower bar toward crown/behind forehead. Keep upper arms stationary.",
        "image": "skull crushers.jfif",
        "image_url": "./images/skull crushers.jfif"
      },
      {
        "num": "7",
        "name": "Reverse Rod Triceps Curls",
        "target": "Triceps & Forearms",
        "sets": "4 Sets",
        "reps": "10-15 Reps",
        "notes": "Underhand grip on cable rod. Lock elbows and flex triceps fully.",
        "image": "reverse rod triceps curls.jfif",
        "image_url": "./images/reverse rod triceps curls.jfif"
      },
      {
        "num": "8",
        "name": "50 Push Ups",
        "target": "Chest & Triceps Burnout Finisher",
        "sets": "Burnout",
        "reps": "50 Total Reps (Break into rest-pause as needed)",
        "notes": "Strict form, chest touches 2 inches above ground.",
        "image": "push up.jfif",
        "image_url": "./images/push up.jfif"
      }
    ],
    "cardio": "15-20 mins Cardio (Moderate Steady State / Incline Walk)"
  },
  {
    "day_id": "tuesday",
    "day_name": "TUESDAY",
    "focus": "Back and Biceps",
    "accent": "#34d399",
    "warmup": [
      {
        "name": "Rotator Cuff Warm Up",
        "details": "2 \u00d7 10 each side (external/internal rotations)"
      },
      {
        "name": "Lat Pull Down",
        "details": "2 \u00d7 20 reps (light weight blood flow)"
      },
      {
        "name": "Cable Biceps Curls",
        "details": "2 \u00d7 30 reps (light pump)"
      }
    ],
    "exercises": [
      {
        "num": "1",
        "name": "Lats Pull Down",
        "target": "Upper Lats & V-Taper Width",
        "sets": "4 Sets",
        "reps": "16, 14, 12, 10 Reps (Pyramid)",
        "notes": "Pull to upper chest, drive elbows down, retract scapulae.",
        "image": "lat pull down.jfif",
        "image_url": "./images/lat pull down.jfif"
      },
      {
        "num": "2",
        "name": "Close Grip Pull Down",
        "target": "Lower Lats & Mid-Back Thickness",
        "sets": "4 Sets",
        "reps": "16, 12, 10, 8 Reps",
        "notes": "Neutral narrow V-bar attachment. Full stretch at top, pull to sternum.",
        "image": "close grip pull down.jfif",
        "image_url": "./images/close grip pull down.jfif"
      },
      {
        "num": "3",
        "name": "Iso Lateral Lat Pulldown",
        "target": "Unilateral Lat Symmetry",
        "sets": "4 Sets",
        "reps": "10-15 Reps each side",
        "notes": "Independent lever arms. Focus on deep contraction one arm at a time.",
        "image": "iso lateral lat pulldown.jfif",
        "image_url": "./images/iso lateral lat pulldown.jfif"
      },
      {
        "num": "4",
        "name": "Incline Dumbbell Bent-Over Row",
        "target": "Upper Back, Rhomboids & Rear Lats",
        "sets": "4 Sets",
        "reps": "10-15 Reps each side",
        "notes": "Chest supported on incline bench. Eliminate swinging momentum.",
        "image": "incline dumbbell bentrow.jfif",
        "image_url": "./images/incline dumbbell bentrow.jfif"
      },
      {
        "num": "5",
        "name": "Biceps Curls (Standing Dumbbell)",
        "target": "Biceps Brachii",
        "sets": "4 Sets",
        "reps": "10-15 Reps each side",
        "notes": "Supinate wrist at peak contraction. Control the negative descent.",
        "image": "biceps curl.jfif",
        "image_url": "./images/biceps curl.jfif"
      },
      {
        "num": "6",
        "name": "Preacher Biceps Curls",
        "target": "Biceps Short Head & Peak",
        "sets": "4 Sets",
        "reps": "10-12 Reps each side",
        "notes": "Upper arm locked against pad. Avoid bouncing at bottom stretch.",
        "image": "preacher bicep curl.jfif",
        "image_url": "./images/preacher bicep curl.jfif"
      },
      {
        "num": "7",
        "name": "Hammer Cable Curls",
        "target": "Brachialis & Brachioradialis",
        "sets": "4 Sets",
        "reps": "10-15 Reps each side",
        "notes": "Rope attachment, neutral palms. Builds upper arm width and grip.",
        "image": "hammer cabel curl",
        "image_url": "./images/hammer cabel curl.jpg"
      }
    ],
    "cardio": "15 mins Cardio (Stairmaster or HIIT intervals)"
  },
  {
    "day_id": "wednesday",
    "day_name": "WEDNESDAY",
    "focus": "Quads, Shoulders and Abs",
    "accent": "#f59e0b",
    "warmup": [
      {
        "name": "Free Weight Squats",
        "details": "2 \u00d7 30 reps (bodyweight mobility)"
      },
      {
        "name": "Bodyweight Lunges",
        "details": "2 \u00d7 20 reps (glute/quad dynamic warmup)"
      }
    ],
    "exercises": [
      {
        "num": "1",
        "name": "Front Squats",
        "target": "Quads & Core Stability",
        "sets": "4 Sets",
        "reps": "16, 14, 12, 10 Reps (Pyramid)",
        "notes": "Clean grip or cross-arm. Keep torso upright to maximize quad tension.",
        "image": "fornt squart.jfif",
        "image_url": "./images/fornt squart.jfif"
      },
      {
        "num": "2",
        "name": "Lunges (Walking/Static)",
        "target": "Quads, Glutes & Adductors",
        "sets": "4 Sets",
        "reps": "10-15 Reps per leg",
        "notes": "90-degree bend in front knee. Keep torso tall and core tight.",
        "image": "lunges.jfif",
        "image_url": "./images/lunges.jfif"
      },
      {
        "num": "3",
        "name": "Leg Extension",
        "target": "Quadriceps Isolation & Rectus Femoris",
        "sets": "4 Sets",
        "reps": "10-15 Reps",
        "notes": "2-second peak hold at lockout. Slow 3-second eccentric lowering.",
        "image": "leg extension.jfif",
        "image_url": "./images/leg extension.jfif"
      },
      {
        "num": "4",
        "name": "Smith Shoulder Press",
        "target": "Anterior & Lateral Deltoids",
        "sets": "4 Sets",
        "reps": "10-15 Reps",
        "notes": "Lower to chin level, press overhead without fully locking elbows.",
        "image": "smith shoulder press.jfif",
        "image_url": "./images/smith shoulder press.jfif"
      },
      {
        "num": "5",
        "name": "Upright Row",
        "target": "Lateral Delts & Upper Traps",
        "sets": "4 Sets",
        "reps": "16, 12, 10, 8 Reps",
        "notes": "Lead with elbows, keep bar close to body. Pull to mid-chest.",
        "image": "upright row.jfif",
        "image_url": "./images/upright row.jfif"
      },
      {
        "num": "6",
        "name": "Front Raises",
        "target": "Anterior Deltoids",
        "sets": "4 Sets",
        "reps": "10-15 Reps",
        "notes": "Raise to eye level with controlled cadence. Avoid swinging hips.",
        "image": "Front raises.jfif",
        "image_url": "./images/Front raises.jfif"
      },
      {
        "num": "7",
        "name": "Planks",
        "target": "Transverse Abdominis & Core Bracing",
        "sets": "4 Sets",
        "reps": "45-60 sec Hold",
        "notes": "Squeeze glutes, pack ribs down, maintain neutral cervical spine.",
        "image": "planks.jfif",
        "image_url": "./images/planks.jfif"
      }
    ],
    "abs_circuit": {
      "title": "Abs Circuit \u2014 6 Rounds in 15 Mins",
      "exercises": [
        "Lying Leg Raises \u2014 10 reps",
        "Cable Crunches \u2014 10 reps",
        "Seated Crunches \u2014 10 reps"
      ]
    }
  },
  {
    "day_id": "thursday",
    "day_name": "THURSDAY",
    "focus": "Lower Chest and Triceps",
    "accent": "#ec4899",
    "warmup": [
      {
        "name": "Rotator Cuff Movements",
        "details": "2 \u00d7 20 reps (cables/bands)"
      },
      {
        "name": "Machine Chest Press",
        "details": "2 \u00d7 20 reps (activation sets)"
      }
    ],
    "exercises": [
      {
        "num": "1",
        "name": "Flat Bench Dumbbell Press",
        "target": "Mid Chest & Overall Pectoral Mass",
        "sets": "4 Sets",
        "reps": "18, 16, 12, 10 Reps",
        "notes": "Full range of motion, flare elbows at 45 degrees, explode on press.",
        "image": "flat bench dumbell press.jfif",
        "image_url": "./images/flat bench dumbell press.jfif"
      },
      {
        "num": "2",
        "name": "Chest Press Machine",
        "target": "Pectoral Isolation",
        "sets": "3 Sets",
        "reps": "18, 16, 12 Reps",
        "notes": "Constant mechanical tension. Focus on inner pectoral squeeze.",
        "image": "chest press machine.jfif",
        "image_url": "./images/chest press machine.jfif"
      },
      {
        "num": "3",
        "name": "Decline Barbell Press",
        "target": "Lower Chest (Sternocostal Head)",
        "sets": "4 Sets",
        "reps": "18, 16, 12, 10 Reps",
        "notes": "Bar touches lower chest/inframammary fold. Great for chest thickness.",
        "image": "decline barbell press.jfif",
        "image_url": "./images/decline barbell press.jfif"
      },
      {
        "num": "4",
        "name": "SUPERSET: Decline Fly & Around The World Fly (Flat Bench)",
        "target": "Lower Chest & Full Pectoral Expansion",
        "sets": "3 Sets",
        "reps": "10 Reps each exercise back-to-back",
        "notes": "Smooth arc motion. Maintain slight elbow bend throughout.",
        "image": "decline fly.jfif",
        "image_url": "./images/decline fly.jfif"
      },
      {
        "num": "5",
        "name": "Cable Triceps Curls / Pushdowns",
        "target": "Triceps Lateral & Medial Heads",
        "sets": "4 Sets",
        "reps": "18, 16, 12, 10 Reps",
        "notes": "Pin elbows to ribs, full lockout and split cable at bottom.",
        "image": "cabel triceps curl.jfif",
        "image_url": "./images/cabel triceps curl.jfif"
      },
      {
        "num": "6",
        "name": "Overhead Dumbbell Extension / Press",
        "target": "Triceps Long Head Stretch",
        "sets": "4 Sets",
        "reps": "16, 12, 10, 10 Reps",
        "notes": "Both hands cupping dumbbell overhead. Lower deep behind head.",
        "image": "overhead dumbbell press.jfif",
        "image_url": "./images/overhead dumbbell press.jfif"
      },
      {
        "num": "7",
        "name": "Planks",
        "target": "Core Stability & Spinal Health",
        "sets": "4 Sets",
        "reps": "45-60 sec Hold",
        "notes": "Forearms grounded, pelvis tucked, active glute tension.",
        "image": "planks.jfif",
        "image_url": "./images/planks.jfif"
      }
    ],
    "cardio": "10-15 mins Cardio (Treadmill Incline Walk / Rowing Machine)"
  },
  {
    "day_id": "friday",
    "day_name": "FRIDAY",
    "focus": "Back, Traps and Biceps",
    "accent": "#a855f7",
    "warmup": [
      {
        "name": "Rotator Cuff Warm Up",
        "details": "2 \u00d7 10 each side"
      },
      {
        "name": "Lats Pull Down",
        "details": "2 \u00d7 20 reps"
      },
      {
        "name": "Cable Biceps Curls",
        "details": "2 \u00d7 30 reps"
      }
    ],
    "exercises": [
      {
        "num": "1",
        "name": "Machine Lat Pull Down",
        "target": "Upper Back & Lat Width",
        "sets": "4 Sets",
        "reps": "16, 12, 10, 8 Reps",
        "notes": "Control the stack. Squeeze shoulder blades down and back.",
        "image": "lat pull down.jfif",
        "image_url": "./images/lat pull down.jfif"
      },
      {
        "num": "2",
        "name": "Seated Cable Row",
        "target": "Mid Back, Rhomboids & Thickness",
        "sets": "4 Sets",
        "reps": "16, 14, 12, 10 Reps",
        "notes": "NEGATIVE REP SLOW (3-4 second eccentric release on every rep).",
        "image": "seated row.jfif",
        "image_url": "./images/seated row.jfif"
      },
      {
        "num": "3",
        "name": "Rack Pull",
        "target": "Erector Spinae, Traps & Posterior Chain",
        "sets": "3 Sets",
        "reps": "12 Reps",
        "notes": "Bar set just below knees. Lockout hips and drive upper back tall.",
        "image": "rack pull.jfif",
        "image_url": "./images/rack pull.jfif"
      },
      {
        "num": "4",
        "name": "Incline Dumbbell Bent-Over Row",
        "target": "Lats & Scapular Retractors",
        "sets": "4 Sets",
        "reps": "10-15 Reps",
        "notes": "3-SEC SQUEEZE AT PEAK with slow controlled rep cadence.",
        "image": "incline dumbbell bentrow.jfif",
        "image_url": "./images/incline dumbbell bentrow.jfif"
      },
      {
        "num": "5",
        "name": "Shrugs (Dumbbell or Barbell)",
        "target": "Upper Trapezius",
        "sets": "4 Sets",
        "reps": "10-15 Reps",
        "notes": "NEGATIVE REP SLOW. Direct vertical elevation, no shoulder rolling.",
        "image": "shrugs.jfif",
        "image_url": "./images/shrugs.jfif"
      },
      {
        "num": "6",
        "name": "SUPERSET: Upright Row & Reverse Fly",
        "target": "Traps, Lateral Delts & Rear Deltoids",
        "sets": "4 Sets",
        "reps": "10 Reps each movement back-to-back",
        "notes": "Seamless transition. Maximizes 3D shoulder & trap definition.",
        "image": "upright row and reverse fly.jfif",
        "image_url": "./images/upright row and reverse fly.jfif"
      },
      {
        "num": "7",
        "name": "SUPERSET: Wall Biceps Curls & Concentration Biceps Curls",
        "target": "Biceps Full Peak & Strict Isolation",
        "sets": "Failure Protocol",
        "reps": "15 mins continuous failure sets with 30-45 sec rest intervals",
        "notes": "Back pinned against wall prevents any swing. Pure bicep exhaustion.",
        "image": "wall biceps curl.jfif",
        "image_url": "./images/wall biceps curl.jfif"
      }
    ],
    "cardio": "15 mins Cardio (Moderate Intensity Cycling / Elliptical)"
  },
  {
    "day_id": "saturday",
    "day_name": "SATURDAY",
    "focus": "Hamstrings, Glutes and Calves",
    "accent": "#06b6d4",
    "warmup": [
      {
        "name": "Cycling Warm-up",
        "details": "10 mins low-resistance cycling"
      },
      {
        "name": "Bodyweight Lunges",
        "details": "2 \u00d7 20 reps"
      },
      {
        "name": "Bodyweight Squats",
        "details": "2 \u00d7 20 reps"
      }
    ],
    "exercises": [
      {
        "num": "1",
        "name": "Wide Grip Leg Press",
        "target": "Hamstrings, Adductors & Glutes",
        "sets": "5 Sets",
        "reps": "20, 16, 14, 12, 10 Reps (Heavy Pyramid)",
        "notes": "High and wide foot placement shifts load directly to hamstrings/glutes.",
        "image": "wide grip leg press.jfif",
        "image_url": "./images/wide grip leg press.jfif"
      },
      {
        "num": "2",
        "name": "SUPERSET: Bodyweight Lunges & Hamstring Curls",
        "target": "Glutes & Hamstring Biceps Femoris",
        "sets": "4 Sets",
        "reps": "10-15 Reps each back-to-back",
        "notes": "Perform lunges then go directly to machine hamstring curl pad.",
        "image": "hamstring curl.jfif",
        "image_url": "./images/hamstring curl.jfif"
      },
      {
        "num": "3",
        "name": "Goblet Squats (Bench Supported)",
        "target": "Quads, Glutes & Adductors",
        "sets": "4 Sets",
        "reps": "12 Reps",
        "notes": "Tap bench gently at bottom depth for consistent range of motion.",
        "image": "goblet squats.jfif",
        "image_url": "./images/goblet squats.jfif"
      },
      {
        "num": "4",
        "name": "Glute Bridge",
        "target": "Gluteus Maximus Isolation",
        "sets": "4 Sets",
        "reps": "16, 14, 12, 10 Reps",
        "notes": "Drive through heels, squeeze glutes hard for 2 seconds at top.",
        "image": "glute bridge.jfif",
        "image_url": "./images/glute bridge.jfif"
      },
      {
        "num": "5",
        "name": "Seated Calves Raises",
        "target": "Soleus (Deep Calf Muscle)",
        "sets": "4 Sets",
        "reps": "10-15 Reps",
        "notes": "Full deep stretch at bottom, explosive rise onto balls of feet.",
        "image": "seated calves raise.jfif",
        "image_url": "./images/seated calves raise.jfif"
      },
      {
        "num": "6",
        "name": "Standing Calves Raise",
        "target": "Gastrocnemius (Calf Diamond)",
        "sets": "4 Sets",
        "reps": "10-15 Reps",
        "notes": "Knees straight but not hyperextended. 2-second stretch pause.",
        "image": "standing calves raise.jfif",
        "image_url": "./images/standing calves raise.jfif"
      },
      {
        "num": "7",
        "name": "Planks",
        "target": "Core Stability & Hip Alignment",
        "sets": "4 Sets",
        "reps": "45-60 sec Hold",
        "notes": "Lock core, brace stomach against spine.",
        "image": "planks.jfif",
        "image_url": "./images/planks.jfif"
      }
    ],
    "abs_circuit": {
      "title": "Abs Circuit \u2014 6 Rounds in 15 Mins",
      "exercises": [
        "Lying Down Leg Raises \u2014 15 reps",
        "Normal Crunches \u2014 15 reps",
        "Cable Side Bend \u2014 15 reps each side"
      ]
    }
  }
];

let WORKOUT_DATA = [];
let selectedDayIndex = 0;
let activeSession = null;
let sessionTimerInterval = null;
let currentCategoryFilter = 'All';

// Exercise Timer & Stopwatch
let exTimerMode = 'stopwatch';
let exTimerInterval = null;
let exTimerRunning = false;
let exTimerElapsedMs = 0;
let exTimerCountdownTotalSec = 45;
let exTimerCountdownRemainMs = 45000;
let exTimersMemory = {};

// Calendar
let calendarCurrentYear = new Date().getFullYear();
let calendarCurrentMonth = new Date().getMonth();
let calendarSelectedDateStr = new Date().toISOString().split('T')[0];

// Native Android Bridge Interface
function notifyAndroidStart(dayName, focus) {
  if (window.AndroidBridge && window.AndroidBridge.startBackgroundTracking) {
    try { window.AndroidBridge.startBackgroundTracking(dayName, focus); } catch(e) {}
  }
}
function notifyAndroidUpdate(exName, curSet, totalSets) {
  if (window.AndroidBridge && window.AndroidBridge.updateProgress) {
    try { window.AndroidBridge.updateProgress(exName, curSet, totalSets); } catch(e) {}
  }
}
function notifyAndroidStop() {
  if (window.AndroidBridge && window.AndroidBridge.stopBackgroundTracking) {
    try { window.AndroidBridge.stopBackgroundTracking(); } catch(e) {}
  }
}
function notifyAndroidVibrate(ms) {
  if (window.AndroidBridge && window.AndroidBridge.vibratePhone) {
    try { window.AndroidBridge.vibratePhone(ms); } catch(e) {}
  }
}

// Synthesized Audio
let audioCtx = null;
function getAudio() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  }
  return audioCtx;
}
function beep(freq = 600, dur = 0.1) {
  const soundOn = document.getElementById('settingSound')?.checked ?? true;
  if (!soundOn) return;
  try {
    const ctx = getAudio();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0.2, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + dur);
  } catch(e) {}
}
function vibrate(pattern = [80]) {
  const vibOn = document.getElementById('settingVibrate')?.checked ?? true;
  if (vibOn) {
    notifyAndroidVibrate(Array.isArray(pattern) ? pattern[0] : pattern);
    if (navigator.vibrate) {
      try { navigator.vibrate(pattern); } catch(e) {}
    }
  }
}

// Battery-Aware 3D Space Background
function init3DParticleCanvas() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const count = 42;
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: (Math.random() - 0.5) * 700,
      y: (Math.random() - 0.5) * 700,
      z: (Math.random() - 0.5) * 700,
      size: Math.random() * 2 + 1
    });
  }

  let rotX = 0, rotY = 0;
  function animate() {
    ctx.clearRect(0, 0, w, h);
    rotX += 0.001;
    rotY += 0.0015;

    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const cx = w / 2, cy = h / 2, fov = 350;
    const themeColor = getComputedStyle(document.body).getPropertyValue('--accent-primary').trim() || '#00f0ff';
    const projected = [];

    particles.forEach(p => {
      let x1 = p.x * cosY - p.z * sinY;
      let z1 = p.z * cosY + p.x * sinY;
      let y1 = p.y * cosX - z1 * sinX;
      let z2 = z1 * cosX + p.y * sinX;

      const depth = z2 + 450;
      if (depth > 20) {
        const scale = fov / depth;
        const px = cx + x1 * scale;
        const py = cy + y1 * scale;
        const r = Math.max(0.6, p.size * scale * 1.4);
        const alpha = Math.min(0.8, Math.max(0.08, scale * 0.85));

        projected.push({ x: px, y: py });

        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = themeColor;
        ctx.globalAlpha = alpha;
        ctx.fill();
      }
    });

    // Proximity wire lines
    ctx.strokeStyle = themeColor;
    for (let i = 0; i < projected.length; i++) {
      for (let j = i + 1; j < projected.length; j++) {
        const dx = projected[i].x - projected[j].x;
        const dy = projected[i].y - projected[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 65) {
          ctx.beginPath();
          ctx.moveTo(projected[i].x, projected[i].y);
          ctx.lineTo(projected[j].x, projected[j].y);
          ctx.globalAlpha = (1 - dist / 65) * 0.12;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }
  animate();
}

// Confetti Celebration
function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;
  const pieces = [];
  const colors = ['#00f0ff', '#7928ca', '#00ff88', '#ffd700', '#d946ef', '#ff1744', '#ffffff'];
  for (let i = 0; i < 90; i++) {
    pieces.push({
      x: w / 2, y: h / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.8) * 14,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      dRot: (Math.random() - 0.5) * 12,
      life: 1
    });
  }
  function update() {
    ctx.clearRect(0, 0, w, h);
    let alive = false;
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.35;
      p.rotation += p.dRot; p.life -= 0.015;
      if (p.life > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();
      }
    });
    if (alive) requestAnimationFrame(update);
    else { ctx.clearRect(0, 0, w, h); canvas.style.display = 'none'; }
  }
  update();
}

// Load & Save Data
function loadWorkoutData() {
  const saved = localStorage.getItem('planfit_custom_workout_data') || localStorage.getItem('apex_custom_workout_data');
  if (saved) {
    try { WORKOUT_DATA = JSON.parse(saved); return; } catch(e) {}
  }
  WORKOUT_DATA = JSON.parse(JSON.stringify(DEFAULT_WORKOUT_DATA));
}
function saveWorkoutData() {
  localStorage.setItem('planfit_custom_workout_data', JSON.stringify(WORKOUT_DATA));
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadWorkoutData();
  init3DParticleCanvas();
  renderDayChips();
  selectDay(0);
  loadSettings();
  renderCalendar();
  renderWeeklyScheduler();
  renderHistory();
  renderExerciseLibrary();
  updateHudTelemetry();
  renderPrHallOfFame();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});

// Theme Switcher
function changeTheme(themeName) {
  document.body.setAttribute('data-theme', themeName);
  const sel1 = document.getElementById('headerThemePicker');
  const sel2 = document.getElementById('settingTheme');
  if (sel1) sel1.value = themeName;
  if (sel2) sel2.value = themeName;
  localStorage.setItem('planfit_theme', themeName);
}

// Navigation Switcher
function switchNav(tabId) {
  document.querySelectorAll('.tab-view').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');

  const navs = Array.from(document.querySelectorAll('.nav-item'));
  const ids = ['tabWorkouts', 'tabRunner', 'tabCalendar', 'tabAnalytics', 'tabHistory', 'tabSettings'];
  const idx = ids.indexOf(tabId);
  if (idx !== -1 && navs[idx]) navs[idx].classList.add('active');

  const stickyBanner = document.getElementById('stickyWorkoutBanner');
  if (stickyBanner) {
    stickyBanner.style.display = (activeSession && tabId !== 'tabRunner') ? 'flex' : 'none';
  }

  if (tabId === 'tabHistory') renderHistory();
  if (tabId === 'tabAnalytics') { renderGraphs(); renderPrHallOfFame(); }
  if (tabId === 'tabCalendar') { renderCalendar(); renderWeeklyScheduler(); }
  if (tabId === 'tabWorkouts') updateHudTelemetry();
}

// Header Timer Click Handler
function handleHeaderTimerClick() {
  if (activeSession) {
    switchNav('tabRunner');
  } else {
    // If not in session, switch to runner to access stopwatch/timer controls
    switchNav('tabRunner');
    showAppToast('⏱️ Dedicated Exercise Timer & Stopwatch ready');
  }
}

// HUD Telemetry Update
function updateHudTelemetry() {
  const history = JSON.parse(localStorage.getItem('planfit_history') || localStorage.getItem('apex_history') || '[]');
  
  // Weekly Volume
  const totalVol = history.reduce((sum, h) => sum + (h.totalVolume || 0), 0);
  const volFormatted = totalVol === 0 ? '0 kg' : (totalVol > 1000 ? `${(totalVol / 1000).toFixed(1)}k` : `${totalVol} kg`);
  const volEl = document.getElementById('hudWeeklyVolVal');
  if (volEl) volEl.textContent = volFormatted;

  // Streak
  const streakEl = document.getElementById('hudStreakVal');
  if (streakEl) {
    if (history.length === 0) {
      streakEl.textContent = '0 Days';
    } else {
      const daysSet = new Set(history.map(h => new Date(h.timestamp || Date.now()).toDateString()));
      streakEl.textContent = `${daysSet.size} Day${daysSet.size === 1 ? '' : 's'}`;
    }
  }

  // Readiness HUD
  const readinessEl = document.getElementById('hudReadinessVal');
  if (readinessEl) {
    if (history.length === 0) {
      readinessEl.textContent = '100%';
      readinessEl.style.color = 'var(--accent-emerald)';
    } else {
      const recent = history.slice(-3);
      const avgVol = recent.reduce((s, h) => s + (h.totalVolume || 0), 0) / (recent.length || 1);
      const score = Math.max(72, Math.min(99, Math.round(100 - (avgVol / 1200))));
      readinessEl.textContent = `${score}%`;
      readinessEl.style.color = score > 85 ? 'var(--accent-emerald)' : 'var(--accent-amber)';
    }
  }

  const day = WORKOUT_DATA[selectedDayIndex];
  if (day) {
    const todaySplitTitle = document.getElementById('hudTodaySplitTitle');
    if (todaySplitTitle) todaySplitTitle.textContent = day.focus;
    const todaySplitMeta = document.getElementById('hudTodaySplitMeta');
    if (todaySplitMeta) todaySplitMeta.textContent = `${day.exercises.length} Exercises • Overload Target Active`;
  }
}

// WORKOUT TABS / CHIPS
function renderDayChips() {
  const container = document.getElementById('daysChipsContainer');
  container.innerHTML = '';
  
  WORKOUT_DATA.forEach((d, i) => {
    const chip = document.createElement('div');
    chip.className = `day-chip ${i === selectedDayIndex ? 'active' : ''}`;
    chip.id = `chip-${i}`;
    chip.innerHTML = `
      <span class="chip-name">${d.day_name.slice(0, 3)}</span>
      <span style="font-size:0.68rem; color:var(--text-muted);">${d.day_name === 'WEDNESDAY' || d.day_name === 'SATURDAY' ? 'Legs' : (d.day_name === 'MONDAY' || d.day_name === 'THURSDAY' ? 'Chest' : 'Back')}</span>
    `;
    chip.onclick = () => selectDay(i);
    container.appendChild(chip);
  });
}

function selectDay(index) {
  selectedDayIndex = index;
  document.querySelectorAll('.day-chip').forEach(c => c.classList.remove('active'));
  const currentChip = document.getElementById(`chip-${index}`);
  if (currentChip) currentChip.classList.add('active');

  const day = WORKOUT_DATA[index];
  document.getElementById('routineBadge').textContent = `${day.day_name} ROUTINE`;
  document.getElementById('routineBadge').style.background = `${day.accent}22`;
  document.getElementById('routineBadge').style.color = day.accent;
  document.getElementById('routineTitle').textContent = day.focus;
  document.getElementById('routineMeta').textContent = `${day.exercises.length} Exercises • Overload Engine Active`;
  document.getElementById('previewExCount').textContent = day.exercises.length;

  updateHudTelemetry();

  // Render Warm-up
  const wuContainer = document.getElementById('warmupList');
  wuContainer.innerHTML = '';
  (day.warmup || []).forEach(w => {
    const item = document.createElement('div');
    item.style.cssText = 'background:rgba(255,255,255,0.04); border:1px solid var(--border-subtle); padding:6px 10px; border-radius:8px; font-size:0.78rem;';
    item.innerHTML = `<strong>${w.name}:</strong> ${w.details}`;
    wuContainer.appendChild(item);
  });

  // Render Exercise Preview List
  const list = document.getElementById('exercisePreviewList');
  list.innerHTML = '';
  day.exercises.forEach((ex, idx) => {
    const item = document.createElement('div');
    item.className = 'ex-preview-item';
    item.innerHTML = `
      <img src="${ex.image_url}" class="ex-preview-thumb" alt="${ex.name}" loading="lazy" onerror="this.src='./icon-192.png'">
      <div class="ex-preview-info">
        <div class="ex-preview-title">#${idx + 1} ${ex.name}</div>
        <div class="ex-preview-sub">${ex.target}</div>
      </div>
      <div class="ex-preview-pill">${ex.sets || '4 Sets'}</div>
      <button class="btn-remove-ex" onclick="removeExerciseFromRoutine(${idx})" title="Remove exercise">✕</button>
    `;
    list.appendChild(item);
  });
}

function removeExerciseFromRoutine(exIndex) {
  const day = WORKOUT_DATA[selectedDayIndex];
  if (day.exercises.length <= 1) {
    alert("Routine must have at least one exercise.");
    return;
  }
  if (confirm(`Remove "${day.exercises[exIndex].name}" from ${day.day_name} routine?`)) {
    day.exercises.splice(exIndex, 1);
    saveWorkoutData();
    selectDay(selectedDayIndex);
  }
}

// ========================================================
// WORKOUT SESSION RUNNER WITH RAPID SET BUMPERS & 1RM
// ========================================================
function startCurrentRoutine() {
  const day = WORKOUT_DATA[selectedDayIndex];
  activeSession = {
    dayIndex: selectedDayIndex,
    startTime: Date.now(),
    exIndex: 0,
    logs: {}
  };

  day.exercises.forEach((ex, exIdx) => {
    activeSession.logs[exIdx] = [];
    const numSets = parseInt(ex.sets) || 4;
    for (let s = 1; s <= numSets; s++) {
      activeSession.logs[exIdx].push({
        setNum: s,
        weight: '30',
        reps: '12',
        completed: false,
        tut: ''
      });
    }
  });

  notifyAndroidStart(day.day_name, day.focus);

  const stInd = document.getElementById('workoutStatusIndicator'); if (stInd) stInd.classList.add('active-running');
  document.getElementById('stickyBannerTitle').textContent = day.focus;
  
  if (sessionTimerInterval) clearInterval(sessionTimerInterval);
  sessionTimerInterval = setInterval(updateSessionTimer, 1000);

  switchNav('tabRunner');
  loadActiveExercise(0);
}

function updateSessionTimer() {
  if (!activeSession) return;
  const elapsed = Math.floor((Date.now() - activeSession.startTime) / 1000);
  const m = Math.floor(elapsed / 60).toString().padStart(2, '0');
  const s = (elapsed % 60).toString().padStart(2, '0');
  document.getElementById('headerTimer').textContent = `${m}:${s}`;
  document.getElementById('runnerElapsed').textContent = `${m}:${s}`;
  const sbTime = document.getElementById('stickyBannerTime');
  if (sbTime) sbTime.textContent = `${m}:${s}`;
}

function loadActiveExercise(exIndex) {
  if (!activeSession) return;
  activeSession.exIndex = exIndex;
  const day = WORKOUT_DATA[activeSession.dayIndex];
  const ex = day.exercises[exIndex];

  document.getElementById('runnerExImg').src = ex.image_url;
  document.getElementById('runnerExNum').textContent = `#${exIndex + 1} / ${day.exercises.length}`;
  document.getElementById('runnerExTitle').textContent = ex.name;
  document.getElementById('runnerExTarget').textContent = ex.target;
  document.getElementById('runnerExCues').innerHTML = `💡 <strong>${ex.sets || '4 Sets'} • ${ex.reps || '10-12 Reps'}</strong><br>${ex.notes || 'Control eccentric tempo and squeeze at peak contraction.'}`;

  notifyAndroidUpdate(ex.name, exIndex + 1, day.exercises.length);

  const pct = Math.round(((exIndex + 1) / day.exercises.length) * 100);
  document.getElementById('runnerProgressFill').style.width = pct + '%';

  // Render Set Cards with Quick Bumps
  const container = document.getElementById('runnerSetsContainer');
  container.innerHTML = '';
  const setLogs = activeSession.logs[exIndex] || [];

  setLogs.forEach((sLog, sIdx) => {
    const row = document.createElement('div');
    row.className = 'set-card-row';

    // Calculate Estimated 1RM
    const w = parseFloat(sLog.weight) || 0;
    const r = parseFloat(sLog.reps) || 0;
    const est1rm = Math.round(w * (1 + r / 30));

    row.innerHTML = `
      <div class="set-row-top">
        <div class="set-badge-tag">SET ${sLog.setNum}</div>
        <div class="set-prev-target">Target: ${(ex.reps || '10-12').split(' ')[0]} • Est 1RM: ${est1rm}kg</div>
      </div>
      <div class="set-inputs-grid">
        <div class="input-group-col">
          <div class="input-mini-label">Weight (kg)</div>
          <input type="number" class="set-input-box" id="inputW_${exIndex}_${sIdx}" value="${sLog.weight}" onchange="updateSetData(${exIndex}, ${sIdx}, 'weight', this.value)">
          <div class="weight-bump-row">
            <button class="btn-weight-bump" onclick="bumpWeight(${exIndex}, ${sIdx}, -5)">-5</button>
            <button class="btn-weight-bump" onclick="bumpWeight(${exIndex}, ${sIdx}, -2.5)">-2.5</button>
            <button class="btn-weight-bump" onclick="bumpWeight(${exIndex}, ${sIdx}, 2.5)">+2.5</button>
            <button class="btn-weight-bump" onclick="bumpWeight(${exIndex}, ${sIdx}, 5)">+5</button>
          </div>
        </div>
        <div class="input-group-col">
          <div class="input-mini-label">Reps</div>
          <input type="number" class="set-input-box" id="inputR_${exIndex}_${sIdx}" value="${sLog.reps}" onchange="updateSetData(${exIndex}, ${sIdx}, 'reps', this.value)">
          <div class="weight-bump-row">
            <button class="btn-weight-bump" onclick="bumpReps(${exIndex}, ${sIdx}, -1)">-1</button>
            <button class="btn-weight-bump" onclick="bumpReps(${exIndex}, ${sIdx}, 1)">+1</button>
          </div>
        </div>
        <button class="btn-complete-set ${sLog.completed ? 'completed' : ''}" onclick="toggleSetComplete(${exIndex}, ${sIdx})">
          ${sLog.completed ? '✓ LOGGED' : 'LOG SET'}
        </button>
      </div>
    `;
    container.appendChild(row);
  });

  loadExerciseTimerForCurrentEx(exIndex);
}

function bumpWeight(exIdx, sIdx, delta) {
  if (!activeSession) return;
  const sLog = activeSession.logs[exIdx][sIdx];
  const cur = parseFloat(sLog.weight) || 0;
  const next = Math.max(0, cur + delta);
  sLog.weight = String(next);
  const el = document.getElementById(`inputW_${exIdx}_${sIdx}`);
  if (el) el.value = sLog.weight;
  loadActiveExercise(exIdx);
}

function bumpReps(exIdx, sIdx, delta) {
  if (!activeSession) return;
  const sLog = activeSession.logs[exIdx][sIdx];
  const cur = parseInt(sLog.reps) || 0;
  const next = Math.max(1, cur + delta);
  sLog.reps = String(next);
  const el = document.getElementById(`inputR_${exIdx}_${sIdx}`);
  if (el) el.value = sLog.reps;
  loadActiveExercise(exIdx);
}

function updateSetData(exIdx, sIdx, field, val) {
  if (activeSession && activeSession.logs[exIdx]) {
    activeSession.logs[exIdx][sIdx][field] = val;
  }
}

function toggleSetComplete(exIdx, sIdx) {
  if (!activeSession) return;
  const sLog = activeSession.logs[exIdx][sIdx];
  sLog.completed = !sLog.completed;
  
  if (sLog.completed) {
    beep(750, 0.15);
    vibrate([80, 50, 80]);
    startRestTimer(45);
  }
  loadActiveExercise(exIdx);
}

function prevExercise() {
  if (!activeSession || activeSession.exIndex <= 0) return;
  saveExerciseTimerForCurrentEx(activeSession.exIndex);
  loadActiveExercise(activeSession.exIndex - 1);
}

function nextExercise() {
  if (!activeSession) return;
  const day = WORKOUT_DATA[activeSession.dayIndex];
  if (activeSession.exIndex >= day.exercises.length - 1) {
    if (confirm("All exercises completed! Finish workout session now?")) {
      finishWorkout();
    }
    return;
  }
  saveExerciseTimerForCurrentEx(activeSession.exIndex);
  loadActiveExercise(activeSession.exIndex + 1);
}

function finishWorkout() {
  if (!activeSession) return;
  notifyAndroidStop();
  if (sessionTimerInterval) clearInterval(sessionTimerInterval);
  if (exTimerInterval) clearInterval(exTimerInterval);

  const durationMin = Math.max(1, Math.round((Date.now() - activeSession.startTime) / 60000));
  const day = WORKOUT_DATA[activeSession.dayIndex];
  
  let totalSetsDone = 0;
  let totalVolume = 0;
  Object.values(activeSession.logs).forEach(sets => {
    sets.forEach(s => {
      if (s.completed) {
        totalSetsDone++;
        const w = parseFloat(s.weight) || 0;
        const r = parseFloat(s.reps) || 0;
        totalVolume += w * r;
      }
    });
  });

  const todayStr = new Date().toISOString().split('T')[0];
  const historyItem = {
    id: Date.now(),
    date: todayStr,
    dayName: day.day_name,
    focus: day.focus,
    durationMin: durationMin,
    setsCompleted: totalSetsDone,
    totalVolume: Math.round(totalVolume)
  };

  const history = JSON.parse(localStorage.getItem('planfit_history') || localStorage.getItem('apex_history') || '[]');
  history.unshift(historyItem);
  localStorage.setItem('planfit_history', JSON.stringify(history));

  triggerConfetti();
  beep(880, 0.3);
  vibrate([120, 80, 150]);

  activeSession = null;
  const stInd = document.getElementById('workoutStatusIndicator'); if (stInd) stInd.classList.remove('active-running'); const ht = document.getElementById('headerTimer'); if (ht) ht.textContent = '00:00';
  const stickyBanner = document.getElementById('stickyWorkoutBanner');
  if (stickyBanner) stickyBanner.style.display = 'none';

  alert(`🎉 MISSION COMPLETE!\n\n🔥 ${day.focus}\n⏱ ${durationMin} Minutes\n🏋️ ${totalSetsDone} Sets Logged\n⚡ ${Math.round(totalVolume)} kg Total Volume!`);

  switchNav('tabAnalytics');
}

// ========================================================
// EXERCISE TIMER ENGINE
// ========================================================
function setTimerMode(mode) {
  exTimerMode = mode;
  document.getElementById('btnModeStopwatch').classList.toggle('active', mode === 'stopwatch');
  document.getElementById('btnModeCountdown').classList.toggle('active', mode === 'countdown');
  
  const presetsRow = document.getElementById('timerPresetsRow');
  const subLabel = document.getElementById('timerSubLabel');
  if (mode === 'countdown') {
    presetsRow.style.display = 'flex';
    subLabel.textContent = `Countdown Target: ${exTimerCountdownTotalSec}s`;
  } else {
    presetsRow.style.display = 'none';
    subLabel.textContent = 'Time Under Tension (TUT)';
  }
  resetExerciseTimer();
}

function setTimerDuration(seconds) {
  exTimerCountdownTotalSec = seconds;
  exTimerCountdownRemainMs = seconds * 1000;
  document.querySelectorAll('.timer-preset-pill').forEach(p => {
    p.classList.toggle('active', p.textContent === `${seconds}s`);
  });
  document.getElementById('timerSubLabel').textContent = `Countdown Target: ${seconds}s`;
  resetExerciseTimer();
}

function toggleExerciseTimer() {
  if (exTimerRunning) pauseExerciseTimer();
  else startExerciseTimer();
}

function startExerciseTimer() {
  if (exTimerRunning) return;
  exTimerRunning = true;
  document.getElementById('btnTimerToggle').textContent = '⏸ Pause';
  document.getElementById('timerStatusBadge').textContent = '• RUNNING';
  document.getElementById('timerStatusBadge').style.color = 'var(--accent-emerald)';

  const startTime = Date.now() - (exTimerMode === 'stopwatch' ? exTimerElapsedMs : (exTimerCountdownTotalSec * 1000 - exTimerCountdownRemainMs));

  exTimerInterval = setInterval(() => {
    const now = Date.now();
    if (exTimerMode === 'stopwatch') {
      exTimerElapsedMs = now - startTime;
      updateExerciseTimerDisplay();
    } else {
      const passed = now - startTime;
      exTimerCountdownRemainMs = Math.max(0, exTimerCountdownTotalSec * 1000 - passed);
      updateExerciseTimerDisplay();

      if (exTimerCountdownRemainMs <= 0) {
        pauseExerciseTimer();
        beep(880, 0.4);
        vibrate([200, 100, 200, 100, 300]);
        document.getElementById('timerStatusBadge').textContent = '⚡ TIME UP!';
        document.getElementById('timerStatusBadge').style.color = 'var(--accent-rose)';
      }
    }
  }, 100);
}

function pauseExerciseTimer() {
  exTimerRunning = false;
  if (exTimerInterval) clearInterval(exTimerInterval);
  document.getElementById('btnTimerToggle').textContent = '▶ Resume';
  document.getElementById('timerStatusBadge').textContent = '• PAUSED';
  document.getElementById('timerStatusBadge').style.color = 'var(--accent-amber)';
}

function resetExerciseTimer() {
  pauseExerciseTimer();
  document.getElementById('btnTimerToggle').textContent = '▶ Start Timer';
  document.getElementById('timerStatusBadge').textContent = '• READY';
  document.getElementById('timerStatusBadge').style.color = 'var(--accent-emerald)';

  if (exTimerMode === 'stopwatch') exTimerElapsedMs = 0;
  else exTimerCountdownRemainMs = exTimerCountdownTotalSec * 1000;
  updateExerciseTimerDisplay();
}

function updateExerciseTimerDisplay() {
  let totalSec, tenths, ringPct;
  const circle = document.getElementById('timerRingCircle');
  const circumference = 2 * Math.PI * 40;

  if (exTimerMode === 'stopwatch') {
    totalSec = Math.floor(exTimerElapsedMs / 1000);
    tenths = Math.floor((exTimerElapsedMs % 1000) / 100);
    ringPct = (totalSec % 60) / 60;
  } else {
    totalSec = Math.ceil(exTimerCountdownRemainMs / 1000);
    tenths = 0;
    ringPct = exTimerCountdownRemainMs / (exTimerCountdownTotalSec * 1000);
  }

  const m = Math.floor(totalSec / 60).toString().padStart(2, '0');
  const s = (totalSec % 60).toString().padStart(2, '0');

  const digital = document.getElementById('timerDigitalClock');
  const ringInner = document.getElementById('timerRingDisplay');

  if (exTimerMode === 'stopwatch') {
    digital.textContent = `${m}:${s}.${tenths}`;
    ringInner.textContent = `${m}:${s}`;
  } else {
    digital.textContent = `${m}:${s}`;
    ringInner.textContent = `${s}s`;
  }

  const offset = circumference * (1 - ringPct);
  if (circle) circle.style.strokeDashoffset = offset;
}

function recordTutToActiveSet() {
  if (!activeSession) return;
  const exIdx = activeSession.exIndex;
  const setLogs = activeSession.logs[exIdx] || [];
  let targetSet = setLogs.find(s => !s.completed) || setLogs[setLogs.length - 1];
  if (targetSet) {
    const totalSec = Math.round(exTimerElapsedMs / 1000);
    targetSet.tut = `${totalSec}s`;
    vibrate([60]);
    alert(`Recorded ${totalSec}s Time Under Tension to Set ${targetSet.setNum}!`);
  }
}

function saveExerciseTimerForCurrentEx(exIdx) {
  exTimersMemory[exIdx] = {
    mode: exTimerMode,
    elapsedMs: exTimerElapsedMs,
    countdownSec: exTimerCountdownTotalSec,
    countdownRemainMs: exTimerCountdownRemainMs
  };
  if (exTimerInterval) clearInterval(exTimerInterval);
  exTimerRunning = false;
}

function loadExerciseTimerForCurrentEx(exIdx) {
  if (exTimerInterval) clearInterval(exTimerInterval);
  exTimerRunning = false;

  const mem = exTimersMemory[exIdx];
  if (mem) {
    exTimerMode = mem.mode;
    exTimerElapsedMs = mem.elapsedMs;
    exTimerCountdownTotalSec = mem.countdownSec;
    exTimerCountdownRemainMs = mem.countdownRemainMs;
  } else {
    exTimerElapsedMs = 0;
    exTimerCountdownRemainMs = exTimerCountdownTotalSec * 1000;
  }
  setTimerMode(exTimerMode);
  updateExerciseTimerDisplay();
}

// REST TIMER
let restTimerSec = 45;
let restInterval = null;
function startRestTimer(seconds = 45) {
  restTimerSec = seconds;
  const overlay = document.getElementById('restModalOverlay');
  overlay.classList.add('active');
  updateRestDisplay();

  if (restInterval) clearInterval(restInterval);
  restInterval = setInterval(() => {
    restTimerSec--;
    updateRestDisplay();
    if (restTimerSec <= 0) {
      skipRest();
      beep(880, 0.2);
      vibrate([150, 80, 150]);
    }
  }, 1000);
}

function updateRestDisplay() {
  const m = Math.floor(restTimerSec / 60).toString().padStart(2, '0');
  const s = (restTimerSec % 60).toString().padStart(2, '0');
  document.getElementById('restCountdown').textContent = `${m}:${s}`;
}

function addRestTime(sec) {
  restTimerSec = Math.max(5, restTimerSec + sec);
  updateRestDisplay();
}

function skipRest() {
  if (restInterval) clearInterval(restInterval);
  document.getElementById('restModalOverlay').classList.remove('active');
}

// ========================================================
// EFFORTLESS WEEKLY SCHEDULER & CALENDAR COMMAND
// ========================================================
function renderWeeklyScheduler() {
  const container = document.getElementById('weeklyScheduleRows');
  if (!container) return;
  container.innerHTML = '';

  const dayNames = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
  const todayIdx = (new Date().getDay() + 6) % 7; // Monday = 0

  dayNames.forEach((dName, idx) => {
    const row = document.createElement('div');
    row.className = `schedule-day-row ${idx === todayIdx ? 'today' : ''}`;

    const currentAssigned = WORKOUT_DATA[idx % WORKOUT_DATA.length] || WORKOUT_DATA[0];

    row.innerHTML = `
      <div class="schedule-day-name">${dName.slice(0, 3)}</div>
      <select class="schedule-routine-select" onchange="reassignDayRoutine(${idx}, this.value)">
        ${WORKOUT_DATA.map((r, rIdx) => `
          <option value="${rIdx}" ${rIdx === (idx % WORKOUT_DATA.length) ? 'selected' : ''}>
            ${r.focus}
          </option>
        `).join('')}
        <option value="rest" ${idx === 6 ? 'selected' : ''}>Active Recovery / Rest</option>
      </select>
    `;
    container.appendChild(row);
  });
}

function reassignDayRoutine(dayIdx, routineIdx) {
  if (routineIdx === 'rest') {
    alert("Assigned Active Recovery / Rest to this day!");
    return;
  }
  vibrate([60]);
  renderCalendar();
  alert("Routine schedule updated successfully!");
}

function renderCalendar() {
  const grid = document.getElementById('calendarDaysGrid');
  grid.innerHTML = '';

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  document.getElementById('calendarMonthTitle').textContent = `${monthNames[calendarCurrentMonth]} ${calendarCurrentYear}`;

  const firstDayOfMonth = new Date(calendarCurrentYear, calendarCurrentMonth, 1);
  const daysInMonth = new Date(calendarCurrentYear, calendarCurrentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(calendarCurrentYear, calendarCurrentMonth, 0).getDate();

  let startDayOfWeek = firstDayOfMonth.getDay() - 1;
  if (startDayOfWeek === -1) startDayOfWeek = 6;

  const history = JSON.parse(localStorage.getItem('planfit_history') || localStorage.getItem('apex_history') || '[]');
  const todayStr = new Date().toISOString().split('T')[0];

  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const cell = document.createElement('div');
    cell.className = 'cal-day-cell';
    cell.style.opacity = '0.25';
    cell.textContent = daysInPrevMonth - i;
    grid.appendChild(cell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement('div');
    const mStr = (calendarCurrentMonth + 1).toString().padStart(2, '0');
    const dStr = day.toString().padStart(2, '0');
    const dateStr = `${calendarCurrentYear}-${mStr}-${dStr}`;

    cell.className = 'cal-day-cell';
    cell.textContent = day;

    if (dateStr === todayStr) cell.classList.add('today');
    if (dateStr === calendarSelectedDateStr) cell.classList.add('selected');

    const completed = history.find(h => h.date === dateStr);
    if (completed) {
      cell.classList.add('has-completed');
      const dot = document.createElement('div');
      dot.className = 'cal-day-dot completed';
      cell.appendChild(dot);
    } else {
      const dow = new Date(calendarCurrentYear, calendarCurrentMonth, day).getDay();
      if (dow >= 1 && dow <= 6) {
        const dot = document.createElement('div');
        dot.className = 'cal-day-dot scheduled';
        cell.appendChild(dot);
      }
    }

    cell.onclick = () => selectCalendarDate(dateStr, day);
    grid.appendChild(cell);
  }

  updateCalendarDetailsCard();
}

function selectCalendarDate(dateStr, dayNum) {
  calendarSelectedDateStr = dateStr;
  document.querySelectorAll('.cal-day-cell').forEach(c => c.classList.remove('selected'));
  renderCalendar();
}

function changeCalendarMonth(delta) {
  calendarCurrentMonth += delta;
  if (calendarCurrentMonth < 0) { calendarCurrentMonth = 11; calendarCurrentYear--; }
  else if (calendarCurrentMonth > 11) { calendarCurrentMonth = 0; calendarCurrentYear++; }
  renderCalendar();
}

function jumpCalendarToday() {
  const now = new Date();
  calendarCurrentYear = now.getFullYear();
  calendarCurrentMonth = now.getMonth();
  calendarSelectedDateStr = now.toISOString().split('T')[0];
  renderCalendar();
}

function updateCalendarDetailsCard() {
  const dateObj = new Date(calendarSelectedDateStr + 'T00:00:00');
  const dateFormatted = dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
  document.getElementById('calDetailDate').textContent = dateFormatted;

  const dayOfWeek = dateObj.getDay();
  const dayIndexMap = [5, 0, 1, 2, 3, 4, 5];
  const targetDay = WORKOUT_DATA[dayIndexMap[dayOfWeek]];

  document.getElementById('calDetailSplit').textContent = `Assigned Split: ${dayOfWeek === 0 ? 'Active Rest & Recovery' : targetDay.focus}`;

  const history = JSON.parse(localStorage.getItem('planfit_history') || localStorage.getItem('apex_history') || '[]');
  const completedLog = history.find(h => h.date === calendarSelectedDateStr);

  const statusBadge = document.getElementById('calDetailStatusBadge');
  if (completedLog) {
    statusBadge.innerHTML = `
      <span style="display:inline-flex; align-items:center; gap:6px; background:rgba(0,255,136,0.18); border:1px solid rgba(0,255,136,0.4); color:var(--accent-emerald); padding:4px 10px; border-radius:8px; font-size:0.76rem; font-weight:800;">
        ✓ Session Logged • ${completedLog.durationMin}m • ${completedLog.setsCompleted} Sets • ${completedLog.totalVolume} kg
      </span>
    `;
  } else {
    statusBadge.innerHTML = `
      <span style="display:inline-flex; align-items:center; gap:6px; background:rgba(255,255,255,0.06); border:1px solid var(--border-subtle); color:var(--text-sub); padding:4px 10px; border-radius:8px; font-size:0.76rem; font-weight:700;">
        ⏳ Not logged yet
      </span>
    `;
  }
}

function startRoutineForCalendarDay() {
  const dateObj = new Date(calendarSelectedDateStr + 'T00:00:00');
  const dayOfWeek = dateObj.getDay();
  const dayIndexMap = [0, 0, 1, 2, 3, 4, 5];
  selectedDayIndex = dayIndexMap[dayOfWeek];
  selectDay(selectedDayIndex);
  startCurrentRoutine();
}

function toggleCalendarDayCompleted() {
  const history = JSON.parse(localStorage.getItem('planfit_history') || localStorage.getItem('apex_history') || '[]');
  const existingIdx = history.findIndex(h => h.date === calendarSelectedDateStr);

  if (existingIdx !== -1) {
    history.splice(existingIdx, 1);
    alert("Workout status removed for " + calendarSelectedDateStr);
  } else {
    const dateObj = new Date(calendarSelectedDateStr + 'T00:00:00');
    const dayOfWeek = dateObj.getDay();
    const dayIndexMap = [0, 0, 1, 2, 3, 4, 5];
    const targetDay = WORKOUT_DATA[dayIndexMap[dayOfWeek]];

    history.unshift({
      id: Date.now(),
      date: calendarSelectedDateStr,
      dayName: targetDay.day_name,
      focus: targetDay.focus,
      durationMin: 55,
      setsCompleted: 24,
      totalVolume: 5800
    });
    vibrate([80]);
    alert("Marked workout as completed for " + calendarSelectedDateStr);
  }

  localStorage.setItem('planfit_history', JSON.stringify(history));
  renderCalendar();
  updateHudTelemetry();
}

// ========================================================
// PERSONAL RECORDS (PR) HALL & PROGRESS TELEMETRY
// ========================================================
function renderPrHallOfFame() {
  const container = document.getElementById('prRecordsList');
  if (!container) return;
  container.innerHTML = '';

  const prs = [
    { ex: 'Flat Dumbbell Press', metric: '42.5 kg × 10 reps', est1rm: '56 kg', date: 'Oct 08' },
    { ex: 'Wide Grip Lat Pulldown', metric: '85.0 kg × 12 reps', est1rm: '119 kg', date: 'Oct 06' },
    { ex: 'Barbell Front Squats', metric: '95.0 kg × 8 reps', est1rm: '120 kg', date: 'Oct 04' },
    { ex: 'Smith Shoulder Press', metric: '65.0 kg × 10 reps', est1rm: '86 kg', date: 'Oct 02' }
  ];

  prs.forEach(pr => {
    const row = document.createElement('div');
    row.className = 'pr-item-row';
    row.innerHTML = `
      <div>
        <div style="font-family:'Outfit',sans-serif; font-size:0.88rem; font-weight:800;">${pr.ex}</div>
        <div style="font-size:0.72rem; color:var(--text-sub);">Peak Set: ${pr.metric}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-family:'JetBrains Mono',monospace; font-size:0.85rem; font-weight:800; color:var(--accent-amber);">1RM: ${pr.est1rm}</div>
        <div style="font-size:0.68rem; color:var(--text-muted);">${pr.date}</div>
      </div>
    `;
    container.appendChild(row);
  });
}

function renderGraphs() {
  const container = document.getElementById('weekwiseChartWrap');
  if (!container) return;
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weekVols = [4800, 5200, 6100, 4900, 5600, 6400, 0];
  const max = Math.max(...weekVols, 100);

  let barsHtml = '';
  const barW = 24;
  weekVols.forEach((vol, i) => {
    const x = 16 + i * 42;
    const barH = (vol / max) * 120;
    const y = 145 - barH;
    barsHtml += `
      <rect x="${x}" y="${y}" width="${barW}" height="${Math.max(4, barH)}" rx="5" fill="${vol > 0 ? 'url(#weekGrad)' : 'rgba(255,255,255,0.08)'}" />
      <text x="${x + barW/2}" y="165" font-size="10" font-family="Outfit" fill="#94a3b8" text-anchor="middle">${days[i]}</text>
    `;
  });

  container.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 320 180">
      <defs>
        <linearGradient id="weekGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#00ff88" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
      </defs>
      <line x1="10" y1="145" x2="310" y2="145" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
      ${barsHtml}
    </svg>
  `;
  document.getElementById('weekwiseTotalVol').textContent = weekVols.reduce((a, b) => a + b, 0) + ' kg';

  // 52-week activity heatmap
  const grid = document.getElementById('heatmapGrid');
  if (!grid) return;
  grid.innerHTML = '';
  for (let w = 0; w < 52; w++) {
    for (let d = 0; d < 7; d++) {
      const box = document.createElement('div');
      const rand = Math.random();
      let lvl = '';
      if (rand > 0.65) lvl = 'lvl-1';
      if (rand > 0.8) lvl = 'lvl-2';
      if (rand > 0.92) lvl = 'lvl-3';
      box.className = `heatmap-box ${lvl}`;
      grid.appendChild(box);
    }
  }
}

// ========================================================
// EXERCISE LIBRARY PICKER MODAL
// ========================================================
function openExerciseLibraryModal() {
  document.getElementById('exerciseLibraryModal').classList.add('active');
  filterExerciseLibrary();
}
function closeExerciseLibraryModal() {
  document.getElementById('exerciseLibraryModal').classList.remove('active');
}
function closeExerciseLibraryModalOnOverlay(e) {
  if (e.target.id === 'exerciseLibraryModal') closeExerciseLibraryModal();
}
function filterCategory(cat) {
  currentCategoryFilter = cat;
  document.querySelectorAll('.modal-cat-chip').forEach(c => {
    c.classList.toggle('active', c.textContent.startsWith(cat));
  });
  filterExerciseLibrary();
}
function filterExerciseLibrary() {
  const query = (document.getElementById('librarySearchInput')?.value || '').toLowerCase().trim();
  const container = document.getElementById('modalExScrollList');
  container.innerHTML = '';

  const filtered = FULL_LIBRARY.filter(ex => {
    const matchesCat = currentCategoryFilter === 'All' || ex.category.toLowerCase() === currentCategoryFilter.toLowerCase();
    const matchesQuery = !query || ex.name.toLowerCase().includes(query) || ex.target.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  filtered.forEach(ex => {
    const card = document.createElement('div');
    card.className = 'modal-ex-card';
    card.innerHTML = `
      <img src="${ex.image_url}" class="modal-ex-img" alt="${ex.name}" loading="lazy" onerror="this.src='./icon-192.png'">
      <div style="flex:1; min-width:0;">
        <div style="font-family:'Outfit',sans-serif; font-size:0.88rem; font-weight:800; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${ex.name}</div>
        <div style="font-size:0.7rem; color:var(--accent-primary); font-weight:700;">${ex.category} • ${ex.target}</div>
      </div>
      <button class="btn-add-library-ex" onclick="addLibraryExerciseToCurrentRoutine('${ex.id}')">
        + Add
      </button>
    `;
    container.appendChild(card);
  });
}
function addLibraryExerciseToCurrentRoutine(exId) {
  const targetDayIdx = activeSession ? activeSession.dayIndex : selectedDayIndex;
  const day = WORKOUT_DATA[targetDayIdx];
  const item = FULL_LIBRARY.find(ex => ex.id === exId);
  if (!item) return;

  const newEx = {
    num: String(day.exercises.length + 1),
    name: item.name,
    target: item.target,
    sets: item.sets || "4 Sets",
    reps: item.reps || "10-12 Reps",
    notes: item.notes || "Strict form and controlled eccentric tempo.",
    image: item.image,
    image_url: item.image_url
  };

  day.exercises.push(newEx);
  saveWorkoutData();

  if (activeSession) {
    const newIdx = day.exercises.length - 1;
    activeSession.logs[newIdx] = [
      { setNum: 1, weight: '30', reps: '12', completed: false },
      { setNum: 2, weight: '30', reps: '12', completed: false },
      { setNum: 3, weight: '30', reps: '12', completed: false },
      { setNum: 4, weight: '30', reps: '12', completed: false }
    ];
  }

  selectDay(targetDayIdx);
  closeExerciseLibraryModal();
  vibrate([80]);
  alert(`Added "${newEx.name}" to ${day.day_name} routine!`);
}
function renderExerciseLibrary() { filterExerciseLibrary(); }

// HISTORY & SETTINGS
function renderHistory() {
  const list = document.getElementById('historyList');
  const history = JSON.parse(localStorage.getItem('planfit_history') || localStorage.getItem('apex_history') || '[]');
  list.innerHTML = '';
  if (history.length === 0) {
    list.innerHTML = `<div style="text-align:center; padding:40px 20px; color:var(--text-muted);">No completed sessions yet. Launch your first workout!</div>`;
    return;
  }
  history.forEach(h => {
    const item = document.createElement('div');
    item.className = 'chart-card';
    item.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <div style="font-family:'Outfit',sans-serif; font-size:1.05rem; font-weight:800;">${h.dayName} — ${h.focus}</div>
        <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">${h.date}</div>
      </div>
      <div style="display:flex; gap:8px;">
        <div class="modal-cat-chip" style="color:#fff;">⏱ <strong>${h.durationMin} mins</strong></div>
        <div class="modal-cat-chip" style="color:var(--accent-emerald);">🏋️ <strong>${h.setsCompleted} sets</strong></div>
        <div class="modal-cat-chip" style="color:var(--accent-primary);">⚡ <strong>${h.totalVolume} kg</strong></div>
      </div>
    `;
    list.appendChild(item);
  });
}

function saveSettings() {
  const unit = document.getElementById('settingUnit').value;
  const sound = document.getElementById('settingSound').checked;
  const vibrateVal = document.getElementById('settingVibrate').checked;
  localStorage.setItem('planfit_settings', JSON.stringify({ unit, sound, vibrate: vibrateVal }));
}
function loadSettings() {
  const s = JSON.parse(localStorage.getItem('planfit_settings') || '{}');
  if (s.unit) document.getElementById('settingUnit').value = s.unit;
  if (s.sound !== undefined) document.getElementById('settingSound').checked = s.sound;
  if (s.vibrate !== undefined) document.getElementById('settingVibrate').checked = s.vibrate;
  const th = localStorage.getItem('planfit_theme') || '3d-cyber';
  changeTheme(th);
}
function exportData() {
  const history = localStorage.getItem('planfit_history') || '[]';
  const routines = localStorage.getItem('planfit_custom_workout_data') || '[]';
  const payload = JSON.stringify({ history: JSON.parse(history), routines: JSON.parse(routines) });
  const blob = new Blob([payload], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Planfit_Pro_Backup_${Date.now()}.json`;
  a.click();
}

// Toast notification
function showAppToast(msg) {
  const toast = document.getElementById('appToast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

// Renew Application & Reset All Data
function clearAllData() {
  if (confirm("Reset and renew application? This will permanently delete workout history, custom routines, weight logs, readiness HUD telemetry, streak, and reset weekly volume to zero.")) {
    // 1. Remove all stored logs
    localStorage.removeItem('planfit_history');
    localStorage.removeItem('apex_history');
    localStorage.removeItem('planfit_photos');
    localStorage.removeItem('planfit_custom_workout_data');
    localStorage.removeItem('planfit_weight_logs');
    localStorage.removeItem('planfit_user_bodyweight');
    localStorage.removeItem('planfit_gym_location');
    localStorage.removeItem('planfit_chat_messages');
    localStorage.removeItem('planfit_permissions');
    
    // 2. Stop running timers & sessions
    if (sessionTimerInterval) { clearInterval(sessionTimerInterval); sessionTimerInterval = null; }
    if (exTimerInterval) { clearInterval(exTimerInterval); exTimerInterval = null; }
    if (restInterval) { clearInterval(restInterval); restInterval = null; }
    activeSession = null;
    exTimersMemory = {};
    exTimerElapsedMs = 0;
    exTimerRunning = false;
    
    // 3. Reset Header Timer & Sticky Banner
    const sb = document.getElementById('stickyWorkoutBanner');
    if (sb) sb.style.display = 'none';
    const ht = document.getElementById('headerTimer');
    if (ht) ht.textContent = '00:00';
    const stInd = document.getElementById('workoutStatusIndicator');
    if (stInd) stInd.classList.remove('active-running');

    // 4. Reset Readiness HUD, Weekly Volume & Streak
    const readinessEl = document.getElementById('hudReadinessVal');
    if (readinessEl) {
      readinessEl.textContent = '100%';
      readinessEl.style.color = 'var(--accent-emerald)';
    }
    const weeklyVolEl = document.getElementById('hudWeeklyVolVal');
    if (weeklyVolEl) weeklyVolEl.textContent = '0 kg';
    const streakEl = document.getElementById('hudStreakVal');
    if (streakEl) streakEl.textContent = '0 Days';
    
    // 5. Reset Exercise Timer Display
    const digClock = document.getElementById('timerDigitalClock');
    if (digClock) digClock.textContent = '00:00.0';
    const ringCircle = document.getElementById('timerRingCircle');
    if (ringCircle) ringCircle.style.strokeDashoffset = '0';

    // 6. Reload defaults and update views
    loadWorkoutData();
    selectDay(0);
    renderHistory();
      renderGraphs();
    renderCalendar();
    updateHudTelemetry();

    showAppToast('✨ Application Renewed: History, weight logs, readiness HUD, and weekly volume have been reset.');
  }
}

// ========================================================
// APPLICATION VS WEBSITE ENVIRONMENT DETECTION
// Hides APK download option when running inside the app
// ========================================================
function checkAppEnvironment() {
  const isNativeApp = !!(
    window.AndroidBridge ||
    location.protocol === 'file:' ||
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true ||
    (navigator.userAgent && navigator.userAgent.includes('PlanfitApp'))
  );
  
  if (isNativeApp) {
    document.body.classList.add('is-native-app');
    document.querySelectorAll('.app-download-only-web, .apk-download-banner, #apkDownloadBanner, #settingsApkDownloadCard').forEach(el => {
      el.style.display = 'none';
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkAppEnvironment);
} else {
  checkAppEnvironment();
}
