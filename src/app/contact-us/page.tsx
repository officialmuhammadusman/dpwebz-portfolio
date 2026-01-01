'use client'
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Sparkles, CheckCircle2, User, Building, Globe, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-white">
    

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" />
          <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-2 bg-yellow-500 text-black text-sm font-bold rounded-full uppercase tracking-wider mb-6">Contact Us</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
               Let&apos;s Build Something<span className="block text-yellow-400">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-yellow-500 rounded-xl"><MessageSquare className="text-white" size={24} /></div>
                <div>
                  <h2 className="text-3xl font-black text-gray-900">Send us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and will get back to you</p>
                </div>
              </div>

              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                    <CheckCircle2 className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors" placeholder="John Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors" placeholder="+1 (555) 123-4567" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Company Name</label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors" placeholder="Your Company" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Service Interested In *</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <select name="service" value={formData.service} onChange={handleChange} className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors appearance-none bg-white">
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
                    <label className="block text-sm font-bold text-gray-900 mb-2">Your Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <motion.button onClick={handleSubmit} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    Send Message<Send size={20} />
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-6">
            {[
              { icon: <Mail size={28} />, title: 'Email Us', details: ['info@diwebz.com', 'support@diwebz.com'], description: 'Send us an email anytime!' },
              { icon: <Phone size={28} />, title: 'Call Us', details: ['+1 (555) 123-4567', '+1 (555) 987-6543'], description: 'Mon-Fri from 9am to 6pm' },
              { icon: <MapPin size={28} />, title: 'Visit Us', details: ['123 Business Street', 'New York, NY 10001, USA'], description: 'Come visit our office' },
              { icon: <Clock size={28} />, title: 'Working Hours', details: ['Monday - Friday: 9am - 6pm', 'Saturday: 10am - 4pm'], description: 'We&apos;re here to help!' },
            ].map((info, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }} whileHover={{ y: -4 }} className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:border-yellow-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500 rounded-xl text-white flex-shrink-0">{info.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium text-sm mb-1">{detail}</p>
                    ))}
                    <p className="text-gray-500 text-xs mt-2">{info.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { icon: <Facebook size={20} />, color: 'hover:bg-blue-600' },
                  { icon: <Twitter size={20} />, color: 'hover:bg-sky-500' },
                  { icon: <Linkedin size={20} />, color: 'hover:bg-blue-700' },
                  { icon: <Instagram size={20} />, color: 'hover:bg-pink-600' },
                ].map((social, index) => (
                  <motion.button key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl ${social.color} transition-colors`}>{social.icon}</motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Why <span className="text-yellow-600">Choose Us?</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We&apos;re committed to providing exceptional service and support to all our clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <CheckCircle2 size={24} />, title: '24/7 Support', description: 'Round-the-clock assistance for your needs' },
              { icon: <CheckCircle2 size={24} />, title: 'Fast Response', description: 'We respond within 24 hours' },
              { icon: <CheckCircle2 size={24} />, title: 'Expert Team', description: 'Experienced professionals ready to help' },
              { icon: <CheckCircle2 size={24} />, title: 'Free Consultation', description: 'Get started with a no-cost consultation' },
            ].map((reason, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }} whileHover={{ y: -8 }} className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-yellow-500 transition-all text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4 text-white">{reason.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-black text-black mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-900 mb-8 max-w-2xl mx-auto">Let&apos;s discuss how we can help transform your ideas into reality</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-black text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            Schedule a Free Consultation<ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg"><Sparkles className="text-white" size={24} /></div>
                <h3 className="text-xl font-bold">DiWebz Technology</h3>
              </div>
              <p className="text-gray-400 text-sm">Transforming ideas into award-winning digital experiences since 2020.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@diwebz.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Location: New York, USA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} DiWebz Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;