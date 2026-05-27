'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Code2 } from 'lucide-react';

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/arman-hansda', label: 'LinkedIn', color: '#0A66C2' },
  { icon: Github, href: 'https://github.com/armannhansda', label: 'GitHub', color: '#F5F0DC' },
  { icon: Code2, href: 'https://leetcode.com/u/armanhansda', label: 'LeetCode', color: '#FFA116' },
];

export function SocialFooter() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.0 }}
      className="flex items-center justify-center gap-2 sm:gap-3 py-1.5 sm:py-2 flex-shrink-0"
    >
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#1A1A1A] border-2 border-[#3A3A3A] group cursor-pointer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05, duration: 0.15 }}
            title={social.label}
            style={{ transition: 'background-color 0.1s, border-color 0.1s' }}
          >
            <Icon size={12} style={{ color: social.color }} />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
