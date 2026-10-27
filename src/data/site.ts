import type {
  ActionLink,
  EngineeringMetric,
  NavigationItem,
  ProofDetail,
} from "@/data/types";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const siteConfig = {
  name: "Vaibhav Saini",
  initials: "VS",
  url: "https://vaibhavdev.online/",
  location: "Delhi, India",
  email: "vaibhavsaini2409@gmail.com",
  avatarUrl: `${BASE_PATH}/profile/profile.jpg`,
  resumeUrl: `${BASE_PATH}/documents/resume.pdf`,
  role: "Full-Stack Engineer · Backend & AI Agent Systems",
  metaDescription:
    "Vaibhav Saini — Full-stack engineer specializing in backend-heavy architectures and AI agent systems. Built with documented trade-offs, amortized O(1) algorithms, test suites, and public source.",
} as const;

export const socialLinks = {
  email: {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://linkedin.com/in/vaibhavsaini2/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/vbhvx",
  },
  x: {
    label: "X",
    href: "https://x.com/vaibhxdev",
  },
  cal: {
    label: "Book 20-min Call",
    href: "https://cal.com/vaibhavdev/intro",
  },
  resume: {
    label: "Resume",
    href: siteConfig.resumeUrl,
  },
} as const;

export const navigation: readonly NavigationItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Standards", href: "/#standards" },
  {
    label: "Resume",
    href: siteConfig.resumeUrl,
    external: true,
    download: true,
  },
  { label: "Contact", href: "/#contact" },
] as const;

export const heroContent = {
  chapterTitle: "THE NEXT CHAPTER",
  chapterTagline: "Building what's next, together.",
  availabilityLabel: "Full-time roles & internships",
  title: "Vaibhav Saini",
  kicker: "FULL-STACK ENGINEER · BACKEND ARCHITECTURE · AI AGENT SYSTEMS",
  subtitle: "Taking software apart. Building it back.",
  stack: "TypeScript · Python · Next.js · FastAPI · PostgreSQL · Inngest",
  summary:
    "I build backend-heavy products and AI agent systems, and document every trade-off. Three shipped systems, each with an architecture write-up, tests, and public source.",
} as const;


export const engineeringMetrics: readonly EngineeringMetric[] = [
  {
    label: "AUTOMATED TEST SUITES",
    value: "100+ Tests",
    description: "Automated Cypress E2E flows, Postman API collections, and GitHub Actions CI pipelines",
    highlightClass: "text-foreground",
  },
  {
    label: "FIRST-RUN COMPILE RATE",
    value: "94.2%",
    prefix: "▲",
    description: "First-run compile pass rate achieved via bounded 3-attempt surgical AST repair in Shipshape",
    highlightClass: "text-emerald-400",
  },
  {
    label: "INDEXING COMPLEXITY",
    value: "Amortized O(1)",
    description: "Floating-point fractional indexing with rebalance threshold to eliminate row rewrite cascades",
    highlightClass: "text-sky-400",
  },
] as const;


export const heroActions: readonly ActionLink[] = [
  { label: "View Projects", href: "#projects", variant: "default" },
  {
    label: "Resume (PDF)",
    href: siteConfig.resumeUrl,
    variant: "outline",
    external: true,
    download: true,
  },
  {
    label: "GitHub",
    href: socialLinks.github.href,
    variant: "outline",
    external: true,
  },
] as const;

export const aboutContent = {
  title: "About & Engineering Philosophy",
  bio: "I am a Computer Science student and software engineer based in Delhi, India. I specialize in building backend architectures, distributed data models, and resilient AI agent workflows. My focus is on writing software where every architecture decision is intentional, tested, and honestly documented.",
  education: {
    institution: "G.B. Pant DSEU Campus-I",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2024 — 2028",
    location: "Delhi, India",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Object-Oriented Programming",
    ],
  },
  experience: [
    {
      role: "Independent Software Developer",
      period: "Apr 2025 — Present",
      highlights: [
        "Architected 3 flagship platforms from scratch across Next.js, FastAPI, PostgreSQL, and Inngest.",
        "Documented technical trade-offs, schemas, and bench-tests across public GitHub repositories.",
        "Built resilient multi-step AI pipelines with error detection, self-correction, and cloud sandboxing.",
      ],
    },
    {
      role: "Open Source Contributor",
      organization: "Open Source Ecosystem",
      period: "Jul 2025 — Jan 2026",
      highlights: [
        "10+ merged pull requests across JavaScript/TypeScript open source repositories.",
        "Contributed bug fixes, type improvements, and test coverage while coordinating with maintainers.",
      ],
    },
  ],
  whatNext:
    "Actively seeking backend engineering, AI platform, or full-stack software engineer roles and internships. Available immediately for remote or Delhi-based on-site teams.",
} as const;

export const projectsContent = {
  title: "Projects",
  description:
    "Backend. AI Agents. Distributed Systems. Shipped from the ground up with documented trade-offs.",
} as const;

export const proofContent: {
  title: string;
  details: readonly ProofDetail[];
} = {
  title: "Engineering Standards & Verifiable Proof",
  details: [
    {
      text: "Architecture documents explaining decisions, trade-offs, and failure modes",
      href: "https://github.com/vbhvx/Shipshape",
    },
    {
      text: "Amortized O(1) fractional indexing & type-safe tRPC client-server procedures",
      href: "https://github.com/vbhvx/Orbit",
    },
    {
      text: "Automated CI/CD with Cypress E2E, Postman Newman CLI, and axe accessibility",
      href: "https://github.com/vbhvx/CRM_QA_Automation",
    },
  ],
} as const;

export const opportunityContent = {
  title: "Current Focus",
  details: [
    "Backend architecture — multi-tenancy, RBAC, amortized O(1) data models",
    "AI agent pipelines — iterative loops, cloud sandbox micro-VMs, Server-Sent Events",
    "Database design with PostgreSQL, Prisma, Drizzle ORM, and parameterized raw SQL",
    "Automated QA & CI/CD — Cypress end-to-end testing, Newman API testing, GitHub Actions",
  ],
} as const;

export const contactContent = {
  title: "Let's Build Something Serious",
  headline: "Hiring for backend, full-stack, or AI agent systems?",
  description:
    "I reply within 24 hours. Open to full-time software engineering roles and summer internships. Located in Delhi, India — available for local or remote teams worldwide.",
  availability: "Available Immediately · Delhi / Remote",
  actions: [
    {
      label: "Email Direct",
      href: `mailto:${siteConfig.email}`,
      variant: "default",
      external: true,
    },
    {
      label: "Book 20-min Call",
      href: "https://cal.com/vaibhavdev/intro",
      variant: "outline",
      external: true,
    },
    {
      label: "LinkedIn",
      href: socialLinks.linkedin.href,
      variant: "outline",
      external: true,
    },
    {
      label: "GitHub",
      href: socialLinks.github.href,
      variant: "outline",
      external: true,
    },
  ],
} as const;