import { useEffect, useRef, useState } from "react";

/**
 * Small glowing dot cursor with a trailing spark. Desktop only —
 * disabled on touch devices and when reduced motion is preferred.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || prefersReduced) return;
    setEnabled(true);

    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a,button,[data-cursor-hover]");
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? "44px" : "28px";
        ringRef.current.style.height = interactive ? "44px" : "28px";
        ringRef.current.style.borderColor = interactive
          ? "rgba(212,175,55,0.9)"
          : "rgba(34,211,238,0.6)";
      }
    }

    let rafId: number;
    function tick() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      rafId = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_2px_rgba(212,175,55,0.8)]"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-7 h-7 rounded-full border pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-200"
        style={{ borderColor: "rgba(34,211,238,0.6)" }}
      />
    </>
  );
}
