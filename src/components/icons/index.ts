/**
 * Barrel export for all icon modules.
 * Import from "@/components/icons" to access the unified `Icons` object.
 */
import { SocialIcons } from "./social";
import { GeneralIcons } from "./general";

export const Icons = {
  ...GeneralIcons,
  ...SocialIcons,
} as const;
