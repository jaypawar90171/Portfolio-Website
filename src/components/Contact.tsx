import Reveal from "./Reveal";
import { profile } from "../data/resume";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-cyan mb-3">
            06 / Contact
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-600 text-ink mb-6">
            Let's build something{" "}
            <span className="text-gradient-gold">together</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-xl mx-auto mb-10">
            Open to full-stack and Agentic AI opportunities, collaborations,
            or just a good systems-design conversation.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="border border-border rounded-lg bg-panel/60 backdrop-blur-sm p-8 font-mono text-left max-w-md mx-auto">
            <p className="text-gold text-sm mb-4">$ contact --info</p>
            <p className="text-muted text-sm mb-2">
              <span className="text-cyan">email:</span>{" "}
              <a href={`mailto:${profile.email}`} data-cursor-hover className="hover:text-gold transition-colors">
                {profile.email}
              </a>
            </p>
            <p className="text-muted text-sm mb-2">
              <span className="text-cyan">phone:</span> {profile.phone}
            </p>
            <p className="text-muted text-sm mb-2">
              <span className="text-cyan">github:</span>{" "}
              <a href={profile.links.github} target="_blank" rel="noreferrer" data-cursor-hover className="hover:text-gold transition-colors">
                {profile.links.github.replace("https://", "")}
              </a>
            </p>
            <p className="text-muted text-sm">
              <span className="text-cyan">linkedin:</span>{" "}
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" data-cursor-hover className="hover:text-gold transition-colors">
                {profile.links.linkedin.replace("https://", "")}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <a
            href={`mailto:${profile.email}`}
            data-cursor-hover
            className="inline-block mt-10 px-8 py-3 font-mono text-sm tracking-wide text-void bg-gold rounded-sm hover:-translate-y-0.5 transition-transform"
          >
            Say Hello
          </a>
        </Reveal>
      </div>

      <footer className="mt-28 pt-8 border-t border-border text-center">
        <p className="font-mono text-[11px] text-muted-dim">
          © {new Date().getFullYear()} {profile.name} · Built with React &amp; a lot of coffee
        </p>
      </footer>
    </section>
  );
}
