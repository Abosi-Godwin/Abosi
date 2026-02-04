import Heading from "./Heading";

const Bio = () => {
    return (
        <section className="max-w-3xl py-10 px-2.5 md:px-5">
            <Heading text="Who am I?" />
            
            {/* Improved hierarchy: Sub-heading stands out more */}
            <h2 className="text-lg md:text-xl tracking-tight font-medium text-secondary pb-6">
                Frontend Developer & Web Designer based in Nigeria.
            </h2>

            {/* Using space-y for consistent paragraph gapping */}
            <div className="leading-relaxed text-gray-700 space-y-5 text-base md:text-lg">
                <p>
                    I’m a passionate <strong>Frontend Developer</strong> and <strong>Web Designer</strong> who specializes in crafting fast, responsive, and visually engaging websites. I blend design and development to create seamless user experiences using <strong>Next.js, React,</strong> and <strong>TailwindCSS.</strong>
                </p>

                <p>
                    Beyond <strong>frontend development,</strong> I design and build eCommerce and CMS-powered websites with <strong>Shopify</strong> and <strong>WordPress,</strong> helping businesses turn ideas into functional digital experiences.
                </p>

                <p>
                    My approach focuses on clarity, performance, and modern aesthetics — ensuring every project I build not only looks great but also performs effortlessly across devices.
                </p>
            </div>
        </section>
    );
};

export default Bio;
