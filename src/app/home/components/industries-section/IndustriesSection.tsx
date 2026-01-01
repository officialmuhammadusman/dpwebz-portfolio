'use client'
import { motion } from "framer-motion";
import { ShoppingCart, Rocket, Stethoscope, Home, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';
import React from 'react';

interface Industry {
  id: number;
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  image: string;
  solutions: string[];
  stats: string;
  color: string;
  key: string;
}

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

const industries: Industry[] = [
  {
    id: 1,
    name: "E-commerce",
    icon: ShoppingCart,
    description: "High-converting online stores with seamless payment integration",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    solutions: ["Shopify Development", "Payment Gateway", "Inventory Systems", "Analytics"],
    stats: "15+ Projects",
    color: "from-red-500 to-orange-500",
    key: 'ecommerce'
  },
  {
    id: 2,
    name: "Startups",
    icon: Rocket,
    description: "MVP development and growth strategies to launch and scale",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    solutions: ["MVP Development", "Tech Consultation", "Growth Strategy", "Fundraising"],
    stats: "24+ Startups",
    color: "from-cyan-500 to-teal-500",
    key: 'startups'
  },
   {
    id: 3,
    name: "Healthcare",
    icon: Stethoscope,
    description: "HIPAA-compliant solutions for improved patient care",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    solutions: ["Patient Portals", "Telemedicine", "Data Security", "Compliance"],
    stats: "8+ Providers",
    color: "from-emerald-500 to-green-500",
    key: 'healthcare'
  },
  {
    id: 4,
    name: "Real Estate",
    icon: Home,
    description: "Digital showcases and property management modernization",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    solutions: ["Listing Websites", "Virtual Tours", "Client Management", "Lead Gen"],
    stats: "12+ Brands",
    color: "from-yellow-500 to-orange-400",
    key: 'realestate'
  },
];

function IndustryCard({ industry, index }: IndustryCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = industry.icon;

  return (
    <Link href={`/clients#industries-${industry.key}`} scroll={false} className="block">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: -12 }}
        viewport={{ once: true, margin: "-80px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ duration: 0.6, delay: index * 0.12 }}
        className="group"
      >
        <motion.div
          className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 h-full"
          initial={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)" }}
          whileHover={{ boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)" }}
        >
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden bg-gray-100">
            <motion.img
              src={industry.image}
              alt={industry.name}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${industry.color}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.3 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Icon Badge */}
            <motion.div
              className="absolute top-4 right-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.12 + 0.2 }}
            >
              <motion.div
                className="bg-white p-3 rounded-xl shadow-lg text-gray-900"
                whileHover={{ scale: 1.15, rotate: 10 }}
              >
                <IconComponent size={32} />
              </motion.div>
            </motion.div>

            {/* Stats Badge */}
            <motion.div
              className="absolute bottom-4 left-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 + 0.3 }}
            >
              <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-gray-900 text-xs font-bold rounded-full shadow-md">
                {industry.stats}
              </span>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.12 + 0.1 }}
              whileHover={{ x: 4 }}
            >
              {industry.name}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-sm mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.12 + 0.15 }}
            >
              {industry.description}
            </motion.p>

            {/* Solutions */}
            <motion.div
              className="space-y-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.12 + 0.2 }}
            >
              {industry.solutions.map((solution, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <motion.div
                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.color}`}
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-gray-700 text-xs font-medium">{solution}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 mb-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.12 + 0.25 }}
              style={{ originX: 0 }}
            />

            {/* CTA */}
            <motion.div
              className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer"
              whileHover={{ x: 4 }}
            >
              <span className={`bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                Learn More
              </span>
              <motion.div animate={isHovered ? { x: 4 } : { x: 0 }}>
                <ArrowRight size={14} className="text-gray-400" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default function IndustriesSection() {
  return (
    <section className="py-1 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
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
            Industries We Serve
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            Expertise Across{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Multiple Sectors
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We&apos;ve partnered with leading companies to drive growth, streamline operations, and create meaningful digital experiences.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <motion.div className="relative z-10">
            <motion.h3
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-white mb-4"
            >
              Don&apos;t see your industry?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
            >
              We work with businesses of all sizes and sectors. Let&apos;s discuss how we can help your industry thrive digitally.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold shadow-xl"
              >
                Start Your Project
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={20} />
                </motion.div>
              </motion.a>
              <motion.a
                href="#case-studies"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 border-2 border-gray-400 text-white px-8 py-4 rounded-xl font-bold hover:border-white transition-colors"
              >
                View Case Studies
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}