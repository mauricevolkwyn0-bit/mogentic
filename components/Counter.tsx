"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCounter } from "@/hooks/useCounter";

interface CounterProps {
    target: number;
    suffix?: string;
}

export default function Counter({ target, suffix = "" }: CounterProps) {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });
    const val = useCounter(target, isIntersecting);

    return (
        <span ref={ref} className="counter-num">
            {val}
            {suffix}
        </span>
    );
}
