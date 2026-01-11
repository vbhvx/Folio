import type { Metadata } from "next";
import Link from "next/link";
import { ProjectRow } from "@/components/projects";
import { PortfolioFooter } from "@/components/layout";
import { allProjects, pinnedProjectSlugs } from "@/data/projects";

export const metadata: Metadata = {
  title: "All projects",
  description: "Software projects by Vaibhav Saini, with direct links to their GitHub repositories.",
};

const pinned = pinnedProjectSlugs.flatMap(slug => allProjects.filter(project => project.slug === slug));
const projects = [...pinned, ...allProjects.filter(project => !pinnedProjectSlugs.some(slug => slug === project.slug))];

export default function ProjectsPage() {
  return <main id="main" className="wrap reference-page mx-auto max-w-[1060px] px-6 sm:px-10">
    <header className="pt-20 sm:pt-28">
      <Link href="/" className="quiet-link text-sm text-neutral-500">← Back to home</Link>
      <h1 className="mt-9 text-4xl font-semibold tracking-[-.055em] sm:text-5xl">All projects</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-400">Select a project to view its source on GitHub.</p>
    </header>

    <section className="reference-section mt-12" aria-label="All projects">
      <div className="project-list">{projects.map(project => <ProjectRow key={project.slug} project={project} />)}</div>
    </section>

    <PortfolioFooter />
  </main>;
}
