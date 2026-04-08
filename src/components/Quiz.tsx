import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { quizQuestions, answerScale, quizResults } from '../data/content';
import { ArrowRight, RotateCcw, Activity } from 'lucide-react';

const QUESTION_COUNT = quizQuestions.length;

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<number[]>(new Array(QUESTION_COUNT).fill(0));
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (val: number) => {
    const newScores = [...scores];
    newScores[currentQ] = val;
    setScores(newScores);
  };

  const handleNext = () => {
    if (scores[currentQ] === 0) return;
    if (currentQ < QUESTION_COUNT - 1) {
      setCurrentQ(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRetake = () => {
    setScores(new Array(QUESTION_COUNT).fill(0));
    setCurrentQ(0);
    setShowResult(false);
  };

  if (showResult) {
    const total = scores.reduce((a, b) => a + b, 0);
    const result = quizResults.find((r) => total >= r.range[0] && total <= r.range[1]) || quizResults[quizResults.length - 1];

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto w-full text-center"
      >
        <div className={`w-24 h-24 mx-auto rounded-2xl flex items-center justify-center text-4xl mb-6 ${result.bg} border-2 ${result.border} shadow-clay-card`}>
          {result.em}
        </div>
        <p className="text-clay-silver font-mono text-xs uppercase tracking-widest mb-2">Final Score: {total} / 75</p>
        <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${result.col}`}>{result.title}</h2>
        
        <div className="bg-ui-warm border-2 border-ui-border shadow-clay-card rounded-3xl p-6 md:p-8 text-left mb-8">
          <p className="text-ui-text leading-relaxed font-mono text-sm">{result.desc}</p>
        </div>

        <div className="text-left mb-10">
          <h3 className="font-mono text-xs font-bold tracking-widest uppercase text-clay-silver mb-4">Recommended Actions</h3>
          <div className="space-y-4">
            {result.steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start bg-ui-warm border-2 border-ui-border rounded-2xl p-5 shadow-clay-card">
                <div className="w-8 h-8 rounded-xl bg-ui-text text-ui-bg flex items-center justify-center text-sm font-bold shrink-0 mt-0.5 font-mono">
                  {i + 1}
                </div>
                <p className="text-[15px] text-clay-charcoal leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={handleRetake}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-ui-border text-ui-text hover:bg-ui-warm focus-dashed transition-colors text-sm font-bold font-mono uppercase tracking-wide hover-brutalist-sm"
        >
          <RotateCcw size={16} />
          Restart Diagnostic
        </button>
      </motion.div>
    );
  }

  const q = quizQuestions[currentQ];
  const progress = (currentQ / QUESTION_COUNT) * 100;

  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="text-center mb-12">
        <div className="font-mono text-xs font-bold tracking-widest uppercase text-clay-silver mb-2 flex items-center justify-center gap-2">
          <Activity size={14} className="text-clay-pomegranate-400" />
          Burnout Diagnostic
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ui-text mb-2">Current Status</h2>
        <p className="text-sm text-clay-charcoal font-mono">{QUESTION_COUNT} questions · Honest answers only</p>
        
        <div className="w-full h-4 bg-ui-warm border-2 border-ui-border rounded-full mt-8 mb-3 overflow-hidden p-0.5">
          <motion.div 
            className="h-full bg-clay-matcha-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="font-mono text-xs text-clay-silver font-bold uppercase tracking-widest">Question {currentQ + 1} / {QUESTION_COUNT}</p>
      </div>

      <motion.div 
        key={currentQ}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-ui-warm border-2 border-ui-border shadow-clay-card rounded-3xl p-6 md:p-10"
      >
        <div className="font-mono text-xs font-bold tracking-widest uppercase text-clay-lemon-500 mb-4">[ {q.cat} ]</div>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-ui-text leading-snug mb-8">{q.t}</h3>
        
        <div className="space-y-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-clay-silver mb-2">Select Answer:</p>
          {answerScale.map((a, i) => {
            const isSelected = scores[currentQ] === a.v;
            return (
              <button
                key={i}
                onClick={() => handleSelect(a.v)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left group focus-dashed
                  ${isSelected 
                    ? 'bg-ui-text border-ui-text text-ui-bg shadow-clay-hover-sm -translate-y-0.5' 
                    : 'bg-ui-bg border-ui-border text-ui-text hover:bg-ui-warm hover:border-clay-silver'
                  }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 transition-colors font-mono
                  ${isSelected ? 'bg-ui-bg text-ui-text' : 'bg-ui-warm border-2 border-ui-border text-clay-silver group-hover:bg-ui-bg'}`}>
                  {i + 1}
                </div>
                <span className="text-[15px] font-medium">{a.l}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {scores[currentQ] > 0 && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleNext}
              className="w-full mt-8 py-4 bg-clay-lemon-500 text-black border-2 border-clay-lemon-400 rounded-xl font-bold font-mono uppercase tracking-wide hover-brutalist focus-dashed flex items-center justify-center gap-2"
            >
              {currentQ < QUESTION_COUNT - 1 ? 'Next Question' : 'View Results'}
              <ArrowRight size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
