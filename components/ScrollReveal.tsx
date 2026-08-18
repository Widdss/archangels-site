"use client";

import { useEffect } from "react";

/**
 * Adds a subtle scroll-in animation to any element with the "reveal" or
 * "reveal-stagger" class (see globals.css). Mount once, globally, in the
 * root layout — it watches the whole document.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll(".reveal, .reveal-stagger"));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return null;
}
