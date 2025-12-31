// 'use client';
// import { motion } from 'framer-motion';
// import { Palette, Globe, Smartphone, Zap, TrendingUp, ShoppingCart, ArrowRight, LucideIcon } from 'lucide-react';

// interface Service {
//   id: number;
//   title: string;
//   description: string;
//   icon: LucideIcon;
//   image: string;
//   gradient: string;
//   hoverGradient: string;
//   items: string[];
// }

// const services: Service[] = [
//   {
//     id: 1,
//     title: 'Graphic Design',
//     description: 'Brand identities, UI/UX mockups, and stunning visuals that captivate your audience',
//     icon: Palette,
//     image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
//     gradient: 'from-pink-500 to-rose-500',
//     hoverGradient: 'from-pink-600 to-rose-600',
//     items: ['Logo & Brand Identity', 'UI/UX Mockups', 'Social Media Graphics']
//   },
//   {
//     id: 2,
//     title: 'Web Design & Development',
//     description: 'Custom websites built with cutting-edge tech stacks for optimal performance',
//     icon: Globe,
//     image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
//     gradient: 'from-blue-500 to-cyan-500',
//     hoverGradient: 'from-blue-600 to-cyan-600',
//     items: ['MERN / Laravel', 'WordPress', 'SaaS Development']
//   },
//   {
//     id: 3,
//     title: 'App Development',
//     description: 'Native and cross-platform apps with seamless user experiences',
//     icon: Smartphone,
//     image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
//     gradient: 'from-purple-500 to-indigo-500',
//     hoverGradient: 'from-purple-600 to-indigo-600',
//     items: ['iOS & Android Apps', 'Cross-Platform', 'API Integration']
//   },
//   {
//     id: 4,
//     title: 'Automation & AI Services',
//     description: 'Smart workflows and AI-powered solutions to streamline your operations',
//     icon: Zap,
//     image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
//     gradient: 'from-amber-500 to-orange-500',
//     hoverGradient: 'from-amber-600 to-orange-600',
//     items: ['Workflow Automation', 'AI Chatbots', 'CRM Integrations']
//   },
//   {
//     id: 5,
//     title: 'Digital Marketing & SEO',
//     description: 'Data-driven strategies to boost your online presence and drive growth',
//     icon: TrendingUp,
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
//     gradient: 'from-green-500 to-emerald-500',
//     hoverGradient: 'from-green-600 to-emerald-600',
//     items: ['SEO Optimization', 'Google Ads', 'Social Media Marketing']
//   },
//   {
//     id: 6,
//     title: 'eCommerce & Marketplace',
//     description: 'End-to-end eCommerce solutions from setup to optimization',
//     icon: ShoppingCart,
//     image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
//     gradient: 'from-violet-500 to-purple-500',
//     hoverGradient: 'from-violet-600 to-purple-600',
//     items: ['Shopify & WooCommerce', 'Product Listings', 'Amazon & eBay Setup']
//   }
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2
//     }
//   }
// } as const;

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//     scale: 0.9
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15
//     }
//   }
// } as const;

// export default function ServicesSection() {
//   return (
//     <section className="relative py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute top-20 left-10 w-72 h-72 bg-[#fec107] rounded-full opacity-5 blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             x: [0, 50, 0],
//             y: [0, 30, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl"
//           animate={{
//             scale: [1, 1.3, 1],
//             x: [0, -50, 0],
//             y: [0, -30, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//       <motion.div
//   className="text-center mb-20"
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   viewport={{ once: true }}
// >
//   <motion.span
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6 }}
//     className="px-4 py-2 text-yellow-500 font-bold text-xl uppercase tracking-widest inline-block"
//   >
//     What We Do
//   </motion.span>

//   <motion.h2
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.7, delay: 0.1 }}
//     className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
//   >
//     Empowering Your{" "}
//     <motion.span
//       className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
//       animate={{ backgroundPosition: ["0%", "100%"] }}
//       transition={{ duration: 3, repeat: Infinity }}
//     >
//       Digital Journey
//     </motion.span>
//   </motion.h2>

//   <motion.p
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.7, delay: 0.2 }}
//     className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
//   >
//     From concept to execution, we deliver world-class digital solutions that drive real results for your business
//   </motion.p>
// </motion.div>
//         {/* Services Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {services.map((service) => {
//             const Icon = service.icon;
//             return (
//               <motion.div
//                 key={service.id}
//                 variants={cardVariants}
//                 whileHover={{
//                   y: -10,
//                   transition: { type: "spring", stiffness: 300, damping: 20 }
//                 }}
//                 className="group relative"
//               >
//                 <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:border-[#fec107]">
//                   {/* Image Container */}
//                   <div className="relative h-48 overflow-hidden">
//                     <motion.img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover"
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.6 }}
//                     />
//                     {/* Gradient Overlay */}
//                     <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 mix-blend-multiply`} />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                   
//                     {/* Floating Icon */}
//                     <motion.div
//                       whileHover={{ rotate: 360, scale: 1.1 }}
//                       transition={{ duration: 0.6 }}
//                       className={`absolute bottom-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-2.5 shadow-xl`}
//                     >
//                       <Icon className="w-full h-full text-white" strokeWidth={2} />
//                     </motion.div>
//                   </div>
//                   {/* Content Section */}
//                   <div className="p-8 relative">
//                     {/* Gradient Overlay on Hover */}
//                     <motion.div
//                       className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
//                     />
//                     {/* Content */}
//                     <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#fec107] transition-colors duration-300">
//                       {service.title}
//                     </h3>
                   
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {service.description}
//                     </p>
//                     {/* Service Items */}
//                     <ul className="space-y-2 mb-6">
//                       {service.items.map((item, idx) => (
//                         <motion.li
//                           key={idx}
//                           initial={{ opacity: 0, x: -10 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           transition={{ delay: idx * 0.1 }}
//                           viewport={{ once: true }}
//                           className="flex items-center text-sm text-gray-700"
//                         >
//                           <span className="w-1.5 h-1.5 bg-[#fec107] rounded-full mr-2" />
//                           {item}
//                         </motion.li>
//                       ))}
//                     </ul>
//                     {/* CTA Button */}
//                     <motion.div
//                       className="flex items-center gap-2 text-[#fec107] font-semibold cursor-pointer group/btn"
//                       whileHover={{ x: 5 }}
//                     >
//                       <span className="text-sm">Explore Services</span>
//                       <motion.div
//                         animate={{ x: [0, 5, 0] }}
//                         transition={{
//                           duration: 1.5,
//                           repeat: Infinity,
//                           ease: "easeInOut"
//                         }}
//                       >
//                         <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
//                       </motion.div>
//                     </motion.div>
//                     {/* Corner Accent */}
//                     <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#fec107] to-transparent opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500" />
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
      
//       </div>
//     </section>
//   );
// }



'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Palette, Globe, Smartphone, Zap, TrendingUp, ShoppingCart, ArrowRight, LucideIcon } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  gradient: string;
  hoverGradient: string;
  items: string[];
  serviceKey: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Graphic Design',
    description: 'Brand identities, UI/UX mockups, and stunning visuals that captivate your audience',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    gradient: 'from-pink-500 to-rose-500',
    hoverGradient: 'from-pink-600 to-rose-600',
    items: ['Logo & Brand Identity', 'UI/UX Mockups', 'Social Media Graphics'],
    serviceKey: 'graphic-design'
  },
  {
    id: 2,
    title: 'Web Design & Development',
    description: 'Custom websites built with cutting-edge tech stacks for optimal performance',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    gradient: 'from-blue-500 to-cyan-500',
    hoverGradient: 'from-blue-600 to-cyan-600',
    items: ['MERN / Laravel', 'WordPress', 'SaaS Development'],
    serviceKey: 'web-development'
  },
  {
    id: 3,
    title: 'App Development',
    description: 'Native and cross-platform apps with seamless user experiences',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    gradient: 'from-purple-500 to-indigo-500',
    hoverGradient: 'from-purple-600 to-indigo-600',
    items: ['iOS & Android Apps', 'Cross-Platform', 'API Integration'],
    serviceKey: 'app-development'
  },
  {
    id: 4,
    title: 'Automation & AI Services',
    description: 'Smart workflows and AI-powered solutions to streamline your operations',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    gradient: 'from-amber-500 to-orange-500',
    hoverGradient: 'from-amber-600 to-orange-600',
    items: ['Workflow Automation', 'AI Chatbots', 'CRM Integrations'],
    serviceKey: 'automation-ai'
  },
  {
    id: 5,
    title: 'Digital Marketing & SEO',
    description: 'Data-driven strategies to boost your online presence and drive growth',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    gradient: 'from-green-500 to-emerald-500',
    hoverGradient: 'from-green-600 to-emerald-600',
    items: ['SEO Optimization', 'Google Ads', 'Social Media Marketing'],
    serviceKey: 'digital-marketing'
  },
  {
    id: 6,
    title: 'eCommerce & Marketplace',
    description: 'End-to-end eCommerce solutions from setup to optimization',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
    gradient: 'from-violet-500 to-purple-500',
    hoverGradient: 'from-violet-600 to-purple-600',
    items: ['Shopify & WooCommerce', 'Product Listings', 'Amazon & eBay Setup'],
    serviceKey: 'ecommerce'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
} as const;

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
} as const;

const MotionLink = motion(Link);

export default function ServicesSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#fec107] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
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
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            Empowering Your{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Digital Journey
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            From concept to execution, we deliver world-class digital solutions that drive real results for your business
          </motion.p>
        </motion.div>
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                <MotionLink
                  href={`/services#${service.serviceKey}`}
                  scroll={false}
                  className="block w-full h-full cursor-pointer"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:border-[#fec107]">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 mix-blend-multiply`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                      {/* Floating Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`absolute bottom-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-2.5 shadow-xl`}
                      >
                        <Icon className="w-full h-full text-white" strokeWidth={2} />
                      </motion.div>
                    </div>
                    {/* Content Section */}
                    <div className="p-8 relative">
                      {/* Gradient Overlay on Hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />
                      {/* Content */}
                      <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#fec107] transition-colors duration-300">
                        {service.title}
                      </h3>
                    
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      {/* Service Items */}
                      <ul className="space-y-2 mb-6">
                        {service.items.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <span className="w-1.5 h-1.5 bg-[#fec107] rounded-full mr-2" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      {/* CTA Button - now just styled text, not a link */}
                      <div className="flex items-center gap-2 text-[#fec107] font-semibold group/btn">
                        <span className="text-sm">Explore Services</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </motion.div>
                      </div>
                      {/* Corner Accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#fec107] to-transparent opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500" />
                    </div>
                  </div>
                </MotionLink>
              </motion.div>
            );
          })}
        </motion.div>
     
      </div>
    </section>
  );
}