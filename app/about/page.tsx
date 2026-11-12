import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://abosi.vercel.app";
const pageUrl = `${siteUrl}/about`;
const title = "About Abosi Godwin | Ecommerce Developer (Shopify & Next.js)";
const description =
    "Self-taught ecommerce developer in Nigeria. I build Shopify stores, headless Next.js storefronts and Paystack checkouts for clients in Nigeria and worldwide.";
const socialDescription =
    "Ecommerce developer building Shopify stores, headless Next.js storefronts and Paystack checkouts. Freelance, and open to full-time roles.";
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
        type: "profile",
        firstName: "Abosi",
        lastName: "Godwin",
        images: [
            {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: "Abosi Godwin, Ecommerce Developer"
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

const stats = [
    { value: "24", label: "Projects Shipped" },
    { value: "22", label: "Happy Clients" },
    { value: "4yrs", label: "Experience" },
    { value: "Ecommerce", label: "Specialization" }
];

const services = [
    {
        icon: "🛍️",
        title: "Shopify Stores",
        description:
            "Custom themes and full store builds on Shopify, set up so owners can manage products, orders and content without needing a developer."
    },
    {
        icon: "⚡",
        title: "Headless & Custom Storefronts",
        description:
            "Next.js storefronts on the Shopify Storefront API with fast pages, search and customer accounts, built for speed and full control of the shopping experience."
    },
    {
        icon: "💳",
        title: "Payments, Backend & SaaS",
        description:
            "Paystack checkout, Supabase backends and complete products like Sproute, taken from first idea to production."
    }
];

const skills = [
    {
        category: "Frontend",
        items: [
            "React 19",
            "Next.js 15",
            "TypeScript",
            "TailwindCSS",
            "Framer Motion"
        ]
    },
    {
        category: "Ecommerce",
        items: [
            "Shopify",
            "Shopify Storefront API",
            "Headless Commerce",
            "Paystack"
        ]
    },
    {
        category: "Backend & Tools",
        items: [
            "Supabase",
            "PostgreSQL",
            "Resend",
            "TanStack Query",
            "Zustand",
            "Git",
            "Figma",
            "Vercel"
        ]
    }
];

const faqs = [
    {
        q: "Who is Abosi Godwin?",
        a: "Abosi Godwin is a self-taught ecommerce developer based in Nigeria with 4 years of experience building Shopify stores, headless Next.js storefronts and full-stack web products."
    },
    {
        q: "What does Abosi Godwin specialize in?",
        a: "Shopify stores, custom and headless storefronts with Next.js and the Shopify Storefront API, Paystack payment integrations, and Supabase backends when a project needs custom logic."
    },
    {
        q: "Does Abosi Godwin work with businesses in Nigeria?",
        a: "Yes. He builds stores for Nigerian businesses, including Paystack payments and WhatsApp-friendly ordering, and also works with clients worldwide."
    },
    {
        q: "Is Abosi Godwin available for freelance work?",
        a: "Yes. He takes freelance projects worldwide and is open to full-time roles with product teams and agencies."
    },
    {
        q: "How can I hire Abosi Godwin?",
        a: "Use the contact form on this site or message him on LinkedIn. He usually responds within 24 hours."
    }
];

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ProfilePage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: title,
            inLanguage: "en",
            isPartOf: { "@id": `${siteUrl}/#website` },
            mainEntity: { "@id": `${siteUrl}/#person` },
            description,
            breadcrumb: { "@id": `${pageUrl}#breadcrumb` }
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
                    name: "About",
                    item: pageUrl
                }
            ]
        },
        {
            "@type": "Person",
            "@id": `${siteUrl}/#person`,
            name: "Abosi Godwin",
            url: siteUrl,
            jobTitle: "Ecommerce Developer",
            description:
                "Self-taught ecommerce developer building Shopify stores, headless Next.js storefronts and Paystack checkouts for clients in Nigeria and worldwide.",
            image: ogImage,
            address: {
                "@type": "PostalAddress",
                addressCountry: "NG"
            },
            knowsAbout: [
                "Ecommerce Development",
                "Shopify",
                "Headless Commerce",
                "Shopify Storefront API",
                "Next.js",
                "React",
                "TypeScript",
                "TailwindCSS",
                "Supabase",
                "Paystack",
                "Framer Motion"
            ],
            hasOccupation: {
                "@type": "Occupation",
                name: "Ecommerce Developer",
                skills: "Shopify, Next.js, React, TypeScript, Supabase, Paystack, TailwindCSS"
            },
            sameAs: [
                "https://github.com/Abosi-Godwin",
                "https://www.linkedin.com/in/abosigodwin",
                "https://x.com/AbosiGodwin",
                "https://www.upwork.com/freelancers/~010c925ad55e60618b"
            ]
        }
    ]
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
                }}
            />

            <main className="min-h-screen bg-white text-gray-900">
                <nav
                    aria-label="Breadcrumb"
                    className="pt-10 mb-6 max-w-5xl mx-auto px-6 flex items-center gap-2 text-sm text-gray-400"
                >
                    <Link
                        href="/"
                        className="hover:text-primary transition-colors"
                    >
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-gray-600 font-medium">About</span>
                </nav>

                <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
                    <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
                        About Me
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
                        Hi, I&apos;m{" "}
                        <span className="text-primary">Abosi Godwin</span>.
                        <br />
                        Ecommerce developer for{" "}
                        <span className="italic font-light">
                            Shopify & Next.js.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
                        A self-taught ecommerce developer from Nigeria with 4
                        years of experience. I build{" "}
                        <strong className="text-gray-800">Shopify</strong>{" "}
                        stores, headless{" "}
                        <strong className="text-gray-800">Next.js</strong>{" "}
                        storefronts and custom full-stack products, from the
                        storefront to checkout, payments and the backend behind
                        them.
                    </p>
                </section>

                <section className="py-14 bg-gradient-bg border-y border-secondary/40">
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

                <section className="py-24 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            My Story
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                I didn&apos;t learn to code in a classroom. I
                                got into web development in 2020 through
                                Shopify and WordPress, then kept building until
                                I could take a store from first design to
                                launch on my own.
                            </p>
                            <p>
                                Before development, I managed a cosmetics retail
                                shop. I know what happens on the other side of
                                a store: stock to count, customers to serve and
                                sales that depend on a smooth checkout. That
                                shapes how I build every store.
                            </p>
                            <p>
                                Today I work as a freelancer building Shopify
                                stores, custom Next.js storefronts and headless
                                setups on the Shopify Storefront API, including
                                Paystack payments for businesses selling in
                                Nigeria. On the side I&apos;m building my own
                                product, Sproute, an AI-powered WhatsApp lead
                                prospecting tool for freelancers. You can see
                                what I&apos;ve shipped in my{" "}
                                <Link
                                    href="/projects"
                                    className="text-primary font-medium underline underline-offset-4"
                                >
                                    projects
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative w-full aspect-square rounded-2xl bg-purple-50 overflow-hidden border border-purple-100">
                            <Image
                                src="/Abosi.png"
                                alt="Abosi Godwin, Ecommerce Developer"
                                fill
                                sizes="(min-width: 768px) 40vw, 90vw"
                                className="object-cover"
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

                <section className="py-20 bg-gray-50 px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">
                            What I Do
                        </h2>
                        <p className="text-gray-500 mb-12 max-w-xl">
                            I take online stores from first design to launch, so
                            you don&apos;t need to hire three people to get
                            selling.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {services.map(service => (
                                <div
                                    key={service.title}
                                    className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary hover:shadow-md transition-all duration-300"
                                >
                                    <span
                                        className="text-3xl mb-4 block"
                                        aria-hidden="true"
                                    >
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

                <section className="py-24 px-6 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        Skills & Tools
                    </h2>
                    <p className="text-gray-500 mb-12 max-w-xl">
                        The technologies I use daily to ship fast, reliable
                        online stores and products.
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

                <section className="py-20 bg-gray-50 px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-gray-900">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-8">
                            {faqs.map(faq => (
                                <div
                                    key={faq.q}
                                    className="border-b border-gray-200 pb-8"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {faq.q}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 px-6 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Let&apos;s build something great together.
                    </h2>
                    <p className="text-gray-500 mb-10">
                        Whether you need a Shopify store, a custom storefront or
                        a developer for your team, my inbox is always open.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#contact"
                            className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
                        >
                            Get In Touch
                        </Link>
                        <a
                            href="https://www.linkedin.com/in/abosigodwin"
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
