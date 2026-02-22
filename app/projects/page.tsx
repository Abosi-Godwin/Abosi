import { projects } from "../utils/assets";

import Heading from "../components/Heading";
import Project from "../components/Project";

const ProjectsPage = () => {
    return (
        <div className="py-10 px-2">
            <div className="pt-14">
                <Heading text="My past projects" />
                <p className="text-gray-700">
                    I build unique, modern, and responsive websites that help
                    brands stand out online.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-3">
                {projects.map(project => (
                    <Project key={project.id} data={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
