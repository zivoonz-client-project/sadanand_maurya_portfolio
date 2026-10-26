import type { Metadata } from "next";
import Skills from "@/components/Skills";
import TechMarquee from "@/components/TechMarquee";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Skills — Sadanand Maurya",
  description:
    "Skills & technologies — Flutter, React, Next.js, Laravel, Node.js, Firebase, REST APIs, GoDaddy domain setup, Play Store publishing and more.",
};

export default function Page() {
  return (
    <>
      <Skills />
      <TechMarquee />
      <CtaBand
        title="Need these skills?"
        subtitle="From mobile apps to full web products — let's build something great together."
      />
    </>
  );
}
