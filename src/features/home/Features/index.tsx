"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui";
import { featureItems, containerVariants } from "./constants";
import { useFeaturesAnimation } from "./hooks";
import { FeatureCard } from "./components";

export function Features() {
  const t = useTranslations("features");
  const { sectionRef, isInView } = useFeaturesAnimation();

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-4 mt-20 sm:mt-0 sm:py-24 relative overflow-hidden bg-gradient-to-b from-black to-neutral-900"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featureItems.map((feature) => (
            <FeatureCard
              key={feature.key}
              icon={feature.icon}
              title={t(`items.${feature.key}.title`)}
              description={t(`items.${feature.key}.description`)}
            />
          ))}
        </motion.div>
      </div>

      <div className="absolute top-20 end-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 start-10 w-60 h-60 bg-white/3 rounded-full blur-3xl"></div>
    </section>
  );
}
