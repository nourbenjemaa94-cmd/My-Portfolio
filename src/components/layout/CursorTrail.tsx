import * as React from 'react';

export function CursorTrail() {
  const [pos, setPos] = React.useState({ x: -100, y: -100 });
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setVisible(true);
      setTimeout(() => setPos({ x: e.clientX, y: e.clientY }), 80);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9990] w-2 h-2 rounded-full bg-[#7A2A50] opacity-40"
      style={{
        left: pos.x - 4,
        top: pos.y - 4,
        transition: 'left 0.1s, top 0.1s',
      }}
    />
  );
}
