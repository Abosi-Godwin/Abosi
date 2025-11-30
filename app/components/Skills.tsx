import SkillsList from "./SkillsList";
import Heading from "./Heading";
import { coreSkills, tools, softSkills } from "../utils/assets";

const Skills = () => {
  return (
    <div className="py-8 px-3">
      <Heading text="Skills" />
      <div className="w-full flex flex-col items-center justify-between md:flex-row">
        <SkillsList title="Core Skills" datas={coreSkills} />
        <SkillsList title="Tools" datas={tools} />
        <SkillsList title="Soft Skills" datas={softSkills} />
      </div>
    </div>
  );
};

export default Skills;
