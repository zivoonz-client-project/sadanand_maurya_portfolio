import type { Metadata } from "next";
import About from "@/components/About";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About — Sadanand Maurya",
  description:
    "About Sadanand Maurya — Full Stack Software Engineer from Varanasi, India. Background, education and core strengths.",
};

export default function Page() {
  return (
    <>
      <About />
      <CtaBand
        title="Let's work together"
        subtitle="I'm available for freelance projects and full-time roles. Tell me what you're building."
      />
    </>
  );
}
