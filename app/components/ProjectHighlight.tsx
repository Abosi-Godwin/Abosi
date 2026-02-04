 "use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

// Import Swiper styles // [!code ++]
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
          A personal finance app that helps users track expenses, manage income, and set meaningful
          savings goals. Designed and built end-to-end with a focus on clarity, simplicity, and
          real-life usability.
        </p>
        <p className="leading-relaxed text-gray-700">
          Every screen was designed with the goal of reducing friction. Users should be able to
          understand their money at a glance.
        </p>

        {/* Feature List */}
        <ul className="flex flex-col gap-3 py-6">
          {projectHighlight.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                <FaCircleCheck className="text-xs" />
              </span>
              <span className="text-sm font-medium text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2: Visuals (Spans 2 rows on desktop) */}
      <div className="md:row-span-1">
        <div className="overflow-hidden rounded-xl border-8 border-gray-50 shadow-inner">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            className="h-64 md:h-96 w-full" // Increased height for better visibility
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

        {/* Tech Stack Footer */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
          <span>React</span> • <span>Supabase</span> • <span>TailwindCSS</span> • 
          <span>Context API</span> • <span>Recharts</span> • <span>Framer Motion</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlight;
