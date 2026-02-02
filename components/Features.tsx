"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Sparkles, Volume2 } from "lucide-react";
import { getMessages, type Locale } from "@/lib/messages";

const featureIcons = [Mic, Sparkles, Volume2];

export default function Features({ locale = "en" }: { locale?: Locale }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const copy = getMessages(locale).features;

  return (
    <section id="features" ref={ref} className="py-16 md:py-32 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            {copy.headingPrefix}{" "}
            <span className="gradient-text">{copy.headingAccent}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {copy.items.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-dark-card rounded-2xl p-8 border border-white/10 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-coral/20 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-coral" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}