"use client";

import { useTranslations } from "next-intl";
import { TextGenerateEffect } from "@/components";
import { heroHeadlines } from "../constants";

export function HeroHeadline() {
  const t = useTranslations("hero.headline");

  return (
    <h1>
      {heroHeadlines.map((headline, index) => (
        <TextGenerateEffect
          key={headline.key}
          words={t(headline.key)}
          className={`text-5xl md:text-7xl lg:text-8xl font-bold m-0 leading-tight tracking-tighter ${headline.className}`}
          duration={0.5}
          speed={0.2}
          initialDelay={0.2 + index * 0.2}
        />
      ))}
    </h1>
  );
}
