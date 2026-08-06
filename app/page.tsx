import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import SectionHeading from "@/components/SectionHeading";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import AiEdge from "@/components/AiEdge";
import Process from "@/components/Process";

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
      <AiEdge />
      <Process />

      <section className="pb-24">
        <div className="container-x">
          <SectionHeading eyebrow="Navigate" title={<>Explore my <span className="gradient-text">portfolio</span></>}>
            Each section has its own page — jump straight to what you need.
          </SectionHeading>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {explore.map((e, i) => (
              <Reveal key={e.href} delay={i * 0.05} direction="scale">
                <TiltCard className="h-full">
                <Link
                  href={e.href}
                  className="card card-glow group flex h-full flex-col gap-3 p-6"
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-surface text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
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
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
