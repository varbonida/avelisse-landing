"use client";

import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";

/**
 * Fade-and-rise on first scroll into view — the page's one motion grammar,
 * applied once per element rather than a different effect per section.
 *
 * Clones its single child rather than wrapping it in an extra <div>, so a
 * grid or flex child stays the actual grid/flex item; wrapping it would
 * silently break every layout that assumes `.reveal` sits directly in the
 * grid (several sections on this page do).
 *
 * WHY "armed" rather than deciding the reveal state up front: the server
 * has no `window`, so anything the initial render decides based on it will
 * disagree with the client's first paint and React refuses to patch that
 * up - a real hydration mismatch, not a cosmetic warning. The fix is to
 * render exactly what the server rendered - the child, untouched - until
 * after mount, and only start the fade-in machinery on the next tick.
 */
export default function Reveal({
  children,
}: {
  children: ReactElement<{ className?: string }>;
}) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // The documented pattern for deferring client-only rendering past
    // hydration: this can only run after the server-matching first paint
    // has already committed, so the extra render it triggers is exactly
    // one, not a cascade.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setArmed(true);

    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!isValidElement(children)) return children;

  // Not armed yet: identical to what the server sent, so hydration has
  // nothing to disagree about.
  if (!armed) {
    // eslint-disable-next-line react-hooks/refs
    return cloneElement(children, { ref } as never);
  }

  const motion = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-3.5";

  const className =
    `${children.props.className ?? ""} ${motion} transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0`.trim();

  // eslint-disable-next-line react-hooks/refs
  return cloneElement(children, { ref, className } as never);
}
