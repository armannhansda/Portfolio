'use client';

import { motion } from 'framer-motion';

export function TopoBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Pixel art landscape image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/pixel-landscape.png)' }}
      />

      {/* Dark overlay to make content readable */}
      <div className="absolute inset-0 bg-[#0A0A0A]/60" />

      {/* Scanline CRT effect */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.15) 2px,
            rgba(0,0,0,0.15) 4px
          )`,
        }}
      />

      {/* Subtle pixel grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '8px 8px',
        }}
      />

      {/* Pixel star particles */}
      <motion.div
        className="absolute"
        style={{ left: '25%', top: '8%' }}
        animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="8" height="8" viewBox="0 0 4 4" style={{ imageRendering: 'pixelated' }}>
          <rect x="1" y="0" width="2" height="4" fill="#FFD700" opacity="0.6" />
          <rect x="0" y="1" width="4" height="2" fill="#FFD700" opacity="0.6" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute hidden sm:block"
        style={{ right: '25%', top: '30%' }}
        animate={{ opacity: [0.15, 0.55, 0.15], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="8" height="8" viewBox="0 0 4 4" style={{ imageRendering: 'pixelated' }}>
          <rect x="1" y="0" width="2" height="4" fill="#FFD700" opacity="0.5" />
          <rect x="0" y="1" width="4" height="2" fill="#FFD700" opacity="0.5" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute"
        style={{ left: '70%', bottom: '30%' }}
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <svg width="8" height="8" viewBox="0 0 4 4" style={{ imageRendering: 'pixelated' }}>
          <rect x="1" y="0" width="2" height="4" fill="#FFD700" opacity="0.4" />
          <rect x="0" y="1" width="4" height="2" fill="#FFD700" opacity="0.4" />
        </svg>
      </motion.div>

      {/* Warm ambient glow */}
      <motion.div
        className="absolute w-[300px] sm:w-[400px] h-[200px] sm:h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,107,53,0.04) 0%, transparent 70%)',
          left: '5%',
          top: '10%',
        }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
