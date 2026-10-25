import {
  aboutContent,
  contactContent,
  heroActions,
  heroContent,
  navigation,
  opportunityContent,
  proofContent,
  projectsContent,
  siteConfig,
  socialLinks,
  engineeringMetrics,
} from "@/data/site";
import { featuredProjects, otherProjects, allProjects, getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export const PORTFOLIO = {
  site: siteConfig,
  navigation,
  hero: heroContent,
  heroActions,
  engineeringMetrics,
  about: aboutContent,
  projectsContent,
  featuredProjects,
  otherProjects,
  allProjects,
  skillGroups,
  proof: proofContent,
  opportunity: opportunityContent,
  contact: contactContent,
  socialLinks,
} as const;

export { getProjectBySlug, getAllProjectSlugs };
