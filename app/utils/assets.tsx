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
  FaSquareGithub,
} from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiSupabase, SiVercel } from "react-icons/si";

import myImage from "../../public/relaxe.jpg";

type SkillItem = {
  title: string;
  icon: ComponentType;
};
type IntroInfo = {
  image: StaticImageData;
  title: string;
};
type HighlightProps = string[];

export const introInfo: IntroInfo = [
  {
    image: myImage,
    title: "Landing page",
  },
  {
    image: myImage,
    title: "Sign up page",
  },
  {
    image: myImage,
    title: "login page",
  },
  {
    image: myImage,
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
export const coreSkills: SkillItem = [
  { title: "HTML5", icon: FaHtml5 },

  { title: "CSS3", icon: FaCss3Alt },

  { title: "JavaScript (ES6+)", icon: FaSquareJs },

  { title: "TypeScript", icon: SiTypescript },

  { title: "React 19", icon: FaReact },

  { title: "Nextjs 6", icon: RiNextjsFill },

  { title: "TailwindCSS", icon: RiTailwindCssFill },
];

export const tools: SkillItem = [
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
export const softSkills: SkillItem = [
  {
    title: "Problem-Solving",
    icon: FaShopify,
  },
  {
    title: "Attention to Detail",
    icon: FaWordpress,
  },
  {
    title: "Communication",
    icon: SiSupabase,
  },
  {
    title: "Time Management",
    icon: FaGitAlt,
  },
  {
    title: "Adaptability",
    icon: FaGithub,
  },
  {
    title: "Team Collaboration",
    icon: SiVercel,
  },
  {
    title: "Creativity",
    icon: FaFigma,
  },
];
