import React, { useEffect, useState, useRef } from 'react';
import { universeAudio } from '../../../anime-universe/audio/universeAudio';
import { Zap, FastForward, Activity } from 'lucide-react';

interface SoloLevelingIntroProps {
  onComplete: () => void;
  onSkipToMain?: () => void;
}

export const SoloLevelingIntro: React.FC<SoloLevelingIntroProps> = ({ onComplete, onSkipToMain }) => {
  const [stage, setStage] = useState<'dark' | 'reveal' | 'text' | 'fadeout'>('dark');
  const [displayedText, setDisplayedText] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const fullText = "[SYSTEM NOTIFICATION: YOU HAVE AWAKENED AS A PLAYER...]";

  useEffect(() => {
    universeAudio.playSystemChime();

    const timer1 = setTimeout(() => {
      setStage('reveal');
    }, 150);

    const timer2 = setTimeout(() => {
      setStage('text');
      let idx = 0;
      const textInterval = setInterval(() => {
        if (idx < fullText.length) {
          setDisplayedText(fullText.substring(0, idx + 1));
          universeAudio.playClick(400 + idx * 20, 0.025);
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

  // Cartenon Double Dungeon & System Hologram Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    interface RuneParticle {
      x: number;
      y: number;
      size: number;
      speed: number;
      alpha: number;
      char: string;
    }

    const runes = ['0', '1', 'LV', 'HP', 'MP', 'STR', 'AGI', 'INT', 'ARISE'];
    const particles: RuneParticle[] = Array.from({ length: 90 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 12 + 10,
      speed: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.2,
      char: runes[Math.floor(Math.random() * runes.length)]
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      // Deep Double Dungeon Abyss Gradient
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#03040a');
      grad.addColorStop(0.5, '#070b1e');
      grad.addColorStop(1, '#020206');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Colossal God Statue Glowing Eyes in Distance
      const eyeX1 = w * 0.46;
      const eyeX2 = w * 0.54;
      const eyeY = h * 0.32;

      ctx.save();
      ctx.shadowBlur = 35;
      ctx.shadowColor = 'rgba(239, 68, 68, 0.9)';
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.ellipse(eyeX1, eyeY, 14, 5, -0.15, 0, Math.PI * 2);
      ctx.ellipse(eyeX2, eyeY, 14, 5, 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // System Grid Lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Digital Floating System Runes
      ctx.font = '10px monospace';
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = h;
          p.x = Math.random() * w;
        }
        ctx.fillStyle = `rgba(96, 165, 250, ${p.alpha})`;
        ctx.fillText(p.char, p.x, p.y);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden transition-opacity duration-1000 ${
        stage === 'fadeout' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Blue Atmospheric System Flare */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-600/10 via-transparent to-transparent pointer-events-none" />

      {/* Hologram Notification Window */}
      <div className="relative z-10 max-w-2xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/50 text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
          <Activity className="w-3.5 h-3.5 animate-pulse text-blue-400" />
          <span>CARTENON TEMPLE REAWAKENING</span>
        </div>

        <div className="p-6 rounded-2xl bg-black/80 border-2 border-blue-500/60 shadow-[0_0_50px_rgba(59,130,246,0.4)] backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-blue-500/30 pb-3 mb-4 text-[10px] font-mono text-blue-300">
            <span className="flex items-center gap-1.5 font-bold">
              <Zap className="w-3.5 h-3.5 text-blue-400" /> SYSTEM MESSAGE
            </span>
            <span className="text-emerald-400 font-bold">QUEST STATUS: [ACTIVE]</span>
          </div>

          <h1 className="font-mono font-black text-xl sm:text-3xl text-blue-300 tracking-wider min-h-[48px] flex items-center justify-center">
            {displayedText}
            <span className="inline-block w-2.5 h-6 bg-blue-400 ml-1 animate-pulse" />
          </h1>

          <p className="mt-4 text-xs font-mono text-slate-400 tracking-wider">
            [WILL YOU QUALIFY AS THE MONARCH OF SHADOWS?]
          </p>
        </div>
      </div>

      {/* Instant Skip Button */}
      <button
        onClick={onSkipToMain || onComplete}
        className="absolute bottom-8 right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 border border-blue-500/40 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase hover:bg-blue-950/80 transition cursor-pointer"
      >
        <span>SKIP TO SYSTEM</span>
        <FastForward className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
