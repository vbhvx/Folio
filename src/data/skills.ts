import type { SkillGroup } from "@/data/types";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "LANGUAGES & CORE",
    items: [
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "Python" },
      { name: "SQL" },
      { name: "HTML5 / CSS3" },
      { name: "Dart" },
    ],
  },
  {
    title: "FRONTEND & RUNTIMES",
    items: [
      { name: "Next.js (App Router)" },
      { name: "React 19" },
      { name: "Tailwind CSS" },
      { name: "tRPC" },
      { name: "DnD Kit" },
      { name: "Flutter" },
    ],
  },
  {
    title: "BACKEND & AGENTS",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" },
      { name: "Inngest" },
      { name: "Celery" },
      { name: "SSE Streaming" },
      { name: "LangGraph" },
      { name: "JWT / RBAC" },
    ],
  },
  {
    title: "DATABASES & INFRA",
    items: [
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "Prisma" },
      { name: "Drizzle ORM" },
      { name: "Docker" },
      { name: "E2B Cloud Sandboxes" },
      { name: "Postman / CI/CD" },
    ],
  },
] as const;
