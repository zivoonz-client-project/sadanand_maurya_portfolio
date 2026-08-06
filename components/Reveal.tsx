"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "flip"
  | "flip-y";

const offsets: Record<
  Direction,
  { x?: number; y?: number; scale?: number; rotateX?: number; rotateY?: number }
> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 40 },
  right: { x: -40 },
  scale: { scale: 0.92 },
  flip: { rotateX: 35, y: 30 },
  "flip-y": { rotateY: 30, x: 30 },
};

export default function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
  blur = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
  blur?: boolean;
}) {
  const from = offsets[direction];
  const is3d = direction === "flip" || direction === "flip-y";

  return (
    <motion.div
      className={className}
      style={is3d ? { perspective: 1000 } : undefined}
      initial={{
        opacity: 0,
        x: from.x ?? 0,
        y: from.y ?? 0,
        scale: from.scale ?? 1,
        rotateX: from.rotateX ?? 0,
        rotateY: from.rotateY ?? 0,
        filter: blur ? "blur(8px)" : "blur(0px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
