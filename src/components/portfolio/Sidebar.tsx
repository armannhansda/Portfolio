'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: '🏠', color: '#4A7C3F' },
  { id: 'about', label: 'About', icon: '👤', color: '#FF6B35' },
  { id: 'projects', label: 'Builds', icon: '⚔️', color: '#E5A100' },
  { id: 'skills', label: 'Skills', icon: '🎯', color: '#E04040' },
  { id: 'services', label: 'Craft', icon: '⚒️', color: '#5B7FFF' },
  { id: 'resume', label: 'Quest', icon: '📜', color: '#A855F7' },
  { id: 'contact', label: 'Inbox', icon: '📧', color: '#06B6D4' },
];

export function Sidebar({ activeSection, onSectionClick, mobileOpen, onCloseMobile }: SidebarProps) {
  const sidebarContent = (
    <nav className="flex flex-col items-center gap-2 sm:gap-2.5">
      {navItems.map((item, index) => {
        const isActive = activeSection === item.id;
        return (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => {
              onSectionClick(item.id);
              onCloseMobile?.();
            }}
            className="flex flex-col items-center gap-1 cursor-pointer group"
            title={item.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-base sm:text-lg transition-all duration-200 ${
                isActive
                  ? 'bg-[#F5F0DC] border-2 border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A]'
                  : 'bg-[#1A1A1A]/50 border-2 border-[#555] group-hover:bg-[#1A1A1A]/70 group-hover:border-[#777]'
              }`}
              style={{
                boxShadow: isActive ? `2px 2px 0 0 ${item.color}40` : undefined,
              }}
            >
              {item.icon}
            </div>
            <span
              className="pixel-text text-[7px] sm:text-[8px] font-bold transition-colors duration-200 leading-tight text-center"
              style={{ color: isActive ? item.color : '#9A9A9A' }}
            >
              {item.label}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar - always visible on md+ */}
      <motion.aside
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="hidden md:flex fixed left-0 top-0 h-full z-40 flex-col items-center justify-center py-4 px-2 bg-[#0A0A0A]/40"
        style={{ width: '76px' }}
      >
        {sidebarContent}
      </motion.aside>

      {/* Mobile sidebar - slide in from left */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden fixed left-0 top-0 h-full z-40 flex flex-col items-center justify-center py-4 px-3 bg-[#1A1A1A]/95 border-r-4 border-[#3A3A3A]"
            style={{ width: '80px' }}
          >
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
