import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function TagPill({
  children,
  variant = 'blue',
  className,
}: {
  children: ReactNode;
  variant?: 'blue' | 'mauve';
  className?: string;
}) {
  return (
    <span
      className={cn(
        'px-2.5 py-0.5 rounded-full text-[10px] font-medium border',
        variant === 'mauve'
          ? 'bg-[#F1E2EC] text-[#7A2A50] border-[#d4a0bc]'
          : 'bg-[#E0E8F7] text-[#1B2A4A] border-[#aec4e8]',
        className,
      )}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {children}
    </span>
  );
}
