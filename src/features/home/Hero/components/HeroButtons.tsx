"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";

export function HeroButtons() {
  const t = useTranslations("hero");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <Button variant="outline" className="px-8 py-3 transition-colors">
        {t("primaryCta")}
        <ArrowRight className="ms-2 h-4 w-4 rtl:-scale-x-100" />
      </Button>
      <Button variant="secondary" className="px-8 py-3 transition-colors">
        {t("secondaryCta")}
      </Button>
    </motion.div>
  );
}
