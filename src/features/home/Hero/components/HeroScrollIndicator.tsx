"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export function HeroScrollIndicator() {
  const t = useTranslations("hero");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="absolute bottom-10 inset-x-0 flex justify-center"
    >
      <div className="flex items-center gap-8 border border-neutral-800 px-8 py-4">
        <div className="text-xs uppercase tracking-widest text-neutral-400">
          {t("scroll")}
        </div>
        <div className="h-px w-10 bg-neutral-800"></div>
        <div className="text-xs uppercase tracking-widest text-neutral-400">
          {t("discover")}
        </div>
      </div>
    </motion.div>
  );
}
