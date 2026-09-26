"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

interface TestimonialPaginationProps {
  current: number;
  total: number;
}

export function TestimonialPagination({
  current,
  total,
}: TestimonialPaginationProps) {
  const t = useTranslations("testimonials");

  return (
    <div className="mt-8 flex items-center">
      <div className="text-white/60 text-sm me-4">
        {t("position", { current: current + 1, total })}
      </div>
      <div className="flex-1 h-px bg-white/20 relative">
        <motion.div
          className="h-px bg-white absolute top-0 start-0"
          initial={{ width: "0%" }}
          animate={{
            width: `${((current + 1) / total) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>
    </div>
  );
}
