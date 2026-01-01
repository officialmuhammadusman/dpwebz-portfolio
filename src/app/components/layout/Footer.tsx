'use client'
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'What We Do': [
      'Graphic Design',
      'Web Design & Development',
      'App Development',
      'Automation & AI Services',
      'Digital Marketing & SEO',
      'eCommerce & Marketplace Solutions',
    ],
    'Who We Help': [
      'E-commerce Brands',
      'Startups & SMBs',
      'Healthcare',
      'Real Estate',
      'Solo Entrepreneurs',
      'Large Corporations',
    ],
    'How We Deliver': [
      'Case Studies',
      'Our Process',
      'Client Testimonials',
      'Blog & Insights',
      'Our Tech Stack',
      'Enterprise-Grade Security',
    ],
    'Who We Are': [
      'About Us',
      'Our Story',
      'Leadership Team',
      'Awards & Accolades',
      'Certifications',
      'Press & Media Coverage',
    ],
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: Mail, label: 'Email', value: 'hello@agency.com', link: 'mailto:hello@agency.com' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', link: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', link: '#' },
    { icon: Twitter, name: 'Twitter', link: '#' },
    { icon: Linkedin, name: 'LinkedIn', link: '#' },
    { icon: Instagram, name: 'Instagram', link: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Top Section: CTA Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#fec107] to-yellow-400 rounded-2xl p-8 md:p-12 mb-16 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-gray-800 font-medium">
                  Let&apos;s discuss how we can transform your vision into reality
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, x: 8 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all w-full md:w-auto"
              >
                Book Free Consultation
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>

          {/* Main Footer Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16"
          >
            {/* Branding & About - Wider Column */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.h2 
                className="text-3xl font-black text-white mb-4 bg-gradient-to-r from-[#fec107] to-yellow-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                DPWebz
              </motion.h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming businesses through innovative digital solutions. Your trusted partner in creating exceptional digital experiences that drive growth and success.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 mb-8">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      aria-label={social.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.15, y: -4 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-11 h-11 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-[#fec107] hover:to-yellow-500 flex items-center justify-center transition-all shadow-lg hover:shadow-[#fec107]/20"
                    >
                      <Icon size={20} className="text-gray-300 hover:text-gray-900 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Contact Info - Compact */}
              <div className="space-y-3 pt-6 border-t border-gray-800">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-sm group"
                    >
                      <Icon size={16} className="text-[#fec107] group-hover:scale-110 transition-transform" />
                      <span className="text-gray-400 group-hover:text-white transition-colors">{info.value}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Footer Link Columns - More Compact */}
            {Object.entries(footerLinks).map(([category, links], colIndex) => (
              <motion.div key={category} variants={itemVariants}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#fec107] mb-5">
                  {category}
                </h3>
                <ul className="space-y-2.5">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (colIndex * 0.1) + (linkIndex * 0.05) }}
                    >
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <motion.span
                          className="w-1 h-1 rounded-full bg-[#fec107] opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.5 }}
                        />
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 bg-gray-950/50"
        >
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Copyright */}
              <motion.div
                className="text-center md:text-left text-sm text-gray-500"
              >
                <p>
                  © {currentYear} DPWebz. All rights reserved. 
                </p>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                className="flex justify-center gap-6 text-sm"
              >
                {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ color: '#fec107' }}
                    className="text-gray-500 hover:text-[#fec107] transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}
              </motion.div>

              {/* Back to Top */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ y: -4, color: '#fec107' }}
                whileTap={{ scale: 0.95 }}
                className="text-center md:text-right text-sm text-gray-500 hover:text-[#fec107] transition-colors flex items-center justify-center md:justify-end gap-2"
              >
                Back to Top
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={16} className="rotate-90" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}