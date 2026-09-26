import type { Locale } from "./routing";

const RTL_LOCALES: readonly Locale[] = ["ar"];

export function getDirection(locale: string): "ltr" | "rtl" {
  return RTL_LOCALES.includes(locale as Locale) ? "rtl" : "ltr";
}
