"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "motion/react";

const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" }
];

const Navlinks = () => {
    const pathname = usePathname() ?? "";
    const [hovered, setHovered] = useState<string | null>(null);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    const activeHref = links.find(link => isActive(link.href))?.href ?? null;
    const underlineTarget = hovered ?? activeHref;

    return (
        <ul
            className="hidden md:flex items-center gap-8"
            onMouseLeave={() => setHovered(null)}
            onBlur={() => setHovered(null)}
        >
            {links.map(link => (
                <li key={link.label}>
                    <Link
                        href={link.href}
                        onMouseEnter={() => setHovered(link.href)}
                        onFocus={() => setHovered(link.href)}
                        className={`relative text-sm font-semibold transition-colors ${
                            isActive(link.href)
                                ? "text-primary"
                                : "text-gray-600 hover:text-primary"
                        }`}
                    >
                        {link.label}
                        {underlineTarget === link.href && (
                            <motion.span
                                layoutId="nav-underline"
                                className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-primary"
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 38
                                }}
                            />
                        )}
                    </Link>
                </li>
            ))}

            <li>
                <a
                    href="/Abosi_Godwin_CV.pdf"
                    download="Abosi_Godwin_Resume.pdf"
                    className="ml-2 rounded-xl bg-primary text-white font-semibold text-sm py-2 px-5 hover:opacity-90 active:scale-95 transition-all duration-200"
                >
                    View Resume
                </a>
            </li>
        </ul>
    );
};

export default Navlinks;
