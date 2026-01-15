# Vaibhav Saini Portfolio

The personal portfolio for [vaibhavdev.online](https://vaibhavdev.online/). It is a static Next.js site that presents profile information, selected projects, experience, skills, contact links, and a GitHub contribution view.

## Stack

Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion, and Vercel Analytics. The site is configured for static export; its public assets and generated site output live in `public/` and `out/` respectively.

## Structure

- `src/app` — routes, layout, and global styling.
- `src/components` — page, layout, GitHub, animation, icon, and UI components.
- `src/config` and `src/data` — portfolio copy, links, experience, skills, and project metadata.
- `src/services` — contribution-graph fetch and parsing logic.
- `public` — profile imagery, social images, résumé, and other static assets.
- `tests` — Node native test-runner coverage.

Project ordering and visibility are intentionally data-driven in `src/data/projects.ts`; update that file rather than hard-coding project content into a page.

## Local development

Requires Node.js 18+ and pnpm (the repository includes a pnpm lockfile).

```bash
cd 00_Portfolio
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Production commands:

```bash
pnpm test
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

## Configuration

Copy `.env.example` to `.env.local` only when needed:

```env
# Optional; required only for hosting below a URL subpath
NEXT_PUBLIC_BASE_PATH=/portfolio
```

No secret is required for normal local development. The GitHub contribution view is fetched client-side and gracefully handles unavailable data.
