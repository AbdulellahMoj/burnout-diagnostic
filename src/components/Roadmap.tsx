import { motion } from 'motion/react';
import { Search, HandHeart, Wrench, Heart } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Diagnose",
    desc: "Acknowledge the signs. Are you exhausted, cynical, or feeling ineffective? Use our diagnostic tool to understand your current state.",
    icon: Search,
    color: "text-clay-lemon-500",
    bg: "bg-clay-lemon-500/10",
    border: "border-clay-lemon-500"
  },
  {
    id: "02",
    title: "Help",
    desc: "Reach out. Burnout thrives in isolation. Speak to a mentor, a colleague, or a professional. You don't have to carry the weight alone.",
    icon: HandHeart,
    color: "text-clay-slushie-500",
    bg: "bg-clay-slushie-500/10",
    border: "border-clay-slushie-500"
  },
  {
    id: "03",
    title: "Fix",
    desc: "Address the root causes. This isn't about taking a bubble bath; it's about setting boundaries, adjusting workloads, and fixing broken systems.",
    icon: Wrench,
    color: "text-clay-pomegranate-400",
    bg: "bg-clay-pomegranate-400/10",
    border: "border-clay-pomegranate-400"
  },
  {
    id: "04",
    title: "Heal",
    desc: "Rebuild your energy architecture. Prioritize sleep, disconnect from work, and rediscover activities that bring you genuine joy.",
    icon: Heart,
    color: "text-clay-matcha-600",
    bg: "bg-clay-matcha-600/10",
    border: "border-clay-matcha-600"
  }
];

export default function Roadmap() {
  return (
    <section className="section-shell bg-ui-warm border-b border-ui-border relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-clay-lemon-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-clay-slushie-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="text-xs font-bold tracking-widest uppercase text-clay-silver mb-4">The Path Forward</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ui-text mb-6">Recovery Roadmap</h2>
          <p className="text-lg text-clay-charcoal max-w-2xl mx-auto">
            Recovery is a process, not a day off. Use these four steps to assess, stabilize, and rebuild sustainably.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-ui-border -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  <div className="bg-ui-bg border-2 border-ui-border rounded-3xl p-6 shadow-clay-card h-full flex flex-col hover-brutalist-sm transition-transform duration-300">
                    
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-black text-ui-border group-hover:text-clay-silver transition-colors">
                        {step.id}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl ${step.bg} flex items-center justify-center border ${step.border}`}>
                        <Icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-ui-text mb-3">{step.title}</h3>
                    <p className="text-sm text-clay-charcoal leading-relaxed flex-grow">
                      {step.desc}
                    </p>

                    {/* Mobile Connecting Line (Vertical) */}
                    {index !== steps.length - 1 && (
                      <div className="md:hidden absolute -bottom-8 left-1/2 w-1 h-8 bg-ui-border -translate-x-1/2"></div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
