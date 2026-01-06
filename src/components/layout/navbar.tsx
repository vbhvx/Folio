"use client";

import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { PORTFOLIO } from "@/data/portfolio";

const sections = PORTFOLIO.navigation;

export default function Navbar() {
  return <header className="reference-nav">
    <div className="mx-auto flex h-[60px] max-w-[1060px] items-center gap-5 px-6 sm:px-10">
      <Link href="/" className="flex shrink-0 items-center gap-2 text-sm font-medium">
        <span className="relative size-7 overflow-hidden rounded-full"><Image src={PORTFOLIO.site.avatarUrl} alt="" fill className="object-cover" /></span>
        {PORTFOLIO.site.name}
      </Link>
      <nav aria-label="Main navigation" className="ml-3 hidden items-center gap-6 text-sm text-neutral-400 sm:flex">
        {sections.map(section => <Link key={section.href} href={section.href}>{section.label}</Link>)}
      </nav>
      <div className="ml-auto flex items-center gap-5 text-neutral-400">
        <a href={PORTFOLIO.socialLinks.github.href} aria-label="GitHub profile" target="_blank" rel="noreferrer"><Github className="size-4" /></a>
        <a href={PORTFOLIO.socialLinks.x.href} aria-label="X" target="_blank" rel="noreferrer" className="text-sm">X</a>
        <span className="h-4 w-px bg-neutral-800" />
        <ModeToggle />
      </div>
    </div>
    <nav aria-label="Mobile navigation" className="mx-auto flex max-w-[1060px] justify-between gap-3 px-6 pb-3 text-xs text-neutral-400 sm:hidden">
      {sections.map(section => <Link key={section.href} href={section.href}>{section.label}</Link>)}
    </nav>
  </header>;
}
