import { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import "swiper/css";

const nunito = Nunito({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700", "800"],
    variable: "--font-nunito"
});
export const metadata: Metadata = {
    title: "Abosi Godwin – Software Developer",
    description:
        "Abosi Godwin is a software developer building modern web applications with Next.js, React, and scalable frontend architecture.",
    metadataBase: new URL("https://abosi.vercel.app"),
    alternates: {
        canonical: "https://abosi.vercel.app"
    },
    authors: [{ name: "Abosi Godwin" }],
    robots: {
        index: true,
        follow: true
    },
    openGraph: {
        title: "Abosi Godwin – Software Developer",
        description:
            "Software developer focused on modern web applications and frontend architecture.",
        url: "https://abosi.vercel.app",
        siteName: "Abosi Godwin",
        type: "website",
        images: [
            {
                url: "https://abosi.vercel.app/Abosi.png",
                width: 1200,
                height: 630
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Abosi Godwin – Software Developer",
        description:
            "Building modern web applications with React and Next.js.",
        images: ["https://abosi.vercel.app/Abosi.png"]
    },
    verification: {
        google: "8wKxFBoxKbThGGJsFMXBoid6P9uWONt00GcfrWKw0BU"
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://abosi.vercel.app/#organization",
                name: "Abosi Godwin",
                url: "https://abosi.vercel.app",
                logo: {
                    "@type": "ImageObject",
                    url: "https://abosi.vercel.app/Abosi.png"
                }
            },
            {
                "@type": "Person",
                "@id": "https://abosi.vercel.app/#person",
                name: "Abosi Godwin",
                url: "https://abosi.vercel.app",
                image: "https://abosi.vercel.app/Abosi.png",
                jobTitle: "Software Developer",
                worksFor: {
                    "@id": "https://abosi.vercel.app/#organization"
                },
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "Nigeria"
                },
                description:
                    "Software developer specializing in building modern web applications using React, Next.js, and scalable frontend systems.",
                knowsAbout: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Frontend Architecture",
                    "Web Performance",
                    "JavaScript"
                ],
                sameAs: [
                    "https://github.com/abosi-godwin",
                    "https://linkedin.com/in/abosigodwin",
                    "https://twitter.com/AbosiGodwin",
                    "https://www.instagram.com/abosigodwin",
                    "https://www.facebook.com/AbosiGodwinN"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://abosi.vercel.app/#website",
                url: "https://abosi.vercel.app",
                name: "Abosi Godwin",
                publisher: {
                    "@id": "https://abosi.vercel.app/#organization"
                }
            },
            {
                "@type": "WebPage",
                "@id": "https://abosi.vercel.app/#webpage",
                url: "https://abosi.vercel.app",
                name: "Abosi Godwin – Software Developer",
                isPartOf: {
                    "@id": "https://abosi.vercel.app/#website"
                },
                about: {
                    "@id": "https://abosi.vercel.app/#person"
                },
                description:
                    "Portfolio of Abosi Godwin, a software developer building modern web applications."
            }
        ]
    };

    return (
        <html lang="en" className={nunito.variable}>
            <body className="font-sans">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
