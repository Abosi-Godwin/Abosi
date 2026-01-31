import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <span className="font-bold tracking-wide text-xl">
                Godwin<span className="text-primary">.</span>
            </span>
        </Link>
    );
};

export default Logo;
