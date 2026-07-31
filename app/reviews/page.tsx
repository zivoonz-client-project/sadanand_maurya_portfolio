import type { Metadata } from "next";
import Reviews from "@/components/Reviews";

export const metadata: Metadata = {
  title: "Client Reviews — Sadanand Maurya",
  description:
    "Read what clients say about working with Sadanand Maurya — and leave your own review.",
};

export default function Page() {
  return <Reviews />;
}
