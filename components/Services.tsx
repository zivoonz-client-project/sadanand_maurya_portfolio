import Link from "next/link";
import Reveal from "./Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">What I Offer</p>
          <h2 className="section-title mt-2">
            Services I <span className="gradient-text">provide</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Whether you need a mobile app, a website, a backend or a complete
            product — I take your idea from concept to a launched, production-ready
            solution.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="card card-hover group h-full p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 text-2xl shadow-lg shadow-indigo-500/20">
                    {s.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted">{s.tagline}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm text-white/85"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-none text-accent2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 p-6">
            <p className="text-lg font-medium">
              Have a project in mind?{" "}
              <span className="text-muted">Let&apos;s make it real.</span>
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
