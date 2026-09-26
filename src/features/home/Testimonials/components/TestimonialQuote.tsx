"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEntranceX } from "@/hooks";

interface TestimonialQuoteProps {
  quote: string;
  author: string;
  role: string;
  activeIndex: number;
}

export function TestimonialQuote({
  quote,
  author,
  role,
  activeIndex,
}: TestimonialQuoteProps) {
  const entranceX = useEntranceX();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, x: entranceX }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -entranceX }}
        transition={{ duration: 0.5 }}
        className="min-h-[200px] flex flex-col"
      >
        <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed text-white">
          &quot;{quote}&quot;
        </blockquote>
        <div className="mt-auto flex items-center">
          <div className="w-12 h-px bg-white/40 me-4"></div>
          <div>
            <div className="font-bold text-white">{author}</div>
            <div className="text-white/70 text-sm">{role}</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
