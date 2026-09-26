"use client";

import { forwardRef } from "react";
import { motion } from "motion/react";
import { useEntranceX } from "@/hooks";
import { shapeAnimationDelay } from "../constants";
import { HeroShapeLines } from "./HeroShapeLines";
import { HeroShapeCore } from "./HeroShapeCore";

export const HeroShape = forwardRef<HTMLDivElement>((_, ref) => {
  const entranceX = useEntranceX(10);

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: shapeAnimationDelay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative transition-transform duration-200 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background shape */}
        <motion.div
          className="absolute -bottom-10 -end-10 w-2/3 h-2/3 border border-neutral-800 bg-neutral-950 z-[-1]"
          initial={{ opacity: 0, x: -entranceX }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: shapeAnimationDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ transform: "translateZ(-20px)" }}
        ></motion.div>

        {/* Main square container */}
        <motion.div
          className="aspect-square relative overflow-hidden border border-neutral-800"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: shapeAnimationDelay + 0.1,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: shapeAnimationDelay + 0.2 }}
          ></motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-3/4 h-3/4 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: shapeAnimationDelay + 0.3 }}
            >
              <HeroShapeLines />
              <HeroShapeCore />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});

HeroShape.displayName = "HeroShape";
