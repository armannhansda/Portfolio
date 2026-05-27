'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  onNavigate?: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="h-full flex items-center justify-center relative scanlines px-4">
      <div className="text-center max-w-lg mx-auto">
        {/* Pixel art title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-3 sm:mb-4"
        >
          <div className="inline-block bg-[#4A7C3F] border-3 sm:border-4 border-[#1A1A1A] px-4 sm:px-6 py-2 sm:py-3 shadow-[4px_4px_0_0_#1A1A1A] sm:shadow-[6px_6px_0_0_#1A1A1A]">
            <span className="pixel-text text-sm sm:text-lg md:text-xl text-[#F5F0DC] tracking-wider">HELLO!</span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-4 sm:mb-6"
        >
          <p className="pixel-text text-[8px] sm:text-[10px] md:text-xs text-[#FFD700] tracking-wider mb-1.5 sm:mb-2">BUILDING SCALABLE SYSTEMS</p>
          <p className="pixel-text text-[8px] sm:text-[10px] md:text-xs text-[#FF6B35] tracking-wider">CRAFTING PERFORMANT EXPERIENCES</p>
        </motion.div>

        {/* Subtitle - with visible text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mb-6 sm:mb-8"
        >
          <div className="pixel-window inline-block text-left max-w-sm">
            <div className="pixel-window-titlebar" style={{ background: '#5B3A1A' }}>
              <span className="pixel-text text-[6px] sm:text-[7px] text-[#F5F0DC] tracking-wider">◆ ABOUT_ME.TXT</span>
            </div>
            <div className="pixel-window-content py-1.5 sm:py-2 px-2 sm:px-3">
              <p className="pixel-body text-[10px] sm:text-[11px] text-[#1A1A1A] leading-relaxed font-medium">
                Math & Computing @ BIT Mesra. Rust, Node.js, Next.js — from search engines to distributed ID generators.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.button
            onClick={() => onNavigate?.('contact')}
            className="pixel-btn bg-[#FF6B35] text-[#F5F0DC] animate-pixel-glow text-[8px] sm:text-[10px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect →
          </motion.button>
        </motion.div>

        {/* Pixel decorations - hidden on mobile */}
        <motion.div
          className="absolute top-[18%] right-[5%] sm:right-[10%] opacity-30 sm:opacity-40 hidden sm:block"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 12 12" style={{ imageRendering: 'pixelated' }}>
            <rect x="4" y="0" width="4" height="4" fill="#FFD700" />
            <rect x="0" y="4" width="4" height="4" fill="#FFD700" />
            <rect x="8" y="4" width="4" height="4" fill="#FFD700" />
            <rect x="4" y="8" width="4" height="4" fill="#FFD700" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
