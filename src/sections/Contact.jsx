import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, AlertCircle, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null); // 'ready' | 'no-backend' | 'error'

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormStatus(null);
      return;
    }

    setErrors({});

    // If a verified email address exists, trigger default mail client
    if (personal.email && personal.email.trim() !== '') {
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    } else {
      // Per instructions: "If no email exists, display 'Contact form integration can be connected later.' Do NOT create fake submission functionality."
      setFormStatus('no-backend');
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Let's build something meaningful.
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Have an idea, opportunity or project in mind? I'd be happy to connect.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Let's Connect */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-slate-800/80 backdrop-blur-md relative space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                  Let's connect.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I'm always interested in learning, building and collaborating on meaningful technology projects.
                </p>
              </div>

              {/* Direct Links */}
              <div className="space-y-3 pt-2">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-dark-950 border border-slate-800/80 hover:border-cyan-500/40 flex items-center justify-between group transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-dark-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400 uppercase">GitHub</p>
                      <p className="text-xs sm:text-sm font-semibold text-white">@Ruban-raj-143</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                    View →
                  </span>
                </a>

                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-dark-950 border border-slate-800/80 hover:border-cyan-500/40 flex items-center justify-between group transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-dark-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400 uppercase">LinkedIn</p>
                      <p className="text-xs sm:text-sm font-semibold text-white">ruban-raj-r</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                    Connect →
                  </span>
                </a>

                {personal.email && (
                  <a
                    href={`mailto:${personal.email}`}
                    className="p-3.5 rounded-xl bg-dark-950 border border-slate-800/80 hover:border-cyan-500/40 flex items-center justify-between group transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-dark-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-slate-400 uppercase">Email</p>
                        <p className="text-xs sm:text-sm font-semibold text-white">{personal.email}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                      Email →
                    </span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-slate-800/80 backdrop-blur-md relative">
              <h3 className="text-lg font-bold text-white mb-6">
                Send a Message
              </h3>

              {formStatus === 'no-backend' && (
                <div className="mb-6 p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center gap-3 text-xs sm:text-sm text-cyan-200">
                  <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Contact form integration can be connected later.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="Ada Lovelace"
                    className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors font-sans ${
                      errors.name
                        ? 'border-rose-500/80 focus:border-rose-500 ring-1 ring-rose-500/30'
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="ada@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors font-sans ${
                      errors.email
                        ? 'border-rose-500/80 focus:border-rose-500 ring-1 ring-rose-500/30'
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1 font-mono">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Hello Ruban, I would like to discuss..."
                    className={`w-full px-4 py-3 rounded-xl bg-dark-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors font-sans resize-none ${
                      errors.message
                        ? 'border-rose-500/80 focus:border-rose-500 ring-1 ring-rose-500/30'
                        : 'border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 font-mono">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all duration-200 active:scale-98 cursor-pointer mt-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
