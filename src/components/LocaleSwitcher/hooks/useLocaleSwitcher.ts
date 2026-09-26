"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function useLocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const targetLocale =
    routing.locales.find((candidate) => candidate !== locale) ??
    routing.defaultLocale;

  const switchLocale = () => {
    startTransition(() => {
      router.replace(pathname, { locale: targetLocale });
    });
  };

  return { targetLocale, switchLocale, isPending };
}
