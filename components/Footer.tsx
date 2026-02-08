"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { getMessages, type Locale } from "@/lib/messages";

export default function Footer({ locale = "en" }: { locale?: Locale }) {
  const copy = getMessages(locale).footer;
  return (
    <footer className="bg-dark-card border-t border-white/10">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-coral/20 via-coral/10 to-coral/20 py-10 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {copy.ctaHeadline}
          </h3>
          <p className="text-white/60 text-lg mb-8">
            {copy.ctaSubheading}
          </p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-coral hover:bg-coral-light text-white font-bold text-lg px-10 py-4 rounded-full transition-all"
          >
            {copy.ctaButton}
          </motion.a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-16 text-center md:text-left">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-6">
              <img src="/logo.svg" alt="UI.Miami Logo" className="h-16 w-auto" />
            </a>
            <p className="text-white/60 leading-relaxed mb-6 max-w-md">
              {copy.description}
            </p>
            <p className="text-coral italic mb-4">
              Hecho con amor en Miami
            </p>
            <Link href="/privacy-policy" className="text-sm text-white/40 hover:text-white transition-colors">
              {copy.privacyPolicy}
            </Link>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 md:flex md:flex-col md:items-end text-center md:text-right">
            <div className="mx-auto md:mx-0">
              <h4 className="font-semibold text-white mb-6">{copy.contactLabel}</h4>
              <ul className="space-y-4 flex flex-col items-center md:items-end">
                <li>
                  <a
                    href="mailto:hola@ui.miami"
                    className="flex items-center gap-3 text-white/60 hover:text-coral transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    hola@ui.miami
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+17868179906"
                    className="flex items-center gap-3 text-white/60 hover:text-coral transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    (786) 817-9906
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-3 text-white/60">
                    <MapPin className="w-5 h-5" />
                    Miami, FL
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}