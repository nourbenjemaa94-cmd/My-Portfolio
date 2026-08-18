import { Github, Linkedin, Mail, Star } from 'lucide-react';
import { SOCIAL_HREFS } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="bg-[#F4F5FA] border-t border-[#D7DAE6] py-8 flex flex-col items-center gap-4">
      <div className="flex items-center gap-4 text-[#7A2A50]">
        <a
          href={SOCIAL_HREFS.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 transition-transform"
        >
          <Github size={18} />
        </a>
        <a
          href={SOCIAL_HREFS.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform"
        >
          <Linkedin size={18} />
        </a>
        <a href={SOCIAL_HREFS.email} aria-label="Email" className="hover:scale-110 transition-transform">
          <Mail size={18} />
        </a>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[#6B7080] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          // built with React + Vite by Nour Ben Jemaa · 2026
        </span>
        <Star size={12} className="text-[#B83A6E] fill-[#B83A6E]" />
      </div>
    </footer>
  );
}
