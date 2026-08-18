import { m } from 'framer-motion';
import { Code, Github } from 'lucide-react';
import { PROJECTS, SECTION_CLASS } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TagPill } from '@/components/ui/TagPill';
import { WashiTape } from '@/components/ui/WashiTape';
import { cn } from '@/lib/utils';

export function Projects() {
  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <Section id="projects" className={SECTION_CLASS}>
      <SectionHeading
        eyebrow="// things i've built"
        title="projects"
        pin
        titleClassName="text-4xl md:text-5xl"
        className="mb-10"
      />

      {featured && (
        <m.div
          className="mb-8 bg-white border border-[#7A2A50]/30 shadow-lg breathe-shadow relative overflow-hidden"
          whileHover={{ y: -4 }}
          style={{ borderRadius: 16 }}
        >
          <WashiTape
            className="h-5 w-14 rotate-[-8deg] rounded-sm"
            color="mauve"
            style={{ position: 'absolute', top: -4, left: 16 }}
          />
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-52 flex-shrink-0 bg-[#F4F5FA] flex items-center justify-center p-3">
              <img
                src="/e-fleur2.jpg"
                alt="FlowerShop app screenshot"
                width={378}
                height={800}
                loading="lazy"
                decoding="async"
                className="max-h-[420px] w-full h-full object-contain"
              />
            </div>
            <div className="p-6 md:pl-5 flex flex-col justify-center flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2 gap-2">
                <h3 className="text-xl font-semibold text-[#181A26]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {featured.title}
                </h3>
                <span className="flex-shrink-0 px-2 py-0.5 border-2 border-[#7A2A50] text-[#7A2A50] text-[9px] font-bold tracking-widest uppercase font-mono">
                  ★ FEATURED
                </span>
              </div>
              <p className="text-[#6B7080] text-sm leading-relaxed mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {featured.tags.map(tag => (
                  <TagPill key={tag}>{tag}</TagPill>
                ))}
              </div>
              <a
                href="https://github.com/nourbenjemaa94-cmd/Internship-Project"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 self-start px-3 py-2 rounded-md bg-[#7A2A50] text-white text-xs font-medium hover:bg-[#692B56] transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <Github size={14} />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </m.div>
      )}

      {rest.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <m.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#D7DAE6] shadow-md p-5 relative overflow-hidden"
              style={{ borderRadius: 16 }}
            >
              <WashiTape
                className={cn('h-4 w-12 rounded-sm', i === 0 ? 'rotate-[5deg]' : 'rotate-[-7deg]')}
                color={i === 0 ? 'mauve' : 'blue'}
                style={{
                  position: 'absolute',
                  top: -4,
                  right: i === 0 ? 12 : undefined,
                  left: i === 1 ? 12 : undefined,
                }}
              />
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-[#181A26]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {project.title}
                </h3>
                {project.isWip && (
                  <span className="flex-shrink-0 px-2 py-0.5 border-2 border-[#7A2A50] text-[#7A2A50] text-[9px] font-bold tracking-widest uppercase font-mono">
                    ⚡ WIP
                  </span>
                )}
              </div>
              <p className="text-[#6B7080] text-sm mb-3 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map(tag => (
                  <TagPill key={tag} variant={i === 0 ? 'mauve' : 'blue'}>
                    {tag}
                  </TagPill>
                ))}
              </div>
              <div className="flex gap-3">
                {project.links.map(link => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="flex items-center gap-1 text-xs text-[#7A2A50] hover:text-[#692B56] transition-colors"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <Code size={12} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      )}
    </Section>
  );
}
