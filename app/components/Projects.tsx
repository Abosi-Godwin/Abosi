"use client";

import { useState } from "react";
import Link from "next/link";

import { projects } from "../utils/assets";
import Heading from "./Heading";
import Project from "./Project";

const FEATURED_LIMIT = 3;
const TABS = ["Shopify", "Web Apps"] as const;

type Tab = (typeof TABS)[number];

const isShopify = (tags: string[]) =>
    tags.some(tag => tag.toLowerCase().includes("shopify"));

const grouped: Record<Tab, typeof projects> = {
    Shopify: projects.filter(project => isShopify(project.tags)),
    "Web Apps": projects.filter(project => !isShopify(project.tags))
};

const availableTabs = TABS.filter(tab => grouped[tab].length > 0);

const Projects = () => {
    const [active, setActive] = useState<Tab>(availableTabs[0] ?? "Web Apps");

    const visible = grouped[active].slice(0, FEATURED_LIMIT);

    return (
        <div className="py-8 px-4">
            <Heading text="Featured Projects" />
            <p>Real projects I've designed, developed, and shipped.</p>

            {availableTabs.length > 1 && (
                <div
                    role="tablist"
                    className="flex justify-center items-center gap-3 pt-5"
                >
                    {availableTabs.map(tab => (
                        <button
                            key={tab}
                            role="tab"
                            type="button"
                            aria-selected={active === tab}
                            onClick={() => setActive(tab)}
                            className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition-colors ${
                                active === tab
                                    ? "border-black/80 bg-black/80 text-white"
                                    : "border-black/20 text-black/70 hover:bg-black/5"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            )}

            <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-3">
                {visible.map(project => (
                    <Project key={project.id} data={project} />
                ))}
            </div>

            <div className="flex justify-center gap-4 py-8 md:justify-start">
                <Link
                    href="/projects"
                    className="rounded-md border-2 border-black/60 px-6 py-2 font-bold capitalize text-black/70 transition-colors hover:bg-black/5"
                >
                    View All Projects
                </Link>
            </div>
        </div>
    );
};

export default Projects;
