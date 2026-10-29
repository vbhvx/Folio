"use client";

import { Icons } from "@/components/icons";
import type { FeaturedProject, OtherProject } from "@/data/types";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type AnyProject = FeaturedProject | OtherProject;

interface ArchiveTableProps {
  projects: readonly AnyProject[];
  showFilters?: boolean;
  showSearch?: boolean;
  limit?: number;
  title?: string;
  subtitle?: string;
}

export function ArchiveTable({
  projects,
  showFilters = true,
  showSearch = true,
  limit,
  title,
  subtitle,
}: ArchiveTableProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<AnyProject | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);

  // Monitor scroll position to toggle the subtle bottom fade hint
  const checkScrollPosition = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    // Check if scrolled within 8px of the bottom or if content does not overflow
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight <= 8;
    setIsScrolledToEnd(atBottom);
  }, []);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ["All", ...Array.from(set)];
  }, [projects]);

  // Filter and search
  const filteredProjects = useMemo(() => {
    let list = [...projects];

    if (selectedFilter !== "All") {
      list = list.filter((p) => p.category === selectedFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q)) ||
          p.category?.toLowerCase().includes(q) ||
          ('result' in p && p.result?.toLowerCase().includes(q))
      );
    }

    if (limit && limit > 0) {
      list = list.slice(0, limit);
    }

    return list;
  }, [projects, selectedFilter, searchQuery, limit]);

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  }, [checkScrollPosition, filteredProjects]);

  return (
    <div className="space-y-4">
      {/* Section Header with 'Showing 5 of N · scroll for more' indicator */}
      {(title || subtitle) && (
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border/60 pb-4">
          <div>
            {title && (
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground sm:text-base">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
            )}
          </div>

          {/* Small non-intrusive status indicator */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground shrink-0">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 dark:bg-white/[0.03] px-2.5 py-1 text-muted-foreground">
              <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>
                {filteredProjects.length > 5
                  ? `Showing 5 of ${filteredProjects.length} · scroll for more`
                  : `Showing ${filteredProjects.length} of ${filteredProjects.length}`}
              </span>
            </span>
          </div>
        </div>
      )}

      {/* Filter and Search Bar (when enabled) */}
      {(showFilters || showSearch) && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {showFilters && (
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => {
                const isActive = selectedFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedFilter(cat)}
                    className={`rounded-lg border px-3 py-1 font-mono text-xs transition-all ${
                      isActive
                        ? "border-amber-500 bg-amber-500/15 text-amber-400 font-semibold"
                        : "border-border/60 bg-card/60 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}

          {showSearch && (
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 size-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search systems or stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border/60 bg-card/60 py-1.5 pl-8 pr-3 font-mono text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Outer Box Container - Exact same outer dimensions, border, radius */}
      <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/50 backdrop-blur-xl">
        {/* Scrollable Viewport - Fixed max-height (~5 rows rendered), thin custom scrollbar */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollPosition}
          tabIndex={0}
          role="region"
          aria-label="Engineering archive and projects repertoire"
          className="max-h-[350px] overflow-y-auto overflow-x-auto custom-scrollbar focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <table className="w-full min-w-[700px] text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-border/60 bg-muted/40 text-[11px] uppercase tracking-wider text-muted-foreground">
                <th
                  scope="col"
                  className="sticky top-0 z-10 bg-card/95 backdrop-blur-md px-4 py-3 font-semibold shadow-[0_1px_0_0_hsl(var(--border)/0.6)]"
                >
                  SYSTEM
                </th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 bg-card/95 backdrop-blur-md px-4 py-3 font-semibold shadow-[0_1px_0_0_hsl(var(--border)/0.6)]"
                >
                  ENGINEERING FOCUS & ONE-LINER
                </th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 bg-card/95 backdrop-blur-md px-4 py-3 font-semibold hidden md:table-cell shadow-[0_1px_0_0_hsl(var(--border)/0.6)]"
                >
                  KEY RESULT
                </th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 bg-card/95 backdrop-blur-md px-4 py-3 font-semibold hidden lg:table-cell shadow-[0_1px_0_0_hsl(var(--border)/0.6)]"
                >
                  CORE STACK
                </th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 bg-card/95 backdrop-blur-md px-4 py-3 font-semibold text-right shadow-[0_1px_0_0_hsl(var(--border)/0.6)]"
                >
                  LINKS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 font-sans">
              {filteredProjects.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-8 text-center text-muted-foreground font-mono text-xs"
                  >
                    No matching systems found in archive.
                  </td>
                </tr>
              ) : (
                filteredProjects.map((project) => {
                  const sourceLink = project.links.find(
                    (l) =>
                      l.kind === "source" ||
                      l.label.toLowerCase().includes("github") ||
                      l.label.toLowerCase().includes("source")
                  );
                  const isTier3 = 'tier' in project && project.tier === 3;
                  const demoLink = !isTier3
                    ? project.links.find(
                        (l) => l.kind === "demo" || l.label.toLowerCase().includes("demo")
                      )
                    : undefined;

                  const keyResult =
                    ('result' in project && project.result)
                      ? project.result
                      : ('metricsHighlight' in project && project.metricsHighlight)
                        ? project.metricsHighlight
                        : ('architecture' in project ? project.architecture : "Verified architecture & test harness");

                  return (
                    <tr
                      key={project.slug}
                      className="group transition-colors hover:bg-muted/40 dark:hover:bg-white/[0.02]"
                    >
                      {/* 1. System Name */}
                      <td className="px-4 py-3.5 font-sans font-bold text-foreground group-hover:text-amber-400 whitespace-nowrap align-top">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="hover:underline text-left font-semibold"
                        >
                          {project.name}
                        </button>
                      </td>

                      {/* 3. Engineering Focus & One-Liner */}
                      <td className="px-4 py-3.5 text-xs text-foreground/80 max-w-xs sm:max-w-md align-top">
                        {project.category && (
                          <span className="font-mono text-[10px] text-amber-500/90 dark:text-amber-400/90 mr-1.5 font-semibold">
                            [{project.category}]
                          </span>
                        )}
                        <span className="leading-relaxed">{project.description}</span>
                      </td>

                      {/* 4. Key Result */}
                      <td className="px-4 py-3.5 text-xs font-mono text-emerald-400 dark:text-emerald-300 hidden md:table-cell max-w-xs align-top">
                        <span className="line-clamp-2">{keyResult}</span>
                      </td>

                      {/* 5. Core Stack */}
                      <td className="px-4 py-3.5 hidden lg:table-cell whitespace-nowrap align-top">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="rounded border border-border/50 bg-muted/60 dark:bg-white/[0.02] px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* 6. Links */}
                      <td className="px-4 py-3.5 text-right whitespace-nowrap align-top">
                        <div className="flex items-center justify-end gap-1.5 font-mono text-xs">
                          {demoLink?.href && (
                            <a
                              href={demoLink.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded border border-amber-500/40 bg-amber-500/10 px-2 py-1 text-[11px] font-semibold text-amber-500 dark:text-amber-300 hover:bg-amber-500/20 hover:border-amber-400 transition-all active:scale-[0.98]"
                              title="Open Live Deployment"
                            >
                              <span>DEMO</span>
                              <ArrowUpRight className="size-2.5" />
                            </a>
                          )}
                          {sourceLink?.href && (
                            <a
                              href={sourceLink.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-card/80 px-2.5 py-1 text-[11px] font-semibold text-foreground hover:bg-muted dark:hover:bg-white/[0.06] hover:border-foreground/30 transition-all font-mono active:scale-[0.98]"
                              title="View GitHub Repository"
                            >
                              <Icons.github className="size-3 text-muted-foreground" />
                              <span>CODE</span>
                              <ArrowUpRight className="size-2.5 text-muted-foreground" />
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Subtle Fade at Bottom as 'More Below' Hint (Hides on Scroll to End) */}
        <div
          className={`pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-300 ${
            isScrolledToEnd ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        />
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg rounded-2xl border border-border/80 bg-card p-6 shadow-2xl backdrop-blur-2xl space-y-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute right-4 top-4 rounded-lg p-1 text-muted-foreground hover:text-foreground hover:bg-muted"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>

              {/* Modal Header */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {activeModalProject.category && (
                    <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-amber-400">
                      {activeModalProject.category}
                    </span>
                  )}
                </div>
                <h4 className="font-sans text-2xl font-bold text-foreground">
                  {activeModalProject.name}
                </h4>
                {activeModalProject.tagline && (
                  <p className="font-mono text-xs text-amber-500 dark:text-amber-400">
                    {activeModalProject.tagline}
                  </p>
                )}
              </div>

              {/* Summary */}
              <p className="text-sm leading-relaxed text-foreground/85">
                {activeModalProject.longDescription || activeModalProject.description}
              </p>

              {/* Key Result / Benchmark */}
              {('result' in activeModalProject && activeModalProject.result) ? (
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 font-mono text-xs text-amber-950 dark:text-amber-200">
                  <div className="font-bold text-[10px] uppercase tracking-wider text-amber-500 mb-0.5">
                    KEY OUTCOME / VERIFIABLE FACT:
                  </div>
                  {activeModalProject.result}
                </div>
              ) : ('metricsHighlight' in activeModalProject && activeModalProject.metricsHighlight) ? (
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 font-mono text-xs text-amber-950 dark:text-amber-200">
                  <div className="font-bold text-[10px] uppercase tracking-wider text-amber-500 mb-0.5">
                    KEY METRIC HIGHLIGHT:
                  </div>
                  {activeModalProject.metricsHighlight}
                </div>
              ) : null}

              {/* Tech Stack */}
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
                  TECHNOLOGIES:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 font-mono text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex items-center justify-end gap-2 border-t border-border/40">
                {activeModalProject.links.map((link) => {
                  const isDemo = link.kind === "demo";
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all active:scale-[0.98] ${
                        isDemo
                          ? "border-amber-500/40 bg-amber-500/15 text-amber-500 dark:text-amber-300 hover:bg-amber-500/25 hover:border-amber-400"
                          : "border-border/80 bg-card/80 text-foreground hover:bg-muted dark:hover:bg-white/[0.06] hover:border-foreground/30"
                      }`}
                    >
                      {!isDemo && <Icons.github className="size-3.5 text-muted-foreground" />}
                      <span>{link.label}</span>
                      <ArrowUpRight className="size-3 text-muted-foreground" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
