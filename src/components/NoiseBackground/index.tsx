"use client";

import { useNoiseBackground } from "./hooks";

export function NoiseBackground() {
  const { canvasRef } = useNoiseBackground();

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-5"
    />
  );
}
