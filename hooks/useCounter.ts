"use client";

import { useState, useRef, useEffect } from "react";

export function useCounter(target: number, isIntersecting: boolean) {
    const [val, setVal] = useState(0);
    const timer = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (timer.current) clearInterval(timer.current);

        if (isIntersecting) {
            let c = 0;
            const step = target / 50;
            timer.current = setInterval(() => {
                c = Math.min(c + step, target);
                setVal(Math.floor(c));
                if (c >= target) {
                    if (timer.current) clearInterval(timer.current);
                }
            }, 30);
        } else {
            setVal(0);
        }

        return () => {
            if (timer.current) clearInterval(timer.current);
        };
    }, [target, isIntersecting]);

    return val;
}
