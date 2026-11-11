"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
    to: number;
    suffix?: string;
    duration?: number;
    delay?: number;
    className?: string;
};

const CountUp = ({
    to,
    suffix = "",
    duration = 1.6,
    delay = 0,
    className
}: CountUpProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const node = ref.current;
        if (!node || !inView) return;

        if (reduceMotion) {
            node.textContent = `${to}${suffix}`;
            return;
        }

        const controls = animate(0, to, {
            duration,
            delay,
            ease: "easeOut",
            onUpdate: value => {
                node.textContent = `${Math.round(value)}${suffix}`;
            }
        });

        return () => controls.stop();
    }, [inView, reduceMotion, to, suffix, duration, delay]);

    return (
        <span ref={ref} className={className}>
            {`0${suffix}`}
        </span>
    );
};

export default CountUp;
