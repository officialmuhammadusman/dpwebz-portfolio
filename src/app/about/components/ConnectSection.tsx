'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Calendar, ArrowRight } from 'lucide-react';

export default function ConnectSection() {
  return (
    <>
      {/* Connect Intro */}
      <div className="my-20 text-center">
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
            Get In Touch
          </motion.span>

          {/* Heading with extra line */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            style={{ color: "#000000" }}
          >
            Ready to{" "}
            <span style={{ color: "#fec107" }}>
              Start Your Project?
            </span>
          </motion.h2>

          {/* Paragraph */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;d love to hear from you. Reach out through any of these channels.
          </p>
        </motion.div>
      </div>

      {/* Contact Form & Info */}
      <div className="my-20 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-gray-200 p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-black text-yellow-500 px-6 py-3 rounded-xl font-bold shadow-xl hover:text-white transition-all"
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="space-y-6">
          {/** Office Locations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-[#fec107] via-[#FFD54F] to-[#FFD700] border border-[#FFD54F] p-6 rounded-3xl relative overflow-hidden shadow-xl"
          >
            <MapPin size={32} className="text-black mb-4 mx-auto" />
            <h4 className="font-bold text-lg mb-2 text-black text-center">Office Locations</h4>
            <div className="space-y-3 text-black/80 text-center">
              <div>
                <div className="font-semibold">Headquarters</div>
                <div className="text-sm">123 Tech Street, San Francisco, CA 94102</div>
              </div>
              <div>
                <div className="font-semibold">Regional Office</div>
                <div className="text-sm">456 Innovation Ave, New York, NY 10001</div>
              </div>
            </div>
          </motion.div>

          {/** Phone */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-[#fec107] via-[#FFD54F] to-[#FFD700] border border-[#FFD54F] p-6 rounded-3xl relative overflow-hidden shadow-xl"
          >
            <Phone size={32} className="text-black mb-4 mx-auto" />
            <h4 className="font-bold text-lg mb-2 text-black text-center">Phone</h4>
            <p className="text-black/80 text-center">+1 (555) 123-4567</p>
            <p className="text-sm text-black/60 mt-2 text-center">Mon-Fri, 9AM-6PM PST</p>
          </motion.div>

          {/** Email */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-[#fec107] via-[#FFD54F] to-[#FFD700] border border-[#FFD54F] p-6 rounded-3xl relative overflow-hidden shadow-xl"
          >
            <Mail size={32} className="text-black mb-4 mx-auto" />
            <h4 className="font-bold text-lg mb-2 text-black text-center">Email</h4>
            <p className="text-black/80 text-center">hello@dpwebz.com</p>
            <p className="text-sm text-black/60 mt-2 text-center">We respond within 24 hours</p>
          </motion.div>

          {/** Book Consultation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-[#fec107] via-[#FFD54F] to-[#FFD700] p-6 rounded-3xl relative overflow-hidden shadow-xl"
          >
            <div className="relative z-10 text-center">
              <Calendar size={32} className="text-black mb-4 mx-auto" />
              <h4 className="font-bold text-lg mb-2 text-black">Book a Consultation</h4>
              <p className="text-black mb-4">Schedule a free 30-minute discovery call</p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 w-full bg-black text-yellow-500 px-6 py-3 rounded-xl font-bold shadow-xl hover:text-white transition-colors duration-300"
              >
                Schedule Now
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Support Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="my-20 bg-gradient-to-r from-[#fec107] via-[#FFD54F] to-[#FFD700] p-12 rounded-3xl text-center relative overflow-hidden shadow-xl"
      >
        <h3 className="text-3xl font-black mb-4 text-black">Need Support?</h3>
        <p className="text-black/80 mb-8 text-lg">
          Our support team is here to help with any questions or issues.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center gap-3 bg-black text-yellow-500 px-10 py-4 rounded-xl font-bold shadow-xl hover:text-white transition-colors duration-300"
        >
          Visit Support Center
          <ArrowRight size={20} />
        </motion.button>
      </motion.div>
    </>
  );
}
