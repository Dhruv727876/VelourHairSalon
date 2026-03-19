"use client";
import React from 'react';

export default function InfiniteMarquee() {
    const items = [
        "12+ Years of Excellence",
        "❋",
        "50+ Expert Specialists",
        "❋",
        "15K+ Happy Clients",
        "❋",
        "Award-Winning Salon",
        "❋",
        "Curated Rituals",
        "❋",
        "Bespoke Transformations",
        "❋"
    ];

    // Duplicate arrays for seamless CSS looping
    const marqueeContent = [...items, ...items, ...items];

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {marqueeContent.map((item, index) => (
                    <span
                        key={`mq1-${index}`}
                        className={item === "❋" ? "marquee-icon" : "marquee-text"}
                    >
                        {item}
                    </span>
                ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
                {marqueeContent.map((item, index) => (
                    <span
                        key={`mq2-${index}`}
                        className={item === "❋" ? "marquee-icon" : "marquee-text"}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
