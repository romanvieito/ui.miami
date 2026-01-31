"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Difference() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,74,0.1),transparent_60%)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-coral font-medium text-lg mb-8 tracking-wide uppercase"
          >
            The InCubando Difference
          </motion.p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            We&apos;re not a marketing agency.
            <br />
            <span className="gradient-text">We&apos;re translators.</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12">
              Your history is the strategy.
              <br />
              <span className="text-white font-medium">
                AI is just the megaphone.
              </span>
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-dark-card/50 rounded-xl p-6 border border-white/10 text-left"
              >
                <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
                  Others say
                </p>
                <p className="text-white/60 text-lg">
                  &ldquo;Let us build your brand from scratch.&rdquo;
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-coral/10 rounded-xl p-6 border border-coral/30 text-left"
              >
                <p className="text-coral text-sm uppercase tracking-wider mb-2">
                  We say
                </p>
                <p className="text-white text-lg font-medium">
                  &ldquo;Your brand already exists. Let us make it visible.&rdquo;
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}