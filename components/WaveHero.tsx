"use client";

import { useEffect, useRef } from "react";

/**
 * The full-bleed waveform that breathes behind the hero headline.
 *
 * Idle animation only — this is a marketing surface at rest, not the live
 * app, so it doesn't need real microphone input. The three-layer,
 * staggered-period motion mirrors the app's own documented waveform
 * character (fast-rise/slow-decay, teal/terracotta/amber) without trying
 * to reproduce its exact easing.
 *
 * Positioned behind the hero copy (see page.tsx: z-[-1], low opacity) —
 * it used to sit at full opacity and cut straight through the headline
 * letters before that was toned down.
 */
export default function WaveHero() {
  const primaryRef = useRef<SVGPathElement>(null);
  const secondaryRef = useRef<SVGPathElement>(null);
  const accentRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const layers = [
      { ref: primaryRef, base: 100, amp: 22, speed: 0.9, phase: 0 },
      { ref: secondaryRef, base: 100, amp: 16, speed: 0.6, phase: 1.4 },
      { ref: accentRef, base: 100, amp: 12, speed: 0.45, phase: 2.6 },
    ];

    let t = 0;
    let frame = 0;

    const tick = () => {
      t += 0.012;
      for (const layer of layers) {
        const el = layer.ref.current;
        if (!el) continue;
        const n = 10;
        const w = 720 / n;
        const pts: [number, number][] = [];
        for (let i = 0; i <= n; i++) {
          const x = i * w;
          const y =
            layer.base +
            Math.sin(t * layer.speed * 4 + i * 0.9 + layer.phase) *
              layer.amp *
              (0.6 + 0.4 * Math.sin(t * 0.3 + layer.phase));
          pts.push([x, y]);
        }
        let d = `M${pts[0][0]},${pts[0][1].toFixed(1)}`;
        for (let j = 1; j < pts.length; j++) {
          const [px, py] = pts[j - 1];
          const [cx, cy] = pts[j];
          const midX = (px + cx) / 2;
          d += ` C ${midX},${py.toFixed(1)} ${midX},${cy.toFixed(1)} ${cx},${cy.toFixed(1)}`;
        }
        el.setAttribute("d", d);
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <svg
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 block h-[clamp(160px,26vw,280px)] w-full opacity-[0.14]"
      viewBox="0 0 720 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        ref={accentRef}
        className="fill-none stroke-accent stroke-[5] opacity-55 [stroke-linecap:round]"
        d="M0,100 C 60,60 120,140 180,100 S 300,60 360,100 480,140 540,100 660,60 720,100"
      />
      <path
        ref={secondaryRef}
        className="fill-none stroke-secondary stroke-[5] opacity-75 [stroke-linecap:round]"
        d="M0,100 C 50,130 110,70 170,100 S 290,130 350,100 470,70 530,100 650,130 720,100"
      />
      <path
        ref={primaryRef}
        className="fill-none stroke-primary stroke-[5] [stroke-linecap:round]"
        d="M0,100 C 40,80 90,120 150,100 S 260,80 320,100 430,120 490,100 600,80 660,100 700,90 720,100"
      />
    </svg>
  );
}
