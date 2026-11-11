"use client";

import Link from "next/link";

import { MotionConfig, motion } from "motion/react";
import type { Variants } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaCircleCheck } from "react-icons/fa6";
import IntroImage from "./IntroImg";
import Heading from "./Heading";

import { introInfo, projectHighlight } from "../utils/assets";
import { easeOut, fadeUp, stagger, viewportOnce } from "../utils/motion";

const leftColumn = stagger(0.12);
const featureList = stagger(0.08);
const rightColumn = stagger(0.12, 0.15);

const checkPop: Variants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { delay: 0.15, duration: 0.5, ease: easeOut },
    },
};

const ProjectHighlight = () => {
    return (
        <MotionConfig reducedMotion="user">
            <section className="grid grid-cols-1 gap-x-12 gap-y-6 px-2 py-5 md:grid-cols-2 md:px-5 md:py-16">
                <motion.div
                    className="space-y-4"
                    variants={leftColumn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                >
                    <motion.div variants={fadeUp}>
                        <Heading text="Project Spotlight: Sproute" />
                    </motion.div>
                    <motion.p
                        variants={fadeUp}
                        className="leading-relaxed text-gray-700"
                    >
                        An AI-powered WhatsApp lead prospecting SaaS built for
                        freelancers. Sproute helps users find potential
                        clients, draft outreach messages, and manage replies,
                        all without the busywork of manually chasing leads.
                    </motion.p>
                    <motion.p
                        variants={fadeUp}
                        className="leading-relaxed text-gray-700"
                    >
                        Every part of the flow was designed to feel human.
                        Reply handling, tone matching, and follow-ups all aim
                        to sound like a real person reaching out, not an
                        automated script.
                    </motion.p>

                    <motion.ul
                        variants={featureList}
                        className="flex flex-col gap-3 py-6"
                    >
                        {projectHighlight.map((item, index) => (
                            <motion.li
                                key={index}
                                variants={fadeUp}
                                className="flex items-start gap-3"
                            >
                                <motion.span
                                    variants={checkPop}
                                    className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-white"
                                >
                                    <FaCircleCheck className="text-xs" />
                                </motion.span>
                                <span className="text-sm font-medium text-gray-800">
                                    {item}
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                <motion.div
                    className="md:row-span-1"
                    variants={rightColumn}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                >
                    <motion.div
                        variants={fadeUp}
                        className="overflow-hidden rounded-xl border-8 border-gray-50 shadow-inner"
                    >
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            className="h-64 md:h-96 w-full"
                            modules={[Pagination, A11y, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            {introInfo.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <IntroImage data={data} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400"
                    >
                        <span>Next.js</span> • <span>Supabase</span> •{" "}
                        <span>TypeScript</span> • <span>TanStack Query</span> •{" "}
                        <span>Zustand</span> • <span>Paystack</span>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mt-6 border-t border-gray-100 pt-6 px-1 flex items-center justify-between gap-4"
                    >
                        <Link
                            href={`/projects/sproute-ai-whatsapp-prospecting`}
                            className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md active:scale-95"
                        >
                            View Case Study
                            <span className="text-[10px]">→</span>
                        </Link>

                        <a
                            href="https://sproute-landing.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2.5 text-xs font-medium text-gray-500 transition-all hover:border-gray-400 hover:text-gray-700 active:scale-95"
                        >
                            Live Preview
                            <span className="text-[10px] opacity-70">↗</span>
                        </a>
                    </motion.div>
                </motion.div>
            </section>
        </MotionConfig>
    );
};

export default ProjectHighlight;
