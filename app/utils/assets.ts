import {
    FaHtml5,
    FaCss3Alt,
    FaSquareJs,
    FaReact,
    FaShopify,
    FaGitAlt,
    FaGithub,
    FaFigma,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
    FaFacebookF,
    FaUpwork
} from "react-icons/fa6";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSupabase, SiVercel, SiFirebase } from "react-icons/si";

import {
    SkillItem,
    HighlightProps,
    IntroInfo,
    ProjectsProps
} from "./types";

import myImage from "../../public/projects/relaxe.jpg";

import trexpenser from "../../public/projects/trexpenser.png";
import leeslagosThumbnail from "../../public/projects/leeslagos-thumb.jpeg";
import trexpenserThumbnail from "../../public/projects/trexpenser.png";
import chirpThumbnail from "../../public/projects/chirp.jpg";
import visyonedThumbnail from "../../public/projects/visyond-thumb.jpeg";
import softpThumbnail from "../../public/projects/softp-thumb.jpeg";
import sollyThumbnail from "../../public/projects/sollystore.jpeg";
import elvanexThumbnail from "../../public/projects/elvanex.jpg";
import sureplugThumbnail from "../../public/projects/sureplugautos.png";

import sprouteThumbnail from "../../public/projects/sproute-thumb.png";
import sprouteDashboard from "../../public/projects/sproute-dashboard.jpg";
import sprouteOutreach from "../../public/projects/sproute-outreach.jpg";
import sprouteSearch from "../../public/projects/sproute-search.jpg";
import sprouteLogin from "../../public/projects/sproute-login.png";
import uniformThumbnail from "../../public/projects/uniform.png";
export const introInfo: IntroInfo[] = [
    { image: sprouteThumbnail, title: "Landing page" },
    { image: sprouteDashboard, title: "Dashboard" },
    { image: sprouteOutreach, title: "Outreach flow" },
    { image: sprouteSearch, title: "Chat helper" },
    { image: sprouteLogin, title: "Login page" }
];

export const mySocials = [
    {
        url: "https://www.linkedin.com/in/abosigodwin",
        name: "LinkedIn",
        icon: FaLinkedinIn
    },
    {
        url: "https://github.com/Abosi-Godwin",
        name: "Github",
        icon: FaGithub
    },
    { url: "https://www.x.com/AbosiGodwin", name: "Twitter", icon: FaTwitter },
    {
        url: "https://www.facebook.com/AbosiGodwinN",
        name: "Facebook",
        icon: FaFacebookF
    },

    {
        url: "https://www.upwork.com/freelancers/~010c925ad55e60618b",
        name: "Upwork",
        icon: FaUpwork
    }
];
 

export const projectHighlight: HighlightProps = [
    "AI-powered lead discovery built for WhatsApp outreach",
    "Nine reply scenarios with tone-specific templates (casual, formal, pidgin)",
    "Automated no-reply follow-up sequences that still sound human",
    "Paystack subscription billing with serverless verification",
    "Built with Next.js and Supabase, fast, secure, and scalable"
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

    { title: "Supabase", icon: SiSupabase },
    { title: "Git", icon: FaGitAlt },
    { title: "GitHub", icon: FaGithub },
    { title: "Vercel", icon: SiVercel },
    { title: "Figma", icon: FaFigma }
];

export const frontendSkills: SkillItem[] = [
    { title: "HTML", icon: FaHtml5 },
    { title: "CSS", icon: FaCss3Alt },
    { title: "JavaScript", icon: FaSquareJs },
    { title: "TypeScript", icon: SiTypescript },
    { title: "ReactJS", icon: FaReact },
    { title: "Next.js", icon: RiNextjsFill },
    { title: "TailwindCSS", icon: RiTailwindCssFill }
];

export const backendSkills: SkillItem[] = [
    { title: "Supabase", icon: SiSupabase },
    { title: "Firebase", icon: SiFirebase }
];

export const ecommerceSkills: SkillItem[] = [
    { title: "Shopify", icon: FaShopify }
];

export const projects: ProjectsProps[] = [
    {
        id: 6,
        slug: "sproute-ai-whatsapp-prospecting",
        title: "Sproute: AI WhatsApp Lead Prospecting SaaS",
        shortDescription:
            "An AI-powered WhatsApp lead prospecting SaaS for freelancers, with tone-matched reply templates, automated follow-ups and Paystack subscription billing.",
        thumbnail: sprouteThumbnail,
        tags: [
            "Next.js",
            "Supabase",
            "TypeScript",
            "AI Integration",
            "Paystack",
            "SaaS"
        ],
        liveUrl: "https://sproute-landing.vercel.app/"
    },
    {
        id: 1,
        slug: "trexpenser-expense-savings-tracker",
        title: "Trexpenser: Personal Finance & Savings Manager",
        shortDescription:
            "A smart personal finance application that helps users track income, manage expenses, and build savings goals with structured financial insights and progress tracking.",
        thumbnail: trexpenserThumbnail,
        tags: [
            "React",
            "Next.js",
            "Supabase",
            "Finance App",
            "Full-Stack",
            "TailwindCSS"
        ],
        liveUrl: "https://trexpenser.vercel.app"
    },
    {
        id: 2,
        slug: "leeslagos-fashion-ecommerce",
        title: "LeesLagos: Cosmetics E-commerce Store",
        shortDescription:
            "A full e-commerce store with a product catalogue, cart, Paystack checkout, delivery tracking and email notifications, built with React and Firebase.",
        thumbnail: leeslagosThumbnail,
        tags: [
            "React",
            "TailwindCSS",
            "E-commerce",
            "Firebase",
            "Firestore",
            "Full-Stack"
        ],
        liveUrl: "https://leeslagos.vercel.app"
    },
    {
        id: 3,
        slug: "softp-creative-portfolio",
        title: "SOFT-P: Multidisciplinary Artist Portfolio",
        shortDescription:
            "A cinematic portfolio website for a Nigerian actor, music artist, and 2D animator, featuring Cloudinary media delivery, Framer Motion animations, and a Firebase-powered bookings system.",
        thumbnail: softpThumbnail,
        tags: [
            "Next.js",
            "TypeScript",
            "Cloudinary",
            "Framer Motion",
            "TailwindCSS",
            "Firebase"
        ],
        liveUrl: "https://softp.vercel.app"
    },
    {
        id: 4,
        slug: "sureplug-autos-motor-parts",
        title: "SurePlug Autos: Motor Parts & Services",
        shortDescription:
            "A high-performance landing page for a Nigerian auto parts business, built to drive inquiries and establish brand credibility with a fast, modern web presence.",
        thumbnail: sureplugThumbnail,
        tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://sureplugautos.vercel.app/"
    },
    {
        id: 5,
        slug: "uniform-headless-shopify-storefront",
        title: "Uniform: Headless Shopify Storefront",
        shortDescription:
            "A headless Shopify storefront built with Next.js, featuring product browsing, search, and customer login and profiles through Shopify's Customer Account API.",
        thumbnail: uniformThumbnail,
        tags: [
            "Shopify",
            "Headless Commerce",
            "Next.js",
            "Customer Account API"
        ],
        liveUrl: "https://headless-demo-gray.vercel.app"
    }
];

export const practiceProjects: ProjectsProps[] = [
    {
        id: 1,
        slug: "chirp-landing-page",
        title: "Chirp Landing Page: Frontend Mentor",
        shortDescription:
            "A pixel-perfect recreation of the Chirp landing page challenge using clean HTML and CSS.",
        thumbnail: chirpThumbnail,
        tags: ["HTML", "CSS", "Frontend Mentor", "Responsive"],
        liveUrl: "https://abosi-godwin-chirp-website.netlify.app/"
    },

    {
        id: 2,
        slug: "elvanex-corporate-website",
        title: "Elvanex: Digital Marketing Corporate Website",
        shortDescription:
            "A modern corporate website for a digital marketing agency, built with Next.js and optimized for performance, SEO, and responsive design.",
        thumbnail: elvanexThumbnail,
        tags: ["Next.js", "TailwindCSS", "Corporate", "SEO"],
        liveUrl: "https://elvanex.vercel.app"
    },

    {
        id: 3,
        slug: "solly-store-ecommerce",
        title: "Solly Store: Full Stack E-commerce Store",
        shortDescription:
            "A full-featured e-commerce store with product catalogue, cart functionality, category filtering, and secure checkout across electronics, fashion, and accessories.",
        thumbnail: sollyThumbnail,
        tags: ["React", "TailwindCSS", "E-commerce", "Frontend"],
        liveUrl: "https://solly-store.vercel.app"
    },
    {
        id: 4,
        slug: "visyoned-eye-care-agency",
        title: "Visyoned: Premium Eye Care Agency Website",
        shortDescription:
            "A premium eye care agency website combining clinical excellence with modern aesthetics, designed to help users find stylish and personalized vision care solutions.",
        thumbnail: visyonedThumbnail,
        tags: ["Next.js", "TailwindCSS", "Healthcare", "Landing Page"],
        liveUrl: "https://visyoned.vercel.app"
    }
];
