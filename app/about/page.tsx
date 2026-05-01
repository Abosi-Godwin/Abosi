 import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Abosi Godwin | Full-Stack Developer",
    description:
        "Learn about Abosi Godwin — a self-taught Full-Stack Developer specializing in Next.js, React, TypeScript, and Supabase. Available for freelance and full-time opportunities worldwide.",
    alternates: {
        canonical: "https://abosi.vercel.app/about"
    },
    openGraph: {
        title: "About Abosi Godwin | Full-Stack Developer",
        description:
            "Full-Stack Developer specializing in Next.js, React, TypeScript & Supabase. Freelancer, open to full-time roles.",
        url: "https://abosi.vercel.app/about",
        siteName: "Abosi Godwin",
        type: "profile",
        images: [
            {
                url: "https://abosi.vercel.app/Abosi.png",
                width: 1200,
                height: 630,
                alt: "Abosi Godwin — Full-Stack Developer"
            }
        ]
    }
};

export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://abosi.vercel.app/about#webpage",
                url: "https://abosi.vercel.app/about",
                name: "About Abosi Godwin | Full-Stack Developer",
                isPartOf: { "@id": "https://abosi.vercel.app/#website" },
                about: { "@id": "https://abosi.vercel.app/#person" },
                description:
                    "Learn about Abosi Godwin, a self-taught Full-Stack Developer specializing in Next.js, React, TypeScript, and Supabase.",
                breadcrumb: {
                    "@id": "https://abosi.vercel.app/about#breadcrumb"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://abosi.vercel.app/about#breadcrumb",
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
                        name: "About",
                        item: "https://abosi.vercel.app/about"
                    }
                ]
            },
            {
                "@type": "Person",
                "@id": "https://abosi.vercel.app/#person",
                name: "Abosi Godwin",
                url: "https://abosi.vercel.app",
                jobTitle: "Full-Stack Developer",
                description:
                    "Self-taught Full-Stack Developer specializing in Next.js, React, TypeScript, and Supabase. Available for freelance projects and full-time opportunities worldwide.",
                image: {
                    "@type": "ImageObject",
                    url: "https://abosi.vercel.app/Abosi.png",
                    width: 800,
                    height: 800
                },
                knowsAbout: [
                    "Next.js", "React", "TypeScript", "TailwindCSS",
                    "Supabase", "Full-Stack Development", "JavaScript", "Framer Motion"
                ],
                hasOccupation: {
                    "@type": "Occupation",
                    name: "Full-Stack Developer",
                    skills: "Next.js, React, TypeScript, Supabase, TailwindCSS, JavaScript"
                },
                sameAs: [
                    "https://github.com/abosi-godwin",
                    "https://linkedin.com/in/AbosiGodwin",
                    "https://twitter.com/AbosiGodwin",
                    "https://medium.com/@AbosiGodwin"
                ]
            }
        ]
    };

    const skills = [
        {
            category: "Frontend",
            items: ["React 19", "Next.js 16", "TypeScript", "TailwindCSS"]
        },
        {
            category: "Backend & Database",
            items: ["Supabase", "PostgreSQL", "REST APIs", "Resend"]
        },
        {
            category: "Tools & Workflow",
            items: ["Git", "Figma", "Vercel", "Framer Motion"]
        }
    ];

    const stats = [
        { value: "3+", label: "Years of Experience" },
        { value: "20+", label: "Projects Delivered" },
        { value: "Full-Stack", label: "Specialization" },
        { value: "100%", label: "Client Satisfaction" }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-white text-gray-900">

                {/* ── Hero ── */}
                <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
                    <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
                        About Me
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
                        Hi, I&apos;m{" "}
                        <span className="text-primary">Abosi Godwin</span> —
                        <br />I build products that{" "}
                        <span className="italic font-light">
                            work end to end.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
                        A self-taught Full-Stack Developer with 3+ years of
                        hands-on experience shipping modern web products. I
                        specialize in{" "}
                        <strong className="text-gray-800">Next.js</strong>,{" "}
                        <strong className="text-gray-800">React</strong>,{" "}
                        <strong className="text-gray-800">TypeScript</strong>,
                        and{" "}
                        <strong className="text-gray-800">Supabase</strong> —
                        from pixel-perfect UIs to production-ready backends.
                    </p>
                </section>

                {/* ── Stats ── */}
                <section className="py-14 bg-primary">
                    <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                        {stats.map(stat => (
                            <div key={stat.label}>
                                <p className="text-4xl font-extrabold text-white">
                                    {stat.value}
                                </p>
                                <p className="text-light text-sm mt-1 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Story ── */}
                <section className="py-24 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            My Story
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                I didn&apos;t learn to code in a classroom. I
                                learned by building — breaking things, reading
                                docs at midnight, and shipping projects that
                                pushed me past what I knew. That self-taught
                                discipline is now my strongest asset.
                            </p>
                            <p>
                                Before development, I managed a cosmetics retail
                                operation — which gave me a sharp eye for how
                                real businesses actually work. I understand
                                clients not just as a developer, but as someone
                                who has sat on the other side of the table.
                                That perspective shapes every product I build.
                            </p>
                            <p>
                                Today I work as a freelancer building full-stack
                                web products while developing my own SaaS,
                                Trexpenser. My goal is simple: write software
                                that solves real problems and holds up in
                                production.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="w-full aspect-square rounded-2xl bg-purple-50 overflow-hidden border border-purple-100 flex items-center justify-center">
                            <img
                                src="/Abosi.png"
                                alt="Abosi Godwin — Full-Stack Developer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow-lg rounded-xl px-5 py-3">
                            <p className="text-xs text-gray-500 font-medium">
                                Available for
                            </p>
                            <p className="text-sm font-bold text-primary">
                                Freelance & Full-time
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── What I Do ── */}
                <section className="py-20 bg-gray-50 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">
                            What I Do
                        </h2>
                        <p className="text-gray-500 mb-12 max-w-xl">
                            I cover the full product stack — from UI to
                            database — so you don&apos;t need to hire three
                            people to ship one idea.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "⚛️",
                                    title: "Frontend Development",
                                    description:
                                        "Fast, responsive, accessible UIs with React and Next.js. From landing pages to complex dashboards, I write clean, scalable code that performs."
                                },
                                {
                                    icon: "🗄️",
                                    title: "Backend & Database",
                                    description:
                                        "Auth, APIs, and database design with Supabase and PostgreSQL. I build secure, well-structured backends that power real products."
                                },
                                {
                                    icon: "🚀",
                                    title: "SaaS & Product Building",
                                    description:
                                        "I don't just write code — I think in products. I've shipped Trexpenser end-to-end and understand what it takes to build something people actually use."
                                }
                            ].map(service => (
                                <div
                                    key={service.title}
                                    className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary hover:shadow-md transition-all duration-300"
                                >
                                    <span className="text-3xl mb-4 block">
                                        {service.icon}
                                    </span>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Skills ── */}
                <section className="py-24 px-6 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        Skills & Tools
                    </h2>
                    <p className="text-gray-500 mb-12 max-w-xl">
                        The technologies I use daily to ship production-ready products.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10">
                        {skills.map(group => (
                            <div key={group.category}>
                                <h3 className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
                                    {group.category}
                                </h3>
                                <ul className="space-y-3">
                                    {group.items.map(item => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-3 text-gray-700 font-medium"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-20 bg-gray-50 px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-gray-900">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-8">
                            {[
                                {
                                    q: "Who is Abosi Godwin?",
                                    a: "Abosi Godwin is a self-taught Full-Stack Developer with 3+ years of experience building modern web products using Next.js, React, TypeScript, and Supabase."
                                },
                                {
                                    q: "What does Abosi Godwin specialize in?",
                                    a: "Abosi specializes in full-stack web development — frontend UIs with React and Next.js, backend logic and databases with Supabase, and shipping complete SaaS products."
                                },
                                {
                                    q: "Is Abosi Godwin available for freelance work?",
                                    a: "Yes. Abosi is available for freelance projects worldwide and is open to full-time opportunities with product teams and engineering organizations."
                                },
                                {
                                    q: "How can I hire Abosi Godwin?",
                                    a: "Reach out through the contact form at abosi.vercel.app or connect directly on LinkedIn. He typically responds within 24 hours."
                                }
                            ].map(faq => (
                                <div
                                    key={faq.q}
                                    className="border-b border-gray-200 pb-8"
                                    itemScope
                                    itemType="https://schema.org/Question"
                                >
                                    <h3
                                        className="text-lg font-semibold text-gray-900 mb-2"
                                        itemProp="name"
                                    >
                                        {faq.q}
                                    </h3>
                                    <p
                                        className="text-gray-600 leading-relaxed"
                                        itemScope
                                        itemType="https://schema.org/Answer"
                                        itemProp="acceptedAnswer"
                                    >
                                        <span itemProp="text">{faq.a}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="py-24 px-6 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Let&apos;s build something great together.
                    </h2>
                    <p className="text-gray-500 mb-10">
                        Whether you have a product to ship, a role to fill, or
                        just want to connect — my inbox is always open.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/#contact"
                            className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="https://linkedin.com/in/AbosiGodwin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors"
                        >
                            View LinkedIn
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}