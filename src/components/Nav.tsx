import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" data-cursor-hover className="font-mono text-gold text-sm tracking-wider">
          JDP<span className="text-cyan">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-cursor-hover
                className="font-mono text-xs tracking-widest uppercase text-muted hover:text-cyan transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          data-cursor-hover
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden text-ink font-mono text-lg"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-panel border-t border-border px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm tracking-widest uppercase text-muted hover:text-cyan transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
