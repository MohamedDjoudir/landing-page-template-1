"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const t = useTranslations("common");

  return (
    <Link href="/" className={cn("text-2xl font-bold tracking-tighter", className)}>
      {t("brand")}
      <span className="text-neutral-400">.</span>
    </Link>
  );
}
