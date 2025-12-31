'use client'
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Calendar, Clock } from "lucide-react";
import { useState } from "react";

export default function CallToActionSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("form");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section className="py-1 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-2 text-yellow-500 font-bold text-xl uppercase tracking-widest inline-block"
          >
            Get Started Today
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            Ready to Transform Your{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Business?
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Let's discuss your vision and build something amazing together
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: Mail, label: "Email", value: "hello@agency.com" },
                { icon: MapPin, label: "Location", value: "San Francisco, CA" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 8 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <div>
                      <p className="text-gray-600 text-sm font-medium">{item.label}</p>
                      <p className="text-gray-900 font-bold">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Benefits */}
            <motion.div
              className="pt-8 border-t border-gray-200 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Work With Us</h3>
              {[
                "Free consultation - no obligation",
                "Personalized strategy",
                "Dedicated project manager",
                "Transparent pricing",
                "24/7 support",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                >
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                {[
                  { id: "form", label: "Contact Form" },
                  { id: "book", label: "Book Consultation" },
                ].map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-4 px-6 font-bold transition-colors ${
                      activeTab === tab.id
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 border-b-2 border-transparent"
                    }`}
                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              {/* Form */}
              <div className="p-8 md:p-10">
                {activeTab === "form" && (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us about your project..."
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-bold shadow-lg flex items-center justify-center gap-2"
                    >
                      Send Message
                      <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <ArrowRight size={20} />
                      </motion.div>
                    </motion.button>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 font-medium"
                      >
                        ✓ Message sent! We'll contact you soon.
                      </motion.div>
                    )}
                  </motion.form>
                )}

                {activeTab === "book" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 text-center"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Consultation</h3>
                      <p className="text-gray-600">30 minutes with our strategy team</p>
                    </div>
                    <div className="space-y-3">
                      {[
                        { icon: Clock, text: "30 minutes" },
                        { icon: Mail, text: "1-on-1 specialist" },
                        { icon: Mail, text: "No credit card needed" },
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div key={i} className="flex items-center justify-center gap-2 p-3 bg-blue-50 rounded-lg">
                            <Icon size={20} className="text-blue-600" />
                            <span className="text-gray-900 font-medium">{item.text}</span>
                          </div>
                        );
                      })}
                    </div>
                    <motion.a
                      href="#calendly"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2"
                    >
                      Book Free Consultation
                      <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        <Calendar size={20} />
                      </motion.div>
                    </motion.a>
                    <p className="text-sm text-gray-600">
                      Or call: <a href="tel:+15551234567" className="text-blue-600 font-bold">+1 (555) 123-4567</a>
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

     

      </div>
    </section>
  );
}


