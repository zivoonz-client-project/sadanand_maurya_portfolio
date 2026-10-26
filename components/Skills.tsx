"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import SkillBar from "./SkillBar";
import { skillGroups, type SkillGroup } from "@/lib/data";

const categories = [
  { id: "all", label: "All Stack", icon: "⚡" },
  { id: "mobile", label: "Mobile (Flutter)", icon: "📱" },
  { id: "frontend", label: "Frontend & Web", icon: "🎨" },
  { id: "backend", label: "Backend & APIs", icon: "⚙️" },
  { id: "database", label: "Databases", icon: "🗄️" },
  { id: "devops", label: "DevOps & Launch", icon: "🚀" },
];

const stats = [
  { value: "92%", label: "Average Core Mastery", sub: "Flutter, React, Laravel" },
  { value: "6+", label: "Shipped Live Products", sub: "Websites & Mobile Apps" },
  { value: "100%", label: "Clean Architecture", sub: "Repository & Offline First" },
  { value: "2+ Yrs", label: "Production Experience", sub: "Enterprise & Freelance" },
];

const standards = [
  {
    icon: "📱",
    title: "60 FPS Native Performance",
    desc: "Flutter widget tree optimization, selective Riverpod state rebuilding, and smooth micro-interactions that feel completely native.",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    icon: "🔄",
    title: "Offline-First Resilience",
    desc: "Built-in local SQLite / SharedPreferences queues with Client UUID idempotency, ensuring zero data loss during flaky connectivity.",
    accent: "from-blue-600 to-indigo-600",
  },
  {
    icon: "🔐",
    title: "Hardened Security & Auth",
    desc: "JWT, Laravel Sanctum token gates, AES-grade client encryption, role-based access control, and strict input validation.",
    accent: "from-rose-500 to-red-600",
  },
  {
    icon: "⚡",
    title: "Production Speed & SEO",
    desc: "Next.js App Router, SSR/SSG caching, 95+ Core Web Vitals, CDN assets, and pre-rendered open-graph social metadata.",
    accent: "from-emerald-500 to-teal-600",
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredGroups =
    selectedCategory === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.category === selectedCategory || g.id === selectedCategory);

  return (
    <section id="skills" className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 bottom-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="container-x relative">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              Technical Capabilities &amp; Expertise
            </span>
            <h2 className="section-title mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Engineered for <span className="gradient-text">Performance &amp; Scale</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              A battle-tested full-stack and mobile engineering toolkit spanning cross-platform Flutter applications, modern Next.js frontends, scalable Laravel backends, and cloud deployment pipelines.
            </p>
          </div>
        </Reveal>

        {/* Top Stats Ribbon */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="card card-hover p-4 sm:p-5 text-center relative overflow-hidden group"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                <p className="text-2xl sm:text-4xl font-extrabold gradient-text tracking-tight">
                  {s.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-slate-800">
                  {s.label}
                </p>
                <p className="text-[11px] text-muted hidden sm:block mt-0.5">
                  {s.sub}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Interactive Category Filter Tabs */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-2xl border border-slate-200/80 bg-white/80 p-1.5 shadow-sm backdrop-blur-md max-w-full">
              {categories.map((c) => {
                const active = selectedCategory === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`relative rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                      active ? "text-white" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeSkillTab"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 shadow-md shadow-blue-500/25"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span>{c.icon}</span>
                      <span>{c.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Filtered 3D Tilt Skill Cards Grid */}
        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group, i) => (
              <motion.div
                key={group.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <TiltCard className="h-full" max={6}>
                  <div className="card card-glow group relative flex h-full flex-col overflow-hidden p-6 sm:p-7 border border-slate-200/80 hover:border-blue-400/50 hover:shadow-xl transition-all duration-500 bg-white/95">
                    {/* Glowing Accent Top Bar */}
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${group.accent}`} />

                    {/* Ambient Glow */}
                    <div
                      className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gradient-to-br ${group.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                    />

                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent} text-2xl text-white shadow-md shadow-blue-500/15 transition-transform duration-300 group-hover:scale-105`}>
                          {group.icon}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {group.title}
                          </h3>
                          <span className="inline-block text-[11px] font-semibold text-slate-500">
                            {group.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-3.5 text-xs sm:text-[13px] leading-relaxed text-muted">
                      {group.description}
                    </p>

                    {/* Skill Bars */}
                    <div className="mt-5 space-y-3.5 flex-1">
                      {group.skills.map((s, j) => (
                        <SkillBar
                          key={s.name}
                          name={s.name}
                          level={s.level}
                          badge={s.badge}
                          accent={s.accent || group.accent}
                          delay={j * 0.05}
                        />
                      ))}
                    </div>

                    {/* Related Shipped Projects footer */}
                    {group.projects && group.projects.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-border/80 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 mr-1">
                          Shipped In:
                        </span>
                        {group.projects.map((proj) => (
                          <Link
                            key={proj}
                            href="/projects"
                            className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition"
                          >
                            {proj}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Engineering Standards & Architecture DNA */}
        <div className="mt-20 pt-12 border-t border-border">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent2">
                Production Rigor &amp; Best Practices
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2">
                Architectural <span className="gradient-text">Standards</span>
              </h3>
              <p className="mt-2 text-sm text-muted">
                How I engineer software to guarantee scalability, security, and maintainability across every codebase.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((st, i) => (
              <Reveal key={st.title} delay={i * 0.08}>
                <TiltCard className="h-full" max={5}>
                  <div className="card h-full p-5 sm:p-6 border border-slate-200/80 hover:border-blue-400/40 hover:shadow-lg transition-all duration-300">
                    <span className="text-3xl mb-3 block">{st.icon}</span>
                    <h4 className="text-base font-bold text-slate-900">{st.title}</h4>
                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-muted">
                      {st.desc}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
