"use client";

import { Icons } from "@/components/icons";
import type { OtherProject } from "@/data/types";
import { ArrowUpRight, Search, X } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ArchiveTableProps {
  projects: readonly OtherProject[];
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
  const [activeModalProject, setActiveModalProject] = useState<OtherProject | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ["All", ...Array.from(set)];
  }, [projects]);

  // Filter and search logic
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
          p.result?.toLowerCase().includes(q)
      );
    }

    if (limit && limit > 0) {
      list = list.slice(0, limit);
    }

    return list;
  }, [projects, selectedFilter, searchQuery, limit]);

  return (
    <div className="space-y-4">
      {/* Optional Section Header */}
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

          {limit && projects.length > limit && (
            <Link
              href="/projects#archive"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-amber-500 hover:text-amber-400 transition-colors"
            >
              <span>EXPLORE ALL ARCHIVE BUILDS ({projects.length})</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          )}
        </div>
      )}

      {/* Filter and Search Bar */}
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

      {/* Responsive Table Container */}
      <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/50 backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-border/60 bg-muted/30 text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-3 font-semibold">System</th>
                <th className="px-4 py-3 font-semibold">Engineering Focus & Key Outcome</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Core Stack</th>
                <th className="px-4 py-3 font-semibold text-right">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 font-sans">
              {filteredProjects.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground font-mono text-xs">
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

                  return (
                    <tr
                      key={project.slug}
                      className="group transition-colors hover:bg-muted/40 dark:hover:bg-white/[0.02]"
                    >
                      {/* Project Name */}
                      <td className="px-4 py-3.5 font-sans font-bold text-foreground group-hover:text-amber-400 whitespace-nowrap align-top">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="hover:underline text-left"
                        >
                          {project.name}
                        </button>
                      </td>

                      {/* Merged Description + Outcome (No Ellipsis Truncation) */}
                      <td className="px-4 py-3.5 text-xs text-foreground/85 align-top">
                        <div className="space-y-1">
                          <div>
                            <span className="font-mono text-[10px] text-amber-500/90 dark:text-amber-400/90 mr-1.5 font-medium">
                              [{project.category}]
                            </span>
                            <span>{project.description}</span>
                          </div>
                          {project.result && (
                            <div className="font-mono text-[11px] text-muted-foreground">
                              ↳ <span className="text-amber-600 dark:text-amber-300/90">{project.result}</span>
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Tech Stack */}
                      <td className="px-4 py-3.5 hidden md:table-cell align-top whitespace-nowrap">
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

                      {/* Links - GitHub Source Code Only for Tier 3 */}
                      <td className="px-4 py-3.5 text-right whitespace-nowrap align-top">
                        <div className="flex items-center justify-end font-mono text-xs">
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
                  <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-amber-400">
                    {activeModalProject.category}
                  </span>
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
              {activeModalProject.result && (
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 font-mono text-xs text-amber-950 dark:text-amber-200">
                  <div className="font-bold text-[10px] uppercase tracking-wider text-amber-500 mb-0.5">
                    KEY OUTCOME / VERIFIABLE FACT:
                  </div>
                  {activeModalProject.result}
                </div>
              )}

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

              {/* Modal Actions - GitHub Source Only */}
              <div className="pt-2 flex items-center justify-end gap-2 border-t border-border/40">
                {activeModalProject.links
                  .filter((l) => l.kind !== "demo")
                  .map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card/80 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-muted dark:hover:bg-white/[0.06] hover:border-foreground/30 transition-all active:scale-[0.98]"
                    >
                      <Icons.github className="size-3.5 text-muted-foreground" />
                      <span>View GitHub Code</span>
                      <ArrowUpRight className="size-3 text-muted-foreground" />
                    </a>
                  ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
