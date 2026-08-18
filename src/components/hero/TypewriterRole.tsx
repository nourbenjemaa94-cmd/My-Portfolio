import * as React from 'react';
import { ROLES } from '@/data/portfolio';

export function TypewriterRole() {
  const [index, setIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentRole = ROLES[index];
    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex(prev => (prev + 1) % ROLES.length);
      } else {
        setDisplayText(prev =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1),
        );
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <div
      className="text-lg md:text-xl text-[#181A26] h-8 flex items-center"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <span>{displayText}</span>
      <span className="cursor-blink w-0.5 h-5 bg-[#7A2A50] ml-0.5 inline-block" />
    </div>
  );
}
