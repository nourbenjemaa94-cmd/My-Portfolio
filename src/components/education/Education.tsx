import { m } from 'framer-motion';
import { EDUCATION, SECTION_CLASS } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TagPill } from '@/components/ui/TagPill';
import { WashiTape } from '@/components/ui/WashiTape';

export function Education() {
  return (
    <Section id="education" className={SECTION_CLASS}>
      <SectionHeading eyebrow="// where i've been" title="education" titleClassName="text-4xl md:text-5xl" className="mb-10" />
      <div className="relative pl-8 border-l border-dashed border-[#D7DAE6] space-y-8 max-w-2xl">
        {EDUCATION.map((entry, i) => (
          <m.div
            key={entry.school}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div
              className="w-4 h-4 rounded-full bg-[#7A2A50] border-4 border-[#F4F5FA]"
              style={{ position: 'absolute', left: -36, top: 20 }}
            />
            <div className="relative bg-white border-l-4 border-[#2F6FB0] shadow-md p-5 overflow-hidden">
              <WashiTape
                className={entry.tapeClassName}
                color={entry.tapeColor}
                style={{ position: 'absolute', top: -4, right: i === 0 ? 16 : 12 }}
              />
              <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                <h3 className="text-lg font-semibold text-[#181A26]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {entry.school}
                </h3>
                <span className="text-[#6B7080] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {entry.dates}
                </span>
              </div>
              {entry.schoolFull && (
                <p className="text-[#6B7080] text-xs mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {entry.schoolFull}
                </p>
              )}
              <p className="text-[#7A2A50] font-medium text-sm mb-3">{entry.degree}</p>
              <div className="flex flex-wrap gap-1.5">
                {entry.tags.map(t => (
                  <TagPill key={t} variant={entry.tagVariant}>
                    {t}
                  </TagPill>
                ))}
              </div>
            </div>
          </m.div>
        ))}
      </div>
    </Section>
  );
}
