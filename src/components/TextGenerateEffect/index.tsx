"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTextGenerate } from "./hooks";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  speed?: number;
  initialDelay?: number;
}

export const TextGenerateEffect = memo(function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
  speed = 0.2,
  initialDelay = 0,
}: TextGenerateEffectProps) {
  const { scope } = useTextGenerate({ filter, duration, speed, initialDelay });
  const wordsArray = words.split(" ").slice(0, 30);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className="dark:text-[var(--white)] text-black"
          style={{
            WebkitTextSizeAdjust: "100%",
            fontSize: "inherit",
            willChange: "transform",
          }}
        >
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="dark:text-[var(--white)] text-black opacity-0"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                  WebkitTextSizeAdjust: "100%",
                  fontSize: "inherit",
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
});
