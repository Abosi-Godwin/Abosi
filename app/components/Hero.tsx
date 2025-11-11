import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-18 px-5">
      <div className="pt-10 relative ">
        <Image
          src="/Abosi.png"
          width={260}
          height={260}
          alt="Abosi Godwin"
          className="-pl-10"
        />

        <div
          className="font-bold flex gap-1 bg-primary w-fit rounded-md px-1
        absolute top-24 right-4 text-white"
        >
          <h1>Available</h1>
          <span className="relative flex size-3">
            <span
              className="absolute inline-flex h-full w-full animate-ping
            rounded-full bg-secondary opacity-75"
            ></span>
            <span
              className="relative inline-flex size-3 rounded-full
            bg-secondary"
            ></span>
          </span>
        </div>
      </div>
      <div className="">
        <p className="text-sm">
          Hi &#x270B;, i am <span className="font-bold">Abosi Godwin.</span>
        </p>
        <h1 className="text-2xl py-5 font-bold">
          A <span className="text-accent font-extrabold">Full Stack, </span>
          <span className="text-accent font-extrabold">Shopify, </span> and
          <span className="text-accent font-extrabold"> WordPress </span>
          developer.
        </h1>
        <p className="">
          I build unique modern, responsive websites that help brands stand out online.
        </p>
        <div className="flex gap-4 py-8">
          <button
            className="ring-2 rounded-md px-5 py-2 ring-white font-bold
        capitalize bg-secondary text-white"
          >
            view Projects
          </button>
          <button
            className="ring-2 rounded-md px-5 py-1 ring-primary font-bold
        capitalize text-primary"
          >
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
