 import { projects, practiceProjects } from "../utils/assets";
import Heading from "./Heading";
import Project from "./Project";

const Projects = () => {
    return (
        <div className="py-8 px-4">
            <Heading text="Featured Projects" />
            <p>Real projects I've designed, developed, and shipped.</p>

            <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-3">
                {projects.map(project => (
                    <Project key={project.id} data={project} />
                ))}
            </div>

            {practiceProjects.length > 0 && (
                <div className="mt-14">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">
                        Practice & Challenges
                    </h2>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        {practiceProjects.map(project => (
                            <Project key={project.id} data={project} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;