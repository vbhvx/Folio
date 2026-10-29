"use client";

import { Icons } from "@/components/icons";
import type { OtherProject } from "@/data/types";
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Terminal, Workflow } from "lucide-react";
import Image from "next/image";

interface SelectedProjectCardProps {
  project: OtherProject;
}

export function SelectedProjectCard({ project }: SelectedProjectCardProps) {
  const sourceLink = project.links.find(
    (l) => l.kind === "source" || l.label.toLowerCase().includes("source") || l.label.toLowerCase().includes("github")
  );
  const demoLink = project.links.find(
    (l) => l.kind === "demo" || l.label.toLowerCase().includes("demo") || l.label.toLowerCase().includes("live")
  );

  let DomainIcon = Terminal;
  if (project.category === "AI Agents") DomainIcon = Workflow;
  if (project.category === "Backend") DomainIcon = Cpu;
  if (project.category === "Testing / QA") DomainIcon = ShieldCheck;

  return (
    <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-card/85 hover:shadow-xl hover:shadow-black/30">
      <div>
        {/* Visual Header / Thumbnail if present */}
        {project.image ? (
          <div className="relative aspect-[16/8] w-full overflow-hidden border-b border-border/50 bg-black/40">
            <Image
              src={project.image}
              alt={`${project.name} system preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent pointer-events-none" />

            <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 rounded-md border border-amber-500/40 bg-black/80 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
              <DomainIcon className="size-3" />
              <span>{project.category}</span>
            </div>

            {project.year && (
              <span className="absolute top-2.5 right-2.5 z-10 rounded-md border border-white/10 bg-black/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur-md">
                {project.year}
              </span>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-between border-b border-border/40 p-4 pb-3">
            <div className="flex items-center gap-1.5 rounded-md border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-400">
              <DomainIcon className="size-3" />
              <span>{project.category}</span>
            </div>
            {project.year && (
              <span className="font-mono text-[10px] text-muted-foreground">
                {project.year}
              </span>
            )}
          </div>
        )}

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-3">
          {/* Project Title & Tagline */}
          <div>
            <h3 className="font-sans text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-amber-400">
              {project.name}
            </h3>
            {project.tagline && (
              <p className="mt-0.5 font-mono text-xs font-medium text-amber-500/90 dark:text-amber-400/90">
                {project.tagline}
              </p>
            )}
          </div>

          {/* One line summary: What it is & why it's interesting */}
          <p className="text-xs leading-relaxed text-foreground/85">
            {project.description}
          </p>

          {/* Core Result / Fact Highlight Box */}
          {project.result && (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 font-mono text-[11px] leading-snug text-emerald-300/95 flex items-start gap-2">
              <span className="size-1.5 rounded-full bg-emerald-400 mt-1 shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span>{project.result}</span>
            </div>
          )}

          {/* Top 3-4 Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/60 bg-muted/50 dark:bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors group-hover:border-amber-500/20 group-hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Strip: Live Demo (if any) + Source */}
      <div className="border-t border-border/40 p-4 pt-3 flex items-center justify-between gap-2 bg-white/[0.01]">
        {demoLink?.href ? (
          <a
            href={demoLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/15 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-amber-400 transition-all hover:bg-amber-500/25 hover:border-amber-400 active:scale-[0.98]"
          >
            <span>LIVE DEMO</span>
            <ArrowUpRight className="size-3" />
          </a>
        ) : (
          <div className="flex-1 font-mono text-[11px] text-muted-foreground/60 flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-muted-foreground/40" />
            <span>STANDALONE SERVICE</span>
          </div>
        )}

        {sourceLink?.href && (
          <a
            href={sourceLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-border/70 bg-card/80 px-3.5 py-2 font-mono text-xs font-medium uppercase tracking-wider text-foreground transition-all hover:border-foreground/30 hover:bg-muted dark:hover:bg-white/[0.06] active:scale-[0.98]"
          >
            <Icons.github className="size-3.5" />
            <span>SOURCE</span>
          </a>
        )}
      </div>
    </div>
  );
}

