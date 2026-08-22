import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PipelineVisualization from "./PipelineVisualization";

type Project = {
  id: string;
  name: string;
  period: string;
  tags: string[];
  featured?: boolean;
  icon?: string;
  github?: string;
  liveDemo?: string;
  summary: string;
  points: string[];
  pipeline?: { id: string; label: string; detail: string }[];
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 28, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 40,
    transition: { duration: 0.2 },
  },
} as const;

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-void/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            ref={contentRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="project-modal relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-border bg-panel/95 backdrop-blur-xl"
          >
            {/* Header with gradient accent */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-cyan/8" />
              <div className="relative p-8 md:p-10">
                {/* Close button */}
                <button
                  onClick={onClose}
                  data-cursor-hover
                  className="absolute top-6 right-6 w-10 h-10 rounded-full border border-border bg-panel/80 flex items-center justify-center text-muted hover:text-ink hover:border-gold/50 transition-all group"
                  aria-label="Close modal"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform group-hover:rotate-90"
                  >
                    <path
                      d="M12 4L4 12M4 4l8 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                {/* Icon + Period */}
                <div className="flex items-center gap-3 mb-4">
                  {project.icon && (
                    <span className="text-3xl">{project.icon}</span>
                  )}
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-gold">
                    {project.featured ? "Featured Project" : "Project"}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display text-3xl md:text-4xl text-ink font-600 mb-2">
                  {project.name}
                </h3>
                <p className="font-mono text-sm text-muted-dim mb-6">
                  {project.period}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-3 py-1.5 rounded-md border border-cyan/25 text-cyan bg-cyan/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="inline-flex items-center gap-2 font-mono text-xs px-5 py-2.5 rounded-lg border border-border bg-panel-light hover:border-ink/40 text-muted hover:text-ink transition-all"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      View Source
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="inline-flex items-center gap-2 font-mono text-xs px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold/90 to-gold-bright/90 text-void font-600 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Body */}
            <div className="p-8 md:p-10 space-y-10">
              {/* Overview */}
              <div>
                <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-cyan mb-4">
                  Overview
                </h4>
                <p className="text-muted text-base leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-cyan mb-5">
                  Key Highlights
                </h4>
                <div className="space-y-4">
                  {project.points.map((pt, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex gap-4 group"
                    >
                      <span className="shrink-0 w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center font-mono text-xs text-gold group-hover:bg-gold/20 transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-muted text-sm leading-relaxed pt-1">
                        {pt}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Pipeline (featured only) */}
              {project.pipeline && (
                <div>
                  <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-cyan mb-5">
                    Architecture Pipeline
                  </h4>
                  <PipelineVisualization steps={project.pipeline} />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
