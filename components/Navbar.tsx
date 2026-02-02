"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/mixpanel";

type Locale = "en" | "es";

const content = {
  en: {
    howItWorks: "How It Works",
    features: "Features",
    pricing: "Pricing",
    cta: "Start Your Story",
    languageSwitchLabel: "ES",
    languageSwitchHref: "/es",
  },
  es: {
    howItWorks: "Cómo funciona",
    features: "Características",
    pricing: "Precios",
    cta: "Comienza tu historia",
    languageSwitchLabel: "EN",
    languageSwitchHref: "/",
  },
} as const;

export default function Navbar({ locale = "en" }: { locale?: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const copy = content[locale];

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
          <img src="/logo.png" alt="UI.Miami Logo" className="h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-white/70 hover:text-white transition-colors"
          >
            {copy.howItWorks}
          </a>
          <a
            href="#features"
            className="text-white/70 hover:text-white transition-colors"
          >
            {copy.features}
          </a>
          <a
            href="#pricing"
            className="text-white/70 hover:text-white transition-colors"
          >
            {copy.pricing}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={copy.languageSwitchHref}
            onClick={() =>
              trackEvent("Language Switch Click", {
                target: copy.languageSwitchLabel,
                section: "navbar",
              })
            }
            className="text-white/70 hover:text-white text-sm font-semibold tracking-wide transition-colors"
          >
            {copy.languageSwitchLabel}
          </a>
          <motion.a
            href="#pricing"
            onClick={() =>
              trackEvent("Navbar CTA Click", {
                button: copy.cta,
                section: "navbar",
              })
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-coral hover:bg-coral-light text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
          >
            {copy.cta}
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}