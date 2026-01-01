import { Variants } from 'framer-motion';

export const titleVariants: Variants = {
  hidden: { opacity: 0, x: -50, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: {
    opacity: 0,
    x: 50,
    filter: "blur(8px)",
    transition: { duration: 0.4, ease: [0.55, 0.085, 0.68, 0.53] }
  }
};

export const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
};

export const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } }
};


