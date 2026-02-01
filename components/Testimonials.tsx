"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alberto Terrero",
    business: "KLASS Bathroom & Kitchen",
    link: "https://www.klassbathroomandkitchen.com/",
    years: "+20 years in Hialeah",
    quote:
      "We had to relocate. 30 years of local trust, reset to zero. Starting over is daunting. UI.Miami didn't just fix our website; they told our story. Now, Google brings us the right people. We’re not just back in business. We’re being found.",
    image: "/testimonial-1.jpg",
  },
  {
    name: "Yainery Bolaños",
    business: "Tsla.miami",
    link: "https://www.tsla.miami/",
    years: "8 years in Edgewater",
    quote:
      "We had to pivot our entire rental fleet. It was terrifying. We were invisible in a crowded market. UI.Miami didn't just 'help us'... they connected us with the exact customers searching for us on Google. We went from scared to booked solid.",
    image: "/testimonial-2.jpg",
  },
  {
    name: "Erlys Escalona",
    business: "Escalona Consulting",
    years: "14 years in Homestead",
    quote:
      "We almost closed because big consultants were taking our customers. UI.Miami showed Miami why handcrafted matters. Now designers are calling us. The AI understood our craft better than we expected.",
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