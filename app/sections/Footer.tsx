import Link from "next/link";
import Image from "next/image";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="w-full py-8">
            <hr className="mb-10 opacity-30" />
            <Link href="/about" className="sr-only">
                About Abosi Godwin
            </Link>
            <div className="px-5 mx-auto flex flex-col md:flex-row md:justify-center md:items-center md:gap-10">
                <p className="text-center capitalize mb-6 md:mb-0 text-sm text-muted-foreground">
                    © {currentYear} Abosi Godwin
                </p>

                <div className="flex items-center justify-center gap-4">
                    <Image
                        src="/https://www.codewars.com/users/Abosi-Godwin/badges/large"
                        fill
                        alt="Abosi Godwin codewars profile badge"
                        className="object-cover object-top scale-110"
                        
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
