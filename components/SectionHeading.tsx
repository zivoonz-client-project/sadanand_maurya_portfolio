"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * A consistent, animated section header used across the site: the eyebrow chip
 * drops in, the title unblurs, an accent underline draws itself, and the lede
 * fades up — giving every section a polished, "designed" signature.
 */
export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : ""}>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={`eyebrow ${centered ? "justify-center" : ""}`}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent2" />
        {eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="section-title mt-2"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`mt-3 h-[3px] w-20 origin-left rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 ${
          centered ? "mx-auto" : ""
        }`}
      />

      {children && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`mt-4 text-muted ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {children}
        </motion.p>
      )}
    </div>
  );
}
