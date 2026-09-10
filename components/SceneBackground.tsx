"use client";

import { useEffect, useRef } from "react";

/**
 * A lightweight, dependency-free 3D particle field rendered on a canvas.
 * Points live in a 3D space, are perspective-projected to 2D, drift toward the
 * camera and wrap around, and gently parallax with the mouse. Nearby points are
 * linked with faint lines to create a "constellation" depth effect.
 */
export default function SceneBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    type P = { x: number; y: number; z: number; r: number; hue: number };
    let points: P[] = [];
    const target = { x: 0, y: 0 };
    const cam = { x: 0, y: 0 };

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const build = () => {
      // Scale particle count to screen size but keep it modest for perf.
      const count = Math.min(
        140,
        Math.max(50, Math.round((width * height) / 16000))
      );
      points = Array.from({ length: count }, () => ({
        x: rand(-width, width),
        y: rand(-height, height),
        z: rand(1, width),
        r: rand(0.6, 2.2),
        hue: rand(220, 280), // indigo → violet → cyan-ish range
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const project = (p: P) => {
      const fov = width * 0.9;
      const scale = fov / (fov + p.z);
      const sx = width / 2 + (p.x + cam.x * 40) * scale;
      const sy = height / 2 + (p.y + cam.y * 40) * scale;
      return { sx, sy, scale };
    };

    let raf = 0;
    const speed = prefersReduced ? 0 : 0.6;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Ease camera toward the pointer for a smooth parallax feel.
      cam.x += (target.x - cam.x) * 0.05;
      cam.y += (target.y - cam.y) * 0.05;

      const projected = points.map((p) => {
        p.z -= speed;
        if (p.z < 1) {
          p.z = width;
          p.x = rand(-width, width);
          p.y = rand(-height, height);
        }
        return { p, ...project(p) };
      });

      // Constellation links between nearby projected points.
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const b = projected[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120) {
            const alpha = (1 - Math.sqrt(d2) / 120) * 0.16;
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha * 0.35})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      // Particles themselves.
      for (const { p, sx, sy, scale } of projected) {
        const radius = Math.max(0.2, p.r * scale);
        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 52%, ${0.12 + scale * 0.3})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onPointer = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer);

    if (prefersReduced) {
      draw(); // render one static frame
      cancelAnimationFrame(raf);
    } else {
      draw();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Drifting aurora blobs behind the particle field */}
      <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-blue-500/10 blur-[120px] animate-aurora" />
      <div className="absolute -right-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-sky-400/10 blur-[120px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-[-12rem] left-1/3 h-[32rem] w-[32rem] rounded-full bg-amber-200/25 blur-[120px] animate-aurora [animation-delay:-12s]" />
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
