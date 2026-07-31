import type { Metadata } from "next";
import Projects from "@/components/Projects";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Projects — Sadanand Maurya",
  description:
    "Major projects — live client websites (Siddhivinayak Recovery, KP Industries, Fiscora) built solo, and mobile apps (ShopNest, BestInCity, JHATPAT) built with the Tryeno team.",
};

export default function Page() {
  return (
    <>
      <Projects />
      <CtaBand
        title="Want a site like these?"
        subtitle="I build fast, modern websites and apps end-to-end — design to deployment."
      />
    </>
  );
}
