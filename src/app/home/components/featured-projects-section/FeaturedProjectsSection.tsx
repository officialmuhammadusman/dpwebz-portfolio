"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ExternalLink, ArrowRight, ChevronRight, Calendar, Users } from "lucide-react";
import { useState } from "react";
import React from 'react'; // Added to fix JSX namespace

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  techStack: string[];
  livePreview?: string;
  year: number;
  client: string;
  role: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Luxe Brand Identity",
    category: "Graphic Design",
    description:
      "Complete brand identity design including logo, business cards, and social media templates for luxury fashion brand",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&q=80",
    link: "https://www.behance.net/gallery/12345678/luxe-brand-identity",
    tags: ["Logo Design", "Brand Identity", "UI/UX"],
    techStack: ["Figma", "Illustrator", "Photoshop"],
    livePreview: "https://luxe-brand-demo.netlify.app",
    year: 2023,
    client: "Luxe Fashion",
    role: "Lead Designer",
  },
  {
    id: 2,
    title: "TechFlow SaaS Platform",
    category: "Web Development",
    description:
      "Modern SaaS dashboard built with MERN stack featuring real-time analytics and seamless user experience",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    link: "https://github.com/techflow/saas-dashboard",
    tags: ["MERN Stack", "Dashboard", "Responsive"],
    techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
    livePreview: "https://techflow-saas.vercel.app",
    year: 2024,
    client: "TechFlow Inc",
    role: "Full Stack Developer",
  },
  {
    id: 3,
    title: "FitTrack Mobile App",
    category: "App Development",
    description:
      "Cross-platform fitness tracking app with workout plans, nutrition tracking, and social features",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    link: "https://dribbble.com/shots/12345678-FitTrack-Mobile-App",
    tags: ["React Native", "iOS", "Android"],
    techStack: ["React Native", "Firebase", "Redux"],
    livePreview: "https://fittrack-app-expo.io",
    year: 2023,
    client: "FitTrack Health",
    role: "Mobile Developer",
  },
  {
    id: 4,
    title: "Smart CRM Automation",
    category: "Automation & AI",
    description:
      "AI-powered CRM automation system with chatbot integration and workflow optimization for enterprise client",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
    link: "https://github.com/smartcrm/ai-automation",
    tags: ["AI Chatbot", "CRM", "Automation"],
    techStack: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    livePreview: "https://smart-crm-demo.herokuapp.com",
    year: 2024,
    client: "Enterprise Client",
    role: "AI Engineer",
  },
  {
    id: 5,
    title: "GrowthHub Digital",
    category: "Digital Marketing & SEO",
    description:
      "Comprehensive SEO and digital marketing campaign that increased organic traffic by 300% in 6 months",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    link: "https://growthhub.com/case-study",
    tags: ["SEO", "Google Ads", "Social Media"],
    techStack: ["Google Analytics", "SEMrush", "HubSpot"],
    livePreview: "https://growthhub-dashboard.vercel.app",
    year: 2024,
    client: "GrowthHub",
    role: "Digital Marketer",
  },
  {
    id: 6,
    title: "Fashion Hub Store",
    category: "eCommerce Solutions",
    description:
      "Full-featured Shopify store with custom theme, payment integration, and inventory management system",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80",
    link: "https://fashionhub-store.com",
    tags: ["Shopify", "WooCommerce", "Payment Gateway"],
    techStack: ["Shopify API", "Liquid", "JavaScript", "CSS3"],
    livePreview: "https://fashionhub-demo.myshopify.com",
    year: 2023,
    client: "Fashion Hub",
    role: "eCommerce Developer",
  },
];


function ProjectCard({ project, index }: { project: Project; index: number }): React.ReactElement {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<number>(0);
  const images = [
    project.image,
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeInOut",
      },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const shadowVariants = {
    initial: { boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)" },
    hover: {
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const overlayVariants: Variants = {
    initial: { opacity: 0, backdropFilter: "blur(0px)" },
    hover: {
      opacity: 1,
      backdropFilter: "blur(2px)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants: Variants = {
    initial: { y: 30, opacity: 0 },
    hover: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: index * 0.15 + 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const dotVariants: Variants = {
    initial: { scale: 0.5, opacity: 0.4 },
    active: { scale: 1.2, opacity: 1 },
    inactive: { scale: 1, opacity: 0.6 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-80px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        variants={shadowVariants}
        initial="initial"
        whileHover="hover"
        className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500"
      >
        {/* Image Gallery */}
        <div className="relative h-64 md:h-72 overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
          <motion.div
            className="relative h-full"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={images[activeImage]}
                alt={project.title}
                className="w-full h-full object-cover"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              />
            </AnimatePresence>

            {/* Image Navigation Dots */}
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            >
              {images.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  variants={dotVariants}
                  initial="initial"
                  animate={activeImage === idx ? "active" : "inactive"}
                  whileHover={{ scale: 1.3 }}
                  className={`rounded-full transition-all duration-300 ${
                    activeImage === idx
                      ? 'bg-white w-6 h-2'
                      : 'bg-white/50 w-2 h-2 hover:bg-white/80'
                  }`}
                />
              ))}
            </motion.div>

            {/* Hover Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
              className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"
            />
          </motion.div>

          {/* Category Badge */}
          <motion.div
            className="absolute top-4 left-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-md text-gray-800 text-xs font-semibold rounded-full shadow-lg">
              {project.category}
            </span>
          </motion.div>

          {/* View Project Button */}
          <motion.div
            variants={buttonVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            className="absolute bottom-4 right-4"
          >
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors shadow-xl"
            >
              View Project
              <motion.div
                animate={isHovered ? { x: 4 } : { x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ExternalLink size={14} />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div className="p-6" variants={contentVariants} initial="hidden" animate="visible">
          {/* Project Metadata */}
          <motion.div
            className="flex items-center gap-4 mb-4 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center gap-1.5"
              whileHover={{ x: 4 }}
            >
              <Calendar size={14} />
              <span>{project.year}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-1.5"
              whileHover={{ x: 4 }}
            >
              <Users size={14} />
              <span>{project.client}</span>
            </motion.div>
          </motion.div>

          {/* Title & Description */}
          <motion.h3
            className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.35, duration: 0.5, ease: "easeOut" }}
            whileHover={{ x: 4 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-gray-600 mb-5 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.4, duration: 0.5, ease: "easeOut" }}
          >
            {project.description}
          </motion.p>

          {/* Role */}
          <motion.div
            className="mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.45, duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Role
            </span>
            <motion.p className="text-gray-800 font-semibold" whileHover={{ x: 2 }}>
              {project.role}
            </motion.p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.5, duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
              Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.55 + i * 0.05, duration: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-xs font-medium rounded-lg"
                >
                  {tech}
                </motion.span>
              ))}
              {project.techStack.length > 3 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.7, duration: 0.3, ease: "easeOut" }}
                  className="px-3 py-1.5 bg-gray-100 text-gray-500 text-xs font-semibold rounded-lg"
                >
                  +{project.techStack.length - 3}
                </motion.span>
              )}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="flex items-center justify-between pt-4 border-t border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.75, duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex gap-3">
              {project.livePreview && (
                <motion.a
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  Live Demo
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <ArrowRight size={14} />
                  </motion.div>
                </motion.a>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedProjectsSection(): React.ReactElement {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: "easeOut"
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Remove unused variables
  // const statVariants = {...} - Remove this since it's unused
  // const statCountVariants = {...} - Remove this since it's unused

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-32 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gray-50 rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
       <motion.div
  className="text-center mb-20"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  <motion.span
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="px-4 py-2 text-yellow-500 font-bold text-xl uppercase tracking-widest inline-block"
  >
    Featured Work
  </motion.span>

  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
  >
    Crafting Digital{" "}
    <motion.span
      className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
      animate={{ backgroundPosition: ["0%", "100%"] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      Experiences That Deliver
    </motion.span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
  >
    Showcasing impactful solutions and innovative approaches across diverse industries
  </motion.p>
</motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats & CTA */}
        <motion.div
  className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 md:p-16 relative overflow-hidden"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <motion.div className="relative z-10 text-center">
    <motion.h3
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-black text-white mb-4"
    >
      Ready to start your project?
    </motion.h3>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
    >
      Let’s discuss how we can transform your ideas into impactful digital experiences.
    </motion.p>

    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <motion.a
        href="/portfolio"
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-xl font-bold shadow-xl"
      >
        View Full Portfolio
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight size={20} />
        </motion.div>
      </motion.a>

      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center gap-3 border-2 border-gray-400 text-white px-10 py-4 rounded-xl font-bold hover:border-white transition-colors"
      >
        Schedule a Call
      </motion.a>
    </motion.div>
  </motion.div>
</motion.div>

      </div>
    </section>
  );
}