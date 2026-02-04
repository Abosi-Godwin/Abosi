import { caseStudies } from "../../utils/assets";

const ProjectDetails = async ({
    params
}: {
    params: Promise<{ projectName: string }>;
}) => {
    const { projectName } = await params;

    const item = caseStudies.find(
        data => data.title.toLowerCase() === projectName
    );

    return (
        <main className="py-36 px-5">
            <h1>Project: {projectName}</h1>
            <p>Details for the {projectName}.</p>
            <p className="leading-relaxed py-5">{item?.shortDescription}</p>
            <p className="leading-relaxed">{item?.overview}</p>
        </main>
    );
};

export default ProjectDetails;
