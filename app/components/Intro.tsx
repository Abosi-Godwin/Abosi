import ProjectHighlight from "./ProjectHighlight";
import Bio from "./Bio";

const Intro = () => {
  return (
    <div className="text-black/80 flex flex-col items-center justify-between md:items-start">
      <ProjectHighlight />
      <Bio />
    </div>
  );
};

export default Intro;
