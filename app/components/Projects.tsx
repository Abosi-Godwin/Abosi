"use client";

import { useState } from "react";
import Link from "next/link";

import { MotionConfig, motion } from "motion/react";

import { projects } from "../utils/assets";
import { fadeUp, reveal, stagger, viewportOnce } from "../utils/motion";
import Heading from "./Heading";
import Project from "./Project";

const FEATURED_LIMIT = 3;
const TABS = ["All", "Shopify", "Websites"] as const;

type Tab = (typeof TABS)[number];

const group = stagger(0.1);

const isShopify = (tags: string[]) =>
    tags.some(tag => tag.toLowerCase().includes("shopify"));

function interleave<T>(first: T[], second: T[]): T[] {
    const result: T[] = [];
    const length = Math.max(first.length, second.length);

    for (let i = 0; i < length; i++) {
        if (first[i]) result.push(first[i]);
        if (second[i]) result.push(second[i]);
    }

    return result;
}

const shopifyProjects = projects.filter(project => isShopify(project.tags));
const websiteProjects = projects.filter(project => !isShopify(project.tags));

const grouped: Record<Tab, typeof projects> = {
    All: interleave(shopifyProjects, websiteProjects),
    Shopify: shopifyProjects,
    Websites: websiteProjects
};

const showTabs = shopifyProjects.length > 0 && websiteProjects.length > 0;

const Projects = () => {
    const [active, setActive] = useState<Tab>("All");

    const visible = grouped[active].slice(0, FEATURED_LIMIT);

    return (
        <MotionConfig reducedMotion="user">
            <div className="py-8 px-4">
                <motion.div
                    variants={group}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                >
                    <motion.div variants={fadeUp}>
                        <Heading text="Featured Projects" />
                    </motion.div>
                    <motion.p variants={fadeUp}>
                        Real projects I've designed, developed, and shipped.
                    </motion.p>

                    {showTabs && (
                        <motion.div
                            variants={fadeUp}
                            role="tablist"
                            className="flex justify-center items-center gap-3 pt-5"
                        >
                            {TABS.map(tab => (
                                <motion.button
                                    key={tab}
                                    role="tab"
                                    type="button"
                                    aria-selected={active === tab}
                                    onClick={() => setActive(tab)}
                                    whileTap={{ scale: 0.96 }}
                                    className={`relative rounded-full border-2 px-5 py-2 text-sm font-semibold transition-colors ${
                                        active === tab
                                            ? "border-black/80 text-white"
                                            : "border-black/20 text-black/70 hover:bg-black/5"
                                    }`}
                                >
                                    {active === tab && (
                                        <motion.span
                                            layoutId="project-tab-pill"
                                            className="absolute inset-0 rounded-full bg-black/80"
                                            transition={{
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 38
                                            }}
                                        />
                                    )}
                                    <span className="relative">{tab}</span>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </motion.div>

                <motion.div
                    key={active}
                    variants={group}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-3"
                >
                    {visible.map(project => (
                        <Project key={project.id} data={project} />
                    ))}
                </motion.div>

                <motion.div
                    {...reveal}
                    className="flex justify-center gap-4 py-8 md:justify-start"
                >
                    <Link
                        href="/projects"
                        className="rounded-md border-2 border-black/60 px-6 py-2 font-bold capitalize text-black/70 transition-colors hover:bg-black/5"
                    >
                        View All Projects
                    </Link>
                </motion.div>
            </div>
        </MotionConfig>
    );
};

export default Projects;
