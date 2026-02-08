import {
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
    FaFacebookF
} from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodewars } from "react-icons/si";

const socials = [
    {
        url: "https://www.linkedin.com/in/abosigodwin",
        name: "LinkedIn",
        icon: FaLinkedinIn
    },
    { url: "https://x.com/AbosiGodwin", name: "Twitter", icon: FaTwitter },
    {
        url: "https://www.instagram.com/abosigodwin",
        name: "Instagram",
        icon: FaInstagram
    },
    {
        url: "https://www.facebook.com/AbosiGodwinN",
        name: "Facebook",
        icon: FaFacebookF
    },
    { url: "JavaScript", name: "medium", icon: FaMediumM },
    { url: "JavaScript", name: "leetcode", icon: SiLeetcode },
    { url: "JavaScript", name: "codewars", icon: SiCodewars }
];

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="w-full min-w-max py-8">
            <hr className="mb-10" />
            <div className="px-5 mx-auto md:flex md:justify-center md:items-center md:gap-10">
                <p className="text-center capitalize mb-4 mt-8">
                    copyright &copy; {currentYear} Abosi Godwin
                </p>
                <div className="mx-auto w-fit flex space-x-4 gap-2 w-fit">
                    {socials.map(social => {
                        const Icon = social.icon;
                        return (
                            <a
                                className=""
                                key={social.name}
                                href={social.url}
                                target="_blank"
                            >
                                <Icon className="text-lg" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
