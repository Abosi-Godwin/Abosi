import SkillsList from "./SkillsList";
import Heading from "./Heading";
import { coreSkills, tools, softSkills } from "../utils/assets";

const Skills = () => {
  return (
    <div className="py-8 px-3">
      <Heading text="Skills" />
      <div className="w-full pt-2 md:pt-5 flex gap-4 flex-col items-start md:items-center justify-between md:flex-row md:gap-0">
        <SkillsList title="Core Skills" datas={coreSkills} />
        <SkillsList title="Tools" datas={tools} />
        <SkillsList title="Soft Skills" datas={softSkills} />
      </div>
    </div>
  );
};

export default Skills;
