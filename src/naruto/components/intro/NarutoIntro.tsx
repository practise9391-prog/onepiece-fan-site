import React, { useEffect, useState, useRef } from 'react';
import { universeAudio } from '../../../anime-universe/audio/universeAudio';
import { Sparkles, FastForward, Flame } from 'lucide-react';

interface NarutoIntroProps {
  onComplete: () => void;
  onSkipToMain?: () => void;
}

export const NarutoIntro: React.FC<NarutoIntroProps> = ({ onComplete, onSkipToMain }) => {
  const [stage, setStage] = useState<'dark' | 'reveal' | 'text' | 'fadeout'>('dark');
  const [displayedText, setDisplayedText] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const fullText = "THE WILL OF FIRE BURNS ETERNAL... 木ノ葉隠れ";

  useEffect(() => {
    universeAudio.playChakraBurst();

    const timer1 = setTimeout(() => {
      setStage('reveal');
    }, 150);

    const timer2 = setTimeout(() => {
      setStage('text');
      let idx = 0;
      const textInterval = setInterval(() => {
        if (idx < fullText.length) {
          setDisplayedText(fullText.substring(0, idx + 1));
          universeAudio.playClick(360 + idx * 25, 0.025);
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

  // Swirling Rasengan & Kurama Chakra Spark Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    interface ChakraParticle {
      angle: number;
      radius: number;
      speed: number;
      size: number;
      isKurama: boolean;
      alpha: number;
    }

    const particles: ChakraParticle[] = Array.from({ length: 140 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * (w * 0.45),
      speed: (Math.random() * 0.04 + 0.01) * (Math.random() > 0.5 ? 1 : -1),
      size: Math.random() * 3 + 1.5,
      isKurama: Math.random() > 0.4,
      alpha: Math.random() * 0.8 + 0.2
    }));

    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, w, h);

      // Night Sky Gradient
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#0a0502');
      grad.addColorStop(0.5, '#190a03');
      grad.addColorStop(1, '#050201');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      const centerX = w * 0.5;
      const centerY = h * 0.5;

      // Center Rasengan Vortex Core
      ctx.save();
      const coreGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 120);
      coreGrad.addColorStop(0, 'rgba(56, 189, 248, 0.9)');
      coreGrad.addColorStop(0.3, 'rgba(14, 165, 233, 0.4)');
      coreGrad.addColorStop(1, 'rgba(234, 88, 12, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 120, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Swirling Chakra Particles
      particles.forEach((p) => {
        p.angle += p.speed;
        p.radius -= 0.3;
        if (p.radius < 10) {
          p.radius = w * 0.4;
        }

        const px = centerX + Math.cos(p.angle) * p.radius;
        const py = centerY + Math.sin(p.angle) * p.radius;

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.isKurama
          ? `rgba(249, 115, 22, ${p.alpha})`
          : `rgba(56, 189, 248, ${p.alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.isKurama ? '#f97316' : '#38bdf8';
        ctx.fill();
        ctx.restore();
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

      {/* Center Chakra Swirl Narrative */}
      <div className="relative z-10 max-w-2xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/80 border border-orange-500/50 text-orange-400 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
          <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
          <span>HIDDEN LEAF VILLAGE • WILL OF FIRE</span>
        </div>

        <div className="p-6 rounded-2xl bg-black/80 border-2 border-orange-500/60 shadow-[0_0_50px_rgba(249,115,22,0.4)] backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-orange-500/30 pb-3 mb-4 text-[10px] font-mono text-orange-300">
            <span className="flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" /> SHINOBI WAY
            </span>
            <span className="text-amber-300 font-bold">NINDO: [NEVER GIVE UP]</span>
          </div>

          <h1 className="font-cinzelDeco font-black text-xl sm:text-3xl text-orange-300 tracking-wider min-h-[48px] flex items-center justify-center">
            {displayedText}
            <span className="inline-block w-2.5 h-6 bg-orange-400 ml-1 animate-pulse" />
          </h1>

          <p className="mt-4 text-xs font-mono text-slate-400 tracking-wider">
            "I NEVER GO BACK ON MY WORD... THAT'S MY NINJA WAY!"
          </p>
        </div>
      </div>

      {/* Instant Skip Button */}
      <button
        onClick={onSkipToMain || onComplete}
        className="absolute bottom-8 right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 border border-orange-500/40 text-orange-300 text-xs font-mono font-bold tracking-widest uppercase hover:bg-orange-950/80 transition cursor-pointer"
      >
        <span>SKIP TO LEAF VILLAGE</span>
        <FastForward className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

