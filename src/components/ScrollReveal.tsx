"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "blur-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${variant} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
