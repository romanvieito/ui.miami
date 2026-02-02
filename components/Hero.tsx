"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/lib/mixpanel";
import { getMessages, type Locale } from "@/lib/messages";

export default function Hero({ locale = "en" }: { locale?: Locale }) {
  const copy = getMessages(locale).hero;
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
          <p className="text-white/60 text-lg md:text-xl mt-14 mb-4 md:mb-6 tracking-wide">
            {copy.preheadline}
          </p>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8 text-white">
            {copy.headline} <br className="hidden md:block" />
            <span className="gradient-text">{copy.headlineAccent}</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed"
          >
            {copy.subheadlineTop}
            <br />
            <span className="text-white">{copy.subheadlineAccent}</span>
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
              onClick={() =>
                trackEvent("Hero CTA Click", {
                  button: copy.primaryCta,
                  section: "hero",
                })
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-coral hover:bg-coral-light text-white font-bold text-lg px-10 py-4 rounded-full transition-all shadow-lg shadow-coral/30"
            >
              {copy.primaryCta}
            </motion.a>
            <motion.a
              href="#how-it-works"
              onClick={() =>
                trackEvent("Hero CTA Click", {
                  button: copy.secondaryCta,
                  section: "hero",
                })
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/80 hover:text-white font-medium text-lg px-8 py-4 border border-white/20 rounded-full hover:border-white/40 transition-all"
            >
              {copy.secondaryCta}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
