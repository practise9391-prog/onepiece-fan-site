import React, { useEffect, useState } from 'react';

export type CursorMode = 'default' | 'pointer' | 'arc' | 'zoro' | 'sanji' | 'gear5';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [mode, setMode] = useState<CursorMode>('default');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Determine hover target mode
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorType = target.closest('[data-cursor]')?.getAttribute('data-cursor') as CursorMode | null;
      if (cursorType) {
        setMode(cursorType);
      } else if (target.closest('button, a, input, select, textarea, [role="button"]')) {
        setMode('pointer');
      } else {
        setMode('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Smooth trailing animation
    let animationFrameId: number;
    const updateTrail = () => {
      setTrailingPos(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.25,
        y: prev.y + (pos.y - prev.y) * 0.25,
      }));
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    animationFrameId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos]);

  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Center sharp dot */}
      <div
        className="fixed w-2 h-2 rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          backgroundColor:
            mode === 'zoro' ? '#10b981' :
            mode === 'sanji' ? '#ef4444' :
            mode === 'gear5' ? '#facc15' :
            mode === 'arc' ? '#38bdf8' : '#f59e0b',
          boxShadow: `0 0 10px ${
            mode === 'zoro' ? '#10b981' :
            mode === 'sanji' ? '#ef4444' :
            mode === 'gear5' ? '#facc15' :
            mode === 'arc' ? '#38bdf8' : '#f59e0b'
          }`
        }}
      />

      {/* Trailing dynamic indicator */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out flex items-center justify-center ${
          mode === 'pointer' ? 'w-10 h-10 border-2 border-amber-400 bg-amber-400/10 rounded-full scale-110' :
          mode === 'arc' ? 'w-12 h-12 border-2 border-dashed border-cyan-400 rounded-full animate-spin-slow' :
          mode === 'zoro' ? 'w-10 h-10 border-2 border-emerald-500 rounded-none rotate-45 bg-emerald-500/10' :
          mode === 'sanji' ? 'w-11 h-11 border-2 border-red-500 rounded-full bg-orange-500/15 animate-pulse' :
          mode === 'gear5' ? 'w-12 h-12 border-2 border-yellow-300 rounded-full bg-yellow-200/20 animate-pulse-glow' :
          'w-8 h-8 border border-amber-500/40 rounded-full'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        {mode === 'arc' && (
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
        )}
        {mode === 'zoro' && (
          <div className="w-4 h-0.5 bg-emerald-400 rotate-45" />
        )}
      </div>
    </div>
  );
};

