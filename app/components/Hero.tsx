import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-10 flex flex-col pt-18 items-center justify-evenly px-5 md:flex-row md:pt-30 w-full">
      <div className="relative ">
        <Image
          src="/Abosi.png"
          width={260}
          height={260}
          alt="Abosi Godwin"
          className=""
        />

        <div
          className="font-bold flex gap-1 bg-green-500 w-fit rounded-md px-1
        absolute top-24 right-4 text-white
         md:top-2"
        >
          <h1>Available</h1>
          <span className="relative flex size-3">
            <span
              className="absolute inline-flex h-full w-full animate-ping
            rounded-full bg-white opacity-75"
            ></span>
            <span
              className="relative inline-flex size-3 rounded-full
            bg-white/60"
            ></span>
          </span>
        </div>
      </div>
      <div className="">
        <p className="text-sm">
          Hi &#x270B;, i am <strong>Abosi Godwin.</strong>
        </p>
        <h1 className="text-2xl py-5 font-bold">
          A <span className="text-accent font-extrabold">Full Stack, </span>
          <span className="text-accent font-extrabold">Shopify, </span> and
          <span className="text-accent font-extrabold"> WordPress </span>
          developer.
        </h1>
        <p>
          I build unique modern, responsive websites that help brands stand out
          online.
        </p>
        <p className="">
          I build unique modern, responsive websites that help brands stand out
          online.
        </p>
        <div className="flex gap-4 py-8">
          <button
            className="ring-2 rounded-md px-5 py-2 ring-white font-bold
        capitalize bg-secondary text-white"
          >
            Hire me
          </button>
          <button
            className="ring-2 rounded-md px-5 py-1 ring-black/60 font-bold
        capitalize text-black/70"
          >
            view Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
