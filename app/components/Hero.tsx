"use client";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { MotionConfig, motion } from "motion/react";
import type { Variants } from "motion/react";

import CountUp from "./CountUp";
import { easeOut, fadeUp, stagger } from "../utils/motion";

const stats = [
    { value: 24, suffix: "", label: "Projects Shipped" },
    { value: 22, suffix: "", label: "Happy Clients" },
    { value: 4, suffix: "yrs", label: "Experience" },
];

const textColumn = stagger(0.1, 0.2);

const photoIn: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.9, ease: easeOut },
    },
};

const Hero = () => {
    const scrollToContact = () => {
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <MotionConfig reducedMotion="user">
            <section className="flex w-full flex-col items-center gap-8 px-5 pt-16 md:flex-row md:justify-between md:gap-0 md:pt-28 lg:px-16">
                <motion.div
                    className="relative shrink-0"
                    variants={photoIn}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div
                        className="absolute -top-3 right-0 z-10 flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-md"
                        initial={{ opacity: 0, y: -8, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5, ease: easeOut }}
                    >
                        <span>Available</span>
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                            <span className="relative inline-flex size-2 rounded-full bg-white" />
                        </span>
                    </motion.div>

                    <div className="relative h-48 w-48 overflow-hidden rounded-full bg-secondary/10 ring-4 ring-secondary/20 md:h-64 md:w-64">
                        <Image
                            src="/Abosi.png"
                            fill
                            alt="Abosi Godwin"
                            className="object-cover object-top scale-110"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="max-w-lg text-center md:text-left"
                    variants={textColumn}
                    initial="hidden"
                    animate="show"
                >
                    <motion.span
                        variants={fadeUp}
                        className="inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-xs font-semibold tracking-widest text-secondary uppercase"
                    >
                        Business Solution Provider
                    </motion.span>

                    <motion.h1
                        variants={fadeUp}
                        className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl"
                    >
                        Hi, I'm{" "}
                        <span className="text-secondary">Abosi Godwin.</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base"
                    >
                        I build fast, conversion-ready websites for growing
                        businesses, from custom{" "}
                        <strong className="text-gray-800">
                            Next.js & React
                        </strong>{" "}
                        apps to polished{" "}
                        <strong className="text-gray-800">
                            Headless Shopify Ecommerce
                        </strong>{" "}
                        stores that turn visitors into customers.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="mt-6 flex flex-wrap justify-between gap-3 md:justify-start"
                    >
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
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mt-6 flex justify-center gap-6 md:justify-start"
                    >
                        {stats.map((stat, index) => (
                            <Fragment key={stat.label}>
                                {index > 0 && <div className="w-px bg-gray-200" />}
                                <div className="text-center md:text-left">
                                    <p className="text-xl font-extrabold text-gray-900">
                                        <CountUp
                                            to={stat.value}
                                            suffix={stat.suffix}
                                            delay={0.7}
                                        />
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {stat.label}
                                    </p>
                                </div>
                            </Fragment>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </MotionConfig>
    );
};

export default Hero;
