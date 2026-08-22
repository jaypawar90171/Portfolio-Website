import { useRef, useState, type ReactNode, type MouseEvent } from "react";

/**
 * Wraps children in a card that tilts in 3D toward the cursor,
 * with a glow that follows the pointer. CSS-only 3D transform —
 * no WebGL dependency required.
 */
export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (0.5 - y) * 10;
    const rotateY = (x - 0.5) * 10;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`,
    });
    setGlow({ x: x * 100, y: y * 100, opacity: 1 });
  }

  function handleLeave() {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)",
    });
    setGlow((g) => ({ ...g, opacity: 0 }));
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300"
        style={{
          opacity: glow.opacity,
          background: `radial-gradient(300px circle at ${glow.x}% ${glow.y}%, rgba(212,175,55,0.15), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}
