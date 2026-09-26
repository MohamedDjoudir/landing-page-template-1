"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";
import { useLocaleSwitcher } from "./hooks";

interface LocaleSwitcherProps {
  className?: string;
}

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const t = useTranslations("localeSwitcher");
  const { targetLocale, switchLocale, isPending } = useLocaleSwitcher();
  const languageName = t(`names.${targetLocale}`);

  return (
    <Button
      variant="ghost"
      size="sm"
      lang={targetLocale}
      onClick={switchLocale}
      disabled={isPending}
      aria-label={t("switchTo", { language: languageName })}
      className={className}
    >
      {languageName}
    </Button>
  );
}
