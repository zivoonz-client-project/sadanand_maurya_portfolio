import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Sadanand Maurya",
  description:
    "Get in touch with Sadanand Maurya for freelance work or full-time opportunities.",
};

export default function Page() {
  return <Contact />;
}
