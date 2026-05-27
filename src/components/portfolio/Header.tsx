'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface HeaderProps {
  onMenuToggle?: () => void;
  mobileMenuOpen?: boolean;
}

const roles = ['Systems Dev', 'Full-Stack', 'Designer'];

export function Header({ onMenuToggle, mobileMenuOpen }: HeaderProps) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-2 sm:top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-16px)] sm:w-auto max-w-[600px]"
    >
      <div className="relative">
        {/* Game HUD style bar */}
        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1A1A1A] border-3 sm:border-4 border-[#3A3A3A] shadow-[4px_4px_0_0_#0A0A0A]">

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[3px] p-1 cursor-pointer"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            <motion.div
              className="w-4 h-[2px] bg-[#FFD700]"
              animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="w-4 h-[2px] bg-[#FFD700]"
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.1 }}
            />
            <motion.div
              className="w-4 h-[2px] bg-[#FFD700]"
              animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>

          {/* Pixel avatar */}
          <div className="relative w-6 h-6 sm:w-8 sm:h-8 bg-[#4A7C3F] border-2 border-[#1A1A1A] flex items-center justify-center flex-shrink-0">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#FFD4A8] border border-[#1A1A1A]" />
            <div className="absolute bottom-0 left-0 right-0 h-1.5 sm:h-2 bg-[#4A7C3F] border-t border-[#1A1A1A]" />
          </div>

          {/* Name */}
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="pixel-text text-[7px] sm:text-[9px] font-bold text-[#FFD700] tracking-wider">
              ARMAN
            </span>
            <span className="pixel-text text-[7px] sm:text-[9px] font-bold text-[#FF6B35] tracking-wider">
              HANSDA
            </span>

            {/* Divider */}
            <div className="hidden sm:block w-0.5 h-4 bg-[#3A3A3A]" />

            {/* Rotating role */}
            <div className="hidden sm:block relative h-4 overflow-hidden w-[90px]">
              <motion.div
                key={roleIndex}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 flex items-center"
              >
                <span className="pixel-text text-[7px] text-[#4A7C3F]">
                  {roles[roleIndex]}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
