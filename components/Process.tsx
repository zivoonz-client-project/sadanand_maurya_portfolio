"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="pb-20 sm:pb-24">
      <div className="container-x">
        <SectionHeading eyebrow="How We'll Work" title={<>A simple, transparent <span className="gradient-text">process</span></>}>
          No confusion, no surprises. Here&apos;s exactly how your project moves
          from idea to launch.
        </SectionHeading>

        <div className="relative mt-12">
          {/* Animated connector line that draws top → bottom, centered on the badges */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute left-[27px] top-3 bottom-3 w-[2px] origin-top bg-gradient-to-b from-indigo-500 via-violet-500/60 to-cyan-400/40"
          />

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <div key={step.no} className="relative flex items-start gap-5 sm:gap-7">
                {/* Number node with a ping halo */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-full border border-accent/40 bg-surface text-base font-bold text-accent2 shadow-lg shadow-indigo-500/20"
                >
                  <span className="absolute inset-0 rounded-full border border-accent/30 animate-ping opacity-40" />
                  {step.no}
                </motion.div>

                {/* Step card — flips in from the side in 3D */}
                <motion.div
                  initial={{
                    opacity: 0,
                    rotateY: i % 2 === 0 ? 22 : -22,
                    x: 50,
                    filter: "blur(8px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    rotateY: 0,
                    x: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ perspective: 1000 }}
                  className="card card-glow group min-w-0 flex-1 p-6"
                >
                  <div className="text-xs font-semibold uppercase tracking-widest text-accent2">
                    Step {step.no}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-accent2">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{step.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
