import Reveal from "./Reveal";
import SkillBar from "./SkillBar";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container-x">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent2">
            What I Do
          </p>
          <h2 className="section-title mt-2">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            A full-stack toolkit spanning mobile, web, backend and DevOps —
            sharpened by real projects and production work.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <div className="card group h-full p-6 transition hover:border-accent/60">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-xl shadow-lg shadow-indigo-500/20">
                    {group.icon}
                  </span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>

                <div className="space-y-4">
                  {group.skills.map((s, j) => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      level={s.level}
                      delay={j * 0.08}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
