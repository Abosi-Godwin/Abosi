import ProjectHighlight from "./ProjectHighlight";
import SkillsList from "./SkillsList";
import Bio from "./Bio";

import { coreSkills, tools } from "../utils/assets";

const Intro = () => {
  return (
    <div className="py-8 text-black/80 flex flex-col items-center justify-between">
      <ProjectHighlight />
      <Bio />
    </div>
  );
};

export default Intro;

/*
import ProjectHighlight from "./ProjectHighlight";
import SkillsList from "./SkillsList";
import Bio from "./Bio";

import { coreSkills, tools } from "../utils/assets";

const Intro = () => {
  return (
    <div className="py-8 text-black/80 flex flex-col items-center justify-between">
      <ProjectHighlight />
      <Bio />
      <div className="w-full px-2 py-4 flex flex-col gap-5">
        <SkillsList
          title="Core skills"
          datas={coreSkills}
        />
        <SkillsList
          title="Softwares & Tools"
          datas={tools}
        />
      </div>
    </div>
  );
};

export default Intro;
*/
