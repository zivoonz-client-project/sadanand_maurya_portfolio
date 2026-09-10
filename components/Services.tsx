import Link from "next/link";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container-x">
        <SectionHeading eyebrow="What I Offer" title={<>Services I <span className="gradient-text">provide</span></>}>
          Whether you need a mobile app, a website, a backend or a complete
          product — I take your idea from concept to a launched, production-ready
          solution.
        </SectionHeading>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} direction="flip">
              <TiltCard className="h-full">
              <div className="card card-glow group h-full p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-2xl text-white shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
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
                      className="flex items-start gap-2.5 text-sm text-slate-700"
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
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/90 via-sky-50/70 to-amber-50/50 p-6 shadow-sm">
            <p className="text-lg font-medium text-slate-900">
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
