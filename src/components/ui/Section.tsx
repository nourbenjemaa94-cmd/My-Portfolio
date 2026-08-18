import * as React from 'react';
import { m, useInView } from 'framer-motion';

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <m.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </m.section>
  );
}
