import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { projects, type Project } from "@/lib/data";

// Free auto-generated homepage screenshot from WordPress mShots.
function previewUrl(url: string) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
    url
  )}?w=1200&h=750`;
}

function ModeBadge({ mode, label }: { mode: Project["mode"]; label: string }) {
  const solo = mode === "solo";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
        solo
          ? "border-violet-500/30 bg-violet-50 text-violet-700"
          : "border-cyan-500/30 bg-cyan-50 text-cyan-800"
      }`}
    >
      {solo ? "👤" : "🤝"} {label}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <TiltCard className="h-full" max={7}>
    <article className="card card-glow group relative flex h-full flex-col overflow-hidden">
      <div className={`absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r ${p.accent}`} />

      {/* App icon banner (Play Store apps) */}
      {p.image ? (
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br ${p.accent}`}
        >
          {/* Ambient blurred backdrop so the card is completely filled */}
          <div className="absolute inset-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover opacity-35 blur-2xl scale-125"
            />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
          </div>

          {/* Large prominent app icon */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.image}
            alt={`${p.name} app logo`}
            loading="lazy"
            className="relative h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 rounded-2xl sm:rounded-3xl shadow-xl ring-1 ring-black/5 transition duration-500 group-hover:scale-105"
          />
          <span className="absolute bottom-3 right-3 rounded-lg bg-white/95 border border-slate-200/80 px-2.5 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
            ▶ Google Play
          </span>
        </a>
      ) : p.link && p.mode === "solo" && p.status !== "upcoming" ? (
        /* Live website preview (solo websites only) */
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-[16/9] overflow-hidden border-b border-border bg-slate-50"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={previewUrl(p.link)}
            alt={`${p.name} website home page preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
          <span className="absolute bottom-3 right-3 rounded-lg bg-white/95 border border-slate-200/80 px-2.5 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
            Open live site ↗
          </span>
        </a>
      ) : (
        /* Fallback banner (apps without a screenshot) */
        <div
          className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br ${p.accent}`}
        >
          <div className="absolute inset-0 bg-white/70" />
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
          />
          <span className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-2xl font-black text-white shadow-xl transition duration-500 group-hover:scale-105`}>
            {p.name.charAt(0)}
          </span>
          <span className="absolute bottom-3 right-3 rounded-lg bg-white/95 border border-slate-200/80 px-2.5 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
            {p.category.split("·")[0].trim()}
          </span>
        </div>
      )}

      <div className="relative flex flex-1 flex-col p-5">
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold">{p.name}</h3>
            {p.status === "upcoming" ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
                </span>
                Coming Soon
              </span>
            ) : p.link ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live
              </span>
            ) : null}
          </div>
          <p className="mt-0.5 text-xs text-accent2">{p.category}</p>
        </div>
        <span
          className={`flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gradient-to-br ${p.accent} text-sm font-bold text-white shadow-sm`}
        >
          {p.name.charAt(0)}
        </span>
      </div>

      <div className="relative mt-2.5">
        <ModeBadge mode={p.mode} label={p.roleLabel} />
      </div>

      <p className="relative mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
        {p.description}
      </p>

      <ul className="relative mt-3 grid gap-1.5">
        {p.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex items-center gap-2 text-[13px] text-slate-700">
            <svg className="h-3.5 w-3.5 flex-none text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                clipRule="evenodd"
              />
            </svg>
            {h}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto pt-4 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-[#faf8f5] px-2 py-0.5 text-[11px] text-slate-700"
          >
            {t}
          </span>
        ))}
      </div>

      {p.status === "upcoming" ? (
        <div className="relative mt-4 border-t border-border pt-4">
          <div className="flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 py-2.5 px-4 text-xs font-semibold text-emerald-700 shadow-sm">
            <svg className="h-3.5 w-3.5 fill-current text-emerald-600" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.793 12 3.61 22.186a2.38 2.38 0 0 1-.22-.988V2.802c0-.363.078-.7.22-.988zm11.242 11.243l2.257 2.256-11.89 6.865 9.633-9.121zm0-2.114L5.218 1.822l11.89 6.865-2.257 2.256zm1.485 1.057l3.654 2.11a1.238 1.238 0 0 1 0 2.146l-3.654 2.11-2.45-2.45 2.45-2.45z"/>
            </svg>
            <span>Launching Soon on Google Play</span>
          </div>
        </div>
      ) : p.link ? (
        <div className="relative mt-4 border-t border-border pt-4">
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full py-2.5 text-sm"
          >
            {p.linkLabel ?? "Visit Live Site"}
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      ) : null}
      </div>
    </article>
    </TiltCard>
  );
}

export default function Projects() {
  const solo = projects.filter((p) => p.mode === "solo");
  const team = projects.filter((p) => p.mode === "team");

  return (
    <section id="projects" className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Portfolio</p>
          <h2 className="section-title mt-2">
            Major <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Real products I&apos;ve shipped. The websites below I designed and
            built independently, end-to-end. The mobile apps I built as part of
            the Tryeno development team.
          </p>
        </Reveal>

        {/* Solo */}
        <Reveal>
          <div className="mt-10 flex items-center gap-3">
            <span className="text-2xl">👤</span>
            <div>
              <h3 className="text-xl font-bold">Built Solo · Websites</h3>
              <p className="text-sm text-muted">
                Fully designed, developed & deployed by me — {solo.length}{" "}
                independent projects.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solo.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>

        {/* Team */}
        <Reveal>
          <div className="mt-12 flex items-center gap-3">
            <span className="text-2xl">🤝</span>
            <div>
              <h3 className="text-xl font-bold">
                With Tryeno Team · Apps & Backend
              </h3>
              <p className="text-sm text-muted">
                Built collaboratively as a Full Stack Engineer at Tryeno.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
