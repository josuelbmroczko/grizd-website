"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the animation starts after intersection */
  delay?: number;
  /** Direction from which the element slides in */
  direction?: "up" | "down" | "left" | "right";
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("section-revealed");
          }, delay);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const directionClass = `section-reveal-${direction}`;

  return (
    <div ref={ref} className={`section-reveal ${directionClass} ${className}`}>
      {children}
    </div>
  );
}
