'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CompanySection from './CompanySection';
import LeadershipSection from '@/app/home/components/leadership/LeadershipSection';
import RecognitionSection from './RecognitionSection';
import ConnectSection from './ConnectSection';

interface AboutContentProps {
  aboutKey: string;
}

export default function AboutContent({ aboutKey }: AboutContentProps) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={aboutKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {aboutKey === 'company' && <CompanySection />}
          {aboutKey === 'leadership' && <LeadershipSection />}
          {aboutKey === 'recognition' && <RecognitionSection />}
          {aboutKey === 'connect' && <ConnectSection />}
        </motion.div>
      </AnimatePresence>

      {/* Global Footer CTA */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="my-20 pt-12 border-t border-gray-200"
      >
        <div className="text-center">
          <h3 className="text-3xl font-black mb-4 text-gray-900">Ready to Transform Your Business?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how DPWebz can help you achieve your digital goals with innovative solutions.
          </p>
          <motion.a
            href="#connect"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#fec107] text-gray-900 px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
          >
            Start Your Project
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </motion.div> */}
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="my-20 pt-12 border-t border-gray-200"
>
  <div className="text-center">
    {/* Top Label */}
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4 py-2 font-bold text-xl uppercase tracking-widest inline-block mb-4"
      style={{ color: "#fec107" }}
    >
      Get Started Today
    </motion.span>

    {/* Heading with extra line */}
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
      style={{ color: "#000000" }}
    >
      Ready to Transform Your{" "}
      <span style={{ color: "#fec107" }}>
        Business?
      </span>
    </motion.h3>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
    >
      Let&apos;s discuss how DPWebz can help you achieve your digital goals with innovative solutions.
    </motion.p>

    {/* CTA Button */}
    <motion.a
      href="#connect"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-3 bg-[#fec107] text-gray-900 px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
    >
      Start Your Project
      <ArrowRight size={20} />
    </motion.a>
  </div>
</motion.div>

    </div>
  );
}


