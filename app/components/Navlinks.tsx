import Link from "next/link";

const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" }
];

const Navlinks = () => {
    return (
        <ul className="hidden md:flex items-center gap-8">
            {links.map(link => (
                <li key={link.label}>
                    <Link
                        href={link.href}
                        className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors relative group"
                    >
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
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
