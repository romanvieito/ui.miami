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
            Google doesn&apos;t know{" "}
            <span className="gradient-text">you&apos;re the best.</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-white/70 leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Word of mouth doesn&apos;t rank.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white text-xl md:text-2xl font-medium"
            >
              Your competitor with 6 months?{" "}
              <span className="gradient-text font-bold">Page one.</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 p-8 bg-dark rounded-2xl border border-white/10"
          >
            <p className="text-2xl md:text-3xl font-semibold text-white">
              We fix that.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}