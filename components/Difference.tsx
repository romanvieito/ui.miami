"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { getMessages, type Locale } from "@/lib/messages";

export default function Difference({ locale = "en" }: { locale?: Locale }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const copy = getMessages(locale).difference;

  return (
    <section ref={ref} className="py-16 md:py-32 px-6 bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,74,0.1),transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-coral font-medium text-lg mb-8 tracking-wide uppercase"
          >
            {copy.kicker}
          </motion.p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8">
            {copy.headlineTop}
            <br />
            <span className="gradient-text">{copy.headlineAccent}</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            {copy.bodyTop}
            <br />
            <span className="text-white font-medium">
              {copy.bodyAccent}
            </span>
          </p>
        </motion.div>

        {/* Video and Cards Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[280px] md:max-w-[320px]">
              <div className="absolute -inset-2 bg-gradient-to-b from-coral/20 to-transparent rounded-3xl blur-xl" />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="relative w-full rounded-2xl shadow-2xl shadow-coral/20 border border-white/10"
              >
                <source src="/ui-miami(before-after).mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Before/After Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-dark-card/50 rounded-xl p-6 border border-white/10 text-left"
            >
              <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
                {copy.beforeLabel}
              </p>
              <p className="text-white/60 text-lg">
                {copy.beforeText}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-coral/10 rounded-xl p-6 border border-coral/30 text-left"
            >
              <p className="text-coral text-sm uppercase tracking-wider mb-2">
                {copy.afterLabel}
              </p>
              <p className="text-white text-lg font-medium">
                {copy.afterText}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}