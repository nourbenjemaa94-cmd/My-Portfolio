import type { ReactNode } from 'react';
import { m } from 'framer-motion';
import { cn } from '@/lib/utils';

const VARIANTS = {
  primary:
    'bg-[#7A2A50] text-white shadow-lg shadow-[#7A2A50]/20 hover:bg-[#692B56]',
  outline:
    'border border-[#D7DAE6] text-[#181A26] hover:bg-white',
} as const;

export function Button({
  href,
  download,
  variant = 'primary',
  className,
  children,
}: {
  href?: string;
  download?: string;
  variant?: keyof typeof VARIANTS;
  className?: string;
  children: ReactNode;
}) {
  const classes = cn(
    'px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium transition-all',
    VARIANTS[variant],
    className,
  );

  const motion = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <m.a
        href={href}
        download={download}
        className={classes}
        style={{ fontFamily: "'Inter', sans-serif" }}
        {...motion}
      >
        {children}
      </m.a>
    );
  }

  return (
    <m.button
      type="button"
      className={classes}
      style={{ fontFamily: "'Inter', sans-serif" }}
      {...motion}
    >
      {children}
    </m.button>
  );
}
