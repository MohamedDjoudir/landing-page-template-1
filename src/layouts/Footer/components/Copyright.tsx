"use client";

import { useTranslations } from "next-intl";

export function Copyright() {
  const t = useTranslations("footer");

  return (
    <p className="text-neutral-400 text-sm mb-4 md:mb-0">
      {t("copyright", { year: new Date().getFullYear() })}
    </p>
  );
}
