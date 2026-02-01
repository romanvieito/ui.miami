"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-dark-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
            The algorithm doesn&apos;t care about your{" "}
            <span className="gradient-text">years of expertise.</span>
            <br />
            <span className="text-white/90">We do.</span>
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-white/70 leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              You&apos;ve built something remarkable.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Word of mouth built your business for years.
              <br />
              <span className="text-white font-medium">
                But word of mouth doesn&apos;t show up on Google.
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-white text-xl md:text-2xl font-medium pt-4"
            >
              Your competitor with 6 months of experience?
              <br />
              <span className="gradient-text font-bold">They do.</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 p-8 bg-dark rounded-2xl border border-white/10"
          >
            <p className="text-2xl md:text-3xl font-semibold text-white italic">
              &ldquo;You&apos;re not behind.
              <br />
              <span className="gradient-text">Attention is all you need.</span>&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}