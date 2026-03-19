
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className={`offer-banner ${false ? 'banner-hidden' : ''}`} id="offerBanner">
        <span>✦ Limited Time: 20% off all Bridal Packages — Book before March 31st &nbsp;|&nbsp; Call <a href="tel:+919876543210">+91 98765 43210</a> ✦</span>
      </div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <span className="logo-text">VELOUR</span>
            <span className="logo-sub">Salon &amp; Spa</span>
          </Link>
          <ul className={`nav-menu ${open ? 'open' : ''}`} id="navMenu">
            <li><Link href="#home" className="nav-link" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="#services" className="nav-link" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link href="#spa" className="nav-link" onClick={() => setOpen(false)}>Spa</Link></li>
            <li><Link href="#bridal" className="nav-link" onClick={() => setOpen(false)}>Bridal</Link></li>
            <li><Link href="#membership" className="nav-link" onClick={() => setOpen(false)}>Memberships</Link></li>
            <li><Link href="#gallery" className="nav-link" onClick={() => setOpen(false)}>Gallery</Link></li>
            <li><Link href="#about" className="nav-link" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="#contact" className="nav-link" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
          <div className="nav-cta">
            <Magnetic>
              <Link href="#booking" className="btn btn-outline" style={{ display: 'inline-block' }}>BOOK APPOINTMENT</Link>
            </Magnetic>
          </div>
          <Magnetic className="hamburger-wrap">
            <button
              className={`hamburger ${open ? 'open' : ''}`}
              id="hamburger"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span></span><span></span><span></span>
            </button>
          </Magnetic>
        </div>
      </nav>
    </>
  );
}
