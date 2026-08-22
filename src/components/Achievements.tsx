import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { stats, achievements, certificates } from "../data/resume";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-cyan mb-3">
            05 / Track Record
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-600 text-ink mb-16">
            Numbers &amp; <span className="text-gradient-gold">wins</span>
          </h2>
        </Reveal>

        {/* Stat grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="border border-border rounded-lg bg-panel/60 backdrop-blur-sm p-6 text-center">
                <p className="font-display text-3xl md:text-4xl text-gradient-gold font-700">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="font-mono text-[10px] md:text-xs text-muted mt-2 tracking-wide uppercase">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Achievements */}
          <Reveal>
            <h3 className="font-mono text-xs tracking-widest uppercase text-cyan mb-6">
              Achievements
            </h3>
            <div className="space-y-5">
              {achievements.map((a) => (
                <div key={a.title} className="flex gap-3">
                  <span className="text-gold shrink-0">◆</span>
                  <div>
                    <p className="text-ink text-sm md:text-base">{a.title}</p>
                    <p className="text-muted-dim text-xs md:text-sm mt-0.5">{a.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Certificates */}
          <Reveal delay={0.15}>
            <h3 className="font-mono text-xs tracking-widest uppercase text-cyan mb-6">
              Certificates
            </h3>
            <div className="space-y-5">
              {certificates.map((c) => (
                <div key={c.title} className="flex gap-3">
                  <span className="text-cyan shrink-0">◆</span>
                  <div>
                    <p className="text-ink text-sm md:text-base">{c.title}</p>
                    <p className="text-muted-dim text-xs md:text-sm mt-0.5">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
