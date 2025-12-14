"use client";

import { useNoiseBackground } from "./hooks";

export function NoiseBackground() {
  const { canvasRef } = useNoiseBackground();

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-5"
    />
  );
}
