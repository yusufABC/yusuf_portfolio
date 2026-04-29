'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const TECH_COLORS = {
  'Next.js': 'dark:bg-white/10 bg-gray-200 dark:text-white text-gray-800',
  'React': 'dark:bg-cyan-500/10 bg-cyan-50 dark:text-cyan-300 text-cyan-700',
  'Node.js': 'dark:bg-green-500/10 bg-green-50 dark:text-green-300 text-green-700',
  'MongoDB': 'dark:bg-green-500/10 bg-green-50 dark:text-green-300 text-green-700',
  'PostgreSQL': 'dark:bg-blue-500/10 bg-blue-50 dark:text-blue-300 text-blue-700',
  'Stripe': 'dark:bg-purple-500/10 bg-purple-50 dark:text-purple-300 text-purple-700',
  'Docker': 'dark:bg-blue-500/10 bg-blue-50 dark:text-blue-300 text-blue-700',
  'Tailwind CSS': 'dark:bg-cyan-500/10 bg-cyan-50 dark:text-cyan-300 text-cyan-700',
  'default': 'dark:bg-white/5 bg-gray-100 dark:text-gray-300 text-gray-600',
};

function getTechColor(tech) {
  return TECH_COLORS[tech] || TECH_COLORS['default'];
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [showAll, setShowAll] = useState(false);

  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  const displayed = showAll ? PROJECTS : featured;

  return (
    <section
      id="projects"
      className="relative py-28 dark:bg-[#0a0a0f] bg-slate-50 overflow-hidden"
    >
      {/* Orbs */}
      <div className="orb orb-blue w-96 h-96 -top-20 -right-20 dark:opacity-10 opacity-5" />
      <div className="orb orb-purple w-72 h-72 bottom-10 left-0 dark:opacity-10 opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.span
            variants={cardVariants}
            className="inline-block text-sm font-semibold tracking-[0.2em] uppercase
              dark:text-[#00d4ff] text-blue-500 mb-3"
          >
            What I&apos;ve built
          </motion.span>
          <motion.h2
            variants={cardVariants}
            className="text-4xl sm:text-5xl font-black dark:text-white text-gray-900"
          >
            Featured <span className="neon-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="mt-4 dark:text-gray-400 text-gray-500 max-w-xl mx-auto"
          >
            A selection of real-world projects that showcase my skills across the
            full stack.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence>
            {displayed.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                layout
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden
                  dark:bg-[#12121a] bg-white
                  border dark:border-white/10 border-gray-200
                  shadow-md hover:shadow-xl
                  transition-all duration-300"
              >
                {/* Top gradient bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: 'linear-gradient(90deg, #00d4ff, #b400ff)',
                  }}
                />

                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                    pointer-events-none transition-opacity duration-300"
                  style={{
                    boxShadow:
                      'inset 0 0 60px rgba(0,212,255,0.05), 0 0 40px rgba(0,212,255,0.08)',
                  }}
                />

                <div className="p-7 flex flex-col h-full">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #00d4ff22, #b400ff22)',
                        border: '1px solid rgba(0,212,255,0.2)',
                      }}
                    >
                      <Star size={18} className="dark:text-[#00d4ff] text-blue-500" />
                    </div>
                    <div className="flex gap-2 ml-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="w-8 h-8 rounded-full flex items-center justify-center
                          dark:bg-white/5 bg-gray-100
                          dark:hover:bg-white/15 hover:bg-gray-200
                          dark:text-gray-400 text-gray-500
                          dark:hover:text-white hover:text-gray-900
                          border dark:border-white/10 border-gray-200
                          transition-all duration-200"
                      >
                        <Github size={14} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        className="w-8 h-8 rounded-full flex items-center justify-center
                          dark:bg-white/5 bg-gray-100
                          dark:hover:bg-white/15 hover:bg-gray-200
                          dark:text-gray-400 text-gray-500
                          dark:hover:text-[#00d4ff] hover:text-blue-500
                          border dark:border-white/10 border-gray-200
                          transition-all duration-200"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-2
                    group-hover:neon-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm dark:text-gray-400 text-gray-500 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-full border
                          dark:border-white/10 border-transparent
                          ${getTechColor(t)}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more / less */}
        {rest.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll((v) => !v)}
              className="btn-outline"
            >
              {showAll ? 'Show Less' : `Show All Projects (${PROJECTS.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
