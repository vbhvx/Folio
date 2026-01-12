"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  inView?: boolean;
}

export default function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.4,
  yOffset = 8,
}: BlurFadeProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0.2, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay: Math.min(delay, 0.15),
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
