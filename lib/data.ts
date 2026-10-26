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

export type SkillItem = {
  name: string;
  level: number;
  badge?: string;
  accent?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  category: "all" | "mobile" | "frontend" | "backend" | "database" | "devops";
  icon: string;
  badge: string;
  accent: string;
  description: string;
  projects?: string[];
  skills: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "mobile",
    title: "Mobile (Flutter & Dart)",
    category: "mobile",
    icon: "📱",
    badge: "Flagship Expertise",
    accent: "from-cyan-500 to-blue-600",
    description:
      "Cross-platform Android & iOS engineering with Riverpod, offline-first queues, and Google Play Store publishing.",
    projects: ["Parva", "JHATPAT", "UdharKhata", "MyDigi"],
    skills: [
      { name: "Flutter", level: 92, badge: "Expert", accent: "from-cyan-400 to-blue-500" },
      { name: "Dart", level: 90, badge: "Expert", accent: "from-blue-500 to-indigo-500" },
      { name: "Riverpod & State Management", level: 86, badge: "Advanced", accent: "from-sky-400 to-blue-600" },
      { name: "Firebase & Offline Sync", level: 88, badge: "Advanced", accent: "from-amber-400 to-orange-500" },
      { name: "Play Store Release & CI", level: 90, badge: "Expert", accent: "from-emerald-400 to-teal-500" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Web",
    category: "frontend",
    icon: "🎨",
    badge: "Modern & Responsive",
    accent: "from-blue-600 to-indigo-600",
    description:
      "Modern web experiences built with React, Next.js App Router, Tailwind CSS, and SEO-friendly architectures.",
    projects: ["Fiscora", "KP Industries", "Siddhivinayak", "MyDigi"],
    skills: [
      { name: "React.js", level: 92, badge: "Expert", accent: "from-cyan-400 to-blue-500" },
      { name: "Next.js (App Router, SSR)", level: 88, badge: "Advanced", accent: "from-slate-700 to-slate-900" },
      { name: "Tailwind CSS & Animations", level: 95, badge: "Master", accent: "from-sky-400 to-cyan-500" },
      { name: "TypeScript & JavaScript", level: 88, badge: "Advanced", accent: "from-blue-600 to-indigo-600" },
      { name: "Responsive UI & Core Web Vitals", level: 94, badge: "Expert", accent: "from-emerald-500 to-teal-500" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    category: "backend",
    icon: "⚙️",
    badge: "Scalable & Secure",
    accent: "from-rose-500 to-red-600",
    description:
      "Enterprise RESTful APIs, JWT/Sanctum authentication, push notifications, and merchant/customer workflows.",
    projects: ["ShopNest", "BestInCity", "Parva"],
    skills: [
      { name: "Laravel / PHP", level: 88, badge: "Advanced", accent: "from-rose-500 to-red-600" },
      { name: "RESTful API Architecture", level: 92, badge: "Expert", accent: "from-indigo-500 to-blue-600" },
      { name: "Node.js & Express", level: 80, badge: "Proficient", accent: "from-emerald-500 to-green-600" },
      { name: "JWT / Sanctum Authentication", level: 86, badge: "Advanced", accent: "from-amber-500 to-orange-600" },
      { name: "Push Notifications & Webhooks", level: 88, badge: "Advanced", accent: "from-violet-500 to-purple-600" },
    ],
  },
  {
    id: "database",
    title: "Databases & Cloud",
    category: "database",
    icon: "🗄️",
    badge: "Data Integrity",
    accent: "from-amber-500 to-orange-600",
    description:
      "Schema design, relational indexing, Firebase real-time synchronization, and local SQLite data queues.",
    projects: ["ShopNest", "UdharKhata", "Parva"],
    skills: [
      { name: "MySQL", level: 88, badge: "Advanced", accent: "from-blue-500 to-sky-600" },
      { name: "Firebase Firestore & Auth", level: 86, badge: "Advanced", accent: "from-amber-400 to-orange-500" },
      { name: "PostgreSQL", level: 82, badge: "Proficient", accent: "from-indigo-500 to-blue-600" },
      { name: "SQLite & Local Caching", level: 88, badge: "Advanced", accent: "from-teal-500 to-cyan-600" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Launch",
    category: "devops",
    icon: "🚀",
    badge: "Production Ready",
    accent: "from-emerald-500 to-teal-600",
    description:
      "Zero-downtime deployment pipelines, GoDaddy domain & DNS setup, Google Play Console, and Git workflows.",
    projects: ["Google Play", "Vercel", "GoDaddy"],
    skills: [
      { name: "Google Play Store Console", level: 90, badge: "Expert", accent: "from-emerald-500 to-teal-600" },
      { name: "Vercel Deployments & CI/CD", level: 92, badge: "Expert", accent: "from-slate-800 to-black" },
      { name: "GoDaddy DNS & Domain Setup", level: 92, badge: "Expert", accent: "from-emerald-600 to-teal-700" },
      { name: "Git / GitHub Version Control", level: 90, badge: "Expert", accent: "from-orange-500 to-red-600" },
      { name: "Postman API Testing", level: 88, badge: "Advanced", accent: "from-orange-400 to-amber-500" },
    ],
  },
  {
    id: "practices",
    title: "Architecture & Practices",
    category: "all",
    icon: "✨",
    badge: "Code Craftsmanship",
    accent: "from-purple-600 to-violet-600",
    description:
      "Clean architecture, offline idempotency, payment gateway integration, and high testability standards.",
    projects: ["Parva", "ShopNest", "MyDigi"],
    skills: [
      { name: "Clean Architecture Principles", level: 88, badge: "Advanced", accent: "from-violet-500 to-purple-600" },
      { name: "Offline-First Sync Queues", level: 88, badge: "Advanced", accent: "from-cyan-500 to-blue-600" },
      { name: "Payment Gateway Integration", level: 86, badge: "Advanced", accent: "from-emerald-500 to-teal-600" },
      { name: "Role-Based Auth & Security", level: 88, badge: "Advanced", accent: "from-rose-500 to-pink-600" },
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
    role: "Freelance Web & Mobile Developer",
    company: "Independent · Direct Clients",
    period: "2024 – Present",
    type: "Freelance",
    points: [
      "Developing Parva — Enterprise Lorry Fleet Management mobile ecosystem with Flutter (Admin + Driver Terminal).",
      "Designed & built live client websites end-to-end (Siddhivinayak Recovery, KP Industries, Fiscora).",
      "Owned full project lifecycle: requirement gathering, UI/UX, responsive coding, domain/hosting and SEO.",
      "Engineered offline-first mobile apps, real-time sync queues and local storage architecture.",
      "Direct client communication, rigorous specification adherence, and Play Store publishing.",
    ],
    tech: ["Flutter", "Dart", "React", "Next.js", "Offline-First", "Play Store"],
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
  icon?: string;
  featured?: boolean;
  // "solo" = freelance / independent projects. "team" = built with the Tryeno team.
  mode: "solo" | "team";
  roleLabel: string;
  status?: "live" | "upcoming" | "in-progress" | "testing";
};

export const projects: Project[] = [
  {
    name: "Parva",
    category: "Mobile · Enterprise Fleet Ecosystem (In Dev)",
    description:
      "A complete enterprise Lorry Fleet Management Ecosystem built for Apex Fleet & Logistics. Features two independent Flutter apps: a 13-module Fleet Admin suite and an Offline-First Driver Terminal with local UUID queue, auto-sync, and automated fuel calculation.",
    highlights: [
      "Dual Flutter Apps: Admin Mobile (13 modules) + Driver Terminal (10 screens)",
      "Offline-First architecture with local UUID queue & auto cloud synchronization",
      "Dynamic trip ledger, automated fuel calculation & mileage formulas",
      "Vehicles, drivers, maintenance, inventory, compliance & audit trail",
    ],
    tech: ["Flutter", "Dart", "Material 3", "Android", "Offline-First", "REST API"],
    accent: "from-blue-600 to-indigo-600",
    image: "/parva-icon.png",
    featured: true,
    mode: "solo",
    roleLabel: "Freelance Project",
    status: "in-progress",
    icon: "🚛",
  },
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
    roleLabel: "Freelance Project",
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
    roleLabel: "Freelance Project",
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
    roleLabel: "Freelance Project",
  },
  {
    name: "MyDigi",
    category: "Mobile & Web · Asset & Warranty Hub",
    description:
      "All-in-one Smart Product, Warranty, Expense, Service & Invoice Vault ecosystem with AI OCR camera scanning. Official marketing website is live at mydigi.co.in, and the Flutter Android mobile application is currently in closed testing on Google Play.",
    highlights: [
      "Official website live at mydigi.co.in",
      "Flutter mobile app in active Closed Testing",
      "AI Invoice OCR camera scanner & proactive expiry alerts",
      "Total Cost of Ownership (TCO) & encrypted warranty vault",
    ],
    tech: ["Flutter", "Dart", "Material 3", "AI OCR", "Google Play (Testing)"],
    accent: "from-indigo-500 to-cyan-500",
    link: "https://mydigi.co.in",
    linkLabel: "Visit Live Website",
    image: "/mydigi-icon.png",
    featured: true,
    mode: "solo",
    roleLabel: "Freelance Project",
    status: "testing",
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
