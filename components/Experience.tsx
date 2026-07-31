import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Career</p>
          <h2 className="section-title mt-2">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            A mix of full-time engineering and independent client work — shipping
            real products from idea to production.
          </p>
        </Reveal>

        <div className="relative mt-10">
          {/* timeline line */}
          <div className="absolute left-[19px] top-3 bottom-3 hidden w-px bg-gradient-to-b from-indigo-500/60 via-border to-transparent sm:block" />

          <div className="space-y-6">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.05}>
                <div className="relative flex gap-5">
                  <div className="relative z-10 mt-1 hidden h-10 w-10 flex-none items-center justify-center rounded-full border border-border bg-gradient-to-br from-violet-500 to-indigo-500 text-sm font-bold shadow-lg shadow-indigo-500/20 sm:flex">
                    {job.company.charAt(0)}
                  </div>

                  <div className="card card-hover flex-1 p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold">{job.role}</h3>
                        <p className="text-accent2">{job.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="chip whitespace-nowrap text-white/80">
                          {job.period}
                        </span>
                        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-300">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-3 text-muted">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
