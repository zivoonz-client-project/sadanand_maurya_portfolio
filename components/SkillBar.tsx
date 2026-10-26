"use client";

import { motion } from "framer-motion";

export default function SkillBar({
  name,
  level,
  badge,
  accent = "from-blue-600 via-indigo-600 to-sky-500",
  delay = 0,
}: {
  name: string;
  level: number;
  badge?: string;
  accent?: string;
  delay?: number;
}) {
  return (
    <div className="group/bar transition-all duration-300">
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-semibold text-xs sm:text-sm text-slate-800 truncate group-hover/bar:text-blue-600 transition-colors">
            {name}
          </span>
          {badge && (
            <span className="hidden sm:inline-flex rounded-full border border-slate-200/80 bg-slate-100/70 px-2 py-0.2 text-[10px] font-semibold text-slate-600">
              {badge}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 flex-none">
          <span className="text-xs font-bold text-slate-900 tabular-nums">
            {level}%
          </span>
        </div>
      </div>

      {/* Progress Track */}
      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-200/60 p-[1px] border border-border/80">
        <motion.div
          className={`relative h-full rounded-full bg-gradient-to-r ${accent} shadow-sm`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle shimmer highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />
          
          {/* Glowing pulse tip */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white shadow-sm ring-2 ring-white/50" />
        </motion.div>
      </div>
    </div>
  );
}
