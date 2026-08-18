import { m } from 'framer-motion';
import { ABOUT_PILLS, SECTION_CLASS } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WashiTape } from '@/components/ui/WashiTape';
import { cn } from '@/lib/utils';
import { ContributionGraph } from '@/components/about/ContributionGraph';

export function About() {
  return (
    <Section id="about" className={`${SECTION_CLASS} grid md:grid-cols-2 gap-12`}>
      <div>
        <SectionHeading
          eyebrow="ABOUT.md"
          title="about me"
          titleClassName="text-4xl md:text-5xl mb-0"
          className="mb-4"
        />
        <p className="text-[#181A26] leading-[1.8] mb-6 text-[15px]" style={{ fontFamily: "'Inter', sans-serif" }}>
          I'm Nour — a Computer Science student by day, side-project obsessive by night. I love the moment a
          problem <em>clicks</em>: when the architecture suddenly makes sense, when the bug disappears. I write
          clean-ish code and firmly believe that good documentation is an act of love.
        </p>
        <div className="flex flex-wrap gap-2">
          {ABOUT_PILLS.map(p => (
            <m.span
              key={p.label}
              whileHover={{ y: -2 }}
              className={cn(
                'px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-default',
                p.variant === 'mauve'
                  ? 'bg-[#F1E2EC] text-[#7A2A50] border-[#d4a0bc]'
                  : 'bg-[#E0E8F7] text-[#1B2A4A] border-[#aec4e8]',
              )}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {p.label}
            </m.span>
          ))}
        </div>
        <ContributionGraph />
      </div>

      <div className="relative">
        <div className="relative bg-white border-l-4 border-[#7A2A50] shadow-lg p-6">
          <WashiTape
            className="h-5 w-16 rotate-[8deg] rounded-sm"
            color="blue"
            style={{ position: 'absolute', top: -8, right: 16 }}
          />
          <pre
            className="text-[#181A26] text-[11px] leading-[1.9] whitespace-pre-wrap"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {`/*\n * Quick facts\n * ──────────────────\n * 📍 Based in:   Tunis, Tunisia\n * 🎓 Studying:   CS Engineering, Year 3\n * 💼 Also:       Freelance Dev\n * 🌍 Languages:  Arabic, English, French\n * ⚡ Currently:  Building a task manager\n */`}
          </pre>
        </div>
        <m.div
          initial={{ filter: 'saturate(0) brightness(0.5)', opacity: 0.3 }}
          whileInView={{ filter: 'saturate(1) brightness(1)', opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-6 ml-auto rotate-[3deg] bg-white border-[10px] border-white shadow-xl w-36 h-44"
        >
          <WashiTape
            className="h-4 w-12 rotate-[-5deg] rounded-sm"
            color="blue"
            style={{ position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)' }}
          />
          <div className="w-full h-28 overflow-hidden">
            <img
              src="/nounour.webp"
              alt="Nour Ben Jemaa"
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>
          <div className="h-8 flex items-center justify-center">
            <span className="text-[11px] text-[#6B7080]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              when the build passed ✓
            </span>
          </div>
        </m.div>
      </div>
    </Section>
  );
}
