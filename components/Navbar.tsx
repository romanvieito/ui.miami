"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            In<span className="text-coral">Cubando</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-white/70 hover:text-white transition-colors"
          >
            How It Works
          </a>
          <a
            href="#features"
            className="text-white/70 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-white/70 hover:text-white transition-colors"
          >
            Pricing
          </a>
        </div>

        <motion.a
          href="#pricing"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-coral hover:bg-coral-light text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
        >
          Start Your Story
        </motion.a>
      </div>
    </motion.nav>
  );
}