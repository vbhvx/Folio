import { PORTFOLIO } from "@/data/portfolio";

type Project = (typeof PORTFOLIO.allProjects)[number];

export function ProjectRow({ project, showLiveLink = false }: { project: Project; showLiveLink?: boolean }) {
  const source = project.links.find(link => link.kind === "source")?.href;
  if (!source) return null;

  const demo = "demoUrl" in project ? project.demoUrl : undefined;
  const live = showLiveLink && demo && !demo.startsWith("https://github.com/") ? demo : undefined;

  return <div className={`project-entry${live ? " has-live-link" : ""}`}>
    <a className="project-row" href={source} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3>{project.name}</h3>
        <span className="text-xs text-neutral-500">{project.category}</span>
        <span className="ml-auto text-sm text-neutral-500">GitHub ↗</span>
      </div>
      <p className="mt-2 max-w-[850px] text-sm leading-7 text-neutral-400 sm:text-[15px]">{project.description || project.tagline}</p>
    </a>
    {live && <a className="project-live-link" href={live} target="_blank" rel="noreferrer" aria-label={`View ${project.name} live`}>Live ↗</a>}
  </div>;
}
