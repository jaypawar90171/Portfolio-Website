import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import PipelineVisualization from "./PipelineVisualization";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/resume";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const [modalProject, setModalProject] = useState<(typeof projects)[number] | null>(null);

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
            <div className="featured-card-wrapper group">
              <div className="featured-card grid lg:grid-cols-5 gap-8 items-start border border-border rounded-xl bg-panel/60 backdrop-blur-sm p-8 md:p-10 relative overflow-hidden hover:border-gold/30 transition-colors duration-500">
                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] via-transparent to-cyan/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="lg:col-span-2 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    {featured.icon && (
                      <span className="text-2xl">{featured.icon}</span>
                    )}
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold">
                      Featured Project
                    </p>
                  </div>
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
                  <ul className="space-y-2 mb-6">
                    {featured.points.slice(0, 2).map((pt) => (
                      <li key={pt} className="text-muted text-sm leading-relaxed flex gap-2">
                        <span className="text-gold mt-1 shrink-0 text-xs">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setModalProject(featured)}
                      data-cursor-hover
                      className="inline-flex items-center gap-2 font-mono text-xs px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold/90 to-gold-bright/90 text-void font-600 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
                    >
                      Explore Project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                    {featured.github && (
                      <a
                        href={featured.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-panel-light hover:border-ink/40 text-muted hover:text-ink transition-all"
                        aria-label="GitHub repository"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {featured.liveDemo && (
                      <a
                        href={featured.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-panel-light hover:border-cyan/40 text-muted hover:text-cyan transition-all"
                        aria-label="Live demo"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-3 relative z-10">
                  {featured.pipeline && (
                    <PipelineVisualization steps={featured.pipeline} />
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Other projects as enhanced cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <TiltCard className="h-full">
                <div className="project-card h-full border border-border rounded-xl bg-panel/60 backdrop-blur-sm relative overflow-hidden group hover:border-gold/30 transition-colors duration-500">
                  {/* Animated gradient border glow on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none project-card-glow" />

                  {/* Card content */}
                  <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
                    {/* Top row: icon + period */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {project.icon && (
                          <motion.span
                            className="text-2xl"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                          >
                            {project.icon}
                          </motion.span>
                        )}
                        <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-dim">
                          {project.period}
                        </span>
                      </div>

                      {/* Quick action icons */}
                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor-hover
                            className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-transparent hover:border-border text-muted-dim hover:text-ink transition-all"
                            aria-label={`${project.name} GitHub`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                          </a>
                        )}
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor-hover
                            className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-transparent hover:border-border text-muted-dim hover:text-cyan transition-all"
                            aria-label={`${project.name} live demo`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl text-ink font-600 mb-3">
                      {project.name}
                    </h3>

                    {/* Summary */}
                    <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2 py-1 rounded-sm border border-border text-muted group-hover:border-gold/20 group-hover:text-muted transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Key points — show first 2 */}
                    <ul className="space-y-1.5 mb-6">
                      {project.points.slice(0, 2).map((pt) => (
                        <li key={pt} className="text-muted text-xs md:text-sm leading-relaxed flex gap-2">
                          <span className="text-cyan mt-1 shrink-0 text-[10px]">▸</span>
                          <span className="line-clamp-2">{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Spacer to push button to bottom */}
                    <div className="mt-auto" />

                    {/* Explore button */}
                    <button
                      onClick={() => setModalProject(project)}
                      data-cursor-hover
                      className="inline-flex items-center gap-2 font-mono text-xs text-gold hover:text-gold-bright transition-colors group/btn w-fit"
                    >
                      <span>View Details</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover/btn:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
