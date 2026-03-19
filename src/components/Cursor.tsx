"use client";
import React, { useEffect } from 'react';

export default function Cursor() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.body.style.setProperty('--cursor-x', `${e.clientX}px`);
            document.body.style.setProperty('--cursor-y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return null;
}
