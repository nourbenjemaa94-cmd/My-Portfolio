import { m } from 'framer-motion';
import { ABOUT_PILLS, POLAROIDS, SECTION_CLASS } from '@/data/portfolio';
import { Section, SectionHeading, Polaroid, PaperCard, TagPill } from '@/components/ui';
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
        <p className="text-[#181A26] leading-[1.8] mb-4 text-[15px]" style={{ fontFamily: "'Inter', sans-serif" }}>
          Hi — I'm Nour, from Tunisia. I finished high school with honors on the math track, then wanted
          that same problem-solving muscle on real things. So I got into IT, specializing in software
          development, with a growing interest in AI/ML.
        </p>
        <p className="text-[#181A26] leading-[1.8] mb-6 text-[15px]" style={{ fontFamily: "'Inter', sans-serif" }}>
          I learn by shipping: working as a developer alongside university, building web apps for clients
          from design to deployment (and debugging in between). Off-screen I volunteer with IEEE, community
          projects, hackathons, and competitions — pitching to strangers taught me what tutorials never
          could. I'm also starting to document the messy journey on YouTube.
        </p>
        <div className="flex flex-wrap gap-2">
          {ABOUT_PILLS.map(p => (
            <m.span key={p.label} whileHover={{ y: -2 }} className="cursor-default">
              <TagPill variant={p.variant} className="px-3 py-1.5 text-xs">
                {p.label}
              </TagPill>
            </m.span>
          ))}
        </div>
        <ContributionGraph />
      </div>

      <div className="relative">
        <PaperCard
          className="shadow-lg p-6"
          tape={{
            className: 'h-5 w-16 rotate-[8deg] rounded-sm',
            color: 'blue',
            style: { position: 'absolute', top: -8, right: 16 },
          }}
        >
          <pre
            className="text-[#181A26] text-[11px] leading-[1.9] whitespace-pre-wrap"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {`/*\n * Quick facts\n * ──────────────────\n * 📍 Based in:   Tunis, Tunisia\n * 🎓 Studying:   Software Dev, ISET Rades\n * 💼 Also:       Full-Stack Developer\n * 🌍 Languages:  Arabic, English, French\n * ⚡ Currently:  Shipping client web apps\n */`}
          </pre>
        </PaperCard>
        <Polaroid
          src={POLAROIDS.about.src}
          caption={POLAROIDS.about.caption}
          width={POLAROIDS.about.width}
          height={POLAROIDS.about.height}
          className="mt-6 ml-auto rotate-[3deg] border-[10px] w-44 h-56"
          imageWrapClassName="w-full h-40"
          captionClassName="h-8 text-[11px]"
        />
      </div>
    </Section>
  );
}
