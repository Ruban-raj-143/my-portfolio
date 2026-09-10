import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-dark-950 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Left Brand & Moniker */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="font-display font-bold text-base tracking-wider text-white">
              {personal.name.toUpperCase()}
            </span>
            <p className="text-xs font-mono text-slate-400 mt-1">
              AI & Data Science Student • Developer • Builder
            </p>
          </div>

          {/* Right Social Icons & Links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
            {personal.phone && (
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="Call Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left font-mono">
          <p>© 2026 {personal.name}. Built with React.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
