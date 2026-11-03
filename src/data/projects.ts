import { BASE_PATH } from "@/data/site";
import type { FeaturedProject, OtherProject } from "@/data/types";

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: "shipshape",
    name: "Shipshape",
    tagline: "Describe an app, get a running Next.js codebase",
    year: "2026",
    category: "AI Agent Platform",
    metricsHighlight: "94.2% Compile Rate · AST Repair",
    architecture:
      "5-stage synthesis pipeline + sandboxed runtime with AST-based repair (3-attempt cap)",
    description:
      "Plain-English prompt in, a typed 12-18 file project out, running in an isolated sandbox with live preview, version diffs, and .zip export.",
    longDescription:
      "Shipshape is an end-to-end AI application builder designed to eliminate brittle single-file code generation. By decomposing application synthesis into an autonomous 5-stage pipeline (Intent Planning → Structured Spec → Multi-File Synthesis → Sandboxed Compilation → Unified Diffs), it constructs 12–18 cohesive Next.js 16 App Router files per project. Generated code runs inside an isolated process sandbox runtime equipped with automatic port allocation and live preview. When compiler errors occur, a bounded 3-attempt self-repair engine intercepts TypeScript diagnostics, isolates AST failure nodes, and generates targeted repair patches.",
    technologies: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Turbopack",
      "Prisma ORM",
      "SQLite",
      "Tailwind CSS",
      "Server-Sent Events (SSE)",
      "Vitest",
    ],
    outcomes: [
      "Bounded self-repair loop that patches failing AST nodes before the user sees errors",
      "Isolated sandbox manager with port allocation, lifecycle isolation, and secret scrubbing",
    ],
    demoUrl: "https://shipshape.vaibhavdev.online/",
    demoCredentials: {
      note: "Live app running with interactive sandboxed code generation and live preview",
    },
    caseStudy: {
      problem:
        "Standard LLM code generation either fails silently during complex multi-file synthesis or produces syntax errors that crash Next.js builds, forcing users to manually debug broken imports without a sandbox preview.",
      constraints: [
        "Zero uncontained arbitrary execution on host infrastructure (requires jailed sandboxed processes).",
        "Sub-15 second median time to live interactive preview with Turbopack compilation.",
        "Deterministic 12–18 file assembly with zero missing import paths or broken App Router conventions.",
        "100% portable source export as standalone runnable .zip with zero vendor lock-in.",
      ],
      architectureFlow: [
        {
          step: "1. Intent Planning & Structured Spec",
          detail: "User prompt is parsed into domain models, route schemas, and component trees with strict JSON specifications.",
        },
        {
          step: "2. Multi-File Code Synthesis",
          detail: "Synthesizes 12–18 synchronized Next.js 16 files, streaming tokens over Server-Sent Events (SSE) in real time.",
        },
        {
          step: "3. Jailed Sandboxed Compilation",
          detail: "Process sandbox manager assigns ephemeral ports and executes Turbopack compilation with secret scrubbing.",
        },
        {
          step: "4. Surgical AST Repair & Diffs",
          detail: "Runtime compiler errors trigger bounded 3-attempt AST repair loop; unified line diffs are committed to version history.",
        },
      ],
      decisions: [
        {
          title: "Autonomous 5-Stage Synthesis vs Single-Prompt Generation",
          rationale:
            "Decomposing into planning, specification, multi-file synthesis, compilation, and diffing prevents context contamination and produces 12–18 cohesive files with verified cross-file imports.",
          rejected:
            "Monolithic single-pass generation that hallucinates missing utilities and drops export statements when token windows fill.",
        },
        {
          title: "Surgical AST Error Repair vs Naive Prompt Re-runs",
          rationale:
            "Targeting compiler diagnostics directly at the broken AST syntax node allows surgical patch synthesis without mutating working files or triggering cascading errors.",
          rejected:
            "Regenerating the entire project from scratch upon a compiler warning, which wastes token budget and causes non-deterministic regression.",
        },
        {
          title: "Immutable Line-by-Line Diffs vs Whole-File Overwrites",
          rationale:
            "Unified additions and deletions allow users to inspect exact changes, review conversational edits, roll back cleanly, and export clean Git history.",
          rejected:
            "Silently replacing files in-place without version tracking, which eliminates auditability and makes troubleshooting AI edits impossible.",
        },
      ],
      benchmarks: [
        {
          metric: "First-Run Compile Pass Rate",
          before: "62% (Raw LLM multi-file)",
          after: "94.2% (With AST repair)",
          notes: "Bounded 3-attempt self-repair catching TypeScript compiler diagnostics",
        },
        {
          metric: "Median Time to Live Preview",
          before: "~45s (Standard webpack build)",
          after: "~14s (Turbopack benchmark)",
          notes: "Pre-configured runtime container with incremental compilation",
        },
        {
          metric: "Average Project File Count",
          after: "12–18 files",
          notes: "Full App Router structure with components, layout, API routes, and schema",
        },
      ],
      tradeOffsAndV2:
        "Process-based sandboxing requires diligent resource throttling and IPC cleanup on long-running preview servers. For v2, migrating to isolated WebAssembly/V8 isolate runtimes for client components will reduce host memory footprints by an additional ~35% while keeping preview launch times instantaneous.",
    },
    image: `${BASE_PATH}/images/projects/shipshape.png`,
    links: [
      { label: "Live Demo", kind: "demo", href: "https://shipshape.vaibhavdev.online/" },
      { label: "Case Study", kind: "case-study", href: "/projects/shipshape" },
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Shipshape" },
    ],
  },
  {
    slug: "fellow",
    name: "Fellow",
    tagline: "Multi-tenant workspace with amortized O(1) task reordering",
    year: "2026",
    category: "Distributed Architecture",
    metricsHighlight: "Amortized O(1) Reordering",
    architecture:
      "Multi-tenant PostgreSQL schema with Org-Scoped RBAC + Fractional Floating-Point Indexing",
    description:
      "Organization-scoped collaborative Kanban boards with single-source-of-truth tRPC contracts and zero row rewrite cascades.",
    longDescription:
      "Fellow is a multi-tenant project management platform engineered for strict tenant isolation and high-frequency board manipulation. Every database entity enforces organization scoping via compound indexes and query-level middleware. Rather than using naive integer ordering (which forces O(N) database UPDATE cascades whenever a card moves), Fellow implements fractional floating-point indexing with an amortized O(1) rebalancing threshold. The frontend and backend share single-source-of-truth TypeScript definitions via tRPC and Drizzle ORM.",
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
      "Fractional floating-point reordering achieving single-row writes per move with background precision rebalancing",
      "End-to-end type-safe tRPC procedure contracts eliminating client-server schema drift",
    ],
    demoUrl: "https://github.com/vbhvx/Fellow",
    demoCredentials: {
      role: "Guest Demo Org",
      email: "demo@fellow.workspace",
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
        "Float64 precision runs out after ~50 insertions between identical adjacent neighbors. Fellow handles this with an amortized rebalance step, but for v2, migrating to variable-length string keys (LexoRank) will provide mathematical infinite density without rebalancing pauses.",
    },
    image: `${BASE_PATH}/images/projects/fellow.png`,
    links: [
      { label: "Live Demo", kind: "demo", href: "https://github.com/vbhvx/Fellow" },
      { label: "Case Study", kind: "case-study", href: "/projects/fellow" },
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Fellow" },
    ],
  },
  {
    slug: "memora",
    name: "Memora",
    tagline: "Markdown workspace with debounced persistence & edge OG cards",
    year: "2026",
    category: "Full-Stack System",
    metricsHighlight: "1.5s Debounce · Sub-50ms Sync",
    architecture:
      "Split-pane synchronized editor + 1.5s debounced persistence pipeline with optimistic UI & edge metadata rendering",
    description:
      "Technical writing workspace featuring split-pane synchronized Markdown editing, 1.5s debounced persistence, public document sharing, and edge OpenGraph cards.",
    longDescription:
      "Memora is a technical writing workspace engineered for zero data loss and sub-50ms editor synchronization. By coupling a split-pane synchronized Markdown preview with a 1.5s debounced background persistence pipeline, it eliminates write amplification while preserving user state across network interruptions. Features AI-powered document titling via Gemini, cryptographic guest share tokens with instant revocation, and edge-rendered OpenGraph metadata cards for social distribution.",
    technologies: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Gemini AI",
      "Tailwind CSS",
      "Zod",
    ],
    outcomes: [
      "Debounced autosave pipeline eliminating ~92% of redundant database write IOPS under active typing",
      "Cryptographic guest share links with instant revocation and edge-rendered OpenGraph previews",
    ],
    demoUrl: "https://github.com/vbhvx/Memora",
    demoCredentials: {
      note: "Public document sharing with cryptographic guest tokens and live preview",
    },
    caseStudy: {
      problem:
        "Standard web markdown editors either spam the database with unthrottled writes on every keystroke causing API rate limits and connection pool exhaustion, or fail to persist drafts when users navigate away before manual saves.",
      constraints: [
        "Zero unpersisted document loss across rapid typing, page navigation, or network drops.",
        "Sub-50ms keystroke-to-preview synchronization without split-pane layout shifts or cursor jumping.",
        "Cryptographically secure guest document sharing with zero privilege escalation into private workspaces.",
        "Edge-rendered dynamic OpenGraph social cards with sub-100ms response times.",
      ],
      architectureFlow: [
        {
          step: "1. Keystroke & Split-Pane Sync",
          detail: "Editor captures Markdown inputs and updates AST preview DOM synchronously with zero cursor disruption.",
        },
        {
          step: "2. 1.5s Debounced Persistence",
          detail: "Timer resets on every keystroke; atomic PATCH commits draft state to PostgreSQL only after a typing pause.",
        },
        {
          step: "3. AI Metadata & Auto-Titling",
          detail: "Gemini AI evaluates document content asynchronously to suggest contextual titles and executive summaries.",
        },
        {
          step: "4. Cryptographic Guest Sharing",
          detail: "Generates hashed access tokens allowing view-only guest access without exposing user accounts.",
        },
      ],
      decisions: [
        {
          title: "1.5s Debounced Background Persistence vs Keystroke Autosave",
          rationale:
            "Debouncing writes to a 1.5-second idle window reduces database write IOPS by over 90% while ensuring zero loss of authored content.",
          rejected:
            "Writing to the database on every keystroke, which exhausts connection pools and causes high write amplification under fast typing.",
        },
        {
          title: "Hashed Cryptographic Tokens vs Public Account Slugs",
          rationale:
            "Storing SHA-256 hashes of random share tokens ensures guest access can be revoked instantly without exposing internal database IDs or private notes.",
          rejected:
            "Exposing predictable database sequential IDs in share URLs, which introduces enumeration security vulnerabilities.",
        },
        {
          title: "Edge Cached OpenGraph Cards vs Dynamic SSR Metadata",
          rationale:
            "Edge-rendering dynamic OpenGraph images delivers instant social media preview cards without invoking cold database queries.",
          rejected:
            "Querying PostgreSQL on every crawler bot hit, which wastes server resources during link sharing spikes.",
        },
      ],
      benchmarks: [
        {
          metric: "Autosave DB Write Reduction",
          before: "1 write / keystroke",
          after: "1 write / 1.5s idle (~92% reduction)",
          notes: "Measured during continuous 60 WPM authoring",
        },
        {
          metric: "Keystroke-to-Preview Latency",
          after: "< 16ms (60 FPS)",
          notes: "Zero input latency or split-pane render lag",
        },
        {
          metric: "Share Token Auth Overhead",
          after: "< 5ms",
          notes: "SHA-256 token verification against indexed hash",
        },
      ],
      tradeOffsAndV2:
        "Current debounced persistence operates on full document payloads. For v2, migrating to CRDT-based operational transforms (Yjs) will enable real-time multi-user collaborative editing and character-level delta sync.",
    },
    image: `${BASE_PATH}/images/projects/memora.png`,
    links: [
      { label: "Live Demo", kind: "demo", href: "https://github.com/vbhvx/Memora" },
      { label: "Case Study", kind: "case-study", href: "/projects/memora" },
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Memora" },
    ],
  },
] as const;

export const otherProjects: readonly OtherProject[] = [
  // --- SELECTED SPECIALIZED WORK (PROVE RANGE) ---
  {
    slug: "sortwise",
    name: "Sortwise",
    year: "2026",
    tier: 2,
    tagline: "AI customer triage & duplicate detection",
    category: "AI Agents",
    result: "Celery async triage in 340ms · pgvector cosine similarity deduplication",
    description:
      "AI-driven incident triage platform built with FastAPI, Celery background workers, and LangGraph for automated root-cause extraction and pgvector duplicate detection.",
    longDescription:
      "Sortwise automates customer incident ingestion and categorization for manufacturing and enterprise operations. Built on FastAPI, CPU-intensive vector similarity comparisons and AI evaluations are offloaded to Celery background workers over Redis. A LangGraph agent workflow extracts root causes, queries pgvector for duplicate reports within a 90-day window, and formats standard CAPA resolution recommendations.",
    technologies: ["FastAPI", "LangGraph", "pgvector", "Celery", "PostgreSQL", "Redis", "Docker"],
    image: `${BASE_PATH}/images/projects/sortwise.png`,
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Sortwise" },
    ],
  },
  {
    slug: "latch",
    name: "Latch",
    year: "2026",
    tier: 2,
    tagline: "Authentication engine built with zero ORMs",
    category: "Backend",
    result: "Sub-15ms login verification · native pg connection pooling · bcrypt cost 12",
    description:
      "Production-ready authentication system built using raw parameterized SQL on PostgreSQL with connection pooling, JWT cookies, and strict RBAC authorization.",
    longDescription:
      "Latch is a systems-level exercise in understanding the database mechanics hidden behind modern ORMs. All queries use parameterized raw SQL via the native pg driver with tuned connection pooling. Features httpOnly JWT session handling, refresh token rotation, bcrypt password hashing with salt cost tuning, role-based access control middleware, and automated schema bootstrapping with Swagger documentation.",
    technologies: ["Node.js", "PostgreSQL (Raw SQL)", "JWT & RBAC", "bcrypt", "Zod", "Swagger"],
    image: `${BASE_PATH}/images/projects/latch.png`,
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Latch" },
    ],
  },
  {
    slug: "gatecheck",
    name: "Gatecheck",
    year: "2026",
    tier: 2,
    tagline: "Automated QA & release validation for Real Estate CRM",
    category: "Testing / QA",
    result: "100+ assertions · Cypress POM E2E · Newman API regression · CI verified",
    description:
      "Comprehensive QA harness with Cypress E2E tests (Page Object Model), Postman Newman API regression collections, and automated GitHub Actions CI.",
    longDescription:
      "Gatecheck engineers automated test and validation infrastructure for enterprise real estate CRM workflows. Implements Page Object Model patterns in Cypress for maintainable E2E testing, Postman API collections executed headless via Newman CLI in GitHub Actions pipelines, and automated WCAG accessibility scans using cypress-axe.",
    technologies: ["Cypress", "Postman / Newman", "GitHub Actions", "Python", "cypress-axe"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Gatecheck" },
    ],
  },

  // --- ARCHIVE SYSTEMS (PROVE VOLUME & BREADTH) ---
  {
    slug: "vibeperfume",
    name: "VibePerfume",
    year: "2026",
    tier: 3,
    tagline: "Haute Parfumerie E-Commerce Experience & Scent Profiler",
    category: "Full-Stack",
    result: "Haute perfumery storefront with 3-tier note preview pyramid and scent quiz",
    description:
      "Luxury fragrance storefront engineered around a zero-risk 'Test First' discovery model with interactive 3-tier note previews and algorithmic matching quiz.",
    longDescription:
      "VibePerfume is a luxury fragrance storefront engineered around a zero-risk 'Test First' discovery model. Features interactive 3-tier pyramid note previews, synchronous variant price-per-ml calculations, an interactive olfactory matching quiz, review distributions, and full client-side cart and wishlist state management.",
    technologies: ["React", "TypeScript", "Vite", "CSS3", "Vitest"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/VibePerfume" },
    ],
  },
  {
    slug: "stockroom",
    name: "Stockroom",
    year: "2026",
    tier: 3,
    tagline: "E-commerce operations & inventory control platform",
    category: "Full-Stack",
    result: "Multi-location inventory tracking, atomic reservations & audit logging",
    description:
      "Full-stack e-commerce operational core featuring centralized product catalogs, multi-location inventory tracking, order reservation workflows, and auditable staff permissions.",
    longDescription:
      "Stockroom is a full-stack e-commerce operations platform engineered for inventory accuracy and traceable fulfillment. Replaces brittle spreadsheets with state-validated order lifecycles, atomic stock reservations, payment reconciliation logs, and role-based staff permissions backed by PostgreSQL.",
    technologies: ["Next.js (App Router)", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Stockroom" },
    ],
  },
  {
    slug: "stride",
    name: "Stride",
    year: "2026",
    tier: 3,
    tagline: "Cross-platform performance & promotion engine",
    category: "Full-Stack",
    result: "Promotion Readiness Score evaluator against historical engineering rubrics",
    description:
      "Employee growth and promotion readiness platform featuring a modular NestJS backend API, PostgreSQL with Prisma ORM, and automated promotion score evaluation.",
    longDescription:
      "Stride tracks engineer career progression against transparent organizational milestones. Implemented with a modular NestJS architecture, PostgreSQL database, and automated Promotion Readiness Score (PRS) algorithmic evaluator. Features dual role-based interfaces for individual contributors and engineering managers.",
    technologies: ["NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Docker", "JWT Auth"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Stride" },
    ],
  },
  {
    slug: "trim",
    name: "Trim",
    year: "2026",
    tier: 3,
    tagline: "Deterministic SaaS audit engine with 3-tier LLM fallback",
    category: "Full-Stack",
    result: "15 deterministic rules · 99.8% report delivery across synthetic LLM outages",
    description:
      "Algorithmic subscription cost analysis that uncovers duplicate software licenses and underutilized AI seats without hallucinations.",
    longDescription:
      "Trim evaluates team tool expenditures to uncover duplicate licenses, underutilized AI subscriptions, and tier mismatches. Rather than relying on unreliable pure-LLM hallucinations for financial numbers, Trim utilizes a deterministic algorithmic engine to compute exact cost leaks and generate 12-15 verified recommendations. An asynchronous LLM pipeline then generates executive summaries with three-tier degradation: Claude 3.5 Sonnet → OpenAI GPT-4o-mini → structured fallback template.",
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Supabase",
      "Claude API",
      "OpenAI API",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    image: `${BASE_PATH}/images/projects/trim.png`,
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Trim" },
    ],
  },
  {
    slug: "teamly",
    name: "Teamly",
    tier: 3,
    tagline: "Versioned REST API with RBAC & rate limiting",
    category: "Backend",
    result: "REST API with sliding-window rate limiting, JWT RBAC & Swagger specs",
    description:
      "Production-grade Express.js REST API with sliding-window IP rate limiting, JWT authentication, role-based authorization, and interactive OpenAPI Swagger documentation.",
    longDescription:
      "Teamly is an Express.js backend engineered with production hygiene: token expiration policies, sliding-window IP rate limiting, bcrypt hashing, error normalization, and interactive Swagger documentation paired with automated integration tests.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Swagger", "Zod"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Teamly" },
    ],
  },
  {
    slug: "learningdashboard",
    name: "LearningDashboard",
    tier: 3,
    tagline: "Course progress & student telemetry dashboard",
    category: "Full-Stack",
    result: "Bento grid telemetry with Supabase PostgreSQL persistence & Framer Motion",
    description:
      "Student learning analytics dashboard with Bento grid layout, Supabase PostgreSQL data persistence, and fluid Framer Motion interactions.",
    longDescription:
      "Interactive learning telemetry dashboard built with Next.js Server Components and Supabase. Visualizes syllabus completion, active study streaks, and quiz benchmarks within a modular technical Bento grid.",
    technologies: ["Next.js (App Router)", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    image: `${BASE_PATH}/images/projects/learningdashboard.png`,
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/LearningDashboard" },
    ],
  },
] as const;

export const flagshipProjects = featuredProjects;
export const selectedProjects = otherProjects.filter((p) => p.tier === 2);
export const archiveProjects = otherProjects.filter((p) => p.tier === 3);

export const allProjects = [...featuredProjects, ...otherProjects];

export function getProjectBySlug(slug: string) {
  return allProjects.find((p) => p.slug === slug) ?? null;
}

export function getAllProjectSlugs() {
  return allProjects.map((p) => p.slug);
}
