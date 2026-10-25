"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  as?: "div" | "h1" | "h2" | "p";
  variant?: {
    hidden: { y: number; opacity?: number };
    visible: { y: number; opacity?: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
}

const BlurFadeText = ({
  text,
  className,
  as: Component = "div",
  variant,
  delay = 0,
  yOffset = 8,
}: BlurFadeTextProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(6px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  const combinedVariants = variant || defaultVariants;

  if (!mounted) {
    return <Component className={cn("block", className)}>{text}</Component>;
  }

  return (
    <Component className={cn("block", className)}>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={combinedVariants}
        transition={{
          delay: 0.02 + delay,
          duration: 0.45,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </Component>
  );
};

export default BlurFadeText;
