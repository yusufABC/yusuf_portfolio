'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'dark:bg-[#0a0a0f]/90 bg-white/90 backdrop-blur-lg shadow-lg dark:shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center neon-glow"
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #b400ff 100%)',
              }}
            >
              <Code2 size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg neon-text hidden sm:block">
              Yusuf.dev
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${
                        isActive
                          ? 'neon-text bg-white/5'
                          : 'dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-gray-900'
                      }
                    `}
                  >
                    {link.name}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg dark:text-gray-300 text-gray-700
                dark:hover:bg-white/10 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden dark:bg-[#0a0a0f]/95 bg-white/95 backdrop-blur-lg border-t dark:border-white/10 border-gray-200"
          >
            <ul className="px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium
                      dark:text-gray-300 text-gray-700
                      dark:hover:bg-white/10 hover:bg-gray-100
                      transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
