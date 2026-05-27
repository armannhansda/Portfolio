'use client';

import { motion } from 'framer-motion';
import { WindowPanel } from './WindowPanel';
import { Server, Globe, Cpu, Database } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'Backend & Systems',
    description: 'Scalable, fault-tolerant architectures with Rust and Node.js. From distributed crawlers to high-throughput ID generators.',
    color: '#FF6B35',
    features: ['Distributed Sys', 'REST APIs', 'Redis Queues', 'Rust Services'],
  },
  {
    icon: Globe,
    title: 'Full-Stack Dev',
    description: 'End-to-end web apps with Next.js, tRPC, and PostgreSQL. Type-safe APIs, auth systems, optimized queries.',
    color: '#4A7C3F',
    features: ['Next.js Apps', 'tRPC APIs', 'PostgreSQL', 'Auth Systems'],
  },
  {
    icon: Cpu,
    title: 'Systems Prog',
    description: 'High-performance systems in Rust and C++ with concurrent processing, inverted indexing, sub-ms responses.',
    color: '#5B7FFF',
    features: ['Rust / C++', 'Concurrency', 'Indexing', 'Benchmarks'],
  },
  {
    icon: Database,
    title: 'DB & Caching',
    description: 'Optimized PostgreSQL queries, Redis caching strategies, and efficient data modeling for high-traffic apps.',
    color: '#E5A100',
    features: ['Query Optimize', 'Redis Cache', 'Data Models', 'Drizzle ORM'],
  },
];

export function ServicesSection() {
  return (
    <div className="h-full flex items-center justify-center px-3 sm:px-4 md:px-8 py-3 sm:py-4 overflow-y-auto">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 sm:mb-4 text-center"
        >
          <h2 className="pixel-text text-xs sm:text-sm text-[#FFD700] tracking-wider mb-0.5 sm:mb-1">⚒️ CRAFT</h2>
          <p className="pixel-text text-[6px] sm:text-[7px] text-[#6B8E23] tracking-wider">Areas I specialize in</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              >
                <WindowPanel title={service.title} titleColor={service.color}>
                  <div className="space-y-2 sm:space-y-3">
                    <motion.div
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-[#E8E4D4] border-2 border-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A]"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon size={14} style={{ color: service.color }} />
                    </motion.div>

                    <p className="pixel-body text-[9px] sm:text-[10px] text-[#5B5B5B] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-1">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-1 sm:gap-1.5">
                          <div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 flex-shrink-0"
                            style={{ backgroundColor: service.color }}
                          />
                          <span className="pixel-text text-[5px] sm:text-[6px] text-[#1A1A1A]/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </WindowPanel>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
