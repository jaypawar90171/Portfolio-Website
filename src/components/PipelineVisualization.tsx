import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

type PipelineStep = {
  id: string;
  label: string;
  detail: string;
};

export default function PipelineVisualization({
  steps,
}: {
  steps: PipelineStep[];
}) {
  const [active, setActive] = useState(0);
  const { theme } = useTheme();
  const isLight = theme === "light";
  const gold = isLight ? "#9e7d0a" : "#d4af37";
  const panel = isLight ? "#ffffff" : "#0a0e17";
  const border = isLight ? "#e2e8f0" : "#1b2233";

  return (
    <div className="border border-border rounded-lg bg-panel/70 backdrop-blur-sm p-5 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-cyan">
          Live Agent Pipeline
        </p>
        <p className="font-mono text-xs text-muted-dim">
          step {active + 1} / {steps.length}
        </p>
      </div>

      {/* Node row */}
      <div className="relative flex items-center justify-between mb-8 overflow-x-auto pt-3 pb-2">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-border" />
        {/* progress line */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-gold to-cyan"
          initial={false}
          animate={{
            width: steps.length > 1 ? `${(active / (steps.length - 1)) * 100}%` : "0%",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {steps.map((step, i) => (
          <button
            key={step.id}
            onClick={() => setActive(i)}
            data-cursor-hover
            className="relative z-10 flex flex-col items-center gap-2 shrink-0 px-2 group"
            aria-current={active === i}
          >
            <motion.span
              animate={{
                scale: active === i ? 1.25 : 1,
                backgroundColor: i <= active ? gold : panel,
                borderColor: i <= active ? gold : border,
              }}
              transition={{ duration: 0.3 }}
              className="w-4 h-4 rounded-full border-2"
              style={{
                boxShadow: active === i ? `0 0 12px 3px ${isLight ? "rgba(158,125,10,0.45)" : "rgba(212,175,55,0.6)"}` : "none",
              }}
            />
            <span
              className={`font-mono text-[10px] md:text-xs whitespace-nowrap transition-colors ${
                active === i ? "text-gold" : "text-muted-dim group-hover:text-muted"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={steps[active].id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="min-h-[110px]"
        >
          <h4 className="font-display text-lg md:text-xl text-ink mb-2">
            {steps[active].label}
          </h4>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            {steps[active].detail}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setActive((a) => Math.max(0, a - 1))}
          disabled={active === 0}
          data-cursor-hover
          className="font-mono text-xs px-4 py-2 border border-border rounded-sm text-muted hover:text-cyan hover:border-cyan/50 transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          ← prev
        </button>
        <button
          onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}
          disabled={active === steps.length - 1}
          data-cursor-hover
          className="font-mono text-xs px-4 py-2 border border-border rounded-sm text-muted hover:text-gold hover:border-gold/50 transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          next →
        </button>
      </div>
    </div>
  );
}
