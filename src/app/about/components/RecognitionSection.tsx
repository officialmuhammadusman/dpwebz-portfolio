'use client';

import { motion } from 'framer-motion';
import { achievements } from '../data';

export default function RecognitionSection() {
  return (
    <>
      {/* Recognition Intro */}
      <div className="my-20 text-center">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and organizations worldwide.
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
    Achievements
  </motion.span>

  {/* Heading with extra line */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
    style={{ color: "#000000" }}
  >
    Awards &{" "}
    <span style={{ color: "#fec107" }}>
      Recognition
    </span>
  </motion.h2>

  {/* Paragraph */}
  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    Our commitment to excellence has been recognized by industry leaders and organizations worldwide.
  </p>
</motion.div>

      </div>

      {/* Awards Grid */}
      <div className="my-20 grid md:grid-cols-2 gap-8">
        {achievements.map((achievement, i) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-amber-400 hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon size={32} className="text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-amber-600 mb-2">{achievement.year}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.organization}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications */}
      <div className="my-20">
        {/* <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black mb-8 text-gray-900"
        >
          Certifications & Partners
        </motion.h3> */}

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
    Trusted By
  </motion.span>

  {/* Heading with extra line */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
    style={{ color: "#000000" }}
  >
    Certifications &{" "}
    <span style={{ color: "#fec107" }}>
      Partners
    </span>
  </motion.h2>

  {/* Paragraph */}
  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    Our certifications and partnerships showcase our expertise and trusted relationships with industry leaders.
  </p>
</motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Google Partner', 'AWS Certified', 'Meta Business Partner', 'Shopify Partner',
            'HubSpot Certified', 'Microsoft Partner', 'Stripe Partner', 'Salesforce Partner'].map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all"
            >
              <div className="font-bold text-gray-700">{cert}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Press Coverage */}
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="my-20 bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-2xl border border-amber-100
             flex flex-col items-center text-center"
>
  {/* Top Label */}
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="px-4 py-2 font-bold text-xl uppercase tracking-widest inline-block mb-4"
    style={{ color: "#fec107" }}
  >
    Featured In
  </motion.span>

  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
    style={{ color: "#000000" }}
  >
    Recognized by{" "}
    <span style={{ color: "#fec107" }}>
      Leading Media Outlets
    </span>
  </motion.h2>

  {/* Media Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mt-8 w-full">
    {[
      'TechCrunch', 'Forbes', 'Entrepreneur', 'Inc. Magazine',
      'Business Insider', 'Fast Company', 'Wired', 'The Verge'
    ].map((outlet, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        className="text-center text-gray-700 font-bold text-lg"
      >
        {outlet}
      </motion.div>
    ))}
  </div>
</motion.div>

    </>
  );
}


