'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { coreValues } from '../data';

const milestones = [
  { year: '2015', text: 'DPWebz was founded with a vision to make high-quality digital solutions accessible to businesses of all sizes.' },
  { year: '2017', text: 'Expanded services to include mobile app development and digital marketing, growing team to 15 members.' },
  { year: '2019', text: 'Launched automation and AI services division, helping businesses streamline operations and reduce costs.' },
  { year: '2021', text: 'Reached 500+ completed projects milestone and opened second office for international clients.' },
  { year: '2023', text: 'Recognized as top digital agency by Clutch, expanded team to 50+ professionals.' },
  { year: '2024', text: 'Continue to innovate with cutting-edge AI solutions and expand global presence.' },
  { year: '2025', text: 'Achieved 600+ projects milestone and earned additional industry awards for excellence.' }
];

export default function CompanySection() {
  return (
    <>
      {/* About Section */}
      <div className="my-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black mb-6 text-gray-900">About DPWebz</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              Founded in 2015, DPWebz has grown from a small startup to a leading digital agency serving clients worldwide.
              We specialize in creating transformative digital experiences that drive business growth and innovation.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              With a team of 55+ talented professionals across design, development, marketing, and strategy, we&apos;ve delivered
              over 600 successful projects for startups, SMBs, and enterprise clients in diverse industries.
            </p>
            <p className="text-lg leading-relaxed">
              Our approach combines creative excellence with technical expertise, ensuring every solution we build is not
              just beautiful, but functional, scalable, and aligned with your business objectives.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Our Story Timeline */}
      <div className="my-20 bg-gradient-to-br from-teal-50 to-cyan-50 p-12 rounded-2xl border border-teal-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-black mb-8 text-gray-900">Our Journey</h3>
          <div className="space-y-6">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg">
                  {milestone.year}
                </div>
                <p className="text-gray-700 pt-3 flex-1">{milestone.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="my-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black mb-12 text-center text-gray-900"
        >
          Our Core Values
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-8">
          {coreValues.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-teal-400 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="my-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-12 rounded-2xl text-center"
      >
        <Sparkles size={48} className="mx-auto mb-6 text-[#fec107]" />
        <h3 className="text-3xl font-black mb-4">Our Mission</h3>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          To empower businesses with innovative digital solutions that drive growth, enhance user experiences,
          and create lasting value in an ever-evolving digital landscape.
        </p>
      </motion.div>
    </>
  );
}


