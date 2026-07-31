"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

type Review = {
  id: string;
  name: string;
  company?: string;
  project?: string;
  rating: number;
  message: string;
  createdAt: number;
};

function Stars({
  value,
  onChange,
}: {
  value: number;
  onChange?: (v: number) => void;
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type={onChange ? "button" : undefined}
          onClick={onChange ? () => onChange(n) : undefined}
          className={`${onChange ? "cursor-pointer" : "cursor-default"} text-lg`}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
        >
          <span className={n <= value ? "text-amber-400" : "text-border"}>★</span>
        </button>
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function timeAgo(ts: number) {
  const diff = Date.now() - ts;
  const day = 86400000;
  if (diff < day) return "Today";
  const days = Math.floor(diff / day);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

const emptyForm = {
  name: "",
  company: "",
  project: "",
  message: "",
  website: "", // honeypot
};

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(5);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d) => setReviews(d.reviews ?? []))
      .catch(() => setError("Could not load reviews."))
      .finally(() => setLoading(false));
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, rating }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setStatus("idle");
        return;
      }
      if (data.review) {
        setReviews((prev) => [data.review, ...prev]);
      }
      setForm(emptyForm);
      setRating(5);
      setStatus("done");
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setError("Network error. Please try again.");
      setStatus("idle");
    }
  }

  const avg =
    reviews.length > 0
      ? (
          reviews.reduce((a, r) => a + r.rating, 0) / reviews.length
        ).toFixed(1)
      : "—";

  return (
    <section id="reviews" className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container-x">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent2">
            Testimonials
          </p>
          <h2 className="section-title mt-2">
            Client <span className="gradient-text">Reviews</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Worked with me on a project? Leave a review below — it appears
            instantly for everyone to see.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* Left — submit form */}
          <Reveal>
            <div className="card p-6 lg:sticky lg:top-24">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Leave a Review</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold gradient-text">{avg}</div>
                  <div className="text-xs text-muted">
                    {reviews.length} review{reviews.length === 1 ? "" : "s"}
                  </div>
                </div>
              </div>

              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm text-muted">
                    Your name *
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    maxLength={60}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-white outline-none transition focus:border-accent"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-muted">
                      Company
                    </label>
                    <input
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      maxLength={80}
                      placeholder="Optional"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-white outline-none transition focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm text-muted">
                      Project
                    </label>
                    <select
                      value={form.project}
                      onChange={(e) =>
                        setForm({ ...form, project: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-white outline-none transition focus:border-accent"
                    >
                      <option value="">Select…</option>
                      {projects.map((p) => (
                        <option key={p.name} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm text-muted">Rating</label>
                  <Stars value={rating} onChange={setRating} />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm text-muted">
                    Your review *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={4}
                    placeholder="How was it working with Sadanand? What did he build for you?"
                    className="w-full resize-y rounded-xl border border-border bg-surface px-4 py-2.5 text-white outline-none transition focus:border-accent"
                  />
                </div>

                {/* Honeypot — hidden from humans */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) =>
                    setForm({ ...form, website: e.target.value })
                  }
                  className="hidden"
                  aria-hidden="true"
                />

                {error && (
                  <p className="text-sm text-red-400">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {status === "sending"
                    ? "Submitting…"
                    : status === "done"
                    ? "✓ Thank you!"
                    : "Submit Review"}
                </button>
              </form>
            </div>
          </Reveal>

          {/* Right — list */}
          <div className="space-y-4">
            {loading ? (
              <div className="card p-10 text-center text-muted">
                Loading reviews…
              </div>
            ) : reviews.length === 0 ? (
              <div className="card p-10 text-center text-muted">
                No reviews yet — be the first to leave one!
              </div>
            ) : (
              <AnimatePresence initial={false}>
                {reviews.map((r) => (
                  <motion.div
                    key={r.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="card p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 text-sm font-bold">
                        {initials(r.name)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <p className="font-semibold">{r.name}</p>
                            {(r.company || r.project) && (
                              <p className="text-xs text-muted">
                                {[r.company, r.project]
                                  .filter(Boolean)
                                  .join(" · ")}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <Stars value={r.rating} />
                            <span className="text-xs text-muted">
                              {timeAgo(r.createdAt)}
                            </span>
                          </div>
                        </div>
                        <p className="mt-3 leading-relaxed text-white/85">
                          {r.message}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
