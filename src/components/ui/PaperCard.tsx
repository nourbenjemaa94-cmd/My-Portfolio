import type { CSSProperties, ReactNode } from 'react';
import { WashiTape, type WashiTapeColor } from '@/components/ui/WashiTape';
import { cn } from '@/lib/utils';

const ACCENT = {
  mauve: 'border-l-4 border-[#7A2A50]',
  blue: 'border-l-4 border-[#2F6FB0]',
  navy: 'border-l-4 border-[#1B2A4A]',
  plain: 'border border-[#D7DAE6]',
} as const;

export function PaperCard({
  children,
  className,
  accent = 'mauve',
  tape,
}: {
  children: ReactNode;
  className?: string;
  accent?: keyof typeof ACCENT;
  tape?: {
    color?: WashiTapeColor;
    className?: string;
    style?: CSSProperties;
  };
}) {
  return (
    <div className={cn('relative bg-white', ACCENT[accent], className)}>
      {tape && (
        <WashiTape
          className={tape.className}
          color={tape.color}
          style={tape.style}
        />
      )}
      {children}
    </div>
  );
}
