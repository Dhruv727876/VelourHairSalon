import React from 'react';
import TestimonialSlider from '@/components/TestimonialSlider';
import Gallery from '@/components/Gallery';
import Magnetic from '@/components/Magnetic';
import Reveal from '@/components/Reveal';
import ParallaxHero from '@/components/ParallaxHero';

export default function Home() {
    return (
        <main id="main-content">
            <ParallaxHero />
            <section className="section" id="services">
                <div className="container">
                    <Reveal>
                        <div className="section-header ">
                            <p className="section-eyebrow">Salon Services</p>
                            <h2 className="section-title">Crafted for <em>Perfection</em></h2>
                            <p className="section-desc">Every service is a ritual — designed with precision, delivered with passion,
                                and
                                tailored entirely to you.</p>
                        </div>
                    </Reveal>
                    <div className="services-grid">
                        <div className="service-card " data-delay="0">
                            <div className="service-icon">✂</div>
                            <div className="service-body">
                                <h3>Hair Styling</h3>
                                <p>From sleek blowouts to editorial cuts — our master stylists sculpt looks that define your
                                    identity.</p>
                                <div className="service-footer">
                                    <span className="service-price">From ₹1,500</span>
                                    <a href="#booking" className="service-link">Book Now →</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-card " data-delay="100">
                            <div className="service-icon">◈</div>
                            <div className="service-body">
                                <h3>Hair Colouring</h3>
                                <p>Balayage, highlights, ombré, vivid colour — art for your hair using the finest European
                                    pigments.</p>
                                <div className="service-footer">
                                    <span className="service-price">From ₹3,500</span>
                                    <a href="#booking" className="service-link">Book Now →</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-card " data-delay="200">
                            <div className="service-icon">◇</div>
                            <div className="service-body">
                                <h3>Keratin &amp; Treatments</h3>
                                <p>Restore brilliance and eliminate frizz with our exclusive Brazilian Keratin and
                                    bond-building
                                    protocols.</p>
                                <div className="service-footer">
                                    <span className="service-price">From ₹5,000</span>
                                    <a href="#booking" className="service-link">Book Now →</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-card " data-delay="0">
                            <div className="service-icon">✦</div>
                            <div className="service-body">
                                <h3>Makeup Services</h3>
                                <p>Luxury editorial and event makeup using MAC, Charlotte Tilbury, and luxury pro-grade
                                    palettes.</p>
                                <div className="service-footer">
                                    <span className="service-price">From ₹2,500</span>
                                    <a href="#booking" className="service-link">Book Now →</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-card " data-delay="100">
                            <div className="service-icon">♛</div>
                            <div className="service-body">
                                <h3>Bridal Styling</h3>
                                <p>Your most important day deserves the finest touch. Trial sessions, day-of glam teams, and
                                    bridal suites available.</p>
                                <div className="service-footer">
                                    <span className="service-price">From ₹15,000</span>
                                    <a href="#booking" className="service-link">Book Now →</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-card " data-delay="200">
                            <div className="service-icon">❋</div>
                            <div className="service-body">
                                <h3>Nail Art &amp; Extensions</h3>
                                <p>Intricate gel nail art, full extensions, and French manicures with premium ORLY and OPI
                                    polish ranges.</p>
                                <div className="service-footer">
                                    <span className="service-price">From ₹1,200</span>
                                    <a href="#booking" className="service-link">Book Now →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-dark" id="spa">
                <div className="container">
                    <Reveal>
                        <div className="section-header ">
                            <p className="section-eyebrow">Spa Rituals</p>
                            <h2 className="section-title">Restore. Revive. <em>Radiate.</em></h2>
                            <p className="section-desc">Step into stillness. Our curated spa rituals blend ancient wisdom with
                                modern
                                luxury for total mind-body renewal.</p>
                        </div>
                    </Reveal>
                    <div className="spa-grid">
                        <div className="spa-card " data-delay="0">
                            <div className="spa-img-wrap"><img src="images/spa_treatment.webp" alt="Facial treatment"
                                loading="lazy" /></div>
                            <div className="spa-body">
                                <h3>Facials &amp; Skin Therapy</h3>
                                <p>HydraFacial, oxygen infusions, LED therapy, and custom skin rituals for luminous, healthy
                                    skin.</p>
                                <span className="spa-price">From ₹2,800</span>
                            </div>
                        </div>
                        <div className="spa-card " data-delay="100">
                            <div className="spa-img-wrap"><img src="images/spa_massage.webp" alt="Body massage" loading="lazy"
                            /></div>
                            <div className="spa-body">
                                <h3>Body Massage</h3>
                                <p>Swedish, deep tissue, hot stone, and traditional Abhyanga massage — tailored to your
                                    body's
                                    needs.</p>
                                <span className="spa-price">From ₹3,200</span>
                            </div>
                        </div>
                        <div className="spa-card " data-delay="200">
                            <div className="spa-img-wrap"><img src="images/spa_aroma.webp" alt="Aromatherapy" loading="lazy"
                            /></div>
                            <div className="spa-body">
                                <h3>Aromatherapy</h3>
                                <p>Bespoke essential oil blends with warm compress and slow-rhythm massage for deep sensory
                                    relaxation.</p>
                                <span className="spa-price">From ₹2,500</span>
                            </div>
                        </div>
                        <div className="spa-card " data-delay="0">
                            <div className="spa-img-wrap"><img src="images/spa_detox.webp" alt="Detox treatment" loading="lazy"
                            /></div>
                            <div className="spa-body">
                                <h3>Detox Treatments</h3>
                                <p>Mud wraps, algae body masks, and lymphatic drainage rituals that purify and re-energise
                                    from
                                    within.</p>
                                <span className="spa-price">From ₹3,800</span>
                            </div>
                        </div>
                        <div className="spa-card " data-delay="100">
                            <div className="spa-img-wrap"><img src="images/spa_head.webp" alt="Head spa" loading="lazy"
                            /></div>
                            <div className="spa-body">
                                <h3>Head Spa Ritual</h3>
                                <p>Japanese scalp analysis, oil infusion, and steam therapy for ultimate scalp health and
                                    relaxation.</p>
                                <span className="spa-price">From ₹2,200</span>
                            </div>
                        </div>
                        <div className="spa-card " data-delay="200">
                            <div className="spa-img-wrap"><img src="images/spa_couple.webp" alt="Couple spa" loading="lazy"
                            /></div>
                            <div className="spa-body">
                                <h3>Couple Spa Packages</h3>
                                <p>Shared rituals, champagne, rose petal baths, and a private suite — the ultimate luxury
                                    experience for two.</p>
                                <span className="spa-price">From ₹7,500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bridal-section" id="bridal">
                <div className="bridal-left">
                    <img src="images/bridal_makeup.webp" alt="Bridal makeup" loading="lazy" />
                </div>
                <div className="bridal-right ">
                    <p className="section-eyebrow">Bridal Studio</p>
                    <h2 className="bridal-title">Your Day. <em>Your Story.</em><br />Our Masterpiece.</h2>
                    <p className="bridal-desc">From the morning of your ceremony to the last dance of the evening, VELOUR's
                        bridal
                        team ensures you are the most radiant version of yourself. We offer private bridal suites, trial
                        sessions, and a dedicated team of specialists for hair, makeup, and skin.</p>
                    <ul className="bridal-features">
                        <li>✦ Dedicated Bridal Coordinator</li>
                        <li>✦ Private Bridal Suite</li>
                        <li>✦ Complimentary Trial Session</li>
                        <li>✦ Bridesmaid Packages Available</li>
                        <li>✦ Mehendi &amp; Pre-Bridal Spa Ritual</li>
                    </ul>
                    <Magnetic>
                        <a href="#booking" className="btn btn-gold" style={{ display: 'inline-block' }}>Enquire Now</a>
                    </Magnetic>
                </div>
            </section>
            <section className="section" id="packages">
                <div className="container">
                    <Reveal>
                        <div className="section-header ">
                            <p className="section-eyebrow">Signature Packages</p>
                            <h2 className="section-title">Curated <em>Experiences</em></h2>
                            <p className="section-desc">Our signature packages are designed to deliver maximum indulgence and value
                                —
                                the full VELOUR experience.</p>
                        </div>
                    </Reveal>
                    <div className="packages-grid">
                        <div className="package-card ">
                            <div className="pkg-header">
                                <p className="pkg-name">Bridal Glow</p>
                                <div className="pkg-price">₹29,999</div>
                                <p className="pkg-tagline">The Complete Bridal Journey</p>
                            </div>
                            <ul className="pkg-features">
                                <li>Pre-Bridal Facial (×3 sessions)</li>
                                <li>Full Body Scrub &amp; Wrap</li>
                                <li>Bridal Makeup Trial</li>
                                <li>Day-Of Makeup &amp; Hair</li>
                                <li>Nail Art &amp; Extensions</li>
                                <li>Mehendi Ceremony Add-On</li>
                            </ul>
                            <Magnetic>
                                <a href="#booking" className="btn btn-outline-dark" style={{ display: 'inline-block' }}>Book Package</a>
                            </Magnetic>
                        </div>

                        <div className="package-card package-popular ">
                            <div className="popular-badge">Most Popular</div>
                            <div className="pkg-header">
                                <p className="pkg-name">Spa Day Ultimate</p>
                                <div className="pkg-price">₹8,999</div>
                                <p className="pkg-tagline">A Full Day of Pure Bliss</p>
                            </div>
                            <ul className="pkg-features">
                                <li>HydraFacial (60 mins)</li>
                                <li>Full Body Swedish Massage</li>
                                <li>Scalp Ritual &amp; Hair Mask</li>
                                <li>Aromatherapy Foot Soak</li>
                                <li>Herbal Tea &amp; Snack Spread</li>
                                <li>Complimentary Skin Consultation</li>
                            </ul>
                            <Magnetic>
                                <a href="#booking" className="btn btn-gold" style={{ display: 'inline-block' }}>Book Package</a>
                            </Magnetic>
                        </div>

                        <div className="package-card ">
                            <div className="pkg-header">
                                <p className="pkg-name">Hair Transformation</p>
                                <div className="pkg-price">₹12,999</div>
                                <p className="pkg-tagline">The Complete Hair Makeover</p>
                            </div>
                            <ul className="pkg-features">
                                <li>Hair Consultation &amp; Colour Analysis</li>
                                <li>Premium Balayage or Colour</li>
                                <li>Brazilian Keratin Treatment</li>
                                <li>Deep Conditioning Ritual</li>
                                <li>Professional Blow-Dry &amp; Style</li>
                                <li>Take-Home Care Kit</li>
                            </ul>
                            <Magnetic>
                                <a href="#booking" className="btn btn-outline-dark" style={{ display: 'inline-block' }}>Book Package</a>
                            </Magnetic>
                        </div>

                        <div className="package-card ">
                            <div className="pkg-header">
                                <p className="pkg-name">VIP Membership</p>
                                <div className="pkg-price">₹4,999<span className="pkg-price-mo">/mo</span></div>
                                <p className="pkg-tagline">Exclusive Year-Round Privileges</p>
                            </div>
                            <ul className="pkg-features">
                                <li>20% Off All Services</li>
                                <li>Priority Booking Access</li>
                                <li>Monthly Signature Facial</li>
                                <li>Free Hair Wash &amp; Blow-Dry ×2</li>
                                <li>Birthday Luxury Gift Hamper</li>
                                <li>Referral Rewards Program</li>
                            </ul>
                            <a href="#booking" className="btn btn-outline-dark">Join Now</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-alt membership-section" id="membership">
                <div className="container">
                    <Reveal>
                        <div className="section-header ">
                            <p className="section-eyebrow">Loyalty &amp; Membership</p>
                            <h2 className="section-title">The VELOUR <em>Inner Circle</em></h2>
                            <p className="section-desc">Our members enjoy exclusive privileges, priority access, and a world of
                                beauty
                                benefits — month after month.</p>
                        </div>
                    </Reveal>
                    <div className="membership-grid">
                        <div className="membership-card ">
                            <div className="membership-icon">◇</div>
                            <h3>Silver Member</h3>
                            <p className="membership-price">₹1,999<span>/mo</span></p>
                            <ul>
                                <li>10% off all services</li>
                                <li>Monthly blow-dry voucher</li>
                                <li>Birthday gift</li>
                                <li>SMS priority booking</li>
                            </ul>
                            <a href="#booking" className="btn btn-outline-dark">Join Now</a>
                        </div>
                        <div className="membership-card membership-featured ">
                            <div className="membership-icon">✦</div>
                            <h3>Gold VIP</h3>
                            <p className="membership-price">₹4,999<span>/mo</span></p>
                            <ul>
                                <li>20% off all services</li>
                                <li>Monthly signature facial</li>
                                <li>Free blow-dry ×2 per month</li>
                                <li>Priority booking always</li>
                                <li>Birthday luxury hamper</li>
                                <li>Referral cash rewards</li>
                            </ul>
                            <a href="#booking" className="btn btn-gold">Join Now</a>
                        </div>
                        <div className="membership-card ">
                            <div className="membership-icon">♛</div>
                            <h3>Platinum Elite</h3>
                            <p className="membership-price">₹9,999<span>/mo</span></p>
                            <ul>
                                <li>30% off all services</li>
                                <li>Weekly blow-dry</li>
                                <li>Monthly spa ritual</li>
                                <li>Dedicated stylist</li>
                                <li>Home visit options</li>
                                <li>Exclusive event invites</li>
                            </ul>
                            <a href="#booking" className="btn btn-outline-dark">Join Now</a>
                        </div>
                    </div>
                    <div className="referral-banner ">
                        <span className="referral-icon">🎁</span>
                        <div>
                            <strong>Referral Rewards Program</strong>
                            <p>Refer a friend and earn ₹500 credits when they complete their first appointment. No limit on
                                referrals.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Gallery />
            <section className="section" id="about">
                <div className="container">
                    <Reveal>
                        <div className="section-header ">
                            <p className="section-eyebrow">The VELOUR Difference</p>
                            <h2 className="section-title">Why Discerning Clients <em>Choose Us</em></h2>
                        </div>
                    </Reveal>
                    <div className="why-grid">
                        <div className="why-card ">
                            <div className="why-icon">◈</div>
                            <h3>Luxury Imported Products</h3>
                            <p>We use only international-grade products — Kérastase, L'Oréal Professionnel, BABOR, and
                                Charlotte
                                Tilbury.</p>
                        </div>
                        <div className="why-card ">
                            <div className="why-icon">✦</div>
                            <h3>Certified Expert Team</h3>
                            <p>All our stylists and therapists hold international certifications and undergo continuous
                                training.</p>
                        </div>
                        <div className="why-card ">
                            <div className="why-icon">◇</div>
                            <h3>Premium Ambiance</h3>
                            <p>Every corner of VELOUR is curated — marble, velvet, natural light, and calming fragrance
                                throughout.</p>
                        </div>
                        <div className="why-card ">
                            <div className="why-icon">❋</div>
                            <h3>Hygiene &amp; Safety</h3>
                            <p>Single-use tools, sterilised equipment, and salon-grade sanitisation protocols on every
                                visit.
                            </p>
                        </div>
                        <div className="why-card ">
                            <div className="why-icon">♛</div>
                            <h3>Personalised Consultations</h3>
                            <p>Every client receives a bespoke consultation before any service — your goals, your timeline,
                                your
                                outcome.</p>
                        </div>
                        <div className="why-card ">
                            <div className="why-icon">✿</div>
                            <h3>Holistic Wellness</h3>
                            <p>We believe beauty begins from within. Our approach combines skincare, wellness, and emotional
                                balance.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-dark" id="testimonials">
                <div className="container">
                    <div className="section-header ">
                        <p className="section-eyebrow">Client Stories</p>
                        <h2 className="section-title">Voices of <em>Transformation</em></h2>
                    </div>
                    <div className="testimonials-slider" id="testimonialsSlider">
                        <div className="testi-track" id="testiTrack">
                            <div className="testi-card">
                                <div className="testi-stars">★★★★★</div>
                                <p className="testi-text">"My bridal experience at VELOUR was nothing short of magical. The team
                                    made me feel like royalty — not just on my wedding day, but through every trial and
                                    consultation."</p>
                                <div className="testi-author"><span className="testi-name">Priya Sharma</span><span
                                    className="testi-role">Bride, December 2025</span></div>
                            </div>
                            <div className="testi-card">
                                <div className="testi-stars">★★★★★</div>
                                <p className="testi-text">"The Spa Day Ultimate package was extraordinary. The HydraFacial,
                                    massage,
                                    and scalp ritual together felt like a full reset. I left glowing inside and out."</p>
                                <div className="testi-author"><span className="testi-name">Ananya Mehta</span><span
                                    className="testi-role">VIP Member</span></div>
                            </div>
                            <div className="testi-card">
                                <div className="testi-stars">★★★★★</div>
                                <p className="testi-text">"I've been to salons across Mumbai and abroad — VELOUR is genuinely in
                                    a
                                    different league. The ambiance, the service, the results. Nothing compares."</p>
                                <div className="testi-author"><span className="testi-name">Kavya Reddy</span><span
                                    className="testi-role">Regular Client</span></div>
                            </div>
                            <div className="testi-card">
                                <div className="testi-stars">★★★★★</div>
                                <p className="testi-text">"My hair transformation — balayage and keratin together — genuinely
                                    changed how I feel about my hair. Worth every rupee."</p>
                                <div className="testi-author"><span className="testi-name">Diya Kapoor</span><span
                                    className="testi-role">Hair Client</span></div>
                            </div>
                            <div className="testi-card">
                                <div className="testi-stars">★★★★★</div>
                                <p className="testi-text">"The couple's spa package was such a beautiful experience for our
                                    anniversary. Private room, champagne, and the most relaxing massage I've ever had."</p>
                                <div className="testi-author"><span className="testi-name">Rhea &amp; Arjun Nair</span><span
                                    className="testi-role">Couple's Package</span></div>
                            </div>
                            <div className="testi-card">
                                <div className="testi-stars">★★★★★</div>
                                <p className="testi-text">"The VIP Membership has completely changed my self-care routine.
                                    Priority
                                    booking, monthly facials, and the birthday hamper was a gorgeous surprise."</p>
                                <div className="testi-author"><span className="testi-name">Sanya Oberoi</span><span
                                    className="testi-role">VIP Member, 2 Years</span></div>
                            </div>
                        </div>
                        <div className="testi-controls">
                            <button className="testi-btn" id="testiPrev" aria-label="Previous">‹</button>
                            <div className="testi-dots" id="testiDots"></div>
                            <button className="testi-btn" id="testiNext" aria-label="Next">›</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section booking-section" id="booking">
                <div className="container">
                    <div className="booking-wrap">
                        <Reveal>
                            <div className="booking-info ">
                                <p className="section-eyebrow">Reserve Your Visit</p>
                                <h2 className="booking-title">Book Your<br /><em>Experience</em></h2>
                                <p className="booking-desc">Whether it's a quick nail appointment or a full bridal package — our
                                    team is
                                    here to make every moment exceptional. Fill in your details and we'll confirm within 24
                                    hours.
                                </p>
                                <div className="booking-contact-items">
                                    <a href="tel:+919876543210" className="booking-contact-item"><span>📞</span> +91 98765 43210</a>
                                    <a href="https://wa.me/919876543210" className="booking-contact-item" target="_blank"
                                        rel="noopener"><span>💬</span> WhatsApp Us</a>
                                    <a href="mailto:hello@velour.in" className="booking-contact-item"><span>✉</span>
                                        hello@velour.in</a>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="booking-form-wrap " data-delay="200">
                                <form className="booking-form" id="bookingForm" noValidate>
                                    <div className="form-row">
                                        <div className="form-group"><label htmlFor="bookName">Full Name *</label><input type="text"
                                            id="bookName" name="name" aria-label="Full Name" placeholder="Your name"
                                            required /></div>
                                        <div className="form-group"><label htmlFor="bookPhone">Phone *</label><input type="tel"
                                            id="bookPhone" name="phone" aria-label="Phone Number"
                                            placeholder="+91 XXXXX XXXXX" required /></div>
                                    </div>
                                    <div className="form-group"><label htmlFor="bookEmail">Email Address *</label><input type="email"
                                        id="bookEmail" name="email" aria-label="Email Address" placeholder="your@email.com"
                                        required /></div>
                                    <div className="form-group"><label htmlFor="bookService">Select Service *</label>
                                        <select id="bookService" name="service" aria-label="Select Service" required>
                                            <option value="">Choose a service...</option>
                                            <optgroup label="Salon Services">
                                                <option>Hair Styling</option>
                                                <option>Hair Colouring</option>
                                                <option>Keratin &amp; Treatments</option>
                                                <option>Makeup Services</option>
                                                <option>Bridal Styling</option>
                                                <option>Nail Art &amp; Extensions</option>
                                            </optgroup>
                                            <optgroup label="Spa Rituals">
                                                <option>Facials &amp; Skin Therapy</option>
                                                <option>Body Massage</option>
                                                <option>Aromatherapy</option>
                                                <option>Detox Treatments</option>
                                                <option>Head Spa Ritual</option>
                                                <option>Couple Spa Package</option>
                                            </optgroup>
                                            <optgroup label="Signature Packages">
                                                <option>Bridal Glow Package</option>
                                                <option>Spa Day Ultimate</option>
                                                <option>Hair Transformation</option>
                                                <option>VIP Membership</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group"><label htmlFor="bookDate">Preferred Date *</label><input type="date"
                                            id="bookDate" name="date" aria-label="Preferred Date" required /></div>
                                        <div className="form-group"><label htmlFor="bookTime">Preferred Time *</label>
                                            <select id="bookTime" name="time" aria-label="Preferred Time" required>
                                                <option value="">Select time...</option>
                                                <option>10:00 AM</option>
                                                <option>11:00 AM</option>
                                                <option>12:00 PM</option>
                                                <option>1:00 PM</option>
                                                <option>2:00 PM</option>
                                                <option>3:00 PM</option>
                                                <option>4:00 PM</option>
                                                <option>5:00 PM</option>
                                                <option>6:00 PM</option>
                                                <option>7:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group"><label htmlFor="bookNotes">Special Requests</label><textarea
                                        id="bookNotes" name="notes" rows={3}
                                        placeholder="Any allergies, special occasions, or notes for our team..."></textarea>
                                    </div>
                                    <Magnetic>
                                        <button type="submit" className="btn btn-gold btn-full">Confirm Booking Request</button>
                                    </Magnetic>
                                </form>
                                <div className="booking-success" id="bookingSuccess" style={{ display: "none" }}>
                                    <div className="success-icon">✓</div>
                                    <h3>Appointment Requested!</h3>
                                    <p>Thank you! Our team will confirm your appointment via WhatsApp or call within 24 hours.
                                    </p>
                                    <a href="#" className="btn btn-gold"
                                    >Book
                                        Another</a>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
            <section className="section" id="contact">
                <div className="container">
                    <Reveal>
                        <div className="section-header ">
                            <p className="section-eyebrow">Find Us</p>
                            <h2 className="section-title">Visit <em>VELOUR</em></h2>
                        </div>
                    </Reveal>
                    <div className="contact-grid">
                        <div className="contact-info ">
                            <div className="contact-item"><span className="contact-icon">📍</span>
                                <div><strong>Address</strong>
                                    <p>42 Elara Boulevard, Bandra West<br />Mumbai, Maharashtra 400050</p>
                                </div>
                            </div>
                            <div className="contact-item"><span className="contact-icon">📞</span>
                                <div><strong>Phone</strong>
                                    <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                                </div>
                            </div>
                            <div className="contact-item"><span className="contact-icon">✉</span>
                                <div><strong>Email</strong>
                                    <p><a href="mailto:hello@velour.in">hello@velour.in</a></p>
                                </div>
                            </div>
                            <div className="contact-item"><span className="contact-icon">🕐</span>
                                <div><strong>Hours</strong>
                                    <p>Mon – Sat: 10:00 AM – 8:00 PM<br />Sunday: 11:00 AM – 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-map " data-delay="200">
                            <div className="map-placeholder">
                                <div className="map-inner">
                                    <div className="map-pin">📍</div>
                                    <p>VELOUR Luxury Salon &amp; Spa</p>
                                    <p className="map-address">42 Elara Boulevard, Bandra West, Mumbai</p>
                                    <a href="https://maps.google.com/?q=Bandra+West+Mumbai" target="_blank" rel="noopener"
                                        className="btn btn-outline-dark" >Get Directions →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TestimonialSlider />
        </main>
    );
}
