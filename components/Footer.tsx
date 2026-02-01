"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-white/10">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-coral/20 via-coral/10 to-coral/20 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            You don't get too far to stop now...
          </h3>
          <p className="text-white/60 text-lg mb-8">
            Join the Next Gen of Cuban businesses in Miami.
          </p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-coral hover:bg-coral-light text-white font-bold text-lg px-10 py-4 rounded-full transition-all"
          >
            Let them find you
          </motion.a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-6">
              <img src="/logo.png" alt="UI.Miami Logo" className="h-16 w-auto" />
            </a>
            <p className="text-white/60 leading-relaxed mb-6 max-w-md">
              Making your local reputation discoverable to the modern world.
              For the next generation of Cuban businesses. Built in Miami.
            </p>
            <p className="text-coral italic">
              Hecho con amor en Miami
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
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
    </footer>
  );
}