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
  LuSparkles,
} from "react-icons/lu";

import { SkillItem, HighlightProps, IntroInfo, ProjectsProps } from "./types";

import myImage from "../../public/relaxe.jpg";
import trexpenser from "../../public/trexpenser.png";

export const introInfo: IntroInfo[] = [
  {
    image: myImage,
    title: "Landing page",
  },
  {
    image: trexpenser,
    title: "Sign up page",
  },
  {
    image: myImage,
    title: "login page",
  },
  {
    image: trexpenser,
    title: "Dashboard page",
  },
];

export const projectHighlight: HighlightProps = [
  " Carefully designed financial UX for effortless daily use",
  "Savings goals with manual and automatic contribution options",
  "Visual insights using charts for income, expenses, and progress",
  "Fully built with React + Tailwind and optimized for mobile",
  "No backend dependencies — lightweight, fast, and reliable",
];

export const coreSkills: SkillItem[] = [
  { title: "HTML5", icon: FaHtml5 },

  { title: "CSS3", icon: FaCss3Alt },

  { title: "JavaScript (ES6+)", icon: FaSquareJs },

  { title: "TypeScript", icon: SiTypescript },

  { title: "React 19", icon: FaReact },

  { title: "Nextjs 6", icon: RiNextjsFill },

  { title: "TailwindCSS", icon: RiTailwindCssFill },
];

export const tools: SkillItem[] = [
  {
    title: "Shopify",
    icon: FaShopify,
  },
  {
    title: "WordPress",
    icon: FaWordpress,
  },
  {
    title: "Supabase",
    icon: SiSupabase,
  },
  {
    title: "Git",
    icon: FaGitAlt,
  },
  {
    title: "GitHub",
    icon: FaGithub,
  },
  {
    title: "Vercel",
    icon: SiVercel,
  },
  {
    title: "Figma",
    icon: FaFigma,
  },
];

export const softSkills: SkillItem[] = [
  {
    title: "Problem-Solving",
    icon: LuBrain,
  },
  {
    title: "Attention to Detail",
    icon: LuSearch,
  },
  {
    title: "Communication",
    icon: LuMessagesSquare,
  },
  {
    title: "Time Management",
    icon: LuClock3,
  },
  {
    title: "Adaptability",
    icon: LuRefreshCw,
  },
  {
    title: "Team Collaboration",
    icon: LuUsers,
  },
  {
    title: "Creativity",
    icon: LuSparkles,
  },
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
    liveUrl: "https://your-live-link.com",
  },
  {
    id: 2,
    slug: "trexpenser",
    title: "Trexpenser — Personal Finance Tracker",
    shortDescription:
      "A modern expense tracking app helping users manage income, expenses, savings goals, and spending insights.",
    thumbnail: trexpenser,
    tags: ["React", "TailwindCSS", "Charts", "Finance"],
    liveUrl: "https://trexpenser.vercel.app",
  },
  {
    id: 3,
    slug: "chirp-landing-page",
    title: "Chirp Landing Page — Frontend Mentor",
    shortDescription:
      "A pixel-perfect recreation of the Chirp landing page challenge using clean HTML and CSS.",
    thumbnail: trexpenser,
    tags: ["HTML", "CSS", "Frontend Mentor", "Responsive"],
    liveUrl: "https://your-live-link.com",
  },
  {
    id: 4,
    slug: "elvanex",
    title: "Elvanex — Corporate Website",
    shortDescription:
      "A modern corporate website built with Next.js, optimized for performance, responsiveness, and SEO.",
    thumbnail: trexpenser,
    tags: ["Next.js", "TailwindCSS", "SEO", "Corporate Website"],
    liveUrl: "https://your-live-link.com",
  },
];
