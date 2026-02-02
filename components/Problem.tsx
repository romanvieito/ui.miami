"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { getMessages, type Locale } from "@/lib/messages";

export default function Problem({ locale = "en" }: { locale?: Locale }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const copy = getMessages(locale).problem;

  return (
    <section ref={ref} className="py-16 md:py-32 px-6 bg-dark-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 leading-tight">
            {copy.headline}{" "}
            <span className="gradient-text">{copy.headlineAccent}</span>
          </h2>

          <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-white/70 leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {copy.lineOne}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white text-xl md:text-2xl font-medium"
            >
              {copy.lineTwoLead}{" "}
              <span className="gradient-text font-bold">{copy.lineTwoAccent}</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 p-8 bg-dark rounded-2xl border border-white/10"
          >
            <p className="text-2xl md:text-3xl font-semibold text-white">
              {copy.callout}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}