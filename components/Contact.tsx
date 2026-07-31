"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "✉️",
  },
  {
    label: "Phone / WhatsApp",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: "📞",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sadanand-maurya",
    href: profile.links.linkedin,
    icon: "💼",
  },
  {
    label: "GitHub",
    value: "github.com/SadanandMaurya1622",
    href: profile.links.github,
    icon: "🐙",
  },
];

const projectTypes = [
  "Mobile App (Flutter)",
  "Website / Web App",
  "Backend / API",
  "Full Product / MVP",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: projectTypes[0],
    budget: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-2">
            Let&apos;s build something{" "}
            <span className="gradient-text">great together</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Have a project in mind or a role to fill? Tell me a bit about it and
            I&apos;ll get back to you within a day. I&apos;m open to freelance
            work and full-time opportunities.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <Reveal>
            <form onSubmit={handleSubmit} className="card p-6 sm:p-7">
              <h3 className="text-lg font-semibold">Start a project</h3>
              <p className="mt-1 text-sm text-muted">
                Fill this out and it&apos;ll open your email, ready to send.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm text-muted">
                    Your name *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="input"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-muted">
                    Your email *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="input"
                  />
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
                  Project details *
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
              </button>
            </form>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <div className="grid gap-3">
                {contactItems.map((it) => (
                  <a
                    key={it.label}
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="card card-hover group flex items-center gap-4 px-5 py-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface text-xl">
                      {it.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted">
                        {it.label}
                      </p>
                      <p className="truncate font-medium group-hover:text-white">
                        {it.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="card flex-1 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-6">
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
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
