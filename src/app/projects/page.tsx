import BlurFade from "@/components/magicui/blur-fade";
import { FlagshipCard } from "@/components/features/flagship-card";
import { ProjectsFilter } from "@/components/features/projects-filter";
import { PORTFOLIO } from "@/data/portfolio";
import { ArrowLeft, Terminal, ShieldCheck } from "lucide-react";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects & Engineering Systems",
  description:
    "Systems architecture, AI agents, multi-tenant platforms, and backend infrastructure built by Vaibhav Saini.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-28 pt-8 sm:px-6 lg:px-8">
      {/* Header & Breadcrumb */}
      <section id="projects-hero" className="space-y-6 pt-4">
        <BlurFade delay={0.04}>
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-amber-400"
            >
              <ArrowLeft className="size-3" />
              <span>HOME</span>
            </Link>
            <span>/</span>
            <span className="text-foreground">PROJECTS</span>
          </div>
        </BlurFade>

        <div className="space-y-3">
          <BlurFade delay={0.08}>
            <div className="inline-flex items-center gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-amber-400">
              <Terminal className="size-3" />
              <span>ENGINEERING INDEX · ALL SYSTEMS</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.12}>
            <h1 className="font-sans text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Built to ship, documented to last
            </h1>
          </BlurFade>

          <BlurFade delay={0.16}>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Each system highlights real-world technical trade-offs, architecture decisions,
              type safety, and honest engineering across backend infrastructure, distributed data models, and AI agent platforms.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Flagship Projects Section */}
      <section id="flagship-systems" className="space-y-6">
        <BlurFade delay={0.2}>
          <div className="border-b border-border/60 pb-4">
            <h2 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground sm:text-base">
              FLAGSHIP ARCHITECTURES
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Runnable demos, architecture trade-offs, and complete case studies
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.featuredProjects.map((project, idx) => (
            <BlurFade key={project.slug} delay={0.22 + idx * 0.05}>
              <FlagshipCard project={project} />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Other Projects / Repositories */}
      {PORTFOLIO.otherProjects && PORTFOLIO.otherProjects.length > 0 && (
        <section id="all-repositories" className="space-y-6">
          <BlurFade delay={0.28}>
            <div className="border-b border-border/60 pb-4">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground sm:text-base">
                ADDITIONAL BUILDS & SPECIALIZED SERVICES
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Filter by backend, AI agent, full-stack, and QA architectures
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <ProjectsFilter projects={PORTFOLIO.otherProjects} />
          </BlurFade>
        </section>
      )}

      {/* Bottom CTA */}
      <section id="projects-cta">
        <BlurFade delay={0.36}>
          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-8 backdrop-blur-xl shadow-xl shadow-black/20 text-center">
            <div className="mx-auto max-w-xl space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
                <ShieldCheck className="size-4" />
                <span>OPEN TO FULL-TIME ROLES & INTERNSHIPS</span>
              </div>
              <h3 className="font-sans text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Interested in building real-world systems together?
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I am actively exploring opportunities across backend engineering,
                distributed architectures, and AI agent platforms. Available in Delhi or Remote.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Link
                  href="/#contact"
                  className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-amber-400 transition-all hover:bg-amber-500/20 hover:border-amber-400"
                >
                  GET IN TOUCH
                </Link>
                <Link
                  href="/"
                  className="rounded-xl border border-border/70 bg-white/[0.03] px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-white/30 hover:bg-white/[0.06]"
                >
                  BACK TO HOME
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}

