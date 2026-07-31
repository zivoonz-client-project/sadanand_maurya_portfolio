import type { Metadata } from "next";
import Experience from "@/components/Experience";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Experience — Sadanand Maurya",
  description:
    "Professional experience of Sadanand Maurya — full-time Full Stack Engineer at Tryeno and independent freelance web developer.",
};

export default function Page() {
  return (
    <>
      <Experience />
      <CtaBand />
    </>
  );
}
