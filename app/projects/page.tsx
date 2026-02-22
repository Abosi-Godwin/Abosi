import { projects } from "../utils/assets";

import Heading from "../components/Heading";
import Project from "../components/Project";

const ProjectsPage = () => {
    const hasProjects = projects && projects.length > 0;

    return (
        <section className="py-16 px-4">
            {/* centered container */}
            <div className="max-w-6xl mx-auto">
                {/* intro */}
                <div className="pt-10 text-center md:text-left">
                    <Heading text="Featured Projects" />
                    <p className="mt-3 text-gray-600 max-w-2xl">
                        I design and build fast, modern web experiences that help
                        brands grow and stand out online.
                    </p>
                </div>

                {/* content */}
                {hasProjects ? (
                    <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3">
                        {projects.map(project => (
                            <Project key={project.id} data={project} />
                        ))}
                    </div>
                ) : (
                    <div className="pt-16 text-center">
                        <p className="text-gray-500 text-lg">
                            Projects coming soon. I'm currently working on some
                            exciting builds.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsPage;