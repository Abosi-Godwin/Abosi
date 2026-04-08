import Link from "next/link";

import { projects } from "../utils/assets";
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
            
            <div className="flex justify-center gap-4 py-8 md:justify-start">
                <Link
                    href="/projects"
                    className="rounded-md border-2 border-black/60 px-6 py-2 font-bold capitalize text-black/70 transition-colors hover:bg-black/5"
                >
                    View All Projects
                </Link>
            </div>
        </div>
    );
};

export default Projects;
