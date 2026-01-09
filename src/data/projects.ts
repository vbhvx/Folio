import { BASE_PATH } from "@/config/site";
import type { FeaturedProject, OtherProject } from "@/types";

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: "shipshape",
    name: "Shipshape",
    tagline: "Describe an app, get a running Next.js codebase",
    year: "2026",
    category: "AI Agent Platform",
    architecture:
      "Plan → multi-file generation → sandboxed build → bounded repair loop (max 3 attempts) → versioned diffs → clean export",
    description:
      "AI app builder that turns plain-English requirements into a multi-file Next.js project, runs it in an isolated sandbox with live preview, and keeps line-by-line version diffs and a clean .zip export.",
    longDescription:
      "Shipshape treats execution as the source of truth: a project is only marked working once it passes structural validation, TypeScript compilation, and runtime startup in an isolated sandbox. Requirements are turned into an editable, Zod-validated plan before any code is written. Generation progress streams over Server-Sent Events, failed builds go through a bounded repair loop capped at three attempts, and every change is recorded as a version with a structured diff that can be restored. Exports scrub platform secrets and ship with a README and .env.example. It works offline with a built-in engine and uses Gemini or OpenAI when keys are configured.",
    technologies: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Clerk",
      "Zod",
      "Server-Sent Events (SSE)",
      "Docker",
      "Vitest",
    ],
    outcomes: [
      "Bounded 3-attempt repair loop that diagnoses build failures and falls back to the last known-good version",
      "Path-traversal guard and secret scrubbing across sandbox files, logs, and exported archives",
    ],
    demoUrl: "https://shipshape.vaibhavdev.online/",
    demoCredentials: {
      note: "Live app with seeded showcase projects, sandboxed preview, and version history",
    },
    image: `${BASE_PATH}/images/projects/shipshape.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Shipshape" },
    ],
  },
  {
    slug: "fellow",
    name: "Fellow",
    tagline: "Multi-tenant project and task collaboration platform",
    year: "2026",
    category: "Full-Stack System",
    architecture:
      "Org-scoped RBAC + fractional task ordering + optimistic concurrency + transactional outbox feeding SSE",
    description:
      "Multi-tenant Kanban workspace with org-level isolation, five-role RBAC, fractional drag-and-drop ordering, version-checked updates, and live board sync over Server-Sent Events.",
    longDescription:
      "Fellow enforces organization boundaries at both the application and query level, with Owner, Admin, Member, Viewer, and Guest roles plus organization, private, and guest-accessible project visibility. Tasks are ordered with fractional indexing and the column is rebalanced automatically once gaps get too small. Each task carries a version counter, so stale concurrent edits are rejected with 409 Conflict. Every mutation writes its audit entry and a durable outbox event in the same PostgreSQL transaction, and a background worker publishes those events to authorized SSE subscribers.",
    technologies: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "JWT (jose)",
      "Server-Sent Events (SSE)",
      "OpenAPI 3.0",
      "Vitest",
    ],
    outcomes: [
      "Transactional outbox so live updates are committed atomically with the change they describe",
      "Dedicated security and concurrency suites covering cross-tenant reads, ID tampering, and 409 conflicts",
    ],
    image: `${BASE_PATH}/images/projects/fellow.png`,
    links: [
      { label: "GitHub", kind: "source", href: "https://github.com/vbhvx/Fellow" },
    ],
  },
  {
    slug: "memora",
    name: "Memora",
    tagline: "AI-assisted notes that turn into reviewed tasks",
    year: "2026",
    category: "Full-Stack System",
    architecture:
      "Tiptap editor + version-checked autosave + PostgreSQL full-text search + provider-agnostic AI adapter",
    description:
      "Notes workspace with rich-text editing, debounced autosave with conflict detection, PostgreSQL full-text search, AI title, summary, and action-item suggestions you approve, and hashed guest share links.",
    longDescription:
      "Memora connects capturing information with acting on it. Notes autosave after a 750ms pause and use optimistic concurrency, so a stale save returns a conflict instead of silently overwriting. Search runs on a PostgreSQL GIN index with ts_rank_cd ranking and highlighted excerpts. AI suggestions are tied to a specific note version and never change a note without approval; the adapter runs offline by default and supports Gemini or OpenAI. Share links use 256-bit tokens stored only as SHA-256 hashes, with view, comment, or edit permissions, expiry, and instant revocation.",
    technologies: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "Tiptap",
      "PostgreSQL",
      "Drizzle ORM",
      "Gemini API",
      "Zod",
      "Vitest",
      "Playwright",
    ],
    outcomes: [
      "Native PostgreSQL full-text search with relevance ranking and highlighted excerpts, scoped per user",
      "Guest sharing with hashed tokens, expiry, and immediate revocation (403 on revoked, 410 on expired)",
    ],
    image: `${BASE_PATH}/images/projects/memora.png`,
    links: [
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
    tagline: "Complaint management and quality intelligence",
    category: "AI Agents",
    result: "Auditable complaint lifecycle · 5-factor risk triage · duplicate signals · CAPA traceability",
    description:
      "Quality platform for regulated manufacturers that takes complaints from intake through risk triage, duplicate review, root-cause investigation, CAPA, and signed closure, with an audit trail at every step.",
    longDescription:
      "Sortwise turns unstructured customer complaints into auditable quality workflows for medical-device and pharmaceutical teams. Original records are preserved with a SHA-256 hash, extracted fields cite their evidence, and a weighted 5-factor risk model assigns review SLAs. Duplicate detection matches exact identifiers first and symptom overlap second, and never deletes records. A server-side state machine enforces segregation of duties so only quality approvers can close cases, and complaints that need CAPA stay open until it is verified effective.",
    technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma ORM", "JWT & RBAC", "PapaParse", "Vitest"],
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
    tagline: "Security-first backend on raw PostgreSQL",
    category: "Backend",
    result: "Parameterized SQL only · Argon2id · RBAC · optimistic locking · row-level security",
    description:
      "REST API foundation built directly on PostgreSQL with parameterized SQL, Argon2id password hashing, server-managed sessions, centralized RBAC, optimistic concurrency, and row-level security.",
    longDescription:
      "Latch shows how to build a backend without an ORM hiding the SQL. Every query is parameterized through pg.Pool, multi-step writes run in transactions with mandatory audit entries, and task updates check a version number to prevent lost updates. Sessions are stored as SHA-256 hashes and work over Bearer tokens or HttpOnly cookies. PostgreSQL row-level security adds a second isolation layer, and Pino logging redacts secrets and authorization headers.",
    technologies: ["Fastify 5", "TypeScript", "PostgreSQL (Raw SQL)", "Argon2id", "Zod", "OpenAPI / Swagger", "Vitest"],
    image: `${BASE_PATH}/images/projects/latch.png`,
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Latch" },
    ],
  },
  {
    slug: "trim",
    name: "Trim",
    year: "2026",
    tier: 2,
    tagline: "SaaS and AI spend intelligence",
    category: "Full-Stack",
    result: "Decimal-exact cost engine · deterministic rules · savings verified before they are claimed",
    description:
      "Spend platform that imports subscriptions, invoices, and usage, normalizes them into monthly and annual run rates, flags unused seats, duplicates, and price changes, and tracks savings from proposal to verified.",
    longDescription:
      "Trim consolidates SaaS subscriptions, licenses, vendor invoices, and AI API usage into one normalized view. All money is stored as DECIMAL and computed with Decimal.js, so there is no floating-point drift. A deterministic rules engine finds unassigned seats, duplicate tools, renewals, and invoice discrepancies, respects contractual seat minimums, and states the assumptions behind every estimate. Recommendations move through New → Approved → Implemented → Verified, so projected savings are never reported as realized. Access is split across six organization roles.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "Decimal.js", "Zod", "PapaParse"],
    image: `${BASE_PATH}/images/projects/trim.png`,
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Trim" },
    ],
  },
  {
    slug: "overlook",
    name: "OverLook",
    year: "2026",
    tier: 2,
    tagline: "Public signal intelligence on one map",
    category: "Data & Analytics",
    result: "7 signal types · per-source provenance and freshness · isolated provider failures",
    description:
      "Geospatial workspace that brings aircraft, ships, satellites, earthquakes, weather, public cameras, and infrastructure onto one map, with source, freshness, and limitations shown for every signal.",
    longDescription:
      "OverLook normalizes feeds from USGS, Open-Meteo, OpenSky, AIS, Copernicus, state DOT cameras, and OpenStreetMap into a versioned schema in WGS84 and UTC. It separates observation, publication, and ingestion time, labels live data versus forecasts and demo fixtures, and keeps each provider isolated so one rate-limited API does not take down the workspace. Signals are correlated with explicit spatial and time-window rules, and the UI never presents proximity as causation.",
    technologies: ["FastAPI", "Python", "SQLAlchemy", "PostGIS", "React", "TypeScript", "MapLibre GL", "pytest"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/OverLook" },
    ],
  },

  // --- ARCHIVE SYSTEMS (PROVE VOLUME & BREADTH) ---
  {
    slug: "windward",
    name: "Windward",
    year: "2026",
    tier: 3,
    tagline: "UK wind forecast accuracy audit",
    category: "Data & Analytics",
    result: "Leak-free forecast replay at the day-ahead cutoff · MAE, RMSE and bias against settlement data",
    description:
      "Decision-support tool that replays which national wind forecast was actually available before the day-ahead auction deadline and benchmarks it against real Elexon generation data.",
    longDescription:
      "Windward helps UK electricity suppliers judge forecast risk. It pulls forecast vintages and actual outturns from the Elexon BMRS API, selects only the forecast published before each decision cutoff so later data never leaks into the replay, and reports MAE, RMSE, bias, and data completeness with source timestamps. Results are explored in interactive charts.",
    technologies: ["FastAPI", "Python", "pandas", "Pydantic", "React 19", "TypeScript", "Vite", "Recharts"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/UK-Wind-Forecast" },
    ],
  },
  {
    slug: "penny",
    name: "Penny",
    year: "2026",
    tier: 3,
    tagline: "Personal expense intelligence",
    category: "Fintech",
    result: "CSV-first imports · SHA-256 file and row deduplication · 30/60/90-day cash-flow forecasts",
    description:
      "Personal finance app that imports statements across accounts and currencies, deduplicates them with content hashes, categorizes spending, detects recurring charges, and forecasts cash flow.",
    longDescription:
      "Penny treats statement imports as a first-class workflow. Re-uploaded files are caught by a file hash and repeated rows by a content hash, so re-importing never double-counts. Transactions go through a 3-stage categorization engine, recurring charges are detected deterministically, and budgets and 30/60/90-day forecasts are computed with decimal arithmetic. A grounded assistant answers questions from the user's own data.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Decimal.js", "Recharts", "PapaParse"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Penny" },
    ],
  },
  {
    slug: "bloom",
    name: "Bloom",
    year: "2026",
    tier: 3,
    tagline: "Goal-first investing for India",
    category: "Fintech",
    result: "Live AMFI NAV data · 30-digit decimal goal math · SEBI-aware feature gates",
    description:
      "Investing platform for Indian retail investors that starts from life goals, calculates the monthly SIP each goal needs, and uses live AMFI mutual fund data with clear simulated-versus-live labels.",
    longDescription:
      "Bloom reverses the usual trading-app flow: users define goals such as an emergency fund, a home down payment, or retirement, and the platform works out inflation-adjusted targets and required SIPs with 30-digit Decimal.js precision. Market data comes through provider adapters, including the official AMFI daily NAV feed, and simulated data is always labeled. Personalized securities advice stays disabled behind a server-side gate that follows SEBI regulations.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Decimal.js", "Recharts", "Zod"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Bloom" },
    ],
  },
  {
    slug: "clearvest",
    name: "Clearvest",
    year: "2026",
    tier: 3,
    tagline: "Explainable goal-based financial planning",
    category: "Fintech",
    result: "Formulas shown for every calculation · consent management · fail-closed regulatory gates",
    description:
      "Goal-driven planning platform for India that shows the formula, inflation, fees, and assumptions behind every projection, with consent controls and regulated features that stay off until approved.",
    longDescription:
      "Clearvest focuses on explaining before recommending. Goal planning, scenarios, and portfolio views run on a deterministic Decimal.js engine that exposes its formulas and assumptions. The assistant explains concepts with citations instead of doing the math. Regulated capabilities such as personalized advice and live broker orders are enforced server-side and fail closed, orders run only in a sandbox with explicit previews and confirmations, and consent follows India's DPDP Act.",
    technologies: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma ORM", "Decimal.js", "Zod", "Vitest"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Clearvest" },
    ],
  },
  {
    slug: "stockroom",
    name: "Stockroom",
    year: "2026",
    tier: 3,
    tagline: "E-commerce operations and inventory control",
    category: "Full-Stack",
    result: "Append-only stock ledger · row-locked reservations against overselling · 9 staff roles",
    description:
      "Internal operations platform for online stores with an append-only inventory ledger, row-locked stock reservations, separate order, payment, and fulfillment state machines, and reconciliation reports.",
    longDescription:
      "Stockroom replaces operational spreadsheets with a traceable core. Inventory changes are only ever recorded as ledger movements, never direct overwrites, and available stock is always on-hand minus reserved. Checkout reservations use SELECT ... FOR UPDATE so simultaneous orders cannot oversell. Order, payment, and fulfillment each have their own validated state machine, data is scoped by organization and store, and an outbox drives events and reconciliation.",
    technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Drizzle ORM", "JWT (jose)", "Zod", "Vitest"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Stockroom" },
    ],
  },
  {
    slug: "teamly",
    name: "Teamly",
    year: "2026",
    tier: 3,
    tagline: "Secure team task management",
    category: "Backend",
    result: "Workspace isolation · 4-role RBAC · hashed session tokens · immutable audit trail",
    description:
      "Team task platform built around its security boundaries: workspace isolation, four-role RBAC, SHA-256 hashed session tokens, rate-limited auth, server-validated assignments, and an audit trail.",
    longDescription:
      "Teamly is designed so every request is permitted, every input is validated, and every response follows a strict contract. Membership in one workspace grants nothing in another, and cross-workspace lookups return 404 so private data cannot be discovered. Owner, Admin, Member, and Viewer roles are enforced centrally, tasks can only be assigned to active members of the same workspace, and role changes, assignments, and deletions are recorded in an immutable audit log. The API is documented with OpenAPI and Swagger UI.",
    technologies: ["Next.js 15", "TypeScript", "PostgreSQL", "Drizzle ORM", "Zod", "OpenAPI / Swagger", "Vitest"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Teamly" },
    ],
  },
  {
    slug: "stride",
    name: "Stride",
    year: "2026",
    tier: 3,
    tagline: "Evidence-based employee growth and coaching",
    category: "Full-Stack",
    result: "Goals, evidence, coaching, and reviews in one flow · AI suggests, humans decide",
    description:
      "Career growth platform that links role expectations, goals, work evidence, coaching, reviews, and development plans, with AI that summarizes evidence but never decides promotions.",
    longDescription:
      "Stride gives employees and managers one evidence-first workspace from role expectations to career growth. It avoids single performance scores and employee surveillance, and treats missing evidence as a gap to fill rather than poor performance. A replaceable AI adapter summarizes linked evidence with mandatory human review and prompt-injection safeguards. Role frameworks are versioned, every action goes to an audit log, and employees can export their data.",
    technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma ORM", "Zod", "Docker", "Vitest"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/Stride" },
    ],
  },
  {
    slug: "vibeperfume",
    name: "VibePerfume",
    year: "2026",
    tier: 3,
    tagline: "Fragrance storefront with guided scent discovery",
    category: "Full-Stack",
    result: "Explainable scent-match quiz · server-validated checkout · admin inventory portal",
    description:
      "Fragrance e-commerce site with a 6-step scent finder that explains each match, note pyramids and price-per-ml on product pages, server-revalidated cart and checkout, order tracking, and a staff admin portal.",
    longDescription:
      "VibePerfume is a full-stack storefront built around trying before buying. A weighted, deterministic scoring model ranks fragrances against the shopper's quiz answers and explains why each one matched. Product pages show top, heart, and base notes, and up to four fragrances can be compared side by side. Checkout re-checks prices and stock on the server, creates orders idempotently, and an admin portal handles catalog, inventory adjustments, and order status.",
    technologies: ["React", "Vite", "React Router", "Node.js", "Express", "MongoDB", "Vitest"],
    links: [
      { label: "Source", kind: "source", href: "https://github.com/vbhvx/VibePerfume" },
    ],
  },
] as const;

export const flagshipProjects = featuredProjects;
export const selectedProjects = otherProjects.filter((p) => p.tier === 2);
export const archiveProjects = otherProjects.filter((p) => p.tier === 3);

// Owner-maintained ranking. The first four appear on the homepage; the projects page follows the same order.
export const projectOrder = [
  "shipshape",
  "fellow",
  "latch",
  "overlook",
  "memora",
  "trim",
  "stockroom",
  "windward",
  "sortwise",
  "penny",
  "bloom",
  "teamly",
  "stride",
] as const;

// Kept in the data but not shown anywhere on the site.
export const hiddenProjectSlugs = ["clearvest", "vibeperfume"] as const;

const rank = (slug: string) => {
  const index = projectOrder.findIndex((s) => s === slug);
  return index === -1 ? projectOrder.length : index;
};

export const allProjects = [...featuredProjects, ...otherProjects]
  .filter((p) => !hiddenProjectSlugs.some((s) => s === p.slug))
  .sort((a, b) => rank(a.slug) - rank(b.slug));

export const pinnedProjectSlugs = projectOrder.slice(0, 4);

export function getProjectBySlug(slug: string) {
  return allProjects.find((p) => p.slug === slug) ?? null;
}

export function getAllProjectSlugs() {
  return allProjects.map((p) => p.slug);
}
