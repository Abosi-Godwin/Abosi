import Heading from "./Heading";

const Bio = () => {
  return (
    <div className="md:w-4/5 py-10 px-2.5 md:px-5">
      <Heading text="Who am i?" />
      <h2 className="text-sm tracking-tight font-light pb-5">
        Frontend Developer & Web Designer based in Nigeria.
      </h2>
      <p>
        I’m a passionate <strong> Frontend Developer </strong>
        and <strong> Web Designer </strong> who specializes in crafting fast,
        responsive, and visually engaging websites. I blend design and
        development to create seamless user experiences using{" "}
        <strong>Next.js,</strong>
        <strong> React,</strong> and <strong>TailwindCSS.</strong>
      </p>
      <br />
      <p>
        Beyond <strong>frontend development,</strong> I design and build
        eCommerce and CMS-powered websites with
        <strong> Shopify </strong> and <strong>WordPress,</strong> helping
        businesses turn ideas into functional digital experiences.
      </p>
      <br />
      <p>
        My approach focuses on clarity, performance, and modern aesthetics —
        ensuring every project I build not only looks great but also performs
        effortlessly across devices.
      </p>
    </div>
  );
};

export default Bio;
