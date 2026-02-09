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
    title: "Abosi Godwin | Frontend, Shopify & WordPress Developer",
    description:
        "Portfolio of Abosi Godwin — building modern, responsive websites using Next.js, React, and TailwindCSS.",
    metadataBase: new URL("https://abosi.vercel.app"),
    alternates: {
        canonical: "/"
    },
    keywords: [
        "Abosi Godwin",
        "Frontend Developer",
        "Next.js Developer",
        "Shopify Developer",
        "WordPress Developer",
        "LeetCode Abosi Godwin",
        "Codewars Abosi Godwin"
    ],
    authors: [{ name: "Abosi Godwin" }],
    openGraph: {
        title: "Abosi Godwin | Portfolio",
        description: "Frontend, Shopify & WordPress Developer.",
        url: "https://abosi.vercel.app",
        siteName: "Abosi Godwin",
        type: "website",
        images: [
            {
                url: "https://abosi.vercel.app/Abosi.png",
                width: 1200,
                height: 630,
                alt: "Abosi Godwin Portfolio Preview"
            }
        ]
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
                "@type": "WebSite",
                "@id": "https://abosi.vercel.app/#website",
                url: "https://abosi.vercel.app",
                name: "Abosi Godwin",
                publisher: { "@id": "https://abosi.vercel.app/#person" }
            },
            {
                "@type": "Person",
                "@id": "https://abosi.vercel.app/#person",
                name: "Abosi Godwin",
                url: "https://abosi.vercel.app",
                jobTitle: "Frontend, Shopify & WordPress Developer",
                sameAs: [
                    "https://github.com/abosi-godwin",
                    "https://abosi-godwin.github.io/",
                    "https://linkedin.com/in/AbosiGodwin",
                    "https://www.tiktok.com/goddymadeit",
                    "https://www.facebook.com/AbosiGodwinN",
                    "https://www.instagram.com/abosigodwin",
                    "https://medium.com/@AbosiGodwin",
                    "https://leetcode.com/Abosi-Godwin",
                    "https://www.codewars.com/users/abosigodwin",
                    "https://twitter.com/AbosiGodwin"
                ]
            }
        ]
    };

    return (
        <html lang="en" className={nunito.variable}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="font-sans">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
