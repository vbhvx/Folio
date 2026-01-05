import type { NavigationItem } from "@/types";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const siteConfig = {
  name: "Vaibhav Saini",
  initials: "VS",
  url: "https://vaibhavdev.online/",
  location: "Delhi, India",
  email: "vaibhavsaini2409@gmail.com",
  avatarUrl: `${BASE_PATH}/profile/profile.png`,
  resumeUrl: `${BASE_PATH}/documents/resume.pdf`,
  role: "Full-Stack Engineer · Backend & AI Agent Systems",
  tagline: "Full-stack engineer · Backend & AI agent systems",
  intro: "I build products for the web, from the interface to the systems behind it.",
  metaDescription:
    "Vaibhav Saini — Full-stack engineer specializing in backend-heavy architectures and AI agent systems. Built with documented trade-offs, amortized O(1) algorithms, test suites, and public source.",
} as const;

export const socialLinks = {
  email: {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://linkedin.com/in/vaibhavsaini2/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/vbhvx",
  },
  x: {
    label: "X",
    href: "https://x.com/vaibhxdev",
  },
  cal: {
    label: "Book 20-min Call",
    href: "https://cal.com/vaibhavdev/intro",
  },
  resume: {
    label: "Resume",
    href: siteConfig.resumeUrl,
  },
} as const;

export const navigation: readonly NavigationItem[] = [
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Craft", href: "/#skills" },
  { label: "GitHub", href: "/#github" },
] as const;
