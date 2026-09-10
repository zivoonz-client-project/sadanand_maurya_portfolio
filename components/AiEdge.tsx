"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import Reveal from "./Reveal";

const pipeline = [
  { icon: "💡", label: "Your Idea", sub: "We scope it together" },
  { icon: "🤖", label: "AI + Engineering", sub: "Build at high speed" },
  { icon: "🚀", label: "Live Product", sub: "Shipped & deployed" },
];

const features = [
  {
    icon: "⚡",
    title: "Rapid Development",
    desc: "AI-assisted coding turns ideas into working websites & apps in days — not months.",
  },
  {
    icon: "🧠",
    title: "AI Features Built-in",
    desc: "Chatbots, smart search, content generation & automation baked right into your product.",
  },
  {
    icon: "🎯",
    title: "Quality, Kept",
    desc: "AI speeds me up — clean architecture, testing & reviews keep everything solid.",
  },
  {
    icon: "🔁",
    title: "Fast Iteration",
    desc: "Quick prototypes and revisions, so we refine to exactly what you imagined.",
  },
];

export default function AiEdge() {
  return (
    <section className="pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="AI-Powered Workflow"
          title={
            <>
              I build faster with <span className="gradient-text">AI</span>
            </>
          }
          align="center"
        >
          I pair strong engineering fundamentals with modern AI tools to design,
          build and ship production-ready websites & apps in a fraction of the
          usual time — without cutting corners on quality.
        </SectionHeading>

        {/* Animated Idea → AI → Live pipeline */}
        <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          {pipeline.map((p, i) => (
            <div key={p.label} className="flex items-center gap-4 sm:gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 16,
                }}
                className="glass flex flex-1 items-center gap-3 rounded-2xl px-5 py-4 sm:flex-none"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/60 text-xl shadow-sm">
                  {p.icon}
                </span>
                <div>
                  <div className="font-semibold leading-tight text-slate-900">{p.label}</div>
                  <div className="text-xs text-muted">{p.sub}</div>
                </div>
              </motion.div>

              {/* animated connector arrow (not after the last item) */}
              {i < pipeline.length - 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.15 }}
                  className="mx-auto text-2xl text-accent2 sm:mx-0"
                >
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    className="inline-block rotate-90 sm:rotate-0"
                  >
                    →
                  </motion.span>
                </motion.span>
              )}
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} direction="flip">
              <TiltCard className="h-full">
                <div className="card card-glow group h-full p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4efe6] text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                    {f.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {f.desc}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/90 via-sky-50/70 to-amber-50/50 p-6 shadow-sm">
            <p className="text-lg font-medium text-slate-900">
              Have an idea?{" "}
              <span className="text-muted">
                Let&apos;s build it fast with AI.
              </span>
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Project →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
