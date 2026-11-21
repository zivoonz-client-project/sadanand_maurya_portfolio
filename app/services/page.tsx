import type { Metadata } from "next";
import Services from "@/components/Services";
import BusinessGrowth from "@/components/BusinessGrowth";
import Process from "@/components/Process";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Services — Sadanand Maurya",
  description:
    "Services offered by Sadanand Maurya — mobile app development (Flutter), web development (React/Next.js), digital business consultation, backend & APIs, and full product/MVP builds.",
};

export default function Page() {
  return (
    <>
      <Services />
      <BusinessGrowth />
      <Process />
      <Faq />
    </>
  );
}
