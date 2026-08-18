import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  pin,
  className,
  titleClassName,
}: {
  eyebrow: string;
  title: string;
  pin?: boolean;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={className}>
      <p
        className="text-[#6B7080] text-xs uppercase tracking-[0.2em] mb-1"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {eyebrow}
      </p>
      <div className="flex items-center gap-3">
        <h2
          className={cn(
            'text-3xl md:text-4xl font-semibold text-[#181A26]',
            titleClassName,
          )}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h2>
        {pin && <span className="text-[#B83A6E] text-lg flex-shrink-0">📌</span>}
      </div>
      <svg viewBox="0 0 160 8" className="w-40 h-2 mt-1">
        <path
          d="M0,4 Q40,0 80,4 T160,4"
          stroke="#7A2A50"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
