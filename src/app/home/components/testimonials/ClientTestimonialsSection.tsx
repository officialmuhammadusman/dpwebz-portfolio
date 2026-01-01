
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  ShoppingCart,
  Rocket,
  Stethoscope,
  Home,
  Star,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, LuxeStyle Co.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    text: 'Incredible transformation! The team took our vision and exceeded expectations. Our sales increased by 45% within the first quarter.',
    rating: 5,
    industry: 'E-commerce',
    icon: ShoppingCart,
    color: 'from-rose-500 to-orange-500',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, TechVenture Labs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    text: 'From MVP to Series A funding in 8 months. Their strategic guidance and technical excellence were game-changers.',
    rating: 5,
    industry: 'Startup',
    icon: Rocket,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    role: 'Medical Director, HealthCare Plus',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    text: 'The telemedicine platform revolutionized our patient care. HIPAA compliance was seamless and patients love the new interface.',
    rating: 5,
    industry: 'Healthcare',
    icon: Stethoscope,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 4,
    name: 'David Martinez',
    role: 'VP Sales, RealEstate Pro',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    text: 'Virtual tours increased lead generation by 60%. Client satisfaction hit an all-time high. Phenomenal execution.',
    rating: 5,
    industry: 'Real Estate',
    icon: Home,
    color: 'from-amber-500 to-orange-600',
  },
];

export default function ClientTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlay(false);
    setActiveIndex(index);
  };

  const activeTestimonial = testimonials[activeIndex];
  const Icon = activeTestimonial.icon;

  return (
    <section className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
       <motion.div
  className="text-center mb-20"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="px-4 py-2 text-yellow-500 font-bold text-xl uppercase tracking-widest inline-block"
  >
    Client Success Stories
  </motion.span>

  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
  >
    Trusted by{" "}
    <motion.span
      className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
      animate={{ backgroundPosition: ["0%", "100%"] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      Industry Leaders
    </motion.span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
  >
    Real results from real clients who transformed their businesses with our solutions.
  </motion.p>
</motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Navigation (Desktop only) */}
              <div className="hidden lg:flex lg:col-span-1 justify-end">
                <button
                  onClick={goToPrevious}
                  className="p-4 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Main Testimonial Card */}
              <div className="lg:col-span-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${activeTestimonial.color}`} />

                  <div className="p-10 lg:p-12">
                    <div className="flex items-start justify-between mb-8">
                      <Quote className="w-10 h-10 text-blue-200" />
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-10 font-medium">
                      &ldquo;{activeTestimonial.text}&rdquo;
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-100">
                          <Image
                            src={activeTestimonial.image}
                            alt={activeTestimonial.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">
                            {activeTestimonial.name}
                          </h4>
                          <p className="text-gray-600">{activeTestimonial.role}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-right">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${activeTestimonial.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 uppercase tracking-wide">
                            Industry
                          </p>
                          <p className="font-semibold text-gray-900">
                            {activeTestimonial.industry}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Navigation (Desktop only) */}
              <div className="hidden lg:flex lg:col-span-1">
                <button
                  onClick={goToNext}
                  className="p-4 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots + Mobile Navigation */}
          <div className="flex flex-col items-center mt-12 gap-6">
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-white shadow hover:shadow-md lg:hidden"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-8 bg-blue-600'
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-white shadow hover:shadow-md lg:hidden"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-gray-500">
              {isAutoPlay ? 'Auto-playing' : 'Paused'} • Click dots to navigate
            </p>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: '200+', label: 'Happy Clients' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '4.9/5', label: 'Average Rating' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}