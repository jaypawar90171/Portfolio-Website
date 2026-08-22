import Reveal from "./Reveal";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-cyan mb-3">
            02 / Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-600 text-ink mb-16">
            Where I've <span className="text-gradient-gold">worked</span>
          </h2>
        </Reveal>

        <div className="relative pl-8 md:pl-10">
          {/* vertical circuit trace */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-cyan/60 to-transparent" />

          {experience.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.15} className="relative mb-14 last:mb-0">
              <span className="absolute -left-[34px] md:-left-[42px] top-1.5 w-3 h-3 rounded-full bg-void border-2 border-gold shadow-[0_0_10px_2px_rgba(212,175,55,0.5)]" />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <h3 className="font-display text-xl md:text-2xl text-ink font-600">
                  {job.role}
                </h3>
                <span className="font-mono text-xs text-muted-dim">{job.period}</span>
              </div>
              <p className="font-mono text-sm text-cyan mb-4">
                {job.org} <span className="text-muted-dim">· {job.location}</span>
              </p>
              <ul className="space-y-2">
                {job.points.map((pt) => (
                  <li key={pt} className="text-muted text-sm md:text-base leading-relaxed flex gap-3">
                    <span className="text-gold mt-1.5 shrink-0 text-xs">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
