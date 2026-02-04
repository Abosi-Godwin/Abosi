import type { StaticImageData } from "next/image";

type HighlightProps = string[];

interface SkillItem {
    title: string;
    icon: React.ElementType;
}

interface IntroInfo {
    image: StaticImageData;
    title: string;
}

interface ProjectsProps {
    id: number;
    slug: string;
    title: string;
    shortDescription: string;
    thumbnail: StaticImageData;
    tags: Array<string>;
    liveUrl: string;
}
interface ProblemOrSolution  {
    summary: string;
    points: string[];
};

interface Feature  {
    title: string;
    details: string[];
};

interface UXDecision  {
    decision: string;
    reason: string;
};

interface TechStack  {
    frontend: string[];
    styling: string[];
    stateManagement: string[];
    backend: string[];
    dataVisualization: string[];
    deployment: string[];
};

interface Outcomes  {
    summary: string;
    highlights: string[];
};

interface ProjectLinks  {
    live: string | null;
    github: string | null;
};

interface CaseStudy  {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    status: "Completed" | "In Progress" | "Planned";
    year: string;

    shortDescription: string;
    overview: string;

    problem: ProblemOrSolution;
    solution: ProblemOrSolution;

    features: Feature[];

    uxDecisions: UXDecision[];

    techStack: TechStack;

    challengesAndLearnings: string[];

    outcomes: Outcomes;

    links: ProjectLinks;

    cta: string[];

    tags: string[];
};

export type { SkillItem, HighlightProps, IntroInfo, ProjectsProps, CaseStudy };
