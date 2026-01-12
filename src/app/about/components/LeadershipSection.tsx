'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { leaders } from '../data';

export default function LeadershipSection() {
  const [leadershipIndex, setLeadershipIndex] = useState(0);

  const visibleLeaders = leaders.slice(leadershipIndex, leadershipIndex + 3);

  const nextSlide = () => {
    if (leadershipIndex + 3 < leaders.length) {
      setLeadershipIndex(leadershipIndex + 3);
    }
  };

  const prevSlide = () => {
    if (leadershipIndex > 0) {
      setLeadershipIndex(leadershipIndex - 3);
    }
  };

  return (
    <>
      {/* Leadership Intro */}
      <div className="my-20 text-center">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionary leaders with decades of combined experience driving innovation and excellence.
          </p>
        </motion.div> */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-12"
>
  {/* Top Label */}
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="px-4 py-2 font-bold text-xl uppercase tracking-widest inline-block mb-4"
    style={{ color: "#fec107" }}
  >
    Meet the Team
  </motion.span>

  {/* Heading with extra line */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
    style={{ color: "#000000" }}
  >
    Our Leadership{" "}
    <span style={{ color: "#fec107" }}>
      Team
    </span>
  </motion.h2>

  {/* Paragraph */}
  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    Visionary leaders with decades of combined experience driving innovation and excellence.
  </p>
</motion.div>

      </div>

      {/* Leadership Cards Slider */}
      <div className="my-20">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {visibleLeaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-400 hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{leader.name}</h3>
                <div className="text-purple-600 font-semibold mb-4">{leader.position}</div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                <div className="pt-4 border-t">
                  <div className="text-xs text-gray-500 mb-2">Expertise:</div>
                  <div className="text-sm text-gray-700 font-medium">{leader.expertise}</div>
                </div>
                <motion.button
                  whileHover={{ x: 4 }}
                  className="mt-4 text-purple-600 hover:text-purple-700 font-semibold text-sm inline-flex items-center gap-2"
                >
                  Connect on LinkedIn
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={prevSlide}
            disabled={leadershipIndex === 0}
            className={`p-3 rounded-full transition-all ${
              leadershipIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(leaders.length / 3) }).map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all ${
                  Math.floor(leadershipIndex / 3) === idx ? 'bg-purple-600 w-12' : 'bg-gray-300 w-8'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            disabled={leadershipIndex + 3 >= leaders.length}
            className={`p-3 rounded-full transition-all ${
              leadershipIndex + 3 >= leaders.length
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

    <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="my-20 bg-gradient-to-r from-[#fec107] via-[#FFD54F] to-[#FFD700] p-12 md:p-16 rounded-3xl text-center relative overflow-hidden"
>
  <div className="relative z-10">
    {/* Heading */}
    <h3 className="text-3xl md:text-4xl font-black text-black mb-4">
      Join Our Growing Team
    </h3>

    {/* Paragraph */}
    <p className="mb-8 text-black text-lg max-w-2xl mx-auto">
      We&apos;re always looking for talented individuals to join our mission.
    </p>

    {/* Button */}
    <motion.button
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center justify-center gap-3 bg-black text-yellow-500 px-10 py-4 rounded-xl font-bold shadow-xl hover:text-white transition-colors duration-300"
    >
      View Open Positions
      <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowRight size={20} />
      </motion.div>
    </motion.button>
  </div>
</motion.div>

    </>
  );
}


