'use client'
import { motion } from "framer-motion";
import { Lightbulb, Palette, Code2, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import React from 'react';

interface ProcessStepType {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  details: string[];
  color: string;
}

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
  total: number;
}

const processSteps: ProcessStepType[] = [
  {
    id: 1,
    title: "Discovery",
    description: "We dive deep into understanding your vision, goals, and target audience",
    icon: Lightbulb,
    details: ["Research & Analysis", "Strategy Planning", "Goal Setting"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Design",
    description: "Creating beautiful, user-centric designs that resonate with your audience",
    icon: Palette,
    details: ["Wireframing", "UI/UX Design", "Prototyping"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Development",
    description: "Building robust, scalable solutions with cutting-edge technology",
    icon: Code2,
    details: ["Full Stack Dev", "Quality Testing", "Optimization"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "Launch",
    description: "Deploying your solution and ensuring ongoing success and growth",
    icon: Rocket,
    details: ["Deployment", "Monitoring", "Support"],
    color: "from-orange-500 to-red-500",
  },
];

function ProcessStep({ step, index, total }: ProcessStepProps) {
  const IconComponent = step.icon;
  const isLast = index === total - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="relative"
    >
      <div className="flex flex-col items-center">
        {/* Step Number Badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            {/* Animated Circle Background */}
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20`}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />

            {/* Main Circle */}
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <IconComponent size={40} className="text-white" />
            </motion.div>

            {/* Number Indicator */}
            <motion.div
              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center font-bold text-blue-600 text-sm"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
            >
              {step.id}
            </motion.div>
          </div>
        </motion.div>

        {/* Step Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.1, duration: 0.5 }}
          className="text-2xl md:text-3xl font-black text-gray-900 mb-3 text-center"
        >
          {step.title}
        </motion.h3>

        {/* Step Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
          className="text-gray-600 text-center mb-6 max-w-xs text-sm md:text-base leading-relaxed"
        >
          {step.description}
        </motion.p>

        {/* Details List */}
        <motion.div
          className="space-y-2 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.15 + 0.25, duration: 0.5 }}
        >
          {step.details.map((detail, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 text-gray-700"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 + 0.3 + i * 0.08 }}
            >
              <div className={`text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>
                <CheckCircle2 size={18} className="fill-current" />
              </div>
              <span className="text-sm font-medium">{detail}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Arrow Connector */}
      {!isLast && (
        <motion.div
          className="hidden lg:flex absolute top-32 -right-14 items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
        >
          <motion.div
            className="w-12 h-12 rounded-full border-2 border-blue-200 flex items-center justify-center bg-white"
            animate={{
              x: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
            }}
          >
            <ArrowRight size={24} className="text-blue-500" />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function OurProcessSection() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20"
          animate={{
            y: [0, 40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-20"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-2 text-yellow-500 font-bold text-xl uppercase tracking-widest inline-block"
          >
            How We Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            Our Strategic{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Process
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            A proven methodology that transforms your vision into reality
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              index={index}
              total={processSteps.length}
            />
          ))}
        </motion.div>

        {/* Timeline Visual - Mobile & Tablet */}
        <motion.div
          className="lg:hidden mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex gap-6 mb-8 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Vertical Line */}
                {index !== processSteps.length - 1 && (
                  <motion.div
                    className="absolute left-4 top-16 w-1 h-16 bg-gradient-to-b from-blue-400 to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    style={{ originY: 0 }}
                  />
                )}

                {/* Timeline Dot */}
                <motion.div
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} border-4 border-white shadow-lg flex-shrink-0 flex items-center justify-center text-white text-xs font-bold`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  {step.id}
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 md:p-16 relative overflow-hidden"
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
              className="text-4xl md:text-5xl font-black text-white mb-4"
            >
              Ready to Begin Your Journey?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
            >
              Let&apos;s start your project with our proven process and turn your ideas into reality.
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
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-xl font-bold shadow-xl"
              >
                Start Your Project
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 border-2 border-gray-400 text-white px-10 py-4 rounded-xl font-bold hover:border-white transition-colors"
              >
                View Our Work
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}