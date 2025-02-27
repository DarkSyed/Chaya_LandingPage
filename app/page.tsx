"use client";

import { useState, useEffect } from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Features from "../src/components/Features";
import HowItWorks from "../src/components/HowItWorks";
import Testimonials from "../src/components/Testimonials";
import Pricing from "../src/components/Pricing";
import CTA from "../src/components/CTA";
import Footer from "../src/components/Footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow bg-background dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
