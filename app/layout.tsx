import { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});
import "swiper/css";

export const metadata: Metadata = {
  title: "Abosi Godwin | Frontend, Shopify & WordPress Developer",
  description:
    "I'm Abosi Godwin, a frontend, Shopify, and WordPress developer creating modern, fast, and responsive websites using Next.js, React, and TailwindCSS.",
  keywords: [
    "Abosi Godwin",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TailwindCSS",
    "Shopify Developer",
    "WordPress Developer",
    "Website Designer",
    "UI Developer",
    "Web Designer",
    "Ecommerce Developer",
  ],
  authors: [{ name: "Abosi Godwin", url: "https://abosi-godwin.github.io" }],
  creator: "Abosi Godwin",
  publisher: "Abosi Godwin",
  openGraph: {
    title: "Abosi Godwin | Frontend, Shopify & WordPress Developer",
    description:
      "Portfolio of Abosi Godwin — a frontend, Shopify, and WordPress developer building modern, responsive, and user-focused websites using React, Next.js, and TailwindCSS.",
    url: "https://abosi-godwin.github.io",
    siteName: "Abosi Godwin Portfolio",
    images: [
      {
        url: "https://abosi-godwin.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abosi Godwin Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abosi Godwin | Frontend, Shopify & WordPress Developer",
    description:
      "Explore the portfolio of Abosi Godwin — expert in frontend, Shopify, and WordPress development, crafting visually stunning and high-performing websites.",
    creator: "@abosigodwin",
    images: ["https://abosi-godwin.github.io/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://abosi-godwin.github.io"),
  alternates: {
    canonical: "https://abosi-godwin.github.io/",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={nunito.variable}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
