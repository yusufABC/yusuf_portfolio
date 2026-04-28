'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { DEVELOPER } from '@/lib/constants';

const Canvas3D = dynamic(() => import('./Canvas3D'), { ssr: false });

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
        dark:bg-[#0a0a0f] bg-slate-50"
    >
      {/* Gradient orbs */}
      <div className="orb orb-blue w-96 h-96 -top-20 -left-20 dark:opacity-20 opacity-10" />
      <div className="orb orb-purple w-96 h-96 -bottom-20 -right-20 dark:opacity-20 opacity-10" />
      <div className="orb orb-blue w-64 h-64 top-1/2 left-1/4 dark:opacity-10 opacity-5" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 dark:opacity-5 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6
                dark:bg-white/5 bg-blue-50
                dark:border-white/10 border-blue-100 border
                dark:text-neon-blue text-blue-600"
            >
              👋 Available for work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4"
            >
              <span className="dark:text-white text-gray-900">Hi, I&apos;m </span>
              <span className="neon-text block">{DEVELOPER.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl font-semibold mb-4 dark:text-gray-300 text-gray-600"
            >
              {DEVELOPER.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base dark:text-gray-400 text-gray-500 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {DEVELOPER.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href={DEVELOPER.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm
                  dark:text-gray-300 text-gray-600
                  dark:bg-white/5 bg-gray-100
                  dark:hover:bg-white/10 hover:bg-gray-200
                  dark:border-white/10 border-gray-200 border
                  transition-all duration-300 neon-glow-hover"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={DEVELOPER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm
                  dark:text-gray-300 text-gray-600
                  dark:bg-white/5 bg-gray-100
                  dark:hover:bg-white/10 hover:bg-gray-200
                  dark:border-white/10 border-gray-200 border
                  transition-all duration-300 neon-glow-hover"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[480px] aspect-square">
              {/* Glow ring behind canvas */}
              <div
                className="absolute inset-0 rounded-full animate-glow-pulse"
                style={{
                  background:
                    'radial-gradient(ellipse, rgba(0,212,255,0.15) 0%, rgba(180,0,255,0.1) 50%, transparent 70%)',
                }}
              />
              <Canvas3D />
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 dark:text-gray-500 text-gray-400
              hover:dark:text-gray-300 hover:text-gray-600 transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
