'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { DEVELOPER } from '@/lib/constants';

const links = [
  {
    label: 'GitHub',
    href: DEVELOPER.github,
    icon: <Github size={20} />,
    hoverClass: 'dark:hover:text-white hover:text-gray-900',
    glowClass: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]',
  },
  {
    label: 'LinkedIn',
    href: DEVELOPER.linkedin,
    icon: <Linkedin size={20} />,
    hoverClass: 'hover:text-[#0a66c2]',
    glowClass: 'hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]',
  },
  {
    label: 'Email',
    href: `mailto:${DEVELOPER.email}`,
    icon: <Mail size={20} />,
    hoverClass: 'dark:hover:text-[#00d4ff] hover:text-blue-500',
    glowClass: 'hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]',
  },
];

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link, i) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('mailto') ? '_self' : '_blank'}
          rel="noopener noreferrer"
          aria-label={link.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i, duration: 0.4 }}
          whileHover={{ scale: 1.12, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center
            dark:bg-white/5 bg-gray-100
            dark:border-white/10 border-gray-200 border
            dark:text-gray-400 text-gray-500
            transition-all duration-300
            ${link.hoverClass} ${link.glowClass}`}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
