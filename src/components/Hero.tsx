import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative section-shell !pt-24 md:!pt-28 bg-ui-bg border-b border-ui-border overflow-hidden">
      {/* Playful background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-clay-ube-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-clay-slushie-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 py-1.5 px-3 rounded-xl bg-clay-ube-800/10 text-clay-ube-300 font-bold text-xs uppercase border border-clay-ube-800/20">
              Module 04
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-ui-text leading-[1.05] mb-6">
            Understanding <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay-pomegranate-400 to-clay-lemon-500">Occupational Burnout.</span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-ui-warm border border-ui-border p-6 rounded-2xl shadow-clay-card max-w-2xl mb-10 md:mb-12"
        >
          <p className="text-base md:text-lg text-clay-charcoal font-medium leading-relaxed">
            Burnout is a systemic breakdown caused by chronic stress. It happens when sustained effort meets an environment lacking recovery or reward.
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4"
        >
          <Link
            to="/quiz"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-clay-lemon-500 text-black border-2 border-clay-lemon-400 rounded-xl font-bold hover-brutalist focus-dashed w-full sm:w-auto text-center min-h-12"
          >
            🩺 Start Diagnostic
          </Link>
          <button
            onClick={() => document.getElementById('what-is-burnout')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-ui-warm border-2 border-ui-border text-ui-text rounded-xl font-bold hover:bg-clay-ube-800 hover:text-white hover:border-clay-ube-800 hover-brutalist w-full sm:w-auto text-center transition-colors min-h-12"
          >
            📖 Read Material
          </button>
        </motion.div>
      </div>
    </section>
  );
}
