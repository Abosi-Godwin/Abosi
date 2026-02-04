import {
    FaHtml5,
    FaCss3Alt,
    FaSquareJs,
    FaReact,
    FaShopify,
    FaWordpress,
    FaGitAlt,
    FaGithub,
    FaFigma
} from "react-icons/fa6";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSupabase, SiVercel } from "react-icons/si";

import {
    LuBrain,
    LuSearch,
    LuMessagesSquare,
    LuClock3,
    LuRefreshCw,
    LuUsers,
    LuSparkles
} from "react-icons/lu";

import {
    SkillItem,
    HighlightProps,
    IntroInfo,
    ProjectsProps,
    CaseStudy
} from "./types";

import myImage from "../../public/relaxe.jpg";
import trexpenser from "../../public/trexpenser.png";

export const introInfo: IntroInfo[] = [
    {
        image: myImage,
        title: "Landing page"
    },
    {
        image: trexpenser,
        title: "Sign up page"
    },
    {
        image: myImage,
        title: "login page"
    },
    {
        image: trexpenser,
        title: "Dashboard page"
    }
];

export const projectHighlight: HighlightProps = [
    " Carefully designed financial UX for effortless daily use",
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

    { title: "Nextjs 6", icon: RiNextjsFill },

    { title: "TailwindCSS", icon: RiTailwindCssFill }
];

export const tools: SkillItem[] = [
    {
        title: "Shopify",
        icon: FaShopify
    },
    {
        title: "WordPress",
        icon: FaWordpress
    },
    {
        title: "Supabase",
        icon: SiSupabase
    },
    {
        title: "Git",
        icon: FaGitAlt
    },
    {
        title: "GitHub",
        icon: FaGithub
    },
    {
        title: "Vercel",
        icon: SiVercel
    },
    {
        title: "Figma",
        icon: FaFigma
    }
];

export const softSkills: SkillItem[] = [
    {
        title: "Problem-Solving",
        icon: LuBrain
    },
    {
        title: "Attention to Detail",
        icon: LuSearch
    },
    {
        title: "Communication",
        icon: LuMessagesSquare
    },
    {
        title: "Time Management",
        icon: LuClock3
    },
    {
        title: "Adaptability",
        icon: LuRefreshCw
    },
    {
        title: "Team Collaboration",
        icon: LuUsers
    },
    {
        title: "Creativity",
        icon: LuSparkles
    }
];

export const projects: ProjectsProps[] = [
    {
        id: 1,
        slug: "leeslagos",
        title: "LeesLagos — Cosmetics E-commerce Store",
        shortDescription:
            "A beautifully designed cosmetics e-commerce website with a complete product catalogue and smooth shopping experience.",
        thumbnail: trexpenser,
        tags: ["React", "TailwindCSS", "E-commerce", "Frontend"],
        liveUrl: "https://your-live-link.com"
    },
    {
        id: 2,
        slug: "trexpenser",
        title: "Trexpenser — Personal Finance Tracker",
        shortDescription:
            "A modern expense tracking app helping users manage income, expenses, savings goals, and spending insights.",
        thumbnail: trexpenser,
        tags: ["React", "TailwindCSS", "Charts", "Finance"],
        liveUrl: "https://trexpenser.vercel.app"
    },
    {
        id: 3,
        slug: "chirp-landing-page",
        title: "Chirp Landing Page — Frontend Mentor",
        shortDescription:
            "A pixel-perfect recreation of the Chirp landing page challenge using clean HTML and CSS.",
        thumbnail: trexpenser,
        tags: ["HTML", "CSS", "Frontend Mentor", "Responsive"],
        liveUrl: "https://your-live-link.com"
    },
    {
        id: 4,
        slug: "elvanex",
        title: "Elvanex — Corporate Website",
        shortDescription:
            "A modern corporate website built with Next.js, optimized for performance, responsiveness, and SEO.",
        thumbnail: trexpenser,
        tags: ["Next.js", "TailwindCSS", "SEO", "Corporate Website"],
        liveUrl: "https://your-live-link.com"
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
                    "User-specific data isolation",
                    "Expenses, savings, and records scoped per user",
                    "Real-time data updates using Firestore"
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
            backend: ["Firebase", "Firestore"],
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
            live: null, // add when available
            github: null // add when available
        },

        cta: ["View Live App", "View Source Code", "Read Other Case Studies"],

        tags: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Firebase",
            "Firestore",
            "Finance App",
            "Product Design",
            "State Management"
        ]
    }
];
