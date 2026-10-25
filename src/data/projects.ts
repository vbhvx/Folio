import { BASE_PATH } from "@/data/site";
import type { FeaturedProject, OtherProject } from "@/data/types";

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: "buildra",
    name: "Buildra",
    tagline: "AI-powered code generation platform",
    year: "2026",
    category: "AI Agent Platform",
    architecture: "Iterative Gemini Agent Loop + E2B Cloud Micro-VMs with real-time SSE streaming (▼ -60% latency)",
    description:
      "Users describe web applications in natural language and receive working Next.js applications inside cloud sandboxes. Built with an AI agent loop using Gemini, event-driven pipelines via Inngest, and real-time token streaming via Server-Sent Events.",
    longDescription:
      "Buildra is an AI code generation platform where users describe what they want in plain English, and the system generates a fully functional Next.js application. The generated code runs inside E2B cloud sandboxes with a live preview, file explorer, and real-time streaming. I built an iterative AI agent loop that generates code, detects errors, and self-corrects — all orchestrated through Inngest event-driven pipelines for reliability and observability.",
    technologies: ["Next.js", "TypeScript", "React 19", "Inngest", "E2B", "Gemini AI", "Prisma", "PostgreSQL", "SSE"],
    outcomes: [
      "Architected an AI agent loop using Gemini and Inngest that iteratively generates, validates, and corrects code across multiple files.",
      "Integrated E2B cloud sandboxes for secure code execution with real-time preview and file system exploration.",
      "Implemented Server-Sent Events for token-by-token streaming, reducing perceived latency by ~60% compared to batch responses.",
      "Built with Clerk authentication, Prisma ORM, and React 19 Server Components.",
    ],
    image: `${BASE_PATH}/images/projects/buildra.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Buildra" },
    ],
  },
  {
    slug: "orbit",
    name: "Orbit",
    tagline: "Multi-tenant collaborative platform",
    year: "2026",
    category: "Distributed Architecture",
    architecture: "Multi-tenant PostgreSQL schema with Org-Scoped RBAC + Fractional Indexing (< O(1) reorder)",
    description:
      "A multi-tenant task management platform with organization-level data isolation, tRPC for end-to-end type safety, and fractional indexing for O(1) drag-and-drop reordering. Designed with Drizzle ORM and PostgreSQL.",
    longDescription:
      "Orbit is a collaborative task platform built for teams. Each organization gets isolated data — users can only see and modify resources within their org. I used tRPC for end-to-end type safety between the Next.js frontend and the API layer, Drizzle ORM for type-safe database queries, and implemented fractional indexing for the Kanban board to enable O(1) reordering without rewriting multiple database rows.",
    technologies: ["Next.js", "TypeScript", "tRPC", "Drizzle ORM", "PostgreSQL", "Supabase Auth", "Tailwind", "DnD Kit"],
    outcomes: [
      "Designed a multi-tenant PostgreSQL schema with organization-scoped RBAC and denormalized orgId for query performance.",
      "Implemented tRPC procedures with middleware for end-to-end type safety, eliminating runtime type errors between client and server.",
      "Built fractional indexing for Kanban board task reordering — O(1) position updates without rewriting adjacent rows.",
      "Created an invitation system with secure org-scoped invite links and role assignment on join.",
    ],
    image: `${BASE_PATH}/images/projects/orbit.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Orbit" },
    ],
  },
  {
    slug: "stackaudit",
    name: "StackAudit",
    tagline: "AI-powered SaaS cost optimizer",
    year: "2026",
    category: "Financial Analytics & SaaS",
    architecture: "3-Tier Resilient Degradation Pipeline (Claude → OpenAI → template) with OpenGraph reporting",
    description:
      "A SaaS tool that audits AI/software spending and generates 12-15 actionable optimization recommendations. Features a resilient LLM pipeline (Claude → OpenAI → template fallback), shareable public report URLs, and a lead-capture funnel.",
    longDescription:
      "StackAudit helps teams reduce their AI and SaaS spending. Users input their current tool stack and spending, and the platform generates a detailed audit report with specific cost reduction recommendations. I built a rules-based audit engine that produces 12-15 recommendations, backed by a resilient LLM summary pipeline that degrades gracefully: Claude API → OpenAI API → template fallback. Reports are persisted in Supabase, accessible via public URLs with OpenGraph metadata for social sharing, and include a lead capture form for follow-up.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Claude API", "OpenAI API", "Tailwind", "PostgreSQL"],
    outcomes: [
      "Built a rules-based audit engine that generates 12-15 specific cost optimization recommendations per report.",
      "Designed a resilient LLM summary pipeline with three-tier degradation: Claude → OpenAI → template fallback.",
      "Implemented shareable public report URLs with auto-generated OpenGraph metadata for social preview.",
      "Created a lead-capture funnel with email collection and report download.",
    ],
    image: `${BASE_PATH}/images/projects/stackaudit.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/StackAudit" },
    ],
  },
] as const;

export const otherProjects: readonly OtherProject[] = [
  {
    slug: "nexus-cms",
    name: "Nexus CMS",
    tagline: "AI complaint management system",
    description:
      "AI-driven complaint triage with FastAPI, Celery workers, and a LangGraph pipeline for risk scoring and duplicate detection.",
    longDescription:
      "This project automates the process of reading and categorizing customer complaints for manufacturing and pharmaceutical industries. It uses a FastAPI server and passes long-running AI tasks to Celery background workers. The LangGraph AI pipeline extracts details, assesses risk, detects duplicates via pgvector similarity search, and generates CAPA recommendations.",
    technologies: ["Python", "FastAPI", "Celery", "LangGraph", "PostgreSQL", "Redis", "React 19"],
    image: `${BASE_PATH}/images/projects/nexus-cms.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Nexus-CMS" },
    ],
  },
  {
    slug: "stackauth",
    name: "StackAuth",
    tagline: "Auth system built with zero ORMs",
    description:
      "Auth system using raw SQL on PostgreSQL — no ORMs. JWT, RBAC, and Zod validation.",
    longDescription:
      "StackAuth is a deliberate exercise in understanding what ORMs abstract away. All database queries use parameterized SQL via the pg driver with connection pooling. Features JWT authentication with httpOnly cookies, role-based access control, Zod validation on every endpoint, auto-bootstrapping schema, and interactive Swagger documentation.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "bcrypt", "Zod", "Swagger"],
    image: `${BASE_PATH}/images/projects/stackauth.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/StackAuth" },
    ],
  },
  {
    slug: "growthtrack",
    name: "GrowthTrack",
    tagline: "Cross-platform employee growth tracker",
    description:
      "Employee growth and promotion tracker with Flutter frontend, NestJS API, and role-based dashboards.",
    longDescription:
      "GrowthTrack is a tool for tracking employee progress and promotion readiness. It provides different views for employees and managers, with a Promotion Readiness Score algorithm. The frontend is built with Flutter for cross-platform support, and the API is built with NestJS, Prisma, and PostgreSQL.",
    technologies: ["Flutter", "Dart", "NestJS", "Prisma", "PostgreSQL", "JWT", "Docker"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/GrowthTrack" },
    ],
  },
  {
    slug: "notiq",
    name: "Notiq",
    tagline: "AI-powered notes workspace",
    description:
      "Markdown notes app with auto-save, public sharing, and Gemini AI for summaries and smart titles.",
    longDescription:
      "Notiq is a note-taking app built with Next.js. It features a split-pane Markdown editor with auto-save (1.5s debounced writes), shareable public links with AI-generated metadata, a productivity insights dashboard, and JWT authentication via NextAuth.js v5.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Gemini API"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Notiq" },
    ],
  },
  {
    slug: "nexaapi",
    name: "NexaAPI",
    tagline: "REST API with JWT and RBAC",
    description:
      "Versioned REST API with JWT auth, RBAC, rate limiting, and Swagger docs.",
    longDescription:
      "NexaAPI is an Express.js backend that implements JWT authentication, bcrypt password hashing, and role-based access control, with API endpoints documented via Swagger. The React 19 frontend features a dark glassmorphism UI with auth context and Axios interceptors.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React 19", "JWT", "Swagger"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/NexaAPI" },
    ],
  },
  {
    slug: "crm-qa-automation",
    name: "CRM QA Automation",
    tagline: "E2E and API test suite",
    description:
      "Cypress E2E + Postman API test suite for a CRM, with CI/CD via GitHub Actions.",
    longDescription:
      "This project contains Cypress end-to-end tests using the Page Object Model pattern, Postman API collections with Newman CLI integration, Python-based test data generators, and a GitHub Actions workflow for automated CI/CD. Also includes WCAG accessibility testing with cypress-axe.",
    technologies: ["Cypress", "Postman", "GitHub Actions", "Python"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/CRM_QA_Automation" },
    ],
  },
  {
    slug: "vibeperfume",
    name: "VibePerfume",
    tagline: "E-commerce storefront",
    description:
      "MERN e-commerce storefront with filtering, lightbox gallery, and star ratings.",
    longDescription:
      "VibePerfume is a MERN stack e-commerce application. It includes product filtering, a photo gallery with lightbox, star ratings with real-time review updates, and responsive design across mobile, tablet, and desktop.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/VibePerfume" },
    ],
  },
  {
    slug: "next-gen-learning-dashboard",
    name: "Learning Dashboard",
    tagline: "Progress tracking dashboard",
    description:
      "Course progress dashboard with Supabase data, Bento grid layout, and Framer Motion animations.",
    longDescription:
      "This project is a React dashboard that shows course progress. It fetches data from Supabase and uses Next.js Server Components with a clean Bento grid layout and fluid animations.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Framer Motion"],
    image: `${BASE_PATH}/images/projects/learningdashboard.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/NextGen-Learning-Dashboard" },
    ],
  },
] as const;

export const allProjects = [...featuredProjects, ...otherProjects];

export function getProjectBySlug(slug: string) {
  return allProjects.find((p) => p.slug === slug) ?? null;
}

export function getAllProjectSlugs() {
  return allProjects.map((p) => p.slug);
}
