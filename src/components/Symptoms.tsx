import { motion } from 'motion/react';
import { Battery, Brain, Users, Activity } from 'lucide-react';

export default function Symptoms() {
  return (
    <section className="section-shell bg-ui-bg border-b border-ui-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-clay-silver mb-4">Early Detection</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ui-text mb-6">Visualizing Burnout</h2>
          <p className="text-lg text-clay-charcoal max-w-2xl mx-auto">
            Burnout rarely announces itself. It builds slowly. Knowing the signals early is the most powerful form of intervention.
          </p>
        </div>

        {/* The Progression Graph */}
        <div className="mb-12 bg-ui-warm rounded-3xl border-2 border-ui-border p-8 shadow-clay-card relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-ui-text mb-12 flex items-center gap-2">
              <Activity className="text-clay-lemon-500" />
              The 4 Stages of Depletion
            </h3>

            <div className="relative w-full flex items-end justify-between gap-2 md:gap-6 mt-6">
              {/* Stage 1 */}
              <div className="w-1/4 flex flex-col justify-end h-64 md:h-72">
                <div className="text-center text-xs md:text-sm font-bold text-clay-matcha-400 uppercase tracking-wider mb-3">Healthy</div>
                <div className="flex-grow flex items-end">
                  <motion.div 
                    initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full bg-clay-matcha-600/20 border-t-4 border-clay-matcha-600 rounded-t-2xl"
                  />
                </div>
                <div className="text-[11px] md:text-sm text-ui-text text-center mt-4 h-10 md:h-8 font-medium leading-tight flex items-start justify-center">
                  High energy, engaged
                </div>
              </div>
              
              {/* Stage 2 */}
              <div className="w-1/4 flex flex-col justify-end h-64 md:h-72">
                <div className="text-center text-xs md:text-sm font-bold text-clay-lemon-500 uppercase tracking-wider mb-3">Warning</div>
                <div className="flex-grow flex items-end">
                  <motion.div 
                    initial={{ height: 0 }} whileInView={{ height: '75%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="w-full bg-clay-lemon-500/20 border-t-4 border-clay-lemon-500 rounded-t-2xl"
                  />
                </div>
                <div className="text-[11px] md:text-sm text-ui-text text-center mt-4 h-10 md:h-8 font-medium leading-tight flex items-start justify-center">
                  Occasional fatigue
                </div>
              </div>
              
              {/* Stage 3 */}
              <div className="w-1/4 flex flex-col justify-end h-64 md:h-72">
                <div className="text-center text-xs md:text-sm font-bold text-clay-pomegranate-400 uppercase tracking-wider mb-3">Moderate</div>
                <div className="flex-grow flex items-end">
                  <motion.div 
                    initial={{ height: 0 }} whileInView={{ height: '45%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full bg-clay-pomegranate-400/20 border-t-4 border-clay-pomegranate-400 rounded-t-2xl"
                  />
                </div>
                <div className="text-[11px] md:text-sm text-ui-text text-center mt-4 h-10 md:h-8 font-medium leading-tight flex items-start justify-center">
                  Cynicism, dropping standards
                </div>
              </div>
              
              {/* Stage 4 */}
              <div className="w-1/4 flex flex-col justify-end h-64 md:h-72">
                <div className="text-center text-xs md:text-sm font-bold text-clay-ube-300 uppercase tracking-wider mb-3">Critical</div>
                <div className="flex-grow flex items-end">
                  <motion.div 
                    initial={{ height: 0 }} whileInView={{ height: '20%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="w-full bg-clay-ube-800/40 border-t-4 border-clay-ube-800 rounded-t-2xl"
                  />
                </div>
                <div className="text-[11px] md:text-sm text-ui-text text-center mt-4 h-10 md:h-8 font-medium leading-tight flex items-start justify-center">
                  Total withdrawal
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 3 Pillars of Symptoms (Images + Text) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="bg-ui-warm rounded-3xl border-2 border-ui-border shadow-clay-card overflow-hidden flex flex-col hover-brutalist-sm"
          >
            <div className="h-48 w-full bg-ui-bg relative">
              <img src="https://image.pollinations.ai/prompt/Abstract_minimalist_battery_draining_dark_clay_style_red_accent?width=600&height=400&nologo=true&seed=1" alt="Physical Drain" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 w-10 h-10 bg-ui-warm/80 backdrop-blur-md rounded-xl flex items-center justify-center border border-ui-border">
                <Battery className="text-clay-pomegranate-400 w-5 h-5" />
              </div>
            </div>
            <div className="p-6 flex-1">
              <h4 className="text-xl font-bold text-ui-text mb-4">Physical Drain</h4>
              <ul className="space-y-3">
                <li className="text-sm text-clay-charcoal flex items-start gap-2"><span className="text-clay-pomegranate-400 mt-0.5">•</span> Waking up tired even after full sleep</li>
                <li className="text-sm text-clay-charcoal flex items-start gap-2"><span className="text-clay-pomegranate-400 mt-0.5">•</span> Frequent headaches or illness</li>
              </ul>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-ui-warm rounded-3xl border-2 border-ui-border shadow-clay-card overflow-hidden flex flex-col hover-brutalist-sm"
          >
            <div className="h-48 w-full bg-ui-bg relative">
              <img src="https://image.pollinations.ai/prompt/Abstract_minimalist_tangled_wires_brain_fog_dark_clay_style_yellow_accent?width=600&height=400&nologo=true&seed=2" alt="Cognitive Fog" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 w-10 h-10 bg-ui-warm/80 backdrop-blur-md rounded-xl flex items-center justify-center border border-ui-border">
                <Brain className="text-clay-lemon-500 w-5 h-5" />
              </div>
            </div>
            <div className="p-6 flex-1">
              <h4 className="text-xl font-bold text-ui-text mb-4">Cognitive Fog</h4>
              <ul className="space-y-3">
                <li className="text-sm text-clay-charcoal flex items-start gap-2"><span className="text-clay-lemon-500 mt-0.5">•</span> Difficulty concentrating on tasks</li>
                <li className="text-sm text-clay-charcoal flex items-start gap-2"><span className="text-clay-lemon-500 mt-0.5">•</span> Performing below your own standards</li>
                <li className="text-sm text-clay-charcoal flex items-start gap-2"><span className="text-clay-lemon-500 mt-0.5">•</span> Procrastinating on things that matter</li>
              </ul>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-ui-warm rounded-3xl border-2 border-ui-border shadow-clay-card overflow-hidden flex flex-col hover-brutalist-sm"
          >
            <div className="h-48 w-full bg-ui-bg relative">
              <img src="https://image.pollinations.ai/prompt/Abstract_minimalist_isolated_figure_glass_wall_dark_clay_style_purple_accent?width=600&height=400&nologo=true&seed=3" alt="Emotional Wall" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 w-10 h-10 bg-ui-warm/80 backdrop-blur-md rounded-xl flex items-center justify-center border border-ui-border">
                <Users className="text-clay-ube-300 w-5 h-5" />
              </div>
            </div>
            <div className="p-6 flex-1">
              <h4 className="text-xl font-bold text-ui-text mb-4">Emotional Wall</h4>
              <ul className="space-y-3">
                <li className="text-sm text-clay-charcoal flex items-start gap-2"><span className="text-clay-ube-300 mt-0.5">•</span> Growing cynicism about work</li>
                <li className="text-sm text-clay-charcoal flex items-start gap-2"><span className="text-clay-ube-300 mt-0.5">•</span> Detachment from people around you</li>
                <li className="text-sm text-clay-charcoal flex items-start gap-2"><span className="text-clay-ube-300 mt-0.5">•</span> Feeling your effort changes nothing</li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
