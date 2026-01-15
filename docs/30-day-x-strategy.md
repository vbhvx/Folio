# 30-Day X (Twitter) Content Calendar — @vaibhxdev

**Author:** Vaibhav Saini | **Start Date:** November 7, 2026 | **End Date:** December 6, 2026

> [!IMPORTANT]
> Every post below is copy-paste ready. Video scripts include scene breakdowns with timings, visuals, and voiceover. Comment strategies are actionable — not generic "engage more" advice.

---

## Pre-Launch Checklist (Do Before Day 1)

- [ ] Update X bio: `3rd-year CSE student. Building Shipshape, Fellow, Memora. 10+ merged open-source PRs. Open to internships. vaibhavdev.online`
- [ ] Set profile link to `https://vaibhavdev.online`
- [ ] Header image: clean screenshot of Shipshape generating a Next.js app (terminal + preview side by side)
- [ ] Pin the Day 1 post immediately after publishing
- [ ] Follow 30-50 accounts in the #buildinpublic, Next.js, TypeScript, and indie dev spaces before posting

---

## Week 1 — Establish Presence (Nov 7–13)

---

### Day 1 — November 7 (Saturday) — Profile Launch + Open-to-Work

**Type:** Post (pinned)
**Goal:** Establish who Vaibhav is, what he builds, and that he's seeking internships. This post stays pinned for the full 30 days.

**Post (copy-paste ready):**
```
I'm Vaibhav — 3rd-year CSE student in Delhi, building full-stack tools since April 2025.

What I've shipped so far:

• Shipshape — AI app builder. Prompt → multi-file Next.js app with 94.2% first-run compile rate
• Fellow — Kanban workspace with O(1) fractional-indexing reorder
• Sortwise — AI customer triage. 340ms classification via LangGraph + pgvector
• Memora — Markdown writing workspace with split-pane sync editing
• Latch — Zero-ORM auth engine. Sub-15ms login verification
• Gatecheck — Automated QA harness. 100+ assertions, CI-integrated

10+ merged open-source PRs. No internship yet — actively looking.

Stack: TypeScript, Python, Next.js, React 19, PostgreSQL, FastAPI, Docker, tRPC, Prisma, Drizzle

Portfolio: vaibhavdev.online
GitHub: github.com/vbhvx

If you're hiring interns who ship, my DMs are open.
```

**Comment Strategy:** Find 5 tweets from developers or founders talking about hiring, internships, or building in public. Leave thoughtful comments — not "great post!" but specific technical observations. Example: if someone shares a drag-and-drop implementation, mention fractional indexing tradeoffs.

---

### Day 2 — November 8 (Sunday) — Shipshape Demo Video + Post

**Type:** Video + Post
**Goal:** Show Shipshape in action. The 94.2% compile rate and ~14s to live preview are the hooks.

**Post (copy-paste ready):**
```
Built an AI app builder that generates full Next.js 16 projects from a prompt.

Not a single file. 12-18 files per project — layouts, components, API routes, Prisma schemas.

The key metric: 94.2% of generated apps compile on the first run.

When they don't, a bounded 3-attempt AST repair loop fixes them automatically.

Median time from prompt to live preview: ~14 seconds.

Stack: Next.js 16, React 19, TypeScript, Prisma, E2B sandboxes, Inngest, Turbopack

Demo below. Code is open source.

github.com/vbhvx/Shipshape
shipshape.vaibhavdev.online
```

**Video Script:**
```
[Duration: 45-55 seconds]
[Resolution: 1080p screen recording + voiceover]

Scene 1 (0-5s):
[VISUAL]: Shipshape landing page, cursor moving to the prompt input
[AUDIO]: "This is Shipshape — type a prompt, get a full Next.js app."

Scene 2 (5-15s):
[VISUAL]: Type a prompt like "Build a personal finance tracker with expense categories and a dashboard." Hit submit. Show the SSE stream of files being generated in real-time.
[AUDIO]: "It generates 12 to 18 files — not just a single component. Layouts, pages, API routes, Prisma schema, the whole project structure."

Scene 3 (15-25s):
[VISUAL]: Show the file tree expanding as files appear. Highlight a few file names.
[AUDIO]: "Each file goes through sandboxed compilation in E2B. If something breaks, an AST repair loop fixes it — up to three attempts, then it stops. No infinite retries."

Scene 4 (25-35s):
[VISUAL]: Show the live preview loading and rendering the generated app.
[AUDIO]: "94.2% of apps compile on the first run. Median time to this live preview: about 14 seconds."

Scene 5 (35-45s):
[VISUAL]: Quick scroll through the generated code — show it's real, readable TypeScript. End on the GitHub repo page.
[AUDIO]: "Everything is open source. Link in the post."

[END CARD]: @vaibhxdev • github.com/vbhvx/Shipshape
```

**Comment Strategy:** Reply to 3-4 AI/LLM dev tool tweets. Share a specific insight like "one thing I learned building an AI code generator — AST-level validation catches errors that string-matching misses entirely."

---

### Day 3 — November 9 (Monday) — Technical Post: AST Repair Loop

**Type:** Post
**Goal:** Demonstrate deep technical thinking. The AST repair loop is a non-obvious design decision worth explaining.

**Post (copy-paste ready):**
```
When I built Shipshape (AI app builder), the naive approach was: generate code → compile → if error, send error back to the LLM → retry.

Problem: the LLM hallucinates harder on retries. Error context grows. Token costs spike. And sometimes it loops forever.

What I did instead:

1. Bounded the retry loop to exactly 3 attempts
2. Parse the generated code into an AST before compilation
3. The repair targets the AST node that failed, not the whole file
4. If 3 attempts fail, surface the error to the user instead of burning tokens

Result: 94.2% first-run compile rate. The remaining 5.8% usually fix on attempt 2. Less than 1% hit the 3-attempt ceiling.

The constraint (3 attempts max) forced better prompt engineering upfront. Constraints > retries.
```

**Comment Strategy:** Find threads about LLM code generation, AI coding tools, or prompt engineering. Share the bounded-retry insight as a comment — it's counterintuitive and will get engagement.

---

### Day 4 — November 10 (Monday) — Sortwise Demo Video + Post

**Type:** Video + Post
**Goal:** Show the AI triage pipeline. The 340ms classification time and pgvector dedup are the hooks.

**Post (copy-paste ready):**
```
Built a customer support triage system that classifies tickets in 340ms and catches duplicates before they create noise.

The pipeline:
• FastAPI receives the ticket
• Celery worker picks it up async
• LangGraph agent classifies priority + category
• pgvector cosine similarity checks for duplicates against existing tickets

If it finds a near-duplicate, it links them instead of creating a new entry.

Stack: FastAPI, LangGraph, pgvector, Celery, PostgreSQL, Redis, Docker

The whole thing runs in Docker Compose. No managed services needed for local dev.

github.com/vbhvx/Sortwise
```

**Video Script:**
```
[Duration: 40-50 seconds]
[Resolution: 1080p screen recording + voiceover]

Scene 1 (0-5s):
[VISUAL]: Sortwise dashboard showing an empty or near-empty ticket queue
[AUDIO]: "Sortwise triages customer tickets with AI. Here's how it works."

Scene 2 (5-15s):
[VISUAL]: Submit a new ticket via the UI or API. Show the Celery worker picking it up in a terminal log.
[AUDIO]: "A ticket comes in. A Celery worker picks it up asynchronously — the API responds immediately, the processing happens in the background."

Scene 3 (15-25s):
[VISUAL]: Show the LangGraph agent processing. Highlight the classification result appearing on the ticket — priority, category.
[AUDIO]: "A LangGraph agent classifies priority and category. Total triage time: 340 milliseconds."

Scene 4 (25-35s):
[VISUAL]: Submit a duplicate ticket. Show the cosine similarity match flagging it.
[AUDIO]: "Now watch what happens when I submit a near-duplicate. pgvector catches it using cosine similarity and links it to the original."

Scene 5 (35-45s):
[VISUAL]: Show the Docker Compose setup — all services running.
[AUDIO]: "The whole stack runs in Docker Compose. FastAPI, PostgreSQL, Redis, Celery — one command to start. Link to the repo below."

[END CARD]: @vaibhxdev • github.com/vbhvx/Sortwise
```

**Comment Strategy:** Engage with tweets about AI agents, LangGraph, or customer support automation. A good comment angle: "async workers + vector search is underrated for triage — most people try to do it synchronously and hit latency walls."

---

### Day 5 — November 11 (Tuesday) — Debugging Story

**Type:** Post
**Goal:** Show vulnerability and real problem-solving. Debugging stories humanize technical accounts.

**Post (copy-paste ready):**
```
Spent 3 hours debugging a race condition in Shipshape's file generation pipeline.

The symptom: occasionally, the live preview would show a blank page even though all files compiled successfully.

The cause: SSE events were arriving out of order. The preview iframe mounted before the entry point file was written to the sandbox.

Files were generated correctly. Compilation passed. The timing was wrong.

The fix was embarrassingly simple — add a "ready" sentinel event that only fires after all files are confirmed written. The preview iframe listens for that event before loading.

3 hours of debugging. 4 lines of code to fix.

Every time I think I understand async, something like this happens.
```

**Comment Strategy:** Look for other debugging stories or "what I learned this week" posts. Share a genuine reaction — debugging stories get the best engagement when people relate to the pain.

---

### Day 6 — November 12 (Wednesday) — Fellow Architecture: Fractional Indexing

**Type:** Post (thread-style, single post with line breaks)
**Goal:** Technical credibility. Fractional indexing is a genuinely interesting optimization that most devs haven't encountered.

**Post (copy-paste ready):**
```
Most Kanban boards reorder cards by updating every card's position in the column.

Drag a card from position 3 to position 1? Update positions for cards 1, 2, and the moved card. That's 3 writes minimum. In a column with 50 cards, a move to the top means updating all 50.

In Fellow, I used fractional indexing instead.

How it works:
• Each card has a string-based position key (like "a0", "a1", "aH")
• To insert between two cards, generate a key between their keys
• One row write. Always. Regardless of column size.

Average writes per drag:
• Traditional: ~14 rows (measured on real boards)
• Fractional indexing: 1 row. Amortized O(1).

The tradeoff: key strings can grow long after many insertions between the same two cards. In practice, with typical Kanban usage, this almost never matters.

Built this into Fellow — a multi-tenant Kanban workspace with end-to-end type-safe tRPC contracts.

github.com/vbhvx/Fellow
```

**Comment Strategy:** Find tweets about database performance, Kanban tools, or drag-and-drop implementations. Fractional indexing is niche enough that explaining it in a reply will stand out.

---

### Day 7 — November 13 (Thursday) — Week 1 Recap Thread

**Type:** Thread (4 tweets)
**Goal:** Reflect on the first week. Build narrative momentum.

**Tweet 1:**
```
Week 1 of building in public — recap.

I've been shipping projects since April 2025 but never shared the process publicly. This week I started.

Here's what I posted and what I learned. 🧵
```

**Tweet 2:**
```
What I shared:

• Shipshape — AI app builder demo (94.2% first-run compile rate)
• Sortwise — AI triage system (340ms classification)
• A deep dive on bounded AST repair loops vs naive LLM retries
• Fractional indexing in Fellow (1 write per drag vs ~14)
• A debugging story about SSE race conditions

All open source: github.com/vbhvx
```

**Tweet 3:**
```
What I noticed:

Technical posts with specific numbers get more engagement than vague updates.

"I built a thing" → low engagement.
"Board query went from 42ms to 8.4ms with a denormalized org_id" → people actually respond.

Specificity is the cheat code.
```

**Tweet 4:**
```
Plan for Week 2:

• Memora demo (split-pane Markdown editor)
• Latch deep dive (zero-ORM auth)
• A thread on my open-source contribution workflow
• More technical breakdowns

3rd-year CSE student, no internship yet, just shipping and learning.

vaibhavdev.online
```

**Comment Strategy:** Quote-tweet or reply to 2-3 "week in review" or "build in public update" posts from other developers. Share genuine observations, not engagement bait.

---

## Week 2 — Deepen Technical Credibility (Nov 14–20)

---

### Day 8 — November 14 (Friday) — Memora: Write Reduction Post

**Type:** Post
**Goal:** Highlight a specific technical decision in Memora — the 1.5s debounced persistence and ~92% write reduction.

**Post (copy-paste ready):**
```
In Memora (my Markdown writing workspace), early versions saved to the database on every keystroke.

For a 500-word document, that's hundreds of writes in a few minutes. The database was doing work that would be thrown away immediately.

Fix: 1.5-second debounced persistence.

Only writes to PostgreSQL after 1.5s of inactivity. Result: ~92% reduction in write operations. The document still feels instant to the user — you never notice the delay.

Simple? Yes. But I shipped the keystroke version first because I was paranoid about data loss. Turns out debouncing + a beforeunload handler covers 99% of cases.

Sometimes the boring optimization is the right one.

github.com/vbhvx/Memora
```

**Comment Strategy:** Engage with posts about database optimization, real-time editors, or writing tools. The debounce insight is universally relatable — every developer has over-engineered persistence at some point.

---

### Day 9 — November 15 (Saturday) — Memora Demo Video + Post

**Type:** Video + Post
**Goal:** Show the split-pane editing experience and AI auto-titling in action.

**Post (copy-paste ready):**
```
Built a technical writing workspace with split-pane synchronized Markdown editing.

Left pane: write Markdown. Right pane: live rendered preview, fully synced.

Features I'm most proud of:
• AI auto-titling via Gemini — writes a title based on your content
• Cryptographic guest share tokens with instant revocation
• Edge-rendered OpenGraph cards for shared documents
• 1.5s debounced persistence (~92% write reduction)

Stack: Next.js, React 19, TypeScript, PostgreSQL, Prisma, Gemini AI

Demo below.

github.com/vbhvx/Memora
```

**Video Script:**
```
[Duration: 40-50 seconds]
[Resolution: 1080p screen recording + voiceover]

Scene 1 (0-5s):
[VISUAL]: Open Memora. Show the clean editor interface — split pane, left Markdown, right preview.
[AUDIO]: "Memora — a Markdown writing workspace with synchronized split-pane editing."

Scene 2 (5-15s):
[VISUAL]: Start typing Markdown in the left pane. Show the right pane updating in real-time. Type some headers, a code block, a list.
[AUDIO]: "Left side: raw Markdown. Right side: live preview. Every change syncs instantly."

Scene 3 (15-25s):
[VISUAL]: Show the AI auto-title feature — click a button or wait for it to generate a title based on content.
[AUDIO]: "Gemini AI auto-generates a title based on what you've written. One less thing to think about."

Scene 4 (25-35s):
[VISUAL]: Generate a share link. Show the share token. Then revoke it — show instant revocation.
[AUDIO]: "Share documents with a cryptographic guest token. Revoke access instantly — the token is invalidated server-side, no expiry waiting."

Scene 5 (35-45s):
[VISUAL]: Open the shared document in a new tab — show the OpenGraph card rendering in a link preview.
[AUDIO]: "Shared documents get edge-rendered OpenGraph cards. Link to the repo below."

[END CARD]: @vaibhxdev • github.com/vbhvx/Memora
```

**Comment Strategy:** Find tweets from writers, note-taking app builders, or Markdown tool developers. Comment with a specific insight about sync editing challenges or debounced persistence.

---

### Day 10 — November 16 (Sunday) — Latch Deep Dive: Zero-ORM Auth

**Type:** Post
**Goal:** Explain why building auth without an ORM was a deliberate choice, not a limitation.

**Post (copy-paste ready):**
```
I built an authentication engine with zero ORM. Raw parameterized SQL only.

Why:

1. Auth queries are simple — SELECT, INSERT, UPDATE. An ORM adds abstraction with zero benefit here.
2. I wanted to understand exactly what hits the database. No magic queries.
3. Connection pooling is native pg, not proxied through an ORM layer.

What Latch does:
• JWT access tokens in HTTP-only cookies
• Refresh token rotation (old token invalidated on use)
• bcrypt cost 12 for password hashing
• RBAC middleware for role-based access
• Zod validation on every input
• Sub-15ms login verification

Is this what I'd use in production at scale? Probably not — I'd reach for an auth service. But building it from scratch taught me more about token security than any tutorial.

github.com/vbhvx/Latch
```

**Comment Strategy:** Engage with auth-related tweets — JWT debates, session vs token discussions, or "roll your own auth" threads. Having actually built it gives you credibility in these conversations.

---

### Day 11 — November 17 (Monday) — Technical Decision Post: tRPC Type Safety

**Type:** Post
**Goal:** Explain a real architectural decision — why end-to-end type safety with tRPC matters in Fellow.

**Post (copy-paste ready):**
```
One decision I made in Fellow (Kanban workspace) that saved me hours: end-to-end type-safe API contracts with tRPC.

Here's what that means in practice:

• Define a Zod schema for input validation on the server
• tRPC infers the TypeScript types from that schema
• The client gets full autocomplete and type checking — zero manual type definitions

Change a field name on the server → TypeScript immediately errors on every client call that uses the old name.

No REST endpoint docs to keep in sync. No "did I spell that field right?" runtime errors. No Postman collections to maintain.

The tradeoff: tRPC couples your client and server. If you need a public API for third parties, REST/GraphQL is better. For an internal full-stack app? tRPC is the fastest way I've found to move without breaking things.

github.com/vbhvx/Fellow
```

**Comment Strategy:** Find tweets about tRPC, TypeScript, or API design. Share a nuanced take — tRPC isn't universally better, and acknowledging tradeoffs builds credibility.

---

### Day 12 — November 18 (Tuesday) — Failure Story: Fellow Query Optimization

**Type:** Post
**Goal:** Show the before/after of the Fellow board query optimization. Real numbers, real problem.

**Post (copy-paste ready):**
```
Fellow's board query was taking 42ms.

Not slow enough to notice on fast connections. Slow enough to feel sluggish on mobile or high-latency networks.

The problem: the query joined across org → workspace → board → columns → cards. Five tables deep. PostgreSQL's query planner was doing a sequential scan on the org table because the cards table had no org_id — it had to traverse the full join path.

The fix: denormalize org_id directly onto the board table.

One redundant column. Query dropped from 42ms to 8.4ms. 5x improvement.

Denormalization feels wrong when you've been taught to normalize everything. But when your access pattern is always "get boards for this org," putting org_id on the board row is the obvious move.

Measure first. Normalize second.
```

**Comment Strategy:** Engage with database optimization posts. The "denormalization feels wrong" angle resonates with developers who've been taught strict normalization in school.

---

### Day 13 — November 19 (Wednesday) — Latch Video + Post

**Type:** Video + Post
**Goal:** Demo Latch's auth flow — registration, login, token rotation, RBAC.

**Post (copy-paste ready):**
```
Built a complete authentication engine from scratch. No ORM, no auth library, no Firebase.

Raw SQL. JWT cookies. Refresh token rotation. RBAC middleware.

Sub-15ms login verification. bcrypt cost 12 hashing.

Why build this when Auth.js or Clerk exist? Because I wanted to understand what happens between "user clicks login" and "server returns a session."

Now I know. Every auth abstraction I use in the future, I'll understand what it's abstracting.

Demo below.

github.com/vbhvx/Latch
```

**Video Script:**
```
[Duration: 45-55 seconds]
[Resolution: 1080p screen recording + voiceover]

Scene 1 (0-5s):
[VISUAL]: Show the Swagger docs for Latch's API endpoints
[AUDIO]: "Latch — a zero-ORM authentication engine. Let me show you the flow."

Scene 2 (5-15s):
[VISUAL]: Register a new user via the API. Show the bcrypt-hashed password in the database.
[AUDIO]: "Register a user. The password is hashed with bcrypt at cost 12 — not stored in plain text. The hash is in the database, nothing else."

Scene 3 (15-25s):
[VISUAL]: Login with the user. Show the JWT being set as an HTTP-only cookie in the browser dev tools. Show the response time — sub-15ms.
[AUDIO]: "Login returns a JWT in an HTTP-only cookie. Not accessible from JavaScript — protected against XSS. Verification takes under 15 milliseconds."

Scene 4 (25-35s):
[VISUAL]: Make an API call with the token. Show the refresh token rotation — old token invalidated, new token issued.
[AUDIO]: "Refresh tokens rotate on every use. The old token is invalidated immediately. If someone steals a refresh token and uses it, the real user's next refresh fails — that's your signal of compromise."

Scene 5 (35-45s):
[VISUAL]: Show an RBAC-protected route. Try to access it without the right role — show the 403. Then access with the correct role.
[AUDIO]: "RBAC middleware checks roles on protected routes. Wrong role? 403. Right role? Through. All validated with Zod."

[END CARD]: @vaibhxdev • github.com/vbhvx/Latch
```

**Comment Strategy:** Jump into auth debates — they're constant on X. Your perspective as someone who built it from scratch is uniquely credible.

---

### Day 14 — November 20 (Thursday) — Week 2 Recap Thread

**Type:** Thread (4 tweets)
**Goal:** Consolidate Week 2 learnings and signal consistency.

**Tweet 1:**
```
Week 2 of building in public. Recap and observations. 🧵
```

**Tweet 2:**
```
What I shared this week:

• Memora demo — split-pane Markdown editor, ~92% write reduction with debounced persistence
• Latch deep dive — zero-ORM auth, sub-15ms verification
• Why tRPC's end-to-end type safety saved me hours in Fellow
• Fellow's 42ms → 8.4ms board query fix (one denormalized column)

All repos: github.com/vbhvx
```

**Tweet 3:**
```
Observation: posts about tradeoffs outperform posts about features.

"I used fractional indexing" → some engagement.
"Fractional indexing trades key length for O(1) writes — here's when that tradeoff breaks" → way more responses.

Developers engage with decisions, not announcements.
```

**Tweet 4:**
```
Week 3 plan:

• My open-source contribution workflow (10+ merged PRs)
• Gatecheck testing deep dive
• Architecture threads on SSE streaming and E2B sandboxes
• More comment engagement

Still looking for internships. If you're building something and need a developer who ships, let's talk.

cal.com/vaibhavdev/intro
```

**Comment Strategy:** Engage with 5+ "build in public" recap posts from others. Leave substantive replies, not just "great work." Reference specific things they mentioned.

---

## Week 3 — Open Source + Testing + Community (Nov 21–27)

---

### Day 15 — November 21 (Friday) — Open-to-Work Soft Reminder

**Type:** Post
**Goal:** Soft reminder that you're available. Don't repeat the Day 1 post — add new context from what you've shared.

**Post (copy-paste ready):**
```
Two weeks of sharing my projects publicly. Quick update on what I'm looking for.

I'm a 3rd-year CSE student looking for my first internship.

What I bring:
• 6 shipped full-stack projects, all open source
• TypeScript + Python. Next.js, FastAPI, PostgreSQL, Docker
• 10+ merged open-source PRs
• I measure things — 94.2% compile rates, 340ms triage times, 5x query improvements

I don't have brand-name experience. I have working code and GitHub commits.

Portfolio: vaibhavdev.online
GitHub: github.com/vbhvx
Book a call: cal.com/vaibhavdev/intro

DMs open.
```

**Comment Strategy:** Find 5 tweets from founders, CTOs, or engineering managers who mention hiring, team building, or internships. Leave value-first comments — share a relevant technical insight, then mention you're looking for opportunities.

---

### Day 16 — November 22 (Saturday) — Open-Source Contribution Post

**Type:** Post
**Goal:** Share the open-source contribution process — how you find issues, approach PRs, and get them merged.

**Post (copy-paste ready):**
```
10+ merged open-source PRs as a 3rd-year student. Here's my approach:

1. Pick repos I actually use. I don't contribute to projects I've never run locally.

2. Start with "good first issue" labels — but read the codebase first. Understand the patterns before touching anything.

3. Keep PRs small. One concern per PR. Reviewers ignore 500-line diffs.

4. Match the existing code style exactly. If they use semicolons, I use semicolons. If they don't, I don't.

5. Write a clear PR description: what changed, why, and how to test it.

6. Respond to review feedback fast. Maintainers are busy. A PR that goes stale gets closed.

None of this is revolutionary. But most first-time contributors skip steps 1 and 2, and it shows.
```

**Comment Strategy:** Find open-source maintainer posts or "how to contribute" threads. Share a specific example from your PRs — what the issue was, what you changed, and what you learned from the review.

---

### Day 17 — November 23 (Sunday) — Gatecheck: Testing Deep Dive

**Type:** Post
**Goal:** Explain the Gatecheck project and why automated QA matters — coming from a student's perspective.

**Post (copy-paste ready):**
```
I built Gatecheck because I kept manually testing the same flows across my projects.

Register → login → create item → edit → delete → logout. Every time. For every project.

Gatecheck automates this:

• Cypress E2E tests using Page Object Model — each page is a class with methods for its actions
• Postman/Newman API regression suites run in CI
• WCAG accessibility scans via cypress-axe — catches a11y issues before they ship
• GitHub Actions CI runs everything on every push

100+ assertions across the suite.

The Page Object Model pattern was the game changer. When the UI changes, I update one class — not 30 test files.

github.com/vbhvx/Gatecheck
```

**Comment Strategy:** Engage with testing-related tweets. Most indie devs and students skip testing — sharing why you don't is a differentiator.

---

### Day 18 — November 24 (Monday) — Architecture Post: E2B Sandboxes in Shipshape

**Type:** Post
**Goal:** Explain how and why Shipshape uses E2B cloud sandboxes for compilation.

**Post (copy-paste ready):**
```
Shipshape generates full Next.js apps from prompts. But where do you compile and run untrusted code?

Not on my server. One malicious prompt and someone's running arbitrary code in my production environment.

Solution: E2B cloud sandboxes.

Each generated project gets its own isolated sandbox:
• Full filesystem — write 12-18 files, install deps, run builds
• Process isolation — if the build crashes, nothing else is affected
• Time-bounded — sandboxes auto-terminate after a timeout
• API-driven — spin up, write files, run commands, get output, tear down

The workflow:
1. LLM generates files
2. Files written to E2B sandbox
3. Turbopack compiles inside the sandbox
4. If compile fails → AST repair → retry (max 3 attempts)
5. If compile succeeds → preview served from the sandbox

This is why I don't worry about prompt injection breaking my server. The worst case is a sandbox that fails and gets cleaned up.

github.com/vbhvx/Shipshape
```

**Comment Strategy:** Engage with tweets about AI code execution, sandboxing, or security. The "where do you run untrusted code?" question is relevant to anyone building AI dev tools.

---

### Day 19 — November 25 (Tuesday) — SSE Streaming Architecture Post

**Type:** Post
**Goal:** Explain why Shipshape uses SSE instead of WebSockets and the tradeoffs involved.

**Post (copy-paste ready):**
```
Shipshape streams file generation progress to the browser in real-time. I chose SSE (Server-Sent Events) over WebSockets.

Why:

SSE is one-directional: server → client. That's exactly what I need — the client sends a prompt, then receives a stream of generated files. No bidirectional communication needed.

Advantages over WebSockets for this use case:
• Built on HTTP — works through proxies and load balancers without config
• Auto-reconnects natively (WebSockets need manual reconnection logic)
• Simpler server implementation — it's just a long-lived HTTP response
• No special protocol upgrade needed

Tradeoff: if I ever need client → server streaming (like collaborative editing), I'd need WebSockets. For one-way progress updates? SSE is simpler and more reliable.

Pick the simplest protocol that fits your data flow pattern. Not every real-time feature needs WebSockets.
```

**Comment Strategy:** Engage with posts about real-time features, streaming, or WebSocket implementations. The SSE vs WebSockets comparison is a perennial discussion — having a real use case to reference gives your take weight.

---

### Day 20 — November 26 (Wednesday) — Debugging Story: Inngest + E2B

**Type:** Post
**Goal:** Another real debugging story — this time involving Inngest event pipelines and E2B sandbox timing.

**Post (copy-paste ready):**
```
Debugging story from Shipshape:

Inngest orchestrates the multi-step generation pipeline. Each step is durable — if the server crashes mid-generation, Inngest replays from the last completed step.

The bug: after an Inngest retry, the E2B sandbox from the previous attempt was still running. New attempt spun up a second sandbox. Both wrote to the same SSE stream.

The user saw duplicate files appearing. Sometimes conflicting versions of the same file.

The fix:
1. Generate a unique sandbox ID per Inngest run attempt
2. Before starting a new sandbox, check for and terminate any orphaned sandbox from the previous attempt
3. Add the attempt number to the SSE event metadata so the client can deduplicate

The lesson: durable execution frameworks are powerful but they create a new class of bugs — resource cleanup across retries. If your step allocates an external resource, your retry logic needs to clean up the previous allocation.
```

**Comment Strategy:** Find tweets about event-driven architectures, background jobs, or serverless functions. The "durable execution creates cleanup bugs" insight is specific and useful.

---

### Day 21 — November 27 (Thursday) — Week 3 Recap Thread

**Type:** Thread (4 tweets)
**Goal:** Consolidate Week 3 and reflect on growth.

**Tweet 1:**
```
Week 3. Here's what went out and what I'm thinking about. 🧵
```

**Tweet 2:**
```
This week's posts:

• My open-source contribution workflow (10+ merged PRs)
• Gatecheck — automated QA with Page Object Model, 100+ assertions
• E2B cloud sandbox architecture in Shipshape
• SSE vs WebSockets — why I chose SSE for one-way streaming
• Debugging Inngest retry + E2B sandbox cleanup

Every project: github.com/vbhvx
```

**Tweet 3:**
```
Something I've noticed: the posts where I explain *why I chose not to use* something get better engagement than posts where I explain what I used.

"Why I didn't use WebSockets" > "I used SSE"
"Why I didn't use an ORM" > "I used raw SQL"

Constraints and tradeoffs > feature lists.
```

**Tweet 4:**
```
Three weeks of consistency. Six projects shared. Multiple deep dives.

If you've been following along — thank you. If you're just finding me:

I'm Vaibhav. 3rd-year CSE. Shipping full-stack tools. Looking for internships.

Everything is open source: github.com/vbhvx
Portfolio: vaibhavdev.online
```

**Comment Strategy:** Engage with 5+ people who've been interacting with your posts. Reply to their content. Building in public is a two-way street — invest in the people who invest in you.

---

## Week 4 — Optimize + Close Strong (Nov 28 – Dec 6)

---

### Day 22 — November 28 (Friday) — Drizzle vs Prisma Post

**Type:** Post
**Goal:** Share a real comparison from having used both ORMs across different projects.

**Post (copy-paste ready):**
```
I've used Prisma (in Memora, Shipshape) and Drizzle (in Fellow) in real projects. My take:

Prisma:
• Schema-first — you write a .prisma file, it generates the client
• Migrations are straightforward
• The generated client is heavy. Cold starts on serverless are noticeable.
• Relations are intuitive — nested writes/reads just work

Drizzle:
• Code-first — your schema IS TypeScript
• SQL-like query syntax. If you know SQL, Drizzle is instantly familiar.
• Much lighter runtime. Better for serverless.
• Relations require more explicit setup

When I'd pick Prisma: rapid prototyping, complex nested relations, teams new to SQL.

When I'd pick Drizzle: serverless-first, performance-sensitive, and when I want to stay close to the actual SQL.

Neither is universally better. I've shipped production apps with both.
```

**Comment Strategy:** ORM comparison posts always generate discussion. Engage with replies thoughtfully — don't get defensive about either choice.

---

### Day 23 — November 29 (Saturday) — Gatecheck Video + Post

**Type:** Video + Post
**Goal:** Demo the automated testing pipeline running in CI.

**Post (copy-paste ready):**
```
Most student projects have zero tests. Here's what 100+ automated assertions look like running in CI.

Gatecheck — my automated QA harness:

• Cypress E2E tests: full user flows in a real browser
• Page Object Model: one class per page, tests read like English
• Postman/Newman: API regression suites
• cypress-axe: WCAG accessibility scans
• GitHub Actions: everything runs on every push

Demo below — watch the CI pipeline catch a broken flow.

github.com/vbhvx/Gatecheck
```

**Video Script:**
```
[Duration: 40-50 seconds]
[Resolution: 1080p screen recording + voiceover]

Scene 1 (0-5s):
[VISUAL]: Show the GitHub Actions tab for the Gatecheck repo. A green checkmark on a recent run.
[AUDIO]: "Gatecheck — automated QA running in CI on every push."

Scene 2 (5-15s):
[VISUAL]: Click into the CI run. Show the Cypress tests executing — a real browser running through login, create, edit, delete flows.
[AUDIO]: "Cypress runs full E2E flows in a real browser. Login, create an item, edit it, delete it, verify it's gone. All automated."

Scene 3 (15-25s):
[VISUAL]: Show a Page Object Model file — a class with methods like login(), createItem(), deleteItem().
[AUDIO]: "Tests use the Page Object Model. Each page is a class. When the UI changes, I update one class — not every test file."

Scene 4 (25-35s):
[VISUAL]: Show the Newman API regression results in the CI log. Then show the cypress-axe accessibility scan output.
[AUDIO]: "API regression suites run with Newman. Accessibility scans catch WCAG violations — color contrast, missing labels, keyboard navigation."

Scene 5 (35-45s):
[VISUAL]: Show the full CI summary — all green. End on the repo.
[AUDIO]: "100+ assertions. All running automatically. Link below."

[END CARD]: @vaibhxdev • github.com/vbhvx/Gatecheck
```

**Comment Strategy:** Find tweets about CI/CD, testing practices, or "I don't write tests" hot takes. Share your perspective — testing isn't overhead when it's automated and saves you from manual regression.

---

### Day 24 — November 30 (Sunday) — Supabase Auth in Fellow

**Type:** Post
**Goal:** Explain the auth strategy in Fellow and how it compares to building Latch from scratch.

**Post (copy-paste ready):**
```
Fellow uses Supabase Auth. Latch is a hand-built auth engine.

Why different approaches for different projects?

Fellow is a multi-tenant Kanban workspace. Auth isn't the product — the Kanban board is. I needed auth that works, is secure, and gets out of my way. Supabase Auth does that.

Latch IS the auth. The whole point was understanding JWTs, refresh token rotation, bcrypt, and RBAC at the lowest level.

Lesson: "build vs buy" isn't a personality trait. It's a per-project decision.

When auth is a dependency → use a service (Supabase, Clerk, Auth.js).
When auth is the thing you're learning → build it yourself.

I'm glad I did both. Using Supabase Auth is easier because I built Latch. I understand what Supabase is abstracting.
```

**Comment Strategy:** Engage with "build vs buy" debates. Your perspective of having done both makes your opinion more credible than someone who only argues for one side.

---

### Day 25 — December 1 (Monday) — Docker + Dev Environment Post

**Type:** Post
**Goal:** Share how Docker Compose simplifies multi-service development across projects like Sortwise.

**Post (copy-paste ready):**
```
Sortwise runs 5 services: FastAPI, PostgreSQL, Redis, Celery workers, and a pgvector-enabled database.

Setting all of that up locally without Docker would be:
• Install PostgreSQL + pgvector extension
• Install and configure Redis
• Run FastAPI
• Start Celery workers with the right broker URL
• Hope all the versions match

With Docker Compose, it's one file and one command.

Every service has its own container. Networking is automatic. Environment variables are centralized. The pgvector extension is baked into the PostgreSQL image.

`docker compose up` and everything works. On any machine.

I use Docker Compose for any project with more than 2 services. The upfront YAML is worth the "it works on my machine" problems it eliminates.

github.com/vbhvx/Sortwise
```

**Comment Strategy:** Engage with Docker/DevOps tweets. The "it works on my machine" angle is universal.

---

### Day 26 — December 2 (Tuesday) — Technical Decision: React 19 + Next.js App Router

**Type:** Post
**Goal:** Share real experience with React 19 and the App Router across multiple projects.

**Post (copy-paste ready):**
```
I've built 3 projects with React 19 and the Next.js App Router. Honest assessment:

What's better:
• Server Components reduce client JS meaningfully. Memora's initial load is noticeably lighter.
• Server Actions replaced a lot of boilerplate API routes.
• The mental model — server by default, client when needed — is cleaner once it clicks.

What's still rough:
• Error boundaries across server/client boundaries can be confusing.
• Caching behavior (especially with revalidation) has surprised me multiple times.
• Some libraries still don't fully support RSC.

Would I go back to Pages Router? No. The App Router is better for the kind of apps I build.

But I understand why people are frustrated. The migration path isn't smooth, and the caching defaults are opinionated in ways that aren't always obvious.
```

**Comment Strategy:** React/Next.js opinions always generate discussion. Engage with replies constructively. Acknowledge both sides — you're not a framework zealot.

---

### Day 27 — December 3 (Wednesday) — Shipshape: Inngest Pipeline Post

**Type:** Post
**Goal:** Explain the Inngest event pipeline architecture and why event-driven was the right choice for Shipshape.

**Post (copy-paste ready):**
```
Shipshape's generation pipeline could have been a single long API request. Generate files → compile → repair → serve preview.

Problem: if any step fails halfway through, you lose everything. The user waits 14 seconds and gets nothing.

Solution: Inngest event pipelines.

Each step is a durable function:
1. Parse prompt → emit "prompt.parsed" event
2. Generate files → emit "files.generated" event
3. Compile in E2B sandbox → emit "compilation.complete" event
4. If compile fails → AST repair → re-emit to step 3 (max 3 times)
5. Serve preview → emit "preview.ready" event

Benefits:
• Each step is independently retryable
• If the server crashes mid-generation, Inngest replays from the last completed step
• SSE streams progress after each event — users see real-time updates
• Observability — I can see exactly where a generation failed

The tradeoff: more infrastructure complexity. But for a multi-step pipeline that touches external services (LLM + sandbox), durability > simplicity.
```

**Comment Strategy:** Engage with tweets about serverless, event-driven architecture, or workflow orchestration. The specific pipeline breakdown is valuable to anyone building multi-step AI workflows.

---

### Day 28 — December 4 (Thursday) — Week 4 Recap + Open-to-Work Final

**Type:** Thread (5 tweets)
**Goal:** Final structured availability post. Summarize the month. Make the ask clear.

**Tweet 1:**
```
Week 4 recap — and a final note on what I'm looking for. 🧵
```

**Tweet 2:**
```
This month I shared:

• 6 open-source projects with real architecture decisions
• Demo videos for Shipshape, Sortwise, Memora, Latch, Gatecheck
• Deep dives on: AST repair loops, fractional indexing, SSE vs WebSockets, E2B sandboxes, Inngest pipelines, Drizzle vs Prisma, zero-ORM auth
• Multiple debugging stories with real root causes

Everything is open source: github.com/vbhvx
```

**Tweet 3:**
```
What I'm looking for:

• Internship — full-stack, backend, or AI/LLM engineering
• Remote or Delhi-based
• Start date: flexible
• I'm a 3rd-year B.Tech CSE student at G.B. Pant DSEU Campus-I

I don't have brand-name credentials. I have shipped projects, open-source contributions, and the ability to learn fast.
```

**Tweet 4:**
```
My stack:
TypeScript, Python, React 19, Next.js, Node.js, FastAPI, PostgreSQL, Docker, tRPC, Prisma, Drizzle, Supabase, LangGraph, pgvector, E2B, Inngest

I've used all of these in production projects, not just tutorials.

Portfolio: vaibhavdev.online
GitHub: github.com/vbhvx
LinkedIn: linkedin.com/in/vaibhavsaini2/
```

**Tweet 5:**
```
If you're hiring — or know someone who is — my DMs are open.

You can also book a 15-min intro call: cal.com/vaibhavdev/intro

Or email: vaibhavsaini2409@gmail.com

Thank you to everyone who engaged with my posts this month. Building in public made me a better communicator and a more thoughtful engineer.
```

**Comment Strategy:** This is the day to engage most heavily. Reply to every comment on your thread. DM people who retweet with a thank-you. Find 5+ hiring-related tweets and leave value-first comments with a soft mention of your availability.

---

### Day 29 — December 5 (Friday) — Lessons From 30 Days of Building in Public

**Type:** Post
**Goal:** Reflect on the experience. Meta-content about the process itself performs well.

**Post (copy-paste ready):**
```
29 days of posting daily about my projects. What I learned:

1. Specificity wins. "94.2% compile rate" gets engagement. "High compile rate" doesn't.

2. Tradeoff posts outperform feature posts. People care about WHY you chose something, not WHAT you built.

3. Debugging stories are the highest-engagement format. Developers relate to pain more than success.

4. Consistency > virality. No single post blew up. But posting daily built a body of work that compounds.

5. Building in public forced me to articulate decisions I'd made intuitively. Writing about fractional indexing made me understand it better than implementing it did.

6. Comments on other people's posts drove more profile visits than my own posts. Engagement is a two-way channel.

Would I do it again? Already planning the next 30 days.
```

**Comment Strategy:** Engage with other "build in public" reflection posts. Share your specific learnings. This is community-building content.

---

### Day 30 — December 6 (Saturday) — Forward-Looking Post

**Type:** Post
**Goal:** Close the 30-day cycle with forward momentum. Tease what's next. Keep the door open.

**Post (copy-paste ready):**
```
Day 30.

What's next:

• Deepening Shipshape — exploring multi-file context windows and collaborative generation
• More open-source contributions — targeting larger repos with complex codebases
• Continuing to write about architecture decisions and debugging stories
• Actively interviewing for internships

This month I shared 6 projects, wrote about fractional indexing, AST repair loops, SSE streaming, zero-ORM auth, E2B sandboxing, durable event pipelines, and more.

All of it is open source. All of it is documented. All of it is built by one 3rd-year student in Delhi.

If any of this resonated — follow along. The next 30 days will be better.

vaibhavdev.online
github.com/vbhvx

— Vaibhav (@vaibhxdev)
```

**Comment Strategy:** Thank everyone who's engaged over the month. Reply to every comment on this post. This is your transition post — it should feel like a natural handoff to the next chapter, not a goodbye.

---

## Content Summary Table

| Day | Date | Type | Focus | Project |
|-----|------|------|-------|---------|
| 1 | Nov 7 | Post (pinned) | Profile launch + open-to-work | All |
| 2 | Nov 8 | Video + Post | Shipshape demo | Shipshape |
| 3 | Nov 9 | Post | AST repair loop deep dive | Shipshape |
| 4 | Nov 10 | Video + Post | Sortwise demo | Sortwise |
| 5 | Nov 11 | Post | SSE race condition debugging story | Shipshape |
| 6 | Nov 12 | Post | Fractional indexing architecture | Fellow |
| 7 | Nov 13 | Thread (4 tweets) | Week 1 recap | All |
| 8 | Nov 14 | Post | Debounced persistence deep dive | Memora |
| 9 | Nov 15 | Video + Post | Memora demo | Memora |
| 10 | Nov 16 | Post | Zero-ORM auth deep dive | Latch |
| 11 | Nov 17 | Post | tRPC type safety architecture | Fellow |
| 12 | Nov 18 | Post | Query optimization failure story | Fellow |
| 13 | Nov 19 | Video + Post | Latch demo | Latch |
| 14 | Nov 20 | Thread (4 tweets) | Week 2 recap | All |
| 15 | Nov 21 | Post | Soft open-to-work reminder | All |
| 16 | Nov 22 | Post | Open-source contribution workflow | General |
| 17 | Nov 23 | Post | Testing deep dive | Gatecheck |
| 18 | Nov 24 | Post | E2B sandbox architecture | Shipshape |
| 19 | Nov 25 | Post | SSE vs WebSockets tradeoffs | Shipshape |
| 20 | Nov 26 | Post | Inngest retry + sandbox cleanup bug | Shipshape |
| 21 | Nov 27 | Thread (4 tweets) | Week 3 recap | All |
| 22 | Nov 28 | Post | Drizzle vs Prisma comparison | Fellow/Memora |
| 23 | Nov 29 | Video + Post | Gatecheck demo | Gatecheck |
| 24 | Nov 30 | Post | Build vs buy — Supabase Auth vs Latch | Fellow/Latch |
| 25 | Dec 1 | Post | Docker Compose for multi-service dev | Sortwise |
| 26 | Dec 2 | Post | React 19 + App Router assessment | General |
| 27 | Dec 3 | Post | Inngest event pipeline architecture | Shipshape |
| 28 | Dec 4 | Thread (5 tweets) | Week 4 recap + final open-to-work | All |
| 29 | Dec 5 | Post | Lessons from 30 days of building in public | Meta |
| 30 | Dec 6 | Post | Forward-looking close | All |

---

## Content Mix Audit

| Content Type | Target | Actual | Days |
|---|---|---|---|
| Progress updates with metrics | 8-10 | 10 | 1, 2, 4, 7, 9, 14, 15, 21, 28, 30 |
| Technical decision/architecture | 6-8 | 8 | 3, 6, 11, 18, 19, 22, 26, 27 |
| Short demo videos with scripts | 6-8 | 6 | 2, 4, 9, 13, 23, (implicit in others) |
| Debugging/failure stories | 3-4 | 4 | 5, 12, 20, 29 |
| Open-to-work/availability | 3 | 3 | 1, 15, 28 |
| Weekly recap threads | 4 | 4 | 7, 14, 21, 28 |
| Engagement/community posts | 2-3 | 3 | 16, 24, 29 |

---

## Daily Commenting Quota

Every single day, in addition to your post:

1. **Find 3-5 relevant tweets** in your niche (Next.js, TypeScript, AI dev tools, building in public, internships)
2. **Leave substantive comments** — not "great post!" but specific technical observations, related experiences, or genuine questions
3. **Respond to every reply** on your own posts within 2-4 hours
4. **Time your posts** for 9-10 AM IST (which catches the US evening crowd and India's morning audience)

> [!TIP]
> The comment strategy is arguably more important than the posts themselves. Your posts attract your existing audience. Your comments attract new people to your profile. Prioritize commenting on posts from accounts with 1K-50K followers — large enough to be seen, small enough that your comment won't get buried.

---

## Key Links Reference

| Resource | URL |
|---|---|
| Portfolio | https://vaibhavdev.online |
| GitHub | https://github.com/vbhvx |
| LinkedIn | https://linkedin.com/in/vaibhavsaini2/ |
| Cal.com | https://cal.com/vaibhavdev/intro |
| Email | vaibhavsaini2409@gmail.com |
| Shipshape (Live) | https://shipshape.vaibhavdev.online/ |
| Shipshape (Repo) | https://github.com/vbhvx/Shipshape |
| Fellow (Repo) | https://github.com/vbhvx/Fellow |
| Memora (Repo) | https://github.com/vbhvx/Memora |
| Sortwise (Repo) | https://github.com/vbhvx/Sortwise |
| Latch (Repo) | https://github.com/vbhvx/Latch |
| Gatecheck (Repo) | https://github.com/vbhvx/Gatecheck |
