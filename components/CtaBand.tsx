import Link from "next/link";
import Reveal from "./Reveal";

export default function CtaBand({
  title = "Have a project in mind?",
  subtitle = "Let's turn your idea into a polished, production-ready product.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="pb-24">
      <div className="container-x">
        <Reveal>
          <div className="card relative overflow-hidden p-8 text-center sm:p-12">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative">
              <h2 className="section-title">
                {title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="gradient-text">
                  {title.split(" ").slice(-1)}
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted">{subtitle}</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn-primary">
                  Start a Project →
                </Link>
                <Link href="/projects" className="btn-ghost">
                  See My Work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
