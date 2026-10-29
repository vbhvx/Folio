import { BASE_PATH } from "@/data/site";
import type { FeaturedProject, OtherProject } from "@/data/types";

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: "shipshape",
    name: "Shipshape",
    tagline: "End-to-end Next.js application builder with isolated sandboxed execution & self-repair",
    year: "2026",
    category: "AI Agent Platform",
    metricsHighlight: "94.2% Compile Rate · AST Repair",
    architecture:
      "Autonomous 5-Stage Synthesis Pipeline + Jailed Sandbox Runtime with Surgical AST Repair (94.2% compile pass rate vs raw LLM syntax failures)",
    description:
      "Users describe full-stack web applications in plain language and receive typed, multi-file Next.js 16 codebases running inside isolated execution sandboxes with live interactive previews. Built with a bounded 3-attempt AST compiler repair loop, immutable version snapshots with unified line-by-line diffs, and standalone .zip source export with zero vendor lock-in.",
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
      "Architected an autonomous 5-stage pipeline (Intent Planning → Structured Spec → Multi-File Synthesis → Sandboxed Compilation → Unified Diffs) that generates 12–18 cohesive Next.js App Router files per project rather than fragile single-file snippets.",
      "Engineered a bounded 3-attempt automated self-repair loop that intercepts TypeScript compiler diagnostics and syntax errors at runtime, isolating AST failure nodes to synthesize surgical patches before surfacing errors to the user.",
      "Implemented an isolated process sandbox manager with automatic port allocation, process lifecycle isolation, and real-time secret scrubbing ([REDACTED]) before terminal log persistence.",
      "Built an immutable versioning & diff engine that computes line-by-line additions and deletions on every conversational edit, enabling deterministic rollbacks and complete standalone .zip source code export.",
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
    tagline: "Multi-tenant collaborative workspace with amortized O(1) reordering",
    year: "2026",
    category: "Distributed Architecture",
    metricsHighlight: "Amortized O(1) Reordering",
    architecture:
      "Multi-tenant PostgreSQL schema with Org-Scoped RBAC + Amortized O(1) Fractional Indexing",
    description:
      "A collaborative workspace platform providing strict organization-level data isolation via denormalized orgId keys, end-to-end type safety across client-server boundaries with tRPC, and amortized O(1) task reordering on Kanban boards without row rewrite cascades.",
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
      "Designed a multi-tenant PostgreSQL schema with organization-scoped RBAC and denormalized orgId keys for sub-10ms query execution.",
      "Implemented tRPC procedure middleware for end-to-end compile-time contract safety, eliminating client-server schema drift.",
      "Built fractional floating-point indexing for Kanban board drag-and-drop, achieving amortized O(1) updates with automated rebalance triggers.",
      "Engineered secure tenant invitation workflows with expiring cryptographic tokens and atomic role provisioning.",
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
    slug: "trim",
    name: "Trim",
    tagline: "Rules-based SaaS audit engine with resilient 3-tier LLM fallback",
    year: "2026",
    category: "Financial Analytics & SaaS",
    metricsHighlight: "12-15 Rules + 3-Tier Fallback",
    architecture:
      "Deterministic Rules Engine + 3-Tier Resilient Degradation (Claude → OpenAI → Template)",
    description:
      "A financial intelligence tool that audits enterprise software and AI subscription spending. Combines a deterministic rules engine generating 12-15 high-confidence cost recommendations with a three-tier resilient LLM summary pipeline that degrades gracefully on provider downtime.",
    longDescription:
      "Trim evaluates team tool expenditures to uncover duplicate licenses, underutilized AI subscriptions, and tier mismatches. Rather than relying on unreliable pure-LLM hallucinations for financial numbers, Trim utilizes a deterministic algorithmic engine to compute exact cost leaks and generate 12-15 verified recommendations. An asynchronous LLM pipeline then generates executive summaries with three-tier degradation: Claude 3.5 Sonnet → OpenAI GPT-4o-mini → structured fallback template. Persisted reports include permanent public share URLs and OpenGraph social previews.",
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
    demoUrl: "https://github.com/vbhvx/Trim",
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
    image: `${BASE_PATH}/images/projects/trim.png`,
    links: [
      { label: "Live Demo", kind: "demo", href: "https://github.com/vbhvx/Trim" },
      { label: "Case Study", kind: "case-study", href: "/projects/trim" },
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Trim" },
    ],
  },
] as const;

export const otherProjects: readonly OtherProject[] = [
  {
    slug: "sortwise",
    name: "Sortwise",
    tagline: "AI customer triage & duplicate detection",
    category: "AI Agents",
    description:
      "AI-driven complaint triage platform built with FastAPI, Celery background workers, and a LangGraph workflow for risk scoring and pgvector similarity duplicate detection.",
    longDescription:
      "Sortwise automates customer incident ingestion and categorization for manufacturing and enterprise operations. Built on FastAPI, CPU-intensive vector similarity comparisons and AI evaluations are offloaded to Celery background workers over Redis. A LangGraph agent workflow extracts root causes, queries pgvector for duplicate reports within a 90-day window, and formats standard CAPA resolution recommendations.",
    technologies: ["Python", "FastAPI", "Celery", "PostgreSQL (pgvector)", "Redis", "LangGraph", "Docker"],
    image: `${BASE_PATH}/images/projects/sortwise.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Sortwise" },
    ],
  },
  {
    slug: "latch",
    name: "Latch",
    tagline: "Authentication engine built with zero ORMs",
    category: "Backend",
    description:
      "Production-ready authentication system built using raw parameterized SQL on PostgreSQL with connection pooling, JWT cookies, and strict RBAC authorization.",
    longDescription:
      "Latch is a systems-level exercise in understanding the database mechanics hidden behind modern ORMs. All queries use parameterized raw SQL via the native pg driver with tuned connection pooling. Features httpOnly JWT session handling, refresh token rotation, bcrypt password hashing with salt cost tuning, role-based access control middleware, and automated schema bootstrapping with Swagger documentation.",
    technologies: ["Node.js", "Express.js", "PostgreSQL (Raw SQL)", "JWT", "bcrypt", "Zod", "Swagger"],
    image: `${BASE_PATH}/images/projects/latch.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Latch" },
    ],
  },
  {
    slug: "stride",
    name: "Stride",
    tagline: "Cross-platform performance & promotion engine",
    category: "Full-Stack",
    description:
      "Employee growth and promotion readiness platform featuring a NestJS modular backend API, Prisma ORM, and role-based operational dashboards.",
    longDescription:
      "Stride tracks engineer career progression against transparent organizational milestones. Implemented with a modular NestJS architecture, PostgreSQL database, and automated Promotion Readiness Score (PRS) algorithmic evaluator. Features dual role-based interfaces for individual contributors and engineering managers.",
    technologies: ["NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Docker", "JWT Auth"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Stride" },
    ],
  },
  {
    slug: "memora",
    name: "Memora",
    tagline: "Markdown workspace with debounced persistence",
    category: "Full-Stack",
    description:
      "Markdown knowledge workspace with 1.5s debounced persistence, public document sharing, and Gemini API integration for automated summaries.",
    longDescription:
      "Memora provides a distraction-free technical writing environment. Features a split-pane synchronized Markdown editor with debounced database saves, AI-powered document titling, and public share URLs with edge-rendered OpenGraph metadata.",
    technologies: ["Next.js (App Router)", "TypeScript", "Prisma ORM", "PostgreSQL", "Gemini AI"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Memora" },
    ],
  },
  {
    slug: "teamly",
    name: "Teamly",
    tagline: "Versioned REST API with RBAC & rate limiting",
    category: "Backend",
    description:
      "Production-grade Express.js REST API featuring JWT authentication, role-based access control, sliding-window rate limiting, and interactive OpenAPI Swagger docs.",
    longDescription:
      "Teamly is an Express.js backend engineered with production hygiene: token expiration policies, sliding-window IP rate limiting, bcrypt hashing, error normalization, and interactive Swagger documentation paired with automated integration tests.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Swagger", "Zod"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Teamly" },
    ],
  },
  {
    slug: "stockroom",
    name: "Stockroom",
    tagline: "E-commerce operations & inventory control platform",
    category: "Full-Stack",
    description:
      "Secure operational core for e-commerce management. Features centralized product catalogs, multi-location inventory tracking, order reservation workflows, payment reconciliation, and auditable staff access control.",
    longDescription:
      "Stockroom is a full-stack e-commerce operations platform engineered for inventory accuracy and traceable fulfillment. Replaces brittle spreadsheets with state-validated order lifecycles, atomic stock reservations, payment reconciliation logs, and role-based staff permissions backed by PostgreSQL.",
    technologies: ["Next.js (App Router)", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Stockroom" },
    ],
  },
  {
    slug: "gatecheck",
    name: "Gatecheck",
    tagline: "Automated QA & release validation for Real Estate CRM",
    category: "Testing / QA",
    description:
      "Comprehensive QA harness with Cypress E2E tests (Page Object Model), Postman Newman API regression collections, and automated GitHub Actions CI.",
    longDescription:
      "Gatecheck engineers automated test and validation infrastructure for enterprise real estate CRM workflows. Implements Page Object Model patterns in Cypress for maintainable E2E testing, Postman API collections executed headless via Newman CLI in GitHub Actions pipelines, and automated WCAG accessibility scans using cypress-axe.",
    technologies: ["Cypress", "Postman / Newman", "GitHub Actions", "Python", "cypress-axe"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Gatecheck" },
    ],
  },
  {
    slug: "vibeperfume",
    name: "VibePerfume",
    tagline: "Haute Parfumerie E-Commerce Experience & Scent Profiler",
    category: "Full-Stack",
    description:
      "Luxury fragrance storefront engineered around a zero-risk \"Test First\" discovery model. Features interactive 3-tier pyramid note previews, synchronous variant price-per-ml calculations, an interactive olfactory matching quiz, and full cart & wishlist state management.",
    longDescription:
      "VibePerfume is a luxury fragrance storefront engineered around a zero-risk 'Test First' discovery model. Features interactive 3-tier pyramid note previews, synchronous variant price-per-ml calculations, an interactive olfactory matching quiz, review distributions, and full client-side cart and wishlist state management.",
    technologies: ["React", "TypeScript", "Vite", "CSS3", "Vitest"],
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/VibePerfume" },
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
