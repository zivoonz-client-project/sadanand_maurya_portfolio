"use client";

import { motion } from "framer-motion";

/**
 * Next.js re-mounts this template on every route change, so it's the perfect
 * place for an entrance animation. Children stagger up while the whole page
 * scales/unblurs in for a lively, "exciting" reveal on every navigation.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.985, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
