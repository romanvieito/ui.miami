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
            Ready to make your legacy discoverable?
          </h3>
          <p className="text-white/60 text-lg mb-8">
            Join the next generation of Cuban businesses in Miami.
          </p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-coral hover:bg-coral-light text-white font-bold text-lg px-10 py-4 rounded-full transition-all"
          >
            Get Started
          </motion.a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="text-3xl font-bold">
                In<span className="text-coral">Cubando</span>
              </span>
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
                  href="mailto:hola@incubando.com"
                  className="flex items-center gap-3 text-white/60 hover:text-coral transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  hola@incubando.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+13055551234"
                  className="flex items-center gap-3 text-white/60 hover:text-coral transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (305) 555-1234
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

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-coral hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-coral hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 InCubando. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}