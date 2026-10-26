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
              <p className="text-lg leading-relaxed text-slate-800">
                {profile.about}
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                <span className="font-medium text-slate-900">Career objective — </span>
                {profile.objective}
              </p>

              <div className="mt-7">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Core Strengths
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {strengths.map((s) => (
                    <span key={s} className="chip text-slate-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
                <a
                  href="/Sadanand_Maurya_Resume.pdf"
                  download="Sadanand_Maurya_Resume.pdf"
                  className="btn-primary inline-flex items-center gap-2 px-4 py-2.5 text-sm"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span>Download Resume (PDF)</span>
                </a>
                <a
                  href="/Sadanand_Maurya_Resume.docx"
                  download="Sadanand_Maurya_Resume.docx"
                  className="btn-ghost inline-flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:text-slate-900 border border-slate-300"
                >
                  <span>Download (.DOCX)</span>
                </a>
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
