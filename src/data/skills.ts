import type { SkillGroup } from "@/data/types";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "LANGUAGES & CORE",
    items: [
      { name: "TypeScript" },
      { name: "Python" },
      { name: "SQL (PostgreSQL)" },
      { name: "JavaScript (ES6+)" },
      { name: "Node.js Runtime" },
    ],
  },
  {
    title: "BACKEND & ARCHITECTURE",
    items: [
      { name: "Next.js (App Router)" },
      { name: "FastAPI" },
      { name: "Express.js" },
      { name: "tRPC (Type-Safe RPC)" },
      { name: "Server-Sent Events (SSE)" },
      { name: "RBAC & JWT Auth" },
    ],
  },
  {
    title: "AI AGENTS & PIPELINES",
    items: [
      { name: "Inngest Event Pipelines" },
      { name: "Iterative Agent Loops" },
      { name: "E2B Cloud Sandboxes" },
      { name: "Claude API" },
      { name: "Gemini AI" },
      { name: "OpenAI API" },
    ],
  },
  {
    title: "DATABASES & RELIABILITY",
    items: [
      { name: "PostgreSQL (Raw SQL + Schemas)" },
      { name: "Drizzle ORM" },
      { name: "Prisma ORM" },
      { name: "Supabase" },
      { name: "Docker" },
      { name: "CI/CD & Cypress E2E" },
    ],
  },
] as const;

