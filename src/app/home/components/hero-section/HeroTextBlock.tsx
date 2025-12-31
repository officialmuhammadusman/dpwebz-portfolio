'use client';

import { motion, AnimatePresence } from "framer-motion";
import { titleVariants, subtitleVariants } from "./hero.animations";
import { TextBlock } from "./hero.data";

interface Props {
  block: TextBlock;
  index: number;
}

export default function HeroTextBlock({ block, index }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="space-y-8"
      >
        {/* Title */}
        <div className="space-y-2">
          {block.title.map((line, i) => (
            <motion.h1
              key={i}
              variants={titleVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              {i === block.title.length - 1 ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {line}
                </span>
              ) : (
                <span className="text-white">{line}</span>
              )}
            </motion.h1>
          ))}
        </div>

        {/* Subtitle */}
        <motion.div variants={subtitleVariants} className="space-y-2">
          {block.subtitle.map((line, i) => (
            <p key={i} className="text-base md:text-lg lg:text-xl text-gray-200">
              {line}
            </p>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
