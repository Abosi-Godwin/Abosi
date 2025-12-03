const ProjectDetails = async ({ params }: { params: Promise<{ projectName: string }> }) => {
  const name = (await params).projectName;
  return <div>first project {name}</div>;
};

export default ProjectDetails;
