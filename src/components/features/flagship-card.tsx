"use client";

import { Icons } from "@/components/icons";
import type { FeaturedProject } from "@/data/types";
import { ArrowUpRight, BookOpen, Cpu, ExternalLink, KeyRound, Maximize2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FlagshipCardProps {
  project: FeaturedProject;
}

export function FlagshipCard({ project }: FlagshipCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const githubLink = project.links.find(
    (l) => l.kind === "source" || l.label.toLowerCase().includes("github")
  );
  const demoHref =
    project.demoUrl ||
    project.links.find((l) => l.kind === "demo")?.href ||
    githubLink?.href ||
    "#";
  const caseStudyHref = `/projects/${project.slug}`;

  // Close lightbox on Escape key
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

  return (
    <>
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-xl hover:shadow-black/40">
        {/* Visual Preview with Zoom Trigger */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/60 bg-black/50">
          <Image
            src={project.image}
            alt={`${project.name} architecture and user interface`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90 pointer-events-none" />

          {/* Metric Highlight Pill */}
          {project.metricsHighlight && (
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/50 bg-black/80 px-2.5 py-1 font-mono text-[10px] font-semibold text-amber-300 backdrop-blur-md shadow-lg shadow-black/40">
                <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>{project.metricsHighlight}</span>
              </span>
            </div>
          )}

          {/* Click to Zoom Hint Button */}
          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/70 px-2.5 py-1 font-mono text-[10px] font-medium text-white/80 opacity-0 backdrop-blur-md transition-all duration-200 group-hover:opacity-100 hover:bg-black/90 hover:text-white"
            aria-label={`View enlarged preview of ${project.name}`}
          >
            <Maximize2 className="size-3" />
            <span>ENLARGE</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {/* Header & Year */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <Link
                href={caseStudyHref}
                className="font-sans text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-amber-400 hover:underline"
              >
                {project.name}
              </Link>
              <p className="font-mono text-xs font-medium text-amber-500/90 dark:text-amber-400/90 mt-0.5">
                {project.tagline}
              </p>
            </div>
            <span className="shrink-0 rounded-md border border-border/70 bg-muted/60 dark:bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] font-medium text-muted-foreground">
              {project.year}
            </span>
          </div>

          {/* Complete Description (No Cutoffs) */}
          <p className="mt-3 text-xs leading-relaxed text-foreground/85">
            {project.description}
          </p>

          {/* Architecture Callout */}
          {project.architecture && (
            <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs">
              <div className="mb-1 flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                <Cpu className="size-3.5 shrink-0" />
                <span>ARCHITECTURE & TRADE-OFF</span>
              </div>
              <p className="font-sans text-[11px] leading-relaxed text-amber-950 dark:text-amber-200/90 font-medium">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Seeded Demo Access Note */}
          {project.demoCredentials && (
            <div className="mt-3 flex items-start gap-2 rounded-lg border border-border/60 bg-muted/40 dark:bg-white/[0.02] px-2.5 py-1.5 text-[11px] text-muted-foreground font-mono">
              <KeyRound className="size-3.5 shrink-0 text-emerald-400 mt-0.5" />
              <div className="leading-snug">
                {project.demoCredentials.role && (
                  <span className="font-semibold text-foreground mr-1.5">
                    {project.demoCredentials.role}:
                  </span>
                )}
                <span>{project.demoCredentials.note || `${project.demoCredentials.email} (No signup required)`}</span>
              </div>
            </div>
          )}

          {/* Technical Outcomes */}
          {project.outcomes && project.outcomes.length > 0 && (
            <ul className="mt-4 flex-1 space-y-2">
              {project.outcomes.slice(0, 3).map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                  <span className="leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/60 bg-muted/50 dark:bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors hover:border-amber-500/30 hover:text-foreground"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="rounded-md border border-border/60 bg-muted/50 dark:bg-white/[0.03] px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground/70">
                +{project.technologies.length - 6}
              </span>
            )}
          </div>

          {/* Action Strip (Live Demo · Case Study · GitHub) */}
          <div className="mt-5 border-t border-border/40 pt-4 space-y-2.5">
            <div className="grid grid-cols-3 gap-2">
              {/* 1. Live Demo */}
              <a
                href={demoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 rounded-lg border border-amber-500/40 bg-amber-500/10 px-2 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-amber-500 dark:text-amber-300 transition-all hover:bg-amber-500/20 hover:border-amber-400 active:scale-[0.98]"
              >
                <span>DEMO</span>
                <ArrowUpRight className="size-3 shrink-0" />
              </a>

              {/* 2. Case Study */}
              <Link
                href={caseStudyHref}
                className="flex items-center justify-center gap-1 rounded-lg border border-border/70 bg-card/80 px-2 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground transition-all hover:bg-muted dark:hover:bg-white/[0.06] hover:border-foreground/30 active:scale-[0.98]"
              >
                <BookOpen className="size-3 shrink-0 text-muted-foreground" />
                <span>STUDY</span>
              </Link>

              {/* 3. GitHub */}
              <a
                href={githubLink?.href || `https://github.com/vbhvx/${project.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 rounded-lg border border-border/70 bg-card/80 px-2 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground transition-all hover:bg-muted dark:hover:bg-white/[0.06] hover:border-foreground/30 active:scale-[0.98]"
              >
                <Icons.github className="size-3 shrink-0 text-muted-foreground" />
                <span>CODE</span>
              </a>
            </div>

            {/* Measured Result Footnote */}
            <div className="text-center font-mono text-[10px] text-muted-foreground/80 pt-0.5">
              {project.slug === "shipshape" && "First-run compile rate: 94.2% • Median time to live preview: ~14s (Turbopack benchmark)"}
              {project.slug === "fellow" && "Single-row write per reorder · Amortized O(1) complexity"}
              {project.slug === "trim" && "12-15 deterministic rules · 99.8% 3-tier delivery"}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-card p-2 shadow-2xl"
            >
              <div className="relative aspect-video w-[85vw] max-w-4xl overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-black/70 text-white/90 hover:bg-black hover:text-white transition-colors"
                aria-label="Close image preview"
              >
                <X className="size-4" />
              </button>

              <div className="flex items-center justify-between p-3 font-mono text-xs">
                <div>
                  <span className="font-bold text-foreground">{project.name}</span>
                  <span className="text-muted-foreground ml-2">— {project.tagline}</span>
                </div>
                <Link
                  href={caseStudyHref}
                  onClick={() => setLightboxOpen(false)}
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Open Full Case Study</span>
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
