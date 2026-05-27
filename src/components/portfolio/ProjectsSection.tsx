'use client';

import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

interface Project {
  title: string;
  shortTitle: string;
  description: string;
  detailedDescription: string[];
  tags: string[];
  image: string;
  color: string;
  accentColor: string;
  stats: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    title: 'ArachNode – Search Engine',
    shortTitle: 'ArachNode',
    description: 'Distributed web crawler in Rust with concurrent workers crawling 10K+ pages across domains.',
    detailedDescription: [
      'Engineered a distributed web crawler in Rust with concurrent workers, crawling up to 10K+ pages across domains.',
      'Designed fault-tolerant URL scheduling using Redis (queue, visited set, seen set), reducing duplicate crawling by ~60%.',
      'Built an end-to-end search engine pipeline (crawling → parsing → indexing → querying) handling thousands of documents.',
      'Implemented inverted indexing with tokenization, enabling sub-second keyword search over 10K+ indexed pages.',
      'Developed RESTful search APIs (Node.js) with average response latency under 200ms.',
      'Structured the system with modular components, improving scalability and maintainability for future distributed expansion.',
    ],
    tags: ['Rust', 'Next.js', 'Node.js', 'Redis', 'REST API'],
    image: '🔍',
    color: '#FF6B35',
    accentColor: '#E55A2B',
    stats: [
      { label: 'Pages Crawled', value: '10K+' },
      { label: 'Dup Reduction', value: '~60%' },
      { label: 'Latency', value: '<200ms' },
    ],
  },
  {
    title: 'PIXO — Content Platform',
    shortTitle: 'PIXO',
    description: 'Full-stack blogging platform with type-safe APIs, OAuth auth, and optimized PostgreSQL queries.',
    detailedDescription: [
      'Built a full-stack blogging platform using Next.js, tRPC, PostgreSQL, and Drizzle ORM, supporting 100+ users and 500+ posts.',
      'Designed type-safe APIs with tRPC, reducing runtime API errors by ~40%.',
      'Optimized PostgreSQL queries using indexing, improving response time by ~30%.',
      'Implemented JWT authentication and Google OAuth, securing 100% of protected routes.',
      'Integrated Cloudinary for media uploads, handling 1000+ images efficiently.',
      'Developed a responsive UI using Next.js App Router and TailwindCSS, improving page load performance by ~25%.',
    ],
    tags: ['Next.js', 'tRPC', 'PostgreSQL', 'Drizzle ORM'],
    image: '✍️',
    color: '#4A7C3F',
    accentColor: '#3A6C2F',
    stats: [
      { label: 'Users', value: '100+' },
      { label: 'API Error ↓', value: '~40%' },
      { label: 'Query ↑', value: '~30%' },
    ],
  },
  {
    title: 'SnowID – Distributed ID Gen',
    shortTitle: 'SnowID',
    description: '60-bit distributed ID generator supporting 64 nodes at ~8K IDs/ms per node.',
    detailedDescription: [
      'Built a 60-bit distributed ID generator supporting 64 nodes and generating ~8K IDs/ms per node.',
      'Achieved ~1M IDs/sec throughput with compact Base62 (10-character) encoding.',
      'Reduced ID size by ~40% compared to UUID, improving storage and transmission efficiency.',
      'Implemented clock drift handling with monotonic guarantees, ensuring consistency in distributed systems.',
      'Developed benchmarking and decoding tools, validating performance under high-load scenarios.',
    ],
    tags: ['Rust', 'Distributed Systems', 'Base62'],
    image: '❄️',
    color: '#5B7FFF',
    accentColor: '#4B6FEF',
    stats: [
      { label: 'IDs/sec', value: '~1M' },
      { label: 'Size ↓', value: '~40%' },
      { label: 'Nodes', value: '64' },
    ],
  },
];

function ProjectDetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const dragControls = useDragControls();

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-[#0A0A0A]/80"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        drag
        dragControls={dragControls}
        dragListener={false}
        dragMomentum={false}
        dragElastic={0.08}
        className="relative z-10 w-full max-w-2xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto animate-pixel-appear"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="pixel-window">
          {/* Title bar */}
          <div
            className="pixel-window-titlebar cursor-grab active:cursor-grabbing select-none touch-none"
            style={{ background: project.color }}
            onPointerDown={(event) => dragControls.start(event)}
          >
            <span className="pixel-text text-[7px] sm:text-[8px] text-[#F5F0DC] tracking-wider uppercase flex items-center gap-2">
              <span className="text-[10px] sm:text-[12px]">{project.image}</span>
              <span className="truncate">{project.title}</span>
            </span>
            <button
              className="pixel-window-close"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={onClose}
            />
          </div>

          <div className="pixel-window-content space-y-3 sm:space-y-4">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {project.stats.map((stat) => (
                <div key={stat.label} className="bg-[#E8E4D4] border-2 border-[#1A1A1A] p-1.5 sm:p-2 text-center shadow-[2px_2px_0_0_#1A1A1A]">
                  <div className="pixel-text text-[7px] sm:text-[8px] text-[#1A1A1A] mb-0.5 sm:mb-1">{stat.value}</div>
                  <div className="pixel-text text-[5px] sm:text-[6px] text-[#6B6B6B]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Detailed description */}
            <div>
              <p className="pixel-text text-[6px] sm:text-[7px] text-[#4A7C3F] tracking-wider uppercase mb-1.5 sm:mb-2">◆ Quest Log</p>
              <div className="space-y-1.5 sm:space-y-2">
                {project.detailedDescription.map((desc, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-1.5 sm:gap-2 items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <span className="pixel-text text-[7px] sm:text-[8px] text-[#FF6B35] mt-0.5 flex-shrink-0">▸</span>
                    <p className="pixel-body text-[10px] sm:text-[11px] text-[#1A1A1A] leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <p className="pixel-text text-[6px] sm:text-[7px] text-[#4A7C3F] tracking-wider uppercase mb-1.5 sm:mb-2">◆ Tech Stack</p>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="pixel-tag text-[5px] sm:text-[6px] text-[#F5F0DC]"
                    style={{ background: project.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3 pt-2 border-t-2 border-[#C8C0A4]">
              <motion.a
                href="#"
                className="pixel-btn bg-[#4A7C3F] text-[#F5F0DC] text-[7px] sm:text-[8px] flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={10} /> Demo
              </motion.a>
              <motion.a
                href="#"
                className="pixel-btn bg-[#1A1A1A] text-[#F5F0DC] text-[7px] sm:text-[8px] flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={10} /> Source
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const hasDraggedProject = useRef(false);

  return (
    <div className="h-full flex items-center justify-center px-3 sm:px-4 md:px-8 py-3 sm:py-4">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 sm:mb-4 text-center"
        >
          <h2 className="pixel-text text-xs sm:text-sm text-[#FFD700] tracking-wider mb-0.5 sm:mb-1">⚔️ BUILDS</h2>
          <p className="pixel-text text-[6px] sm:text-[7px] text-[#6B8E23] tracking-wider">Systems I&apos;ve designed and built</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {projects.map((project, index) => (
            <motion.div
              drag
              dragMomentum={false}
              dragElastic={0.08}
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              className="cursor-grab active:cursor-grabbing touch-none"
              onDragStart={() => {
                hasDraggedProject.current = true;
              }}
              onClick={() => {
                if (hasDraggedProject.current) {
                  hasDraggedProject.current = false;
                  return;
                }

                setSelectedProject(project);
              }}
            >
              <div className="pixel-window h-full">
                <div className="pixel-window-titlebar" style={{ background: project.color }}>
                  <span className="pixel-text text-[6px] sm:text-[7px] text-[#F5F0DC] tracking-wider uppercase flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[9px] sm:text-[10px]">{project.image}</span>
                    {project.shortTitle}
                  </span>
                  <div className="pixel-window-close" />
                </div>
                <div className="pixel-window-content space-y-2 sm:space-y-3">
                  <p className="pixel-body text-[10px] sm:text-[11px] text-[#1A1A1A] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Mini stats */}
                  <div className="flex gap-1 sm:gap-2">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="flex-1 bg-[#E8E4D4] border border-[#1A1A1A] p-0.5 sm:p-1 text-center">
                        <div className="pixel-text text-[6px] sm:text-[7px]" style={{ color: project.color }}>{stat.value}</div>
                        <div className="pixel-text text-[4px] sm:text-[5px] text-[#6B6B6B]">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-0.5 sm:gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="pixel-tag text-[5px] sm:text-[6px] text-[#F5F0DC]"
                        style={{ background: project.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Details hint */}
                  <div className="flex items-center gap-1 pt-1 border-t-2 border-[#C8C0A4]">
                    <span className="pixel-text text-[5px] sm:text-[6px] text-[#4A7C3F] tracking-wider">READ MORE</span>
                    <ChevronRight size={7} className="text-[#4A7C3F]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectDetailModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
