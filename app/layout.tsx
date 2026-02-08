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
        siteName: "Abosi Godwin Portfolio",
        type: "website"
    },
    verification: {
        google: "google-site-verification=8wKxFBoxKbThGGJsFMXBoid6P9uWONt00GcfrWKw0BU"
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={nunito.variable}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
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
                                "https://medium.com/@abosigodwin",
                                "https://leetcode.com/abosigodwin",
                                "https://www.codewars.com/users/abosigodwin",
                                "https://twitter.com/AbosiGodwin"
                            ]
                        })
                    }}
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
