'use client';

import { motion } from 'framer-motion';
import { WindowPanel } from './WindowPanel';

const highlights = [
  { icon: '📍', label: 'BIT Mesra', color: '#4A7C3F' },
  { icon: '🎓', label: 'M.Sc Math&Comp', color: '#FF6B35' },
  { icon: '⚙️', label: 'Rust & Systems', color: '#E04040' },
  { icon: '💻', label: 'Full-Stack', color: '#5B7FFF' },
];

export function AboutSection() {
  return (
    <div className="h-full flex items-center justify-center px-3 sm:px-4 md:px-8 py-3 sm:py-4">
      <div className="max-w-2xl w-full">
        <WindowPanel title="About Me" titleColor="#4A7C3F">
          <div className="space-y-3 sm:space-y-4">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p className="pixel-body text-[11px] sm:text-[12px] text-[#1A1A1A] leading-relaxed">
                Hello! I&apos;m <span className="font-bold text-[#FF6B35]">Arman Hansda</span>, a Mathematics & Computing student at BIT Mesra with a passion for building scalable full-stack and distributed systems. I specialize in Rust, Node.js, and Next.js, with hands-on experience designing search engines, real-time systems, and high-performance backend architectures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <p className="pixel-body text-[10px] sm:text-[11px] text-[#5B5B5B] leading-relaxed">
                From distributed web crawlers in Rust to full-stack content platforms and high-throughput ID generators, I thrive on solving complex systems problems. I believe in writing clean, modular code that scales.
              </p>
            </motion.div>

            {/* Highlights grid - 2 cols on mobile, 4 on sm+ */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 bg-[#E8E4D4] border-2 border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A]"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.06 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="text-sm sm:text-base">{item.icon}</span>
                  <span className="pixel-text text-[5px] sm:text-[6px] text-[#1A1A1A] text-center leading-tight">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech stack tags */}
            <motion.div
              className="flex flex-wrap gap-1 sm:gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              {['Rust', 'C++', 'TypeScript', 'Next.js', 'Node.js', 'tRPC', 'PostgreSQL', 'Redis', 'TailwindCSS'].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="pixel-tag bg-[#4A7C3F] text-[#F5F0DC] text-[5px] sm:text-[6px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55 + i * 0.03 }}
                  whileHover={{ y: -1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </WindowPanel>
      </div>
    </div>
  );
}
