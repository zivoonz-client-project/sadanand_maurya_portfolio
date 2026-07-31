"use client";

import { motion } from "framer-motion";

export default function SkillBar({
  name,
  level,
  delay = 0,
}: {
  name: string;
  level: number;
  delay?: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="font-medium text-white/90">{name}</span>
        <span className="text-sm font-semibold text-muted">{level}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
