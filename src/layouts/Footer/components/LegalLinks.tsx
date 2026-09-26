"use client";

import { useTranslations } from "next-intl";
import { legalLinks } from "../constants";

export function LegalLinks() {
  const t = useTranslations("footer.legal");

  return (
    <div className="flex gap-6">
      {legalLinks.map((link) => (
        <a
          key={link.key}
          href={link.href}
          className="text-neutral-400 hover:text-white transition-colors text-sm"
        >
          {t(link.key)}
        </a>
      ))}
    </div>
  );
}
