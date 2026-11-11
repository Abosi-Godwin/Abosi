import type { Variants } from "motion/react";

export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: easeOut },
    },
};

export const stagger = (gap = 0.1, delayChildren = 0): Variants => ({
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren } },
});

export const viewportOnce = { once: true, amount: 0.2 } as const;
