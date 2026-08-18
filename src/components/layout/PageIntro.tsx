import * as React from 'react';
import { m } from 'framer-motion';
import { PAPER_BG } from '@/data/portfolio';

export function PageIntro({ onDone }: { onDone: () => void }) {
  React.useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <m.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.9 }}
      className="fixed inset-0 z-[9998] bg-[#F4F5FA] flex items-center justify-center"
      style={{ backgroundImage: PAPER_BG.replace('0.03', '0.04') }}
    >
      <div className="flex items-center justify-center w-full">
        <svg viewBox="0 0 420 100" className="w-80 md:w-[420px]" style={{ overflow: 'visible' }}>
          <text
            x="210"
            y="80"
            textAnchor="middle"
            fontFamily="'Sacramento', cursive"
            fontSize="80"
            fill="none"
            stroke="#7A2A50"
            strokeWidth="1.5"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000,
              animation: 'handwrite-in 1.4s ease forwards',
            }}
          >
            Nour Ben Jemaa
          </text>
          <text
            x="210"
            y="80"
            textAnchor="middle"
            fontFamily="'Sacramento', cursive"
            fontSize="80"
            fill="#7A2A50"
            style={{ opacity: 0, animation: 'fadeIn 0.4s ease forwards 1.4s' }}
          >
            Nour Ben Jemaa
          </text>
        </svg>
      </div>
    </m.div>
  );
}
