"use client";

import { useEffect, useState } from "react";

/**
 * Types the headline out one character at a time on load (real typewriter),
 * with a blinking caret. Characters in the `plain` part render white; the
 * `accent` part (the name) renders in the brand gradient.
 */
export default function TypingHeadline({
  plain,
  accent,
}: {
  plain: string[];
  accent: string[];
}) {
  const plainText = plain.join(" ") + " ";
  const accentText = accent.join(" ");
  const full = plainText + accentText;

  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setCount(full.length);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= full.length) clearInterval(id);
    }, 90); // ~90ms per letter
    return () => clearInterval(id);
  }, [full.length]);

  const shown = full.slice(0, count);
  const plainShown = shown.slice(0, Math.min(count, plainText.length));
  const accentShown =
    count > plainText.length ? shown.slice(plainText.length) : "";

  const done = count >= full.length;

  return (
    <h1
      aria-label={full.trim()}
      className="min-h-[2.4em] text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:min-h-[1.2em] sm:text-6xl"
    >
      <span className="whitespace-pre-wrap text-white">{plainShown}</span>
      <span className="gradient-text text-glow whitespace-pre-wrap">
        {accentShown}
      </span>
      {/* blinking caret */}
      <span
        className={`ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] rounded-full bg-accent2 align-middle ${
          done ? "animate-pulse" : ""
        }`}
      />
    </h1>
  );
}
