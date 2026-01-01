"use client";
import { motion, Variants } from "framer-motion";
import { ExternalLink, ArrowRight, Calendar, Users } from "lucide-react";
import { useState } from "react";
import React from 'react';
import { Project } from './projects.data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps): React.ReactElement {
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
    hover: { boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 h-full flex flex-col"
        variants={shadowVariants}
        initial="initial"
        whileHover="hover"
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <motion.img
            src={images[activeImage]}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  activeImage === idx ? 'bg-white w-8' : 'bg-white/50 w-4'
                }`}
              />
            ))}
          </div>

          {/* Category Badge */}
          <motion.div
            className="absolute top-4 left-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 + 0.2 }}
          >
            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full">
              {project.category}
            </span>
          </motion.div>

          {/* Year Badge */}
          <motion.div
            className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 + 0.3 }}
          >
            <Calendar size={12} />
            {project.year}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#fec107] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
              {project.description}
            </p>
          </div>

          {/* Client & Role */}
          <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <Users size={14} />
              <span className="font-medium">{project.client}</span>
            </div>
            <span>•</span>
            <span>{project.role}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-auto flex gap-3">
            {project.livePreview && (
              <motion.a
                href={project.livePreview}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2.5 bg-[#fec107] hover:bg-[#fec107]/90 text-gray-900 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <ExternalLink size={16} />
                Live Preview
              </motion.a>
            )}
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
            >
              View Details
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


