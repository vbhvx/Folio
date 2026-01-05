export * from "./project";

export type ButtonVariant =
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

export interface SkillItem {
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

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  coursework?: readonly string[];
}

export interface ExperienceItem {
  role: string;
  organization?: string;
  period: string;
  highlights: readonly string[];
}
