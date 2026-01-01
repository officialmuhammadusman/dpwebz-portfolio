'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { titleVariants, subtitleVariants, imageVariants } from './animations';

interface HeroSlide {
  image: string;
  title: string[];
  subtitle: string[];
}

interface Stat {
  number: string;
  label: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  stats: Stat[];
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroSlider({ slides, stats, ctaText = "Get Started Today", ctaLink = "#contact" }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <div className="space-y-2">
                {slides[currentSlide].title.map((line: string, i: number) => (
                  <motion.h1
                    key={i}
                    variants={titleVariants}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  >
                    {i === slides[currentSlide].title.length - 1 ? (
                      <span className="text-[#fec107]">{line}</span>
                    ) : (
                      <span className="text-white">{line}</span>
                    )}
                  </motion.h1>
                ))}
              </div>

              <motion.div variants={subtitleVariants} className="space-y-2">
                {slides[currentSlide].subtitle.map((line: string, i: number) => (
                  <p key={i} className="text-base md:text-lg lg:text-xl text-gray-200">
                    {line}
                  </p>
                ))}
              </motion.div>

              <motion.div
                variants={subtitleVariants}
                className="flex gap-8 pt-6"
              >
                {stats.map((stat, i: number) => (
                  <div key={i}>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                      {stat.number}
                    </div>
                    <p className="text-sm text-gray-200">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={subtitleVariants} className="pt-4">
                <motion.a
                  href={ctaLink}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-[#fec107] text-gray-900 px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
                >
                  {ctaText}
                  <ArrowRight size={20} />
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition z-10"
      >
        <ChevronLeft className="text-white" size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition z-10"
      >
        <ChevronRight className="text-white" size={28} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i: number) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1 rounded-full transition-all ${
              i === currentSlide ? 'bg-white w-12' : 'bg-white/50 w-8'
            }`}
          />
        ))}
      </div>
    </div>
  );
}


