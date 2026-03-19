"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    yOffset?: number;
}

export default function Reveal({ children, width = "100%", delay = 0.25, yOffset = 75 }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: yOffset },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: delay, ease: [0.33, 1, 0.68, 1] }} // custom easing curve for luxury feel
            >
                {children}
            </motion.div>
        </div>
    );
}
