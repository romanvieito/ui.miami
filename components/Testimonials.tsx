"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { getMessages, type Locale } from "@/lib/messages";

export default function Testimonials({ locale = "en" }: { locale?: Locale }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const copy = getMessages(locale).testimonials;

  return (
    <section ref={ref} className="py-16 md:py-32 px-6 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {copy.heading} <span className="gradient-text">{copy.headingAccent}</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            {copy.subheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {copy.items.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-dark rounded-2xl p-8 border border-white/10 card-hover flex flex-col"
            >
          
              {/* Quote */}
              <blockquote className="text-white/80 leading-relaxed mb-8 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  {testimonial.image ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center">
                      <span className="text-coral font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-white/50 text-sm">
                      {testimonial.link ? (
                        <a 
                          href={testimonial.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-coral transition-colors"
                        >
                          {testimonial.business}
                        </a>
                      ) : (
                        testimonial.business
                      )}
                    </p>
                    <p className="text-coral/70 text-xs mt-1">
                      {testimonial.years}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}