"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function LiveClock() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(now);
      setTimeString(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-border/40 bg-card/40 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur-md transition-colors hover:border-amber-500/30 hover:text-foreground">
      <Clock className="size-3 text-amber-500/80 animate-pulse" />
      <span suppressHydrationWarning className="tabular-nums font-medium text-foreground/90">
        {timeString || "10:35 PM"}
      </span>
      <span className="text-[10px] text-muted-foreground/75 uppercase tracking-wider">
        Delhi, IND
      </span>
    </div>
  );
}
