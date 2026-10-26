"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { profile, stats, trustBadges } from "@/lib/data";
import Magnetic from "./Magnetic";
import RoleRotator from "./RoleRotator";
import CountUp from "./CountUp";
import TypingHeadline from "./TypingHeadline";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-40 sm:pb-24"
    >
      <div className="container-x">
        <div className="max-w-3xl">
          {/* Content */}
          <div>
            <motion.div
              custom={0}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-1.5 text-sm text-slate-700 shadow-sm backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for freelance & full-time work
            </motion.div>

            <TypingHeadline
              plain={["Hi,", "I'm"]}
              accent={profile.name.split(" ")}
            />

            <motion.div
              custom={2}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-4 flex min-h-[1.6em] items-end text-lg sm:text-2xl md:text-3xl font-bold"
            >
              <RoleRotator roles={profile.roles} />
            </motion.div>

            <motion.p
              custom={3}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              custom={4}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Magnetic>
                <Link href="/projects" className="btn-primary w-full sm:w-auto">
                  View My Work
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href="/Sadanand_Maurya_Resume.pdf"
                  download="Sadanand_Maurya_Resume.pdf"
                  className="btn-ghost w-full sm:w-auto border-blue-600/30 bg-blue-50/70 text-blue-700 hover:bg-blue-100/80 hover:text-blue-900 transition flex items-center justify-center gap-2 font-semibold shadow-sm"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span>Download Resume</span>
                </a>
              </Magnetic>
              <Magnetic>
                <Link href="/contact" className="btn-ghost w-full sm:w-auto">
                  Get in Touch
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full sm:w-auto"
                >
                  GitHub
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              custom={5}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-6 flex flex-wrap gap-2.5"
            >
              {trustBadges.map((b) => (
                <span key={b.label} className="badge">
                  <span>{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              custom={6}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="gradient-text text-2xl font-bold sm:text-3xl">
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-1 text-xs text-muted sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
