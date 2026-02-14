import { caseStudies } from "../../utils/assets";
import { Metadata } from "next";

type Props = {
    params: Promise<{ projectName: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { projectName } = await params;
    const item = caseStudies.find(
        data => data.title.toLowerCase() === projectName
    );

    return {
        title: `${item?.title || "Project"} | Abosi Godwin`,
        description:
            item?.subtitle || "A detailed look into my development work.",
        alternates: {
            canonical: `/projects/${projectName}`
        },
        openGraph: {
            title: `${item?.title} | Abosi Godwin`,
            description: item?.subtitle,
            url: `https://abosi.vercel.app/projects/${projectName}`,
            type: "article"
        }
    };
}

const ProjectDetails = async ({ params }: Props) => {
    const { projectName } = await params;

    const item = caseStudies.find(
        data => data.title.toLowerCase() === projectName
    );

    if (!item) return <main className="py-28 px-5">Project not found</main>;

    return (
        <main className="py-28 px-5">
            <div>
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <p>{item.subtitle}.</p>
            </div>

            <div className="flex justify-between w-full py-2">
                <span>web application</span>
                <span>2025</span>
                <span>completed</span>
            </div>
            
            <div>
              <p>{item.shortDescription}</p>
            </div>
        </main>
    );
};

export default ProjectDetails;
