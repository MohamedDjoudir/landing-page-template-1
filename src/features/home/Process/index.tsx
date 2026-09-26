"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui";
import { processSteps } from "./constants";
import { ProcessStep } from "./components";

export function Process() {
  const t = useTranslations("process");

  return (
    <section
      id="process"
      className="py-24 relative overflow-hidden bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute start-[39px] top-0 bottom-0 w-[2px] bg-white/30 md:start-1/2"></div>

          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.key}
              number={step.number}
              title={t(`steps.${step.key}.title`)}
              description={t(`steps.${step.key}.description`)}
              isEven={index % 2 !== 0}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 end-20 w-32 h-32 border border-white/10"></div>
      <div className="absolute bottom-60 start-20 w-40 h-40 border border-white/5"></div>
    </section>
  );
}
