"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ContactForm from "./ContactForm";
import { useEffect } from "react";
import { trackEvent } from "@/lib/mixpanel";
import { getMessages, type Locale } from "@/lib/messages";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale?: Locale;
}

export default function ContactModal({ isOpen, onClose, locale = "en" }: ContactModalProps) {
  const copy = getMessages(locale).contactModal;
  // Track modal open/close events
  useEffect(() => {
    if (isOpen) {
      trackEvent("Contact Modal Opened");
    } else {
      trackEvent("Contact Modal Closed");
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-dark-card border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {copy.heading}
                </h3>
                <p className="text-white/60">
                  {copy.description}
                </p>
              </div>

              <ContactForm locale={locale} />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
