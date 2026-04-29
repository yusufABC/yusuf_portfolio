'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS } from '@/lib/constants';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      className="relative py-28 dark:bg-[#0d0d14] bg-gray-100/60 overflow-hidden"
    >
      {/* Orbs */}
      <div className="orb orb-blue w-80 h-80 -top-20 left-1/4 dark:opacity-10 opacity-5" />
      <div className="orb orb-purple w-64 h-64 bottom-0 right-10 dark:opacity-10 opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
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
            What I work with
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-black dark:text-white text-gray-900"
          >
            My <span className="neon-text">Skills</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 dark:text-gray-400 text-gray-500 max-w-xl mx-auto"
          >
            A curated set of technologies I use to build production-grade,
            scalable applications from front to back.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SKILLS.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="relative group rounded-2xl p-px overflow-hidden
                transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #00d4ff33, #b400ff33)',
              }}
            >
              {/* Inner card */}
              <div
                className="rounded-2xl p-7 h-full
                  dark:bg-[#12121a] bg-white
                  transition-all duration-300"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow:
                      '0 0 40px rgba(0,212,255,0.12), 0 0 80px rgba(180,0,255,0.08)',
                  }}
                />

                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{group.icon}</span>
                  <h3 className="text-xl font-bold dark:text-white text-gray-900">
                    {group.category}
                  </h3>
                </div>

                {/* Skill tags */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className="flex flex-wrap gap-2"
                >
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={tagVariants}
                      whileHover={{ scale: 1.08 }}
                      className="px-3 py-1.5 text-xs font-semibold rounded-full
                        dark:bg-white/5 bg-gray-100
                        dark:border-white/10 border-gray-200 border
                        dark:text-gray-300 text-gray-600
                        dark:hover:border-[#00d4ff]/40 hover:border-blue-300
                        dark:hover:text-[#00d4ff] hover:text-blue-600
                        transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar — "also familiar with" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm dark:text-gray-500 text-gray-400 mb-4 font-medium">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Redux', 'Zustand', 'tRPC', 'Supabase', 'Cloudflare', 'Jest', 'Cypress', 'Nx'].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full
                    dark:bg-white/5 bg-white
                    dark:border-white/10 border-gray-200 border
                    dark:text-gray-400 text-gray-500"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
