const ProjectDetails = async ({
    params
}: {
    params: Promise<{ projectName: string }>;
}) => {
    const { projectName } = await params;

    return (
        <main className="">
            <h1>Hello good afternoon.</h1>
            <h1>Project: {projectName}</h1>
            <p>Details for the {projectName}.</p>
        </main>
    );
};

export default ProjectDetails;
