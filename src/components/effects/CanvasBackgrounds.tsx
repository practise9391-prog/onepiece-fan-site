import React, { useEffect, useRef } from 'react';

export type BackgroundTheme =
  | 'ocean'
  | 'gear5'
  | 'zoro'
  | 'sanji'
  | 'brook'
  | 'chopper'
  | 'jinbe'
  | 'robin'
  | 'franky'
  | 'nami'
  | 'default';

interface CanvasBackgroundsProps {
  theme?: BackgroundTheme;
  className?: string;
  opacity?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  char?: string;
  rotation?: number;
  vRot?: number;
  life?: number;
  maxLife?: number;
}

export const CanvasBackgrounds: React.FC<CanvasBackgroundsProps> = ({
  theme = 'gear5',
  className = '',
  opacity = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Lean particle count for maximum performance (120fps smooth)
    const count = theme === 'gear5' ? 28 : theme === 'ocean' ? 22 : 30;
    const particles: Particle[] = [];

    const notes = ['♩', '♪', '♫', '♬'];

    for (let i = 0; i < count; i++) {
      particles.push(createParticle(theme, width, height, notes));
    }

    function createParticle(t: BackgroundTheme, w: number, h: number, notePool: string[]): Particle {
      const p: Particle = {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: 0,
        vy: 0,
        size: 2,
        alpha: Math.random() * 0.7 + 0.3,
        color: '#ffffff',
        life: 0,
        maxLife: Math.random() * 200 + 100
      };

      if (t === 'gear5') {
        p.vx = (Math.random() - 0.5) * 1.5;
        p.vy = -Math.random() * 1.8 - 0.4;
        p.size = Math.random() * 5 + 3;
        p.color = Math.random() > 0.4 ? '#fef08a' : '#ffffff';
        p.rotation = Math.random() * Math.PI * 2;
        p.vRot = (Math.random() - 0.5) * 0.05;
      } else if (t === 'zoro') {
        p.vx = Math.random() * 2 - 0.5;
        p.vy = Math.random() * 2.5 + 0.8;
        p.size = Math.random() * 4 + 2;
        p.color = Math.random() > 0.3 ? '#10b981' : '#34d399';
        p.rotation = Math.random() * Math.PI * 2;
        p.vRot = (Math.random() - 0.5) * 0.08;
      } else if (t === 'sanji') {
        p.vx = (Math.random() - 0.5) * 2;
        p.vy = -Math.random() * 3.5 - 1;
        p.size = Math.random() * 4 + 1.5;
        p.color = Math.random() > 0.6 ? '#60a5fa' : Math.random() > 0.3 ? '#f97316' : '#ef4444';
      } else if (t === 'brook') {
        p.vx = (Math.random() - 0.5) * 1.2;
        p.vy = -Math.random() * 1.5 - 0.5;
        p.size = Math.random() * 14 + 12;
        p.color = Math.random() > 0.5 ? '#c084fc' : '#e879f9';
        p.char = notePool[Math.floor(Math.random() * notePool.length)];
        p.rotation = (Math.random() - 0.5) * 0.4;
        p.vRot = (Math.random() - 0.5) * 0.02;
      } else if (t === 'chopper') {
        p.vx = (Math.random() - 0.5) * 1.2;
        p.vy = Math.random() * 1.5 + 0.8;
        p.size = Math.random() * 4 + 2;
        p.color = Math.random() > 0.5 ? '#fbcfe8' : '#ffffff';
        p.rotation = Math.random() * Math.PI * 2;
        p.vRot = (Math.random() - 0.5) * 0.04;
      } else if (t === 'jinbe') {
        p.vx = (Math.random() - 0.5) * 0.8;
        p.vy = -Math.random() * 2 - 0.5;
        p.size = Math.random() * 6 + 3;
        p.color = '#38bdf8';
      } else if (t === 'robin') {
        p.vx = Math.random() * 2 + 0.5;
        p.vy = Math.random() * 1.8 + 0.4;
        p.size = Math.random() * 5 + 3;
        p.color = '#e879f9';
        p.rotation = Math.random() * Math.PI * 2;
        p.vRot = 0.03;
      } else if (t === 'franky') {
        p.vx = (Math.random() - 0.5) * 4;
        p.vy = (Math.random() - 0.5) * 4;
        p.size = Math.random() * 3 + 1;
        p.color = Math.random() > 0.5 ? '#38bdf8' : '#fbbf24';
      } else if (t === 'nami') {
        p.vx = 0.8;
        p.vy = Math.random() * 5 + 4;
        p.size = Math.random() * 3 + 1;
        p.color = Math.random() > 0.4 ? '#38bdf8' : '#f59e0b';
      } else {
        // ocean / default
        p.vx = (Math.random() - 0.5) * 0.6;
        p.vy = -Math.random() * 0.8 - 0.2;
        p.size = Math.random() * 3 + 1;
        p.color = '#93c5fd';
      }

      return p;
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.rotation !== undefined && p.vRot !== undefined) {
          p.rotation += p.vRot;
        }

        // Bound checks & wraps
        if (p.y < -30) p.y = height + 10;
        if (p.y > height + 30) p.y = -10;
        if (p.x < -30) p.x = width + 10;
        if (p.x > width + 30) p.x = -10;

        ctx.save();
        ctx.globalAlpha = p.alpha * opacity;

        if (p.char) {
          // Render musical note or rune
          ctx.translate(p.x, p.y);
          if (p.rotation) ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.font = `${p.size}px serif`;
          ctx.fillText(p.char, 0, 0);
        } else if (theme === 'gear5') {
          // Cartoon cloud puffy circles
          ctx.translate(p.x, p.y);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#fef08a';
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (theme === 'jinbe') {
          // Bubble with transparent inner and specular rim
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
          ctx.lineWidth = 1.2;
          ctx.stroke();
          ctx.fillStyle = 'rgba(14, 165, 233, 0.15)';
          ctx.fill();
        } else if (theme === 'zoro' || theme === 'robin') {
          // Leaf / petal ellipse
          ctx.translate(p.x, p.y);
          if (p.rotation) ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.8, p.size * 0.7, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Standard glowing point
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [theme, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-0 ${className}`}
      style={{ opacity }}
    />
  );
};

