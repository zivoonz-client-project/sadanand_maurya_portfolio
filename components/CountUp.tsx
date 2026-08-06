"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Counts up to the numeric part of a value (e.g. "4+", "100%") the first time
 * it scrolls into view, preserving any prefix/suffix like "+" or "%".
 */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  // Parse once — stable across renders so the animation never restarts.
  const parsed = useMemo(() => {
    const m = value.match(/(\d+)/);
    if (!m) return null;
    const target = parseInt(m[1], 10);
    return {
      target,
      prefix: value.slice(0, m.index ?? 0),
      suffix: value.slice((m.index ?? 0) + m[1].length),
    };
  }, [value]);

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || !parsed) return;
    const controls = animate(0, parsed.target, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, parsed]);

  if (!parsed) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {parsed.prefix}
      {inView ? display : 0}
      {parsed.suffix}
    </span>
  );
}
