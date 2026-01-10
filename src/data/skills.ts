import type { SkillGroup } from "@/data/types";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "FRONTEND & CLIENT",
    items: [
      { name: "React 19", usedIn: ["Shipshape", "VibePerfume"] },
      { name: "Next.js (App Router)", usedIn: ["Shipshape", "Fellow", "Trim"] },
      { name: "Tailwind CSS", usedIn: ["Shipshape", "Fellow", "Trim"] },
      { name: "TypeScript", usedIn: ["Shipshape", "Fellow", "Trim"] },
      { name: "Turbopack & Vite", usedIn: ["Shipshape", "VibePerfume"] },
      { name: "HTML5 / CSS3", usedIn: ["VibePerfume", "Shipshape"] },
    ],
  },
  {
    title: "BACKEND & ARCHITECTURE",
    items: [
      { name: "Node.js Runtime", usedIn: ["Latch", "Teamly"] },
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
    title: "DATABASES & TESTING",
    items: [
      { name: "PostgreSQL (Raw SQL)", usedIn: ["Latch", "Fellow"] },
      { name: "Prisma ORM", usedIn: ["Shipshape", "Stockroom"] },
      { name: "Drizzle ORM", usedIn: ["Fellow"] },
      { name: "Supabase", usedIn: ["Trim", "Fellow"] },
      { name: "Docker", usedIn: ["Sortwise", "Stride"] },
      { name: "Cypress E2E & Newman", usedIn: ["Gatecheck"] },
    ],
  },
] as const;
