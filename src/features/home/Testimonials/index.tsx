"use client";

import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader, Card } from "@/components/ui";
import { testimonialItems } from "./constants";
import { useTestimonials } from "./hooks";
import {
  TestimonialQuote,
  TestimonialPagination,
  TestimonialControls,
} from "./components";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const { activeIndex, next, prev } = useTestimonials(testimonialItems.length);
  const activeKey = testimonialItems[activeIndex].key;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="max-w-4xl mx-auto">
          <Card className="relative p-8 md:p-12">
            <div className="absolute top-6 end-8 text-white/10 opacity-60">
              <Quote size={120} />
            </div>

            <div className="relative z-10">
              <TestimonialQuote
                quote={t(`items.${activeKey}.quote`)}
                author={t(`items.${activeKey}.author`)}
                role={t(`items.${activeKey}.role`)}
                activeIndex={activeIndex}
              />
            </div>

            <TestimonialPagination
              current={activeIndex}
              total={testimonialItems.length}
            />

            <TestimonialControls onPrev={prev} onNext={next} />
          </Card>
        </div>
      </div>

      {/* Visual accent elements */}
      <div className="absolute top-40 end-20 w-56 h-56 border border-white/5"></div>
      <div className="absolute bottom-20 start-10 w-32 h-32 border-2 border-white/10"></div>
    </section>
  );
}
