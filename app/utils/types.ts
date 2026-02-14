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
interface ProblemOrSolution {
    summary: string;
    points: string[];
}

interface UXDecision {
    decision: string;
    reason: string;
}

interface TechStack {
    frontend: string[];
    styling: string[];
    stateManagement: string[];
    backend: string[];
    dataVisualization: string[];
    deployment: string[];
}

interface Outcomes {
    summary: string;
    highlights: string[];
}

interface ProjectLinks {
    live: string | null;
    github: string | null;
}
/*
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
*/
interface CaseStudyResult {
    metric: string;
    label: string;
}

interface Feature {
    title: string;
    details: string[];
    icon?: React.ReactNode; // ✅ optional (fixes your error)
}

interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    status: string;
    year: string;

    overview: string;
    shortDescription: string;
    positioning?: string; // ✅ optional
    role?: string; // ✅ optional
    duration?: string; // ✅ optional
    heroImage?: string; // ✅ optional

    liveUrl?: string; // ✅ optional
    githubUrl?: string; // ✅ optional

    problem: {
        summary: string;
        points: string[];
    };

    solution: {
        summary: string;
        points: string[];
    };

    results?: CaseStudyResult[]; // ✅ optional

    features: Feature[];

    uxDecisions: {
        decision: string;
        reason: string;
    }[];
    outcomes?: {
        summary: string;
        highlights: string[];
    };
    techStack: Record<string, string[]>;

    challengesAndLearnings: string[];

    links: ProjectLinks;
    cta: string[];
     tags: string[];
}

export type {
    SkillItem,
    HighlightProps,
    IntroInfo,
    ProjectsProps,
    CaseStudy,
    CaseStudyResult,
    Feature
};
