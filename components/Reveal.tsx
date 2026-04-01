"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function Reveal({
    children,
    className = "",
    style = {},
}: RevealProps) {
    const { ref, isIntersecting: visible } = useIntersectionObserver({ threshold: 0.1, delay: 80 });

    return (
        <div
            ref={ref}
            className={`reveal${visible ? " visible" : ""}${className ? " " + className : ""
                }`}
            style={style}
        >
            {children}
        </div>
    );
}
