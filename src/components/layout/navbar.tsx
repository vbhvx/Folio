"use client";

import { ModeToggle } from "@/components/layout/mode-toggle";
import { LiveClock } from "@/components/layout/live-clock";
import { buttonVariants } from "@/components/ui/button";
import { PORTFOLIO } from "@/data/portfolio";
import { Icons } from "@/components/icons";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen, closeMobile]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-3 z-50 mx-auto w-full max-w-6xl px-3 sm:px-6 lg:px-8">
      <div className="glass rounded-2xl border border-border/60 bg-card/75 px-3 py-2.5 shadow-xl shadow-black/20 backdrop-blur-xl sm:px-4">
        <div className="flex items-center justify-between gap-3">
          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 md:flex">
            {PORTFOLIO.navigation.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  download={item.download ? "Vaibhav_Saini_Resume.pdf" : undefined}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="rounded-lg px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-all duration-200 hover:bg-muted dark:hover:bg-white/[0.04] hover:text-foreground"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-all duration-200 hover:bg-muted dark:hover:bg-white/[0.04] hover:text-foreground"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right: Live Clock + Socials + Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-2 ml-auto md:ml-0">
            <div className="hidden sm:block">
              <LiveClock />
            </div>

            <div className="flex items-center gap-1 border-l border-border/40 pl-2">
              <a
                href={PORTFOLIO.site.resumeUrl}
                download="Vaibhav_Saini_Resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-8 rounded-lg text-muted-foreground hover:bg-muted dark:hover:bg-white/[0.06] hover:text-foreground"
                )}
                aria-label="Download Resume (PDF)"
                title="Download Resume (PDF)"
              >
                <FileText className="size-4" />
              </a>
              <a
                href={PORTFOLIO.socialLinks.linkedin.href}
                rel="noopener noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-8 rounded-lg text-muted-foreground hover:bg-muted dark:hover:bg-white/[0.06] hover:text-foreground"
                )}
                aria-label="LinkedIn"
              >
                <Icons.linkedin className="size-4" />
              </a>
              <a
                href={PORTFOLIO.socialLinks.github.href}
                rel="noopener noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-8 rounded-lg text-muted-foreground hover:bg-muted dark:hover:bg-white/[0.06] hover:text-foreground"
                )}
                aria-label="GitHub"
              >
                <Icons.github className="size-4" />
              </a>
              <a
                href={PORTFOLIO.socialLinks.x.href}
                rel="noopener noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-8 rounded-lg text-muted-foreground hover:bg-muted dark:hover:bg-white/[0.06] hover:text-foreground"
                )}
                aria-label="X (Twitter)"
              >
                <Icons.x className="size-4" />
              </a>
              <ModeToggle />
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-8 rounded-lg md:hidden hover:bg-muted dark:hover:bg-white/[0.06]"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="flex h-4 w-4 flex-col items-center justify-center gap-[3px]">
                <motion.span
                  className="block h-[1.5px] w-3.5 rounded-full bg-foreground"
                  animate={mobileOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-[1.5px] w-3.5 rounded-full bg-foreground"
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="block h-[1.5px] w-3.5 rounded-full bg-foreground"
                  animate={mobileOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />

            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative z-50 mt-2 rounded-2xl border border-border/70 bg-card/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="mb-3 flex items-center justify-between border-b border-border/40 pb-3">
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Navigation
                </div>
                <LiveClock />
              </div>

              <div className="flex flex-col gap-1">
                {PORTFOLIO.navigation.map((item) =>
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      download={item.download ? "Vaibhav_Saini_Resume.pdf" : undefined}
                      rel="noopener noreferrer"
                      target="_blank"
                      onClick={closeMobile}
                      className="flex items-center justify-between rounded-xl px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground/80 transition-colors hover:bg-amber-500/10 hover:text-amber-400"
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] text-muted-foreground/60">↗</span>
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobile}
                      className="rounded-xl px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-foreground/80 transition-colors hover:bg-amber-500/10 hover:text-amber-400"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
