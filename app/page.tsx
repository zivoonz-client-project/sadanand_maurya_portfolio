import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ReviewsPreview from "@/components/ReviewsPreview";
import Faq from "@/components/Faq";

const explore = [
  {
    href: "/about",
    title: "About Me",
    desc: "My background, education & strengths.",
    icon: "👋",
  },
  {
    href: "/skills",
    title: "Skills",
    desc: "The full stack I build with.",
    icon: "🧩",
  },
  {
    href: "/experience",
    title: "Experience",
    desc: "Where I've worked and what I did.",
    icon: "💼",
  },
  {
    href: "/projects",
    title: "Projects",
    desc: "Live sites & apps I've shipped.",
    icon: "🚀",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Services />
      <Process />

      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <h2 className="section-title">
              Explore my <span className="gradient-text">portfolio</span>
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Each section has its own page — jump straight to what you need.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {explore.map((e, i) => (
              <Reveal key={e.href} delay={i * 0.05}>
                <Link
                  href={e.href}
                  className="card card-hover group flex h-full flex-col gap-3 p-6"
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-surface text-2xl">
                    {e.icon}
                  </span>
                  <div>
                    <h3 className="flex items-center gap-1.5 text-lg font-semibold">
                      {e.title}
                      <span className="text-accent2 transition group-hover:translate-x-1">
                        →
                      </span>
                    </h3>
                    <p className="mt-1 text-sm text-muted">{e.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ReviewsPreview />
      <Faq />
    </>
  );
}
