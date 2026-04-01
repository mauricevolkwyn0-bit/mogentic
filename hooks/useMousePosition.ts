"use client";

import { useEffect, useRef } from "react";

export function useMousePosition() {
    const mx = useRef(0);
    const my = useRef(0);
    const rx = useRef(0);
    const ry = useRef(0);
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mx.current = e.clientX;
            my.current = e.clientY;
        };
        document.addEventListener("mousemove", onMove);

        let raf: number;
        const tick = () => {
            if (cursorRef.current) {
                cursorRef.current.style.left = mx.current + "px";
                cursorRef.current.style.top = my.current + "px";
            }
            rx.current += (mx.current - rx.current) * 0.1;
            ry.current += (my.current - ry.current) * 0.1;
            if (ringRef.current) {
                ringRef.current.style.left = rx.current + "px";
                ringRef.current.style.top = ry.current + "px";
            }
            raf = requestAnimationFrame(tick);
        };
        tick();

        return () => {
            document.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return { cursorRef, ringRef };
}
