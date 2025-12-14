"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { heroConfig } from "@/config";

export function HeroHeadline() {
  return (
    <h1>
      {heroConfig.headlines.map((headline, index) => (
        <TextGenerateEffect
          key={headline.text}
          words={headline.text}
          className={`text-5xl md:text-7xl lg:text-8xl font-bold m-0 leading-tight tracking-tighter ${headline.className}`}
          duration={0.5}
          speed={0.2}
          initialDelay={0.2 + index * 0.2}
        />
      ))}
    </h1>
  );
}
