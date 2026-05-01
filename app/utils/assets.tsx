import {
    FaHtml5,
    FaCss3Alt,
    FaSquareJs,
    FaReact,
    FaShopify,
    FaWordpress,
    FaGitAlt,
    FaGithub,
    FaFigma,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
    FaFacebookF
} from "react-icons/fa6";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSupabase, SiVercel } from "react-icons/si";

import {
    SkillItem,
    HighlightProps,
    IntroInfo,
    ProjectsProps,
    CaseStudy
} from "./types";

import myImage from "../../public/relaxe.jpg";

import trexpenser from "../../public/trexpenser.png";
import leeslagosThumbnail from "../../public/leeslagos-thumb.jpeg";
import trexpenserThumbnail from "../../public/trexpenser.png";
import chirpThumbnail from "../../public/chirp.jpg";
import bigTasteThumbnail from "../../public/bigtaste-thumb.jpeg";
import visyonedThumbnail from "../../public/visyond-thumb.jpeg";
import softpThumbnail from "../../public/softp-thumb.jpeg";
import sollyThumbnail from "../../public/sollystore.jpeg";
import elvanexThumbnail from "../../public/elvanex.jpg";

export const introInfo: IntroInfo[] = [
    { image: trexpenserThumbnail, title: "Landing page" },
    { image: trexpenser, title: "Sign up page" },
    { image: trexpenserThumbnail, title: "Login page" },
    { image: trexpenser, title: "Dashboard page" }
];

export const footerSocials = [
    {
        url: "https://www.linkedin.com/in/abosigodwin",
        name: "LinkedIn",
        icon: FaLinkedinIn
    },
    { url: "https://x.com/AbosiGodwin", name: "Twitter", icon: FaTwitter },
    {
        url: "https://www.instagram.com/abosigodwin",
        name: "Instagram",
        icon: FaInstagram
    },
    {
        url: "https://www.facebook.com/AbosiGodwinN",
        name: "Facebook",
        icon: FaFacebookF
    }
];

export const projectHighlight: HighlightProps = [
    "Carefully designed financial UX for effortless daily use",
    "Savings goals with manual and automatic contribution options",
    "Visual insights using charts for income, expenses, and progress",
    "Fully built with React + Tailwind and optimized for mobile",
    "No backend dependencies — lightweight, fast, and reliable"
];

export const coreSkills: SkillItem[] = [
    { title: "HTML5", icon: FaHtml5 },
    { title: "CSS3", icon: FaCss3Alt },
    { title: "JavaScript (ES6+)", icon: FaSquareJs },
    { title: "TypeScript", icon: SiTypescript },
    { title: "React 19", icon: FaReact },
    { title: "Next.js 15", icon: RiNextjsFill },
    { title: "TailwindCSS", icon: RiTailwindCssFill }
];

export const tools: SkillItem[] = [
    { title: "Shopify", icon: FaShopify },
    { title: "WordPress", icon: FaWordpress },
    { title: "Supabase", icon: SiSupabase },
    { title: "Git", icon: FaGitAlt },
    { title: "GitHub", icon: FaGithub },
    { title: "Vercel", icon: SiVercel },
    { title: "Figma", icon: FaFigma }
];

export const projects: ProjectsProps[] = [
    {
        id: 1,
        slug: "trexpenser-expense-savings-tracker",
        title: "Trexpenser — Personal Finance & Savings Manager",
        shortDescription:
            "A smart personal finance application that helps users track income, manage expenses, and build savings goals with structured financial insights and progress tracking.",
        thumbnail: trexpenserThumbnail,
        tags: ["React", "Next.js", "Firebase", "Finance App", "Full-Stack"],
        liveUrl: "https://trexpenser.vercel.app"
    },
    {
        id: 2,
        slug: "leeslagos-fashion-ecommerce",
        title: "LeesLagos — Cosmetics E-commerce Store",
        shortDescription:
            "A full-stack finance management system designed to help users control spending, automate savings behavior, and make better financial decisions through real-time tracking and structured goal systems.",
        thumbnail: leeslagosThumbnail,
        tags: ["React", "TailwindCSS", "E-commerce", "Frontend"],
        liveUrl: "https://leeslagos.vercel.app"
    },
    {
        id: 3,
        slug: "softp-creative-portfolio",
        title: "SOFT-P — Multidisciplinary Artist Portfolio",
        shortDescription:
            "A cinematic portfolio website for a Nigerian actor, music artist, and 2D animator, featuring Cloudinary media delivery, Framer Motion animations, and a Firebase-powered bookings system.",
        thumbnail: softpThumbnail,
        tags: ["Next.js", "TypeScript", "Framer Motion", "Firebase"],
        liveUrl: "https://softp.vercel.app"
    },
    {
        id: 4,
        slug: "sureplug-autos-motor-parts",
        title: "SurePlug Autos — Motor Parts & Services",
        shortDescription:
            "A high-performance landing page for a Nigerian auto parts business, built to drive inquiries and establish brand credibility with a fast, modern web presence.",
        thumbnail: sureplugThumbnail,
        tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://sureplug-autos.vercel.app"
    }
];

export const practiceProjects: ProjectsProps[] = [
    {
        id: 1,
        slug: "chirp-landing-page",
        title: "Chirp Landing Page — Frontend Mentor",
        shortDescription:
            "A pixel-perfect recreation of the Chirp landing page challenge using clean HTML and CSS.",
        thumbnail: chirpThumbnail,
        tags: ["HTML", "CSS", "Frontend Mentor", "Responsive"],
        liveUrl: "https://abosi-godwin-chirp-website.netlify.app/"
    },

    {
        id: 2,
        slug: "elvanex-corporate-website",
        title: "Elvanex — Digital Marketing Corporate Website",
        shortDescription:
            "A modern corporate website for a digital marketing agency, built with Next.js and optimized for performance, SEO, and responsive design.",
        thumbnail: elvanexThumbnail,
        tags: ["Next.js", "TailwindCSS", "Corporate", "SEO"],
        liveUrl: "https://elvanex.vercel.app"
    },

    {
        id: 3,
        slug: "solly-store-ecommerce",
        title: "Solly Store — Full Stack E-commerce Store",
        shortDescription:
            "A full-featured e-commerce store with product catalogue, cart functionality, category filtering, and secure checkout across electronics, fashion, and accessories.",
        thumbnail: sollyThumbnail,
        tags: ["React", "TailwindCSS", "E-commerce", "Frontend"],
        liveUrl: "https://solly-store.vercel.app"
    },
    {
        id: 4,
        slug: "visyoned-eye-care-agency",
        title: "Visyoned — Premium Eye Care Agency Website",
        shortDescription:
            "A premium eye care agency website combining clinical excellence with modern aesthetics, designed to help users find stylish and personalized vision care solutions.",
        thumbnail: visyonedThumbnail,
        tags: ["Next.js", "TailwindCSS", "Healthcare", "Landing Page"],
        liveUrl: "https://visyoned.vercel.app"
    },
    {
        id: 5,
        slug: "big-taste-restaurant-website",
        title: "Big Taste — Restaurant & Food Ordering Website",
        shortDescription:
            "A clean and conversion-focused restaurant website for a local Nigerian food business, featuring a WhatsApp ordering system, full menu display, testimonials, and location details.",
        thumbnail: bigTasteThumbnail,
        tags: ["Next.js", "TailwindCSS", "Restaurant", "WhatsApp Integration"],
        liveUrl: "https://big-taste.vercel.app"
    }
];

export const caseStudies: CaseStudy[] = [
    {
        id: "trexpenser",
        slug: "trexpenser-expense-savings-tracker",
        title: "Trexpenser",
        subtitle: "Personal Expense & Savings Tracker",
        category: "Web Application",
        status: "Completed",
        year: "2024",

        shortDescription:
            "Trexpenser is a personal finance web app that helps users track income, expenses, and savings goals with clarity and control.",

        overview:
            "Trexpenser is a personal expense and savings tracking application built to solve a common problem: people know they earn money, but don’t know where it goes. Instead of overwhelming users with complex accounting rules, the app focuses on simple money flow, flexible savings logic, and real-time feedback. It is designed for everyday users who want control over their finances without spreadsheets or finance jargon.",

        problem: {
            summary:
                "Most expense trackers are either too simple or too complex, making them hard to sustain long-term.",
            points: [
                "Users don’t consistently track income and expenses",
                "Savings goals feel abstract and difficult to maintain",
                "Many financial apps enforce rigid rules that don’t reflect real-life behavior"
            ]
        },

        solution: {
            summary:
                "Trexpenser combines flexibility with structure to guide users without controlling them.",
            points: [
                "Explicit separation between income and expenses",
                "Manual and automatic savings options",
                "Savings progress calculated from real activity",
                "Clear visual feedback using charts and summaries"
            ]
        },

        features: [
            {
                title: "Income & Expense Management",
                details: [
                    "Single form for adding transactions",
                    "Users select whether an entry is income or expenditure",
                    "Clear categorization for spending analysis",
                    "Real-time updates to totals and balances"
                ]
            },
            {
                title: "Savings Goals System",
                details: [
                    "Multiple savings goals supported",
                    "Manual savings method (user-controlled deposits)",
                    "Automatic savings method (percentage deducted from every income)",
                    "No initial deposit required for automatic savings",
                    "Maximum of 4 active savings goals to encourage focus"
                ]
            },
            {
                title: "Visual Insights",
                details: [
                    "Charts for income vs expenses",
                    "Savings progress visualization",
                    "Focus on clarity over financial complexity",
                    "Quick financial health assessment at a glance"
                ]
            },
            {
                title: "Authentication & User Data",
                details: [
                    "Secure authentication system",
                    "Row level security",
                    "User-specific data isolation",
                    "Expenses, savings, and records scoped per user",
                    "Real-time data updates using Supabase database"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "No rigid budgeting rules",
                reason: "The app reflects real spending behavior instead of enforcing idealized budgets."
            },
            {
                decision: "Manual savings progress calculation",
                reason: "Improves transparency and helps users understand how their actions affect savings."
            },
            {
                decision: "Limit on active savings goals",
                reason: "Prevents over-planning and encourages realistic financial focus."
            },
            {
                decision: "Mobile-first layout",
                reason: "Designed for frequent daily use, not occasional financial reviews."
            }
        ],

        techStack: {
            frontend: ["React", "Next.js"],
            styling: ["Tailwind CSS"],
            stateManagement: ["Context API"],
            backend: ["Supabase"],
            dataVisualization: ["Chart libraries"],
            deployment: ["Vercel"]
        },

        challengesAndLearnings: [
            "Managing real-time Firestore queries efficiently",
            "Handling Firestore Timestamp to JavaScript Date conversion",
            "Designing flexible savings logic that feels natural",
            "Structuring application state for scalability"
        ],

        outcomes: {
            summary:
                "Trexpenser evolved from a basic expense tracker into a complete personal finance tool focused on clarity, discipline, and usability.",
            highlights: [
                "Demonstrates product thinking beyond UI",
                "Shows real-world data modeling and state management",
                "Balances technical decisions with user experience"
            ]
        },

        links: {
            live: "https://trexpenser.vercel.app/",
            github: "https://github.com/Abosi-Godwin/Trexpenser.git"
        },

        cta: ["View Live App", "View Source Code", "Read Other Case Studies"],

        tags: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Supabase",
            "Finance App",
            "Product Design",
            "State Management"
        ]
    },
    {
        id: "leeslagos",
        slug: "leeslagos-fashion-ecommerce",
        title: "LeesLagos",
        subtitle: "Modern Fashion & Lifestyle Store",
        category: "E-commerce Website",
        status: "Completed",
        year: "2025",

        shortDescription:
            "LeesLagos is a modern fashion e-commerce platform designed to showcase and sell stylish clothing with a clean, conversion-focused shopping experience.",

        overview:
            "LeesLagos is a fashion and lifestyle e-commerce website built to help a growing brand establish a strong online presence and convert visitors into buyers. The platform focuses on product clarity, smooth navigation, and a mobile-first shopping flow. Instead of overwhelming users with clutter, the experience emphasizes visual appeal, fast browsing, and frictionless purchasing — especially for mobile shoppers.",

        problem: {
            summary:
                "Many small fashion brands struggle with presenting their products professionally online and converting social media traffic into actual sales.",
            points: [
                "Poor product presentation reduces buyer trust",
                "Cluttered layouts distract users from purchasing",
                "Mobile shopping experience is often neglected",
                "Lack of clear product structure hurts discoverability"
            ]
        },

        solution: {
            summary:
                "LeesLagos provides a clean, mobile-first storefront optimized for product discovery and conversion.",
            points: [
                "Visually focused product layout",
                "Clear navigation and product categorization",
                "Mobile-optimized shopping experience",
                "Conversion-focused product pages",
                "Simple and scalable store structure"
            ]
        },

        features: [
            {
                title: "Product Catalog",
                details: [
                    "Well-structured product collections",
                    "Clean product cards with key information",
                    "Category-based product filtering",
                    "Scalable structure for future inventory growth"
                ]
            },
            {
                title: "Product Details Experience",
                details: [
                    "High-visibility product imagery",
                    "Clear pricing and product descriptions",
                    "Size and variant selection support",
                    "Focused call-to-action for purchases"
                ]
            },
            {
                title: "Mobile-First Shopping",
                details: [
                    "Responsive layout across devices",
                    "Thumb-friendly navigation",
                    "Optimized spacing for small screens",
                    "Fast-loading product views"
                ]
            },
            {
                title: "Brand Presentation",
                details: [
                    "Consistent visual identity",
                    "Clean typography and spacing system",
                    "Modern fashion-focused aesthetic",
                    "Designed to build brand credibility"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "Visual-first product layout",
                reason: "Fashion buyers rely heavily on imagery before making purchase decisions."
            },
            {
                decision: "Minimal navigation structure",
                reason: "Reduces friction and helps users reach products faster."
            },
            {
                decision: "Mobile-first design approach",
                reason: "Most traffic for fashion brands comes from mobile users."
            },
            {
                decision: "Conversion-focused product pages",
                reason: "Keeps users focused on purchasing rather than wandering."
            }
        ],

        techStack: {
            frontend: ["ReactJs"],
            styling: ["Tailwind CSS"],
            stateManagement: ["Context API"],
            backend: ["Firebase"],
            deployment: ["Vercel"]
        },

        challengesAndLearnings: [
            "Designing an e-commerce layout that balances aesthetics and performance",
            "Optimizing responsive behavior across multiple screen sizes",
            "Structuring product data for scalability",
            "Maintaining visual consistency across the storefront"
        ],

        outcomes: {
            summary:
                "LeesLagos successfully delivers a clean, modern fashion storefront that strengthens brand credibility and improves the online shopping experience.",
            highlights: [
                "Demonstrates strong e-commerce UX thinking",
                "Shows ability to design for conversion",
                "Balances visual design with performance",
                "Creates a scalable foundation for future growth"
            ]
        },

        links: {
            live: "https://leeslagos.vercel.app/",
            github: "https://github.com/Abosi-Godwin/leeslagos.git"
        },

        cta: ["View Live Store", "View Source Code", "Read Other Case Studies"],

        tags: [
            "React",
            "Firebase",
            "Tailwind CSS",
            "E-commerce",
            "Fashion Store",
            "Product Design",
            "Responsive Design",
            "Frontend Development"
        ]
    },
    {
        id: "sureplug-autos",
        slug: "sureplug-autos-motor-parts",
        title: "SurePlug Autos",
        subtitle: "Motor Parts & Auto Services Landing Page",
        category: "Business Website",
        status: "Completed",
        year: "2025",

        shortDescription:
            "A high-performance landing page for a Nigerian auto parts business, built to drive inquiries and establish brand credibility with a fast, modern web presence.",

        overview:
            "SurePlug Autos is a landing page built for a Nigerian motor parts and auto services business. The goal was simple but important: give a local business a professional digital presence that builds trust with potential customers, communicates services clearly, and drives real inquiries. Most auto businesses in Nigeria rely entirely on word of mouth and social media — SurePlug needed a web presence that would set them apart and hold up on any device.",

        problem: {
            summary:
                "Local auto businesses in Nigeria lack credible web presence, making it hard for potential customers to find, trust, or contact them online.",
            points: [
                "No professional website to establish credibility",
                "Customers can't easily discover or verify the business online",
                "Services and contact information are scattered across social platforms",
                "Competitors with websites win trust by default"
            ]
        },

        solution: {
            summary:
                "A fast, focused landing page that communicates trust, lists services clearly, and makes it effortless for customers to get in touch.",
            points: [
                "Clean hero section with a strong value proposition",
                "Clear services breakdown for easy scanning",
                "Prominent contact and inquiry CTAs throughout",
                "Optimized for mobile where most Nigerian users browse",
                "Framer Motion animations for a premium brand feel"
            ]
        },

        features: [
            {
                title: "Hero & Brand Introduction",
                details: [
                    "Strong headline communicating the business value immediately",
                    "Animated entrance using Framer Motion",
                    "Primary CTA driving users to contact or inquire",
                    "Mobile-optimized layout above the fold"
                ]
            },
            {
                title: "Services Section",
                details: [
                    "Clear breakdown of auto parts and service offerings",
                    "Icon-supported service cards for fast scanning",
                    "Designed to answer customer questions without a call",
                    "Structured for easy content updates"
                ]
            },
            {
                title: "Trust & Credibility Layer",
                details: [
                    "Business positioning copy that builds confidence",
                    "Consistent visual identity across all sections",
                    "Professional typography and spacing system",
                    "Designed to compete with larger, established brands"
                ]
            },
            {
                title: "Contact & Inquiry Flow",
                details: [
                    "Multiple contact touchpoints across the page",
                    "WhatsApp CTA for the Nigerian market",
                    "Clear call-to-action hierarchy",
                    "Frictionless path from landing to inquiry"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "WhatsApp as primary contact CTA",
                reason: "WhatsApp is the dominant business communication channel in Nigeria — it removes friction for the target audience."
            },
            {
                decision: "Services over features",
                reason: "Auto customers need to know what you offer, not how you operate. Services are front and center."
            },
            {
                decision: "Minimal page sections",
                reason: "A landing page should convert, not educate. Every section earns its place by moving the user toward contact."
            },
            {
                decision: "Framer Motion for animations",
                reason: "Subtle entrance animations elevate the perceived quality of the brand without hurting performance."
            }
        ],

        techStack: {
            frontend: ["Next.js 15", "TypeScript"],
            styling: ["Tailwind CSS v4"],
            animation: ["Framer Motion v12"],
            deployment: ["Vercel"]
        },

        challengesAndLearnings: [
            "Designing for a Nigerian audience with varied device capabilities and connection speeds",
            "Balancing animation richness with page performance on mobile",
            "Communicating business credibility through design alone without relying on reviews or social proof",
            "Working with Tailwind CSS v4 and its new configuration approach"
        ],

        outcomes: {
            summary:
                "SurePlug Autos now has a professional web presence that sets them apart from competitors and gives customers a trustworthy first impression.",
            highlights: [
                "Demonstrates ability to build for real Nigerian SME clients",
                "Shows conversion-focused landing page thinking",
                "Built with the latest Next.js 15 and Tailwind v4 stack"
            ]
        },

        links: {
            live: "https://sureplugautos.vercel.app/",
            github: null
        },

        cta: ["View Live Site", "Read Other Case Studies"],

        tags: [
            "Next.js 15",
            "TypeScript",
            "Tailwind CSS v4",
            "Framer Motion",
            "Business Website",
            "Nigerian SME",
            "Landing Page"
        ]
    },

    {
        id: "softp",
        slug: "softp-creative-portfolio",
        title: "SOFT-P",
        subtitle: "Multidisciplinary Artist Portfolio",
        category: "Portfolio Website",
        status: "Completed",
        year: "2026",

        shortDescription:
            "A cinematic portfolio website for a Nigerian actor, music artist, and 2D animator — featuring Cloudinary media delivery, Framer Motion animations, and a Firebase-powered bookings system.",

        overview:
            "SOFT-P is a personal portfolio website built for Paulinus Odinaka — a Theatre Arts graduate working across acting, music, and 2D animation. The challenge was creating a single digital space that could hold three distinct creative disciplines without feeling cluttered or unfocused. The result is a cinematic, media-rich experience that presents each craft with the weight it deserves, while giving industry contacts a clear path to book or collaborate.",

        problem: {
            summary:
                "Creative professionals with multiple disciplines struggle to present all their work in one place without diluting their identity or confusing visitors.",
            points: [
                "Acting, music, and animation require very different presentation formats",
                "No central booking or contact system for industry inquiries",
                "Social media profiles fragment the portfolio across platforms",
                "Lack of a professional web presence limits industry opportunities"
            ]
        },

        solution: {
            summary:
                "A unified cinematic portfolio that gives each discipline its own space while maintaining a consistent brand identity and a clear path to bookings.",
            points: [
                "Discipline-specific sections with tailored media presentation",
                "Cloudinary for optimized video and image delivery",
                "Firebase-powered bookings system for industry inquiries",
                "Framer Motion for cinematic transitions between sections",
                "Single cohesive identity across all three creative areas"
            ]
        },

        features: [
            {
                title: "Cinematic Hero & Brand Identity",
                details: [
                    "Full-screen hero with atmospheric design",
                    "Framer Motion entrance animations for dramatic effect",
                    "Strong visual identity that reflects the artist's persona",
                    "Immediate communication of multidisciplinary range"
                ]
            },
            {
                title: "Acting Showcase",
                details: [
                    "Performance reels delivered via Cloudinary",
                    "Credits and production history display",
                    "Optimized video loading for smooth playback",
                    "Designed for casting directors and producers"
                ]
            },
            {
                title: "Music Section",
                details: [
                    "Audio and visual media integration",
                    "Discography and release presentation",
                    "Cloudinary-powered media delivery",
                    "Clean layout that keeps focus on the music"
                ]
            },
            {
                title: "Bookings System",
                details: [
                    "Firebase-powered inquiry and bookings form",
                    "Real-time form submissions stored in Firestore",
                    "Clear categorization by discipline for context",
                    "Professional booking flow for industry contacts"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "Cinematic pacing over fast navigation",
                reason: "Creative portfolios should feel like an experience, not a resume. Slower transitions build atmosphere and respect."
            },
            {
                decision: "Cloudinary for all media",
                reason: "Video and image assets for a creative portfolio are large. Cloudinary handles optimization and delivery so performance doesn't suffer."
            },
            {
                decision: "Unified identity across disciplines",
                reason: "Separating three disciplines into different sites would dilute the personal brand. One cohesive site tells a fuller story."
            },
            {
                decision: "Firebase for bookings over a third-party form tool",
                reason: "Storing submissions in Firestore gives the client direct ownership of their inquiry data without depending on external SaaS tools."
            }
        ],

        techStack: {
            frontend: ["Next.js", "TypeScript"],
            styling: ["Tailwind CSS"],
            animation: ["Framer Motion"],
            media: ["Cloudinary"],
            backend: ["Firebase", "Firestore"],
            deployment: ["Vercel"]
        },

        challengesAndLearnings: [
            "Designing a unified visual identity that works across three very different creative disciplines",
            "Optimizing video delivery for users on slower Nigerian mobile connections",
            "Building a bookings flow that feels professional without overcomplicating the UX",
            "Managing Cloudinary asset organization for a media-heavy site"
        ],

        outcomes: {
            summary:
                "SOFT-P gives Paulinus Odinaka a professional, cinematic home for his entire creative body of work — one URL that represents everything he does.",
            highlights: [
                "Demonstrates ability to build client sites beyond standard business pages",
                "Shows media-heavy architecture with Cloudinary and Firebase",
                "Proves design range — from finance apps to creative portfolios"
            ]
        },

        links: {
            live: "https://softp.vercel.app",
            github: null
        },

        cta: ["View Live Portfolio", "Read Other Case Studies"],

        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Firebase",
            "Cloudinary",
            "Creative Portfolio",
            "Client Project"
        ]
    }
];
