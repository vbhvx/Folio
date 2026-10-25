import BlurFade from "@/components/magicui/blur-fade";
import { Icons } from "@/components/icons";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/portfolio";
import type { FeaturedProject, OtherProject } from "@/data/types";
import { ArrowLeft, ArrowUpRight, Cpu, Layers, ShieldCheck, Terminal } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

function isFeaturedProject(project: FeaturedProject | OtherProject): project is FeaturedProject {
  return "outcomes" in project && Array.isArray(project.outcomes);
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} | Systems Architecture & Implementation`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const isFeatured = isFeaturedProject(project);
  const outcomes: readonly string[] = isFeatured ? project.outcomes : [];
  const year: string = isFeatured ? project.year : "2026";
  const architecture = project.architecture;
  const category = project.category || "Systems Engineering";

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-4 pb-28 pt-8 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <BlurFade delay={0.04}>
        <nav className="flex items-center gap-2 pt-4 font-mono text-xs text-muted-foreground">
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-amber-400"
          >
            <ArrowLeft className="size-3" />
            <span>HOME</span>
          </Link>
          <span>/</span>
          <Link
            href="/projects"
            className="transition-colors hover:text-amber-400"
          >
            PROJECTS
          </Link>
          <span>/</span>
          <span className="text-foreground">{project.name.toUpperCase()}</span>
        </nav>
      </BlurFade>

      {/* Hero Header */}
      <section id="project-hero" className="space-y-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <BlurFade delay={0.08}>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-400">
                  <Terminal className="size-3" />
                  <span>{category}</span>
                </span>
                <span className="rounded-lg border border-border/60 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  RELEASE: {year}
                </span>
                <span className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  VERIFIED DEPLOYMENT
                </span>
              </div>
            </BlurFade>

            <BlurFade delay={0.12}>
              <h1 className="font-sans text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {project.name}
              </h1>
            </BlurFade>

            <BlurFade delay={0.16}>
              <p className="max-w-2xl font-mono text-sm text-amber-400/90 sm:text-base">
                {project.tagline}
              </p>
            </BlurFade>
          </div>

          {/* Action Links */}
          <BlurFade delay={0.2}>
            <div className="flex flex-wrap gap-2.5 lg:flex-col">
              {project.links?.map((link) => {
                if (!link.href) return null;
                const isGithub = link.kind === "source" || link.label.toLowerCase().includes("github");

                return (
                  <a
                    key={`${project.name}-${link.label}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-amber-400 shadow-sm transition-all hover:bg-amber-500/20 hover:border-amber-400 active:scale-[0.98]"
                  >
                    {isGithub ? (
                      <Icons.github className="size-4" />
                    ) : (
                      <Icons.globe className="size-4" />
                    )}
                    <span>{link.label}</span>
                    <ArrowUpRight className="size-3" />
                  </a>
                );
              })}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Visual Screenshot / Preview */}
      {project.image && (
        <BlurFade delay={0.22}>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/70 bg-card/60 shadow-2xl backdrop-blur-xl">
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
          </div>
        </BlurFade>
      )}

      {/* Architecture Highlight Box */}
      {architecture && (
        <BlurFade delay={0.26}>
          <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 backdrop-blur-xl">
            <div className="mb-2 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
              <Cpu className="size-4 text-amber-400" />
              <span>CORE ARCHITECTURAL BLUEPRINT</span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-amber-200/90 font-medium">
              {architecture}
            </p>
          </div>
        </BlurFade>
      )}

      {/* Deep-Dive Overview & Tech Stack */}
      <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <BlurFade delay={0.3}>
          <div className="h-full rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl space-y-3">
            <h2 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <Layers className="size-4 text-amber-500" />
              <span>SYSTEM SPECIFICATION & OVERVIEW</span>
            </h2>
            <p className="text-sm leading-relaxed text-foreground/85">
              {project.longDescription || project.description}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.34}>
          <div className="h-full rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl space-y-3">
            <h2 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <Terminal className="size-4 text-amber-500" />
              <span>TECH STACK & DEPENDENCIES</span>
            </h2>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border/60 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-amber-500/40 hover:text-amber-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Engineering Outcomes */}
      {isFeatured && outcomes.length > 0 && (
        <section id="outcomes" className="space-y-4">
          <BlurFade delay={0.38}>
            <div className="rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <ShieldCheck className="size-4 text-emerald-400" />
                <span>TECHNICAL OUTCOMES & IMPLEMENTATION DECISIONS</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-xl border border-border/50 bg-white/[0.02] p-4 transition-all hover:border-amber-500/30 hover:bg-white/[0.04]"
                  >
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded bg-amber-500/10 font-mono text-xs font-bold text-amber-400">
                      {index + 1}
                    </div>
                    <p className="text-xs leading-relaxed text-foreground/85">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </section>
      )}

      {/* Bottom Nav Bar */}
      <section id="project-nav">
        <BlurFade delay={0.42}>
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur-xl sm:flex-row">
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-xl border border-border/70 bg-white/[0.03] px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-white/30 hover:bg-white/[0.06]"
            >
              <ArrowLeft className="size-3" />
              <span>ALL PROJECTS</span>
            </Link>

            <Link
              href="/#contact"
              className="flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-amber-400 transition-all hover:bg-amber-500/20 hover:border-amber-400"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="size-3" />
            </Link>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
