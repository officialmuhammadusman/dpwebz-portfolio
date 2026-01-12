"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectCard from './ProjectCard';
import { projects } from './projects.data';
import React from 'react';

export default function FeaturedProjectsSection(): React.ReactElement {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-32 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        {/* <motion.div
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
            Featured Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            Crafting Digital{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Experiences That Deliver
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Showcasing impactful solutions and innovative approaches across diverse industries
          </motion.p>
        </motion.div> */}

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
    className="px-4 py-2 font-bold text-xl uppercase tracking-widest inline-block"
    style={{ color: "#fec107" }}
  >
    Featured Work
  </motion.span>

  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
    style={{ color: "#000000" }}
  >
    Crafting Digital{" "}
    <span style={{ color: "#fec107" }}>
      Experiences That Deliver
    </span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
  >
    Showcasing impactful solutions and innovative approaches across diverse industries
  </motion.p>
</motion.div>


        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats & CTA */}
        <motion.div
  className="bg-gradient-to-r from-[#fec107] via-[#FFD54F] to-[#FFD700] rounded-3xl p-12 md:p-16 relative overflow-hidden"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <motion.div className="relative z-10 text-center">
    <motion.h3
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-black text-black mb-4"
    >
      Ready to start your project?
    </motion.h3>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-black text-lg mb-8 max-w-2xl mx-auto"
    >
      Let&apos;s discuss how we can transform your ideas into impactful digital experiences.
    </motion.p>

    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      {/* Black Button 1 */}
      <motion.a
        href="/portfolio"
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center gap-3 bg-black text-yellow-500 px-10 py-4 rounded-xl font-bold shadow-xl  hover:text-white transition-colors duration-300"
      >
        View Full Portfolio
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight size={20} />
        </motion.div>
      </motion.a>

      {/* Black Button 2 */}
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center gap-3 bg-black text-yellow-500 px-10 py-4 rounded-xl font-bold  hover:text-white transition-colors duration-300"
      >
        Schedule a Call
      </motion.a>
    </motion.div>
  </motion.div>
</motion.div>



      </div>
    </section>
  );
}
