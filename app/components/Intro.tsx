import Image from "next/image";
import myImage from "../../public/relaxe.jpg";

const Intro = () => {
  return (
    <div className="py-10 text-black/80 flex flex-col items-center
    justify-between">
      <div className="py-10">
        <p className="text-sm tracking-tighter uppercase">I might not be the best</p>
        <p>But look at what i pulled</p>
        <div className="w-[90%] p-2 border-8 border-gray-100 rounded-md">
          <Image
            src={myImage}
            alt="Abosi Godwin project"
            className="fill"
          />
        </div>
      </div>
      <div className="py-5">
        <h1 className="font-extrabold text-2xl ">Who am i?</h1>
        <h6 className="text-sm tracking-tight font-light">
          Frontend Developer & Web Designer based in Nigeria.
        </h6>
      </div>
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
        My approach focuses on clarity, performance, and modern aesthetics — ensuring every project
        I build not only looks great but also performs effortlessly across devices.
      </p>
    </div>
  );
};

export default Intro;
