'use client';

import { useState, useEffect } from "react";
import HeroTextBlock from "./HeroTextBlock";
import { textBlocks } from "./hero.data";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % textBlocks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        >
          <source src="https://videos.pexels.com/video-files/31404084/13398596_1440_2560_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3211112/3211112-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="flex-1 flex flex-col items-start justify-center px-8 gap-8 max-w-5xl">

          {/* Reusable text block */}
          <HeroTextBlock block={textBlocks[current]} index={current} />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white text-black font-bold rounded-lg text-lg hover:shadow-xl hover:shadow-white/20 transition-all flex items-center justify-center gap-2"
            >
              Let's Talk Business
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#careers"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-transparent text-white font-bold rounded-lg text-lg border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Explore Careers
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// 'use client';

// import { useState, useEffect } from "react";
// import HeroTextBlock from "./HeroTextBlock";
// import { textBlocks } from "./hero.data";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Play } from "lucide-react";

// export default function HeroSection(): JSX.Element {
//   const [current, setCurrent] = useState<number>(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % textBlocks.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const images = [
    
//     'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
//     'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
//     'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1920&q=80',    
//     'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80',
//     'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80'
//   ];

//   return (
//     <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">

//       {/* Background Slider */}
//       <div className="absolute inset-0 w-full h-full">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <img
//               src={images[current]}
//               alt="Hero"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </AnimatePresence>
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
//         <div className="flex-1 flex flex-col items-start justify-center px-8 gap-8 max-w-5xl">

//           {/* Reusable text block */}
//           <HeroTextBlock block={textBlocks[current]} index={current} />

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4"
//           >
//             <motion.a
//               href="#contact"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group px-8 py-4 bg-white text-black font-bold rounded-lg text-lg hover:shadow-xl hover:shadow-white/20 transition-all flex items-center justify-center gap-2"
//             >
//               Let's Talk Business
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </motion.a>

//             <motion.a
//               href="#careers"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group px-8 py-4 bg-transparent text-white font-bold rounded-lg text-lg border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
//             >
//               <Play className="w-5 h-5" />
//               Explore Careers
//             </motion.a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
