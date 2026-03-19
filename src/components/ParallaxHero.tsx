"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from '@/components/Magnetic';
import InfiniteMarquee from '@/components/InfiniteMarquee';

export default function ParallaxHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section className="hero" id="home" ref={ref} style={{ overflow: 'hidden' }}>
            <motion.div className="hero-bg" style={{ y: backgroundY }}>
                <picture>
                    <source media="(max-width: 768px)" srcSet="images/hero_salon_mobile.webp" />
                    <img src="images/hero_salon.webp" alt="Luxury salon interior" className="hero-img" loading="eager"
                        fetchPriority="high" style={{ height: '120vh', objectPosition: 'center 30%' }} />
                </picture>
                <div className="hero-overlay"></div>
            </motion.div>

            <motion.div className="hero-content" style={{ y: textY, opacity }}>
                <p className="hero-eyebrow ">Mumbai's Premier Beauty Sanctuary</p>
                <h1 className="hero-title ">
                    Where Beauty<br /><em>Becomes Art</em>
                </h1>
                <p className="hero-sub ">Surrender to the art of indulgence. Expert hands, curated rituals,<br
                    className="desktop-br" /> and bespoke transformations crafted exclusively for you.</p>
                <div className="hero-ctas ">
                    <Magnetic>
                        <a href="#booking" className="btn btn-gold" style={{ display: 'inline-block' }}>Book Your Experience</a>
                    </Magnetic>
                    <Magnetic>
                        <a href="#services" className="btn btn-outline-light" style={{ display: 'inline-block' }}>Explore Services</a>
                    </Magnetic>
                </div>
            </motion.div>

            <motion.div style={{ opacity, position: 'absolute', bottom: '8rem', left: 0, width: '100%' }}>
                <InfiniteMarquee />
            </motion.div>

            <motion.div className="hero-scroll-hint" style={{ opacity }}>
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </motion.div>
        </section >
    );
}
