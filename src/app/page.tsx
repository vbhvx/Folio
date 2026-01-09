import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO } from "@/data/portfolio";
import { ProjectRow } from "@/components/projects";
import { RotatingGreeting } from "@/components/home";
import { GitHubContributions } from "@/components/github";
import { PortfolioFooter } from "@/components/layout";

const projects = PORTFOLIO.allProjects.slice(0, 4);
const sourceHref = (slug: string) => PORTFOLIO.allProjects.find(project => project.slug === slug)?.links.find(link => link.kind === "source")?.href ?? PORTFOLIO.socialLinks.github.href;

export default function Page() {
  return <main id="main" className="wrap reference-page mx-auto max-w-[1060px] px-6 sm:px-10">
    <section className="intro pt-20 sm:pt-28">
      <div className="flex items-center gap-5"><div className="relative size-16 shrink-0 overflow-hidden rounded-2xl sm:size-20"><Image src={PORTFOLIO.site.avatarUrl} alt={PORTFOLIO.site.name} fill priority className="object-cover" /></div><div><p className="mb-1 text-sm text-neutral-500"><RotatingGreeting /></p><h1 className="text-3xl font-semibold tracking-[-.055em] sm:text-[42px]">{PORTFOLIO.site.name}</h1><p className="mt-1 text-sm text-neutral-400 sm:text-base">{PORTFOLIO.site.tagline}</p></div></div>
      <p className="intro-copy mt-10 text-[19px] leading-[1.8] tracking-[-.025em] sm:text-[23px]">{PORTFOLIO.site.intro} I shipped <a href={sourceHref("shipshape")} target="_blank" rel="noreferrer" className="inline-chip">Shipshape</a>, an AI app builder that turns a prompt into a running, multi-file Next.js app, and build backend and data systems: <a href={sourceHref("fellow")} target="_blank" rel="noreferrer" className="inline-chip">Fellow</a>, <a href={sourceHref("latch")} target="_blank" rel="noreferrer" className="inline-chip">Latch</a>, and <a href={sourceHref("overlook")} target="_blank" rel="noreferrer" className="inline-chip">OverLook</a>.</p>
      <div className="mt-7 flex gap-7 text-sm"><a className="quiet-link" href={PORTFOLIO.socialLinks.cal.href} target="_blank" rel="noreferrer">Book a call ↗</a><a className="quiet-link" href="#contact">Email me</a></div>
    </section>
    <section id="projects" className="reference-section"><div className="section-title"><span>01</span><h2>Things I’ve built</h2></div><div className="project-list">{projects.map(project => <ProjectRow key={project.slug} project={project} showLiveLink />)}</div><div className="mt-8 flex justify-center"><Link href="/projects" className="show-more-projects">Show more projects <span aria-hidden="true">↗</span></Link></div></section>
    <section id="about" className="reference-section"><div className="section-title"><span>02</span><h2>Experience</h2></div><div className="project-list">{PORTFOLIO.about.experience.map(item => <div className="experience-row" key={item.role}><div><h3>{item.role}</h3><p className="mt-1 text-sm text-neutral-400">{"organization" in item ? item.organization : "Freelance"}</p></div><div className="text-sm text-neutral-400"><p className="text-neutral-500">{item.period}</p><p className="mt-2 leading-6">{item.highlights[0]}</p></div></div>)}</div></section>
    <section id="education" className="reference-section"><div className="section-title"><span>03</span><h2>Education</h2></div><div className="project-list"><div className="experience-row"><div><h3>{PORTFOLIO.about.education.institution}</h3><p className="mt-1 text-sm text-neutral-400">{PORTFOLIO.about.education.location}</p></div><div className="text-sm text-neutral-400"><p className="text-neutral-500">{PORTFOLIO.about.education.period}</p><p className="mt-2">{PORTFOLIO.about.education.degree}</p></div></div></div></section>
    <section id="skills" className="reference-section"><div className="section-title"><span>04</span><h2>How I work</h2><a className="ml-auto text-sm text-neutral-500 hover:text-foreground" href={PORTFOLIO.site.resumeUrl} target="_blank" rel="noreferrer">Resume ↗</a></div><p className="max-w-[900px] text-lg leading-8 text-neutral-400">Mostly <strong>TypeScript</strong>, <strong>React</strong> and <strong>Next.js</strong>, with <strong>Python</strong> and <strong>FastAPI</strong> for services, <strong>PostgreSQL</strong> for data, and automated tests around the work I ship.</p></section>
    <section id="github" className="reference-section"><div className="section-title"><span>05</span><h2>GitHub Activity</h2><a className="ml-auto text-sm text-neutral-500 hover:text-foreground" href={PORTFOLIO.socialLinks.github.href} target="_blank" rel="noreferrer">@vbhvx ↗</a></div><GitHubContributions /></section>
    <PortfolioFooter />
  </main>;
}
