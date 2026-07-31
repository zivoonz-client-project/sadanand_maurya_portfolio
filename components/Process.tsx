import Reveal from "./Reveal";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="pb-20 sm:pb-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">How We&apos;ll Work</p>
          <h2 className="section-title mt-2">
            A simple, transparent <span className="gradient-text">process</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            No confusion, no surprises. Here&apos;s exactly how your project moves
            from idea to launch.
          </p>
        </Reveal>

        <div className="relative mt-10">
          {/* vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-indigo-500/60 via-border to-transparent sm:block" />

          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.no} delay={i * 0.05}>
                <div className="relative flex gap-5">
                  <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-border bg-surface text-sm font-bold text-accent2">
                    {step.no}
                  </div>
                  <div className="card card-hover flex-1 p-5">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">
                      {step.desc}
                    </p>
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
