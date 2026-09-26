"use client";

import { useEffect } from "react";
import { stagger, useAnimate } from "motion/react";

interface UseTextGenerateOptions {
  filter: boolean;
  duration: number;
  speed: number;
  initialDelay: number;
}

export function useTextGenerate({
  filter,
  duration,
  speed,
  initialDelay,
}: UseTextGenerateOptions) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const timer = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 1,
          delay: stagger(speed),
        }
      );
    }, initialDelay * 1000);

    return () => clearTimeout(timer);
  }, [scope.current, animate, duration, filter, speed, initialDelay]);

  return { scope };
}
