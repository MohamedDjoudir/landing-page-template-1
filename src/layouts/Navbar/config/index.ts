export const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#work", label: "Work" },
    { href: "#process", label: "Process" },
    { href: "#pricing", label: "Pricing" },
] as const;

export const mobileMenuAnimationConfig = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
};
