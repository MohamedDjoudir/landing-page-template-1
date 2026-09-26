"use client";

import { useLocale } from "next-intl";
import { getDirection } from "@/i18n/getDirection";

/**
 * Horizontal offset an element starts from when it enters, on the side the
 * reading direction begins, so the motion follows the text in both LTR and RTL.
 */
export function useEntranceX(distance = 20) {
  return getDirection(useLocale()) === "rtl" ? distance : -distance;
}
