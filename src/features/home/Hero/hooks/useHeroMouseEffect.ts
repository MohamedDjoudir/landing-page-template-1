"use client";

import { useEffect, useRef } from "react";

export function useHeroMouseEffect() {
    const shapeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!shapeRef.current) return;

            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const xPos = (clientX / innerWidth - 0.5) * 10;
            const yPos = (clientY / innerHeight - 0.5) * 10;
            const rotateX = -yPos * 0.5;
            const rotateY = xPos * 0.5;

            shapeRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${xPos * 0.3
                }px, ${yPos * 0.3}px, 0)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return { shapeRef };
}
