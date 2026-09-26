import type { PricingPlanItem } from "../types";

export const pricingPlans: PricingPlanItem[] = [
  { key: "basic", monthlyPrice: 199, annualPrice: 1900, popular: false },
  { key: "standard", monthlyPrice: 399, annualPrice: 3900, popular: true },
  { key: "premium", monthlyPrice: 799, annualPrice: 7900, popular: false },
];
