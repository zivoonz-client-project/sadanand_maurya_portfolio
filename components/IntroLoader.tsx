"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * A one-time cinematic intro: the name glows in over a dark curtain, a loader
 * bar fills, then the curtain splits into panels and slides away to reveal the
 * site. Shown once per browser session so navigation stays snappy.
 */
export default function IntroLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || sessionStorage.getItem("intro-seen")) return;

    setShow(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      sessionStorage.setItem("intro-seen", "1");
      setShow(false);
      document.body.style.overflow = "";
    }, 2200);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          exit={{ transition: { duration: 0.1 } }}
        >
          {/* Two panels that split apart to reveal the page */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[#faf8f5]"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-[#faf8f5]"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Ambient glow */}
          <div className="pointer-events-none absolute h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />

          {/* Center content fades out just before the panels split */}
          <motion.div
            className="relative flex flex-col items-center"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotateX: 40 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-400 text-3xl font-black text-white shadow-xl shadow-blue-600/30"
              style={{ perspective: 600 }}
            >
              SM
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              <span className="gradient-text">Sadanand</span> <span className="text-slate-900">Maurya</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-1 text-sm text-muted"
            >
              Full Stack Software Engineer
            </motion.p>

            {/* Loader bar */}
            <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-[#e8e2d8]">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
