import { Square, Circle, Triangle, Hexagon } from "lucide-react";

export const heroConfig = {
    badge: "Digital Design Studio",
    headlines: [
        { text: "MINIMAL", className: "" },
        { text: "BRUTALIST", className: "text-neutral-400" },
        { text: "DESIGN", className: "" },
    ],
    description:
        "We create minimalist digital experiences that make an impact. Raw, unfiltered, and straight to the point.",
    buttons: {
        primary: { label: "View Our Work" },
        secondary: { label: "About Us" },
    },
    shapeAnimationDelay: 0.6,
};

export const featuresConfig = {
    label: "Our Approach",
    title: "Minimalist Design",
    subtitle: "Maximum Impact",
    features: [
        {
            icon: Square,
            title: "Minimalist Design",
            description:
                "Clean, uncluttered interfaces that focus on content and functionality without unnecessary elements.",
        },
        {
            icon: Circle,
            title: "Brutalist Approach",
            description:
                "Raw, honest design that embraces the digital medium without trying to mimic physical materials.",
        },
        {
            icon: Triangle,
            title: "Responsive Layout",
            description:
                "Perfectly adapted experiences across all devices, from desktop to mobile, without compromise.",
        },
        {
            icon: Hexagon,
            title: "Performance Focus",
            description:
                "Lightning-fast loading times and smooth interactions for optimal user experience.",
        },
    ],
};

export const workConfig = {
    label: "Selected Work",
    title: "Our Latest",
    subtitle: "Projects",
    projects: [
        {
            title: "BRUTALIST",
            subtitle: "Digital Platform",
            image: "/works/1.webp?height=600&width=800",
            year: "2023",
        },
        {
            title: "MONOCHROME",
            subtitle: "Brand Identity",
            image: "/works/2.webp?height=600&width=800",
            year: "2023",
        },
        {
            title: "MINIMAL",
            subtitle: "Web Experience",
            image: "/works/3.webp?height=600&width=800",
            year: "2022",
        },
        {
            title: "CONTRAST",
            subtitle: "Mobile Application",
            image: "/works/4.webp?height=600&width=800",
            year: "2022",
        },
    ],
};

export const processConfig = {
    label: "How We Work",
    title: "Our Process",
    subtitle: "Step by Step",
    steps: [
        {
            number: "01",
            title: "Discovery",
            description:
                "We analyze your needs, goals, and target audience to establish a solid foundation for the project.",
        },
        {
            number: "02",
            title: "Strategy",
            description:
                "We develop a comprehensive plan that aligns with your business objectives and user expectations.",
        },
        {
            number: "03",
            title: "Design",
            description:
                "We create minimalist, brutalist designs that focus on functionality and user experience.",
        },
        {
            number: "04",
            title: "Development",
            description:
                "We build your digital product using modern technologies and best practices for optimal performance.",
        },
        {
            number: "05",
            title: "Launch",
            description:
                "We deploy your project and ensure everything works flawlessly across all platforms and devices.",
        },
    ],
};

export const testimonialsConfig = {
    label: "Testimonials",
    title: "What Our Clients",
    subtitle: "Say About Us",
    testimonials: [
        {
            quote:
                "The minimalist approach perfectly captured our brand essence. Their attention to detail and focus on typography made our digital presence stand out.",
            author: "Sarah Johnson",
            role: "Creative Director, Studio Black",
        },
        {
            quote:
                "Working with this team was refreshing. They stripped away all the unnecessary elements and delivered a product that was both beautiful and functional.",
            author: "Michael Chen",
            role: "Founder, Monochrome",
        },
        {
            quote:
                "Their brutalist design philosophy challenged our conventional thinking and resulted in a website that truly captures attention and drives engagement.",
            author: "Emily Rodriguez",
            role: "Marketing Lead, Contrast Inc.",
        },
    ],
};

export const pricingConfig = {
    label: "Pricing",
    title: "Simple Pricing",
    subtitle: "No Hidden Fees",
    plans: [
        {
            name: "Basic",
            description: "For small projects and individuals",
            monthlyPrice: 199,
            annualPrice: 1900,
            features: [
                "Minimalist design",
                "Responsive layout",
                "Basic animations",
                "1 revision round",
                "14-day delivery",
            ],
            cta: "Get Started",
            popular: false,
        },
        {
            name: "Standard",
            description: "For growing businesses and brands",
            monthlyPrice: 399,
            annualPrice: 3900,
            features: [
                "Everything in Basic",
                "Custom brutalist design",
                "Advanced animations",
                "3 revision rounds",
                "Content strategy",
                "7-day delivery",
            ],
            cta: "Get Started",
            popular: true,
        },
        {
            name: "Premium",
            description: "For established companies and enterprises",
            monthlyPrice: 799,
            annualPrice: 7900,
            features: [
                "Everything in Standard",
                "Comprehensive design system",
                "Custom functionality",
                "Unlimited revisions",
                "SEO optimization",
                "Priority support",
                "5-day delivery",
            ],
            cta: "Contact Us",
            popular: false,
        },
    ],
};

export const contactConfig = {
    label: "Contact",
    title: "Let's Work",
    subtitle: "Together",
    info: {
        email: "hello@mono.design",
        phone: "+1 (234) 567-890",
        address: {
            street: "123 Minimalist Street",
            city: "New York, NY 10001",
            country: "United States",
        },
    },
};
