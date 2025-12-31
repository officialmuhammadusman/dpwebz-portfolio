'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface DpWebzCursorProps {
  disabled?: boolean; // Optional: Disable on mobile/touch
}

const DpWebzCursor: React.FC<DpWebzCursorProps> = ({ disabled = false }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const interactiveRefs = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    if (disabled) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Handle hover states
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Select interactive elements (a, button, input, etc.)
    interactiveRefs.current = document.querySelectorAll('a, button, input, [role="button"], .interactive');
    interactiveRefs.current.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (interactiveRefs.current) {
        interactiveRefs.current.forEach((el) => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      }
    };
  }, [cursorX, cursorY, disabled]);

  if (disabled) return null;

  return (
    <>
      {/* Hide default cursor globally */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      {/* Main cursor - follows immediately */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          {/* Center dot */}
          <motion.div
            className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
            animate={{
              scale: isClicking ? 0.5 : 1,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </motion.div>
      {/* Outer ring - follows with spring delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Outer yellow ring */}
          <motion.div
            className="w-6 h-6 border-2 border-yellow-400 rounded-full"
            animate={{
              scale: isClicking ? 0.8 : 1,
              borderWidth: isClicking ? '3px' : '2px',
            }}
            transition={{ duration: 0.1 }}
          />
          {/* Yellow glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md"
            animate={{
              scale: isHovering ? 1.2 : 1,
              opacity: isHovering ? 0.6 : 0.3,
            }}
          />
        </motion.div>
      </motion.div>
      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: useSpring(cursorX, { damping: 30, stiffness: 200, mass: 0.8 }),
          y: useSpring(cursorY, { damping: 30, stiffness: 200, mass: 0.8 }),
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 border border-yellow-500/40 rounded-full" />
        </div>
      </motion.div>
    </>
  );
};

export default DpWebzCursor;
