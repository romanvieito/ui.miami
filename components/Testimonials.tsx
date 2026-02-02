"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

type Locale = "en" | "es";

type Testimonial = {
  name: string;
  business: string;
  link?: string;
  years: string;
  quote: string;
  image: string;
};

type TestimonialsContent = {
  heading: string;
  headingAccent: string;
  subheading: string;
  testimonials: Testimonial[];
};

const content: Record<Locale, TestimonialsContent> = {
  en: {
    heading: "Stories from",
    headingAccent: "la comunidad",
    subheading: "Real Miami businesses. Real transformations.",
    testimonials: [
      {
        name: "Luis Herrera",
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
          "We wanted to pivot our entire rental fleet. It was terrifying. We were invisible in a crowded market. Ui.miami connected us with the exact customers on Google. We went from scared to booked solid.",
        image: "/testimonial-2.jpg",
      },
      {
        name: "Julio",
        business: "Woxo",
        link: "https://woxo.tech/",
        years: "Founded in Miami",
        quote:
          "Scaling a SaaS requires precise targeting. A PMax campaign was the way to go. The ROI speaks for itself. We went from $50.000 dolares of monthly loss to a monthly income in autopilot.",
        image: "/testimonial-3.jpg",
      },
    ],
  },
  es: {
    heading: "Historias de",
    headingAccent: "la comunidad",
    subheading: "Negocios reales de Miami. Transformaciones reales.",
    testimonials: [
      {
        name: "Luis Herrera",
        business: "KLASS Bathroom & Kitchen",
        link: "https://www.klassbathroomandkitchen.com/",
        years: "+20 años en Hialeah",
        quote:
          "Tuvimos que mudarnos. 30 años de confianza local, reiniciados a cero. Empezar de nuevo da miedo. UI.Miami no solo arregló nuestro sitio web... ahora Google nos trae a la gente indicada.",
        image: "/testimonial-1.jpg",
      },
      {
        name: "Yainery Bolaños",
        business: "Tsla.miami",
        link: "https://www.tsla.miami/",
        years: "8 años en Edgewater",
        quote:
          "Tuvimos que cambiar por completo nuestra flota. Fue aterrador. Éramos invisibles en un mercado saturado. UI.Miami no solo 'nos ayudó'... nos conectó con los clientes exáctos en Google. Pasamos del miedo a tener agenda llena.",
        image: "/testimonial-2.jpg",
      },
      {
        name: "Julio",
        business: "Woxo",
        link: "https://woxo.tech/",
        years: "Fundada en Miami",
        quote:
          "Escalar un SaaS requiere segmentación precisa. Una campaña PMax nos salvó, de $50.000 dolares de pérdida mensual a ganancias en piloto automático.",
        image: "/testimonial-3.jpg",
      },
    ],
  },
};

export default function Testimonials({ locale = "en" }: { locale?: Locale }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const copy = content[locale];

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
          {copy.testimonials.map((testimonial, index) => (
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