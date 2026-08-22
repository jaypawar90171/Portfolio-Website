import { motion } from "framer-motion";
import { profile } from "../data/resume";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const typed = useTypewriter(profile.taglineWords);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-display font-700 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
      >
        <span className="text-ink">Hi, I'm </span>
        <span className="text-gradient-gold">Jay</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-6 font-mono text-lg sm:text-2xl md:text-3xl text-muted h-10 flex items-center justify-center"
      >
        <span>{typed}</span>
        <span className="w-[2px] h-6 md:h-8 bg-cyan ml-1 blink-cursor" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-8 max-w-2xl text-muted text-base md:text-lg leading-relaxed"
      >
        {profile.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          data-cursor-hover
          className="group relative px-7 py-3 font-mono text-sm tracking-wide text-void bg-gold rounded-sm overflow-hidden transition-transform hover:-translate-y-0.5"
        >
          <span className="relative z-10">View Projects</span>
        </a>
        <a
          href="./Jay_Deepak_Pawar_Resume.pdf"
          download="Jay_Deepak_Pawar_Resume.pdf"
          data-cursor-hover
          className="inline-flex items-center gap-2 px-7 py-3 font-mono text-sm tracking-wide text-cyan border border-cyan/40 rounded-sm hover:bg-cyan/10 transition-colors hover:-translate-y-0.5 duration-200"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-muted-dim tracking-[0.2em] uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-cyan to-transparent"
        />
      </motion.div>
    </section>
  );
}
