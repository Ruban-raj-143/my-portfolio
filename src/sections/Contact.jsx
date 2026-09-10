import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowRight, AlertCircle, Mail, Phone, GraduationCap, CheckCircle2, Loader2, Send } from 'lucide-react';
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
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [serverError, setServerError] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setFormStatus('sending');
    setServerError('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
        }),
      });

      const result = await response.json();

      if (response.ok || result.success === 'true' || result.success === true) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message.');
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      // Fallback: If network/CORS fails, open mail client directly
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setFormStatus('error');
      setServerError('Direct submission failed, but your default mail client was opened.');
    }
  };

  const handleReset = () => {
    setFormStatus('idle');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setServerError('');
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
            Open to internship opportunities, collaborative projects and opportunities to learn and build.
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
                  Open to internships, engineering collaborations and opportunities to solve challenging problems.
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

                {personal.phone && (
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="p-3.5 rounded-xl bg-dark-950 border border-slate-800/80 hover:border-cyan-500/40 flex items-center justify-between group transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-dark-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-mono text-slate-400 uppercase">Phone / WhatsApp</p>
                        <p className="text-xs sm:text-sm font-semibold text-white truncate">{personal.phone}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                      Call →
                    </span>
                  </a>
                )}

                {personal.email && (
                  <a
                    href={`mailto:${personal.email}`}
                    className="p-3.5 rounded-xl bg-dark-950 border border-slate-800/80 hover:border-cyan-500/40 flex items-center justify-between group transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-dark-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-mono text-slate-400 uppercase">Personal Email</p>
                        <p className="text-xs sm:text-sm font-semibold text-white truncate">{personal.email}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                      Email →
                    </span>
                  </a>
                )}

                {personal.academicEmail && (
                  <a
                    href={`mailto:${personal.academicEmail}`}
                    className="p-3.5 rounded-xl bg-dark-950 border border-slate-800/80 hover:border-cyan-500/40 flex items-center justify-between group transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-dark-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-mono text-slate-400 uppercase">Academic / Outlook</p>
                        <p className="text-xs sm:text-sm font-semibold text-white truncate">{personal.academicEmail}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2">
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

              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-md">
                        Thank you for reaching out. Your message has been forwarded directly to Ruban Raj's inbox.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-dark-950 border border-slate-800 hover:border-emerald-500/40 text-xs font-mono text-emerald-400 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {serverError && (
                      <div className="mb-6 p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center gap-3 text-xs text-amber-200">
                        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                        <span>{serverError}</span>
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
                          disabled={formStatus === 'sending'}
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: null });
                          }}
                          placeholder="Your Name"
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
                          disabled={formStatus === 'sending'}
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: null });
                          }}
                          placeholder="your.email@example.com"
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
                          disabled={formStatus === 'sending'}
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
                        disabled={formStatus === 'sending'}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all duration-200 active:scale-98 cursor-pointer mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {formStatus === 'sending' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
