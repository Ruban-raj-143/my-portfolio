import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices that don't prefer reduced motion
    const pointerQuery = window.matchMedia('(pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const checkCapabilities = () => {
      setIsFinePointer(pointerQuery.matches && !reducedMotionQuery.matches);
    };

    checkCapabilities();
    pointerQuery.addEventListener('change', checkCapabilities);
    reducedMotionQuery.addEventListener('change', checkCapabilities);

    if (!pointerQuery.matches || reducedMotionQuery.matches) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = Boolean(
        target.closest('a, button, input, textarea, [role="button"], .cursor-pointer, [data-interactive]')
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      pointerQuery.removeEventListener('change', checkCapabilities);
      reducedMotionQuery.removeEventListener('change', checkCapabilities);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer subtle follower ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/40 bg-cyan-400/5 backdrop-blur-[1px] pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          borderColor: isHovered ? 'rgba(6, 182, 212, 0.8)' : 'rgba(6, 182, 212, 0.35)',
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.12)' : 'rgba(6, 182, 212, 0.03)',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-400 pointer-events-none"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
          mass: 0.2,
        }}
      />
    </div>
  );
}
