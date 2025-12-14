"use client";

import { useFloatingCursor } from "./hooks";

export function FloatingCursor() {
  const { dotRef, circleRef, linkHovered, mounted } = useFloatingCursor();

  if (!mounted) return null;

  return (
    <>
      {/* Small dot that follows cursor exactly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ willChange: "transform" }}
      />
      {/* Larger circle that follows with delay */}
      <div
        ref={circleRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] hidden md:block ${
          linkHovered
            ? "w-12 h-12 bg-white/10 border border-white"
            : "w-8 h-8 border border-white/60"
        }`}
        style={{
          willChange: "transform",
          transition:
            "width 0.15s ease-out, height 0.15s ease-out, background-color 0.15s ease-out",
        }}
      />
    </>
  );
}
