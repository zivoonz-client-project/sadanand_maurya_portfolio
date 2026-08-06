"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

const icons: Record<string, ReactNode> = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7.5 8.5 5.5 8.5-5.5" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
};

const contactItems = [
  {
    label: "Email",
    action: "Send me an email",
    href: `mailto:${profile.email}`,
    icon: icons.email,
    tint: "text-indigo-300",
  },
  {
    label: "Phone / WhatsApp",
    action: "Chat on WhatsApp",
    href: `https://wa.me/${profile.phone.replace(/\D/g, "")}`,
    icon: icons.whatsapp,
    tint: "text-emerald-400",
  },
  {
    label: "LinkedIn",
    action: "View my profile",
    href: profile.links.linkedin,
    icon: icons.linkedin,
    tint: "text-sky-400",
  },
  {
    label: "GitHub",
    action: "See my repositories",
    href: profile.links.github,
    icon: icons.github,
    tint: "text-white",
  },
];

const projectTypes = [
  "Mobile App (Flutter)",
  "Website / Web App",
  "Backend / API",
  "Full Product / MVP",
  "Other",
];

const quickFacts = [
  {
    label: "Response time",
    value: "Within 24 hours",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    label: "Based in",
    value: "Varanasi, India (remote-friendly)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Engagement",
    value: "Freelance & full-time",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
];

const nextSteps = [
  {
    no: "01",
    title: "I review your enquiry",
    desc: "I read through your goals and get back to you within 24 hours.",
  },
  {
    no: "02",
    title: "We discuss the details",
    desc: "A quick call or chat to align on scope, timeline and budget.",
  },
  {
    no: "03",
    title: "You get a clear proposal",
    desc: "A plan with milestones and pricing — then we start building.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: projectTypes[0],
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    const subject = `New project enquiry — ${form.type}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project type: ${form.type}`,
      form.budget ? `Budget: ${form.budget}` : null,
      "",
      "Project details:",
      form.message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="gradient-text">great together</span>
            </>
          }
        >
          Have a project in mind or a role to fill? Tell me a bit about it and
          I&apos;ll get back to you within a day. I&apos;m open to freelance work
          and full-time opportunities.
        </SectionHeading>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <Reveal direction="left">
            <form onSubmit={handleSubmit} className="card p-6 sm:p-7">
              <div className="flex items-center gap-3 border-b border-border pb-5">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
                    <path d="M4 4h16v12H5.2L4 17.2V4z" />
                    <path d="M8 9h8M8 12h5" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Start a project</h3>
                  <p className="text-sm text-muted">
                    Tell me about it — I&apos;ll reply within a day.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm text-muted">
                    Your name <span className="text-accent2">*</span>
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                        <circle cx="12" cy="8" r="3.5" />
                        <path d="M5 20a7 7 0 0 1 14 0" />
                      </svg>
                    </span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="input pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-muted">
                    Your email <span className="text-accent2">*</span>
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                        <rect x="3" y="5" width="18" height="14" rx="2.5" />
                        <path d="m3.5 7.5 8.5 5.5 8.5-5.5" />
                      </svg>
                    </span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="input pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-muted">
                    Project type
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="input"
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-muted">
                    Budget (optional)
                  </label>
                  <input
                    value={form.budget}
                    onChange={(e) =>
                      setForm({ ...form, budget: e.target.value })
                    }
                    placeholder="e.g. ₹20,000 – ₹50,000"
                    className="input"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-sm text-muted">
                  Project details <span className="text-accent2">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell me what you want to build, key features, and timeline…"
                  className="input resize-y"
                />
              </div>

              <button type="submit" className="btn-primary mt-5 w-full">
                Send Enquiry
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.3 3.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L13.6 11H4a1 1 0 110-2h9.6l-3.3-3.3a1 1 0 010-1.4z" />
                </svg>
              </button>

              {/* Trust / reassurance line */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">🔒 Details stay private</span>
                <span className="inline-flex items-center gap-1.5">⚡ Reply within 24h</span>
                <span className="inline-flex items-center gap-1.5">🚫 No spam, ever</span>
              </div>

              {/* Success confirmation */}
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-4 flex items-start gap-3 overflow-hidden rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.1 }}
                      className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                      </svg>
                    </motion.span>
                    <div className="text-sm">
                      <p className="font-semibold text-emerald-300">
                        Your email is ready to send!
                      </p>
                      <p className="mt-0.5 text-muted">
                        I&apos;ve opened your email app with the details filled
                        in — just hit send and I&apos;ll reply within a day.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.1} direction="right">
            <div className="flex h-full flex-col gap-5">
              {/* Quick facts */}
              <div className="card p-5">
                <div className="grid gap-3">
                  {quickFacts.map((f, i) => (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3.5"
                    >
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-border bg-surface text-accent2">
                        {f.icon}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted">
                          {f.label}
                        </p>
                        <p className="font-medium">{f.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-wider text-muted">
                  Connect with me
                </p>
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.1 } },
                  }}
                >
                  {contactItems.map((it) => (
                    <motion.div
                      key={it.label}
                      variants={{
                        hidden: { opacity: 0, scale: 0.5, y: 16 },
                        show: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 16,
                          },
                        },
                      }}
                    >
                      <Magnetic>
                        <a
                          href={it.href}
                          target={
                            it.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          aria-label={`${it.label} — ${it.action}`}
                          title={it.action}
                          className={`glass group relative flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-indigo-500/20 ${it.tint}`}
                        >
                          {it.icon}
                          {/* hover tooltip */}
                          <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-bg px-2.5 py-1 text-xs text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-bottom-8 group-hover:opacity-100">
                            {it.label}
                          </span>
                        </a>
                      </Magnetic>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                whileHover={{ rotateX: 4, rotateY: -4 }}
                style={{ perspective: 800, transformStyle: "preserve-3d" }}
                className="card card-glow flex-1 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-6">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-medium text-emerald-400">
                    Available for new projects
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Based in {profile.location}. I usually reply within a day and
                  work with clients across time zones.
                </p>
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* What happens next */}
        <div className="mt-14">
          <Reveal>
            <p className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent2" />
              What happens next
            </p>
            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
              From enquiry to <span className="gradient-text">kickoff</span>
            </h3>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {nextSteps.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.1} direction="flip">
                <div className="card card-glow group relative h-full overflow-hidden p-6">
                  <span className="pointer-events-none absolute -right-2 -top-4 text-7xl font-black text-white/[0.04] transition-colors duration-300 group-hover:text-white/[0.07]">
                    {s.no}
                  </span>
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/20 text-sm font-bold text-accent2">
                    {s.no}
                  </span>
                  <h4 className="relative mt-4 text-lg font-semibold">
                    {s.title}
                  </h4>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
