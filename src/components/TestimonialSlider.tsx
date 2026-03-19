"use client";
import React, { useEffect } from 'react';

export default function TestimonialSlider() {
    useEffect(() => {
        // Safe to run client-side DOM queries here
        const track = document.getElementById('testiTrack') as HTMLElement;
        const prevBtn = document.getElementById('testiPrev') as HTMLButtonElement;
        const nextBtn = document.getElementById('testiNext') as HTMLButtonElement;
        const dotsContainer = document.getElementById('testiDots') as HTMLElement;

        if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

        const cards = track.querySelectorAll('.testi-card');
        if (cards.length === 0) return;

        let currentIndex = 0;
        let isAnimating = false;

        // Initialize dots
        dotsContainer.innerHTML = ''; // clear any existing
        cards.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('testi-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                if (!isAnimating && i !== currentIndex) {
                    goToSlide(i);
                }
            });
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.testi-dot');

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index: number) {
            isAnimating = true;
            currentIndex = index;
            if (track) {
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
            updateDots();

            setTimeout(() => {
                isAnimating = false;
            }, 600); // match CSS transition duration
        }

        const handlePrev = () => {
            if (isAnimating) return;
            let newIndex = currentIndex - 1;
            if (newIndex < 0) {
                newIndex = cards.length - 1; // loop to end
            }
            goToSlide(newIndex);
        };

        const handleNext = () => {
            if (isAnimating) return;
            let newIndex = currentIndex + 1;
            if (newIndex > cards.length - 1) {
                newIndex = 0; // loop to front
            }
            goToSlide(newIndex);
        };

        prevBtn.addEventListener('click', handlePrev);
        nextBtn.addEventListener('click', handleNext);

        return () => {
            prevBtn.removeEventListener('click', handlePrev);
            nextBtn.removeEventListener('click', handleNext);
        };
    }, []);

    return null;
}
