import { caseStudies } from "../../utils/assets";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
    params: Promise<{ projectName: string }>;
};

// ... keep your generateMetadata as is ...

const ProjectDetails = async ({ params }: Props) => {
    const { projectName } = await params;
    
    // Suggestion: Find by slug or lowercased title
    const item = caseStudies.find(
        data => data.title.toLowerCase() === projectName.toLowerCase() || data.slug === projectName
    );

    if (!item) return <main className="py-28 px-5 max-w-4xl mx-auto">Project not found</main>;

    return (
        <main className="py-28 px-5 max-w-5xl mx-auto space-y-20">
            {/* --- HERO SECTION --- */}
            <section className="space-y-6">
                <Link href="/projects" className="text-sm hover:underline text-gray-500">← Back to Projects</Link>
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{item.title}</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">{item.subtitle}</p>
                </div>

                <div className="flex flex-wrap gap-6 py-6 border-y border-gray-200 dark:border-gray-800 uppercase text-xs tracking-widest font-medium">
                    <div><p className="text-gray-500">Category</p><p>{item.category}</p></div>
                    <div><p className="text-gray-500">Year</p><p>{item.year}</p></div>
                    <div><p className="text-gray-500">Status</p><p>{item.status}</p></div>
                </div>
            </section>

            {/* --- OVERVIEW --- */}
            <section className="grid md:grid-cols-3 gap-10">
                <h2 className="text-2xl font-semibold">Overview</h2>
                <div className="md:col-span-2 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    <p>{item.overview}</p>
                </div>
            </section>

            {/* --- PROBLEM & SOLUTION --- */}
            <section className="grid md:grid-cols-2 gap-12 bg-gray-50 dark:bg-zinc-900 p-8 rounded-2xl">
                <div className="space-y-4">
                    <h3 className="text-red-500 font-bold uppercase tracking-wide text-sm">The Problem</h3>
                    <p className="font-medium">{item.problem.summary}</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                        {item.problem.points.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-green-500 font-bold uppercase tracking-wide text-sm">The Solution</h3>
                    <p className="font-medium">{item.solution.summary}</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                        {item.solution.points.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                </div>
            </section>

            {/* --- FEATURES --- */}
            <section className="space-y-10">
                <h2 className="text-2xl font-semibold text-center">Core Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {item.features.map((feature, i) => (
                        <div key={i} className="border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-lg mb-3">{feature.title}</h4>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                {feature.details.map((detail, idx) => <li key={idx}>• {detail}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- UX DECISIONS & TECH --- */}
            <section className="grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-2xl font-semibold mb-6">UX Strategy</h2>
                    <div className="space-y-6">
                        {item.uxDecisions.map((ux, i) => (
                            <div key={i}>
                                <p className="font-bold italic">"{ux.decision}"</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{ux.reason}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                        {Object.values(item.techStack).flat().map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-xs">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="mt-10">
                        <h3 className="font-bold mb-3">Key Learnings</h3>
                        <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                            {item.challengesAndLearnings.map((l, i) => <li key={i}>→ {l}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            {/* --- CTA / FOOTER --- */}
            <footer className="pt-10 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
                <div className="flex gap-4">
                    <button className="px-6 py-2 bg-black dark:bg-white dark:text-black text-white rounded-lg font-medium hover:opacity-80 transition">
                        Live Demo
                    </button>
                    <button className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-zinc-900 transition">
                        GitHub
                    </button>
                </div>
            </footer>
        </main>
    );
};

export default ProjectDetails;
