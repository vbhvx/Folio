import type { SkillGroup } from "@/types";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "FRONTEND & CLIENT",
    items: [
      { name: "React 19", usedIn: ["Shipshape", "Trim", "Windward"] },
      { name: "Next.js (App Router)", usedIn: ["Shipshape", "Fellow", "Memora", "Trim", "Sortwise"] },
      { name: "Tailwind CSS", usedIn: ["Shipshape", "Fellow", "Memora", "Stockroom"] },
      { name: "TypeScript", usedIn: ["Shipshape", "Fellow", "Memora", "Latch", "OverLook"] },
      { name: "Vite", usedIn: ["Windward"] },
      { name: "MapLibre GL & Recharts", usedIn: ["OverLook", "Windward", "Penny", "Bloom"] },
    ],
  },
  {
    title: "BACKEND & ARCHITECTURE",
    items: [
      { name: "Next.js Route Handlers", usedIn: ["Fellow", "Teamly", "Stockroom", "Trim"] },
      { name: "FastAPI", usedIn: ["OverLook", "Windward"] },
      { name: "Fastify", usedIn: ["Latch"] },
      { name: "Transactional Outbox", usedIn: ["Fellow", "Stockroom"] },
      { name: "Server-Sent Events (SSE)", usedIn: ["Shipshape", "Fellow"] },
      { name: "RBAC & Session Auth", usedIn: ["Latch", "Fellow", "Teamly", "Trim"] },
    ],
  },
  {
    title: "AI & DATA PIPELINES",
    items: [
      { name: "Bounded Agent Repair Loops", usedIn: ["Shipshape"] },
      { name: "Gemini API", usedIn: ["Shipshape", "Memora"] },
      { name: "OpenAI API", usedIn: ["Shipshape", "Memora"] },
      { name: "Provider-Agnostic AI Adapters", usedIn: ["Memora", "Stride", "Trim"] },
      { name: "pandas", usedIn: ["Windward"] },
      { name: "Decimal.js Financial Math", usedIn: ["Trim", "Penny", "Bloom"] },
    ],
  },
  {
    title: "DATABASES & TESTING",
    items: [
      { name: "PostgreSQL (Raw SQL)", usedIn: ["Latch"] },
      { name: "Drizzle ORM", usedIn: ["Fellow", "Memora", "Stockroom", "Teamly"] },
      { name: "Prisma ORM", usedIn: ["Shipshape", "Sortwise", "Trim", "Penny", "Bloom"] },
      { name: "PostGIS & SQLAlchemy", usedIn: ["OverLook"] },
      { name: "Docker", usedIn: ["Latch", "Stride", "OverLook", "Windward"] },
      { name: "Vitest, Playwright & pytest", usedIn: ["Memora", "Fellow", "Windward", "OverLook"] },
    ],
  },
] as const;
