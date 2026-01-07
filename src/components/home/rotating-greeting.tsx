"use client";

import { useEffect, useState } from "react";

const greetings = ["Hello.", "Hola.", "नमस्ते."];

export function RotatingGreeting() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % greetings.length), 2600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="rotating-greeting" aria-label={greetings[active]}>
      {greetings.map((word, index) => (
        <span key={word} className={`greeting-word ${index === active ? "is-active" : ""}`} aria-hidden="true">
          {word}
        </span>
      ))}
    </span>
  );
}
