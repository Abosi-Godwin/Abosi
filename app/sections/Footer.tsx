"use client";

import Link from "next/link";
import Image from "next/image";

import { MotionConfig, motion } from "motion/react";

import { reveal } from "../utils/motion";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <MotionConfig reducedMotion="user">
            <footer className="w-full py-8">
                <motion.div {...reveal}>
                    <hr className="mb-10 opacity-30" />

                    <Link href="/about" className="sr-only">
                        About Abosi Godwin
                    </Link>

                    <div className="px-5 mx-auto flex flex-col md:flex-row md:justify-center md:items-center md:gap-10">
                        <p className="text-center capitalize mb-6 md:mb-0 text-sm text-muted-foreground">
                            © {currentYear} Abosi Godwin
                        </p>

                        <div className="flex items-center justify-center gap-4">
                            <div className="relative w-40 h-40">
                                <img
                                    src="https://www.codewars.com/users/Abosi-Godwin/badges/large"
                                    alt="Abosi Godwin codewars profile badge"
                                    className="object-contain object-center"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </footer>
        </MotionConfig>
    );
};

export default Footer;
