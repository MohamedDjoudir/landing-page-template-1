"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export function useFloatingCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [mounted, setMounted] = useState(false);
    const positionRef = useRef({ x: 0, y: 0 });
    const circlePositionRef = useRef({ x: 0, y: 0 });
    const requestRef = useRef<number | null>(null);

    const animateCursor = useCallback(() => {
        if (!circleRef.current || !dotRef.current || !mounted) return;

        // Smoother lerp with higher factor for faster response
        circlePositionRef.current.x +=
            (positionRef.current.x - circlePositionRef.current.x) * 0.25;
        circlePositionRef.current.y +=
            (positionRef.current.y - circlePositionRef.current.y) * 0.25;
        circleRef.current.style.transform = `translate3d(${circlePositionRef.current.x}px, ${circlePositionRef.current.y}px, 0) translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`;

        dotRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;

        requestRef.current = requestAnimationFrame(animateCursor);
    }, [clicked, mounted]);

    const resetCursorPosition = useCallback(
        (e?: MouseEvent) => {
            if (!mounted) return;

            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
                requestRef.current = null;
            }

            let x, y;
            if (e) {
                x = e.clientX;
                y = e.clientY;
            } else {
                x = positionRef.current.x || window.innerWidth / 2;
                y = positionRef.current.y || window.innerHeight / 2;
            }

            positionRef.current = { x, y };
            circlePositionRef.current = { x, y };

            if (dotRef.current)
                dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
            if (circleRef.current)
                circleRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`;

            requestRef.current = requestAnimationFrame(animateCursor);
        },
        [mounted, animateCursor, clicked]
    );

    useEffect(() => {
        setMounted(true);

        const initialX = window.innerWidth / 2;
        const initialY = window.innerHeight / 2;
        if (positionRef.current.x === 0 && positionRef.current.y === 0) {
            positionRef.current = { x: initialX, y: initialY };
        }
        circlePositionRef.current = {
            x: positionRef.current.x,
            y: positionRef.current.y,
        };

        if (dotRef.current)
            dotRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
        if (circleRef.current)
            circleRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;

        const updatePosition = (e: MouseEvent) => {
            positionRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseDown = (e: MouseEvent) => {
            setClicked(true);
            const dx = circlePositionRef.current.x - e.clientX;
            const dy = circlePositionRef.current.y - e.clientY;
            if (Math.sqrt(dx * dx + dy * dy) > 30) {
                resetCursorPosition(e);
            }
        };

        const handleMouseUp = () => setClicked(false);
        const handleMouseEnterLink = () => setLinkHovered(true);
        const handleMouseLeaveLink = () => setLinkHovered(false);

        requestRef.current = requestAnimationFrame(animateCursor);

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        const links = document.querySelectorAll("a, button");
        links.forEach((link) => {
            link.addEventListener("mouseenter", handleMouseEnterLink);
            link.addEventListener("mouseleave", handleMouseLeaveLink);
        });

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            links.forEach((link) => {
                link.removeEventListener("mouseenter", handleMouseEnterLink);
                link.removeEventListener("mouseleave", handleMouseLeaveLink);
            });
        };
    }, [animateCursor, resetCursorPosition]);

    return { dotRef, circleRef, clicked, linkHovered, mounted };
}
