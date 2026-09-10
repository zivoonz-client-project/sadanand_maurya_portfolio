import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SceneBackground from "@/components/SceneBackground";
import IntroLoader from "@/components/IntroLoader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${profile.name} — Full Stack Software Engineer`,
  description: profile.tagline,
  keywords: [
    "Sadanand Maurya",
    "Full Stack Developer",
    "Flutter Developer",
    "React Developer",
    "Next.js",
    "Laravel",
    "Varanasi",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Full Stack Software Engineer`,
    description: profile.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Full Stack Software Engineer`,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-[#faf8f5] text-slate-900`}>
      <body className="bg-[#faf8f5] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <IntroLoader />
        <SceneBackground />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
