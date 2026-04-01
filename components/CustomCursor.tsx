"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export default function CustomCursor() {
    const { cursorRef, ringRef } = useMousePosition();

    return (
        <>
            <div ref={cursorRef} className="cursor" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
}
