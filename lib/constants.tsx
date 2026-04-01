import React from "react";

export interface FD {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    countryCode: string;
    country: string;
    businessName: string;
    businessType: string;
    hasWebsite: string;
    websiteUrl: string;
    hasSocial: string;
    socialPlatforms: string[];
    seoSpend: string;
    socialSpend: string;
}

export const EMPTY: FD = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    country: "",
    businessName: "",
    businessType: "",
    hasWebsite: "",
    websiteUrl: "",
    hasSocial: "",
    socialPlatforms: [],
    seoSpend: "",
    socialSpend: "",
};

export const CC = [
    {
        code: "+1",
        flag: "🇺🇸",
        name: "USA",
        svg: (
            <svg viewBox="0 0 741 390" width="24" height="13">
                <rect width="741" height="390" fill="#3c3b6e" />
                <path d="M0 0v390h741V0H0zm704 360H37V30h667v330z" fill="#fff" />
                <path d="M37 30h667v30H37zm0 60h667v30H37zm0 60h667v30H37zm0 60h667v30H37zm0 60h667v30H37zm0 60h667v30H37z" fill="#b22234" />
                <rect width="296" height="210" x="37" y="30" fill="#3c3b6e" />
                <path d="M53 45l3 9 8-6-5 8 8 3-9 1-2 9-2-9-9-1 8-3-5-8 8 6z" fill="#fff" />
            </svg>
        )
    },
    {
        code: "+61",
        flag: "🇦🇺",
        name: "Australia",
        svg: (
            <svg viewBox="0 0 1200 600" width="24" height="12">
                <rect width="1200" height="600" fill="#00008b" />
                <path d="M0 0l600 300M0 300L600 0M300 0v300M0 150h600" stroke="#fff" strokeWidth="60" />
                <path d="M0 0l600 300M0 300L600 0M300 0v300M0 150h600" stroke="#ff0000" strokeWidth="40" />
                <path d="M300 450l15 45 40-30-25 40 40 15-45 5-10 45-10-45-45-5 40-15-25-40 40 30z" fill="#fff" />
            </svg>
        )
    },
    {
        code: "+44",
        flag: "🇬🇧",
        name: "UK",
        svg: (
            <svg viewBox="0 0 60 30" width="24" height="12">
                <rect width="60" height="30" fill="#012169" />
                <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
                <path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" strokeWidth="4" />
                <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
                <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
            </svg>
        )
    },
    {
        code: "+64",
        flag: "🇳🇿",
        name: "NZ",
        svg: (
            <svg viewBox="0 0 1200 600" width="24" height="12">
                <rect width="1200" height="600" fill="#00247d" />
                <path d="M0 0l600 300M600 0L0 300M300 0v300M0 150h600" stroke="#fff" strokeWidth="60" />
                <path d="M0 0l600 300M600 0L0 300M300 0v300M0 150h600" stroke="#e21313" strokeWidth="40" />
                <path d="M900 120l5 15 15-10-10 15 15 5-15 2-3 15-3-15-15-2 15-5-10-15 15 10z" fill="#fff" stroke="#e21313" strokeWidth="2" />
            </svg>
        )
    },
    {
        code: "+971",
        flag: "🇦🇪",
        name: "UAE",
        svg: (
            <svg viewBox="0 0 1200 600" width="24" height="12">
                <rect width="300" height="600" fill="#ff0000" />
                <rect x="300" width="900" height="200" fill="#00732f" />
                <rect x="300" y="200" width="900" height="200" fill="#ffffff" />
                <rect x="300" y="400" width="900" height="200" fill="#000000" />
            </svg>
        )
    },
    {
        code: "+27",
        flag: "🇿🇦",
        name: "South Africa",
        svg: (
            <svg viewBox="0 0 900 600" width="24" height="16">
                <rect width="900" height="600" fill="#ffffff" />
                <path d="M0 0h900v200H0z" fill="#e21313" />
                <path d="M0 400h900v200H0z" fill="#00247d" />
                <path d="M0 0l450 300L0 600" fill="#000" />
                <path d="M0 0v100l300 200L0 500v100l450-300L0 0z" fill="#ffb81c" />
                <path d="M0 200v200h300l150-100L300 200H0z" fill="#007a4d" />
            </svg>
        )
    },
    {
        code: "+1",
        flag: "🇨🇦",
        name: "Canada",
        svg: (
            <svg viewBox="0 0 1200 600" width="24" height="12">
                <rect width="300" height="600" fill="#ff0000" />
                <rect x="300" width="600" height="600" fill="#ffffff" />
                <rect x="900" width="300" height="600" fill="#ff0000" />
                <path d="M600 150l30 90 90-30-60 90 90 30-105 15-45 105-45-105-105-15 90-30-60-90 90 30z" fill="#ff0000" />
            </svg>
        )
    },
    {
        code: "+91",
        flag: "🇮🇳",
        name: "India",
        svg: (
            <svg viewBox="0 0 900 600" width="24" height="16">
                <rect width="900" height="200" fill="#f4c430" />
                <rect y="200" width="900" height="200" fill="#ffffff" />
                <rect y="400" width="900" height="200" fill="#228b22" />
                <circle cx="450" cy="300" r="80" fill="none" stroke="#000080" strokeWidth="4" />
                <circle cx="450" cy="300" r="10" fill="#000080" />
            </svg>
        )
    },
    {
        code: "+55",
        flag: "🇧🇷",
        name: "Brazil",
        svg: (
            <svg viewBox="0 0 900 600" width="24" height="16">
                <rect width="900" height="600" fill="#009b3a" />
                <path d="M450 60L840 300 450 540 60 300z" fill="#fedf00" />
                <circle cx="450" cy="300" r="140" fill="#002776" />
            </svg>
        )
    },
    {
        code: "+49",
        flag: "🇩🇪",
        name: "Germany",
        svg: (
            <svg viewBox="0 0 5 3" width="24" height="14.4">
                <rect width="5" height="1" fill="#000" />
                <rect y="1" width="5" height="1" fill="#d00" />
                <rect y="2" width="5" height="1" fill="#ffce00" />
            </svg>
        )
    },
    {
        code: "+33",
        flag: "🇫🇷",
        name: "France",
        svg: (
            <svg viewBox="0 0 3 2" width="24" height="16">
                <rect width="1" height="2" fill="#002395" />
                <rect x="1" width="1" height="2" fill="#fff" />
                <rect x="2" width="1" height="2" fill="#ed2939" />
            </svg>
        )
    },
    {
        code: "+81",
        flag: "🇯🇵",
        name: "Japan",
        svg: (
            <svg viewBox="0 0 900 600" width="24" height="16">
                <rect width="900" height="600" fill="#fff" />
                <circle cx="450" cy="300" r="180" fill="#bc002d" />
            </svg>
        )
    },
    {
        code: "+86",
        flag: "🇨🇳",
        name: "China",
        svg: (
            <svg viewBox="0 0 900 600" width="24" height="16">
                <rect width="900" height="600" fill="#de2910" />
                <path d="M150 90l10 30 25-20-20 25 30 10-30 5 15 30-20-25-25 20 15-25-30-10 30-5z" fill="#ffde00" />
            </svg>
        )
    }
];

export const COUNTRIES = [
    "United States",
    "Australia",
    "United Kingdom",
    "New Zealand",
    "United Arab Emirates",
    "South Africa",
];

export const BIZ_TYPES = [
    "Marketing Agency",
    "E-commerce",
    "SaaS / Technology",
    "Healthcare",
    "Real Estate",
    "Finance & Insurance",
    "Retail",
    "Hospitality & Tourism",
    "Education",
    "Professional Services",
    "Other",
];

export const SOCIAL_OPTS = [
    "Instagram",
    "Facebook",
    "LinkedIn",
    "TikTok",
    "X / Twitter",
    "YouTube",
    "Pinterest",
    "Snapchat",
];

export const SPEND_OPTS = [
    "Not spending yet",
    "Under $500/mo",
    "$500–$2k/mo",
    "$2k–$5k/mo",
    "$5k–$10k/mo",
    "$10k+/mo",
];

export const tickerItems = [
    "SEO Monitoring",
    "Competitor Analysis",
    "AI Copywriting",
    "Social Scheduling",
    "Graphic Generation",
    "Video Creation",
    "Performance Reports",
    "Realtime Dashboards",
    "Auto-Optimisation",
];

export const agents = [
    {
        num: "01",
        name: "SEO Intelligence",
        tag: "Live Monitoring",
        desc: "Continuously monitors keyword rankings, backlink profiles, technical health and performance. Surfaces opportunities before competitors act.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
                <path d="M11 8v6" />
                <path d="M8 11h6" />
            </svg>
        )
    },
    {
        num: "02",
        name: "Competitor Intelligence",
        tag: "Market Edge",
        desc: "Tracks competitor content, ad spend, social engagement and SERP movements. Weekly intelligence reports with actionable gaps to exploit.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
                <path d="m15 15 4 4" />
            </svg>
        )
    },
    {
        num: "03",
        name: "Copywriting Agent",
        tag: "Auto-Content",
        desc: "Generates SEO-optimised blog posts, ads, email campaigns and landing page copy. Learns your brand voice and improves with every piece produced.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
        )
    },
    {
        num: "04",
        name: "Creative Design Agent",
        tag: "Visual AI",
        desc: "Produces on-brand graphics, social visuals, ad creatives and video content automatically — scaled to your publishing frequency.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3 1.912 5.886h6.19l-5.007 3.638L16.96 18.5 12 14.862 7.04 18.5l1.865-5.976L3.898 8.886h6.19L12 3z" />
            </svg>
        )
    },
    {
        num: "05",
        name: "Social Media Agent",
        tag: "Auto-Publish",
        desc: "Plans, schedules and publishes across all platforms. Analyses performance data to continuously refine timing, format and messaging strategy.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.59 13.51l6.83 3.98m-.01-10.98-6.82 3.98" />
            </svg>
        )
    },
    {
        num: "06",
        name: "Growth Strategy Agent",
        tag: "Growth Engine",
        desc: "Cross-analyses all data streams to identify growth opportunities and emerging audience signals — delivering strategic recommendations in real time.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.5-1 1-4c2 1 3 3 3 3z" />
                <path d="M12 15v5s1-.5 4-1c-1-2-3-3-3-3z" />
            </svg>
        )
    },
];

export const pricingPackages = [
    {
        name: "Starter",
        price: "$499",
        period: "/mo",
        desc: "Perfect for emerging brands beginning their AI journey.",
        features: [
            "2 AI Agent Seats",
            "Core SEO Monitoring",
            "Social Media Scheduling",
            "Weekly Growth Reports",
            "Community Support"
        ],
        cta: "Start with Starter",
        popular: false
    },
    {
        name: "Business",
        price: "$1,499",
        period: "/mo",
        desc: "The full autonomous marketing suite for scaling teams.",
        features: [
            "All 6 AI Agents",
            "Priority Content Queue",
            "Competitor Ad Tracking",
            "Custom Brand Voice AI",
            "Dedicated Support Path"
        ],
        cta: "Scale with Business",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        desc: "Bespoke AI solutions for high-volume agencies and brands.",
        features: [
            "Unlimited AI Agent Seats",
            "Multi-Brand Management",
            "API Access & Webhooks",
            "White-label Reporting",
            "24/7 Strategic Partner"
        ],
        cta: "Contact Sales",
        popular: false
    }
];

export const barHeights = [38, 52, 44, 62, 48, 68, 58, 76, 70, 88, 82, 93, 86, 100];

export const integrations = [
    {
        name: "Google",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
            </svg>
        )
    },
    {
        name: "Meta",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" />
            </svg>
        )
    },
    {
        name: "Instagram",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        )
    },
    {
        name: "TikTok",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12v6a2 2 0 0 0 4 0v-8a4 4 0 0 1 4-4" />
                <rect x="9" y="4" width="4" height="4" />
            </svg>
        )
    },
    {
        name: "X",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
        )
    },
    {
        name: "ChatGPT",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
        )
    },
    {
        name: "Claude",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        )
    },
    {
        name: "Perplexity",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
        )
    }
];
