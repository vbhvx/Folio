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
  kind: "source" | "demo" | "video" | "case-study";
  href?: string;
}

export interface CaseStudyDecision {
  title: string;
  rationale: string;
  rejected: string;
}

export interface CaseStudyBenchmark {
  metric: string;
  before?: string;
  after: string;
  notes: string;
}

export interface CaseStudyFlowStep {
  step: string;
  detail: string;
}

export interface CaseStudy {
  problem: string;
  constraints: readonly string[];
  architectureFlow: readonly CaseStudyFlowStep[];
  decisions: readonly CaseStudyDecision[];
  benchmarks: readonly CaseStudyBenchmark[];
  tradeOffsAndV2: string;
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
  metricsHighlight?: string;
  demoUrl?: string;
  demoCredentials?: {
    role?: string;
    email?: string;
    password?: string;
    note?: string;
  };
  videoUrl?: string;
  technologies: readonly string[];
  outcomes: readonly string[];
  caseStudy?: CaseStudy;
  image: string;
  links: readonly ProjectLink[];
}

export type ProjectTier = 1 | 2 | 3;
export type ProjectCategory = "Backend" | "AI Agents" | "Full-Stack" | "Testing / QA";

export interface OtherProject {
  slug: string;
  name: string;
  tagline?: string;
  description?: string;
  longDescription?: string;
  architecture?: string;
  category: ProjectCategory;
  technologies: readonly string[];
  image?: string;
  links: readonly ProjectLink[];
  year?: string;
  tier?: ProjectTier;
  result?: string;
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
  coursework: readonly string[];
}

export interface ExperienceItem {
  role: string;
  organization?: string;
  period: string;
  highlights: readonly string[];
}

