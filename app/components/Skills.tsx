import SkillsList from "./SkillsList";
import Heading from './Heading';
import { coreSkills, tools, softSkills } from "../utils/assets";
const Skills = () => {
  return (
    <div className="py-8 px-3">
      <h1>My skills</h1>
      <Heading text="My skills"/>
      <div>
        <SkillsList
          title="Core Skills"
          datas={coreSkills}
        />
        <SkillsList
          title="Tools "
          datas={tools}
        />
        <SkillsList
          title="Soft Skills"
          datas={softSkills}
        />
      </div>
    </div>
  );
};

export default Skills;
