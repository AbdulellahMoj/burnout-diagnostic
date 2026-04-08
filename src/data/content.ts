export type BurnoutDimension = 'Exhaustion' | 'Cynicism' | 'Efficacy';

type QuestionPair = {
  pairId: string;
  dimension: BurnoutDimension;
  reverseScored?: boolean;
  primary: string;
  mirror: string;
};

export type QuizQuestion = {
  id: string;
  pairId: string;
  cat: BurnoutDimension;
  t: string;
  reverseScored: boolean;
  variant: 'primary' | 'mirror';
};

export type AssessmentBand = {
  key: 'healthy' | 'warning' | 'moderate' | 'high';
  em: string;
  col: string;
  bg: string;
  border: string;
  title: string;
  desc: string;
  steps: string[];
};

type AssessmentResult = {
  band: AssessmentBand;
  burnoutIndex: number;
  subscales: {
    exhaustion: number;
    cynicism: number;
    efficacy: number;
  };
  quality: {
    confidenceLabel: 'high' | 'medium' | 'low';
    confidenceScore: number;
    contradictionCount: number;
    straightLineDetected: boolean;
    rushedDetected: boolean;
    notes: string[];
  };
};

const questionPairs: QuestionPair[] = [
  {
    pairId: 'ex-01',
    dimension: 'Exhaustion',
    primary: 'By the end of most days, I feel emotionally drained by study or work.',
    mirror: 'Even before the day ends, I feel like my battery is already empty.'
  },
  {
    pairId: 'ex-02',
    dimension: 'Exhaustion',
    primary: 'When I wake up, I already feel behind on energy.',
    mirror: 'Starting the day feels heavy, even when my schedule is normal.'
  },
  {
    pairId: 'ex-03',
    dimension: 'Exhaustion',
    primary: 'After study or work, I have little energy left for normal life.',
    mirror: 'Most evenings, I am too depleted to do basic personal tasks.'
  },
  {
    pairId: 'ex-04',
    dimension: 'Exhaustion',
    primary: 'I feel mentally overextended for long stretches of the week.',
    mirror: 'My recovery time is no longer catching up with my workload.'
  },
  {
    pairId: 'cy-01',
    dimension: 'Cynicism',
    primary: 'I feel less emotionally connected to my study or work than before.',
    mirror: 'Tasks that used to matter now feel more like obligations than purpose.'
  },
  {
    pairId: 'cy-02',
    dimension: 'Cynicism',
    primary: 'I catch myself becoming more detached or negative about my responsibilities.',
    mirror: 'I often respond to work or study stress with emotional distance.'
  },
  {
    pairId: 'cy-03',
    dimension: 'Cynicism',
    primary: 'I question whether what I do is worth the effort.',
    mirror: 'Even when I complete tasks, I feel less meaning in them.'
  },
  {
    pairId: 'cy-04',
    dimension: 'Cynicism',
    primary: 'I feel less patient or compassionate with people around me.',
    mirror: 'Stress has made me more emotionally distant in teamwork or class settings.'
  },
  {
    pairId: 'ef-01',
    dimension: 'Efficacy',
    reverseScored: true,
    primary: 'I can still solve meaningful problems effectively.',
    mirror: 'Even under pressure, I usually feel capable of producing quality work.'
  },
  {
    pairId: 'ef-02',
    dimension: 'Efficacy',
    reverseScored: true,
    primary: 'I feel I am contributing value through my work or studies.',
    mirror: 'My effort still leads to outcomes that feel useful.'
  },
  {
    pairId: 'ef-03',
    dimension: 'Efficacy',
    reverseScored: true,
    primary: 'I can stay focused long enough to finish what matters.',
    mirror: 'I still trust my ability to follow through on important tasks.'
  },
  {
    pairId: 'ef-04',
    dimension: 'Efficacy',
    reverseScored: true,
    primary: 'I feel reasonably effective in my current role.',
    mirror: 'Most weeks, I still feel competent in what I am expected to do.'
  }
];

export const assessmentQuestionBank: QuizQuestion[] = questionPairs.flatMap((pair) => [
  {
    id: `${pair.pairId}-a`,
    pairId: pair.pairId,
    cat: pair.dimension,
    t: pair.primary,
    reverseScored: Boolean(pair.reverseScored),
    variant: 'primary'
  },
  {
    id: `${pair.pairId}-b`,
    pairId: pair.pairId,
    cat: pair.dimension,
    t: pair.mirror,
    reverseScored: Boolean(pair.reverseScored),
    variant: 'mirror'
  }
]);

export const answerScale = [
  { l: 'Never (0)', v: 0 },
  { l: 'A few times per year or less (1)', v: 1 },
  { l: 'About once per month (2)', v: 2 },
  { l: 'A few times per month (3)', v: 3 },
  { l: 'About once per week (4)', v: 4 },
  { l: 'A few times per week (5)', v: 5 },
  { l: 'Every day (6)', v: 6 }
];

export const assessmentMethodNote =
  'MBI-GS inspired educational screener. This is not a clinical diagnosis. It estimates burnout risk using Exhaustion, Cynicism, and Efficacy patterns, then checks response consistency and pace for confidence.';

const assessmentBands: AssessmentBand[] = [
  {
    key: 'healthy',
    em: '🌱',
    col: 'text-clay-matcha-300',
    bg: 'bg-clay-matcha-600/20',
    border: 'border-clay-matcha-600/30',
    title: 'Currently Stable',
    desc: 'Your pattern suggests manageable stress with preserved energy and effectiveness. Keep protecting your recovery habits so this stays sustainable.',
    steps: [
      'Maintain one non-negotiable recovery block each week.',
      'Keep boundaries around sleep, notifications, and late-night overwork.',
      'Re-check in two to four weeks if your workload changes.'
    ]
  },
  {
    key: 'warning',
    em: '⚠️',
    col: 'text-clay-lemon-500',
    bg: 'bg-clay-lemon-500/20',
    border: 'border-clay-lemon-500/30',
    title: 'Early Burnout Signals',
    desc: 'Your responses show rising strain in at least one burnout dimension. This is the best stage to intervene before deeper exhaustion sets in.',
    steps: [
      'Identify your top two energy drains and reduce one this week.',
      'Tell one trusted person where you are mentally right now.',
      'Schedule recovery before your calendar fills itself.'
    ]
  },
  {
    key: 'moderate',
    em: '🔥',
    col: 'text-clay-pomegranate-400',
    bg: 'bg-clay-pomegranate-400/20',
    border: 'border-clay-pomegranate-400/30',
    title: 'Moderate Burnout Risk',
    desc: 'Multiple dimensions are elevated. You are likely carrying more strain than your current recovery system can absorb.',
    steps: [
      'Reduce active commitments for at least one week, not just one day.',
      'Escalate support: mentor, counselor, advisor, or supervisor.',
      'Switch from "push harder" to "stabilize first, then perform."'
    ]
  },
  {
    key: 'high',
    em: '🆘',
    col: 'text-clay-ube-300',
    bg: 'bg-clay-ube-800/40',
    border: 'border-clay-ube-800/50',
    title: 'High Burnout Risk',
    desc: 'Your profile indicates sustained high strain and reduced capacity. This deserves immediate support and concrete workload adjustment.',
    steps: [
      'Ask for practical support today: workload, deadlines, or supervision.',
      'Prioritize sleep and reduce non-essential tasks for the next 7 days.',
      'If distress feels overwhelming, contact a licensed mental-health professional or local emergency support.'
    ]
  }
];

function shuffle<T>(input: T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function createAdaptiveQuizQuestions(): QuizQuestion[] {
  const shuffledPairs = shuffle(questionPairs);

  const primary: QuizQuestion[] = shuffledPairs.map((pair) => ({
    id: `${pair.pairId}-a`,
    pairId: pair.pairId,
    cat: pair.dimension,
    t: pair.primary,
    reverseScored: Boolean(pair.reverseScored),
    variant: 'primary'
  }));

  const mirror: QuizQuestion[] = shuffledPairs.map((pair) => ({
    id: `${pair.pairId}-b`,
    pairId: pair.pairId,
    cat: pair.dimension,
    t: pair.mirror,
    reverseScored: Boolean(pair.reverseScored),
    variant: 'mirror'
  }));

  const sequence: QuizQuestion[] = [];
  const lag = 3;

  for (let i = 0; i < primary.length; i += 1) {
    sequence.push(primary[i]);
    if (i >= lag) {
      sequence.push(mirror[i - lag]);
    }
  }

  for (let i = primary.length - lag; i < mirror.length; i += 1) {
    sequence.push(mirror[i]);
  }

  return sequence;
}

function riskScore(rawAnswer: number, reverseScored: boolean): number {
  return reverseScored ? 6 - rawAnswer : rawAnswer;
}

function average(values: number[]): number {
  if (values.length === 0) return 0;
  const total = values.reduce((sum, value) => sum + value, 0);
  return Number((total / values.length).toFixed(2));
}

function median(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
}

function longestStreak(values: number[]): number {
  if (values.length === 0) return 0;
  let best = 1;
  let current = 1;
  for (let i = 1; i < values.length; i += 1) {
    if (values[i] === values[i - 1]) {
      current += 1;
      best = Math.max(best, current);
    } else {
      current = 1;
    }
  }
  return best;
}

function resolveBand(
  exhaustion: number,
  cynicism: number,
  efficacy: number
): { band: AssessmentBand; burnoutIndex: number } {
  let index = 0;

  if (exhaustion >= 3.5) index += 2;
  else if (exhaustion >= 2.8) index += 1;

  if (cynicism >= 3.0) index += 2;
  else if (cynicism >= 2.2) index += 1;

  if (efficacy <= 2.8) index += 2;
  else if (efficacy <= 3.4) index += 1;

  if (index <= 1) return { band: assessmentBands[0], burnoutIndex: index };
  if (index <= 3) return { band: assessmentBands[1], burnoutIndex: index };
  if (index <= 4) return { band: assessmentBands[2], burnoutIndex: index };
  return { band: assessmentBands[3], burnoutIndex: index };
}

export function evaluateAssessment(
  questions: QuizQuestion[],
  answers: number[],
  responseTimesMs: number[]
): AssessmentResult {
  const riskByDimension = {
    Exhaustion: [] as number[],
    Cynicism: [] as number[],
    Efficacy: [] as number[]
  };

  questions.forEach((question, i) => {
    const raw = answers[i] ?? 0;
    riskByDimension[question.cat].push(riskScore(raw, question.reverseScored));
  });

  const exhaustion = average(riskByDimension.Exhaustion);
  const cynicism = average(riskByDimension.Cynicism);

  const efficacyRawItems = questions
    .map((question, i) => ({ question, answer: answers[i] ?? 0 }))
    .filter(({ question }) => question.cat === 'Efficacy');

  const efficacy = average(efficacyRawItems.map(({ answer }) => answer));

  const pairMap = new Map<string, { first?: number; second?: number }>();
  questions.forEach((question, i) => {
    const risk = riskScore(answers[i] ?? 0, question.reverseScored);
    const slot = pairMap.get(question.pairId) || {};
    if (question.variant === 'primary') slot.first = risk;
    if (question.variant === 'mirror') slot.second = risk;
    pairMap.set(question.pairId, slot);
  });

  let contradictionCount = 0;
  pairMap.forEach((pair) => {
    if (typeof pair.first === 'number' && typeof pair.second === 'number') {
      if (Math.abs(pair.first - pair.second) >= 3) contradictionCount += 1;
    }
  });

  const cleanTimes = responseTimesMs.filter((time) => time > 0);
  const medianTime = median(cleanTimes);
  const averageTime = average(cleanTimes);
  const repeatedChoiceStreak = longestStreak(answers);

  const rushedDetected = medianTime > 0 && medianTime < 2200 && averageTime < 3000;
  const straightLineDetected = repeatedChoiceStreak >= 8;

  let confidenceScore = 100;
  if (rushedDetected) confidenceScore -= 30;
  if (straightLineDetected) confidenceScore -= 25;
  confidenceScore -= Math.min(30, contradictionCount * 6);
  confidenceScore = Math.max(20, confidenceScore);

  const notes: string[] = [];
  if (rushedDetected) {
    notes.push('You answered very quickly. A slower pass can improve accuracy.');
  }
  if (straightLineDetected) {
    notes.push('Many answers followed the same option pattern. Reflecting item-by-item may give a truer result.');
  }
  if (contradictionCount >= 3) {
    notes.push('Some paired questions were inconsistent. This can happen under stress; consider retaking with a calm pace.');
  }
  if (notes.length === 0) {
    notes.push('Your response pattern looked consistent and thoughtful.');
  }

  const confidenceLabel =
    confidenceScore >= 75 ? 'high' : confidenceScore >= 50 ? 'medium' : 'low';

  const { band, burnoutIndex } = resolveBand(exhaustion, cynicism, efficacy);

  return {
    band,
    burnoutIndex,
    subscales: {
      exhaustion,
      cynicism,
      efficacy
    },
    quality: {
      confidenceLabel,
      confidenceScore,
      contradictionCount,
      straightLineDetected,
      rushedDetected,
      notes
    }
  };
}
