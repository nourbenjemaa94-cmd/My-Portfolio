import { m } from 'framer-motion';
import { EDUCATION, POLAROIDS, SECTION_CLASS } from '@/data/portfolio';
import type { EducationEntry } from '@/types/portfolio';
import { Section, SectionHeading, TagPill, Polaroid, PaperCard } from '@/components/ui';

function EducationCard({ entry, index }: { entry: EducationEntry; index: number }) {
  return (
    <m.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div
        className="w-4 h-4 rounded-full bg-[#7A2A50] border-4 border-[#F4F5FA]"
        style={{ position: 'absolute', left: -36, top: 20 }}
      />
      <PaperCard
        accent="blue"
        className="shadow-md p-5"
        tape={{
          className: entry.tapeClassName,
          color: entry.tapeColor,
          style: { position: 'absolute', top: -4, right: index === 0 ? 16 : 12 },
        }}
      >
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
      </PaperCard>
    </m.div>
  );
}

export function Education() {
  return (
    <Section id="education" className={SECTION_CLASS}>
      <SectionHeading eyebrow="// where i've been" title="education" titleClassName="text-4xl md:text-5xl" className="mb-10" />
      <div className="relative">
        <div className="relative pl-8 border-l border-dashed border-[#D7DAE6] space-y-8 max-w-2xl w-full">
          {EDUCATION.map((entry, i) => (
            <EducationCard key={entry.school} entry={entry} index={i} />
          ))}
        </div>

        <Polaroid
          src={POLAROIDS.education.src}
          caption={POLAROIDS.education.caption}
          width={POLAROIDS.education.width}
          height={POLAROIDS.education.height}
          tapeColor="mauve"
          objectFit="contain"
          objectPosition="center"
          className="mx-auto mt-10 md:absolute md:right-0 md:-top-2 md:mx-0 md:mt-0 rotate-[-3deg] border-[12px] w-52 md:w-64"
          imageWrapClassName="w-full h-64 md:h-80"
          captionClassName="h-10 text-[11px]"
        />
      </div>
    </Section>
  );
}
