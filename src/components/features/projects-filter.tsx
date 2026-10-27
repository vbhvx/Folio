"use client";

import { RepositoryCard } from "@/components/features/repository-card";
import type { OtherProject, ProjectCategory } from "@/data/types";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectsFilterProps {
  projects: readonly OtherProject[];
}

type FilterOption = "All" | ProjectCategory;

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("All");

  const categories: FilterOption[] = ["All", "Backend", "AI Agents", "Full-Stack", "Testing / QA"];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") return projects;
    return projects.filter((p) => p.category === selectedFilter);
  }, [projects, selectedFilter]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    projects.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, [projects]);

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedFilter === cat;
          const count = counts[cat] || 0;

          return (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-xs transition-all ${
                isActive
                  ? "border-amber-500 bg-amber-500/15 text-amber-500 dark:text-amber-300 shadow-sm shadow-amber-500/10 font-semibold"
                  : "border-border/60 bg-card/60 text-muted-foreground hover:border-foreground/30 hover:bg-muted dark:hover:bg-white/[0.04] hover:text-foreground"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                  isActive
                    ? "bg-amber-500/20 text-amber-500 dark:text-amber-300"
                    : "bg-muted dark:bg-white/[0.06] text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Filtered Projects */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={project.slug}
            >
              <RepositoryCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
