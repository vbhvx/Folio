type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
}

export interface ActionLink extends NavigationItem {
  variant?: ButtonVariant;
}

export interface ProjectLink {
  label: string;
  kind: "source" | "demo";
  href?: string;
}

export interface FeaturedProject {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  description: string;
  longDescription?: string;
  architecture?: string;
  category?: string;
  technologies: readonly string[];
  outcomes: readonly string[];
  image: string;
  links: readonly ProjectLink[];
}

export interface OtherProject {
  slug: string;
  name: string;
  tagline?: string;
  description?: string;
  longDescription?: string;
  architecture?: string;
  category?: string;
  technologies: readonly string[];
  image?: string;
  links: readonly ProjectLink[];
}

interface SkillItem {
  name: string;
  usedIn?: readonly string[];
}

export interface ProofDetail {
  text: string;
  href?: string;
}

export interface SkillGroup {
  title: string;
  items: readonly SkillItem[];
}

export interface EngineeringMetric {
  label: string;
  value: string;
  prefix?: string;
  description: string;
  highlightClass: string;
}
