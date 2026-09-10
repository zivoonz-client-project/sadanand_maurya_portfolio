export const profile = {
  name: "Sadanand Maurya",
  roles: [
    "Full Stack Software Engineer",
    "Flutter Developer",
    "React & Next.js Developer",
  ],
  tagline:
    "I build scalable mobile & web apps — Flutter, React, Next.js and Laravel — with clean architecture, secure APIs and production-ready deployment.",
  location: "Varanasi, Uttar Pradesh, India",
  email: "sadanandmaurya.rj@gmail.com",
  phone: "+91 90444 64627",
  links: {
    linkedin: "https://linkedin.com/in/sadanand-maurya-438682355",
    github: "https://github.com/SadanandMaurya1622",
    portfolio: "https://try.tryeno.com/developer",
  },
  about:
    "A passionate Full Stack Software Engineer with hands-on experience in Flutter, React, Next.js, Laravel, PHP, Node.js and REST API development. I specialise in building scalable mobile and web applications with solid backend integration, payment gateways, Firebase authentication & notifications, and end-to-end production deployment — increasingly with AI-driven solutions.",
  objective:
    "To contribute to innovative software products while continuously improving my technical and professional skills.",
};

export const stats = [
  { value: "5+", label: "Major Projects" },
  { value: "10+", label: "Technologies" },
  { value: "2", label: "Apps on Play Store" },
  { value: "100%", label: "Client Focused" },
];

// Small trust signals shown in the hero.
export const trustBadges = [
  { icon: "⭐", label: "5.0 client rating" },
  { icon: "⚡", label: "Replies within a day" },
  { icon: "✅", label: "On-time delivery" },
];

// Tech names for the scrolling marquee strip.
export const techStrip = [
  "Flutter",
  "React",
  "Next.js",
  "Laravel",
  "Node.js",
  "TypeScript",
  "Dart",
  "Firebase",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "REST APIs",
  "Git",
];

export type Service = {
  icon: string;
  title: string;
  tagline: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: "📱",
    title: "Mobile App Development",
    tagline: "Cross-platform apps with Flutter — one codebase, iOS + Android.",
    points: [
      "Flutter + Dart, clean architecture",
      "Firebase auth, notifications & realtime data",
      "Payment gateway integration",
      "Google Play Store publishing",
    ],
  },
  {
    icon: "💻",
    title: "Web Development",
    tagline: "Fast, responsive, SEO-friendly websites & web apps.",
    points: [
      "React.js & Next.js",
      "Pixel-perfect responsive UI",
      "SEO & performance optimised",
      "Deployed on Vercel",
    ],
  },
  {
    icon: "⚙️",
    title: "Backend & APIs",
    tagline: "Secure, scalable backends that power your product.",
    points: [
      "Laravel, PHP & Node.js",
      "REST APIs with JWT / Sanctum auth",
      "MySQL / PostgreSQL databases",
      "Push notifications & integrations",
    ],
  },
  {
    icon: "🚀",
    title: "Full Product / MVP",
    tagline: "End-to-end — from idea to a launched product.",
    points: [
      "App + backend + admin panel",
      "Payment & auth systems",
      "Testing & bug fixing",
      "Production deployment & handover",
    ],
  },
];

export type ProcessStep = {
  no: string;
  title: string;
  desc: string;
};

export const processSteps: ProcessStep[] = [
  {
    no: "01",
    title: "Discovery & Planning",
    desc: "We discuss your idea, goals and scope. I map out features, timeline and a clear plan before writing a single line of code.",
  },
  {
    no: "02",
    title: "Design & Architecture",
    desc: "I design the structure with clean, scalable architecture and agree the UI/UX direction so there are no surprises.",
  },
  {
    no: "03",
    title: "Development",
    desc: "I build in focused sprints with regular updates, so you always know exactly where the project stands.",
  },
  {
    no: "04",
    title: "Testing & Deployment",
    desc: "Thorough testing, bug fixing and a smooth production deployment — Play Store, Vercel or your own server.",
  },
  {
    no: "05",
    title: "Support & Handover",
    desc: "Full source code, documentation and post-launch support so your product keeps running smoothly.",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How do we get started?",
    a: "Just reach out via the contact page or email with a short description of your idea. I'll reply within a day, ask a few questions, and share a plan with timeline and scope.",
  },
  {
    q: "What is your typical timeline?",
    a: "It depends on scope — a landing site can take a few days, while a full app with backend usually takes a few weeks. You'll always get a clear estimate before we begin.",
  },
  {
    q: "How do you communicate during the project?",
    a: "You'll get regular progress updates and can reach me directly on WhatsApp/email. No black boxes — you always know what's being built.",
  },
  {
    q: "Do I own the code?",
    a: "Yes — 100%. On completion you receive the full source code, credentials and documentation. It's entirely yours.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Absolutely. I offer post-launch bug fixing and maintenance so your product stays stable and up to date.",
  },
  {
    q: "How does pricing work?",
    a: "Most projects are priced per-project based on scope, so you know the cost upfront. For ongoing work, flexible arrangements are available. Message me for a free quote.",
  },
];

export type SkillGroup = {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Mobile (Flutter)",
    icon: "📱",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 88 },
      { name: "Riverpod", level: 82 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Laravel / PHP", level: 88 },
      { name: "REST APIs", level: 90 },
      { name: "Node.js", level: 78 },
      { name: "JWT / Sanctum", level: 84 },
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase Firestore", level: 85 },
    ],
  },
  {
    title: "DevOps & Launch",
    icon: "🚀",
    skills: [
      { name: "Vercel Deployment", level: 88 },
      { name: "GoDaddy Domain Setup", level: 90 },
      { name: "Play Store Publishing", level: 88 },
      { name: "Git / GitHub", level: 90 },
      { name: "Postman", level: 85 },
    ],
  },
  {
    title: "Practices",
    icon: "✨",
    skills: [
      { name: "Clean Architecture", level: 85 },
      { name: "Responsive UI", level: 92 },
      { name: "Payment Integration", level: 85 },
      { name: "Authentication", level: 88 },
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  points: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Software Engineer",
    company: "Tryeno Software Development",
    period: "Oct 2025 – Present",
    type: "Full-time",
    points: [
      "Built Flutter mobile applications with clean, scalable architecture.",
      "Developed React & Next.js web apps with responsive, SEO-friendly UI.",
      "Engineered Laravel backend APIs (REST, JWT, Sanctum).",
      "Integrated payment gateways for merchant & customer flows.",
      "Set up Firebase Authentication & Push Notifications.",
      "Handled production deployment, testing and bug fixing.",
    ],
    tech: ["Flutter", "React", "Next.js", "Laravel", "Firebase"],
  },
  {
    role: "Freelance Web Developer",
    company: "Independent · Direct Clients",
    period: "2024 – Present",
    type: "Freelance",
    points: [
      "Designed & built live client websites end-to-end (Siddhivinayak Recovery, KP Industries).",
      "Owned the full delivery — UI/UX, development, testing and go-live.",
      "Handled GoDaddy domain purchase, DNS and production deployment.",
      "Published Android apps to the Google Play Store.",
      "Direct client communication, requirements gathering and post-launch support.",
    ],
    tech: ["React", "Responsive UI", "SEO", "GoDaddy", "Play Store"],
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  accent: string;
  link?: string;
  linkLabel?: string;
  image?: string; // app icon / logo (for Play Store apps)
  featured?: boolean;
  // "solo" = built independently by me. "team" = built with the Tryeno team.
  mode: "solo" | "team";
  roleLabel: string;
  status?: "live" | "upcoming";
};

export const projects: Project[] = [
  {
    name: "Siddhivinayak Recovery",
    category: "Web · Business Website (Live)",
    description:
      "A professional website for Siddhivinayak Recovery Agency — a debt recovery service in India. Built to showcase their services, establish credibility and convert visitors into clients.",
    highlights: [
      "Live production website",
      "Clean, trust-building design",
      "Fully responsive",
      "SEO optimised",
    ],
    tech: ["React", "Responsive UI", "SEO"],
    accent: "from-rose-500 to-pink-500",
    link: "https://siddhivinayakrecovery.com",
    featured: true,
    mode: "solo",
    roleLabel: "Designed & built solo",
  },
  {
    name: "KP Industries",
    category: "Web · Corporate Website (Live)",
    description:
      "A corporate website for KP Industries — a manufacturer of precision industrial components and elastomer solutions. Designed to present their products, capabilities and technical expertise to B2B clients.",
    highlights: [
      "Live production website",
      "Professional B2B design",
      "Product & capability showcase",
      "Responsive & SEO ready",
    ],
    tech: ["React", "Responsive UI", "SEO"],
    accent: "from-sky-500 to-indigo-500",
    link: "https://www.kpind.co.in",
    featured: true,
    mode: "solo",
    roleLabel: "Designed & built solo",
  },
  {
    name: "ShopNest",
    category: "Mobile · Commerce & Loyalty Platform",
    description:
      "A dual-app commerce & loyalty platform — a Customer app to discover shops, book reservations and collect rewards, and a Merchant app to manage promotions, loyalty programs, bookings and analytics. Powered by a Laravel REST API.",
    highlights: [
      "Two apps: Customer + Merchant",
      "Loyalty — stamps, points, gift cards & vouchers",
      "Hotel / restaurant / service reservations",
      "QR scanning, maps discovery & analytics",
    ],
    tech: ["React Native (Expo)", "Redux", "Laravel", "MySQL", "JWT", "REST API"],
    accent: "from-indigo-500 to-violet-500",
    mode: "team",
    roleLabel: "With Tryeno team",
  },
  {
    name: "BestInCity",
    category: "Backend · APIs & Notifications",
    description:
      "Backend and merchant APIs powering a local discovery platform, including real-time push notifications and secure endpoints.",
    highlights: [
      "Scalable backend APIs",
      "Merchant-facing APIs",
      "Push notification service",
      "Secure authentication",
    ],
    tech: ["Laravel", "PHP", "REST API", "MySQL", "Firebase"],
    accent: "from-cyan-500 to-blue-500",
    mode: "team",
    roleLabel: "With Tryeno team",
  },
  {
    name: "JHATPAT Service",
    category: "Mobile · On-demand Services (Live)",
    description:
      "An on-demand electrician & home-service booking app built with Flutter and Firebase — live on the Google Play Store.",
    highlights: [
      "Flutter + Firebase stack",
      "Live on Google Play",
      "Real-time data sync",
      "Clean, intuitive UX",
    ],
    tech: ["Flutter", "Firebase", "Dart", "Google Play"],
    accent: "from-emerald-500 to-teal-500",
    link: "https://play.google.com/store/apps/details?id=com.service.jhatpat.electrician",
    linkLabel: "View on Play Store",
    image: "/jhatpat-icon.png",
    featured: true,
    mode: "team",
    roleLabel: "With Tryeno team",
  },
  {
    name: "UdharKhata",
    category: "Mobile · Digital Khata & Ledger (Live)",
    description:
      "A smart digital ledger & payment reminder app for small businesses, shopkeepers and merchants to track credit (udhar), record transactions, and send one-tap WhatsApp payment reminders.",
    highlights: [
      "Live on Google Play Store",
      "Credit & payment tracking (To Receive / To Pay)",
      "One-tap WhatsApp payment reminders",
      "Cloud backup via Firebase with offline sync",
    ],
    tech: ["Flutter", "Firebase", "Dart", "Google Play"],
    accent: "from-blue-500 to-indigo-500",
    link: "https://play.google.com/store/apps/details?id=com.tryeno.udharbook",
    linkLabel: "View on Play Store",
    image: "/udharkhata-icon.png",
    featured: true,
    mode: "team",
    roleLabel: "With Tryeno team",
  },
  {
    name: "Fiscora",
    category: "Web · Marketing Site (Live)",
    description:
      "A fast, responsive and SEO-optimised marketing website built in React with a modern, accessible UI and clean brand design.",
    highlights: [
      "Live production website",
      "Fully responsive design",
      "SEO optimised",
      "Fast load performance",
    ],
    tech: ["React.js", "Tailwind CSS", "SEO"],
    accent: "from-amber-500 to-orange-500",
    link: "https://www.fiscora.co.in",
    featured: true,
    mode: "solo",
    roleLabel: "Designed & built solo",
  },
  {
    name: "MyDigi",
    category: "Mobile · Asset & Warranty Manager (Upcoming)",
    description:
      "All-in-one Smart Product, Warranty, Expense, Service & Invoice Vault mobile application with AI Invoice OCR camera scanning. Launching soon exclusively on the Google Play Store.",
    highlights: [
      "AI Invoice OCR camera scanner",
      "7-day urgent warranty expiry alerts",
      "Total Cost of Ownership (TCO) & QR Passports",
      "Encrypted invoice & warranty vault",
    ],
    tech: ["Flutter", "Dart", "Material 3", "AI OCR", "Google Play"],
    accent: "from-indigo-500 to-cyan-500",
    featured: true,
    mode: "solo",
    roleLabel: "Built Solo · Launching Soon",
    status: "upcoming",
  },
];

export const strengths = [
  "Fast Learner",
  "Team Collaboration",
  "Problem Solving",
  "Clean Coding",
  "Debugging",
  "Leadership",
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institute: "Mahatma Gandhi Kashi Vidyapith, Varanasi",
  period: "2023 – 2026",
};

export const languages = [
  { name: "Hindi", level: 100 },
  { name: "English", level: 70 },
];
