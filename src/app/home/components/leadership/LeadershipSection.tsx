// 'use client'
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail } from 'lucide-react';
// import { useState } from 'react';
// import React from 'react';

// const leadership = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     title: 'Chief Executive Officer',
//     bio: 'Visionary leader with 15+ years driving digital transformation across Fortune 500 companies',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
//     socials: [
//       { icon: Linkedin, url: '#' },
//       { icon: Twitter, url: '#' },
//       { icon: Mail, url: '#' },
//     ]
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     title: 'Chief Technology Officer',
//     bio: 'Tech visionary specializing in scalable architecture and AI integration',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
//     socials: [
//       { icon: Linkedin, url: '#' },
//       { icon: Twitter, url: '#' },
//       { icon: Mail, url: '#' },
//     ]
//   },
//   {
//     id: 3,
//     name: 'Emma Williams',
//     title: 'Chief Design Officer',
//     bio: 'Award-winning designer passionate about creating intuitive user experiences',
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
//     socials: [
//       { icon: Linkedin, url: '#' },
//       { icon: Twitter, url: '#' },
//       { icon: Mail, url: '#' },
//     ]
//   },
//   {
//     id: 4,
//     name: 'David Martinez',
//     title: 'VP of Operations',
//     bio: 'Operational excellence expert managing complex project portfolios globally',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
//     socials: [
//       { icon: Linkedin, url: '#' },
//       { icon: Twitter, url: '#' },
//       { icon: Mail, url: '#' },
//     ]
//   },
//   {
//     id: 5,
//     name: 'Lisa Anderson',
//     title: 'VP of Strategy',
//     bio: 'Strategic visionary driving market innovation and business growth initiatives',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
//     socials: [
//       { icon: Linkedin, url: '#' },
//       { icon: Twitter, url: '#' },
//       { icon: Mail, url: '#' },
//     ]
//   },
//   {
//     id: 6,
//     name: 'James Wilson',
//     title: 'Head of Client Success',
//     bio: 'Customer champion ensuring exceptional delivery and long-term partnerships',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
//     socials: [
//       { icon: Linkedin, url: '#' },
//       { icon: Twitter, url: '#' },
//       { icon: Mail, url: '#' },
//     ]
//   },
// ];

// function LeaderCard({ leader, isVisible }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.4 }}
//       className="group"
//     >
//       <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full flex flex-col">
//         {/* Image Container */}
//         <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
//           <motion.img
//             src={leader.image}
//             alt={leader.name}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//           />
//           {/* Overlay on hover */}
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             initial={{ opacity: 0 }}
//           />
//         </div>

//         {/* Content */}
//         <div className="p-8 flex-1 flex flex-col justify-between">
//           {/* Text Content */}
//           <div className="mb-6">
//             <motion.h3
//               className="text-2xl font-black text-gray-900 mb-1"
//               whileHover={{ x: 4 }}
//             >
//               {leader.name}
//             </motion.h3>
//             <p className="text-[#fec107] text-sm font-bold uppercase tracking-widest mb-4">
//               {leader.title}
//             </p>
//             <p className="text-gray-600 text-sm leading-relaxed font-light">
//               {leader.bio}
//             </p>
//           </div>

//           {/* Social Links */}
//           <div className="flex gap-3 pt-6 border-t border-gray-100">
//             {leader.socials.map((social, idx) => {
//               const Icon = social.icon;
//               return (
//                 <motion.a
//                   key={idx}
//                   href={social.url}
//                   whileHover={{ scale: 1.2, y: -4 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:text-white hover:bg-gray-900 hover:border-gray-900 flex items-center justify-center transition-all duration-300"
//                 >
//                   <Icon size={16} />
//                 </motion.a>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function LeadershipSection() {
//   const itemsPerView = { mobile: 1, tablet: 2, desktop: 3 };
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [windowSize, setWindowSize] = useState('desktop');

//   // Determine items per slide based on screen size
//   const getItemsPerSlide = () => {
//     if (typeof window !== 'undefined') {
//       if (window.innerWidth < 768) return itemsPerView.mobile;
//       if (window.innerWidth < 1024) return itemsPerView.tablet;
//       return itemsPerView.desktop;
//     }
//     return itemsPerView.desktop;
//   };

//   const [itemsPerSlide, setItemsPerSlide] = useState(itemsPerView.desktop);

//   React.useEffect(() => {
//     const updateSize = () => {
//       const items = getItemsPerSlide();
//       setItemsPerSlide(items);
//       if (window.innerWidth < 768) setWindowSize('mobile');
//       else if (window.innerWidth < 1024) setWindowSize('tablet');
//       else setWindowSize('desktop');
//     };

//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   const totalSlides = Math.ceil(leadership.length / itemsPerSlide);
//   const startIdx = currentSlide * itemsPerSlide;
//   const visibleLeaders = leadership.slice(startIdx, startIdx + itemsPerSlide);

//   const handlePrev = () => {
//     setCurrentSlide((prev) => Math.max(0, prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
//   };

//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
//       {/* Background Decoration */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"
//           animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
//           transition={{ duration: 12, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20"
//           animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
//           transition={{ duration: 14, repeat: Infinity }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto relative">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="px-4 py-2 text-yellow-500 font-bold text-lg uppercase tracking-widest inline-block"
//           >
//             Our Leadership
//           </motion.span>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
//           >
//             Visionary Leaders{' '}
//             <motion.span
//               className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
//               animate={{ backgroundPosition: ['0%', '100%'] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               Driving Excellence
//             </motion.span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
//           >
//             Meet the passionate innovators and strategists shaping the future of digital excellence
//           </motion.p>
//         </motion.div>

//         {/* Leadership Cards Slider */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="mb-12"
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             >
//               {visibleLeaders.map((leader, idx) => (
//                 <LeaderCard
//                   key={leader.id}
//                   leader={leader}
//                   isVisible={true}
//                 />
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>

//         {/* Navigation Controls */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex items-center justify-center gap-8 mb-8"
//         >
//           {/* Previous Button */}
//           <motion.button
//             onClick={handlePrev}
//             disabled={currentSlide === 0}
//             whileHover={currentSlide > 0 ? { scale: 1.1, x: -4 } : {}}
//             whileTap={{ scale: 0.95 }}
//             className={`p-4 rounded-full border transition-all duration-300 ${
//               currentSlide === 0
//                 ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50'
//                 : 'border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-100'
//             }`}
//           >
//             <ChevronLeft size={24} />
//           </motion.button>

//           {/* Dot Indicators */}
//           <div className="flex gap-2">
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <motion.button
//                 key={index}
//                 onClick={() => handleDotClick(index)}
//                 className={`transition-all duration-300 rounded-full ${
//                   currentSlide === index
//                     ? 'bg-gray-900 w-8 h-2'
//                     : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
//                 }`}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               />
//             ))}
//           </div>

//           {/* Next Button */}
//           <motion.button
//             onClick={handleNext}
//             disabled={currentSlide === totalSlides - 1}
//             whileHover={currentSlide < totalSlides - 1 ? { scale: 1.1, x: 4 } : {}}
//             whileTap={{ scale: 0.95 }}
//             className={`p-4 rounded-full border transition-all duration-300 ${
//               currentSlide === totalSlides - 1
//                 ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50'
//                 : 'border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-100'
//             }`}
//           >
//             <ChevronRight size={24} />
//           </motion.button>
//         </motion.div>

//         {/* Slide Counter */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center text-gray-500 text-sm"
//         >
//           <p>
//             Slide {currentSlide + 1} of {totalSlides}
//           </p>
//         </motion.div>

//         {/* Bottom CTA */}
//         <motion.div
//   className="mt-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 md:p-16 relative overflow-hidden"
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.8, delay: 0.2 }}
// >
//   <motion.div className="relative z-10 text-center">
//     <motion.h3
//       initial={{ scale: 0.95, opacity: 0 }}
//       whileInView={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="text-4xl md:text-5xl font-black text-white mb-4"
//     >
//       Join Our Growing Team
//     </motion.h3>

//     <motion.p
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ delay: 0.2, duration: 0.6 }}
//       className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
//     >
//       We're always looking for talented individuals to join our mission.
//     </motion.p>

//     <motion.div
//       className="flex justify-center"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ delay: 0.4, duration: 0.6 }}
//     >
//       <motion.a
//         href="#careers"
//         whileHover={{ scale: 1.05, y: -4 }}
//         whileTap={{ scale: 0.95 }}
//         className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-xl font-bold shadow-xl"
//       >
//         Explore Careers
//         <motion.div
//           animate={{ x: [0, 4, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           <ChevronRight size={20} />
//         </motion.div>
//       </motion.a>
//     </motion.div>
//   </motion.div>
// </motion.div>

//       </div>
//     </section>
//   );
// }






"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail } from 'lucide-react';
import { useState, useCallback } from 'react';
import React from 'react';

const leadership = [
  {
    id: 1,
    name: 'Bilal Nawaz',
    title: 'Founder & CEO',
    bio: 'Visionary leader with 4+ years driving digital transformation across Fortune 10 companies',
    image: '/ceo.jpg',
    socials: [
      { icon: Linkedin, url: '#' },
      { icon: Twitter, url: '#' },
      { icon: Mail, url: '#' },
    ]
  },
  {
    id: 2,
    name: 'Shoaib Qureshi',
    title: 'COfounder & brand Manager',
    bio: 'Tech visionary specializing in scalable architecture and AI integration',
    image: '/cto.jpg',
    socials: [
      { icon: Linkedin, url: '#' },
      { icon: Twitter, url: '#' },
      { icon: Mail, url: '#' },
    ]
  },
  {
    id: 3,
    name: 'Ammar Rana ',
    title: 'Chief Design Officer',
    bio: 'Award-winning designer passionate about creating intuitive user experiences',
    image: 'member.jpg',
    socials: [
      { icon: Linkedin, url: '#' },
      { icon: Twitter, url: '#' },
      { icon: Mail, url: '#' },
    ]
  },
  {
    id: 4,
name: 'Muhammad Usman',
title: 'Team Lead Developer',
bio: 'Team lead developer driving scalable solutions and mentoring high-performing engineering teams',

    image: 'lead.jpg',
    socials: [
      { icon: Linkedin, url: '#' },
      { icon: Twitter, url: '#' },
      { icon: Mail, url: '#' },
    ]
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    title: 'VP of Strategy',
    bio: 'Strategic visionary driving market innovation and business growth initiatives',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    socials: [
      { icon: Linkedin, url: '#' },
      { icon: Twitter, url: '#' },
      { icon: Mail, url: '#' },
    ]
  },
  {
    id: 6,
    name: 'James Wilson',
    title: 'Head of Client Success',
    bio: 'Customer champion ensuring exceptional delivery and long-term partnerships',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    socials: [
      { icon: Linkedin, url: '#' },
      { icon: Twitter, url: '#' },
      { icon: Mail, url: '#' },
    ]
  },
];

interface Leader {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  socials: Array<{
    icon: React.ComponentType<{ size?: number; className?: string }>;
    url: string;
  }>;
}

function LeaderCard({ leader, isVisible }: { leader: Leader; isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
          <motion.img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
          />
        </div>

        {/* Content */}
        <div className="p-8 flex-1 flex flex-col justify-between">
          {/* Text Content */}
          <div className="mb-6">
            <motion.h3
              className="text-2xl font-black text-gray-900 mb-1"
              whileHover={{ x: 4 }}
            >
              {leader.name}
            </motion.h3>
            <p className="text-[#fec107] text-sm font-bold uppercase tracking-widest mb-4">
              {leader.title}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              {leader.bio}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 pt-6 border-t border-gray-100">
            {leader.socials.map((social, idx: number) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.url}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:text-white hover:bg-gray-900 hover:border-gray-900 flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function LeadershipSection() {
  const itemsPerView = { mobile: 1, tablet: 2, desktop: 3 };
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoize getItemsPerSlide to avoid recreating the function
  const getItemsPerSlide = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return itemsPerView.mobile;
      if (window.innerWidth < 1024) return itemsPerView.tablet;
      return itemsPerView.desktop;
    }
    return itemsPerView.desktop;
  }, [itemsPerView.mobile, itemsPerView.tablet, itemsPerView.desktop]);

  const [itemsPerSlide, setItemsPerSlide] = useState(itemsPerView.desktop);

  React.useEffect(() => {
    const updateSize = () => {
      const items = getItemsPerSlide();
      setItemsPerSlide(items);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [getItemsPerSlide]);

  const totalSlides = Math.ceil(leadership.length / itemsPerSlide);
  const startIdx = currentSlide * itemsPerSlide;
  const visibleLeaders = leadership.slice(startIdx, startIdx + itemsPerSlide);

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 text-yellow-500 font-bold text-lg uppercase tracking-widest inline-block"
          >
            Our Leadership
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            Visionary Leaders{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Driving Excellence
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Meet the passionate innovators and strategists shaping the future of digital excellence
          </motion.p>
        </motion.div> */}


        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-20"
>
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="px-4 py-2 font-bold text-lg uppercase tracking-widest inline-block"
    style={{ color: "#fec107" }}
  >
    Our Leadership
  </motion.span>

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
    style={{ color: "#000000" }}
  >
    Visionary Leaders{" "}
    <span style={{ color: "#fec107" }}>
      Driving Excellence
    </span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
  >
    Meet the passionate innovators and strategists shaping the future of digital excellence
  </motion.p>
</motion.div>


        {/* Leadership Cards Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleLeaders.map((leader) => (
                <LeaderCard
                  key={leader.id}
                  leader={leader}
                  isVisible={true}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8 mb-8"
        >
          {/* Previous Button */}
          <motion.button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            whileHover={currentSlide > 0 ? { scale: 1.1, x: -4 } : {}}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-full border transition-all duration-300 ${
              currentSlide === 0
                ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50'
                : 'border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'bg-gray-900 w-8 h-2'
                    : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={handleNext}
            disabled={currentSlide === totalSlides - 1}
            whileHover={currentSlide < totalSlides - 1 ? { scale: 1.1, x: 4 } : {}}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-full border transition-all duration-300 ${
              currentSlide === totalSlides - 1
                ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50'
                : 'border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-100'
            }`}
          >
            <ChevronRight size={24} />
          </motion.button>
        </motion.div>

        {/* Slide Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm"
        >
          <p>
            Slide {currentSlide + 1} of {totalSlides}
          </p>
        </motion.div>

        {/* Bottom CTA */}
      <motion.div
  className="mt-20 bg-gradient-to-r from-[#fec107] via-[#FFD54F] to-[#FFD700] rounded-3xl p-12 md:p-16 relative overflow-hidden"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <motion.div className="relative z-10 text-center">
    {/* Heading */}
    <motion.h3
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-black text-black mb-4"
    >
      Join Our Growing Team
    </motion.h3>

    {/* Paragraph */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-black text-lg mb-8 max-w-2xl mx-auto"
    >
      We&apos;re always looking for talented individuals to join our mission.
    </motion.p>

    {/* Button */}
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <motion.a
        href="#careers"
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center gap-3 bg-black text-yellow-500 px-10 py-4 rounded-xl font-bold shadow-xl hover:text-white transition-colors duration-300"
      >
        Explore Careers
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRight size={20} />
        </motion.div>
      </motion.a>
    </motion.div>
  </motion.div>
</motion.div>

      </div>
    </section>
  );
}