"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendez",
    business: "Mendez Auto Repair",
    years: "32 years in Little Havana",
    quote:
      "My father started this shop in 1992. For 30 years, people found us through word of mouth. UI.Miami helped my son understand our story and now people find us on Google. We're booked three weeks out.",
    image: "/testimonial-1.jpg",
  },
  {
    name: "Maria Elena Vega",
    business: "Vega's Cuban Bakery",
    years: "45 years in Hialeah",
    quote:
      "I didn't understand social media. My granddaughter tried to help but didn't know our recipes' stories. UI.Miami sat with me, listened, and now our pastelitos are famous online. My grandmother would be proud.",
    image: "/testimonial-2.jpg",
  },
  {
    name: "Roberto & Ana Diaz",
    business: "Diaz Furniture Custom",
    years: "28 years in Coral Gables",
    quote:
      "We almost closed because big stores were taking our customers. UI.Miami showed Miami why handcrafted matters. Now designers are calling us. The AI understood our craft better than we expected.",
    image: "/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stories from <span className="gradient-text">la comunidad</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Real Miami businesses. Real transformations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-dark rounded-2xl p-8 border border-white/10 card-hover flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/80 leading-relaxed mb-8 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center">
                    <span className="text-coral font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-white/50 text-sm">
                      {testimonial.business}
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