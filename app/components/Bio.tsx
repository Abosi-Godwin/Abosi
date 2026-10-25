import Heading from "./Heading";

const Bio = () => {
    return (
        <section className="max-w-3xl py-12 px-2.5 md:px-5">
            <Heading text="About me" />
            <h2 className="text-lg md:text-xl tracking-tight font-medium text-secondary pb-6">
                Ecommerce Developer specializing in Shopify and Next.js, based
                in Nigeria.
            </h2>

            <div className="leading-relaxed text-gray-700 space-y-5 text-base md:text-lg">
                <p>
                    Abosi Godwin is a self-taught ecommerce developer from
                    Asaba, Nigeria, building online stores and ecommerce
                    websites end to end, from the storefront interface to
                    checkout, payments, and the backend behind them.
                </p>
                <p>
                    I got into web development in 2020 through Shopify and
                    WordPress, and that ecommerce foundation is still what I
                    build on. Today I work with{" "}
                    <strong>Shopify, React, Next.js, and TypeScript</strong>,
                    with <strong>Supabase</strong> on the backend when a
                    project needs custom logic or data.
                </p>
                <p>
                    Whether a business needs a Shopify store, a fully custom
                    storefront, or a headless setup built on the Shopify
                    Storefront API for speed and flexibility, I can take it
                    from first design to launch, including payment
                    integrations like Paystack for businesses selling in
                    Nigeria.
                </p>
                <p>
                    Beyond client work, I build my own products. Sproute, an
                    AI-powered WhatsApp lead prospecting SaaS for freelancers,
                    is the clearest example of how I think: not just as a
                    developer writing code, but as a builder who cares about
                    the whole product experience.
                </p>
                <p>
                    My focus is always on clarity, performance, and
                    maintainability, code that holds up in production, and
                    stores that customers actually enjoy buying from.
                </p>
            </div>
        </section>
    );
};

export default Bio;
