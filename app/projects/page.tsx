import { Metadata } from "next";
import { LuZap, LuTrendingUp, LuWrench } from "react-icons/lu";
import { projects, practiceProjects } from "../utils/assets";
import Heading from "../components/Heading";
import Project from "../components/Project";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects | Abosi Godwin — Full-Stack Developer",
    description:
        "Explore projects built by Abosi Godwin — full-stack web apps, e-commerce stores, and SaaS products using Next.js, React, TypeScript, and Supabase.",
    alternates: {
        canonical: "https://abosi.vercel.app/projects"
    },
    openGraph: {
        title: "Projects | Abosi Godwin — Full-Stack Developer",
        description:
            "Full-stack web apps, e-commerce stores, and SaaS products by Abosi Godwin.",
        url: "https://abosi.vercel.app/projects",
        siteName: "Abosi Godwin",
        type: "website",
        images: [
            {
                url: "https://abosi.vercel.app/Abosi.png",
                width: 1200,
                height: 630,
                alt: "Projects by Abosi Godwin"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects | Abosi Godwin — Full-Stack Developer",
        description:
            "Full-stack web apps, e-commerce stores, and SaaS products by Abosi Godwin.",
        images: ["https://abosi.vercel.app/Abosi.png"]
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "CollectionPage",
            "@id": "https://abosi.vercel.app/projects#webpage",
            url: "https://abosi.vercel.app/projects",
            name: "Projects | Abosi Godwin",
            isPartOf: { "@id": "https://abosi.vercel.app/#website" },
            breadcrumb: {
                "@id": "https://abosi.vercel.app/projects#breadcrumb"
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://abosi.vercel.app/projects#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://abosi.vercel.app"
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Projects",
                    item: "https://abosi.vercel.app/projects"
                }
            ]
        }
    ]
};

const ProjectsPage = () => {
    const hasProjects = projects.length > 0;
    const hasPractice = practiceProjects.length > 0;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Breadcrumb */}
                    <nav
                        aria-label="Breadcrumb"
                        className="pt-10 mb-6 flex items-center gap-2 text-sm text-gray-400"
                    >
                        <Link
                            href="/"
                            className="hover:text-primary transition-colors"
                        >
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-gray-600 font-medium">
                            Projects
                        </span>
                    </nav>

                    {/* Intro */}
                    <div className="text-center md:text-left">
                        <Heading text="Featured Projects" />
                        <p className="mt-3 text-gray-600 max-w-2xl">
                            Full-stack web apps, SaaS products, and client
                            builds — designed, developed, and shipped end to
                            end.
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                            <LuZap className="text-primary" /> Fast-loading,
                            optimized builds
                        </span>
                        <span className="flex items-center gap-2">
                            <LuTrendingUp className="text-primary" />{" "}
                            Conversion-focused design
                        </span>
                        <span className="flex items-center gap-2">
                            <LuWrench className="text-primary" /> Real-world
                            client & production projects
                        </span>
                    </div>

                    {/* Featured */}
                    {hasProjects ? (
                        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3">
                            {projects.map(project => (
                                <Project key={project.id} data={project} />
                            ))}
                        </div>
                    ) : (
                        <div className="pt-16 text-center">
                            <p className="text-gray-500 text-lg">
                                Projects coming soon. Check back shortly.
                            </p>
                        </div>
                    )}

                    {/* Practice */}
                    {hasPractice && (
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
                    <div className="mt-20 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Have a project in mind?
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Let's build something that actually moves your
                            business forward.
                        </p>
                        <a
                            href="/#contact"
                            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
                        >
                            Start a Project
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectsPage;
