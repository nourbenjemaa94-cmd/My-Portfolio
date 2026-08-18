import type { ReactNode } from 'react';
import { PAPER_BG } from '@/data/portfolio';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CursorTrail } from '@/components/layout/CursorTrail';
import { ScrollProgress } from '@/components/layout/ScrollProgress';

export function SiteLayout({
  children,
  overlay,
}: {
  children: ReactNode;
  overlay?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F4F5FA]" style={{ backgroundImage: PAPER_BG }}>
      {overlay}
      <CursorTrail />
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
