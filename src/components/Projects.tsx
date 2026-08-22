import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import PipelineVisualization from "./PipelineVisualization";
import { projects } from "../data/resume";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-cyan mb-3">
            03 / Projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-600 text-ink mb-16">
            Things I've <span className="text-gradient-gold">built</span>
          </h2>
        </Reveal>

        {/* Featured project with interactive pipeline */}
        {featured && (
          <Reveal className="mb-20">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                  Featured Project
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-ink font-600 mb-2">
                  {featured.name}
                </h3>
                <p className="font-mono text-xs text-muted-dim mb-4">{featured.period}</p>
                <p className="text-muted text-sm md:text-base leading-relaxed mb-5">
                  {featured.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-sm border border-cyan/30 text-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {featured.points.map((pt) => (
                    <li key={pt} className="text-muted text-sm leading-relaxed flex gap-2">
                      <span className="text-gold mt-1 shrink-0 text-xs">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3">
                {featured.pipeline && (
                  <PipelineVisualization steps={featured.pipeline} />
                )}
              </div>
            </div>
          </Reveal>
        )}

        {/* Other projects as tilt cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <TiltCard className="h-full">
                <div className="h-full border border-border rounded-lg bg-panel/60 backdrop-blur-sm p-6 hover:border-gold/40 transition-colors">
                  <h3 className="font-display text-xl text-ink font-600 mb-1">
                    {project.name}
                  </h3>
                  <p className="font-mono text-xs text-muted-dim mb-4">{project.period}</p>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-1 rounded-sm border border-border text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1.5">
                    {project.points.map((pt) => (
                      <li key={pt} className="text-muted text-xs md:text-sm leading-relaxed flex gap-2">
                        <span className="text-cyan mt-1 shrink-0 text-[10px]">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
