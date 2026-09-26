"use client";

import { motion } from "motion/react";
import { shapeAnimationDelay } from "../constants";

export function HeroShapeCore() {
  return (
    <motion.div
      className="absolute top-1/4 start-1/4 w-1/2 h-1/2 border border-neutral-700 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: shapeAnimationDelay + 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <motion.div
        className="w-3/4 h-3/4 bg-neutral-900 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: shapeAnimationDelay + 0.9,
        }}
      >
        <motion.div
          className="w-1/2 h-1/2 bg-white"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: shapeAnimationDelay + 1.0,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
