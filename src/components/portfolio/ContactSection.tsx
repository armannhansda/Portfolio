'use client';

import { motion } from 'framer-motion';
import { WindowPanel } from './WindowPanel';
import { Mail, MapPin, Send, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

type SendStatus = 'idle' | 'sending' | 'sent' | 'error';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sendStatus, setSendStatus] = useState<SendStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendStatus('sending');

    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSendStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSendStatus('idle'), 4000);
      } else {
        // Fallback to mailto if API fails
        setSendStatus('error');
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:armanhansda.work@gmail.com?subject=${subject}&body=${body}`;
        setTimeout(() => setSendStatus('idle'), 3000);
      }
    } catch {
      // Fallback to mailto if fetch fails
      setSendStatus('error');
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:armanhansda.work@gmail.com?subject=${subject}&body=${body}`;
      setTimeout(() => setSendStatus('idle'), 3000);
    }
  };

  return (
    <div className="h-full flex items-center justify-center px-3 sm:px-4 md:px-8 py-3 sm:py-4 overflow-y-auto">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 sm:mb-4 text-center"
        >
          <h2 className="pixel-text text-xs sm:text-sm text-[#FFD700] tracking-wider mb-0.5 sm:mb-1">📧 INBOX</h2>
          <p className="pixel-text text-[6px] sm:text-[7px] text-[#6B8E23] tracking-wider">Let&apos;s work together</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4">
          {/* Contact info */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <WindowPanel title="Contact" titleColor="#4A7C3F">
              <div className="space-y-2 sm:space-y-3">
                <motion.a
                  href="mailto:armanhansda.work@gmail.com"
                  className="flex items-center gap-2 pixel-body text-[10px] sm:text-[11px] text-[#1A1A1A] hover:text-[#FF6B35] transition-colors"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-[#FF6B35]/15 border border-[#1A1A1A] flex-shrink-0">
                    <Mail size={11} className="text-[#FF6B35]" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] truncate">armanhansda.work@gmail.com</span>
                </motion.a>
                <motion.div
                  className="flex items-center gap-2 pixel-body text-[10px] sm:text-[11px] text-[#1A1A1A]"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-[#4A7C3F]/15 border border-[#1A1A1A] flex-shrink-0">
                    <MapPin size={11} className="text-[#4A7C3F]" />
                  </div>
                  <span className="text-[8px] sm:text-[9px]">Ranchi, India</span>
                </motion.div>
                <motion.a
                  href="tel:+919798595716"
                  className="flex items-center gap-2 pixel-body text-[10px] sm:text-[11px] text-[#1A1A1A] hover:text-[#5B7FFF] transition-colors"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-[#5B7FFF]/15 border border-[#1A1A1A] flex-shrink-0">
                    <Phone size={11} className="text-[#5B7FFF]" />
                  </div>
                  <span className="text-[8px] sm:text-[9px]">+91 9798595716</span>
                </motion.a>

                {/* Availability badge */}
                <motion.div
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[#27C93F]/15 border-2 border-[#27C93F]/40"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#27C93F]" />
                  <span className="pixel-text text-[5px] sm:text-[6px] text-[#27C93F]">AVAILABLE</span>
                </motion.div>
              </div>
            </WindowPanel>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <WindowPanel title="Send Msg" titleColor="#5B7FFF">
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <div>
                  <label className="pixel-text text-[5px] sm:text-[6px] text-[#6B6B6B] mb-0.5 sm:mb-1 block">NAME</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border-2 border-[#1A1A1A] bg-[#E8E4D4] pixel-body text-[10px] sm:text-[11px] text-[#1A1A1A] placeholder:text-[#A8A38C] focus:outline-none focus:border-[#FF6B35]"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="pixel-text text-[5px] sm:text-[6px] text-[#6B6B6B] mb-0.5 sm:mb-1 block">EMAIL</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border-2 border-[#1A1A1A] bg-[#E8E4D4] pixel-body text-[10px] sm:text-[11px] text-[#1A1A1A] placeholder:text-[#A8A38C] focus:outline-none focus:border-[#FF6B35]"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="pixel-text text-[5px] sm:text-[6px] text-[#6B6B6B] mb-0.5 sm:mb-1 block">MESSAGE</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border-2 border-[#1A1A1A] bg-[#E8E4D4] pixel-body text-[10px] sm:text-[11px] text-[#1A1A1A] placeholder:text-[#A8A38C] focus:outline-none focus:border-[#FF6B35] resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sendStatus === 'sending' || sendStatus === 'sent'}
                  className={`pixel-btn w-full justify-center text-[7px] sm:text-[8px] flex items-center gap-1.5 ${
                    sendStatus === 'sent'
                      ? 'bg-[#4A7C3F] text-[#F5F0DC]'
                      : sendStatus === 'error'
                        ? 'bg-[#E5A100] text-[#1A1A1A]'
                        : 'bg-[#FF6B35] text-[#F5F0DC]'
                  } disabled:opacity-90`}
                  whileHover={sendStatus === 'idle' ? { scale: 1.02 } : {}}
                  whileTap={sendStatus === 'idle' ? { scale: 0.98 } : {}}
                  transition={{ duration: 0.1 }}
                >
                  {sendStatus === 'sending' ? (
                    <>
                      <motion.div
                        className="w-3 h-3 border-2 border-[#F5F0DC]/30 border-t-[#F5F0DC]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : sendStatus === 'sent' ? (
                    <>
                      <CheckCircle size={12} />
                      Message Sent!
                    </>
                  ) : sendStatus === 'error' ? (
                    <>
                      <AlertCircle size={12} />
                      Opening Email...
                    </>
                  ) : (
                    <>
                      <Send size={10} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </WindowPanel>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
