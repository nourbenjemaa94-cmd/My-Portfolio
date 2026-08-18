import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { PAPER_BG } from '@/data/portfolio';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageIntro } from '@/components/layout/PageIntro';
import { CursorTrail } from '@/components/layout/CursorTrail';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
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
    <div className="min-h-screen bg-[#F4F5FA]" style={{ backgroundImage: PAPER_BG }}>
      <AnimatePresence>
        {introVisible && <PageIntro onDone={() => setIntroVisible(false)} />}
      </AnimatePresence>
      <CursorTrail />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
