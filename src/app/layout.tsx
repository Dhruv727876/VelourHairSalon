import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollToTop from "@/components/ScrollToTop";
import LenisScroll from "@/components/LenisScroll";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: {
    template: "%s | VELOUR Luxury Salon & Spa",
    default: "VELOUR — Luxury Salon & Spa",
  },
  description: "Experience the pinnacle of beauty and wellness at VELOUR. A premier luxury salon and spa offering bespoke hair artistry, bridal glam, and restorative spa rituals.",
  keywords: ["Luxury Salon", "Spa Rituals", "Bridal Glam", "Hair Artistry", "Premium Beauty", "Mumbai Salon"],
  authors: [{ name: "VELOUR" }],
  openGraph: {
    title: "VELOUR — Luxury Salon & Spa",
    description: "Experience the pinnacle of beauty and wellness at VELOUR. A premier luxury salon and spa offering bespoke hair artistry, bridal glam, and restorative spa rituals.",
    url: "https://velour.in",
    siteName: "VELOUR Luxury Salon & Spa",
    images: [
      {
        url: "/images/hero_salon.webp", // Will default to domain + path on a real deployment
        width: 1200,
        height: 630,
        alt: "VELOUR Luxury Salon & Spa Interior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VELOUR — Luxury Salon & Spa",
    description: "A premier luxury salon and spa offering bespoke transformations and curated rituals.",
    images: ["/images/hero_salon.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap"
          rel="stylesheet" />
        <link rel="preload" as="image" href="images/hero_salon.webp" media="(min-width: 769px)" />
        <link rel="preload" as="image" href="images/hero_salon_mobile.webp" media="(max-width: 768px)" />
      </head>
      <body>
        <Preloader />
        <LenisScroll />
        <Cursor />
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
