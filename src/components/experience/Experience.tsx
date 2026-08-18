import { m } from 'framer-motion';
import { EXPERIENCES, SECTION_CLASS } from '@/data/portfolio';
import { Section, SectionHeading, PaperCard } from '@/components/ui';

export function Experience() {
  return (
    <Section id="experience" className={SECTION_CLASS}>
      <SectionHeading eyebrow="// commit history" title="experience" className="mb-10" />
      <div className="space-y-5 max-w-2xl">
        {EXPERIENCES.map((exp, i) => (
          <m.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <PaperCard
              accent="navy"
              className="shadow-md p-5"
              tape={{
                className: `h-4 w-14 rounded-sm ${i % 2 === 0 ? '-rotate-3' : 'rotate-2'}`,
                color: i % 2 === 0 ? 'mauve' : 'blue',
                style: { position: 'absolute', top: -4, right: i % 2 === 0 ? 16 : 24 },
              }}
            >
              <div className="flex items-center gap-2 mb-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>
                <span className="text-[#7A2A50]">●</span>
                <span className="text-[#6B7080]">commit</span>
                <m.span whileHover={{ letterSpacing: '0.1em' }} className="text-[#B83A6E] cursor-default font-semibold">
                  {exp.hash}
                </m.span>
              </div>
              <p className="text-[#6B7080] text-[11px] mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Date: {exp.date}
              </p>
              <h3 className="text-sm font-semibold text-[#181A26] mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="text-[#2F6FB0]">feat:</span> {exp.role} @ {exp.company}
              </h3>
              <div className="space-y-1 mb-3">
                {exp.bullets.map(bullet => (
                  <p
                    key={bullet}
                    className="flex gap-3 text-xs text-[#181A26]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <span className="text-[#6B7080]">─</span>
                    <span>{bullet}</span>
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] bg-[#E0E8F7] text-[#1B2A4A] border border-[#aec4e8] font-mono"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    [{tag}]
                  </span>
                ))}
              </div>
            </PaperCard>
          </m.div>
        ))}
      </div>
    </Section>
  );
}
