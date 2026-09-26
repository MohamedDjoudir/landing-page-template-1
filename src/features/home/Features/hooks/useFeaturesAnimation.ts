"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

export function useFeaturesAnimation() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: true,
        margin: "0px 0px -25% 0px",
    });

    return { sectionRef, isInView };
}
