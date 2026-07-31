import type { Metadata } from "next";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Services — Sadanand Maurya",
  description:
    "Services offered by Sadanand Maurya — mobile app development (Flutter), web development (React/Next.js), backend & APIs (Laravel/Node), and full product/MVP builds.",
};

export default function Page() {
  return (
    <>
      <Services />
      <Process />
      <Faq />
    </>
  );
}
