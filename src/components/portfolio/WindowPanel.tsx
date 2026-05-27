'use client';

import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { useState } from 'react';

interface WindowPanelProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultMinimized?: boolean;
  onClose?: () => void;
  titleColor?: string;
}

export function WindowPanel({ title, children, className = '', defaultMinimized = false, onClose, titleColor }: WindowPanelProps) {
  const [isMinimized, setIsMinimized] = useState(defaultMinimized);
  const [isVisible, setIsVisible] = useState(true);
  const dragControls = useDragControls();

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
    setTimeout(() => setIsVisible(true), 600);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0.08}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={`pixel-window ${className}`}
    >
      <div
        className="pixel-window-titlebar cursor-grab active:cursor-grabbing select-none touch-none"
        style={titleColor ? { background: titleColor } : undefined}
        onPointerDown={(event) => dragControls.start(event)}
      >
        <span className="pixel-text text-[8px] text-[#F5F0DC] tracking-wider uppercase flex items-center gap-2">
          <span className="text-[10px]">◆</span>
          {title}
        </span>
        <div className="flex items-center gap-1">
          <button
            className="w-3 h-3 bg-[#FFBD2E] border border-[#1A1A1A] cursor-pointer hover:brightness-110"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => setIsMinimized(!isMinimized)}
            title="Minimize"
          />
          <button
            className="pixel-window-close"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={handleClose}
            title="Close"
          />
        </div>
      </div>
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pixel-window-content">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
