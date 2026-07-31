import Reveal from "./Reveal";
import SkillBar from "./SkillBar";
import { profile, education, languages, strengths } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container-x">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent2">
            About Me
          </p>
          <h2 className="section-title mt-2">
            Turning ideas into <span className="gradient-text">shipped products</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="card h-full p-7">
              <p className="text-lg leading-relaxed text-white/85">
                {profile.about}
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                <span className="font-medium text-white">Career objective — </span>
                {profile.objective}
              </p>

              <div className="mt-7">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Core Strengths
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {strengths.map((s) => (
                    <span key={s} className="chip text-white/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <div className="card p-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Education
                </h4>
                <p className="mt-2 font-semibold">{education.degree}</p>
                <p className="text-sm text-muted">{education.institute}</p>
                <p className="mt-1 text-sm text-accent2">{education.period}</p>
              </div>

              <div className="card p-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Languages
                </h4>
                <div className="mt-4 space-y-4">
                  {languages.map((l, i) => (
                    <SkillBar
                      key={l.name}
                      name={l.name}
                      level={l.level}
                      delay={i * 0.1}
                    />
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Based in
                </h4>
                <p className="mt-2 font-semibold">{profile.location}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
