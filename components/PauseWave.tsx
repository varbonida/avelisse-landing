"use client";

import { useEffect, useRef } from "react";

/** The quiet single-line wave in the "still listening" demo card. */
export default function PauseWave() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let t = 0;
    let frame = 0;

    const tick = () => {
      t += 0.02;
      const el = pathRef.current;
      if (el) {
        const n = 8;
        const w = 400 / n;
        const pts: [number, number][] = [];
        for (let i = 0; i <= n; i++) {
          const x = i * w;
          const y = 32 + Math.sin(t * 1.6 + i * 0.8) * 14;
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
      className="mb-3.5 block h-16 w-full"
      viewBox="0 0 400 64"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        className="fill-none stroke-primary stroke-[4] [stroke-linecap:round]"
        d="M0,32 C10,14 20,50 30,32 S50,14 60,32 80,50 90,32 110,14 120,32"
      />
    </svg>
  );
}
