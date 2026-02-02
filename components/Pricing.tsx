"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Sparkles } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { trackEvent } from "@/lib/mixpanel";

type Locale = "en" | "es";

const content = {
  en: {
    heading: "Sell",
    headingAccent: "moreeeee...",
    subheading: "Just do it.",
    packageName: "Cuban Way Package",
    packageDescription: "Everything you need to be found",
    priceLine: '"Pay us what you think it was worth this month."',
    priceNote: "(Risky, but Cuban)",
    features: [
      "Website",
      "Ads",
      "Digital growth",
      "Just by texting us (Email, SMS, WhatsApp)",
    ],
    cta: "Start Your Story Today",
    footnote: "Schedule a free discovery call first",
    trustBadges: ["100% Satisfaction Guarantee", "Miami-Based Team", "Bilingual Support"],
  },
  es: {
    heading: "Vende",
    headingAccent: "más...",
    subheading: "Solo hazlo.",
    packageName: "Paquete Cuban Way",
    packageDescription: "Todo lo que necesitas para que te encuentren",
    priceLine: '"Páganos lo que creas que valió este mes."',
    priceNote: "(Arriesgado, pero cubano)",
    features: [
      "Sitio web",
      "Anuncios",
      "Crecimiento digital",
      "Solo con escribirnos (Email, SMS, WhatsApp)",
    ],
    cta: "Empieza tu historia hoy",
    footnote: "Agenda primero una llamada de descubrimiento gratis",
    trustBadges: ["Garantía de satisfacción 100%", "Equipo en Miami", "Soporte bilingüe"],
  },
} as const;

export default function Pricing({ locale = "en" }: { locale?: Locale }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const copy = content[locale];

  return (
    <section id="pricing" ref={ref} className="py-16 md:py-32 px-6 bg-dark relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,107,74,0.15),transparent_60%)]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {copy.heading} <span className="gradient-text">{copy.headingAccent}</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            {copy.subheading}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gradient-to-b from-dark-card to-dark-lighter rounded-3xl p-1"
        >
          <div className="bg-dark-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">

              {/* Package name */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {copy.packageName}
                </h3>
                <p className="text-white/50 mb-8">
                  {copy.packageDescription}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 text-center">
                <div className="flex flex-col gap-4">
                  <span className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {copy.priceLine}
                  </span>
                  <span className="text-coral font-medium text-lg">
                    {copy.priceNote}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {copy.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-coral" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                onClick={() => {
                  trackEvent("Pricing CTA Click", {
                    button: copy.cta,
                    section: "pricing",
                  });
                  setIsModalOpen(true);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-coral hover:bg-coral-light text-white font-bold text-lg py-5 rounded-full transition-all shadow-lg shadow-coral/30"
              >
                {copy.cta}
              </motion.button>

              <ContactModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                locale={locale}
              />

              <p className="text-center text-white/40 text-sm mt-6">
                {copy.footnote}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-12 text-white/40 text-sm"
        >
        <span>{copy.trustBadges[0]}</span>
          <span className="hidden sm:inline">•</span>
        <span>{copy.trustBadges[1]}</span>
          <span className="hidden sm:inline">•</span>
        <span>{copy.trustBadges[2]}</span>
        </motion.div>
      </div>
    </section>
  );
}