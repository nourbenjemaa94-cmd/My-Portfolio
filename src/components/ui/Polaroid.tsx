import { m } from 'framer-motion';
import { WashiTape, type WashiTapeColor } from '@/components/ui/WashiTape';
import { cn } from '@/lib/utils';

export function Polaroid({
  src,
  alt = 'Nour Ben Jemaa',
  caption,
  tapeColor = 'blue',
  objectFit = 'cover',
  objectPosition = 'center top',
  className,
  imageWrapClassName,
  captionClassName,
  width = 640,
  height = 480,
  loading = 'lazy',
  fetchPriority,
  reveal = 'inView',
}: {
  src: string;
  alt?: string;
  caption: string;
  tapeColor?: WashiTapeColor;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
  className?: string;
  imageWrapClassName?: string;
  captionClassName?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  reveal?: 'inView' | 'mount';
}) {
  const isMount = reveal === 'mount';

  return (
    <m.div
      initial={
        isMount
          ? { rotate: 6, opacity: 0, filter: 'saturate(0) brightness(0.5)' }
          : { filter: 'saturate(0) brightness(0.5)', opacity: 0.3 }
      }
      animate={isMount ? { rotate: 3, opacity: 1, filter: 'saturate(1) brightness(1)' } : undefined}
      whileInView={isMount ? undefined : { filter: 'saturate(1) brightness(1)', opacity: 1 }}
      transition={isMount ? { duration: 0.8, delay: 0.4 } : { duration: 0.8 }}
      className={cn('relative bg-white border-white shadow-xl flex flex-col', className)}
    >
      <WashiTape
        className="h-4 w-12 rotate-[-5deg] rounded-sm"
        color={tapeColor}
        style={{ position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)' }}
      />
      <div className={cn('overflow-hidden bg-white', imageWrapClassName)}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          fetchPriority={fetchPriority}
          style={{
            width: '100%',
            height: '100%',
            objectFit,
            objectPosition,
            display: 'block',
          }}
        />
      </div>
      <div className={cn('flex items-center justify-center bg-white flex-shrink-0', captionClassName)}>
        <span className="text-[#6B7080]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          {caption}
        </span>
      </div>
    </m.div>
  );
}
