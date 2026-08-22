import { useEffect, useRef } from "react";

/**
 * Full-viewport animated circuit-trace background.
 * Draws a grid of right-angled "PCB trace" paths with traveling light pulses.
 * Pure canvas — no heavy 3D dependency, cheap to run, respects reduced-motion.
 */
export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Trace = {
      points: { x: number; y: number }[];
      progress: number;
      speed: number;
      color: string;
      width: number;
    };

    let traces: Trace[] = [];

    function resize() {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildTraces();
    }

    function buildTraces() {
      traces = [];
      const cols = Math.max(6, Math.floor(width / 180));
      const rows = Math.max(4, Math.floor(height / 180));
      const cellW = width / cols;
      const cellH = height / rows;
      const count = Math.min(26, Math.floor((cols * rows) / 3));

      for (let i = 0; i < count; i++) {
        const startCol = Math.floor(Math.random() * cols);
        const startRow = Math.floor(Math.random() * rows);
        let x = startCol * cellW;
        let y = startRow * cellH;
        const segs = 2 + Math.floor(Math.random() * 3);
        const points = [{ x, y }];

        for (let s = 0; s < segs; s++) {
          const horizontal = Math.random() > 0.5;
          if (horizontal) {
            x += (Math.random() > 0.5 ? 1 : -1) * cellW * (1 + Math.floor(Math.random() * 2));
          } else {
            y += (Math.random() > 0.5 ? 1 : -1) * cellH * (1 + Math.floor(Math.random() * 2));
          }
          x = Math.max(0, Math.min(width, x));
          y = Math.max(0, Math.min(height, y));
          points.push({ x, y });
        }

        traces.push({
          points,
          progress: Math.random(),
          speed: 0.0015 + Math.random() * 0.002,
          color: Math.random() > 0.65 ? "34,211,238" : "212,175,55", // cyan or gold
          width: Math.random() > 0.85 ? 1.4 : 0.8,
        });
      }
    }

    function pathLength(points: { x: number; y: number }[]) {
      let len = 0;
      for (let i = 1; i < points.length; i++) {
        len += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
      }
      return len;
    }

    function pointAt(points: { x: number; y: number }[], t: number) {
      const total = pathLength(points);
      let target = total * t;
      for (let i = 1; i < points.length; i++) {
        const segLen = Math.hypot(
          points[i].x - points[i - 1].x,
          points[i].y - points[i - 1].y
        );
        if (target <= segLen) {
          const ratio = segLen === 0 ? 0 : target / segLen;
          return {
            x: points[i - 1].x + (points[i].x - points[i - 1].x) * ratio,
            y: points[i - 1].y + (points[i].y - points[i - 1].y) * ratio,
          };
        }
        target -= segLen;
      }
      return points[points.length - 1];
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const trace of traces) {
        // faint static trace line
        ctx.beginPath();
        ctx.moveTo(trace.points[0].x, trace.points[0].y);
        for (const p of trace.points.slice(1)) ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `rgba(${trace.color},0.08)`;
        ctx.lineWidth = trace.width;
        ctx.stroke();

        // node dots
        for (const p of trace.points) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${trace.color},0.15)`;
          ctx.fill();
        }

        if (!prefersReduced) {
          // traveling pulse
          const pos = pointAt(trace.points, trace.progress);
          const gradient = ctx.createRadialGradient(
            pos.x, pos.y, 0,
            pos.x, pos.y, 14
          );
          gradient.addColorStop(0, `rgba(${trace.color},0.9)`);
          gradient.addColorStop(1, `rgba(${trace.color},0)`);
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 14, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${trace.color},1)`;
          ctx.fill();

          trace.progress += trace.speed;
          if (trace.progress > 1) trace.progress = 0;
        }
      }
    }

    let rafId: number;
    function loop() {
      draw();
      rafId = requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener("resize", resize);

    if (prefersReduced) {
      draw(); // static single frame
    } else {
      loop();
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-70"
    />
  );
}
