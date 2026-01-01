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
        >
          <h2 className="text-4xl font-black mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? We&apos;d love to hear from you. Reach out through any of these channels.
          </p>
        </motion.div>
      </div>

      {/* Contact Form & Info */}
      <div className="my-20 grid md:grid-cols-2 gap-8">
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
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 p-6 rounded-2xl"
          >
            <MapPin size={32} className="text-blue-600 mb-4" />
            <h4 className="font-bold text-lg mb-2 text-gray-900">Office Locations</h4>
            <div className="space-y-3 text-gray-600">
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 p-6 rounded-2xl"
          >
            <Phone size={32} className="text-blue-600 mb-4" />
            <h4 className="font-bold text-lg mb-2 text-gray-900">Phone</h4>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9AM-6PM PST</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 p-6 rounded-2xl"
          >
            <Mail size={32} className="text-blue-600 mb-4" />
            <h4 className="font-bold text-lg mb-2 text-gray-900">Email</h4>
            <p className="text-gray-600">hello@dpwebz.com</p>
            <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 p-6 rounded-2xl"
          >
            <Calendar size={32} className="text-blue-600 mb-4" />
            <h4 className="font-bold text-lg mb-2 text-gray-900">Book a Consultation</h4>
            <p className="text-gray-600 mb-4">Schedule a free 30-minute discovery call</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
            >
              Schedule Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="my-20 bg-white border-2 border-gray-200 p-12 rounded-2xl text-center"
      >
        <h3 className="text-3xl font-black mb-4 text-gray-900">Need Support?</h3>
        <p className="text-gray-600 mb-8 text-lg">
          Our support team is here to help with any questions or issues.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold shadow-xl transition-all inline-flex items-center gap-3"
        >
          Visit Support Center
          <ArrowRight size={20} />
        </motion.button>
      </motion.div>
    </>
  );
}


