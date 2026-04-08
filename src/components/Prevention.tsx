import { CheckCircle2 } from 'lucide-react';

export default function Prevention() {
  return (
    <section className="py-32 px-6 bg-ui-bg border-b border-ui-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-xs font-bold tracking-widest uppercase text-clay-silver mb-4">Recovery Strategies</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ui-text mb-6">Restoring Your Health</h2>
          <p className="text-lg text-clay-charcoal font-normal mb-16 max-w-3xl mx-auto">
            Burnout is not solved by pushing harder, or by collapsing. It requires deliberate action at three levels: yourself, your team, and your environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-ui-warm border-2 border-ui-border shadow-clay-card hover-brutalist-sm">
            <h3 className="text-xl font-bold tracking-tight text-ui-text mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-clay-matcha-600/20 flex items-center justify-center text-clay-matcha-300">🌿</span> Individual Level
            </h3>
            <ul className="space-y-4">
              {[
                "Name it. Recognising the signs is the first step.",
                "Protect recovery time — real rest, not passive scrolling.",
                "Reduce commitments without guilt. You cannot pour from empty.",
                "Speak to a mentor or professional — someone you trust.",
                "Reconnect with one thing you do purely for yourself."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-clay-charcoal">
                  <CheckCircle2 className="w-5 h-5 text-clay-matcha-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-ui-warm border-2 border-ui-border shadow-clay-card hover-brutalist-sm">
            <h3 className="text-xl font-bold tracking-tight text-ui-text mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-clay-lemon-500/20 flex items-center justify-center text-clay-lemon-500">🤝</span> Team Level
            </h3>
            <ul className="space-y-4">
              {[
                "Check in on colleagues — not just their tasks.",
                "Redistribute load before someone collapses.",
                "Acknowledge effort explicitly and consistently.",
                "Create space for people to say \"I'm struggling.\"",
                "Celebrate small wins — recognition fuels sustainability."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-clay-charcoal">
                  <CheckCircle2 className="w-5 h-5 text-clay-lemon-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-ui-warm border-2 border-ui-border shadow-clay-card hover-brutalist-sm">
            <h3 className="text-xl font-bold tracking-tight text-ui-text mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-clay-slushie-500/20 flex items-center justify-center text-clay-slushie-500">🏛</span> System Level
            </h3>
            <ul className="space-y-4">
              {[
                "Advocate for sustainable workload structures.",
                "Document and hand over — don't make yourself irreplaceable at cost to yourself.",
                "Build systems that outlast your involvement.",
                "If appreciation is absent, that is a system problem — not yours to fix alone.",
                "Know when to disconnect. That is wisdom, not failure."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-clay-charcoal">
                  <CheckCircle2 className="w-5 h-5 text-clay-slushie-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-6 bg-ui-warm border-2 border-ui-border rounded-2xl text-center max-w-3xl mx-auto shadow-clay-card">
          <p className="text-sm text-clay-charcoal leading-relaxed">
            <strong className="text-ui-text font-bold uppercase tracking-wider">Research Note:</strong> Leiter & Maslach (2009) showed organizational factors — workload, control, reward, fairness, community, and values — are stronger predictors of burnout than individual personality. You are not the problem. The system often is.
          </p>
        </div>
      </div>
    </section>
  );
}
