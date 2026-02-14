 import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies } from "../../utils/assets";

// Updated type to handle Promise
type Props = { 
    params: Promise<{ projectName: string }>; 
};

import SectionTitle from "./SectionTitle";
import Meta from "./Meta";
import Badge from "./Badge";

const ProjectDetails = async ({ params }: Props) => {
    // In Next.js 15+, you MUST await params
    const { projectName } = await params;

    const item = caseStudies.find(data => data.slug === projectName);

    if (!item) return notFound();

    return (
        <main className="py-24 px-5 max-w-6xl mx-auto space-y-24">
            {/* ================= HERO ================= */}
            <section className="space-y-8">
                <Link
                    href="/projects"
                    className="text-sm hover:underline text-gray-600"
                >
                    ← Back to Projects
                </Link>
                <div className="space-y-4 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        {item.title}
                    </h1>
                    <p className="text-xl text-gray-700">{item.subtitle}</p>

                    {item.shortDescription && (
                        <p className="text-gray-600 leading-relaxed">
                            {item.shortDescription}
                        </p>
                    )}
                </div>
                {/* meta */}
                <div className="flex flex-wrap gap-8 py-6 border-y border-gray-200 uppercase text-xs tracking-widest font-medium">
                    <Meta label="Category" value={item.category} />
                    <Meta label="Year" value={item.year} />
                    <Meta label="Status" value={item.status} />
                </div>
            </section>

            {/* ================= OVERVIEW ================= */}
            <section className="grid md:grid-cols-3 gap-12">
                <SectionTitle>Overview</SectionTitle>
                <div className="md:col-span-2 text-lg leading-relaxed text-gray-700">
                    <p>{item.overview}</p>
                </div>
            </section>

            {/* ================= PROBLEM / SOLUTION ================= */}
            <section className="grid md:grid-cols-2 gap-12 bg-gray-50 p-10 rounded-3xl">
                <div className="space-y-4">
                    <Badge color="red">The Problem</Badge>
                    <p className="font-medium">{item.problem.summary}</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {item.problem.points.map((p, i) => (
                            <li key={i}>{p}</li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4">
                    <Badge color="green">The Solution</Badge>
                    <p className="font-medium">{item.solution.summary}</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {item.solution.points.map((s, i) => (
                            <li key={i}>{s}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ================= FEATURES ================= */}
            <section className="space-y-12">
                <SectionTitle centered>Core Features</SectionTitle>

                <div className="grid md:grid-cols-2 gap-6">
                    {item.features.map((feature, i) => (
                        <div
                            key={i}
                            className="border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-all bg-white"
                        >
                            <div className="space-y-3">
                                <h4 className="font-bold text-lg">
                                    {feature.title}
                                </h4>

                                <ul className="space-y-2 text-sm text-gray-600">
                                    {feature.details
                                        .slice(0, 4)
                                        .map((detail, idx) => (
                                            <li key={idx}>• {detail}</li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= UX + TECH ================= */}
            <section className="grid md:grid-cols-2 gap-20">
                {/* UX */}
                <div>
                    <SectionTitle>UX Strategy</SectionTitle>
                    <div className="space-y-6">
                        {item.uxDecisions.map((ux, i) => (
                            <div key={i} className="space-y-2">
                                <p className="font-semibold italic">
                                    "{ux.decision}"
                                </p>
                                <p className="text-sm text-gray-600">
                                    {ux.reason}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TECH */}
                <div>
                    <SectionTitle>Tech Stack</SectionTitle>

                    <div className="space-y-6">
                        {Object.entries(item.techStack).map(
                            ([group, techs]) => (
                                <div key={group} className="space-y-3">
                                    <p className="text-xs uppercase tracking-widest text-gray-500">
                                        {group}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {(techs as string[]).map(
                                            (tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-gray-200 rounded-full text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    <div className="mt-10">
                        <h3 className="font-bold mb-3">Key Learnings</h3>
                        <ul className="text-sm space-y-2 text-gray-600">
                            {item.challengesAndLearnings.map((l, i) => (
                                <li key={i}>→ {l}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <footer className="pt-12 border-t border-gray-200 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex gap-4">
                    {item.links.live && (
                        <a
                            href={item.links.live}
                            target="_blank"
                            className="px-6 py-3 bg-black text-white rounded-xl
                            font-medium hover:opacity-80 transition"
                            rel="noopener noreferrer"
                        >
                            🚀 View Live Product
                        </a>
                    )}

                    {item.links.github && (
                        <a
                            href={item.links.github}
                            target="_blank"
                            className="px-6 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition"
                            rel="noopener noreferrer"
                        >
                            🧠 Explore Source Code
                        </a>
                    )}
                </div>
            </footer>
        </main>
    );
};

export default ProjectDetails;
