import { motion } from 'motion/react';

export default function BurnoutExplanation() {
  return (
    <section id="what-is-burnout" className="section-shell bg-ui-bg border-b border-ui-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-xs font-bold tracking-widest uppercase text-clay-silver mb-4">The Definition</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ui-text mb-6">What is Burnout?</h2>
          <p className="text-lg text-clay-charcoal max-w-2xl mx-auto">
            Burnout is a state of chronic stress leading to physical and emotional exhaustion, cynicism, and a feeling of reduced accomplishment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-ui-warm border-2 border-ui-border rounded-3xl p-8 shadow-clay-card hover-brutalist-sm"
          >
            <div className="text-4xl mb-6">🔋</div>
            <h3 className="text-xl font-bold tracking-tight text-ui-text mb-2">Exhaustion</h3>
            <p className="text-clay-charcoal leading-relaxed text-sm">Complete depletion of energy. Not fixed by sleep. Feeling drained before the day starts.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-ui-warm border-2 border-ui-border rounded-3xl p-8 shadow-clay-card hover-brutalist-sm"
          >
            <div className="text-4xl mb-6">🧊</div>
            <h3 className="text-xl font-bold tracking-tight text-ui-text mb-2">Cynicism</h3>
            <p className="text-clay-charcoal leading-relaxed text-sm">Emotional distance from work. Losing interest, motivation, or connection to others.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-ui-warm border-2 border-ui-border rounded-3xl p-8 shadow-clay-card hover-brutalist-sm"
          >
            <div className="text-4xl mb-6">📉</div>
            <h3 className="text-xl font-bold tracking-tight text-ui-text mb-2">Low Efficacy</h3>
            <p className="text-clay-charcoal leading-relaxed text-sm">Feeling that nothing you do matters. Performing below your standards despite effort.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
