'use client';

import { motion } from 'framer-motion';
import { Code2, Heart } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { DEVELOPER, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative dark:bg-[#08080d] bg-gray-100 border-t dark:border-white/5 border-gray-200">
      {/* Top gradient line */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, #b400ff, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center neon-glow"
                style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #b400ff 100%)' }}
              >
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg neon-text">Yusuf.dev</span>
            </div>
            <p className="text-sm dark:text-gray-500 text-gray-500 leading-relaxed max-w-xs">
              Full Stack Developer crafting modern web experiences with clean
              code and creative design.
            </p>
            <SocialLinks />
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest
              dark:text-gray-400 text-gray-500 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm dark:text-gray-400 text-gray-500
                      dark:hover:text-white hover:text-gray-900
                      hover:neon-text transition-all duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest
              dark:text-gray-400 text-gray-500 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${DEVELOPER.email}`}
                  className="text-sm dark:text-gray-400 text-gray-500
                    dark:hover:text-[#00d4ff] hover:text-blue-500
                    transition-colors duration-200 break-all"
                >
                  {DEVELOPER.email}
                </a>
              </li>
              <li>
                <a
                  href={DEVELOPER.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm dark:text-gray-400 text-gray-500
                    dark:hover:text-white hover:text-gray-900
                    transition-colors duration-200"
                >
                  github.com/yusufABC
                </a>
              </li>
              <li>
                <a
                  href={DEVELOPER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm dark:text-gray-400 text-gray-500
                    hover:text-[#0a66c2]
                    transition-colors duration-200"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t dark:border-white/5 border-gray-200
            flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs dark:text-gray-600 text-gray-400 flex items-center gap-1.5"
          >
            © {year} {DEVELOPER.name}. Built with{' '}
            <Heart size={12} className="text-red-500 fill-red-500" /> using
            Next.js &amp; Three.js
          </motion.p>
          <p className="text-xs dark:text-gray-600 text-gray-400">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
