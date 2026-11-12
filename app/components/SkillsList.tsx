"use client";

import { MotionConfig, motion } from "motion/react";

import { fadeUp, stagger, viewportOnce } from "../utils/motion";

interface SkillItem {
    title: string;
    icon: React.ElementType;
}

interface SkillsListProps {
    title: string;
    items: SkillItem[];
    delay?: number;
}

const SkillsList = ({ title, items, delay = 0 }: SkillsListProps) => {
    return (
        <MotionConfig reducedMotion="user">
            <motion.div
                className="py-2 w-full"
                variants={stagger(0.06, delay)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
            >
                <motion.h2
                    variants={fadeUp}
                    className="text-xl font-bold pb-2 border-b border-gray-100"
                >
                    {title}
                </motion.h2>
                <ul className="pt-2 flex flex-col gap-1">
                    {items.map(item => {
                        const Icon = item.icon;
                        return (
                            <motion.li
                                key={item.title}
                                variants={fadeUp}
                                whileHover={{ x: 4 }}
                                className="flex gap-3 items-center uppercase p-2
                                           rounded-md odd:bg-gray-50 hover:bg-gray-100
                                           transition-colors duration-200"
                            >
                                <Icon className="text-secondary text-lg"
                                alt={`${item.title} icon`} />
                                <span className="text-sm font-medium tracking-wide">
                                    {item.title}
                                </span>
                            </motion.li>
                        );
                    })}
                </ul>
            </motion.div>
        </MotionConfig>
    );
};

export default SkillsList;
