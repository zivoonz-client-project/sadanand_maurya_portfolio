"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

const pillars = [
  {
    icon: "🌐",
    title: "Complete Online Transformation",
    tagline: "Offline to online business migration",
    desc: "Taking your offline or local business into a modern digital ecosystem. We build fast web and mobile platforms so customers can discover you 24/7, trust your brand, and place direct orders effortlessly.",
    badge: "Business Growth",
    accent: "from-blue-600 to-indigo-600",
  },
  {
    icon: "📈",
    title: "Designed to Convert & Scale Sales",
    tagline: "High-converting UI/UX & fast checkout",
    desc: "A great design only matters if it drives real sales. Every website and app is engineered for measurable conversions: lightning-fast load speeds, automated payment gateways, and friction-free user journeys.",
    badge: "Revenue Focused",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    icon: "💡",
    title: "Free Digital Business Consultation",
    tagline: "Strategic roadmap & tech selection",
    desc: "Wondering what digital solution best fits your business model and budget? Schedule a consultation — get actionable guidance, the right tech stack, and a clear growth roadmap with zero upfront fee.",
    badge: "Free Consultation",
    accent: "from-amber-500 to-orange-600",
  },
  {
    icon: "🤝",
    title: "100% Code Ownership & Lifetime Support",
    tagline: "Transparent partnership with zero lock-in",
    desc: "Complete source code, domain, hosting, and database credentials are handed over 100% under your ownership. Zero vendor lock-in, direct communication, and dedicated post-launch support.",
    badge: "Full Ownership",
    accent: "from-purple-600 to-violet-600",
  },
];

export default function BusinessGrowth() {
  const whatsappNumber = profile.phone.replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent(
    "Hi Sadanand, I would like to consult regarding taking my business online and building a digital solution."
  );

  return (
    <section id="business-growth" className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-transparent via-[#f8f6f0]/60 to-transparent">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Your Digital Growth Partner"
          title={
            <>
              We Don&apos;t Just Build Apps — We Help Your{" "}
              <span className="gradient-text">Business Grow Online</span>
            </>
          }
          align="center"
        >
          I don&apos;t just build websites or mobile applications — I help businesses transition online, acquire new customers, and scale revenue. Connect today for a free strategic consultation and get the ideal digital roadmap for your business.
        </SectionHeading>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} direction="scale">
              <TiltCard className="h-full" max={8}>
                <div className="card card-glow group relative flex h-full flex-col p-6 overflow-hidden border border-border hover:border-accent/40 transition duration-300">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />

                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f4efe6] to-white text-2xl shadow-sm border border-border group-hover:scale-110 transition duration-300">
                      {item.icon}
                    </span>
                    <span className="rounded-full border border-slate-200 bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 shadow-xs">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-accent2">
                    {item.tagline}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted flex-1">
                    {item.desc}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* High-Impact Consultation Banner */}
        <Reveal delay={0.2}>
          <div className="mt-12 rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-sky-50/60 to-emerald-50/50 p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800 shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                  </span>
                  Free Business &amp; Digital Consultation
                </div>

                <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Looking to bring your business online?{" "}
                  <span className="gradient-text">Let&apos;s talk today.</span>
                </h3>

                <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600">
                  Whether you have a raw concept or want to digitize an existing business — I will recommend the most effective technology, timeline, and budget. <strong>No upfront commitment — just practical, results-driven business guidance.</strong>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
                <Link
                  href="/contact"
                  className="btn-primary flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold shadow-md"
                >
                  <span>Book Free Consultation →</span>
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold border-emerald-500/40 bg-emerald-50/80 text-emerald-800 hover:bg-emerald-100/90 transition shadow-xs"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-emerald-600">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
