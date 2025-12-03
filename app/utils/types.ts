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
export type { SkillItem, HighlightProps, IntroInfo, ProjectsProps };
