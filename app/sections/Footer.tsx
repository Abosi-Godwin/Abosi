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
    { url: "HTML5", name: "LinkedIn", icon: FaLinkedinIn },
    { url: "CSS3", name: "Twitter", icon: FaTwitter },
    { url: "JavaScript", name: "Instagram", icon: FaInstagram },
    { url: "JavaScript", name: "Facebook", icon: FaFacebookF },
    { url: "JavaScript", name: "medium", icon: FaMediumM },
    { url: "JavaScript", name: "leetcode", icon: SiLeetcode },
    { url: "JavaScript", name: "codewars", icon: SiCodewars }
];

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="w-full min-w-max">
            <p className="text-center">
                copyright &copy; {currentYear} Abosi Godwin
            </p>
            <div className="mx-auto flex space-x-4">
                {socials.map(social => {
                    const Icon = social.icon;
                    return (
                        <a className="" key={social.url} href="/">
                            <Icon />
                        </a>
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;
