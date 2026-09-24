import React, { useEffect, useState, useRef } from 'react';
import { universeAudio } from '../../../anime-universe/audio/universeAudio';
import { Flame, Droplets, FastForward } from 'lucide-react';

interface DemonSlayerIntroProps {
  onComplete: () => void;
  onSkipToMain?: () => void;
}

export const DemonSlayerIntro: React.FC<DemonSlayerIntroProps> = ({ onComplete, onSkipToMain }) => {
  const [stage, setStage] = useState<'dark' | 'reveal' | 'text' | 'fadeout'>('dark');
  const [displayedText, setDisplayedText] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const fullText = "SET YOUR HEART ABLAZE... 鬼滅の刃";

  useEffect(() => {
    universeAudio.playBladeSlash();

    const timer1 = setTimeout(() => {
      setStage('reveal');
    }, 150);

    const timer2 = setTimeout(() => {
      setStage('text');
      let idx = 0;
      const textInterval = setInterval(() => {
        if (idx < fullText.length) {
          setDisplayedText(fullText.substring(0, idx + 1));
          universeAudio.playClick(320 + idx * 25, 0.03);
          idx++;
        } else {
          clearInterval(textInterval);
          setTimeout(() => {
            setStage('fadeout');
            setTimeout(onComplete, 350);
          }, 650);
        }
      }, 35);
    }, 450);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'Escape') {
        if (onSkipToMain) onSkipToMain();
        else onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete, onSkipToMain]);

  // Canvas Snow & Fire Embers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    interface Ember {
      x: number;
      y: number;
      size: number;
      vy: number;
      vx: number;
      isFire: boolean;
      alpha: number;
    }

    const particles: Ember[] = Array.from({ length: 120 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 3 + 1,
      vy: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.8,
      isFire: Math.random() > 0.5,
      alpha: Math.random() * 0.7 + 0.3
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      // Night snow mountain gradient
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#0a0204');
      grad.addColorStop(0.6, '#18040a');
      grad.addColorStop(1, '#050103');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        p.y += p.isFire ? -p.vy : p.vy;
        p.x += p.vx;

        if (p.isFire && p.y < -10) p.y = h + 10;
        if (!p.isFire && p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        if (p.isFire) {
          ctx.fillStyle = `rgba(249, 115, 22, ${p.alpha})`;
          ctx.shadowColor = 'rgba(239, 68, 68, 0.8)';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.8})`;
          ctx.shadowColor = 'rgba(14, 165, 233, 0.5)';
          ctx.shadowBlur = 4;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        stage === 'fadeout' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Skip Button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={onSkipToMain || onComplete}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900/80 border border-white/20 hover:border-red-400 text-slate-300 hover:text-white text-xs font-mono font-bold tracking-wider uppercase transition shadow-lg cursor-pointer"
        >
          <FastForward className="w-3.5 h-3.5 text-red-400" />
          <span>SKIP INTRO (SPACE)</span>
        </button>
      </div>

      {/* Center Cinematic Display */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <div
          className={`transition-all duration-700 transform ${
            stage !== 'dark' ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-6'
          }`}
        >
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-red-600 via-orange-500 to-amber-400 p-0.5 shadow-[0_0_50px_rgba(239,68,68,0.7)] flex items-center justify-center mb-6 animate-pulse">
            <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center">
              <Flame className="w-10 h-10 text-red-500 animate-bounce" />
            </div>
          </div>

          <div className="text-xs font-mono tracking-[0.4em] uppercase text-red-400 font-bold mb-2">
            TAISHO ERA • DEMON SLAYER CORPS
          </div>

          <h1 className="font-cinzelDeco text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-widest min-h-[70px]">
            {displayedText}
          </h1>

          <p className="mt-4 text-xs sm:text-sm font-mono text-slate-400 max-w-xl mx-auto">
            "No matter how many people you lose, you have no choice but to go on living."
          </p>
        </div>
      </div>
    </div>
  );
};

