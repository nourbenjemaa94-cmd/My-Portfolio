import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

export type WashiTapeColor = 'mauve' | 'blue' | 'amber';

export function WashiTape({
  className,
  color = 'mauve',
  style,
}: {
  className?: string;
  color?: WashiTapeColor;
  style?: CSSProperties;
}) {
  const bg = {
    mauve: 'bg-[#F1E2EC] border-[#e8c8d8]',
    blue: 'bg-[#E0E8F7] border-[#c8d8f0]',
    amber: 'bg-[#F5E6C8] border-[#e8d0a0]',
  }[color];

  return (
    <div
      className={cn('pointer-events-none select-none border-[0.5px] opacity-80', bg, className)}
      style={style}
    />
  );
}
