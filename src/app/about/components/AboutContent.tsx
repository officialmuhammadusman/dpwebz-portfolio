'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CompanySection from './CompanySection';
import LeadershipSection from './LeadershipSection';
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
      <motion.div
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
      </motion.div>
    </div>
  );
}


