"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaCircleCheck } from "react-icons/fa6";
import IntroImage from "./IntroImg";
import Heading from "./Heading";

import { introInfo, projectHighlight } from "../utils/assets";

const ProjectHighlight = () => {
    return (
        <section className="grid grid-cols-1 gap-x-12 gap-y-6 px-2 py-5 md:grid-cols-2 md:px-5 md:py-16">
            {/* Column 1: Text Content */}
            <div className="space-y-4">
                <Heading text="Project Spotlight — Trexpenser" />
                <p className="leading-relaxed text-gray-700">
                    A personal finance app that helps users track expenses,
                    manage income, and set meaningful savings goals. Designed
                    and built end-to-end with a focus on clarity, simplicity,
                    and real-life usability.
                </p>
                <p className="leading-relaxed text-gray-700">
                    Every screen was designed with the goal of reducing
                    friction. Users should be able to understand their money at
                    a glance.
                </p>

                {/* Feature List */}
                <ul className="flex flex-col gap-3 py-6">
                    {projectHighlight.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                                <FaCircleCheck className="text-xs" />
                            </span>
                            <span className="text-sm font-medium text-gray-800">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="md:row-span-1">
                <div className="overflow-hidden rounded-xl border-8 border-gray-50 shadow-inner">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        className="h-64 md:h-96 w-full"
                        modules={[Pagination, A11y, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                    >
                        {introInfo.map((data, index) => (
                            <SwiperSlide key={index}>
                                <IntroImage data={data} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                    <span>React</span> • <span>Supabase</span> •{" "}
                    <span>TailwindCSS</span> •<span>Context API</span> •{" "}
                    <span>Recharts</span> • <span>Framer Motion</span>
                </div>
                <div className="mt-6 border-t border-gray-100 pt-6 px-1 flex items-center justify-between gap-4">
                    <Link
                        href={`/projects/trexpenser-expense-savings-tracker`}
                        className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md active:scale-95"
                    >
                        View Case Study
                        <span className="text-[10px]">→</span>
                    </Link>

                    <a
                        href="https://trexpenser.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2.5 text-xs font-medium text-gray-500 transition-all hover:border-gray-400 hover:text-gray-700 active:scale-95"
                    >
                        Live Preview
                        <span className="text-[10px] opacity-70">↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectHighlight;
