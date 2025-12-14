"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui";
import { heroConfig } from "@/config";
import { useHeroMouseEffect } from "./hooks";
import {
  HeroHeadline,
  HeroButtons,
  HeroShape,
  HeroScrollIndicator,
} from "./components";

export function Hero() {
  const { shapeRef } = useHeroMouseEffect();

  return (
    <section className="relative flex items-center px-10 py-[100px] sm:py-[110px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#222_0%,_#000_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="outline">{heroConfig.badge}</Badge>
            </motion.div>

            <HeroHeadline />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-neutral-400 mb-8 max-w-md text-lg"
            >
              {heroConfig.description}
            </motion.p>

            <HeroButtons />
          </div>

          <HeroShape ref={shapeRef} />
        </div>

        <HeroScrollIndicator />
      </div>
    </section>
  );
}
