"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import { FaCircleCheck } from "react-icons/fa6";
import IntroImage from "./IntroImg";
import Heading from "./Heading";

import { introInfo, projectHighlight } from "../utils/assets";

import "swiper/css/pagination";

const ProjectHighlight = () => {
  return (
    <div className="py-5 md:py-10 px-2 md:px-5 grid grid-cols-1 gap-x-8 md:grid-cols-2">
      <div className="">
        <Heading text="Project Spotlight — Trexpenser" />
        <p className="tracking-wide">
          A personal finance app that helps users track expenses, manage income, and set meaningful
          savings goals. Designed and built end-to-end with a focus on clarity, simplicity, and
          real-life usability.
        </p>
        <p className="tracking-wide">
          Every screen was designed with the goal of reducing friction. Users should be able to
          understand their money at a glance.
        </p>
      </div>
      <div className="row-span-2">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          className="h-48 overflow-hidden p-2 border-4 border-gray-50 rounded-md"
          modules={[Pagination, A11y, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={true}
        >
          {introInfo.map((data, index) => (
            <SwiperSlide
              key={index}
              className=""
            >
              <IntroImage data={data} />
            </SwiperSlide>
          ))}
        </Swiper>

        <p
          className="flex p-4 items-center justify-center w-full text-center
        py-4 mb-10"
        >
          React • Supabase • TailwindCSS • Context API • Recharts • motion •
        </p>
      </div>

      <ul className="divide-y-2 divide-gray-100 gap-2 flex flex-col py-6">
        {projectHighlight.map((data, index) => (
          <li
            key={index}
            className="flex gap-2 justify-start items-centfer"
          >
            <span className="p-2 size-8 rounded-full text-white bg-secondary flex items-center justify-center">
              <FaCircleCheck />
            </span>
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectHighlight;
