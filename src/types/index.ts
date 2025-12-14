export interface Project {
    title: string;
    subtitle: string;
    image: string;
    year: string;
}

export interface Feature {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

export interface PricingPlan {
    name: string;
    description: string;
    monthlyPrice: number;
    annualPrice: number;
    features: string[];
    cta: string;
    popular: boolean;
}

export interface ContactInfo {
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        country: string;
    };
}

export interface NavLink {
    href: string;
    label: string;
}
