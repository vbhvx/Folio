/**
 * General-purpose SVG icons used for UI elements.
 * Wraps lucide-react icons and custom SVGs.
 */
import { GlobeIcon, Folder, ArrowRight } from "lucide-react";
import type { IconProps } from "./types";

export const GeneralIcons = {
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  folder: (props: IconProps) => <Folder {...props} />,
  arrowRight: (props: IconProps) => <ArrowRight {...props} />,
} as const;
