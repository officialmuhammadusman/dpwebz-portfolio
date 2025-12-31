import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  show: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ show }) => {
  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        {/* Main spinner container */}
        <div className="relative w-32 h-32">
         
          {/* Outer rotating rings - Yellow */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-400 border-r-yellow-500"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
         
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-transparent border-b-yellow-500 border-l-yellow-400"
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border-[3px] border-transparent border-t-yellow-300 border-b-yellow-600"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {/* Center glowing yellow core */}
          <motion.div
            className="absolute inset-8 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-2xl"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 0 30px rgba(251, 191, 36, 0.6)',
                '0 0 50px rgba(251, 191, 36, 0.9)',
                '0 0 30px rgba(251, 191, 36, 0.6)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Inner black circle */}
            <div className="absolute inset-2 rounded-full bg-black shadow-inner" />
          </motion.div>
          {/* Logo elements in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Yellow dot */}
            <motion.div
              className="absolute w-3.5 h-3.5 bg-yellow-400 rounded-full shadow-lg"
              style={{ top: '38%', left: '40%' }}
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  '0 0 10px rgba(251, 191, 36, 0.5)',
                  '0 0 20px rgba(251, 191, 36, 0.8)',
                  '0 0 10px rgba(251, 191, 36, 0.5)',
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Yellow dots */}
            <div className="flex gap-1.5 absolute" style={{ top: '42%', left: '50%' }}>
              <motion.div
                className="w-2 h-2 bg-yellow-400 rounded-full shadow-md"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                  boxShadow: [
                    '0 0 5px rgba(251, 191, 36, 0.5)',
                    '0 0 15px rgba(251, 191, 36, 0.8)',
                    '0 0 5px rgba(251, 191, 36, 0.5)',
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 bg-yellow-500 rounded-full shadow-md"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                  boxShadow: [
                    '0 0 5px rgba(251, 191, 36, 0.5)',
                    '0 0 15px rgba(251, 191, 36, 0.8)',
                    '0 0 5px rgba(251, 191, 36, 0.5)',
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              />
            </div>
            {/* Yellow square */}
            <motion.div
              className="absolute w-2.5 h-2.5 bg-yellow-400 shadow-lg"
              style={{ bottom: '38%', left: '30%' }}
              animate={{
                rotate: [0, 360],
                boxShadow: [
                  '0 0 10px rgba(251, 191, 36, 0.5)',
                  '0 0 20px rgba(251, 191, 36, 0.8)',
                  '0 0 10px rgba(251, 191, 36, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
          {/* Orbiting yellow elements */}
          {[0, 90, 180, 270].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-2.5 h-2.5 -ml-1.25 -mt-1.25"
              animate={{ rotate: [angle, angle + 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
            >
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg"
                style={{
                  transform: 'translateX(56px)',
                  boxShadow: '0 0 10px rgba(251, 191, 36, 0.6)',
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  boxShadow: [
                    '0 0 10px rgba(251, 191, 36, 0.6)',
                    '0 0 20px rgba(251, 191, 36, 0.9)',
                    '0 0 10px rgba(251, 191, 36, 0.6)',
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
          {/* Ambient yellow glow */}
          <motion.div
            className="absolute -inset-6 rounded-full bg-yellow-500/30 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        {/* Professional loading text */}
        <motion.div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h3
            className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            DijWebz
          </motion.h3>
          
         
          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-yellow-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    '0 0 5px rgba(251, 191, 36, 0.5)',
                    '0 0 15px rgba(251, 191, 36, 0.9)',
                    '0 0 5px rgba(251, 191, 36, 0.5)',
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;