"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Review = {
  id: string;
  name: string;
  company?: string;
  project?: string;
  rating: number;
  message: string;
  createdAt: number;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5 text-sm">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= value ? "text-amber-400" : "text-border"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPreview() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d) => setReviews((d.reviews ?? []).slice(0, 3)))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="pb-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent2">
              Testimonials
            </p>
            <h2 className="section-title mt-2">
              What clients <span className="gradient-text">say</span>
            </h2>
          </div>
          <Link href="/reviews" className="btn-ghost">
            Read all & add yours →
          </Link>
        </div>

        {loading ? (
          <div className="mt-10 card p-10 text-center text-muted">
            Loading reviews…
          </div>
        ) : reviews.length === 0 ? (
          <div className="mt-10 card p-10 text-center text-muted">
            No reviews yet —{" "}
            <Link href="/reviews" className="text-accent2 underline">
              be the first to leave one
            </Link>
            .
          </div>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card flex h-full flex-col p-6"
              >
                <div className="text-4xl leading-none text-accent/40">“</div>
                <p className="-mt-2 flex-1 leading-relaxed text-white/85 line-clamp-5">
                  {r.message}
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 text-sm font-bold">
                    {initials(r.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{r.name}</p>
                    {(r.company || r.project) && (
                      <p className="truncate text-xs text-muted">
                        {[r.company, r.project].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                  <Stars value={r.rating} />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
