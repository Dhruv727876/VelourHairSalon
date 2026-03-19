"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
    children: React.ReactElement;
    stiffness?: number;
    damping?: number;
    mass?: number;
    className?: string;
}

export default function Magnetic({ children, stiffness = 150, damping = 15, mass = 0.5, className = "" }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        if (ref.current) {
            const { height, width, left, top } = ref.current.getBoundingClientRect();
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX * 0.2, y: middleY * 0.2 }); // 0.2 friction
        }
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            className={className}
            style={{ display: "inline-block", position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: stiffness, damping: damping, mass: mass }}
        >
            {children}
        </motion.div>
    );
}
