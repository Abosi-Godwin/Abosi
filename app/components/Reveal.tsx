"use client";
import type { ReactNode } from "react";
import { MotionConfig, motion } from "motion/react";

import { fadeUp, stagger } from "../utils/motion";

const viewport = { once: true, margin: "0px 0px -60px 0px" } as const;

type RevealProps = {
    children: ReactNode;
    className?: string;
};

type RevealGroupProps = RevealProps & {
    onMount?: boolean;
    gap?: number;
    delay?: number;
};

export const Reveal = ({ children, className }: RevealProps) => (
    <MotionConfig reducedMotion="user">
        <motion.div
            className={className}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
        >
            {children}
        </motion.div>
    </MotionConfig>
);

export const RevealGroup = ({
    children,
    className,
    onMount = false,
    gap = 0.1,
    delay = 0.1
}: RevealGroupProps) => (
    <MotionConfig reducedMotion="user">
        <motion.div
            className={className}
            variants={stagger(gap, delay)}
            initial="hidden"
            {...(onMount
                ? { animate: "show" }
                : { whileInView: "show", viewport })}
        >
            {children}
        </motion.div>
    </MotionConfig>
);

export const RevealItem = ({ children, className }: RevealProps) => (
    <motion.div className={className} variants={fadeUp}>
        {children}
    </motion.div>
);
