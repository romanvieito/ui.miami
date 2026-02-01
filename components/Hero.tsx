"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingWords = ["tours", "clases", "eventos", "agenda"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark-card" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,74,0.15),transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Pre-headline */}
          <p className="text-white/60 text-lg md:text-xl mt-14 mb-6 tracking-wide">
            We help Cuban businesses in Miami sell more online
          </p>

          {/* Main headline with rotating word */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Your {""}
            <span className="relative inline-block min-w-[280px] md:min-w-[340px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[currentIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="gradient-text absolute left-0 right-0"
                >
                  {rotatingWords[currentIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="invisible">{rotatingWords[0]}</span>
            </span>
            <br />
            <span className="text-white/90">should be selling out.</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Customers are looking for you right now.
            <br />
            <span className="text-white">We make sure they find you — and buy.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-coral hover:bg-coral-light text-white font-bold text-lg px-10 py-4 rounded-full transition-all shadow-lg shadow-coral/30"
            >
              Start Your Story
            </motion.a>
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/80 hover:text-white font-medium text-lg px-8 py-4 border border-white/20 rounded-full hover:border-white/40 transition-all"
            >
              See How It Works
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}