import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "../data/resume";

const CATEGORY_COLORS: Record<string, string> = {
  Languages: "#d4af37",
  "Frameworks & Libraries": "#22d3ee",
  "AI & Agentic Systems": "#f4d03f",
  Databases: "#22d3ee",
  "DevOps & Tools": "#d4af37",
  Blockchain: "#22d3ee",
  Other: "#8892a6",
};

export default function Skills() {
  const categories = Object.entries(skills);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-cyan mb-3">
            04 / Skills
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-600 text-ink mb-16">
            My <span className="text-gradient-gold">stack</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(([category, list], i) => {
            const color = CATEGORY_COLORS[category] || "#8892a6";
            return (
              <Reveal key={category} delay={i * 0.08}>
                <div
                  onMouseEnter={() => setHovered(category)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative border border-border rounded-lg bg-panel/60 backdrop-blur-sm p-5 h-full"
                  style={{
                    borderColor: hovered === category ? color : undefined,
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <motion.span
                      animate={{
                        boxShadow:
                          hovered === category
                            ? `0 0 10px 2px ${color}`
                            : `0 0 0px 0px ${color}`,
                      }}
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: color }}
                    />
                    <h3 className="font-mono text-xs tracking-widest uppercase text-ink">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {list.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1.5 rounded-sm text-muted border transition-colors"
                        style={{
                          borderColor: hovered === category ? `${color}66` : "#1b2233",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* connector nub, purely decorative circuit motif */}
                  <span
                    className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 rounded-tl-md"
                    style={{ borderColor: hovered === category ? color : "transparent" }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
