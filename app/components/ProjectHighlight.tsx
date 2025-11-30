"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import { FaCircleCheck } from "react-icons/fa6";
import IntroImage from "./IntroImg";
import Heading from './Heading'


import { introInfo, projectHighlight } from "../utils/assets";

const ProjectHighlight = () => {
  return (
    <div className="py-10 w-full border-y-2 border-gray-200">
      <div className="p-4">
        <Heading text="Project Spotlight — Trexpenser" />
        <p className="tracking-wide">
          A personal finance app that helps users track expenses, manage income, and set meaningful
          savings goals. Designed and built end-to-end with a focus on clarity, simplicity, and
          real-life usability.
        </p>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        className="w-[95%] h-52 overflow-hidden p-2 border-8
          border-gray-50 rounded-md"
        modules={[Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {introInfo.map((data, index) => (
          <SwiperSlide
            key={index}
            className="w-[95%]"
          >
            <IntroImage data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="px-2 py-4">
        <p className="text-sm italic tracking-tight">
          Every screen was designed with the goal of reducing friction. Users should be able to
          understand their money at a glance.
        </p>

        <ul className="divide-y-2 divide-gray-100 gap-2 flex flex-col py-6">
          {projectHighlight.map((data, index) => (
            <li
              key={index}
              className="flex gap-2 justify-center items-centfer"
            >
              <span className="inline-block p-2 size-8 rounded-full text-white bg-secondary flex items-center justify-center">
                <FaCircleCheck />
              </span>
              {data}
            </li>
          ))}
        </ul>

        <p className="flex items-center justify-center w-full text-center py-4">
          React • Supabase • TailwindCSS • Context API • Recharts • motion •
        </p>
      </div>
    </div>
  );
};

export default ProjectHighlight;
