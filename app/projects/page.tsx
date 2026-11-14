import { Metadata } from "next";
import { LuZap, LuTrendingUp, LuWrench, LuGithub } from "react-icons/lu";
import { projects, practiceProjects } from "../utils/assets";
import { caseStudies } from "../utils/caseStudies";
import Heading from "../components/Heading";
import Project from "../components/Project";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";
import Link from "next/link";

const siteUrl = "https://abosi.vercel.app";
const pageUrl = `${siteUrl}/projects`;
const title = "Projects | Shopify, Next.js & Web Apps | Abosi Godwin";
const description =
    "Shopify stores, headless Next.js storefronts, business websites and web apps built by Abosi Godwin, with case studies on what was built and how.";
const socialDescription =
    "Shopify stores, Next.js storefronts, business websites and web apps by Abosi Godwin.";
const ogImage = `${siteUrl}/Abosi.png`;

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: pageUrl
    },
    robots: {
        index: true,
        follow: true
    },
    openGraph: {
        title,
        description: socialDescription,
        url: pageUrl,
        siteName: "Abosi Godwin",
        type: "website",
        images: [
            {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: "Projects by Abosi Godwin"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title,
        description: socialDescription,
        images: [ogImage]
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "CollectionPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: "Projects by Abosi Godwin",
            description,
            inLanguage: "en",
            isPartOf: { "@id": `${siteUrl}/#website` },
            mainEntity: { "@id": `${pageUrl}#projects` },
            breadcrumb: { "@id": `${pageUrl}#breadcrumb` }
        },
        {
            "@type": "ItemList",
            "@id": `${pageUrl}#projects`,
            name: "Projects by Abosi Godwin",
            itemListElement: caseStudies.map((study, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `${siteUrl}/projects/${study.slug}`,
                name: study.title
            }))
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${pageUrl}#breadcrumb`,
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: siteUrl
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Projects",
                    item: pageUrl
                }
            ]
        }
    ]
};

const SectionHeading = ({
    title,
    description
}: {
    title: string;
    description: string;
}) => (
    <div className="mt-14">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="mt-2 max-w-2xl text-gray-600">{description}</p>
    </div>
);

const ProjectsPage = () => {
    const hasProjects = projects.length > 0;
    const hasPracticeProjects = practiceProjects.length > 0;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
                }}
            />

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <nav
                        aria-label="Breadcrumb"
                        className="pt-10 mb-6 flex items-center gap-2 text-sm text-gray-400"
                    >
                        <Link
                            href="/"
                            className="hover:text-secondary transition-colors"
                        >
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-gray-600 font-medium">
                            Projects
                        </span>
                    </nav>

                    <RevealGroup onMount className="text-left">
                        <RevealItem>
                            <Heading text="Projects" />
                        </RevealItem>
                        <RevealItem>
                            <p className="mt-3 text-gray-600 max-w-2xl">
                                Shopify stores, headless storefronts, business
                                websites and web apps, designed, developed and
                                shipped end to end.
                            </p>
                        </RevealItem>
                        <RevealItem className="mt-6 flex flex-wrap gap-3 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <LuZap className="text-secondary" />{" "}
                                Fast-loading, optimized builds
                            </span>
                            <span className="flex items-center gap-2">
                                <LuTrendingUp className="text-secondary" />{" "}
                                Conversion-focused design
                            </span>
                            <span className="flex items-center gap-2">
                                <LuWrench className="text-secondary" />{" "}
                                Real-world client & production projects
                            </span>
                        </RevealItem>
                    </RevealGroup>

                    {hasProjects && (
                        <>
                            <Reveal>
                                <SectionHeading
                                    title="Production Builds"
                                    description="Live products and client work, built end to end."
                                />
                            </Reveal>
                            <RevealGroup className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3">
                                {projects.map(project => (
                                    <RevealItem
                                        key={project.id}
                                        className="h-full [&>*]:h-full"
                                    >
                                        <Project data={project} />
                                    </RevealItem>
                                ))}
                            </RevealGroup>
                        </>
                    )}

                    {hasPracticeProjects && (
                        <>
                            <Reveal>
                                <SectionHeading
                                    title="Practice Builds"
                                    description="Smaller builds and concept projects where I sharpen specific skills."
                                />
                            </Reveal>
                            <RevealGroup className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3">
                                {practiceProjects.map(project => (
                                    <RevealItem
                                        key={project.id}
                                        className="h-full [&>*]:h-full"
                                    >
                                        <Project data={project} />
                                    </RevealItem>
                                ))}
                            </RevealGroup>
                        </>
                    )}

                    {!hasProjects && !hasPracticeProjects && (
                        <div className="pt-16 text-center">
                            <p className="text-gray-500 text-lg">
                                Projects coming soon. Check back shortly.
                            </p>
                        </div>
                    )}

                    <Reveal className="mt-14">
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-10 text-center">
                            <LuGithub className="mx-auto mb-3 text-3xl text-gray-700" />
                            <h2 className="text-lg font-bold text-gray-900 mb-2">
                                Want to see more?
                            </h2>
                            <p className="text-gray-500 mb-6 max-w-md mx-auto">
                                These are the highlights. Smaller builds,
                                experiments, and practice projects live on my
                                GitHub.
                            </p>
                            <a
                                href="https://github.com/Abosi-Godwin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded-md bg-gray-900 px-7 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
                            >
                                Visit GitHub
                            </a>
                        </div>
                    </Reveal>

                    <Reveal className="mt-20 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Have a project in mind?
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Let&apos;s build something that actually moves your
                            business forward.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-block rounded-md bg-secondary px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
                        >
                            Start a Project
                        </Link>
                    </Reveal>
                </div>
            </section>
        </>
    );
};

export default ProjectsPage;
