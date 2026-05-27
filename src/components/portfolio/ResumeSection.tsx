'use client';

import { motion } from 'framer-motion';
import { WindowPanel } from './WindowPanel';
import { GraduationCap, Download } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    title: 'Integrated M.Sc. Mathematics & Computing',
    org: 'Birla Institute of Technology, Mesra',
    period: 'Sept 2023 – Present',
    description: 'GPA: 8.4 / 10. Specializing in Mathematics & Computing with focus on distributed systems, algorithms, and software engineering.',
    color: '#4A7C3F',
  },
];

const coreConcepts = [
  'DSA', 'OOP', 'System Design', 'OS', 'DBMS', 'Distributed Sys', 'Auth',
];

export function ResumeSection() {
  return (
    <div className="h-full flex items-center justify-center px-3 sm:px-4 md:px-8 py-3 sm:py-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 sm:mb-4 text-center"
        >
          <h2 className="pixel-text text-xs sm:text-sm text-[#FFD700] tracking-wider mb-0.5 sm:mb-1">📜 QUEST LOG</h2>
          <p className="pixel-text text-[6px] sm:text-[7px] text-[#6B8E23] tracking-wider">My academic journey</p>
        </motion.div>

        <WindowPanel title="Quest Log" titleColor="#5B3A1A">
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="flex gap-2 sm:gap-3 pb-3 sm:pb-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.12 }}
              >
                {/* Timeline icon */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#4A7C3F] border-2 border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A] flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <GraduationCap size={12} className="text-[#F5F0DC]" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="pb-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 mb-0.5">
                    <h3 className="pixel-text text-[6px] sm:text-[8px] text-[#1A1A1A]">{exp.title}</h3>
                    <span className="pixel-tag bg-[#E8E4D4] text-[#1A1A1A] text-[5px] sm:text-[6px] w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="pixel-body text-[10px] sm:text-[11px] font-semibold mb-0.5 sm:mb-1" style={{ color: exp.color }}>
                    {exp.org}
                  </p>
                  <p className="pixel-body text-[9px] sm:text-[10px] text-[#5B5B5B] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Concepts */}
          <motion.div
            className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t-2 border-[#C8C0A4]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="pixel-text text-[6px] sm:text-[7px] text-[#4A7C3F] tracking-wider uppercase mb-1.5 sm:mb-2">◆ Core Concepts</p>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {coreConcepts.map((concept, i) => (
                <motion.span
                  key={concept}
                  className="pixel-tag bg-[#FF6B35] text-[#F5F0DC] text-[5px] sm:text-[6px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + i * 0.03 }}
                  whileHover={{ y: -1 }}
                >
                  {concept}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Download button */}
          <motion.div
            className="flex justify-center pt-2 sm:pt-3 mt-2 border-t-2 border-[#C8C0A4]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="/resume"
              download="Resume.pdf"
              className="pixel-btn bg-[#1A1A1A] text-[#F5F0DC] flex items-center gap-1.5 sm:gap-2 text-[7px] sm:text-[8px]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={10} />
              Download Resume
            </motion.a>
          </motion.div>
        </WindowPanel>
      </div>
    </div>
  );
}
