'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/portfolio/Header';
import { Sidebar } from '@/components/portfolio/Sidebar';
import { TopoBackground } from '@/components/portfolio/TopoBackground';
import { SocialFooter } from '@/components/portfolio/SocialFooter';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ServicesSection } from '@/components/portfolio/ServicesSection';
import { ResumeSection } from '@/components/portfolio/ResumeSection';
import { ContactSection } from '@/components/portfolio/ContactSection';

const sections = ['home', 'about', 'projects', 'skills', 'services', 'resume', 'contact'];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSectionClick = (section: string) => {
    if (section !== activeSection) {
      setActiveSection(section);
    }
    setMobileMenuOpen(false);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection onNavigate={handleSectionClick} />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'services':
        return <ServicesSection />;
      case 'resume':
        return <ResumeSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection onNavigate={handleSectionClick} />;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Background */}
      <TopoBackground />

      {/* Header */}
      <Header onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} mobileMenuOpen={mobileMenuOpen} />

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0A0A0A]/60 z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar - always visible on md+, slide-in on mobile */}
      <Sidebar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        mobileOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      {/* Main content area */}
      <div className="h-full flex flex-col" style={{ paddingLeft: '0px' }}>
        <div className="flex-1 relative overflow-hidden md:pl-[76px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 0.88, filter: 'blur(6px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.06, filter: 'blur(6px)' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Social Footer */}
        <div className="md:pl-[76px]">
          <SocialFooter />
        </div>
      </div>
    </div>
  );
}
