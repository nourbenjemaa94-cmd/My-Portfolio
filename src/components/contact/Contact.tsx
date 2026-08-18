import * as React from 'react';
import { m } from 'framer-motion';
import { SOCIAL_LINKS } from '@/data/portfolio';
import { WashiTape } from '@/components/ui/WashiTape';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SocialIcon, socialHref } from '@/components/ui/SocialIcon';
import { cn } from '@/lib/utils';

export function Contact() {
  const [formState, setFormState] = React.useState<'idle' | 'sending' | 'sent'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
  };

  return (
    <section id="contact" className="bg-[#E9EBF3] border-t border-[#D7DAE6]/60 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
        <div>
          <SectionHeading eyebrow="07 —" title="let's connect" className="mb-4" />
          <p className="text-[#6B7080] text-base leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            Always up for interesting projects, collabs, or just a chat.
          </p>
          <div className="relative">
            <WashiTape
              className="h-5 w-14 rotate-[5deg] rounded-sm"
              color="mauve"
              style={{ position: 'absolute', top: -8, right: 16 }}
            />
            <div className="bg-white border border-[#D7DAE6] shadow-sm p-5">
              <div className="text-[#6B7080] mb-4 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                $ links --list
              </div>
              <div className="space-y-2">
                {SOCIAL_LINKS.map(link => (
                  <a
                    key={link.label}
                    href={socialHref(link)}
                    target={link.icon === 'email' ? undefined : '_blank'}
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded hover:bg-[#F1E2EC] group transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#7A2A50] text-sm">↗</span>
                      <span
                        className="text-[#2F6FB0] text-xs font-bold group-hover:underline underline-offset-4"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {link.label}
                      </span>
                    </div>
                    <span
                      className="text-[#6B7080] text-[10px] hidden sm:inline"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {link.url}
                    </span>
                    <span className="text-[#6B7080] group-hover:text-[#7A2A50] transition-colors">
                      <SocialIcon name={link.icon} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative">
            <WashiTape
              className="h-5 w-16 rotate-[-4deg] rounded-sm"
              color="mauve"
              style={{ position: 'absolute', top: -8, left: 16 }}
            />
            <WashiTape
              className="h-5 w-12 rotate-[6deg] rounded-sm"
              color="blue"
              style={{ position: 'absolute', top: -8, right: 16 }}
            />
            <m.div initial={{ rotate: 1 }} whileInView={{ rotate: 0 }} className="bg-white border border-[#D7DAE6] shadow-xl p-6">
              <form
                onSubmit={handleFormSubmit}
                className="space-y-5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#6B7080] text-xs flex-shrink-0">{'>'} name</span>
                    <input
                      type="text"
                      required
                      placeholder="___________"
                      className="flex-1 bg-transparent border-b border-dashed border-[#D7DAE6] focus:border-[#7A2A50] outline-none text-sm text-[#181A26] pb-0.5 transition-colors placeholder:text-[#D7DAE6]"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#6B7080] text-xs flex-shrink-0">{'>'} email</span>
                    <input
                      type="email"
                      required
                      placeholder="___________"
                      className="flex-1 bg-transparent border-b border-dashed border-[#D7DAE6] focus:border-[#7A2A50] outline-none text-sm text-[#181A26] pb-0.5 transition-colors placeholder:text-[#D7DAE6]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[#6B7080] text-xs">{'>'} message</span>
                    <textarea
                      required
                      rows={4}
                      placeholder="___________"
                      className="bg-transparent border border-dashed border-[#D7DAE6] focus:border-[#7A2A50] outline-none text-sm text-[#181A26] p-3 resize-none transition-colors placeholder:text-[#D7DAE6]"
                    />
                  </div>
                </div>
                <m.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(122,42,80,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formState !== 'idle'}
                  className={cn(
                    'w-full py-3 rounded-full font-bold text-sm transition-all shadow-md',
                    formState === 'idle'
                      ? 'bg-[#7A2A50] text-white hover:bg-[#692B56]'
                      : 'bg-[#E9EBF3] text-[#6B7080] cursor-not-allowed',
                  )}
                >
                  {formState === 'idle' && '[ Send message → ]'}
                  {formState === 'sending' && '> sending...'}
                  {formState === 'sent' && '> ✓ message sent!'}
                </m.button>
                {formState === 'sending' && (
                  <m.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-4 h-0.5 bg-[#7A2A50] mx-auto"
                  />
                )}
              </form>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
