import { projects } from "../utils/assets";
import Heading from "./Heading";
import Project from "./Project";

const Projects = () => {
  return (
    <div>
      <Heading text="Featured Projects" />
      <p>
        
Real projects I’ve designed, developed, and shipped.
      </p>

      <div  className="grid grid-cols-1 gap-5 py-10 p-2">
        
      {projects.map((project) => (
        <Project
          key={project.id}
          data={project}
        />
      ))}
      </div>
    </div>
  );
};

export default Projects;
