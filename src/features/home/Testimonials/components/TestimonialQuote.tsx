"use client";

import { motion, AnimatePresence } from "framer-motion";

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
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="min-h-[200px] flex flex-col"
      >
        <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed text-white">
          "{quote}"
        </blockquote>
        <div className="mt-auto flex items-center">
          <div className="w-12 h-px bg-white/40 mr-4"></div>
          <div>
            <div className="font-bold text-white">{author}</div>
            <div className="text-white/70 text-sm">{role}</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
