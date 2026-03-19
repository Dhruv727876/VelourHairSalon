
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer" id="footerEl">
            <div className="footer-top">
                <div className="footer-brand">
                    <span className="footer-logo">VELOUR</span>
                    <p>Mumbai's premier luxury salon &amp; spa. Where beauty is an art and every visit is an escape.</p>
                    <div className="social-links" style={{ marginTop: '1.5rem' }}>
                        <a href="#" className="social-link" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        <a href="#" className="social-link" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>

                        <a href="#" className="social-link" aria-label="YouTube">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path
                                    d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="footer-links-col">
                    <h4>Services</h4>
                    <ul>
                        <li><Link href="#services">Hair Styling</Link></li>
                        <li><Link href="#services">Keratin Treatments</Link></li>
                        <li><Link href="#services">Makeup</Link></li>
                        <li><Link href="#spa">Spa Rituals</Link></li>
                        <li><Link href="#bridal">Bridal Studio</Link></li>
                    </ul>
                </div>
                <div className="footer-links-col">
                    <h4>Company</h4>
                    <ul>
                        <li><Link href="#about">About Us</Link></li>
                        <li><Link href="#packages">Packages</Link></li>
                        <li><Link href="#gallery">Gallery</Link></li>
                        <li><Link href="#membership">Memberships</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-newsletter">
                    <h4>Join Our World</h4>
                    <p>Get exclusive beauty tips, member offers, and early access to new services.</p>
                    <form className="newsletter-form" id="newsletterForm" noValidate>
                        <input type="email" id="nlEmail" aria-label="Newsletter Email" placeholder="your@email.com"
                            required />
                        <button type="submit">→</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-right">
                    <p className="footer-credit">Designed &amp; Developed by <strong>Dhruv</strong></p>
                    <p className="footer-powered">Powered by <strong>HRILAX</strong></p>
                </div>
            </div>
        </footer>
    );
}
