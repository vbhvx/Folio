"use client";

import { Icons } from "@/components/icons";
import type { OtherProject } from "@/data/types";
import { ArrowUpRight, Pin } from "lucide-react";
import { useState } from "react";

interface RepositoryCardProps {
  project: OtherProject;
}

export function RepositoryCard({ project }: RepositoryCardProps) {
  const [showAllTags, setShowAllTags] = useState(false);
  const sourceLink = project.links?.find((l) => l.kind === "source")?.href;
  const href = sourceLink || `/projects/${project.slug}`;

  const displayedTech = showAllTags ? project.technologies : project.technologies.slice(0, 3);
  const remainingCount = project.technologies.length - 3;

  return (
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-card/75 hover:shadow-lg hover:shadow-black/30">
      <div>
        {/* Top bar with folder & category pill */}
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="text-amber-500 transition-transform duration-300 group-hover:scale-110">
              <Icons.folder className="size-5" />
            </div>
            <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-500 dark:text-amber-300">
              {project.category}
            </span>
          </div>

          <div className="text-muted-foreground/60 transition-colors group-hover:text-amber-400">
            <Pin className="size-3.5 rotate-45" />
          </div>
        </div>

        {/* Name & Tagline */}
        <h4 className="font-sans text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-amber-400">
          {project.name}
        </h4>
        {project.tagline && (
          <p className="mt-0.5 font-mono text-xs font-medium text-amber-600 dark:text-amber-400/90">
            {project.tagline}
          </p>
        )}

        {/* Complete Description */}
        {project.description && (
          <p className="mt-2 text-xs leading-relaxed text-foreground/80">
            {project.description}
          </p>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-border/40">
        {/* Tech tags with hover expansion */}
        <div
          className="mb-3 flex flex-wrap gap-1 cursor-pointer"
          onMouseEnter={() => setShowAllTags(true)}
          onMouseLeave={() => setShowAllTags(false)}
          title="Hover to view all technologies"
        >
          {displayedTech.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border/50 bg-muted/60 dark:bg-white/[0.02] px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {!showAllTags && remainingCount > 0 && (
            <span className="rounded border border-amber-500/40 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-amber-400">
              +{remainingCount}
            </span>
          )}
        </div>

        {/* View source link */}
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-amber-400"
        >
          <Icons.github className="size-3" />
          <span>VIEW REPOSITORY</span>
          <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
