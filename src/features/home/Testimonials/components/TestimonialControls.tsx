"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function TestimonialControls({
  onPrev,
  onNext,
}: TestimonialControlsProps) {
  return (
    <div className="flex justify-end mt-8 gap-4">
      <button
        onClick={onPrev}
        className="p-2 border-2 border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
      </button>
      <button
        onClick={onNext}
        className="p-2 border-2 border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
      </button>
    </div>
  );
}
