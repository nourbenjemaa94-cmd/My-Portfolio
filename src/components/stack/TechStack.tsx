import * as React from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { SECTION_CLASS, SKILLS, TECH_CARDS, TECH_FILTERS } from '@/data/portfolio';
import { Section, SectionHeading, WashiTape, PaperCard } from '@/components/ui';
import { cn } from '@/lib/utils';

export function TechStack() {
  const [activeFilter, setActiveFilter] = React.useState<(typeof TECH_FILTERS)[number]>('All');
  const filteredCards = TECH_CARDS.filter(c => activeFilter === 'All' || c.category === activeFilter);

  return (
    <Section id="stack" className={SECTION_CLASS}>
      <SectionHeading
        eyebrow="04 —"
        title="tech stack"
        titleClassName="text-4xl md:text-5xl"
        className="mb-6"
      />

      <div className="flex flex-wrap gap-2 mb-6">
        {TECH_FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={cn(
              'px-3 py-1 rounded-full text-xs font-medium transition-all',
              activeFilter === f
                ? 'bg-[#7A2A50] text-white'
                : 'bg-white border border-[#D7DAE6] text-[#181A26] hover:bg-[#F1E2EC]',
            )}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
        <AnimatePresence mode="popLayout">
          {filteredCards.map((card, i) => (
            <m.div
              key={card.name}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4, borderColor: '#7A2A50' }}
              className="bg-white border border-[#D7DAE6] rounded-lg p-4 flex flex-col items-center gap-2 shadow-sm relative overflow-hidden cursor-default"
            >
              <WashiTape
                className="h-3 w-8 rotate-[10deg] rounded-sm opacity-60"
                color="mauve"
                style={{ position: 'absolute', top: -2, right: -2 }}
              />
              <span className="text-2xl">{card.emoji}</span>
              <span
                className="text-xs font-semibold text-[#181A26] text-center"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {card.name}
              </span>
              <div className="w-full h-0.5 bg-[#E9EBF3] mt-auto">
                <m.div initial={{ width: 0 }} whileInView={{ width: '80%' }} className="h-full bg-[#7A2A50]" />
              </div>
            </m.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="relative max-w-lg">
        <WashiTape
          className="h-5 w-16 rotate-[-12deg] rounded-sm"
          color="blue"
          style={{ position: 'absolute', top: -8, right: 16 }}
        />
        <PaperCard className="shadow-lg p-6">
          <div className="text-[#6B7080] mb-4 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            // skill_levels.txt
          </div>
          <div className="space-y-5">
            {SKILLS.map(skill => (
              <div key={skill.name}>
                <div
                  className="flex justify-between text-xs mb-1.5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span className="text-[#181A26]">{skill.name}</span>
                  <span className="text-[#7A2A50]">{skill.level}%</span>
                </div>
                <div className="h-4 bg-[#E9EBF3] border border-[#D7DAE6] p-[2px]">
                  <m.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full bg-[#7A2A50] flex items-center overflow-hidden"
                  >
                    <span
                      className="text-white/20 text-[7px] tracking-[1px] whitespace-nowrap ml-0.5"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      ████████████████
                    </span>
                  </m.div>
                </div>
              </div>
            ))}
          </div>
        </PaperCard>
      </div>
    </Section>
  );
}
