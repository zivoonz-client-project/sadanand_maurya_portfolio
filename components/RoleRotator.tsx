"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Cycles through a list of roles with a smooth vertical flip. */
export default function RoleRotator({ roles }: { roles: string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-text col-start-1 row-start-1 whitespace-nowrap overflow-hidden text-ellipsis max-w-[85vw] sm:max-w-none"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
