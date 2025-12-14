"use client";

import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-black/60 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-white/90 border border-white/20",
    outline:
      "border border-neutral-800 px-3 py-1 text-xs uppercase tracking-widest text-neutral-400",
  };

  return (
    <div
      className={cn("inline-block", variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}
