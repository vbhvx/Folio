import type { SkillGroup } from "@/data/types";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "LANGUAGES & CORE",
    items: [
      { name: "TypeScript", usedIn: ["Shipshape", "Fellow", "Trim"] },
      { name: "Python", usedIn: ["Sortwise", "Gatecheck"] },
      { name: "SQL (PostgreSQL)", usedIn: ["Latch", "Fellow", "Trim"] },
      { name: "JavaScript (ES6+)", usedIn: ["VibePerfume", "Shipshape"] },
      { name: "Node.js Runtime", usedIn: ["Latch", "Teamly"] },
    ],
  },
  {
    title: "BACKEND & ARCHITECTURE",
    items: [
      { name: "Next.js (App Router)", usedIn: ["Shipshape", "Fellow", "Trim"] },
      { name: "FastAPI", usedIn: ["Sortwise"] },
      { name: "Express.js", usedIn: ["Latch", "Teamly"] },
      { name: "tRPC (Type-Safe RPC)", usedIn: ["Fellow"] },
      { name: "Server-Sent Events (SSE)", usedIn: ["Shipshape"] },
      { name: "RBAC & JWT Auth", usedIn: ["Latch", "Fellow"] },
    ],
  },
  {
    title: "AI AGENTS & PIPELINES",
    items: [
      { name: "Inngest Event Pipelines", usedIn: ["Shipshape"] },
      { name: "Iterative Agent Loops", usedIn: ["Shipshape", "Sortwise"] },
      { name: "E2B Cloud Sandboxes", usedIn: ["Shipshape"] },
      { name: "Claude API", usedIn: ["Trim"] },
      { name: "Gemini AI", usedIn: ["Shipshape", "Memora"] },
      { name: "OpenAI API", usedIn: ["Trim"] },
    ],
  },
  {
    title: "DATABASES & RELIABILITY",
    items: [
      { name: "PostgreSQL (Raw SQL)", usedIn: ["Latch", "Fellow"] },
      { name: "Drizzle ORM", usedIn: ["Fellow"] },
      { name: "Prisma ORM", usedIn: ["Shipshape", "Stockroom"] },
      { name: "Supabase", usedIn: ["Trim", "Fellow"] },
      { name: "Docker", usedIn: ["Sortwise", "Stride"] },
      { name: "CI/CD & Cypress E2E", usedIn: ["Gatecheck"] },
    ],
  },
] as const;

