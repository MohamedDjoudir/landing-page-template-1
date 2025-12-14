"use client";

import { useState } from "react";

export function usePricingToggle() {
    const [annual, setAnnual] = useState(true);

    return { annual, setAnnual };
}
