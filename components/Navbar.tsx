"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/mixpanel";
import { getMessages, type Locale } from "@/lib/messages";

export default function Navbar({ locale = "en" }: { locale?: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const copy = getMessages(locale).navbar;
  const languageSwitchHref = locale === "en" ? "/es" : "/";

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
          <img src="/logo.svg" alt="UI.Miami Logo" className="h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
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
            href={languageSwitchHref}
            onClick={() =>
              trackEvent("Language Switch Click", {
                target: copy.languageSwitchLabel,
                section: "navbar",
              })
            }
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all text-sm font-semibold tracking-wide border border-white/10 hover:border-white/20"
          >
            <span className="text-lg leading-none">{locale === "en" ? "🇨🇺" : "🇺🇸"}</span>
            <span className="text-white">{copy.languageSwitchLabel}</span>
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