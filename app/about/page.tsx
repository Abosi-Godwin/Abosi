import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Abosi Godwin | Frontend, Shopify & WordPress Developer",
    description:
        "Learn about Abosi Godwin — a Frontend developer with 3–5 years of experience specializing in Next.js, React, Shopify, and WordPress. Available for freelance and full-time opportunities worldwide.",
    alternates: {
        canonical: "https://abosi.vercel.app/about"
    },
    openGraph: {
        title: "About Abosi Godwin | Frontend, Shopify & WordPress Developer",
        description:
            "Frontend developer with 3–5 years of experience in Next.js, React, Shopify & WordPress. Freelancer, open to full-time roles.",
        url: "https://abosi.vercel.app/about",
        siteName: "Abosi Godwin",
        type: "profile",
        images: [
            {
                url: "https://abosi.vercel.app/Abosi.png",
                width: 1200,
                height: 630,
                alt: "Abosi Godwin — Frontend Developer"
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
                name: "About Abosi Godwin | Frontend, Shopify & WordPress Developer",
                isPartOf: { "@id": "https://abosi.vercel.app/#website" },
                about: { "@id": "https://abosi.vercel.app/#person" },
                description:
                    "Learn about Abosi Godwin, a Frontend developer with 3–5 years of experience in Next.js, React, Shopify, and WordPress.",
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
                jobTitle: "Frontend, Shopify & WordPress Developer",
                description:
                    "Frontend developer with 3–5 years of experience specializing in Next.js, React, Shopify, and WordPress. Available for freelance projects and full-time opportunities worldwide.",
                image: {
                    "@type": "ImageObject",
                    url: "https://abosi.vercel.app/Abosi.png",
                    width: 800,
                    height: 800
                },
                knowsAbout: [
                    "Next.js",
                    "React",
                    "TailwindCSS",
                    "Shopify Development",
                    "WordPress Development",
                    "Frontend Development",
                    "JavaScript",
                    "TypeScript"
                ],
                hasOccupation: {
                    "@type": "Occupation",
                    name: "Frontend Developer",
                    skills:
                        "Next.js, React, Shopify, WordPress, TailwindCSS, JavaScript, TypeScript"
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
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS"] },
        { category: "CMS & E-Commerce", items: ["Shopify", "WordPress", "Liquid", "WooCommerce"] },
        { category: "Tools & Workflow", items: ["Git", "Figma", "Vercel", "REST APIs"] }
    ];

    const stats = [
        { value: "3+", label: "Years of Experience" },
        { value: "20+", label: "Projects Delivered" },
        { value: "3", label: "Specializations" },
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
                    <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase mb-4">
                        About Me
                    </p>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
                        Hi, I&apos;m{" "}
                        <span className="text-indigo-600">Abosi Godwin</span> —<br />
                        I build websites that{" "}
                        <span className="italic font-light">work beautifully.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
                        A Frontend Developer with over 3 years of hands-on experience crafting
                        modern, high-performance web experiences. I specialize in{" "}
                        <strong className="text-gray-800">Next.js</strong>,{" "}
                        <strong className="text-gray-800">Shopify</strong>, and{" "}
                        <strong className="text-gray-800">WordPress</strong> — turning ideas
                        into pixel-perfect digital products.
                    </p>
                </section>

                {/* ── Stats ── */}
                <section className="py-14 bg-indigo-600">
                    <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                                <p className="text-indigo-200 text-sm mt-1 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Story ── */}
                <section className="py-24 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">My Story</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                My journey into web development started with a simple curiosity —
                                I wanted to understand how the websites I used every day were built.
                                That curiosity quickly became a passion, and over the past 3+ years,
                                I have grown into a developer who ships real products for real clients.
                            </p>
                            <p>
                                I started as a self-taught developer, learning through building. From
                                my first static HTML page to deploying full-stack Next.js applications
                                on Vercel, every project has taught me something new. Today, I work
                                as a freelancer while actively pursuing full-time opportunities where
                                I can contribute to a great team.
                            </p>
                            <p>
                                What drives me is the intersection of design and engineering — writing
                                code that is not just functional, but elegant and maintainable. I care
                                deeply about performance, accessibility, and delivering an experience
                                that users love.
                            </p>
                        </div>
                    </div>

                    {/* Image placeholder — swap with your actual image */}
                    <div className="relative">
                        <div className="w-full aspect-square rounded-2xl bg-indigo-50 overflow-hidden border border-indigo-100 flex items-center justify-center">
                            <img
                                src="/Abosi.png"
                                alt="Abosi Godwin — Frontend Developer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative badge */}
                        <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow-lg rounded-xl px-5 py-3">
                            <p className="text-xs text-gray-500 font-medium">Available for</p>
                            <p className="text-sm font-bold text-indigo-600">Freelance & Full-time</p>
                        </div>
                    </div>
                </section>

                {/* ── What I Do ── */}
                <section className="py-20 bg-gray-50 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">What I Do</h2>
                        <p className="text-gray-500 mb-12 max-w-xl">
                            I offer a focused set of services across three core areas — each one
                            backed by real project experience.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "⚛️",
                                    title: "Frontend Development",
                                    description:
                                        "Building fast, responsive, and accessible web applications using React and Next.js. From landing pages to complex SPAs, I write clean, scalable code."
                                },
                                {
                                    icon: "🛍️",
                                    title: "Shopify Development",
                                    description:
                                        "Custom Shopify theme development, Liquid templating, and store optimization. I build storefronts that convert visitors into customers."
                                },
                                {
                                    icon: "🌐",
                                    title: "WordPress Development",
                                    description:
                                        "Custom themes, plugins, and full site builds on WordPress. I create manageable, performant sites that clients can maintain with ease."
                                }
                            ].map((service) => (
                                <div
                                    key={service.title}
                                    className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300"
                                >
                                    <span className="text-3xl mb-4 block">{service.icon}</span>
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
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Skills & Tools</h2>
                    <p className="text-gray-500 mb-12 max-w-xl">
                        The technologies I work with day-to-day to deliver quality products.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10">
                        {skills.map((group) => (
                            <div key={group.category}>
                                <h3 className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-4">
                                    {group.category}
                                </h3>
                                <ul className="space-y-3">
                                    {group.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-3 text-gray-700 font-medium"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── FAQ (for AI Overview) ── */}
                <section className="py-20 bg-gray-50 px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-gray-900">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-8">
                            {[
                                {
                                    q: "Who is Abosi Godwin?",
                                    a: "Abosi Godwin is a Frontend, Shopify, and WordPress Developer with over 3 years of professional experience building modern, responsive websites and web applications."
                                },
                                {
                                    q: "What technologies does Abosi Godwin specialize in?",
                                    a: "Abosi specializes in Next.js, React, TailwindCSS, TypeScript, Shopify (Liquid), and WordPress — delivering high-performance web solutions for businesses and individuals."
                                },
                                {
                                    q: "Is Abosi Godwin available for freelance work?",
                                    a: "Yes, Abosi is available for freelance projects worldwide. He is also open to full-time and internship opportunities with product teams and agencies."
                                },
                                {
                                    q: "How can I hire Abosi Godwin?",
                                    a: "You can reach out through the contact form on his portfolio at abosi.vercel.app, or connect with him directly on LinkedIn."
                                }
                            ].map((faq) => (
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
                        Whether you have a project in mind, a role to fill, or just want to
                        connect — my inbox is always open.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:your@email.com"
                            className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="https://linkedin.com/in/AbosiGodwin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                        >
                            View LinkedIn
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
