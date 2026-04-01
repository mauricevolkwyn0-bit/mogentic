"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
    once?: boolean;
    delay?: number;
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
    const { once = false, delay = 0, ...observerOptions } = options;
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef<any>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            if (entry.isIntersecting) {
                if (delay > 0) {
                    timeoutRef.current = setTimeout(() => {
                        setIntersecting(true);
                        if (once && ref.current) observer.unobserve(ref.current);
                    }, delay);
                } else {
                    setIntersecting(true);
                    if (once && ref.current) observer.unobserve(ref.current);
                }
            } else if (!once) {
                setIntersecting(false);
            }
        }, observerOptions);

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            observer.disconnect();
        };
    }, [observerOptions.threshold, observerOptions.root, observerOptions.rootMargin, delay, once]);

    return { ref, isIntersecting };
}
