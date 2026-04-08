import { useState } from 'react';
import { motion } from 'motion/react';

const techScenarios = [
  {
    id: "scenario1",
    phase: "The 4 AM Bug",
    title: "The Infinite Debugging Loop",
    subtitle: "Sacrificing sleep for the compile screen",
    desc: "Staring at a glowing screen at 4 AM, running on caffeine. You solve the bug, but the next day you are a ghost in your lectures.",
    outcome: "Destroys sleep architecture, leading to chronic exhaustion.",
    tags: ["Sleep deprivation", "Hyper-focus"],
    image: "https://image.pollinations.ai/prompt/A_tired_computer_science_student_coding_at_4AM_dark_room_glowing_monitors_empty_coffee_cups_emotional_digital_art?width=800&height=600&nologo=true&seed=10",
    color: "text-clay-slushie-500",
    badgeBg: "bg-clay-slushie-500/10",
    badgeText: "text-clay-slushie-500",
    emoji: "🦉"
  },
  {
    id: "scenario2",
    phase: "The Resume Grind",
    title: "The Imposter Syndrome Hustle",
    subtitle: "When passion becomes a checklist",
    desc: "Joining three clubs and two hackathons just to build a resume. Every time you open your IDE, you feel dread instead of excitement.",
    outcome: "The joy of building is replaced by anxiety. Highly productive, but hollow.",
    tags: ["Overcommitment", "Comparison trap"],
    image: "https://image.pollinations.ai/prompt/A_student_looking_overwhelmed_by_floating_resumes_and_code_symbols_dark_atmosphere_feeling_lost_digital_art?width=800&height=600&nologo=true&seed=25",
    color: "text-clay-lemon-500",
    badgeBg: "bg-clay-lemon-500/10",
    badgeText: "text-clay-lemon-500",
    emoji: "🏃"
  },
  {
    id: "scenario3",
    phase: "The Solo Carry",
    title: "The Group Project Burden",
    subtitle: "Doing the work of four people",
    desc: "Teammates stop replying. To save your grade, you silently take over the entire project. You get the 'A', but resent the course.",
    outcome: "You isolate yourself and take on too much burden, accelerating burnout.",
    tags: ["Resentment", "Unfair workload"],
    image: "https://image.pollinations.ai/prompt/One_exhausted_student_carrying_a_heavy_glowing_server_alone_in_the_dark_emotional_metaphorical_art?width=800&height=600&nologo=true&seed=33",
    color: "text-clay-pomegranate-400",
    badgeBg: "bg-clay-pomegranate-400/10",
    badgeText: "text-clay-pomegranate-400",
    emoji: "🏋️"
  }
];

type TechScenario = (typeof techScenarios)[number];

function ScenarioImage({ src, alt, phase }: { src: string; alt: string; phase: TechScenario }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative bg-ui-warm border border-ui-border rounded-3xl p-3 shadow-clay-card overflow-hidden min-h-[250px] md:min-h-[350px] flex items-center justify-center">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-ui-bg/50">
          <span className="text-2xl animate-pulse">⏳</span>
        </div>
      )}
      <img 
        src={src} 
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        referrerPolicy="no-referrer"
        className={`w-full aspect-[4/3] object-cover rounded-2xl relative z-0 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {isLoaded && (
        <div className="absolute bottom-6 left-6 z-20">
          <div className={`text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 ${phase.badgeText} mb-1 ${phase.badgeBg} px-3 py-1.5 rounded-xl backdrop-blur-md inline-block border border-ui-border`}>
            <span>{phase.emoji}</span>
            {phase.phase}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TechLifeExamples() {
  return (
    <section className="section-shell bg-ui-bg">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-20">
          <div className="text-xs font-bold tracking-widest uppercase text-clay-silver mb-4">Real Life</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ui-text mb-6">Burnout in Tech</h2>
          <p className="text-lg text-clay-charcoal max-w-2xl mx-auto">
            Burnout often masquerades as "hustle" or "just getting through the semester."
          </p>
        </div>

        <div className="space-y-32">
          {techScenarios.map((scenario, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={scenario.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center`}
              >
                <div className="w-full md:w-1/2 relative group">
                  <ScenarioImage src={scenario.image} alt={scenario.title} phase={scenario} />
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-ui-text mb-2">{scenario.title}</h3>
                    <p className={`text-sm md:text-base font-bold uppercase ${scenario.color}`}>{scenario.subtitle}</p>
                  </div>
                  
                  <div className="space-y-4 text-clay-charcoal text-sm md:text-base leading-relaxed">
                    <p>{scenario.desc}</p>
                    <div className="bg-ui-warm p-4 rounded-xl border-l-4 border-l-clay-pomegranate-400 border-y border-r border-ui-border shadow-clay-card">
                      <p className="text-sm text-ui-text font-medium">{scenario.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {scenario.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 text-[11px] rounded-lg bg-ui-warm border border-ui-border text-clay-silver font-bold uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
