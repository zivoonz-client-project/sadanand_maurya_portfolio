import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#faf8f5",
        cream: "#f4efe6",
        surface: "#ffffff",
        card: "#ffffff",
        border: "#e8e2d8",
        accent: "#2563eb",
        accent2: "#0284c7",
        muted: "#64748b",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "33%": { transform: "translateY(-22px) translateX(10px)" },
          "66%": { transform: "translateY(12px) translateX(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientPan: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        aurora: {
          "0%": { transform: "translate3d(0,0,0) rotate(0deg) scale(1)" },
          "50%": { transform: "translate3d(4%,-3%,0) rotate(8deg) scale(1.12)" },
          "100%": { transform: "translate3d(0,0,0) rotate(0deg) scale(1)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        tiltIn: {
          "0%": { opacity: "0", transform: "perspective(900px) rotateX(12deg) translateY(30px)" },
          "100%": { opacity: "1", transform: "perspective(900px) rotateX(0) translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 12s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 28s linear infinite",
        "gradient-pan": "gradientPan 8s ease infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "spin-slow": "spinSlow 26s linear infinite",
        "spin-slower": "spinSlow 44s linear infinite",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        "tilt-in": "tiltIn 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
