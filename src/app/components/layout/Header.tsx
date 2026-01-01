// 'use client';

// import { useState } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Sun } from 'lucide-react';
// import Image from 'next/image';

// interface MenuItem {
//   title: string;
//   items: string[];
// }

// interface MenuItems {
//   [key: string]: MenuItem[];
// }

// export default function Header() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const [openMenu, setOpenMenu] = useState<string | null>(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
//   const [selectedLanguage, setSelectedLanguage] = useState<string>('Global');
//   const [languageDropdownOpen, setLanguageDropdownOpen] = useState<boolean>(false);

//   const languages = ['Global', 'MENA', 'KSA - Arabic', 'KSA - English', 'North America', 'Europe & UK'];

//   // Mapping for sub-menu hash links
//   const servicesTabMapping: { [key: string]: string } = {
//     'Graphic Design': 'graphic-design',
//     'Web Design & Development': 'web-development',
//     'App Development': 'app-development',
//     'Automation & AI Services': 'automation-ai',
//     'Digital Marketing & SEO': 'digital-marketing',
//     'eCommerce & Marketplace Solutions': 'ecommerce',
//   };

//   const aboutColumnMapping: { [key: string]: string } = {
//     'Company': 'company',
//     'Recognition': 'recognition',
//     'Connect': 'connect',
//   };

//   const aboutItemMapping: { [key: string]: string } = {
//     'Leadership Team': 'leadership',
//   };

//   const clientsColumnMapping: { [key: string]: string } = {
//     'Industries': 'industries',
//     'By Business Size': 'business-size',
//     'Solutions': 'solutions',
//   };

//   const processColumnMapping: { [key: string]: string } = {
//     'Resources': 'resources',
//     'Our Process': 'our-process',
//     'Technology': 'technology',
//   };

//   const menuItems: MenuItems = {
//     'What We Do': [
//        { title: 'Web Design & Development', items: ['Custom Websites (MERN / Laravel)', 'WordPress Development', 'WooCommerce Development', 'SaaS Website Development', 'CMS Development & Integration'] },
//        { title: 'Automation & AI Services', items: ['Workflow Automation & CRM Integrations', 'AI-Powered Chatbots', 'Payment & Form Processing', 'Custom API Integrations'] },


//        { title: 'App Development', items: ['iOS & Android Native Apps', 'Cross-Platform Development', 'UI/UX App Design', 'API Integration & Backend Services'] },







//       { title: 'Graphic Design', items: ['Logo & Brand Identity', 'UI/UX Mockups & Prototypes', 'Social Media Graphics', 'Product Photography & Retouching'] },
     
      
      
//       { title: 'Digital Marketing & SEO', items: ['Comprehensive SEO (On-Page, Off-Page, Technical, Local)', 'Google Ads & PPC Management', 'Social Media Marketing & Advertising', 'Content Strategy & Copywriting'] },


//       { title: 'eCommerce & Marketplace Solutions', items: ['Amazon, eBay, Etsy & Walmart Store Setup','Shopify, WooCommerce & Wix Stores', 'Product Listings & Optimization', 'Payment Gateways & Inventory Management', ] },
//     ],
//     'Who We Help': [
//       { title: 'Industries', items: ['E-commerce Brands', 'Startups & SMBs', 'Healthcare', 'Real Estate'] },
//       { title: 'By Business Size', items: ['Solo Entrepreneurs', 'Small Businesses', 'Growing Enterprises', 'Large Corporations'] },
//       { title: 'Solutions', items: ['Launch Your MVP', 'Scale Your Operations', 'Digital Transformation', 'Market Expansion'] },
//     ],
//     'How We Deliver': [
//       { title: 'Resources', items: ['Case Studies', 'Client Testimonials', 'Blog & Insights', 'Whitepapers'] },
//       { title: 'Our Process', items: ['Discovery & Planning', 'Design & Development', 'Testing & Launch'] },
//       { title: 'Technology', items: ['Our Tech Stack', 'Tools We Use', 'Seamless Integrations', 'Enterprise-Grade Security'] },
//     ],
//     'Who We Are': [
//       { title: 'Company', items: ['About DPWebz', 'Our Story', 'Leadership Team', 'Core Values'] },
//       { title: 'Recognition', items: ['Awards & Accolades', 'Certifications', 'Partner Programs', 'Press & Media Coverage'] },
//       { title: 'Connect', items: ['Contact Us', 'Office Locations', 'Support Center', 'Book a Free Consultation'] },
//     ],
//   };

//   const menuVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//     exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -10 },
//     visible: (i: number) => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: i * 0.05, duration: 0.3 },
//     }),
//   };

//   // Main menu navigation (top-level pages)
//   const handleMainMenuClick = (menu: string) => {
//     if (menu === 'What We Do') router.push('/services');
//     else if (menu === 'Who We Are') router.push('/about');
//     else if (menu === 'Who We Help') router.push('/clients');
//     else if (menu === 'How We Deliver') router.push('/process');
//   };

//   // Portfolio navigation
//   const handlePortfolioClick = () => {
//     router.push('/portfolio');
//   };

//   // Contact Us navigation
//   const handleContactUsClick = () => {
//     router.push('/contact-us');
//   };

//   // Sub-menu handlers
//   const handleServicesSubmenuClick = (tabId: string) => {
//     const target = `/services#${tabId}`;
//     if (pathname === '/services') {
//       window.location.hash = tabId;
//     } else {
//       router.push(target);
//     }
//     setOpenMenu(null);
//     setMobileMenuOpen(false);
//   };

//   const handleAboutSubmenuClick = (tabId: string) => {
//     const target = `/about#${tabId}`;
//     if (pathname === '/about') window.location.hash = tabId;
//     else router.push(target);
//     setOpenMenu(null);
//     setMobileMenuOpen(false);
//   };

//   const handleClientsSubmenuClick = (tabId: string) => {
//     const target = `/clients#${tabId}`;
//     if (pathname === '/clients') window.location.hash = tabId;
//     else router.push(target);
//     setOpenMenu(null);
//     setMobileMenuOpen(false);
//   };

//   const handleProcessSubmenuClick = (tabId: string) => {
//     const target = `/process#${tabId}`;
//     if (pathname === '/process') window.location.hash = tabId;
//     else router.push(target);
//     setOpenMenu(null);
//     setMobileMenuOpen(false);
//   };

//   const getAboutTabId = (columnTitle: string, item?: string) => {
//     if (item && aboutItemMapping[item]) return aboutItemMapping[item];
//     return aboutColumnMapping[columnTitle] || 'company';
//   };

//   // Logo click → go to home page
//   const handleLogoClick = () => {
//     router.push('/');
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
//       <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
//         {/* Left: Logo + Theme Toggle */}
//         <div className="flex items-center gap-5 lg:gap-20">
//           {/* Clickable Logo – works perfectly on mobile & desktop */}
//           <motion.button
//             onClick={handleLogoClick}
//             className="p-2 -m-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fec107]"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             aria-label="Go to homepage"
//           >
//             <Image
//               src="/logo.png"
//               alt="DPWebz Logo"
//               width={60}
//               height={60}
//               priority
//             />
//           </motion.button>

//           {/* Theme Toggle (hidden on very small screens) */}
//           <motion.button
//             className="hidden sm:flex items-center justify-start w-12 h-6 rounded-full bg-gray-200 relative pl-1"
//             whileTap={{ scale: 0.95 }}
//             aria-label="Toggle theme"
//           >
//             <motion.div className="w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center">
//               <Sun size={12} className="text-gray-600" />
//             </motion.div>
//           </motion.button>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden lg:flex gap-8 items-center mx-auto">
//           {Object.keys(menuItems).map((menu, index) => (
//             <li
//               key={menu}
//               className="relative group"
//               onMouseEnter={() => setOpenMenu(menu)}
//               onMouseLeave={() => setOpenMenu(null)}
//             >
//               <motion.div
//                 className="flex items-center gap-2 font-medium text-sm hover:text-[#fec107] transition-colors py-2 cursor-pointer"
//                 onClick={() => handleMainMenuClick(menu)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {menu}
//                 <motion.div animate={{ rotate: openMenu === menu ? 180 : 0 }} transition={{ duration: 0.3 }}>
//                   <ChevronDown size={16} />
//                 </motion.div>
//               </motion.div>

//               <AnimatePresence>
//                 {openMenu === menu && (
//                   <motion.div
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     variants={menuVariants}
//                     className={`absolute top-full mt-2 bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-lg w-[80vw] max-w-[800px] ${
//                       index === Object.keys(menuItems).length - 1 ? 'right-0' : 'left-0'
//                     }`}
//                   >
//                     <div className="grid grid-cols-3 gap-8">
//                       {menuItems[menu].map((column, idx) => {
//                         // What We Do
//                         if (menu === 'What We Do') {
//                           const tabId = servicesTabMapping[column.title];
//                           return (
//                             <motion.div key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
//                               <button onClick={() => handleServicesSubmenuClick(tabId)} className="text-left w-full">
//                                 <h3 className="text-[#fec107] text-sm font-semibold uppercase tracking-widest mb-4 hover:text-red-600 transition-colors">
//                                   {column.title}
//                                 </h3>
//                               </button>
//                               <ul className="space-y-0.5">
//                                 {column.items.map((item, iIdx) => (
//                                   <motion.li key={iIdx} custom={iIdx} initial="hidden" animate="visible" variants={itemVariants}>
//                                     <button
//                                       onClick={() => handleServicesSubmenuClick(tabId)}
//                                       className="text-gray-700 hover:text-black text-sm hover:pl-2 transition-all py-1 block w-full text-left"
//                                     >
//                                       {item}
//                                     </button>
//                                   </motion.li>
//                                 ))}
//                               </ul>
//                             </motion.div>
//                           );
//                         }

//                         // Who We Are
//                         if (menu === 'Who We Are') {
//                           const colId = aboutColumnMapping[column.title] || 'company';
//                           return (
//                             <motion.div key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
//                               <button onClick={() => handleAboutSubmenuClick(colId)} className="text-left w-full">
//                                 <h3 className="text-[#fec107] text-sm font-semibold uppercase tracking-widest mb-4 hover:text-teal-600 transition-colors">
//                                   {column.title}
//                                 </h3>
//                               </button>
//                               <ul className="space-y-0.5">
//                                 {column.items.map((item, iIdx) => {
//                                   const itemId = getAboutTabId(column.title, item);
//                                   return (
//                                     <motion.li key={iIdx} custom={iIdx} initial="hidden" animate="visible" variants={itemVariants}>
//                                       <button
//                                         onClick={() => handleAboutSubmenuClick(itemId)}
//                                         className="text-gray-700 hover:text-black text-sm hover:pl-2 transition-all py-1 block w-full text-left"
//                                       >
//                                         {item}
//                                       </button>
//                                     </motion.li>
//                                   );
//                                 })}
//                               </ul>
//                             </motion.div>
//                           );
//                         }

//                         // Who We Help
//                         if (menu === 'Who We Help') {
//                           const colId = clientsColumnMapping[column.title] || 'industries';
//                           return (
//                             <motion.div key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
//                               <button onClick={() => handleClientsSubmenuClick(colId)} className="text-left w-full">
//                                 <h3 className="text-[#fec107] text-sm font-semibold uppercase tracking-widest mb-4 hover:text-purple-600 transition-colors">
//                                   {column.title}
//                                 </h3>
//                               </button>
//                               <ul className="space-y-0.5">
//                                 {column.items.map((item, iIdx) => (
//                                   <motion.li key={iIdx} custom={iIdx} initial="hidden" animate="visible" variants={itemVariants}>
//                                     <button
//                                       onClick={() => handleClientsSubmenuClick(colId)}
//                                       className="text-gray-700 hover:text-black text-sm hover:pl-2 transition-all py-1 block w-full text-left"
//                                     >
//                                       {item}
//                                     </button>
//                                   </motion.li>
//                                 ))}
//                               </ul>
//                             </motion.div>
//                           );
//                         }

//                         // How We Deliver
//                         if (menu === 'How We Deliver') {
//                           const colId = processColumnMapping[column.title] || 'our-process';
//                           return (
//                             <motion.div key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
//                               <button onClick={() => handleProcessSubmenuClick(colId)} className="text-left w-full">
//                                 <h3 className="text-[#fec107] text-sm font-semibold uppercase tracking-widest mb-4 hover:text-indigo-600 transition-colors">
//                                   {column.title}
//                                 </h3>
//                               </button>
//                               <ul className="space-y-0.5">
//                                 {column.items.map((item, iIdx) => (
//                                   <motion.li key={iIdx} custom={iIdx} initial="hidden" animate="visible" variants={itemVariants}>
//                                     <button
//                                       onClick={() => handleProcessSubmenuClick(colId)}
//                                       className="text-gray-700 hover:text-black text-sm hover:pl-2 transition-all py-1 block w-full text-left"
//                                     >
//                                       {item}
//                                     </button>
//                                   </motion.li>
//                                 ))}
//                               </ul>
//                             </motion.div>
//                           );
//                         }

//                         return null;
//                       })}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Right Side: CTAs + Language */}
//         <div className="hidden lg:flex items-center gap-4">
//           <motion.button
//             onClick={handleContactUsClick}
//             className="bg-[#fec107] text-black px-6 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl hover:bg-[#eab308]"
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Let's Talk Business
//           </motion.button>
//           <motion.button
//             onClick={handlePortfolioClick}
//             className="bg-[#fec107] text-black px-6 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl hover:bg-[#eab308]"
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Portfolio
//           </motion.button>

//           {/* Desktop Language Dropdown */}
//           <div className="relative" onMouseEnter={() => setLanguageDropdownOpen(true)} onMouseLeave={() => setLanguageDropdownOpen(false)}>
//             <motion.button
//               className="flex items-center gap-2 font-medium text-sm hover:text-[#fec107] py-2"
//               whileHover={{ scale: 1.05 }}
//             >
//               {selectedLanguage}
//               <motion.div animate={{ rotate: languageDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
//                 <ChevronDown size={16} />
//               </motion.div>
//             </motion.button>

//             <AnimatePresence>
//               {languageDropdownOpen && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   className="absolute top-full right-0 mt-2 bg-gray-50 border border-gray-200 rounded-lg shadow-lg min-w-[180px] overflow-hidden"
//                 >
//                   {languages.map((lang) => (
//                     <motion.button
//                       key={lang}
//                       onClick={() => {
//                         setSelectedLanguage(lang);
//                         setLanguageDropdownOpen(false);
//                       }}
//                       className={`w-full text-left px-4 py-2 text-sm transition-colors ${
//                         selectedLanguage === lang ? 'bg-[#fec107] text-black font-semibold' : 'text-gray-700 hover:bg-gray-100'
//                       }`}
//                       whileHover={{ x: 4 }}
//                     >
//                       {lang}
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Mobile Right Side: Language + Hamburger */}
//         <div className="lg:hidden flex items-center gap-3">
//           {/* Mobile Language */}
//           <div className="relative">
//             <motion.button
//               onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
//               className="flex items-center gap-1 text-sm font-medium"
//               whileTap={{ scale: 0.95 }}
//             >
//               {selectedLanguage.split(' ')[0]}
//               <ChevronDown size={14} className={`transition-transform duration-300 ${languageDropdownOpen ? 'rotate-180' : ''}`} />
//             </motion.button>

//             <AnimatePresence>
//               {languageDropdownOpen && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   className="absolute top-full right-0 mt-2 bg-gray-50 border border-gray-200 rounded-lg shadow-lg min-w-[150px] z-50"
//                 >
//                   {languages.map((lang) => (
//                     <button
//                       key={lang}
//                       onClick={() => {
//                         setSelectedLanguage(lang);
//                         setLanguageDropdownOpen(false);
//                       }}
//                       className={`w-full text-left px-3 py-2 text-sm ${
//                         selectedLanguage === lang ? 'bg-[#fec107] text-black font-semibold' : 'text-gray-700 hover:bg-gray-100'
//                       }`}
//                     >
//                       {lang}
//                     </button>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Hamburger Menu */}
//           <motion.button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             whileTap={{ scale: 0.95 }}
//             aria-label="Toggle mobile menu"
//           >
//             <div className="flex flex-col gap-1.5">
//               <motion.span
//                 className="w-6 h-0.5 bg-black rounded-full block"
//                 animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <motion.span
//                 className="w-6 h-0.5 bg-black rounded-full block"
//                 animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <motion.span
//                 className="w-6 h-0.5 bg-black rounded-full block"
//                 animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </div>
//           </motion.button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden bg-gray-50 border-t border-gray-200"
//           >
//             <div className="p-6 space-y-6">
//               {Object.keys(menuItems).map((menu) => (
//                 <div key={menu}>
//                   <button
//                     onClick={() => {
//                       handleMainMenuClick(menu);
//                       setOpenMenu(openMenu === menu ? null : menu);
//                     }}
//                     className="w-full text-left font-medium flex items-center justify-between py-3 hover:text-[#fec107] transition-colors"
//                   >
//                     {menu}
//                     <ChevronDown size={16} className={`transition-transform duration-300 ${openMenu === menu ? 'rotate-180' : ''}`} />
//                   </button>

//                   <AnimatePresence>
//                     {openMenu === menu && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pl-4 mt-2 space-y-4"
//                       >
//                         {menuItems[menu].map((column, idx) => {
//                           if (menu === 'What We Do') {
//                             const tabId = servicesTabMapping[column.title];
//                             return (
//                               <div key={idx} className="space-y-0.5">
//                                 <button onClick={() => handleServicesSubmenuClick(tabId)} className="block text-left">
//                                   <p className="text-[#fec107] text-xs font-semibold uppercase tracking-widest mb-2">{column.title}</p>
//                                 </button>
//                                 {column.items.map((item) => (
//                                   <button
//                                     key={item}
//                                     onClick={() => handleServicesSubmenuClick(tabId)}
//                                     className="block text-gray-700 hover:text-black text-sm py-1 text-left w-full"
//                                   >
//                                     {item}
//                                   </button>
//                                 ))}
//                               </div>
//                             );
//                           }
//                           if (menu === 'Who We Are') {
//                             const colId = aboutColumnMapping[column.title] || 'company';
//                             return (
//                               <div key={idx} className="space-y-0.5">
//                                 <button onClick={() => handleAboutSubmenuClick(colId)} className="block text-left">
//                                   <p className="text-[#fec107] text-xs font-semibold uppercase tracking-widest mb-2">{column.title}</p>
//                                 </button>
//                                 {column.items.map((item) => {
//                                   const itemId = getAboutTabId(column.title, item);
//                                   return (
//                                     <button
//                                       key={item}
//                                       onClick={() => handleAboutSubmenuClick(itemId)}
//                                       className="block text-gray-700 hover:text-black text-sm py-1 text-left w-full"
//                                     >
//                                       {item}
//                                     </button>
//                                   );
//                                 })}
//                               </div>
//                             );
//                           }
//                           if (menu === 'Who We Help') {
//                             const colId = clientsColumnMapping[column.title] || 'industries';
//                             return (
//                               <div key={idx} className="space-y-0.5">
//                                 <button onClick={() => handleClientsSubmenuClick(colId)} className="block text-left">
//                                   <p className="text-[#fec107] text-xs font-semibold uppercase tracking-widest mb-2">{column.title}</p>
//                                 </button>
//                                 {column.items.map((item) => (
//                                   <button
//                                     key={item}
//                                     onClick={() => handleClientsSubmenuClick(colId)}
//                                     className="block text-gray-700 hover:text-black text-sm py-1 text-left w-full"
//                                   >
//                                     {item}
//                                   </button>
//                                 ))}
//                               </div>
//                             );
//                           }
//                           if (menu === 'How We Deliver') {
//                             const colId = processColumnMapping[column.title] || 'our-process';
//                             return (
//                               <div key={idx} className="space-y-0.5">
//                                 <button onClick={() => handleProcessSubmenuClick(colId)} className="block text-left">
//                                   <p className="text-[#fec107] text-xs font-semibold uppercase tracking-widest mb-2">{column.title}</p>
//                                 </button>
//                                 {column.items.map((item) => (
//                                   <button
//                                     key={item}
//                                     onClick={() => handleProcessSubmenuClick(colId)}
//                                     className="block text-gray-700 hover:text-black text-sm py-1 text-left w-full"
//                                   >
//                                     {item}
//                                   </button>
//                                 ))}
//                               </div>
//                             );
//                           }
//                           return null;
//                         })}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}

//               <div className="pt-4 space-y-3">
//                 <motion.button
//                   onClick={handleContactUsClick}
//                   className="block w-full bg-[#fec107] text-black px-6 py-3 rounded-full font-semibold text-center hover:bg-[#eab308]"
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Let's Talk Business
//                 </motion.button>
//                 <motion.button
//                   onClick={handlePortfolioClick}
//                   className="block w-full bg-[#fec107] text-black px-6 py-3 rounded-full font-semibold text-center hover:bg-[#eab308]"
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Portfolio
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }


'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sun } from 'lucide-react';
import Image from 'next/image';

interface MenuItem {
  title: string;
  items: string[];
}

interface MenuItems {
  [key: string]: MenuItem[];
}

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Global');
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState<boolean>(false);

  const languages = ['Global', 'MENA', 'KSA - Arabic', 'KSA - English', 'North America', 'Europe & UK'];

  // Mapping for sub-menu hash links
  const servicesTabMapping: { [key: string]: string } = {
    'Graphic Design': 'graphic-design',
    'Web Design & Development': 'web-development',
    'App Development': 'app-development',
    'Automation & AI Services': 'automation-ai',
    'Digital Marketing & SEO': 'digital-marketing',
    'eCommerce & Marketplace Solutions': 'ecommerce',
  };

  const aboutColumnMapping: { [key: string]: string } = {
    'Company': 'company',
    'Recognition': 'recognition',
    'Connect': 'connect',
  };

  const aboutItemMapping: { [key: string]: string } = {
    'Leadership Team': 'leadership',
  };

  const clientsColumnMapping: { [key: string]: string } = {
    'Industries': 'industries',
    'By Business Size': 'business-size',
    'Solutions': 'solutions',
  };

  const processColumnMapping: { [key: string]: string } = {
    'Resources': 'resources',
    'Our Process': 'our-process',
    'Technology': 'technology',
  };

  const menuItems: MenuItems = {
    'What We Do': [
       { title: 'Web Design & Development', items: ['Custom Websites (MERN / Laravel)','SaaS Website Development', 'CMS Development & Integration', 'WordPress Development', 'WooCommerce Development', ] },
       { title: 'Automation & AI Services', items: ['AI Agents & Hyper-Automation',  'AI Workflow Automation',' Conversational AI Systems', ' AI Data & Process Automation','Decision Intelligence & Predictive Systems'] },


       { title: 'App Development', items: ['iOS & Android Native Apps', 'Cross-Platform Development', 'UI/UX App Design', 'API Integration & Backend Services'] },







      { title: 'Graphic Design', items: ['Logo & Brand Identity', 'UI/UX Mockups & Prototypes', 'Social Media Graphics', 'Product Photography & Retouching'] },
     
      
      
      { title: 'Digital Marketing & SEO', items: ['Comprehensive SEO (On-Page, Off-Page, Technical, Local)', 'Google Ads & PPC Management', 'Social Media Marketing & Advertising', 'Content Strategy & Copywriting'] },


      { title: 'eCommerce & Marketplace Solutions', items: ['Amazon, eBay, Etsy & Walmart Store Setup','Shopify, WooCommerce & Wix Stores', 'Product Listings & Optimization', 'Payment Gateways & Inventory Management', ] },
    ],
    'Who We Help': [
      { title: 'Industries', items: ['E-commerce Brands', 'Startups & SMBs', 'Healthcare', 'Real Estate'] },
      { title: 'By Business Size', items: ['Solo Entrepreneurs', 'Small Businesses', 'Growing Enterprises', 'Large Corporations'] },
      { title: 'Solutions', items: ['Launch Your MVP', 'Scale Your Operations', 'Digital Transformation', 'Market Expansion'] },
    ],
    'How We Deliver': [
      { title: 'Resources', items: ['Case Studies', 'Client Testimonials', 'Blog & Insights', 'Whitepapers'] },
      { title: 'Our Process', items: ['Discovery & Planning', 'Design & Development', 'Testing & Launch'] },
      { title: 'Technology', items: ['Our Tech Stack', 'Tools We Use', 'Seamless Integrations', 'Enterprise-Grade Security'] },
    ],
    'Who We Are': [
      { title: 'Company', items: ['About DPWebz', 'Our Story', 'Leadership Team', 'Core Values'] },
      { title: 'Recognition', items: ['Awards & Accolades', 'Certifications', 'Partner Programs', 'Press & Media Coverage'] },
      { title: 'Connect', items: ['Contact Us', 'Office Locations', 'Support Center', 'Book a Free Consultation'] },
    ],
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  // Main menu navigation (top-level pages)
  const handleMainMenuClick = (menu: string) => {
    if (menu === 'What We Do') router.push('/services');
    else if (menu === 'Who We Are') router.push('/about');
    else if (menu === 'Who We Help') router.push('/clients');
    else if (menu === 'How We Deliver') router.push('/process');
  };

  // Portfolio navigation
  const handlePortfolioClick = () => {
    router.push('/portfolio');
  };

  // Contact Us navigation
  const handleContactUsClick = () => {
    router.push('/contact-us');
  };

  // Sub-menu handlers
  const handleServicesSubmenuClick = (tabId: string) => {
    const target = `/services#${tabId}`;
    if (pathname === '/services') {
      window.location.hash = tabId;
    } else {
      router.push(target);
    }
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  const handleAboutSubmenuClick = (tabId: string) => {
    const target = `/about#${tabId}`;
    if (pathname === '/about') window.location.hash = tabId;
    else router.push(target);
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  const handleClientsSubmenuClick = (tabId: string) => {
    const target = `/clients#${tabId}`;
    if (pathname === '/clients') window.location.hash = tabId;
    else router.push(target);
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  const handleProcessSubmenuClick = (tabId: string) => {
    const target = `/process#${tabId}`;
    if (pathname === '/process') window.location.hash = tabId;
    else router.push(target);
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  const getAboutTabId = (columnTitle: string, item?: string) => {
    if (item && aboutItemMapping[item]) return aboutItemMapping[item];
    return aboutColumnMapping[columnTitle] || 'company';
  };

  // Logo click → go to home page
  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Left: Logo + Theme Toggle */}
        <div className="flex items-center gap-5 lg:gap-20">
          {/* Clickable Logo – works perfectly on mobile & desktop */}
          <motion.button
            onClick={handleLogoClick}
            className="p-2 -m-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fec107]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to homepage"
          >
            <Image
              src="/logo.png"
              alt="DPWebz Logo"
              width={60}
              height={60}
              priority
            />
          </motion.button>

          {/* Theme Toggle (hidden on very small screens) */}
          <motion.button
            className="hidden sm:flex items-center justify-start w-12 h-6 rounded-full bg-gray-200 relative pl-1"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            <motion.div className="w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center">
              <Sun size={12} className="text-gray-600" />
            </motion.div>
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8 items-center mx-auto">
          {Object.keys(menuItems).map((menu, index) => (
            <li
              key={menu}
              className="relative group"
              onMouseEnter={() => setOpenMenu(menu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <motion.div
                className="flex items-center gap-2 font-medium text-sm hover:text-[#fec107] transition-colors py-2 cursor-pointer"
                onClick={() => handleMainMenuClick(menu)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {menu}
                <motion.div animate={{ rotate: openMenu === menu ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={16} />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {openMenu === menu && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    className={`absolute top-full mt-2 bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-lg w-[80vw] max-w-[800px] ${
                      index === Object.keys(menuItems).length - 1 ? 'right-0' : 'left-0'
                    }`}
                  >
                    <div className="grid grid-cols-3 gap-8">
                      {menuItems[menu].map((column, idx) => {
                        // What We Do
                        if (menu === 'What We Do') {
                          const tabId = servicesTabMapping[column.title];
                          return (
                            <motion.div key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
                              <button onClick={() => handleServicesSubmenuClick(tabId)} className="text-left w-full">
                                <h3 className="text-[#fec107] text-sm font-semibold uppercase tracking-widest mb-4 hover:text-red-600 transition-colors">
                                  {column.title}
                                </h3>
                              </button>
                              <ul className="space-y-0.5">
                                {column.items.map((item, iIdx) => (
                                  <motion.li key={iIdx} custom={iIdx} initial="hidden" animate="visible" variants={itemVariants}>
                                    <button
                                      onClick={() => handleServicesSubmenuClick(tabId)}
                                      className="flex items-center gap-2 w-full text-left py-1 transition-colors"
                                    >
                                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#fec107] rounded-full"></div>
                                      <span className="text-gray-700 hover:text-black text-sm hover:pl-1 transition-all">
                                        {item}
                                      </span>
                                    </button>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          );
                        }

                        // Who We Are
                        if (menu === 'Who We Are') {
                          const colId = aboutColumnMapping[column.title] || 'company';
                          return (
                            <motion.div key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
                              <button onClick={() => handleAboutSubmenuClick(colId)} className="text-left w-full">
                                <h3 className="text-[#fec107] text-sm font-semibold uppercase tracking-widest mb-4 hover:text-teal-600 transition-colors">
                                  {column.title}
                                </h3>
                              </button>
                              <ul className="space-y-0.5">
                                {column.items.map((item, iIdx) => {
                                  const itemId = getAboutTabId(column.title, item);
                                  return (
                                    <motion.li key={iIdx} custom={iIdx} initial="hidden" animate="visible" variants={itemVariants}>
                                      <button
                                        onClick={() => handleAboutSubmenuClick(itemId)}
                                        className="flex items-center gap-2 w-full text-left py-1 transition-colors"
                                      >
                                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#fec107] rounded-full"></div>
                                        <span className="text-gray-700 hover:text-black text-sm hover:pl-1 transition-all">
                                          {item}
                                        </span>
                                      </button>
                                    </motion.li>
                                  );
                                })}
                              </ul>
                            </motion.div>
                          );
                        }

                        // Who We Help
                        if (menu === 'Who We Help') {
                          const colId = clientsColumnMapping[column.title] || 'industries';
                          return (
                            <motion.div key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
                              <button onClick={() => handleClientsSubmenuClick(colId)} className="text-left w-full">
                                <h3 className="text-[#fec107] text-sm font-semibold uppercase tracking-widest mb-4 hover:text-purple-600 transition-colors">
                                  {column.title}
                                </h3>
                              </button>
                              <ul className="space-y-0.5">
                                {column.items.map((item, iIdx) => (
                                  <motion.li key={iIdx} custom={iIdx} initial="hidden" animate="visible" variants={itemVariants}>
                                    <button
                                      onClick={() => handleClientsSubmenuClick(colId)}
                                      className="flex items-center gap-2 w-full text-left py-1 transition-colors"
                                    >
                                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#fec107] rounded-full"></div>
                                      <span className="text-gray-700 hover:text-black text-sm hover:pl-1 transition-all">
                                        {item}
                                      </span>
                                    </button>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          );
                        }

                        // How We Deliver
                        if (menu === 'How We Deliver') {
                          const colId = processColumnMapping[column.title] || 'our-process';
                          return (
                            <motion.div key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
                              <button onClick={() => handleProcessSubmenuClick(colId)} className="text-left w-full">
                                <h3 className="text-[#fec107] text-sm font-semibold uppercase tracking-widest mb-4 hover:text-indigo-600 transition-colors">
                                  {column.title}
                                </h3>
                              </button>
                              <ul className="space-y-0.5">
                                {column.items.map((item, iIdx) => (
                                  <motion.li key={iIdx} custom={iIdx} initial="hidden" animate="visible" variants={itemVariants}>
                                    <button
                                      onClick={() => handleProcessSubmenuClick(colId)}
                                      className="flex items-center gap-2 w-full text-left py-1 transition-colors"
                                    >
                                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#fec107] rounded-full"></div>
                                      <span className="text-gray-700 hover:text-black text-sm hover:pl-1 transition-all">
                                        {item}
                                      </span>
                                    </button>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          );
                        }

                        return null;
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side: CTAs + Language */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.button
            onClick={handleContactUsClick}
            className="bg-[#fec107] text-black px-6 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl hover:bg-[#eab308]"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Talk Business
          </motion.button>
          <motion.button
            onClick={handlePortfolioClick}
            className="bg-[#fec107] text-black px-6 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl hover:bg-[#eab308]"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.button>

          {/* Desktop Language Dropdown */}
          <div className="relative" onMouseEnter={() => setLanguageDropdownOpen(true)} onMouseLeave={() => setLanguageDropdownOpen(false)}>
            <motion.button
              className="flex items-center gap-2 font-medium text-sm hover:text-[#fec107] py-2"
              whileHover={{ scale: 1.05 }}
            >
              {selectedLanguage}
              <motion.div animate={{ rotate: languageDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={16} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {languageDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 bg-gray-50 border border-gray-200 rounded-lg shadow-lg min-w-[180px] overflow-hidden"
                >
                  {languages.map((lang) => (
                    <motion.button
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setLanguageDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        selectedLanguage === lang ? 'bg-[#fec107] text-black font-semibold' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      {lang}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Right Side: Language + Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Mobile Language */}
          <div className="relative">
            <motion.button
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium"
              whileTap={{ scale: 0.95 }}
            >
              {selectedLanguage.split(' ')[0]}
              <ChevronDown size={14} className={`transition-transform duration-300 ${languageDropdownOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
              {languageDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 bg-gray-50 border border-gray-200 rounded-lg shadow-lg min-w-[150px] z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setLanguageDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm ${
                        selectedLanguage === lang ? 'bg-[#fec107] text-black font-semibold' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hamburger Menu */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                className="w-6 h-0.5 bg-black rounded-full block"
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-black rounded-full block"
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-black rounded-full block"
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-50 border-t border-gray-200"
          >
            <div className="p-6 space-y-6">
              {Object.keys(menuItems).map((menu) => (
                <div key={menu}>
                  <button
                    onClick={() => {
                      handleMainMenuClick(menu);
                      setOpenMenu(openMenu === menu ? null : menu);
                    }}
                    className="w-full text-left font-medium flex items-center justify-between py-3 hover:text-[#fec107] transition-colors"
                  >
                    {menu}
                    <ChevronDown size={16} className={`transition-transform duration-300 ${openMenu === menu ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {openMenu === menu && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 mt-2 space-y-4"
                      >
                        {menuItems[menu].map((column, idx) => {
                          if (menu === 'What We Do') {
                            const tabId = servicesTabMapping[column.title];
                            return (
                              <div key={idx} className="space-y-0.5">
                                <button onClick={() => handleServicesSubmenuClick(tabId)} className="block text-left">
                                  <p className="text-[#fec107] text-xs font-semibold uppercase tracking-widest mb-2">{column.title}</p>
                                </button>
                                {column.items.map((item) => (
                                  <button
                                    key={item}
                                    onClick={() => handleServicesSubmenuClick(tabId)}
                                    className="flex items-center gap-2 text-gray-700 hover:text-black text-sm py-1 text-left w-full transition-colors"
                                  >
                                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#fec107] rounded-full"></div>
                                    <span className="hover:pl-1 transition-all">
                                      {item}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            );
                          }
                          if (menu === 'Who We Are') {
                            const colId = aboutColumnMapping[column.title] || 'company';
                            return (
                              <div key={idx} className="space-y-0.5">
                                <button onClick={() => handleAboutSubmenuClick(colId)} className="block text-left">
                                  <p className="text-[#fec107] text-xs font-semibold uppercase tracking-widest mb-2">{column.title}</p>
                                </button>
                                {column.items.map((item) => {
                                  const itemId = getAboutTabId(column.title, item);
                                  return (
                                    <button
                                      key={item}
                                      onClick={() => handleAboutSubmenuClick(itemId)}
                                      className="flex items-center gap-2 text-gray-700 hover:text-black text-sm py-1 text-left w-full transition-colors"
                                    >
                                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#fec107] rounded-full"></div>
                                      <span className="hover:pl-1 transition-all">
                                        {item}
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>
                            );
                          }
                          if (menu === 'Who We Help') {
                            const colId = clientsColumnMapping[column.title] || 'industries';
                            return (
                              <div key={idx} className="space-y-0.5">
                                <button onClick={() => handleClientsSubmenuClick(colId)} className="block text-left">
                                  <p className="text-[#fec107] text-xs font-semibold uppercase tracking-widest mb-2">{column.title}</p>
                                </button>
                                {column.items.map((item) => (
                                  <button
                                    key={item}
                                    onClick={() => handleClientsSubmenuClick(colId)}
                                    className="flex items-center gap-2 text-gray-700 hover:text-black text-sm py-1 text-left w-full transition-colors"
                                  >
                                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#fec107] rounded-full"></div>
                                    <span className="hover:pl-1 transition-all">
                                      {item}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            );
                          }
                          if (menu === 'How We Deliver') {
                            const colId = processColumnMapping[column.title] || 'our-process';
                            return (
                              <div key={idx} className="space-y-0.5">
                                <button onClick={() => handleProcessSubmenuClick(colId)} className="block text-left">
                                  <p className="text-[#fec107] text-xs font-semibold uppercase tracking-widest mb-2">{column.title}</p>
                                </button>
                                {column.items.map((item) => (
                                  <button
                                    key={item}
                                    onClick={() => handleProcessSubmenuClick(colId)}
                                    className="flex items-center gap-2 text-gray-700 hover:text-black text-sm py-1 text-left w-full transition-colors"
                                  >
                                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#fec107] rounded-full"></div>
                                    <span className="hover:pl-1 transition-all">
                                      {item}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            );
                          }
                          return null;
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-4 space-y-3">
                <motion.button
                  onClick={handleContactUsClick}
                  className="block w-full bg-[#fec107] text-black px-6 py-3 rounded-full font-semibold text-center hover:bg-[#eab308]"
                  whileTap={{ scale: 0.95 }}
                >
                  Let&apos;s Talk Business
                </motion.button>
                <motion.button
                  onClick={handlePortfolioClick}
                  className="block w-full bg-[#fec107] text-black px-6 py-3 rounded-full font-semibold text-center hover:bg-[#eab308]"
                  whileTap={{ scale: 0.95 }}
                >
                  Portfolio
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}