import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex w-full flex-col items-center justify-evenly px-5 pt-10 md:flex-row md:pt-32">
      
      <div className="relative w-fit">
        <Image
          src="/Abosi.png"
          width={260}
          height={260}
          alt="Abosi Godwin"
          className="rounded-full sm:-ml-8"
          priority
        />

        
        <div className="absolute top-20 right-0 flex items-center gap-2 rounded-md bg-green-500 px-2 py-0.5 text-xs font-bold text-white md:top-4 md:-right-4">
          <span>Available</span>
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-white"></span>
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left">
        <p className="text-sm text-gray-600">
          Hi 👋, I am <strong>Abosi Godwin.</strong>
        </p>
        
        {/* Main SEO Heading */}
        <h1 className="py-5 text-3xl font-bold leading-tight md:text-4xl">
          A <span className="text-secondary">Full Stack, </span>
          <span className="text-secondary">Shopify, </span> and
          <span className="text-secondary"> WordPress </span>
          developer.
        </h1>
        
        <p className="text-gray-700">
          I build unique, modern, and responsive websites that help brands stand out online.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 py-8 md:justify-start">
          <button className="bg-secondary rounded-md px-6 py-2 font-bold capitalize text-white transition-transform hover:scale-105 active:scale-95">
            Hire me
          </button>
          <Link href="/projects" className="rounded-md border-2 border-black/60 px-6 py-2 font-bold capitalize text-black/70 transition-colors hover:bg-black/5">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
