"use client";

import { Quote } from "lucide-react";
import { SectionHeader, Card } from "@/components/ui";
import { testimonialsConfig } from "@/config";
import { useTestimonials } from "./hooks";
import {
  TestimonialQuote,
  TestimonialPagination,
  TestimonialControls,
} from "./components";

export function Testimonials() {
  const { testimonials, label, title, subtitle } = testimonialsConfig;
  const { activeIndex, next, prev } = useTestimonials(testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader label={label} title={title} subtitle={subtitle} />

        <div className="max-w-4xl mx-auto">
          <Card className="relative p-8 md:p-12">
            <div className="absolute top-6 right-8 text-white/10 opacity-60">
              <Quote size={120} />
            </div>

            <div className="relative z-10">
              <TestimonialQuote
                quote={testimonials[activeIndex].quote}
                author={testimonials[activeIndex].author}
                role={testimonials[activeIndex].role}
                activeIndex={activeIndex}
              />
            </div>

            <TestimonialPagination
              current={activeIndex}
              total={testimonials.length}
            />

            <TestimonialControls onPrev={prev} onNext={next} />
          </Card>
        </div>
      </div>

      {/* Visual accent elements */}
      <div className="absolute top-40 right-20 w-56 h-56 border border-white/5"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-white/10"></div>
    </section>
  );
}
