"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [currentCaption, setCurrentCaption] = useState('');

    const openLightbox = (src: string, caption: string) => {
        setCurrentImage(src);
        setCurrentCaption(caption);
        setIsOpen(true);
        // Using body rather than html directly to try and prevent lenis conflicts
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setTimeout(() => {
            setCurrentImage('');
            setCurrentCaption('');
            document.body.style.overflow = '';
        }, 300); // reduced timeout since framer motion handles unmount
    };

    return (
        <section className="section section-alt" id="gallery">
            <div className="container">
                <div className="section-header ">
                    <p className="section-eyebrow">Lookbook</p>
                    <h2 className="section-title">Our <em>Artistry</em></h2>
                    <p className="section-desc">A glimpse into the transformations, rituals, and world of VELOUR — where
                        every
                        detail is crafted with intention.</p>
                </div>
                <div className="gallery-masonry ">
                    <div className="gallery-item" onClick={() => openLightbox('images/hero_salon.webp', 'Salon Interior')}>
                        <img src="images/hero_salon.webp" alt="Luxury salon interior" loading="lazy" />
                        <div className="gallery-hover"><span>Salon Interior</span></div>
                    </div>
                    <div className="gallery-item" onClick={() => openLightbox('images/bridal_makeup.webp', 'Bridal Glam')}>
                        <img src="images/bridal_makeup.webp" alt="Bridal glam" loading="lazy" />
                        <div className="gallery-hover"><span>Bridal Glam</span></div>
                    </div>
                    <div className="gallery-item" onClick={() => openLightbox('images/hair_styling.webp', 'Hair Artistry')}>
                        <img src="images/hair_styling.webp" alt="Hair artistry" loading="lazy" />
                        <div className="gallery-hover"><span>Hair Artistry</span></div>
                    </div>
                    <div className="gallery-item" onClick={() => openLightbox('images/spa_treatment.webp', 'Spa Rituals')}>
                        <img src="images/spa_treatment.webp" alt="Spa ritual" loading="lazy" />
                        <div className="gallery-hover"><span>Spa Rituals</span></div>
                    </div>
                    <div className="gallery-item gallery-art gallery-art-nails">
                        <div className="gallery-art-inner"><span className="gallery-art-icon">❋</span><span
                            className="gallery-art-label">Nail Art</span></div>
                        <div className="gallery-hover"><span>Nail Studio</span></div>
                    </div>
                    <div className="gallery-item gallery-art gallery-art-colour">
                        <div className="gallery-art-inner"><span className="gallery-art-icon">◈</span><span
                            className="gallery-art-label">Colour Studio</span></div>
                        <div className="gallery-hover"><span>Colour Studio</span></div>
                    </div>
                </div>
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lightbox active"
                        onClick={closeLightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="lightbox-content"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <div className="lightbox-close" onClick={closeLightbox}>✕</div>
                            <img src={currentImage} alt={currentCaption} className="lightbox-img" />
                            <div className="lightbox-caption">{currentCaption}</div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
