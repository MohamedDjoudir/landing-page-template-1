"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  animate?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  animate = true,
}: SectionHeaderProps) {
  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
      }
    : {};

  return (
    <Wrapper className={cn("mb-16", className)} {...wrapperProps}>
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px w-12 bg-white/40"></div>
        <div className="text-xs uppercase tracking-widest text-white/80">
          {label}
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
        {title}
        {subtitle && (
          <>
            <br />
            <span className="text-white/70">{subtitle}</span>
          </>
        )}
      </h2>
    </Wrapper>
  );
}
