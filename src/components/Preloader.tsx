"use client";
import React, { useEffect, useState } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);

    useEffect(() => {
        // Small delay to add the 'active' class so animations trigger
        const initialDelay = setTimeout(() => {
            setActive(true);
        }, 100);

        // After animation duration, trigger the fade out
        const removeDelay = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            clearTimeout(initialDelay);
            clearTimeout(removeDelay);
        };
    }, []);

    return (
        <div id="preloader" className={`${active ? 'active' : ''} ${!loading ? 'loaded' : ''}`.trim()}>
            <div className="preloader-logo">VELOUR</div>
            <div className="preloader-bar">
                <div className="preloader-progress"></div>
            </div>
        </div>
    );
}
