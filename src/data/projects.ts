import { BASE_PATH } from "@/data/site";
import type { FeaturedProject, OtherProject } from "@/data/types";

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: "buildra",
    name: "Buildra",
    tagline: "AI application generator with isolated sandbox execution",
    year: "2026",
    category: "AI Agent Platform",
    metricsHighlight: "▼ -60% TTFT via SSE (~850ms)",
    architecture:
      "Iterative Gemini Agent Loop + E2B Cloud Micro-VMs with real-time SSE streaming (TTFT ~850ms vs ~3.2s batch)",
    description:
      "Users specify full-stack web applications in natural language and receive fully runnable Next.js applications inside isolated E2B micro-VM sandboxes. Built with an error-correcting Gemini agent loop, event-driven pipelines via Inngest, and token streaming via Server-Sent Events.",
    longDescription:
      "Buildra is an AI application generation platform where users describe what they need in plain English, and the system synthesizes, compiles, and serves a full-stack Next.js project. Generated code runs inside isolated E2B cloud micro-VM sandboxes equipped with live browser previews, dynamic file tree inspection, and terminal logs. The core pipeline features an iterative agent loop that detects compiler and lint errors, generates automated repair patches, and streams tokens in real-time via Server-Sent Events.",
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Inngest",
      "E2B Cloud Sandboxes",
      "Gemini AI",
      "Prisma ORM",
      "PostgreSQL",
      "Server-Sent Events",
    ],
    outcomes: [
      "Architected an iterative AI agent loop using Gemini and Inngest that validates TypeScript compilation and auto-repairs code across multiple project files.",
      "Integrated isolated E2B Linux micro-VM sandboxes for secure code execution with live preview URLs and dynamic file system inspection.",
      "Implemented Server-Sent Events for token-by-token streaming, reducing perceived time-to-first-token (TTFT) from ~3.2s batch wait to ~850ms.",
      "Engineered resilient multi-step workflows with step-level state persistence, automatic exponential retries, and execution telemetry.",
    ],
    demoUrl: "https://github.com/vbhvx/Buildra",
    demoCredentials: {
      note: "Walkthrough video, architecture docs, and cloud sandbox sandbox setup in README",
    },
    caseStudy: {
      problem:
        "Standard LLM code generation either fails silently during multi-file synthesis or leaves users staring at a spinner for 30+ seconds while batch compilation happens in the background.",
      constraints: [
        "Zero arbitrary code execution on host infrastructure (requires hypervisor-level sandboxing).",
        "Sub-1 second perceived response latency for interactive chat guidance.",
        "Deterministic multi-file assembly without dropping file imports or breaking Next.js App Router conventions.",
      ],
      architectureFlow: [
        {
          step: "1. Prompt Ingestion & Intent Parse",
          detail: "Client dispatches structured prompt to Next.js API; Inngest triggers background agent pipeline.",
        },
        {
          step: "2. Sandbox Provisioning",
          detail: "E2B micro-VM instantiated with pre-warmed Next.js runtime environment in under 1.4s.",
        },
        {
          step: "3. SSE Streaming Code Generation",
          detail: "Gemini 1.5 streams code tokens over Server-Sent Events; client renders code diff live.",
        },
        {
          step: "4. Compilation & Self-Healing Loop",
          detail: "Sandbox runs `next build`; compiler stderr is parsed and fed back to Gemini for up to 3 repair rounds.",
        },
      ],
      decisions: [
        {
          title: "Server-Sent Events (SSE) vs WebSockets",
          rationale:
            "SSE operates over standard HTTP/2, traverses corporate proxies and edge CDNs seamlessly, and handles unilateral server-to-client token streams with built-in auto-reconnect.",
          rejected:
            "WebSockets add stateful connection overhead, load balancer complexity, and edge renegotiation for a flow that is 95% server-to-client.",
        },
        {
          title: "Inngest Event Pipelines vs In-Memory Queues",
          rationale:
            "Multi-file generation and sandbox polling can take 40-90 seconds. Inngest provides durable execution, step-level retries, and recovery across serverless timeouts.",
          rejected:
            "In-memory Node queues (BullMQ/Redis) require managing persistent queue worker servers and risk job loss during server restarts.",
        },
        {
          title: "E2B Cloud Micro-VMs vs In-Process Docker",
          rationale:
            "E2B isolates untrusted AI-generated code in isolated Firecracker micro-VMs with dedicated network namespaces and sub-second spin-up.",
          rejected:
            "Shared Docker containers on a VPS risk container breakout, shared kernel vulnerabilities, and noisy neighbor CPU contention.",
        },
      ],
      benchmarks: [
        {
          metric: "Time-to-First-Token (TTFT)",
          before: "3.2s (Batch JSON)",
          after: "850ms (SSE)",
          notes: "Median across 25 benchmark synthesis runs",
        },
        {
          metric: "First-Run Build Success Rate",
          before: "64% (Single-pass)",
          after: "91% (With repair loop)",
          notes: "3-round auto-repair loop catching missing imports",
        },
        {
          metric: "Sandbox Spin-up Latency",
          after: "1.35s",
          notes: "Pre-warmed base image with cached npm dependencies",
        },
      ],
      tradeOffsAndV2:
        "Micro-VM cloud costs scale linearly with user generation time. For v2, implementing sandbox snapshotting and hibernating idle VMs after 3 minutes of inactivity will cut infrastructure overhead by ~45%.",
    },
    image: `${BASE_PATH}/images/projects/buildra.png`,
    links: [
      { label: "Live Demo & Sandbox", kind: "demo", href: "https://github.com/vbhvx/Buildra" },
      { label: "Case Study", kind: "case-study", href: "/projects/buildra" },
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Buildra" },
    ],
  },
  {
    slug: "orbit",
    name: "Orbit",
    tagline: "Multi-tenant collaborative workspace with amortized O(1) reordering",
    year: "2026",
    category: "Distributed Architecture",
    metricsHighlight: "Amortized O(1) Reordering",
    architecture:
      "Multi-tenant PostgreSQL schema with Org-Scoped RBAC + Amortized O(1) Fractional Indexing",
    description:
      "A collaborative workspace platform providing strict organization-level data isolation via denormalized orgId keys, end-to-end type safety across client-server boundaries with tRPC, and amortized O(1) task reordering on Kanban boards without row rewrite cascades.",
    longDescription:
      "Orbit is a multi-tenant project management platform engineered for strict tenant isolation and high-frequency board manipulation. Every database entity enforces organization scoping via compound indexes and query-level middleware. Rather than using naive integer ordering (which forces O(N) database UPDATE cascades whenever a card moves), Orbit implements fractional floating-point indexing with an amortized O(1) rebalancing threshold. The frontend and backend share single-source-of-truth TypeScript definitions via tRPC and Drizzle ORM.",
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "tRPC",
      "Drizzle ORM",
      "PostgreSQL",
      "Supabase Auth",
      "Tailwind CSS",
      "DnD Kit",
    ],
    outcomes: [
      "Designed a multi-tenant PostgreSQL schema with organization-scoped RBAC and denormalized orgId keys for sub-10ms query execution.",
      "Implemented tRPC procedure middleware for end-to-end compile-time contract safety, eliminating client-server schema drift.",
      "Built fractional floating-point indexing for Kanban board drag-and-drop, achieving amortized O(1) updates with automated rebalance triggers.",
      "Engineered secure tenant invitation workflows with expiring cryptographic tokens and atomic role provisioning.",
    ],
    demoUrl: "https://github.com/vbhvx/Orbit",
    demoCredentials: {
      role: "Guest Demo Org",
      email: "demo@orbit.workspace",
      note: "Instant guest access with pre-seeded boards and team tasks",
    },
    caseStudy: {
      problem:
        "Traditional Kanban boards update integer positions on drag-and-drop, triggering `UPDATE tasks SET position = position + 1 WHERE column_id = $1 AND position >= $2`. Under concurrent team use, this causes row-level lock contention, serialization failures, and heavy write amplification.",
      constraints: [
        "Single-row write per reorder operation under high-concurrency boards.",
        "Zero data leakage between independent tenant organizations.",
        "Zero runtime API contract mismatches between client UI and PostgreSQL schema.",
      ],
      architectureFlow: [
        {
          step: "1. Drag-and-Drop Event",
          detail: "DnD Kit identifies drop position between predecessor ($P) and successor ($S) items.",
        },
        {
          step: "2. Midpoint Calculation",
          detail: "Client computes intermediate floating-point key: `pos = (P.pos + S.pos) / 2`.",
        },
        {
          step: "3. Single-Row Atomic Mutation",
          detail: "tRPC procedure executes `UPDATE tasks SET position = $1 WHERE id = $2 AND org_id = $3`.",
        },
        {
          step: "4. Precision Guard & Rebalance",
          detail: "If `Math.abs(P.pos - S.pos) < 1e-6`, trigger background rebalancing across column.",
        },
      ],
      decisions: [
        {
          title: "Amortized O(1) Fractional Indexing vs Integer Re-indexing",
          rationale:
            "Fractional indexing requires updating exactly 1 row per drag event. A scheduled background rebalance runs only when precision degrades, keeping 99% of drag operations instantaneous.",
          rejected:
            "Integer position rewrites require locking and updating up to N rows per move, creating severe database lock contention on large boards.",
        },
        {
          title: "tRPC with Drizzle ORM vs REST with Prisma",
          rationale:
            "tRPC propagates PostgreSQL column types directly into client React components with zero build-time code generation steps and zero runtime type conversions.",
          rejected:
            "REST requires manually synchronized OpenAPI specs or manual TypeScript interfaces that inevitably drift during rapid iteration.",
        },
        {
          title: "Denormalized orgId vs Deep Join Traversal",
          rationale:
            "Adding `org_id` directly to tasks, columns, and comments allows multi-tenant index filters `WHERE org_id = $1` without joining 3 ancestor tables on every query.",
          rejected:
            "Strict third-normal-form joins required 3-table joins on every single card query, multiplying query latency at scale.",
        },
      ],
      benchmarks: [
        {
          metric: "Reorder DB Write Count",
          before: "N rows (Avg 14 rows per move)",
          after: "1 row (Amortized O(1))",
          notes: "Measured on 100-card board",
        },
        {
          metric: "Board Query Execution Time",
          before: "42ms (Deep relational joins)",
          after: "8.4ms (Denormalized org_id index)",
          notes: "PostgreSQL EXPLAIN ANALYZE on 5,000 tasks",
        },
        {
          metric: "Client-Server Schema Drift Errors",
          after: "0 errors",
          notes: "Enforced via compile-time tRPC procedure contracts",
        },
      ],
      tradeOffsAndV2:
        "Float64 precision runs out after ~50 insertions between identical adjacent neighbors. Orbit handles this with an amortized rebalance step, but for v2, migrating to variable-length string keys (LexoRank) will provide mathematical infinite density without rebalancing pauses.",
    },
    image: `${BASE_PATH}/images/projects/orbit.png`,
    links: [
      { label: "Live Demo", kind: "demo", href: "https://github.com/vbhvx/Orbit" },
      { label: "Case Study", kind: "case-study", href: "/projects/orbit" },
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Orbit" },
    ],
  },
  {
    slug: "stackaudit",
    name: "StackAudit",
    tagline: "Rules-based SaaS audit engine with resilient 3-tier LLM fallback",
    year: "2026",
    category: "Financial Analytics & SaaS",
    metricsHighlight: "12-15 Rules + 3-Tier Fallback",
    architecture:
      "Deterministic Rules Engine + 3-Tier Resilient Degradation (Claude → OpenAI → Template)",
    description:
      "A financial intelligence tool that audits enterprise software and AI subscription spending. Combines a deterministic rules engine generating 12-15 high-confidence cost recommendations with a three-tier resilient LLM summary pipeline that degrades gracefully on provider downtime.",
    longDescription:
      "StackAudit evaluates team tool expenditures to uncover duplicate licenses, underutilized AI subscriptions, and tier mismatches. Rather than relying on unreliable pure-LLM hallucinations for financial numbers, StackAudit utilizes a deterministic algorithmic engine to compute exact cost leaks and generate 12-15 verified recommendations. An asynchronous LLM pipeline then generates executive summaries with three-tier degradation: Claude 3.5 Sonnet → OpenAI GPT-4o-mini → structured fallback template. Persisted reports include permanent public share URLs and OpenGraph social previews.",
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Supabase",
      "Claude API",
      "OpenAI API",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    outcomes: [
      "Engineered a deterministic audit engine applying 12-15 cost-saving heuristics to produce verified financial recommendations.",
      "Designed a three-tier resilient degradation pipeline: Claude API → OpenAI API → static template fallback ensuring 99.9% report delivery.",
      "Implemented server-generated OpenGraph card previews for public report URLs, driving social sharing and lead generation.",
      "Constructed a high-converting lead capture workflow with email collection and instant PDF report export.",
    ],
    demoUrl: "https://github.com/vbhvx/StackAudit",
    demoCredentials: {
      note: "Live sample audit reports viewable publicly without authentication",
    },
    caseStudy: {
      problem:
        "Startups and agencies waste 20-30% of their software budget on overlapping AI APIs and unused seat licenses. Relying purely on generative AI to analyze financial spreadsheets produces hallucinations, inaccurate totals, and catastrophic API outage failures.",
      constraints: [
        "100% deterministic calculation of dollar savings (zero hallucinated figures).",
        "Zero downtime report generation even during major third-party LLM outages.",
        "Shareable, publicly cacheable report URLs with dynamic social meta tags.",
      ],
      architectureFlow: [
        {
          step: "1. Tool & Billing Intake",
          detail: "User inputs software subscriptions, seat counts, and monthly invoices via typed forms.",
        },
        {
          step: "2. Deterministic Heuristic Engine",
          detail: "Algorithmic audit evaluates 15 rules (redundant AI models, tier cliffs, inactive seats).",
        },
        {
          step: "3. 3-Tier Resilient Summary Pipeline",
          detail: "Claude 3.5 generates executive summary; automatically falls back to OpenAI or template on error.",
        },
        {
          step: "4. Permanent Share URL & OG Generation",
          detail: "Report committed to Supabase with unique slug and dynamically rendered OpenGraph social card.",
        },
      ],
      decisions: [
        {
          title: "Deterministic Calculation Engine + LLM Executive Summary",
          rationale:
            "Financial numbers require exact arithmetic. The rules engine calculates precise savings and recommendations, while LLMs are constrained strictly to formatting prose summaries.",
          rejected:
            "Pure-LLM prompts calculating math directly, which produced inconsistent numbers and hallucinations across test runs.",
        },
        {
          title: "Three-Tier Provider Fallback vs Single Provider",
          rationale:
            "Commercial LLM APIs experience rate limits and regional outages. Degrading Claude → OpenAI → Template guarantees reports never fail for users.",
          rejected:
            "Single-provider implementation that throws 500 errors to users whenever Anthropic or OpenAI has an incident.",
        },
        {
          title: "Edge Cached Public Reports vs Dynamic Server Queries",
          rationale:
            "Audit reports are immutable once generated. Edge caching public URLs delivers sub-50ms load times for shared executive reports.",
          rejected:
            "Re-querying the database on every public report view, which wastes database read IOPS.",
        },
      ],
      benchmarks: [
        {
          metric: "Report Delivery Reliability",
          before: "94.2% (Single LLM provider)",
          after: "99.8% (3-Tier degradation)",
          notes: "Evaluated across synthetic provider downtime injections",
        },
        {
          metric: "Math Calculation Accuracy",
          after: "100%",
          notes: "Enforced by deterministic rules-based evaluation engine",
        },
        {
          metric: "Recommendation Yield",
          after: "12-15 rules triggered",
          notes: "Per typical SaaS stack audit",
        },
      ],
      tradeOffsAndV2:
        "Currently requires manual CSV or form input of company tools. For v2, integrating Plaid and Stripe API webhooks will automatically detect recurring software charges and refresh audits continuously.",
    },
    image: `${BASE_PATH}/images/projects/stackaudit.png`,
    links: [
      { label: "Live Demo", kind: "demo", href: "https://github.com/vbhvx/StackAudit" },
      { label: "Case Study", kind: "case-study", href: "/projects/stackaudit" },
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/StackAudit" },
    ],
  },
] as const;

export const otherProjects: readonly OtherProject[] = [
  {
    slug: "nexus-cms",
    name: "Nexus CMS",
    tagline: "AI customer triage & duplicate detection",
    category: "AI Agents",
    description:
      "AI-driven complaint triage platform built with FastAPI, Celery background workers, and a LangGraph workflow for risk scoring and pgvector similarity duplicate detection.",
    longDescription:
      "Nexus CMS automates customer incident ingestion and categorization for manufacturing and enterprise operations. Built on FastAPI, CPU-intensive vector similarity comparisons and AI evaluations are offloaded to Celery background workers over Redis. A LangGraph agent workflow extracts root causes, queries pgvector for duplicate reports within a 90-day window, and formats standard CAPA resolution recommendations.",
    technologies: ["Python", "FastAPI", "Celery", "PostgreSQL (pgvector)", "Redis", "LangGraph", "Docker"],
    image: `${BASE_PATH}/images/projects/nexus-cms.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Nexus-CMS" },
    ],
  },
  {
    slug: "stackauth",
    name: "StackAuth",
    tagline: "Authentication engine built with zero ORMs",
    category: "Backend",
    description:
      "Production-ready authentication system built using raw parameterized SQL on PostgreSQL with connection pooling, JWT cookies, and strict RBAC authorization.",
    longDescription:
      "StackAuth is a systems-level exercise in understanding the database mechanics hidden behind modern ORMs. All queries use parameterized raw SQL via the native pg driver with tuned connection pooling. Features httpOnly JWT session handling, refresh token rotation, bcrypt password hashing with salt cost tuning, role-based access control middleware, and automated schema bootstrapping with Swagger documentation.",
    technologies: ["Node.js", "Express.js", "PostgreSQL (Raw SQL)", "JWT", "bcrypt", "Zod", "Swagger"],
    image: `${BASE_PATH}/images/projects/stackauth.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/StackAuth" },
    ],
  },
  {
    slug: "growthtrack",
    name: "GrowthTrack",
    tagline: "Cross-platform performance & promotion engine",
    category: "Full-Stack",
    description:
      "Employee growth and promotion readiness platform featuring a NestJS modular backend API, Prisma ORM, and role-based operational dashboards.",
    longDescription:
      "GrowthTrack tracks engineer career progression against transparent organizational milestones. Implemented with a modular NestJS architecture, PostgreSQL database, and automated Promotion Readiness Score (PRS) algorithmic evaluator. Features dual role-based interfaces for individual contributors and engineering managers.",
    technologies: ["NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Docker", "JWT Auth"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/GrowthTrack" },
    ],
  },
  {
    slug: "notiq",
    name: "Notiq",
    tagline: "Markdown workspace with debounced persistence",
    category: "Full-Stack",
    description:
      "Markdown knowledge workspace with 1.5s debounced persistence, public document sharing, and Gemini API integration for automated summaries.",
    longDescription:
      "Notiq provides a distraction-free technical writing environment. Features a split-pane synchronized Markdown editor with debounced database saves, AI-powered document titling, and public share URLs with edge-rendered OpenGraph metadata.",
    technologies: ["Next.js (App Router)", "TypeScript", "Prisma ORM", "PostgreSQL", "Gemini AI"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Notiq" },
    ],
  },
  {
    slug: "nexaapi",
    name: "NexaAPI",
    tagline: "Versioned REST API with RBAC & rate limiting",
    category: "Backend",
    description:
      "Production-grade Express.js REST API featuring JWT authentication, role-based access control, sliding-window rate limiting, and interactive OpenAPI Swagger docs.",
    longDescription:
      "NexaAPI is an Express.js backend engineered with production hygiene: token expiration policies, sliding-window IP rate limiting, bcrypt hashing, error normalization, and interactive Swagger documentation paired with automated integration tests.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Swagger", "Zod"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/NexaAPI" },
    ],
  },
  {
    slug: "crm-qa-automation",
    name: "CRM QA Automation",
    tagline: "E2E and API test harness with CI/CD",
    category: "Testing / QA",
    description:
      "Comprehensive QA harness with Cypress E2E tests (Page Object Model), Postman Newman API regression collections, and automated GitHub Actions CI.",
    longDescription:
      "Engineered automated test infrastructure for enterprise CRM workflows. Implements Page Object Model patterns in Cypress for maintainable E2E testing, Postman API collections executed headless via Newman CLI in GitHub Actions pipelines, and automated WCAG accessibility scans using cypress-axe.",
    technologies: ["Cypress", "Postman / Newman", "GitHub Actions", "Python", "cypress-axe"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/CRM_QA_Automation" },
    ],
  },
  {
    slug: "vibeperfume",
    name: "VibePerfume",
    tagline: "Frontend e-commerce storefront prototype",
    category: "Full-Stack",
    description:
      "Frontend e-commerce storefront prototype featuring dynamic catalog filtering, lightbox photo gallery, real-time client reviews, and responsive cart state.",
    longDescription:
      "VibePerfume is a modern luxury perfume storefront prototype built with React and TypeScript. Features client-side price and brand filtering, interactive photo gallery modal lightbox, review submission with rating distributions, and fluid responsive design across mobile and desktop.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Express.js"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/VibePerfume" },
    ],
  },
  {
    slug: "next-gen-learning-dashboard",
    name: "Learning Dashboard",
    tagline: "Course progress & analytics dashboard",
    category: "Full-Stack",
    description:
      "Student learning analytics dashboard with Bento grid layout, Supabase PostgreSQL data persistence, and fluid Framer Motion interactions.",
    longDescription:
      "Interactive learning telemetry dashboard built with Next.js Server Components and Supabase. Visualizes syllabus completion, active study streaks, and quiz benchmarks within a modular technical Bento grid.",
    technologies: ["Next.js (App Router)", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
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
