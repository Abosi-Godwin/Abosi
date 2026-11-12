import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
    LuShoppingBag,
    LuGlobe,
    LuLayoutDashboard,
    LuDatabase
} from "react-icons/lu";

const siteUrl = "https://abosi.vercel.app";
const pageUrl = `${siteUrl}/about`;
const title = "About Abosi Godwin | Ecommerce Developer (Shopify & Next.js)";
const description =
    "Self-taught ecommerce developer in Nigeria. I build Shopify stores, Next.js storefronts, business websites and web apps for clients worldwide.";
const socialDescription =
    "Ecommerce developer building Shopify stores, Next.js storefronts, business websites and web apps. Freelance, and open to full-time roles.";
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
    { value: "4yrs", label: "Experience" }
];

const services: {
    icon: IconType;
    title: string;
    description: string;
}[] = [
    {
        icon: LuShoppingBag,
        title: "Ecommerce Stores",
        description:
            "Shopify stores and headless Next.js storefronts on the Storefront API, with product search, customer accounts and Paystack checkout for sales in Nigeria and abroad."
    },
    {
        icon: LuGlobe,
        title: "Websites & Landing Pages",
        description:
            "Fast, responsive business websites and landing pages with React and Next.js, built to load quickly, rank well and turn visitors into enquiries."
    },
    {
        icon: LuLayoutDashboard,
        title: "Web Apps & Dashboards",
        description:
            "Interactive web apps with clean, accessible interfaces, from sign-up and login flows to charts, data views and subscription billing."
    },
    {
        icon: LuDatabase,
        title: "Backend & SaaS",
        description:
            "Auth, APIs and database design with Supabase and PostgreSQL. I shipped Sproute end to end, so I know what it takes to turn an idea into a product people use."
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
        a: "Abosi Godwin is a self-taught ecommerce developer based in Nigeria with 4 years of experience building Shopify stores, headless Next.js storefronts, business websites and web apps."
    },
    {
        q: "What does Abosi Godwin specialize in?",
        a: "Shopify stores, custom and headless storefronts with Next.js and the Shopify Storefront API, business websites, web apps, Paystack payment integrations, and Supabase backends when a project needs custom logic."
    },
    {
        q: "Does Abosi Godwin work with businesses in Nigeria?",
        a: "Yes. He builds stores and websites for Nigerian businesses, including Paystack payments and WhatsApp-friendly ordering, and also works with clients worldwide."
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
                "Self-taught ecommerce developer building Shopify stores, headless Next.js storefronts, business websites and web apps for clients in Nigeria and worldwide.",
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
                "Web Development",
                "Web Applications",
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

            <main className="min-h-screen w-full overflow-x-hidden bg-white text-gray-900">
                <nav
                    aria-label="Breadcrumb"
                    className="pt-10 mb-6 max-w-5xl mx-auto px-6 flex items-center gap-2 text-sm text-gray-400"
                >
                    <Link
                        href="/"
                        className="hover:text-secondary transition-colors"
                    >
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-gray-600 font-medium">About</span>
                </nav>

                <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
                    <p className="inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-xs font-semibold tracking-widest text-secondary uppercase mb-4">
                        About Me
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
                        Hi, I&apos;m{" "}
                        <span className="text-secondary">Abosi Godwin</span>.
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
                        storefronts, business websites and web apps, from the
                        interface to checkout, payments and the backend behind
                        them.
                    </p>
                </section>

                <section className="w-full border-y border-gray-100 py-12">
                    <div className="max-w-5xl mx-auto px-6 flex justify-center gap-6 md:gap-16 text-center">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={
                                    index > 0
                                        ? "border-l border-gray-200 pl-6 md:pl-16"
                                        : ""
                                }
                            >
                                <p className="text-3xl md:text-4xl font-extrabold text-gray-900">
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-xs md:text-sm text-gray-500">
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
                                stores, headless Next.js storefronts, business
                                websites and web apps, including Paystack
                                payments for businesses selling in Nigeria. On
                                the side I&apos;m building my own product,
                                Sproute, an AI-powered WhatsApp lead prospecting
                                tool for freelancers. You can see what
                                I&apos;ve shipped in my{" "}
                                <Link
                                    href="/projects"
                                    className="text-secondary font-medium underline underline-offset-4"
                                >
                                    projects
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative w-full aspect-square rounded-2xl bg-secondary/10 overflow-hidden border border-secondary/20">
                            <Image
                                src="/Abosi.png"
                                alt="Abosi Godwin, Ecommerce Developer"
                                fill
                                sizes="(min-width: 768px) 40vw, 90vw"
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="absolute -bottom-4 left-4 bg-white border border-gray-100 shadow-lg rounded-xl px-5 py-3">
                            <p className="text-xs text-gray-500 font-medium">
                                Available for
                            </p>
                            <p className="text-sm font-bold text-secondary">
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
                            From online stores to business websites and full web
                            apps, I cover the whole stack, so you don&apos;t
                            need to hire three people to get a project live.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {services.map(service => {
                                const Icon = service.icon;
                                return (
                                    <div
                                        key={service.title}
                                        className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-secondary hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                                            <Icon size={24} aria-hidden="true" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="py-24 px-6 max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        Skills & Tools
                    </h2>
                    <p className="text-gray-500 mb-12 max-w-xl">
                        The technologies I use daily to ship fast, reliable
                        stores, websites and web apps.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10">
                        {skills.map(group => (
                            <div key={group.category}>
                                <h3 className="text-xs font-semibold tracking-widest text-secondary uppercase mb-4">
                                    {group.category}
                                </h3>
                                <ul className="space-y-3">
                                    {group.items.map(item => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-3 text-gray-700 font-medium"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
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
                        Whether you need a Shopify store, a business website, a
                        web app or a developer for your team, my inbox is always
                        open.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/#contact"
                            className="rounded-md bg-secondary px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
                        >
                            Get In Touch
                        </Link>
                        <a
                            href="https://www.linkedin.com/in/abosigodwin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md border-2 border-gray-300 px-7 py-2.5 text-sm font-bold text-gray-700 transition-colors hover:border-secondary hover:text-secondary"
                        >
                            View LinkedIn
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
