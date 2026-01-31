"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Coffee,
    title: "The Interview",
    description: "We sit with you. Coffee optional, stories required.",
    detail:
      "A 90-minute deep dive into your expertise, your journey, and what makes your business irreplaceable.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "The Translation",
    description: "AI transforms your expertise into digital gold.",
    detail:
      "Our AI analyzes your decades of knowledge and creates a content library that speaks to modern customers.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "The Amplification",
    description: "Your legacy, everywhere your customers are looking.",
    detail:
      "Strategic placement across Google, social media, and digital ads. Your story, finally discoverable.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="py-32 px-6 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Three steps from invisible to undeniable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[calc(50%+60px)] w-[calc(100%-120px)] h-[2px] bg-gradient-to-r from-coral/50 to-coral/10" />
              )}

              <div className="bg-dark rounded-2xl p-8 border border-white/10 card-hover relative">
                <span className="absolute -top-4 -left-2 text-6xl font-bold text-coral/20">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-coral/20 flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-coral" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-coral font-medium mb-4">
                    {step.description}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}