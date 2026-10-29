"use client";

import { Icons } from "@/components/icons";
import type { OtherProject } from "@/data/types";
import { ArrowUpRight } from "lucide-react";

interface SelectedProjectCardProps {
  project: OtherProject;
}

const systemPreviews: Record<
  string,
  {
    prompt: string;
    badge: string;
    lines: { text: string; color?: string }[];
  }
> = {
  sortwise: {
    prompt: "celery@worker-1 ~ triage_pipeline",
    badge: "FASTAPI · LANGGRAPH",
    lines: [
      { text: "POST /api/v1/incidents/triage -> 200 OK (340ms)", color: "text-emerald-400" },
      { text: "[LangGraph] Extracted root-cause · risk: HIGH (0.89)", color: "text-amber-400" },
      { text: "[pgvector] Cosine similarity query (k=5) -> 1 duplicate", color: "text-foreground/90" },
      { text: "[CAPA] Generated CAPA resolution plan", color: "text-muted-foreground" },
    ],
  },
  latch: {
    prompt: "node server.js ~ pg-pool",
    badge: "RAW SQL · NO ORM",
    lines: [
      { text: "POST /auth/login -> 200 OK (14.2ms)", color: "text-emerald-400" },
      { text: "[pg:pool] Acquired client (active: 3, idle: 17)", color: "text-foreground/90" },
      { text: "[SQL] SELECT id, role, password_hash FROM users WHERE email = $1", color: "text-amber-400" },
      { text: "[bcrypt] Cost 12 verified -> httpOnly JWT issued", color: "text-muted-foreground" },
    ],
  },
  gatecheck: {
    prompt: "cypress run ~ newman-ci",
    badge: "CI HARNESS · PASSING",
    lines: [
      { text: "npx cypress run --spec 'cypress/e2e/**/*.cy.ts'", color: "text-muted-foreground" },
      { text: "✔ CRM Auth & Tenant Switching (3 passed)", color: "text-emerald-400" },
      { text: "✔ Lead Pipeline Drag-Drop (5 passed)", color: "text-emerald-400" },
      { text: "✔ Newman: 24/24 API assertions passed (0 failed)", color: "text-emerald-400" },
    ],
  },
};

export function SelectedProjectCard({ project }: SelectedProjectCardProps) {
  const sourceLink = project.links.find(
    (l) => l.kind === "source" || l.label.toLowerCase().includes("source") || l.label.toLowerCase().includes("github")
  );

  const preview = systemPreviews[project.slug];

  return (
    <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-card/85 hover:shadow-xl hover:shadow-black/30">
      <div>
        {/* Unified Terminal & Pipeline Chrome for All Selected Builds */}
        <div className="border-b border-border/60 bg-black/70 p-3.5 font-mono text-[11px]">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-red-500/80" />
              <span className="size-2 rounded-full bg-amber-500/80" />
              <span className="size-2 rounded-full bg-emerald-500/80" />
              <span className="ml-1 text-[10px] text-muted-foreground/80">
                {preview?.prompt || `${project.slug}-runtime`}
              </span>
            </div>
            <span className="rounded border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-amber-400 uppercase tracking-wider">
              {preview?.badge || project.category}
            </span>
          </div>

          <div className="pt-2 space-y-1 text-[10px] leading-tight">
            {preview?.lines.map((l, idx) => (
              <div key={idx} className={`truncate font-mono ${l.color || "text-foreground/80"}`}>
                {l.text}
              </div>
            ))}
          </div>
        </div>

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
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-2.5 font-mono text-[11px] leading-snug text-amber-950 dark:text-amber-200/95 flex items-start gap-2">
              <span className="size-1.5 rounded-full bg-amber-400 mt-1 shrink-0 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
              <span>{project.result}</span>
            </div>
          )}

          {/* Top 3-4 Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech) => (
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

      {/* Action Strip: Category indicator + GitHub Source */}
      <div className="border-t border-border/40 p-4 pt-3 flex items-center justify-between gap-2 bg-white/[0.01]">
        <div className="flex-1 font-mono text-[11px] text-muted-foreground flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          <span>{project.category}</span>
        </div>

        {sourceLink?.href && (
          <a
            href={sourceLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-border/70 bg-card/80 px-3.5 py-2 font-mono text-xs font-medium uppercase tracking-wider text-foreground transition-all hover:border-foreground/30 hover:bg-muted dark:hover:bg-white/[0.06] active:scale-[0.98]"
          >
            <Icons.github className="size-3.5" />
            <span>CODE</span>
            <ArrowUpRight className="size-3" />
          </a>
        )}
      </div>
    </div>
  );
}
