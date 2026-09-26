"use client";

import { useTranslations } from "next-intl";
import { sectionLinks } from "../../constants";

export function FooterNav() {
  const t = useTranslations("navigation");

  return (
    <nav className="flex gap-6">
      {sectionLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-neutral-400 hover:text-white transition-colors text-sm"
        >
          {t(link.key)}
        </a>
      ))}
    </nav>
  );
}
