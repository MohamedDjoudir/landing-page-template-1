"use client";

import { motion } from "motion/react";
import { shapeAnimationDelay } from "../constants";

export function HeroShapeLines() {
  return (
    <>
      <motion.div
        className="absolute top-0 start-0 w-full h-1 bg-white"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: shapeAnimationDelay + 0.4 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 end-0 w-full h-1 bg-white"
        initial={{ scaleX: 0, originX: 1 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: shapeAnimationDelay + 0.5 }}
      ></motion.div>
      <motion.div
        className="absolute top-0 end-0 h-full w-1 bg-white"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: shapeAnimationDelay + 0.6 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 start-0 h-full w-1 bg-white"
        initial={{ scaleY: 0, originY: 1 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: shapeAnimationDelay + 0.7 }}
      ></motion.div>
    </>
  );
}
