import * as React from 'react';
import { m, useInView } from 'framer-motion';

export function ContributionGraph() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const cells = Array.from({ length: 35 }, (_, i) => {
    const val = (i * 7 + (i % 5) * 3 + 17) % 10;
    let bg = '#E9EBF3';
    if (val > 7) bg = '#7A2A50';
    else if (val > 5) bg = 'rgba(122,42,80,0.55)';
    else if (val > 3) bg = 'rgba(122,42,80,0.25)';
    return { i, bg };
  });

  return (
    <div ref={ref} className="mt-6">
      <span className="text-xs text-[#6B7080] mb-2 block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        // last 35 days
      </span>
      <div className="flex flex-wrap gap-1.5 max-w-[260px]">
        {cells.map(({ i, bg }) => (
          <m.div
            key={i}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: i * 0.02, type: 'spring', stiffness: 300, damping: 20 }}
            className="w-3.5 h-3.5 rounded-[2px]"
            style={{ backgroundColor: bg }}
          />
        ))}
      </div>
    </div>
  );
}
