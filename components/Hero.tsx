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
                <Link href="/contact" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                  <span>Free Consultation →</span>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/projects" className="btn-ghost w-full sm:w-auto">
                  View My Work
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href={`https://wa.me/${profile.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                    "Hi Sadanand, I would like to consult regarding a digital project for my business."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full sm:w-auto border-emerald-500/40 bg-emerald-50/70 text-emerald-800 hover:bg-emerald-100/90 font-semibold flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-emerald-600">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
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
                  <span>Resume</span>
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
