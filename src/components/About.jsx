'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Layers, Zap, Globe } from 'lucide-react';
import { DEVELOPER } from '@/lib/constants';

const stats = [
  { label: 'Years Experience', value: '3+', icon: <Zap size={20} /> },
  { label: 'Projects Completed', value: '20+', icon: <Layers size={20} /> },
  { label: 'Technologies', value: '15+', icon: <Code2 size={20} /> },
  { label: 'Countries Reached', value: '5+', icon: <Globe size={20} /> },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      className="relative py-28 dark:bg-[#0a0a0f] bg-slate-50 overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="orb orb-purple w-72 h-72 top-10 right-0 dark:opacity-15 opacity-5" />
      <div className="orb orb-blue w-56 h-56 bottom-0 left-0 dark:opacity-10 opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-sm font-semibold tracking-[0.2em] uppercase
              dark:text-[#00d4ff] text-blue-500 mb-3"
          >
            Get to know me
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-black dark:text-white text-gray-900"
          >
            About{' '}
            <span className="neon-text">Me</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left — decorative avatar card */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, #00d4ff, #b400ff, #00d4ff)',
                  padding: '3px',
                  borderRadius: '50%',
                }}
              >
                <div className="w-full h-full rounded-full dark:bg-[#0a0a0f] bg-slate-50" />
              </div>

              {/* Inner content */}
              <div
                className="absolute inset-[12px] rounded-full flex flex-col items-center justify-center
                  dark:bg-[#12121a] bg-white shadow-2xl"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg, rgba(0,212,255,0.3) 0%, transparent 40%, rgba(180,0,255,0.3) 60%, transparent 100%)',
                  }}
                />
                <span className="text-6xl mb-2">👨‍💻</span>
                <p className="text-sm font-semibold neon-text">{DEVELOPER.title}</p>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-full
                  dark:border-white/10 border-gray-200 shadow-lg"
              >
                <span className="text-xs font-semibold dark:text-gray-200 text-gray-700">
                  🚀 Open to Work
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold dark:text-white text-gray-900">
              Crafting digital experiences{' '}
              <span className="neon-text">with passion</span>
            </h3>

            <p className="dark:text-gray-400 text-gray-500 leading-relaxed text-base">
              {DEVELOPER.bio}
            </p>
            <p className="dark:text-gray-400 text-gray-500 leading-relaxed text-base">
              I specialize in building performant, accessible, and beautiful
              products — from robust back-end APIs to polished front-end
              interfaces. Every pixel and every endpoint is crafted with care.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['Problem Solver', 'Team Player', 'Continuous Learner', 'Detail Oriented'].map(
                (trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1 text-xs font-medium rounded-full
                      dark:bg-white/5 bg-blue-50
                      dark:border-white/10 border-blue-100 border
                      dark:text-[#00d4ff] text-blue-600"
                  >
                    {trait}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-20"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
              className="glass-card p-6 text-center neon-glow-hover cursor-default
                dark:border-white/10 border-gray-100"
            >
              <div className="flex justify-center mb-3 dark:text-[#00d4ff] text-blue-500">
                {s.icon}
              </div>
              <p className="text-3xl font-black neon-text mb-1">{s.value}</p>
              <p className="text-xs dark:text-gray-400 text-gray-500 font-medium">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
