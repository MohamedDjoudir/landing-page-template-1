"use client";

import { Check } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { Button } from "@/components/ui";
import type { PricingPlanItem } from "../types";

interface PricingCardProps {
  plan: PricingPlanItem;
  annual: boolean;
}

export function PricingCard({ plan, annual }: PricingCardProps) {
  const t = useTranslations("pricing");
  const format = useFormatter();
  const price = annual ? plan.annualPrice : plan.monthlyPrice;
  const features = t.raw(`plans.${plan.key}.features`) as string[];

  return (
    <div
      className={`border-2 ${
        plan.popular ? "border-white" : "border-white/20"
      } p-8 relative bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300`}
    >
      {plan.popular && (
        <div className="absolute top-0 end-0 bg-white text-black text-xs uppercase tracking-widest py-1 px-3 -mt-3 -me-3 font-medium">
          {t("popular")}
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 text-white">
        {t(`plans.${plan.key}.name`)}
      </h3>
      <p className="text-white/70 mb-6">{t(`plans.${plan.key}.description`)}</p>
      <div className="mb-6 flex items-baseline">
        <span className="text-4xl font-bold text-white">
          {format.number(price, {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          })}
        </span>
        <span className="text-white/70 ms-2">
          {annual ? t("perYear") : t("perMonth")}
        </span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start group">
            <Check className="w-5 h-5 me-2 text-white/60 group-hover:text-white flex-shrink-0 mt-0.5 transition-colors duration-300" />
            <span className="text-white/80 group-hover:text-white transition-colors duration-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        variant={plan.popular ? "primary" : "outline"}
        className={`w-full ${
          plan.popular
            ? ""
            : "border-2 border-white/30 hover:border-white hover:bg-white/10"
        }`}
      >
        {t(`plans.${plan.key}.cta`)}
      </Button>

      {plan.popular && (
        <div className="absolute inset-0 border-b-2 border-white opacity-20"></div>
      )}
    </div>
  );
}
