"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface TestimonialControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function TestimonialControls({
  onPrev,
  onNext,
}: TestimonialControlsProps) {
  const t = useTranslations("testimonials");

  return (
    <div className="flex justify-end mt-8 gap-4">
      <button
        onClick={onPrev}
        className="p-2 border-2 border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
        aria-label={t("previous")}
      >
        <ChevronLeft className="w-5 h-5 text-white/60 group-hover:text-white transition-colors rtl:-scale-x-100" />
      </button>
      <button
        onClick={onNext}
        className="p-2 border-2 border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
        aria-label={t("next")}
      >
        <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors rtl:-scale-x-100" />
      </button>
    </div>
  );
}
