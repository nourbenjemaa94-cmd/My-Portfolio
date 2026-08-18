import { Star } from 'lucide-react';
import { NAV_ITEMS } from '@/data/portfolio';

export function Navbar() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-40 bg-[#F4F5FA]/80 backdrop-blur-md border-b border-[#D7DAE6] px-6 h-14 flex items-center justify-between shadow-sm"
    >
      <a
        href="#hero"
        className="flex items-center gap-1 hover:opacity-80 transition-opacity"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <span className="text-[#2F6FB0] text-base">~/nour</span>
        <span className="cursor-blink w-0.5 h-4 bg-[#7A2A50] inline-block ml-0.5" />
      </a>
      <div className="hidden md:flex items-center gap-3">
        {NAV_ITEMS.map(item => (
          <a
            key={item}
            href={`#${item}`}
            className="px-3 py-1 text-xs font-medium text-[#181A26] border border-[#D7DAE6] rounded-full hover:bg-[#F1E2EC] hover:border-[#7A2A50]/30 transition-all"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {item}
          </a>
        ))}
      </div>
      <Star size={16} className="text-[#B83A6E] fill-[#B83A6E]" />
    </nav>
  );
}
