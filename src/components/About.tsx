import Reveal from "./Reveal";
import { education, profile } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-cyan mb-3">
            01 / About
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-600 text-ink mb-10">
            Who I <span className="text-gradient-gold">am</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <Reveal delay={0.1} className="md:col-span-3">
            <p className="text-muted text-base md:text-lg leading-relaxed">
              {profile.summary}
            </p>
            <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">
              Driven by a systems-thinking mindset and a track record of shipping
              end-to-end solutions across web, data, and distributed platforms.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2">
            <div className="border border-border rounded-md bg-panel/60 backdrop-blur-sm p-5 font-mono text-sm">
              <p className="text-gold mb-3">$ cat education.log</p>
              {education.map((e) => (
                <div key={e.school} className="mb-4 last:mb-0">
                  <p className="text-ink">{e.school}</p>
                  <p className="text-muted text-xs mt-1">{e.degree}</p>
                  <p className="text-cyan text-xs mt-1">{e.detail}</p>
                  <p className="text-muted-dim text-xs mt-1">{e.period} · {e.location}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
