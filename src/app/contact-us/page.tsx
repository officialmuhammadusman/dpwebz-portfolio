'use client'
import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, MessageSquare, Clock, Sparkles, CheckCircle2, 
  User, Building, Globe, Facebook, Twitter, Linkedin, Instagram, ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const brandColor = '#fec107';
  const brandDark = '#e0b200';

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== HERO SECTION ==================== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-black text-white py-20 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-[#fec107]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#fec107]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 font-bold text-xl uppercase tracking-widest inline-block mb-6 text-[#fec107]">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-[#fec107] block">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ==================== CENTERED SEND MESSAGE ==================== */}
      <section className="py-20 bg-gray-50">
       <div className="max-w-4xl mx-auto px-6 text-center">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {/* Top Label */}
    <motion.span
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4 py-2 font-bold text-xl uppercase tracking-widest inline-block mb-4"
      style={{ color: "#fec107" }}
    >
      Send a Message
    </motion.span>

    {/* Heading with highlighted word */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
      >
        Send a <span style={{ color: "#fec107" }}>Message</span>
      </motion.h2>
    </div>

    {/* Paragraph */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
    >
      Fill out the form below and our team will get back to you within 24 hours. Let&apos;s discuss your project!
    </motion.p>
  </motion.div>
</div>

      </section>

      {/* ==================== FORM + SIDEBAR CARDS ==================== */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 lg:p-12 shadow-2xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-2xl mb-6 mx-auto">
                    <CheckCircle2 className="text-green-600" size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-xl text-gray-600">We&apos;ll get back to you within 24 hours. Thank you!</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#fec107] focus:outline-none transition-all bg-gray-50"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#fec107] focus:outline-none transition-all bg-gray-50"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#fec107] focus:outline-none transition-all bg-gray-50"
                          placeholder="+92 300 1234567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">Company Name</label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#fec107] focus:outline-none transition-all bg-gray-50"
                          placeholder="Your company"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">Service Interested In *</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#fec107] focus:outline-none transition-all bg-gray-50 appearance-none"
                      >
                        <option value="">Select a service</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="web-development">Web Development</option>
                        <option value="app-development">App Development</option>
                        <option value="ai-automation">AI & Automation</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="ecommerce">eCommerce Solutions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#fec107] focus:outline-none transition-all bg-gray-50 resize-vertical"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-[#fec107] hover:bg-[#e0b200] text-black font-black text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                  >
                    <Send size={24} />
                    Send Message
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Mail, title: 'Email Us', details: ['info@diwebz.com', 'support@diwebz.com'], desc: 'Response within 2 hours' },
              { icon: Phone, title: 'Call Us', details: ['+92 300 1234567', '+92 321 9876543'], desc: 'Mon-Fri 9AM-6PM PKT' },
              { icon: MapPin, title: 'Visit Us', details: ['Office #304, ABC Tower', 'F-7 Markaz, Islamabad'], desc: 'By appointment only' },
              { icon: Clock, title: 'Working Hours', details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'], desc: 'PKT Timezone' },
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-[#fec107] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-[#fec107] rounded-2xl text-black flex-shrink-0">
                    <info.icon size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-black text-gray-900 mb-2 truncate">{info.title}</h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-800 font-semibold text-sm">{detail}</p>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 font-medium">{info.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ==================== WHY CHOOSE US ==================== */}
      <div className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mb-16">
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-12"
>
  {/* Heading with highlighted word */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-4xl font-black text-gray-900 mb-4"
  >
    Why <span className="text-[#fec107]">Choose Us?</span>
  </motion.h2>

  {/* Paragraph */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="text-gray-600 max-w-2xl mx-auto"
  >
    We&apos;re committed to providing exceptional service and support to all our clients
  </motion.p>
</motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '24/7 Support', description: 'Round-the-clock assistance for your needs' },
              { title: 'Fast Response', description: 'We respond within 24 hours' },
              { title: 'Expert Team', description: 'Experienced professionals ready to help' },
              { title: 'Free Consultation', description: 'Get started with a no-cost consultation' },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-[#fec107] transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fec107] rounded-full mb-4 text-black">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ==================== CTA SECTION ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="bg-[#fec107] rounded-3xl p-12 text-center shadow-2xl"
        >
          <h2 className="text-4xl font-black text-black mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-900 mb-8 max-w-2xl mx-auto">
            Let discuss how we can help transform your ideas into reality
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Schedule a Free Consultation
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#fec107] rounded-lg">
                  <Sparkles className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-bold">DiWebz Technology</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming ideas into award-winning digital experiences since 2020.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#fec107]">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#fec107] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#fec107] transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-[#fec107] transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#fec107]">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@diwebz.com</li>
                <li>Phone: +92 300 1234567</li>
                <li>Location: Islamabad, PK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} DiWebz Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;