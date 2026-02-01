"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Sparkles, Volume2 } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "We Listen",
    description: "One conversation. We extract what makes you different.",
  },
  {
    icon: Sparkles,
    title: "We Build",
    description: "Ads, content, and proof that converts.",
  },
  {
    icon: Volume2,
    title: "You Sell",
    description: "Your story. Their algorithm. Your customers.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-24 px-6 bg-dark">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          How it <span className="gradient-text">works</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex items-center gap-4 md:flex-col md:text-center"
            >
              <span className="text-4xl font-bold text-coral">{index + 1}</span>
              <div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}