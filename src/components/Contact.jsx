'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import { DEVELOPER } from '@/lib/constants';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network delay — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative py-28 dark:bg-[#0d0d14] bg-gray-100/60 overflow-hidden"
    >
      {/* Orbs */}
      <div className="orb orb-blue w-80 h-80 top-0 left-0 dark:opacity-10 opacity-5" />
      <div className="orb orb-purple w-72 h-72 bottom-0 right-0 dark:opacity-10 opacity-5" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
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
            Let&apos;s connect
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-black dark:text-white text-gray-900"
          >
            Get In <span className="neon-text">Touch</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 dark:text-gray-400 text-gray-500 max-w-xl mx-auto"
          >
            Have a project in mind or just want to say hello? My inbox is always
            open — I&apos;ll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start"
        >
          {/* Left info panel */}
          <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
            {/* Email card */}
            <a
              href={`mailto:${DEVELOPER.email}`}
              className="group flex items-center gap-5 p-6 rounded-2xl
                dark:bg-[#12121a] bg-white
                border dark:border-white/10 border-gray-200
                hover:border-[#00d4ff]/40
                shadow-md hover:shadow-lg
                transition-all duration-300 neon-glow-hover"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff22, #b400ff22)',
                  border: '1px solid rgba(0,212,255,0.25)',
                }}
              >
                <Mail size={22} className="dark:text-[#00d4ff] text-blue-500" />
              </div>
              <div>
                <p className="text-xs font-semibold dark:text-gray-500 text-gray-400 mb-0.5 uppercase tracking-wider">
                  Email
                </p>
                <p className="text-sm font-semibold dark:text-white text-gray-800
                  group-hover:neon-text transition-all duration-200 break-all">
                  {DEVELOPER.email}
                </p>
              </div>
            </a>

            {/* GitHub card */}
            <a
              href={DEVELOPER.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl
                dark:bg-[#12121a] bg-white
                border dark:border-white/10 border-gray-200
                hover:border-[#00d4ff]/40
                shadow-md hover:shadow-lg
                transition-all duration-300 neon-glow-hover"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff22, #b400ff22)',
                  border: '1px solid rgba(0,212,255,0.25)',
                }}
              >
                <Github size={22} className="dark:text-[#00d4ff] text-blue-500" />
              </div>
              <div>
                <p className="text-xs font-semibold dark:text-gray-500 text-gray-400 mb-0.5 uppercase tracking-wider">
                  GitHub
                </p>
                <p className="text-sm font-semibold dark:text-white text-gray-800
                  group-hover:neon-text transition-all duration-200">
                  github.com/yusufABC
                </p>
              </div>
            </a>

            {/* LinkedIn card */}
            <a
              href={DEVELOPER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 rounded-2xl
                dark:bg-[#12121a] bg-white
                border dark:border-white/10 border-gray-200
                hover:border-[#b400ff]/40
                shadow-md hover:shadow-lg
                transition-all duration-300 neon-glow-hover"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff22, #b400ff22)',
                  border: '1px solid rgba(180,0,255,0.25)',
                }}
              >
                <Linkedin size={22} className="dark:text-[#b400ff] text-purple-600" />
              </div>
              <div>
                <p className="text-xs font-semibold dark:text-gray-500 text-gray-400 mb-0.5 uppercase tracking-wider">
                  LinkedIn
                </p>
                <p className="text-sm font-semibold dark:text-white text-gray-800
                  group-hover:neon-text transition-all duration-200">
                  Yusuf Abdullah
                </p>
              </div>
            </a>

            {/* Availability badge */}
            <div
              className="flex items-center gap-3 p-4 rounded-xl
                dark:bg-green-500/10 bg-green-50
                border dark:border-green-500/20 border-green-200"
            >
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <p className="text-sm font-semibold dark:text-green-400 text-green-700">
                Available for freelance &amp; full-time roles
              </p>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <div
              className="rounded-2xl p-8
                dark:bg-[#12121a] bg-white
                border dark:border-white/10 border-gray-200
                shadow-md"
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <CheckCircle size={56} className="text-green-500" />
                  <h3 className="text-2xl font-bold dark:text-white text-gray-900">
                    Message Sent! 🎉
                  </h3>
                  <p className="dark:text-gray-400 text-gray-500">
                    Thanks for reaching out. I&apos;ll get back to you very soon.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-outline mt-4"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-wider
                          dark:text-gray-400 text-gray-500"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Yusuf Abdullah"
                        className="w-full px-4 py-3 rounded-xl text-sm
                          dark:bg-white/5 bg-gray-50
                          dark:border-white/10 border-gray-200 border
                          dark:text-white text-gray-900
                          dark:placeholder-gray-600 placeholder-gray-400
                          focus:outline-none focus:border-[#00d4ff]/60
                          dark:focus:bg-white/8 focus:bg-white
                          transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider
                          dark:text-gray-400 text-gray-500"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl text-sm
                          dark:bg-white/5 bg-gray-50
                          dark:border-white/10 border-gray-200 border
                          dark:text-white text-gray-900
                          dark:placeholder-gray-600 placeholder-gray-400
                          focus:outline-none focus:border-[#00d4ff]/60
                          dark:focus:bg-white/8 focus:bg-white
                          transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider
                        dark:text-gray-400 text-gray-500"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                      className="w-full px-4 py-3 rounded-xl text-sm resize-none
                        dark:bg-white/5 bg-gray-50
                        dark:border-white/10 border-gray-200 border
                        dark:text-white text-gray-900
                        dark:placeholder-gray-600 placeholder-gray-400
                        focus:outline-none focus:border-[#00d4ff]/60
                        dark:focus:bg-white/8 focus:bg-white
                        transition-all duration-200"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-2
                      disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
