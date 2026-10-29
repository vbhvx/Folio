import BlurFade from "@/components/magicui/blur-fade";
import { FlagshipCard } from "@/components/features/flagship-card";
import { SelectedProjectCard } from "@/components/features/selected-project-card";
import { ArchiveTable } from "@/components/features/archive-table";
import { PORTFOLIO } from "@/data/portfolio";
import { ArrowLeft, Terminal, ShieldCheck } from "lucide-react";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects & Engineering Systems | Vaibhav Saini",
  description:
    "Tiered engineering directory: Flagship systems, selected specialized architectures, and searchable archive table by Vaibhav Saini.",
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
              <span>BODY OF WORK · MULTI-TIER SYSTEMS DIRECTORY</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.12}>
            <h1 className="font-sans text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Built to ship, documented to last
            </h1>
          </BlurFade>

          <BlurFade delay={0.16}>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Structured across three visibility tiers: deep flagship architectures with live runtimes, selected specialized builds proving domain breadth, and an indexed technical archive.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Tier 1: Flagship Projects Section */}
      <section id="flagship-systems" className="space-y-6">
        <BlurFade delay={0.2}>
          <div className="border-b border-border/60 pb-4">
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-amber-500 dark:text-amber-400 mb-1">
              <span className="size-1.5 rounded-full bg-amber-400" />
              <span>TIER 1 · FLAGSHIP ARCHITECTURES (DEPTH)</span>
            </div>
            <h2 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground sm:text-base">
              FLAGSHIP SYSTEMS
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Runnable demos, architecture trade-offs, and complete case studies
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.flagshipProjects.map((project, idx) => (
            <BlurFade key={project.slug} delay={0.22 + idx * 0.05}>
              <FlagshipCard project={project} />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Tier 2: Selected Work Section */}
      <section id="selected-systems" className="space-y-6">
        <BlurFade delay={0.26}>
          <div className="border-b border-border/60 pb-4">
            <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-500 dark:text-emerald-400 mb-1">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              <span>TIER 2 · SPECIALIZED SYSTEMS (RANGE)</span>
            </div>
            <h2 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground sm:text-base">
              MORE SELECTED WORK
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Production-oriented builds demonstrating specialized competence in AI agents, raw SQL security, and CI/CD
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PORTFOLIO.selectedProjects.map((project, idx) => (
            <BlurFade key={project.slug} delay={0.28 + idx * 0.04}>
              <SelectedProjectCard project={project} />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Tier 3: Complete Engineering Archive Table */}
      <section id="archive" className="space-y-6">
        <BlurFade delay={0.32}>
          <ArchiveTable
            projects={PORTFOLIO.archiveProjects}
            showFilters={true}
            showSearch={true}
            title="TIER 3 · COMPLETE TECHNICAL ARCHIVE & DIRECTORY"
            subtitle="Searchable, filterable index of all specialized builds, background services, and backend utilities"
          />
        </BlurFade>
      </section>

      {/* Bottom CTA */}
      <section id="projects-cta">
        <BlurFade delay={0.36}>
          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-8 backdrop-blur-xl shadow-xl shadow-black/20 text-center">
            <div className="mx-auto max-w-xl space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
                <ShieldCheck className="size-4" />
                <span>OPEN TO INTERNSHIPS & FULL-TIME ROLES</span>
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

