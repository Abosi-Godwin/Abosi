"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    const scrollToContact = () => {
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="flex w-full flex-col items-center gap-8 px-5 pt-16 md:flex-row md:justify-between md:gap-0 md:pt-28 lg:px-16">
            {/* Image Block */}
            <div className="relative shrink-0">
                {/* Available badge — outside the clipped circle */}
                <div className="absolute -top-3 right-0 z-10 flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
                    <span>Available</span>
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-white" />
                    </span>
                </div>

                {/* Circle container — clips the bust illustration */}
                <div className="relative h-48 w-48 overflow-hidden rounded-full bg-secondary/10 ring-4 ring-secondary/20 md:h-64 md:w-64">
                    <Image
                        src="/Abosi.png"
                        fill
                        alt="Abosi Godwin"
                        className="object-cover object-top scale-110"
                        priority
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className="max-w-lg text-center md:text-left">
                <span className="inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-xs font-semibold tracking-widest text-secondary uppercase">
                    Frontend Developer
                </span>

                <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
                    Hi, I'm{" "}
                    <span className="text-secondary">Abosi Godwin.</span>
                </h1>

                <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                    I build high-performance{" "}
                    <strong className="text-gray-800">Next.js & React</strong>{" "}
                    apps and high-conversion{" "}
                    <strong className="text-gray-800">
                        Shopify & WordPress
                    </strong>{" "}
                    stores for growing businesses.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                    <button
                        onClick={scrollToContact}
                        className="rounded-md bg-secondary px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
                    >
                        Hire Me
                    </button>
                    <Link
                        href="/projects"
                        className="rounded-md border-2 border-gray-300 px-7 py-2.5 text-sm font-bold text-gray-700 transition-colors hover:border-secondary hover:text-secondary"
                    >
                        View Projects
                    </Link>
                </div>

                {/* Stats */}
                <div className="mt-6 flex justify-center gap-6 md:justify-start">
                    <div className="text-center md:text-left">
                        <p className="text-xl font-extrabold text-gray-900">
                            10+
                        </p>
                        <p className="text-xs text-gray-500">
                            Projects Shipped
                        </p>
                    </div>
                    <div className="w-px bg-gray-200" />
                    <div className="text-center md:text-left">
                        <p className="text-xl font-extrabold text-gray-900">
                            8+
                        </p>
                        <p className="text-xs text-gray-500">Happy Clients</p>
                    </div>
                    <div className="w-px bg-gray-200" />
                    <div className="text-center md:text-left">
                        <p className="text-xl font-extrabold text-gray-900">
                            4yr
                        </p>
                        <p className="text-xs text-gray-500">Experience</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
