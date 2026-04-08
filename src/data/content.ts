export const quizQuestions = [
  { cat: "Exhaustion", t: "I feel emotionally drained by my studies or work." },
  { cat: "Exhaustion", t: "I feel used up by the end of the day — even when I didn't do much." },
  { cat: "Exhaustion", t: "Working or studying all day is genuinely tiring for me." },
  { cat: "Exhaustion", t: "I feel burned out from my academic or professional demands." },
  { cat: "Exhaustion", t: "I feel frustrated when I can't give the effort I know I'm capable of." },
  { cat: "Cynicism", t: "I have become less interested in my studies or work since I started." },
  { cat: "Cynicism", t: "I doubt the significance of what I'm doing day to day." },
  { cat: "Cynicism", t: "I feel I'm contributing less than I used to — and I've stopped caring why." },
  { cat: "Cynicism", t: "I've become more indifferent toward the people I study or work with." },
  { cat: "Cynicism", t: "I feel cynical about whether my efforts actually matter." },
  { cat: "Efficacy", t: "I feel like I'm not achieving the things that matter to me." },
  { cat: "Efficacy", t: "I struggle to create calm and solve problems, even when I try." },
  { cat: "Efficacy", t: "I feel like I'm not making a real difference in my environment." },
  { cat: "Efficacy", t: "I have accomplished fewer meaningful things than I expected of myself." },
  { cat: "Efficacy", t: "I feel I am at or past my limit — and I'm not sure what comes next." },
];

export const answerScale = [
  { l: "Never — this doesn't apply to me", v: 1 },
  { l: "Rarely — maybe once or twice", v: 2 },
  { l: "Sometimes — it comes and goes", v: 3 },
  { l: "Often — this is fairly regular", v: 4 },
  { l: "Always — this is my constant state", v: 5 },
];

export const quizResults = [
  {
    range: [15, 30],
    em: "🌱",
    col: "text-clay-matcha-300",
    bg: "bg-clay-matcha-600/20",
    border: "border-clay-matcha-600/30",
    title: "You're in a healthy space",
    desc: "Your responses suggest you are managing well. Exhaustion, cynicism, and reduced efficacy are not dominant patterns right now. This is not a reason to ignore the topic — burnout often builds slowly and invisibly. Staying aware is the most powerful form of prevention.",
    steps: [
      "Keep protecting time for rest and recovery — even when things feel fine.",
      "Stay connected to what gives your work meaning. That connection is worth maintaining.",
      "Check in with people around you. Sometimes they're not as okay as they look."
    ]
  },
  {
    range: [31, 45],
    em: "⚠️",
    col: "text-clay-lemon-500",
    bg: "bg-clay-lemon-500/20",
    border: "border-clay-lemon-500/30",
    title: "Early warning signs",
    desc: "Some patterns of exhaustion, detachment, or reduced efficacy are beginning to form. This is the most important stage to catch — early enough that small changes can prevent a larger collapse. These signals are not signs of weakness. They deserve attention.",
    steps: [
      "Identify the one thing draining you most — and reduce or restructure it if you can.",
      "Talk to someone you trust. Not to fix it — just to say it out loud.",
      "Protect at least one block of genuine rest each week. Not productive rest. Real rest."
    ]
  },
  {
    range: [46, 55],
    em: "🔥",
    col: "text-clay-pomegranate-400",
    bg: "bg-clay-pomegranate-400/20",
    border: "border-clay-pomegranate-400/30",
    title: "Moderate burnout",
    desc: "You reflect a meaningful level of burnout across multiple dimensions. You may have been pushing through for longer than you should. The cost is real — in performance, in motivation, and in how you feel about work that once mattered. This needs attention, not just acknowledgment.",
    steps: [
      "Reduce active commitments — not temporarily, but structurally. Something has to change.",
      "Speak to a mentor, counselor, or someone in a position to help with your environment.",
      "Give yourself permission to perform at 80% for a defined period. Recovery requires space."
    ]
  },
  {
    range: [56, 75],
    em: "🆘",
    col: "text-clay-ube-300",
    bg: "bg-clay-ube-800/40",
    border: "border-clay-ube-800/50",
    title: "High burnout — this needs attention now",
    desc: "A high level of burnout across exhaustion, cynicism, and efficacy. This is not a performance issue or a personal failure. It is a signal that something has been unsustainable for too long. The longer high burnout goes unaddressed, the longer recovery takes. Please take this seriously.",
    steps: [
      "Speak to someone — a counselor, a doctor, a trusted mentor — today, not next week.",
      "You may need to pause or restructure a significant commitment. That is okay.",
      "Recovery from high burnout takes time. Be honest with people around you about where you are."
    ]
  }
];

export const storyPhases = [
  {
    id: "phase1",
    phase: "Phase 1 — The Intensity",
    title: "KAUST AI Academy",
    subtitle: "A Summer That Asked Everything",
    desc: "From June 1st to August 31st — 9am to 5pm in intensive theory and lab sessions, every single day. Then four more hours working on a research project in EEG-to-image reconstruction. No prior knowledge. No space to breathe. Just the pressure of learning, producing, and performing simultaneously.",
    outcome: "The work was meaningful. Placing 1st of 135 in the final poster competition was earned. But by the end, the energy that makes you want to learn had been completely consumed. The achievement was there. The person was hollowed out.",
    tags: ["No energy left", "Still pushing", "Achievement without joy"],
    image: "https://image.pollinations.ai/prompt/A_tired_computer_science_student_working_late_night_glowing_screen_dark_emotional_art?width=800&height=600&nologo=true&seed=42",
    color: "text-brand-purple",
    borderColor: "border-brand-purple"
  },
  {
    id: "phase2",
    phase: "Phase 2 — The Consequence",
    title: "The Internship",
    subtitle: "When the damage shows",
    desc: "Right after the summer program came an internship. It should have been exciting. But the performance wasn't there — not because of lack of ability, but because there was genuinely nothing left to give. Output dropped below personal standards. The drive that usually pushes extra effort had been completely spent.",
    outcome: "This is what burnout hides: you show up, you try, you look functional — but the quality and the internal motivation are gone. And knowing that makes it worse.",
    tags: ["Performing below standard", "Aware but unable to fix it", "Needed rest that never came"],
    image: "https://image.pollinations.ai/prompt/A_person_staring_blankly_at_a_computer_screen_feeling_empty_and_burnt_out_dark_atmosphere_art?width=800&height=600&nologo=true&seed=101",
    color: "text-brand-orange",
    borderColor: "border-brand-orange"
  },
  {
    id: "phase3",
    phase: "Phase 3 — The Accumulation",
    title: "Club Leadership & Studies",
    subtitle: "The weight of no appreciation",
    desc: "Running a student club from scratch — building documentation, managing team conflicts, sustaining a community — all while receiving no structural support from the institution and no assurance that the work would continue after us. The effort was real. The impact was real. But the environment gave nothing back.",
    outcome: "By the first semester of the fourth year, it had accumulated into study burnout. Exams not prepared for at the usual standard. Teammates quietly picking up the slack. The person who usually leads, needing to be carried for a while.",
    tags: ["No institutional support", "Team carried the weight", "Study motivation at zero"],
    image: "https://image.pollinations.ai/prompt/An_exhausted_student_leader_being_supported_by_friends_dark_emotional_digital_illustration?width=800&height=600&nologo=true&seed=777",
    color: "text-brand-pink",
    borderColor: "border-brand-pink"
  }
];
