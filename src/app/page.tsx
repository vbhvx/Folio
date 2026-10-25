import BlurFade from "@/components/magicui/blur-fade";
import { FlagshipCard } from "@/components/features/flagship-card";
import { RepositoryCard } from "@/components/features/repository-card";
import { Icons } from "@/components/icons";
import { PORTFOLIO } from "@/data/portfolio";
import {
  ArrowDownRight,
  Code2,
  Cpu,
  Database,
  FileText,
  Globe,
  Layers,
  Mail,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-4 pb-28 pt-8 sm:px-6 lg:px-8">
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section id="about" className="pt-4">
        <BlurFade delay={0.04}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Left: Avatar + Identity + Actions */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* Avatar with Live Beacon */}
              <div className="relative shrink-0">
                <div className="relative size-28 overflow-hidden rounded-2xl border-2 border-white/10 bg-card shadow-2xl ring-1 ring-white/5 sm:size-32">
                  <Image
                    src={PORTFOLIO.site.avatarUrl}
                    alt={PORTFOLIO.site.name}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                {/* Emerald Live Beacon */}
                <span className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full bg-background p-0.5">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  </span>
                </span>
              </div>

              {/* Bio & Details */}
              <div className="space-y-3">
                {/* Kicker */}
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground/80 font-medium">
                  {PORTFOLIO.hero.kicker}
                </p>

                {/* Name */}
                <h1 className="font-sans text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {PORTFOLIO.hero.title}
                </h1>

                {/* Subtitle / Philosophy */}
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <span className="font-medium text-foreground">
                    {PORTFOLIO.hero.subtitle}
                  </span>{" "}
                  {PORTFOLIO.hero.summary}
                </p>

                {/* Technical CTA Action Strip */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  {/* Resume PDF Button (Amber accented) */}
                  <a
                    href={PORTFOLIO.site.resumeUrl}
                    download="Vaibhav_Saini_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 shadow-sm transition-all hover:bg-amber-500/20 hover:border-amber-500 active:scale-[0.98]"
                  >
                    <FileText className="size-3.5" />
                    <span>RESUME .PDF</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href={PORTFOLIO.socialLinks.github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-foreground/30 hover:bg-muted dark:hover:border-white/30 dark:hover:bg-white/[0.04] active:scale-[0.98]"
                  >
                    <Icons.github className="size-3.5" />
                    <span>GITHUB</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={PORTFOLIO.socialLinks.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-foreground/30 hover:bg-muted dark:hover:border-white/30 dark:hover:bg-white/[0.04] active:scale-[0.98]"
                  >
                    <Icons.linkedin className="size-3.5" />
                    <span>LINKEDIN</span>
                  </a>

                  {/* Direct Email */}
                  <a
                    href={PORTFOLIO.socialLinks.email.href}
                    className="flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 px-4 py-2 font-mono text-xs text-muted-foreground transition-all hover:border-foreground/30 hover:bg-muted hover:text-foreground dark:hover:border-white/30 dark:hover:bg-white/[0.04] active:scale-[0.98]"
                  >
                    <Mail className="size-3.5" />
                    <span>{PORTFOLIO.site.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Availability Status Card */}
            <div className="shrink-0">
              <div className="rounded-2xl border border-border/70 bg-card/60 p-4 backdrop-blur-xl shadow-lg shadow-black/20">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                  AVAILABILITY STATUS
                </div>
                <div className="flex items-center gap-2 font-mono text-sm font-semibold text-emerald-400">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <span>{PORTFOLIO.hero.availabilityLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* ========================================================
          TELEMETRY & ENGINEERING METRICS STRIP
          ======================================================== */}
      <section id="telemetry">
        <BlurFade delay={0.08}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PORTFOLIO.engineeringMetrics.map((metric) => (
              <div
                key={metric.label}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-xl transition-all duration-300 hover:border-border hover:bg-card/75 hover:shadow-lg hover:shadow-black/20"
              >
                <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {metric.label}
                </div>
                <div className="flex items-baseline gap-2">
                  <div
                    className={`font-mono text-3xl font-extrabold tracking-tight ${metric.highlightClass}`}
                  >
                    {metric.prefix && (
                      <span className="mr-1 inline-block text-xl">
                        {metric.prefix}
                      </span>
                    )}
                    {metric.value}
                  </div>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {metric.description}
                </p>
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* ========================================================
          FLAGSHIP SHIPPED SYSTEMS
          ======================================================== */}
      <section id="projects" className="space-y-6">
        <BlurFade delay={0.12}>
          <div className="flex flex-col justify-between gap-2 border-b border-border/60 pb-4 sm:flex-row sm:items-center">
            <h2 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground sm:text-base">
              FLAGSHIP SHIPPED SYSTEMS
            </h2>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {PORTFOLIO.featuredProjects.length} FLAGSHIP REPOSITORIES
            </div>
          </div>
        </BlurFade>

        {/* 3-Column Flagship Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.featuredProjects.map((project, idx) => (
            <BlurFade key={project.slug} delay={0.14 + idx * 0.05}>
              <FlagshipCard project={project} />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ========================================================
          OTHER SHIPPED SYSTEMS & REPOSITORIES
          ======================================================== */}
      {PORTFOLIO.otherProjects && PORTFOLIO.otherProjects.length > 0 && (
        <section id="repositories" className="space-y-6">
          <BlurFade delay={0.2}>
            <div className="flex flex-col justify-between gap-2 border-b border-border/60 pb-4 sm:flex-row sm:items-center">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground sm:text-base">
                OTHER SHIPPED SYSTEMS & REPOSITORIES
              </h3>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {PORTFOLIO.otherProjects.length} REPOSITORIES
              </div>
            </div>
          </BlurFade>

          {/* 4x2 Repository Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PORTFOLIO.otherProjects.map((project, idx) => (
              <BlurFade key={project.slug} delay={0.22 + idx * 0.03}>
                <RepositoryCard project={project} />
              </BlurFade>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================
          TECHNICAL STACK & COMPETENCIES
          ======================================================== */}
      <section id="skills" className="space-y-6">
        <BlurFade delay={0.26}>
          <div className="flex flex-col justify-between gap-2 border-b border-border/60 pb-4 sm:flex-row sm:items-center">
            <h2 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground sm:text-base">
              TECHNICAL STACK & COMPETENCIES
            </h2>
            <div className="font-mono text-xs font-semibold tracking-wider text-emerald-400">
              PRODUCTION VERIFIED
            </div>
          </div>
        </BlurFade>

        {/* 4 Group Columns */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO.skillGroups.map((group, groupIdx) => {
            // Icon mapping for high technical clarity
            let GroupIcon = Code2;
            if (group.title.includes("FRONTEND")) GroupIcon = Globe;
            if (group.title.includes("BACKEND")) GroupIcon = Cpu;
            if (group.title.includes("DATABASES") || group.title.includes("INFRA"))
              GroupIcon = Database;

            return (
              <BlurFade key={group.title} delay={0.28 + groupIdx * 0.04}>
                <div className="group h-full rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/30 hover:bg-card/70 hover:shadow-lg hover:shadow-black/20">
                  <div className="mb-4 flex items-center gap-2 border-b border-border/40 pb-3">
                    <GroupIcon className="size-4 text-amber-500/90" />
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-lg border border-border/60 bg-muted/60 dark:bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted-foreground transition-all duration-200 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-200"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          ENGINEERING STANDARDS & PROOF STRIP
          ======================================================== */}
      <section id="proof" className="space-y-4">
        <BlurFade delay={0.32}>
          <div className="rounded-2xl border border-border/70 bg-card/40 p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                <ShieldCheck className="size-4 text-emerald-400" />
                <span>{PORTFOLIO.proof.title}</span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                VERIFIABLE ARTIFACTS
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {PORTFOLIO.proof.details.map((detail, idx) => (
                <a
                  key={idx}
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-3 rounded-xl border border-border/60 bg-muted/40 dark:bg-white/[0.02] p-3.5 transition-all hover:border-amber-500/40 hover:bg-amber-500/5 dark:hover:bg-white/[0.04]"
                >
                  <span className="text-xs leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                    {detail.text}
                  </span>
                  <ArrowDownRight className="size-3.5 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-amber-600 dark:group-hover:text-amber-400" />
                </a>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      {/* ========================================================
          GET IN TOUCH · OPEN TO BUILD
          ======================================================== */}
      <section id="contact" className="space-y-6">
        <BlurFade delay={0.36}>
          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur-xl shadow-xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <h2 className="font-mono text-base font-bold uppercase tracking-wider text-foreground sm:text-lg">
                  GET IN TOUCH · OPEN TO BUILD
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {PORTFOLIO.contact.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Email Button */}
                <a
                  href={PORTFOLIO.socialLinks.email.href}
                  className="flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 shadow-sm transition-all hover:bg-amber-500/20 hover:border-amber-500 active:scale-[0.98]"
                >
                  <Mail className="size-3.5" />
                  <span>EMAIL</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={PORTFOLIO.socialLinks.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border/70 bg-muted/60 dark:bg-white/[0.03] px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-foreground/30 hover:bg-muted dark:hover:border-white/30 dark:hover:bg-white/[0.06] active:scale-[0.98]"
                >
                  <Icons.linkedin className="size-3.5" />
                  <span>LINKEDIN</span>
                </a>

                {/* GitHub */}
                <a
                  href={PORTFOLIO.socialLinks.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border/70 bg-muted/60 dark:bg-white/[0.03] px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-foreground/30 hover:bg-muted dark:hover:border-white/30 dark:hover:bg-white/[0.06] active:scale-[0.98]"
                >
                  <Icons.github className="size-3.5" />
                  <span>GITHUB</span>
                </a>

                {/* Resume */}
                <a
                  href={PORTFOLIO.site.resumeUrl}
                  download="Vaibhav_Saini_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border/70 bg-muted/60 dark:bg-white/[0.03] px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-foreground/30 hover:bg-muted dark:hover:border-white/30 dark:hover:bg-white/[0.06] active:scale-[0.98]"
                >
                  <FileText className="size-3.5" />
                  <span>RESUME</span>
                </a>
              </div>
            </div>

            {/* Subtle glow background */}
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-amber-500/5 blur-3xl" />
          </div>
        </BlurFade>
      </section>

      {/* ========================================================
          FOOTER & TELEMETRY STATUS
          ======================================================== */}
      <footer className="border-t border-border/50 pt-8 pb-4">
        <BlurFade delay={0.4}>
          <div className="flex flex-col items-center justify-between gap-4 font-mono text-xs text-muted-foreground sm:flex-row">
            <div>
              © 2026 {PORTFOLIO.site.name}
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                SYSTEM 100% OPERATIONAL
              </span>
              <span>·</span>
              <a
                href={PORTFOLIO.socialLinks.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors uppercase tracking-wider text-[11px]"
              >
                DELHI, INDIA · GITHUB.COM/VBHVX
              </a>
            </div>
          </div>
        </BlurFade>
      </footer>
    </main>
  );
}
