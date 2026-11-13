import type {
  ActionLink,
  EngineeringMetric,
  NavigationItem,
  ProofDetail,
} from "@/types";
import {
  BASE_PATH,
  siteConfig,
  socialLinks,
  navigation,
} from "@/config/site";

export { BASE_PATH, siteConfig, socialLinks, navigation };

export const heroContent = {
  availabilityLabel: "Internships now (Remote/Delhi) · Full-time from 2028",
  title: "Vaibhav Saini",
  kicker: "FULL-STACK · BACKEND · AI AGENTS",
  subtitle: siteConfig.tagline,
  stack: "TypeScript · Python · Next.js · FastAPI · PostgreSQL · Drizzle · Prisma",
  summary: siteConfig.intro,
} as const;

export const engineeringMetrics: readonly EngineeringMetric[] = [
  {
    label: "AUTOMATED TESTS",
    value: "500+ Tests",
    description: "Vitest, Playwright, and pytest suites across 15 projects, including tenant-isolation and concurrency tests",
    highlightClass: "text-foreground",
  },
  {
    label: "PROJECTS SHIPPED",
    value: "15 Projects",
    description: "Full-stack, backend, AI agent, fintech, and data systems built from scratch, each with documented trade-offs",
    highlightClass: "text-neutral-300",
  },
  {
    label: "OPEN SOURCE IMPACT",
    value: "10+ Merged PRs",
    description: "Contributions across JavaScript/TypeScript open-source repositories and maintainer teams",
    highlightClass: "text-foreground",
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
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    variant: "outline",
    external: true,
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
      role: "Full-Stack Developer",
      organization: "Stealth Startup · Full-time · Remote",
      period: "Apr 2026 — Present",
      highlights: [
        "Developed full-stack features in Next.js and TypeScript for a real-time sports prediction-market platform.",
        "Integrated third-party REST APIs for live scores and match analytics with Zod-validated contracts.",
        "Implemented payment flows with Helio and MetaMask, ensuring smooth transaction handling.",
        "Created interactive dashboards that transformed match data into actionable insights.",
      ],
    },
    {
      role: "Open Source Contributor",
      organization: "JavaScript / TypeScript",
      period: "Jul 2025 — Present",
      highlights: [
        "10+ merged pull requests across JavaScript/TypeScript open source repositories.",
        "Contributed bug fixes, type improvements, and test coverage while coordinating with maintainers (verified on github.com/vbhvx).",
      ],
    },
  ],
  whatNext:
    "Backend systems and AI agents built to work beyond the demo. Open to software engineering internships now (Delhi or Remote) and full-time engineering roles from 2028.",
} as const;

export const projectsContent = {
  title: "Projects",
  description:
    "Backend. AI Agents. Fintech. Data. Shipped from the ground up with documented trade-offs.",
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
      text: "Fractional task ordering, optimistic concurrency, and a transactional outbox for live updates",
      href: "https://github.com/vbhvx/Fellow",
    },
    {
      text: "Parameterized SQL, Argon2id sessions, RBAC, and row-level security without an ORM",
      href: "https://github.com/vbhvx/Latch",
    },
  ],
} as const;

export const opportunityContent = {
  title: "Current Focus",
  details: [
    "Backend architecture — multi-tenancy, RBAC, audit trails, and concurrency control",
    "AI agent pipelines — bounded repair loops, sandboxed execution, Server-Sent Events",
    "Data systems with PostgreSQL, PostGIS, Drizzle, Prisma, and parameterized raw SQL",
    "Testing — Vitest, Playwright, and pytest, with dedicated security and concurrency suites",
  ],
} as const;

export const contactContent = {
  title: "Let's Build Something Serious",
  headline: "Hiring for backend, full-stack, or AI agent systems?",
  description:
    "I reply within 24 hours. Open to software engineering internships and junior engineering roles. Located in Delhi, India — available for local or remote teams worldwide.",
  availability: "Internships now (Remote/Delhi) · Full-time from 2028",
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
