"use client";

import { motion } from "framer-motion";

export function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="absolute bottom-10 left-0 right-0 flex justify-center"
    >
      <div className="flex items-center gap-8 border border-neutral-800 px-8 py-4">
        <div className="text-xs uppercase tracking-widest text-neutral-400">
          Scroll
        </div>
        <div className="h-px w-10 bg-neutral-800"></div>
        <div className="text-xs uppercase tracking-widest text-neutral-400">
          Discover
        </div>
      </div>
    </motion.div>
  );
}
