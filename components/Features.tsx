"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, Sparkles, Volume2 } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "AI-Powered Story Mining",
    description:
      "We interview. We listen. We extract 30 years of expertise in 30 minutes.",
  },
  {
    icon: Sparkles,
    title: "Digital Authority Engine",
    description:
      "Turn your reputation into ads, content, and social proof that actually converts.",
  },
  {
    icon: Volume2,
    title: "Legacy-First Translation",
    description:
      "We don't replace your story. We amplify it for the algorithm age.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-32 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What we <span className="gradient-text">actually do</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            We&apos;re not a marketing agency. We&apos;re translators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-dark-card rounded-2xl p-8 border border-white/10 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-coral/20 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-coral" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}