import { Icons } from "@/components/icons";
import type { FeaturedProject } from "@/data/types";
import { Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FlagshipCardProps {
  project: FeaturedProject;
}

export function FlagshipCard({ project }: FlagshipCardProps) {
  const githubLink = project.links.find((l) => l.kind === "source" || l.label.toLowerCase().includes("github"));
  const href = githubLink?.href || `/projects/${project.slug}`;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-xl hover:shadow-black/40">
      {/* Visual Preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/60 bg-black/40">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Title & Year */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-sans text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-amber-400">
              {project.name}
            </h3>
            <p className="font-mono text-xs text-muted-foreground mt-0.5">
              {project.tagline}
            </p>
          </div>
          <span className="shrink-0 rounded border border-border/60 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] font-medium text-muted-foreground">
            {project.year}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        {/* Architecture Callout */}
        {project.architecture && (
          <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs">
            <div className="mb-1 flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <Cpu className="size-3.5 shrink-0 text-amber-600 dark:text-amber-400" />
              <span>ARCHITECTURE</span>
            </div>
            <p className="font-sans text-[11px] leading-relaxed text-amber-950 dark:text-amber-200/90 font-medium">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Outcomes */}
        {project.outcomes && project.outcomes.length > 0 && (
          <ul className="mt-4 flex-1 space-y-2">
            {project.outcomes.slice(0, 3).map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/85">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                <span className="leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Pills */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border/60 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors hover:border-amber-500/30 hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-5 pt-4 border-t border-border/40">
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-amber-400 transition-all hover:bg-amber-500/20 hover:border-amber-400 hover:shadow-md hover:shadow-amber-500/10 active:scale-[0.99]"
          >
            <Icons.github className="size-3.5" />
            <span>VIEW GITHUB</span>
          </a>
        </div>
      </div>
    </div>
  );
}
