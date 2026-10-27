<div align="center">

# vaibhavdev.online

**Systems Architecture · Backend Infrastructure · AI Agent Platforms**

[![Live Site](https://img.shields.io/badge/Live-vaibhavdev.online-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://vaibhavdev.online/)
[![GitHub](https://img.shields.io/badge/GitHub-vbhvx-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vbhvx)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-vaibhavsaini2-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/vaibhavsaini2/)
[![X](https://img.shields.io/badge/X-@vaibhxdev-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/vaibhxdev)

&nbsp;

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radixui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## Overview

A modern, high-performance personal portfolio designed with a financial technology and Web3 trading terminal aesthetic (inspired by Polymarket, Hyperliquid, and Coinbase). Showcases 11 verified engineering systems across TypeScript, Python, and Dart with documented architecture decisions, honest trade-offs, and live operational status.

Built with Next.js App Router and a centralized data architecture where all site content is managed through type-safe TypeScript data files — zero CMS overhead, zero database queries at request time, and 100% static export portability.

---

## ✨ Features

| Feature | Details |
|---------|---------|
| **Fintech & Web3 Theme** | Minimalist technical blueprint styling with high-contrast typography, amber accents, and technical borders |
| **Adaptive Dual Themes** | Dark obsidian theme with subtle white grid lines; Light mode with pure white canvas and crisp black technical grid lines |
| **Command Strip Navbar** | Sticky frosted glass navbar with live ticking Delhi, India clock (`Asia/Kolkata`), mobile drawer, and status beacon |
| **Telemetry Metrics Banner** | Highlights engineering benchmarks: shipped systems count, SSE streaming latency reduction, and O(1) fractional indexing |
| **Two-Tier Architecture Showcase** | 3 Flagship systems with architectural callouts and deep-dive bullets + 8 specialized builds in a compact repository grid |
| **Individual Deep-Dive Pages** | Dedicated dynamic routes for all 11 projects (`/projects/[slug]`) with system specifications, screenshots, and source code links |
| **Smooth Micro-Interactions** | Non-blocking entrance reveals and fluid transitions powered by Framer Motion |
| **Static Export (`output: 'export'`)** | Generates zero-dependency static HTML/CSS/JS (`out/`) deployable anywhere (Vercel, GitHub Pages, Cloudflare) |
| **SEO & OpenGraph Ready** | Dynamic meta tags, OpenGraph social sharing preview cards, canonical URLs, and structured heading hierarchy |
| **Resume & Verified Artifacts** | Direct downloadable resume PDF and links to public source code and automated QA suites |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, Static Export) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) |
| **Typography** | [Outfit](https://fonts.google.com/specimen/Outfit) (Sans) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Monospace) |
| **UI Primitives** | [Radix UI](https://www.radix-ui.com/) (Tooltip, Slot) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVG icon components |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) (Class-based dark/light mode) |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) |
| **Image Processing** | [Sharp](https://sharp.pixelplumbing.com/) |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── documents/          # Resume PDF (Vaibhav_Saini_Resume.pdf)
│   ├── images/projects/    # Canonical project screenshots (Shipshape, Orbit, StackAudit, etc.)
│   ├── profile/            # Profile avatar (profile.jpg)
│   ├── favicon.png         # Modern geometric fintech squircle favicon
│   └── og.png              # OpenGraph 1200x630 social share card
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Design system, grid styles, dark/light tokens
│   │   ├── layout.tsx      # Root layout, fonts, theme provider, metadata
│   │   ├── page.tsx        # Homepage (Hero, Telemetry, Flagships, Repos, Skills, Contact)
│   │   └── projects/
│   │       ├── page.tsx    # All projects engineering index
│   │       └── [slug]/     # Project deep-dive pages (SSG pre-rendered)
│   ├── components/
│   │   ├── features/       # FlagshipCard, RepositoryCard components
│   │   ├── icons/          # Modular SVG icons (GitHub, LinkedIn, X, Globe, Folder)
│   │   ├── layout/         # Navbar, LiveClock, ModeToggle, ThemeProvider
│   │   ├── magicui/        # BlurFade entrance animations
│   │   └── ui/             # Radix-based Button, Tooltip primitives
│   ├── data/               # ← Centralized Content Layer
│   │   ├── portfolio.ts    # Centralized barrel export
│   │   ├── projects.ts     # Flagship (3) + Additional (8) project definitions
│   │   ├── site.ts         # Site config, telemetry metrics, hero copy, social links
│   │   ├── skills.ts       # 4 verified technical competency columns
│   │   └── types.ts        # Shared TypeScript interfaces
│   └── lib/                # Utility functions (cn tailwind-merge helper)
├── .github/                # GitHub Actions workflow (Automated Pages deployment)
├── .env.example            # Environment variable template
├── LICENSE                 # MIT License
├── tailwind.config.ts      # Extended Tailwind theme (colors, fonts, animations)
├── next.config.mjs         # Next.js configuration (static export, unoptimized images)
└── package.json            # Scripts, dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18 (Node 24 recommended)
- **pnpm** ≥ 8 — `npm install -g pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/vbhvx/Folio.git
cd Folio

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
```

### Local Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Assurance & Validation

```bash
# Type check without emitting files
pnpm typecheck

# Run ESLint validation
pnpm lint
```

### Production Build & Preview

```bash
# Build the production static export (outputs to ./out)
pnpm build

# Preview the static export locally
npx serve out
```

---

## 📝 Content Management

All portfolio content is maintained in `src/data/` with strict TypeScript typing:

### `site.ts` — Global Configuration
- **`siteConfig`**: Name, email, location, avatar path, resume URL, meta description.
- **`socialLinks`**: GitHub, LinkedIn, X, and direct mailto links.
- **`navigation`**: Top navigation items and anchor links.
- **`engineeringMetrics`**: Key benchmarks displayed in the telemetry strip.
- **`heroContent` / `contactContent`**: Headings, kickers, and copy.

### `projects.ts` — Systems & Repositories
Projects are divided into two structured collections:
- **`featuredProjects`**: 3 flagship architectures displayed side-by-side with architecture callouts, key outcomes, and tags.
- **`otherProjects`**: 8 supporting repositories displayed in a compact 4-column grid.

Schema definition:
```typescript
interface Project {
  slug: string;             // URL identifier (/projects/[slug])
  name: string;             // Project name
  tagline: string;          // One-line summary
  year?: string;            // Release year
  category?: string;        // System category
  architecture?: string;    // Core architectural blueprint
  description: string;      // Short summary (grid view)
  longDescription?: string; // Comprehensive technical deep-dive
  technologies: string[];   // Technology tags
  outcomes?: string[];      // Verified implementation outcomes
  image?: string;           // Screenshot preview path
  links: ProjectLink[];     // GitHub source code, live URLs
}
```

### `skills.ts` — Verified Competencies
Organized into 4 verified technical domains:
1. `LANGUAGES & CORE` (TypeScript, Python, JavaScript, SQL, HTML/CSS, Dart)
2. `FRONTEND & RUNTIMES` (Next.js, React 19, Tailwind CSS, tRPC, DnD Kit, Flutter)
3. `BACKEND & AGENTS` (Node.js, Express.js, FastAPI, Inngest, Celery, SSE, LangGraph, JWT/RBAC)
4. `DATABASES & INFRA` (PostgreSQL, Supabase, Prisma, Drizzle ORM, Docker, E2B Cloud Sandboxes, Postman/CI)

---

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vbhvx/Folio)

Push to `main` and Vercel automatically detects Next.js, executes `pnpm build`, and serves the static output with zero configuration.

### GitHub Pages

1. If deploying to a subpath repository URL, set `NEXT_PUBLIC_BASE_PATH`:
   ```bash
   NEXT_PUBLIC_BASE_PATH=/Portfolio
   ```
2. The included [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml) workflow builds and deploys `./out` automatically upon every push to `main`.

---

## ⚙️ Environment Variables

| Variable | Required | Default | Description |
|----------|:--------:|---------|-------------|
| `NEXT_PUBLIC_BASE_PATH` | No | `""` | Set to `"/repo-name"` for GitHub Pages subpath deployment. Leave empty for root domain or Vercel. |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
