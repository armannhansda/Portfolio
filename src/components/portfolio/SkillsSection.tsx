'use client';

import { motion } from 'framer-motion';
import { WindowPanel } from './WindowPanel';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', level: 85, color: '#00599C' },
      { name: 'Rust', level: 80, color: '#CE422B' },
      { name: 'TypeScript', level: 88, color: '#5B7FFF' },
      { name: 'Python', level: 78, color: '#E5A100' },
    ] as Skill[],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Next.js/React', level: 90, color: '#D82C20' },
      { name: 'Node.js', level: 87, color: '#4A7C3F' },
      { name: 'tRPC', level: 82, color: '#398CCB' },
      { name: 'REST APIs', level: 88, color: '#FF6B35' },
    ] as Skill[],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 84, color: '#336791' },
      { name: 'Redis', level: 80, color: '#D82C20' },
      { name: 'MongoDB', level: 75, color: '#47A248' },
      { name: 'Sys Design', level: 82, color: '#A855F7' },
    ] as Skill[],
  },
];

const tools = [
  'Git', 'GitHub', 'Vercel', 'Cloudinary', 'Drizzle ORM',
  'TailwindCSS', 'JWT Auth', 'Docker', 'Figma',
];

export function SkillsSection() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-3 sm:px-4 md:px-8 py-3 sm:py-4 overflow-y-auto">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 sm:mb-4 text-center"
        >
          <h2 className="pixel-text text-xs sm:text-sm text-[#FFD700] tracking-wider sm:mb-1">🎯 SKILL TREE</h2>
          <p className="pixel-text text-[6px] sm:text-[7px] text-[#6B8E23] tracking-wider">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              <WindowPanel title={category.title} titleColor="#5B3A1A">
                <div className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="pixel-text text-[6px] sm:text-[7px] text-[#1A1A1A]">{skill.name}</span>
                        <span className="pixel-text text-[6px] sm:text-[7px]" style={{ color: skill.color }}>
                          LV.{skill.level}
                        </span>
                      </div>
                      <div className="pixel-skill-track">
                        <motion.div
                          className="pixel-skill-fill"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + catIndex * 0.1 + skillIndex * 0.08, ease: [0.4, 0, 0.2, 1] }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </WindowPanel>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <WindowPanel title="Inventory" titleColor="#5B3A1A">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  className="pixel-tag bg-[#E8E4D4] text-[#1A1A1A] text-[5px] sm:text-[6px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.03 }}
                  whileHover={{ y: -1 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </WindowPanel>
        </motion.div>
      </div>
    </div>
  );
}
