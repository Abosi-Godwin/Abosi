 import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="inline-flex items-center py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
    >
      <span className="font-bold tracking-wide text-2xl hover:opacity-90 transition-opacity">
        Godwin<span className="text-primary">.</span>
      </span>
    </Link>
  );
};

export default Logo;