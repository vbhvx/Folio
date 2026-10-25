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
  role: "Software Dev | Web • Backend • AI",
  metaDescription:
    "Vaibhav Saini — Software developer building projects across web, backend, and AI. Featuring AI applications, multi-tenant platforms, and SaaS solutions.",
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
  resume: {
    label: "Resume",
    href: siteConfig.resumeUrl,
  },
} as const;

export const navigation: readonly NavigationItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Proof", href: "/#proof" },
  {
    label: "Resume",
    href: siteConfig.resumeUrl,
    external: true,
    download: true,
  },
  { label: "Contact", href: "/#contact" },
] as const;

export const heroContent = {
  availabilityLabel: "Open to Build",
  title: "Vaibhav Saini",
  kicker: "SYSTEMS ARCHITECTURE · BACKEND INFRASTRUCTURE · AI AGENT PLATFORMS",
  subtitle: "Taking software apart. Building it back.",
  stack: "TypeScript · Python · Next.js · FastAPI · PostgreSQL",
  summary:
    "Software developer working across web, backend, and AI. Each project has documented architecture decisions, real technical trade-offs, and honest engineering.",
} as const;

export const engineeringMetrics: readonly EngineeringMetric[] = [
  {
    label: "SHIPPED SYSTEMS",
    value: "3 Flagship",
    description: "Full-stack AI agents, multi-tenancy, and SaaS cost optimization",
    highlightClass: "text-foreground",
  },
  {
    label: "STREAMING LATENCY",
    value: "-60%",
    prefix: "▼",
    description: "Server-Sent Events token streaming vs batch generation in Buildra",
    highlightClass: "text-emerald-400",
  },
  {
    label: "INDEXING COMPLEXITY",
    value: "O(1) Updates",
    description: "Fractional floating-point indexing without rewriting adjacent rows",
    highlightClass: "text-sky-400",
  },
] as const;

export const heroActions: readonly ActionLink[] = [
  { label: "View Projects", href: "/projects", variant: "default" },
  {
    label: "View Resume",
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
  title: "About",
  focusTitle: "Focus areas",
  focusDescription:
    "Building software across web, backend, and AI.",
  paragraphs: [
    "I build projects across TypeScript and Python — focusing on clean architecture, reliable APIs, and thoughtful data modeling.",
    "Recent work includes an AI code generation platform (Buildra), a multi-tenant collaborative workspace (Orbit), and a SaaS cost optimization tool (StackAudit). Each project is built with authenticated workflows, structured data, and documented architecture decisions.",
  ],
} as const;

export const projectsContent = {
  title: "Projects",
  description:
    "Web. Backend. AI. Systems built from the ground up.",
} as const;

export const proofContent: {
  title: string;
  details: readonly ProofDetail[];
} = {
  title: "Engineering Standards",
  details: [
    {
      text: "Architecture documents explaining decisions and trade-offs",
      href: "https://github.com/vbhvx/Buildra",
    },
    {
      text: "Public source code with detailed READMEs and API documentation",
      href: "https://github.com/vbhvx/Orbit",
    },
    {
      text: "Automated testing with Cypress, Postman, and CI/CD pipelines",
      href: "https://github.com/vbhvx/CRM_QA_Automation",
    },
  ],
} as const;

export const opportunityContent = {
  title: "Current Focus",
  details: [
    "Web development with React, Next.js, and Node.js",
    "AI integrations — agent loops, LLM pipelines, background processing",
    "Database design with PostgreSQL, Prisma, Drizzle, and raw SQL",
    "Backend architecture — multi-tenancy, RBAC, event-driven workflows",
  ],
} as const;

export const contactContent = {
  title: "Get in Touch",
  description:
    "Looking for something crazy to build. Let's build something meaningful together.",
  actions: [
    {
      label: "Email",
      href: socialLinks.email.href,
      variant: "default",
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