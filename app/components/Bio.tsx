"use client";

import { MotionConfig, motion } from "motion/react";

import Heading from "./Heading";
import { reveal } from "../utils/motion";

const Bio = () => {
    return (
        <MotionConfig reducedMotion="user">
            <section className="max-w-3xl py-12 px-2.5 md:px-5">
                <motion.div {...reveal}>
                    <Heading text="About me" />
                </motion.div>
                <motion.h2
                    {...reveal}
                    className="text-lg md:text-xl tracking-tight font-medium text-secondary pb-6"
                >
                    Ecommerce Developer specializing in Shopify and Next.js,
                    based in Nigeria.
                </motion.h2>

                <div className="leading-relaxed text-gray-700 space-y-5 text-base md:text-lg">
                    <motion.p {...reveal}>
                        Abosi Godwin is a self-taught ecommerce developer from
                        Asaba, Nigeria, building online stores and ecommerce
                        websites end to end, from the storefront interface to
                        checkout, payments, and the backend behind them.
                    </motion.p>
                    <motion.p {...reveal}>
                        I got into web development in 2020 through Shopify and
                        WordPress, and that ecommerce foundation is still what
                        I build on. Today I work with{" "}
                        <strong>Shopify, React, Next.js, and TypeScript</strong>
                        , with <strong>Supabase</strong> on the backend when a
                        project needs custom logic or data.
                    </motion.p>
                    <motion.p {...reveal}>
                        Whether a business needs a Shopify store, a fully
                        custom storefront, or a headless setup built on the
                        Shopify Storefront API for speed and flexibility, I can
                        take it from first design to launch, including payment
                        integrations like Paystack for businesses selling in
                        Nigeria.
                    </motion.p>
                    <motion.p {...reveal}>
                        Beyond client work, I build my own products. Sproute,
                        an AI-powered WhatsApp lead prospecting SaaS for
                        freelancers, is the clearest example of how I think:
                        not just as a developer writing code, but as a builder
                        who cares about the whole product experience.
                    </motion.p>
                    <motion.p {...reveal}>
                        My focus is always on clarity, performance, and
                        maintainability, code that holds up in production, and
                        stores that customers actually enjoy buying from.
                    </motion.p>
                </div>
            </section>
        </MotionConfig>
    );
};

export default Bio;
