import { ArrowRight, Download, Star } from 'lucide-react';
import { m } from 'framer-motion';
import { HERO_STATS, POLAROIDS } from '@/data/portfolio';
import { WashiTape, Polaroid, Button } from '@/components/ui';
import { TypewriterRole } from '@/components/hero/TypewriterRole';

export function Hero() {
  return (
    <section
      id="hero"
      className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-24 grid md:grid-cols-[3fr_2fr] gap-16 items-center"
    >
      <div>
        <p className="text-[#6B7080] text-sm mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          // hello, world
        </p>
        <h1
          className="text-[56px] md:text-[80px] text-[#7A2A50] leading-none mb-4 -ml-1"
          style={{ fontFamily: "'Sacramento', cursive", whiteSpace: 'nowrap' }}
        >
          Nour Ben Jemaa
        </h1>
        <TypewriterRole />
        <p
          className="mt-6 text-[#6B7080] text-base leading-[1.75] max-w-md"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Building clean things on the internet. Obsessed with how systems work. Currently specializing
          in software development at ISET Rades.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#projects">
            View my work <ArrowRight size={15} />
          </Button>
          <Button href="/Nour-BENJEMAA-Resume.pdf" download="Nour-BENJEMAA-Resume.pdf" variant="outline">
            Download CV <Download size={15} />
          </Button>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {HERO_STATS.map(s => (
            <span
              key={s.label}
              className="px-3 py-1 rounded-full bg-[#E0E8F7] text-[#1B2A4A] text-xs font-medium border border-[#aec4e8]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {s.label}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center min-h-[360px]">
        <m.div
          initial={{ rotate: -6, opacity: 0 }}
          animate={{ rotate: -4, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white border-l-4 border-[#7A2A50] shadow-md p-5 overflow-hidden"
          style={{
            position: 'absolute',
            inset: 0,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
          }}
        >
          <WashiTape className="h-4 w-14 rotate-[15deg] rounded-sm" style={{ position: 'absolute', top: -4, left: 12 }} />
          <WashiTape
            className="h-4 w-10 rotate-[-10deg] rounded-sm"
            color="blue"
            style={{ position: 'absolute', bottom: -4, right: 12 }}
          />
          <div className="text-[#6B7080] mb-2 text-[9px]"># hey.py</div>
          <pre className="text-[#181A26] text-[9px] leading-relaxed whitespace-pre-wrap">{`def me():\n  return {\n    "name": "Nour Ben Jemaa",\n    "status": "building things ✨"\n  }`}</pre>
        </m.div>

        <Polaroid
          src={POLAROIDS.hero.src}
          caption={POLAROIDS.hero.caption}
          width={POLAROIDS.hero.width}
          height={POLAROIDS.hero.height}
          reveal="mount"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-4 border-[12px] shadow-[0_12px_48px_rgba(0,0,0,0.22),0_4px_16px_rgba(0,0,0,0.12)]"
          imageWrapClassName="flex-grow"
          captionClassName="h-10 text-[9px]"
        />

        <m.div
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
          className="text-[#B83A6E]"
          style={{ position: 'absolute', top: -20, right: -24 }}
        >
          <Star size={32} fill="currentColor" />
        </m.div>
        <m.div
          whileHover={{ rotate: [-5, 5, -5], scale: 1.1 }}
          className="text-[#7A2A50] font-mono text-2xl font-bold"
          style={{ position: 'absolute', bottom: -12, left: -28 }}
        >
          {'</>'}
        </m.div>
        <m.div
          whileHover={{ scale: 1.15 }}
          className="text-[#2F6FB0] font-mono text-xl font-bold"
          style={{ position: 'absolute', top: '30%', left: -32 }}
        >
          {'{ }'}
        </m.div>
      </div>
    </section>
  );
}
