// 
'use client';
import { motion, useInView } from 'framer-motion';
import { Award, Clock, Users, Globe2, Target, Shield, Zap, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { JSX } from 'react';

interface Stat {
  id: number;
  number: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  gradient: string;
}

interface Differentiator {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const stats: Stat[] = [
  {
    id: 1,
    number: 10,
    suffix: '+',
    label: 'Years of Excellence',
    icon: Award,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    number: 500,
    suffix: '+',
    label: 'Projects Completed',
    icon: Target,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    number: 350,
    suffix: '+',
    label: 'Happy Clients',
    icon: Users,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    number: 25,
    suffix: '+',
    label: 'Countries Served',
    icon: Globe2,
    gradient: 'from-orange-500 to-red-500'
  }
];

const differentiators: Differentiator[] = [
  {
    id: 1,
    title: '24/7 Dedicated Support',
    description: 'Round-the-clock assistance from our expert team to keep your business running smoothly',
    icon: Clock,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: '100% Client Satisfaction',
    description: 'We don\'t stop until you\'re thrilled. Your success is our ultimate measure of achievement',
    icon: Shield,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Lightning Fast Delivery',
    description: 'Agile methodology and cutting-edge tools ensure we deliver quality at speed',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 4,
    title: 'Proven Track Record',
    description: 'A decade of delivering exceptional results across industries and continents',
    icon: TrendingUp,
    gradient: 'from-purple-500 to-pink-500'
  }
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref}>
      <span className="text-5xl md:text-6xl lg:text-7xl font-bold">
        {count}
        {suffix}
      </span>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
};

export default function WhyChooseUsSection(): JSX.Element {
  return (
    <section className="relative py-20 px-4 bg-linear-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-10 w-96 h-96 bg-[#fec107] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-80 h-80 bg-purple-500 rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
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
    Why Choose DPWebz
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
      Businesses Worldwide
    </motion.span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
  >
    We combine experience, expertise, and innovation to deliver results that exceed expectations
  </motion.p>
</motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#fec107]">
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br ${stat.gradient} p-3 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-full h-full text-white" strokeWidth={2} />
                  </motion.div>

                  {/* Animated Number */}
                  <div className="text-center text-[#fec107] mb-2">
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <p className="text-center text-gray-700 font-semibold text-sm md:text-base">
                    {stat.label}
                  </p>

                  {/* Corner Accent */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#fec107] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {differentiators.map((diff) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={diff.id}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#fec107] h-full">
                  {/* Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${diff.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex gap-6">
                    {/* Icon */}
                    <motion.div
                      className={`shrink-0 w-16 h-16 rounded-xl bg-linear-to-br ${diff.gradient} p-3 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-full h-full text-white" strokeWidth={2} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-[#fec107] transition-colors duration-300">
                        {diff.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-[#fec107] opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#fec107] text-black px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-[#eab308] transition-all duration-300"
          >
            Start Your Project Today
          </motion.button>
          <p className="text-gray-500 text-sm mt-4">
            Join 350+ satisfied clients worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
