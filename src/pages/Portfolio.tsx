import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { SiteLayout, PageIntro } from '@/components/layout';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Education } from '@/components/education/Education';
import { TechStack } from '@/components/stack/TechStack';
import { Projects } from '@/components/projects/Projects';
import { Experience } from '@/components/experience/Experience';
import { Contact } from '@/components/contact/Contact';

export function Portfolio() {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [introVisible, setIntroVisible] = React.useState(!prefersReducedMotion);

  return (
    <SiteLayout
      overlay={
        <AnimatePresence>
          {introVisible && <PageIntro onDone={() => setIntroVisible(false)} />}
        </AnimatePresence>
      }
    >
      <Hero />
      <About />
      <Education />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </SiteLayout>
  );
}

export default Portfolio;
