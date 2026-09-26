"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui";
import { pricingPlans } from "./constants";
import { usePricingToggle } from "./hooks";
import { PricingToggle, PricingCard } from "./components";

export function Pricing() {
  const t = useTranslations("pricing");
  const { annual, setAnnual } = usePricingToggle();

  return (
    <section
      id="pricing"
      className="py-24 relative overflow-hidden bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <PricingToggle annual={annual} onToggle={setAnnual} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.key} plan={plan} annual={annual} />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 start-10 w-32 h-32 border border-white/10"></div>
      <div className="absolute bottom-20 end-10 w-48 h-48 border-2 border-white/5"></div>
    </section>
  );
}
