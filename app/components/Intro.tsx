"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import { FaCircleCheck } from "react-icons/fa6";
import IntroImage from "./IntroImg";
//import CheckMark from "./CheckMark";

import myImage from "../../public/relaxe.jpg";

const introInfo = [
  {
    image: myImage,
    title: "Landing page",
  },
  {
    image: myImage,
    title: "Sign up page",
  },
  {
    image: myImage,
    title: "login page",
  },
  {
    image: myImage,
    title: "Dashboard page",
  },
];

const projectHighlight = [
  " Carefully designed financial UX for effortless daily use",
  "Savings goals with manual and automatic contribution options",
  "Visual insights using charts for income, expenses, and progress",
  "Fully built with React + Tailwind and optimized for mobile",
  "No backend dependencies — lightweight, fast, and reliable",
];
const Intro = () => {
  return (
    <div className="py-8 text-black/80 flex flex-col items-center justify-between">
      <div className="py-10 w-full border-y-2 border-gray-200">
        <div className="p-4">
          <h1 className="text-xl font-extrabold">Project Spotlight — Trexpenser</h1>
          <p className="tracking-wide">
            A personal finance app that helps users track expenses, manage income, and set
            meaningful savings goals. Designed and built end-to-end with a focus on clarity,
            simplicity, and real-life usability.
          </p>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          className="w-[95%] h-52 overflow-hidden p-2 border-8
          border-gray-50 rounded-md"
          modules={[Pagination, A11y, Autoplay]}
          slidesPerView={1}
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

      <div className="py-5 px-2.5">
        <h1 className="font-extrabold text-2xl ">Who am i?</h1>
        <h6 className="text-sm tracking-tight font-light pb-5">
          Frontend Developer & Web Designer based in Nigeria.
        </h6>
        <p>
          I’m a passionate <strong> Frontend Developer </strong>
          and <strong> Web Designer </strong> who specializes in crafting fast, responsive, and
          visually engaging websites. I blend design and development to create seamless user
          experiences using <strong>Next.js,</strong>
          <strong> React,</strong> and <strong>TailwindCSS.</strong>
        </p>
        <br />
        <p>
          Beyond <strong>frontend development,</strong> I design and build eCommerce and CMS-powered
          websites with
          <strong> Shopify </strong> and <strong>WordPress,</strong> helping businesses turn ideas
          into functional digital experiences.
        </p>
        <br />
        <p>
          My approach focuses on clarity, performance, and modern aesthetics — ensuring every
          project I build not only looks great but also performs effortlessly across devices.
        </p>
      </div>
    </div>
  );
};

export default Intro;
