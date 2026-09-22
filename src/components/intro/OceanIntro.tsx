import React, { useEffect, useState, useRef } from 'react';
import { sound } from '../../audio/soundEngine';
import { Compass, Volume2, VolumeX, FastForward } from 'lucide-react';

interface OceanIntroProps {
  onComplete: () => void;
  onSkipToMain?: () => void;
}

export const OceanIntro: React.FC<OceanIntroProps> = ({ onComplete, onSkipToMain }) => {
  const [stage, setStage] = useState<'dark' | 'reveal' | 'text' | 'fadeout'>('dark');
  const [displayedText, setDisplayedText] = useState('');
  const [isAudioMuted, setIsAudioMuted] = useState(sound.getIsMuted());
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const fullText = "THE GRAND LINE AWAITS...";

  useEffect(() => {
    // Start ocean ambient audio
    sound.startOceanAmbience();

    // Timeline of Scene 1 (Fast & High-Impact)
    const timer1 = setTimeout(() => {
      setStage('reveal');
    }, 150);

    const timer2 = setTimeout(() => {
      setStage('text');
      // Snappy letter-by-letter animation
      let idx = 0;
      const textInterval = setInterval(() => {
        if (idx < fullText.length) {
          setDisplayedText(fullText.substring(0, idx + 1));
          sound.playClick(280 + idx * 30, 0.03);
          idx++;
        } else {
          clearInterval(textInterval);
          // Quick 600ms pause then smooth fast fadeout
          setTimeout(() => {
            setStage('fadeout');
            setTimeout(onComplete, 350);
          }, 600);
        }
      }, 35);
    }, 450);

    // Allow instant skip on click or Space/Enter/Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter' || e.key === 'Escape') {
        if (onSkipToMain) {
          onSkipToMain();
        } else {
          onComplete();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete, onSkipToMain]);

  // Canvas wave and lightning simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    let time = 0;
    let lightningTimer = 0;
    let isLightning = false;

    const render = () => {
      time += 0.02;
      lightningTimer++;

      // Distant lightning flash every 200-300 frames
      if (lightningTimer > 180 && Math.random() < 0.03) {
        isLightning = true;
        sound.playThunder();
        setTimeout(() => {
          isLightning = false;
        }, 120);
        lightningTimer = 0;
      }

      ctx.clearRect(0, 0, w, h);

      // Night sky gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.7);
      if (isLightning) {
        skyGrad.addColorStop(0, '#38bdf8');
        skyGrad.addColorStop(0.5, '#1e293b');
        skyGrad.addColorStop(1, '#030712');
      } else {
        skyGrad.addColorStop(0, '#030712');
        skyGrad.addColorStop(0.6, '#091322');
        skyGrad.addColorStop(1, '#0c2340');
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h);

      // Moon and Moonlight Reflection
      const moonX = w * 0.72;
      const moonY = h * 0.22;
      const moonRadius = 38;

      ctx.save();
      ctx.shadowBlur = isLightning ? 60 : 40;
      ctx.shadowColor = 'rgba(254, 240, 138, 0.6)';
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Moonlight path on water
      const seaLevel = h * 0.62;
      const moonGlow = ctx.createLinearGradient(moonX, seaLevel, moonX, h);
      moonGlow.addColorStop(0, 'rgba(254, 240, 138, 0.35)');
      moonGlow.addColorStop(0.5, 'rgba(254, 240, 138, 0.12)');
      moonGlow.addColorStop(1, 'rgba(254, 240, 138, 0)');
      ctx.fillStyle = moonGlow;
      ctx.fillRect(moonX - 120, seaLevel, 240, h - seaLevel);

      // Multiple Sine Wave Layers for Ocean
      const drawWave = (offsetY: number, amplitude: number, freq: number, speed: number, color: string) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 15) {
          const y = seaLevel + offsetY + Math.sin(x * freq + time * speed) * amplitude + Math.cos(x * 0.005 + time * 0.8) * (amplitude * 0.4);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fill();
      };

      drawWave(0, 12, 0.004, 1.2, '#062038');
      drawWave(18, 16, 0.006, 1.6, '#04172a');
      drawWave(42, 22, 0.005, 2.0, '#020d18');

      // Moving Pirate Ship Silhouette in Distance
      const shipProgress = (time * 18) % (w + 200) - 100;
      const shipY = seaLevel + 6 + Math.sin(time * 1.5) * 4;

      ctx.save();
      ctx.translate(shipProgress, shipY);
      ctx.fillStyle = '#020617';

      // Hull
      ctx.beginPath();
      ctx.moveTo(-35, 8);
      ctx.lineTo(35, 8);
      ctx.lineTo(28, 22);
      ctx.lineTo(-24, 22);
      ctx.closePath();
      ctx.fill();

      // Masts & Sails
      ctx.fillRect(-15, -36, 3, 44);
      ctx.fillRect(10, -42, 3, 50);

      // Main Sails (curved wind puff)
      ctx.beginPath();
      ctx.moveTo(-13, -32);
      ctx.quadraticCurveTo(0, -22, -13, -10);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(12, -38);
      ctx.quadraticCurveTo(28, -26, 12, -14);
      ctx.fill();

      // Jolly Roger Flag atop mast
      ctx.beginPath();
      ctx.moveTo(12, -42);
      ctx.lineTo(24, -38);
      ctx.lineTo(12, -34);
      ctx.fill();

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const toggleSound = () => {
    const unmuted = sound.toggleMute();
    setIsAudioMuted(!unmuted);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${
        stage === 'fadeout' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background Canvas: Ocean, Moon, Ship Silhouette */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 transition-opacity duration-2000 ${
          stage === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Floating Fog & Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90" />

      {/* Cinematic Letterbox Bars */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 md:h-24 bg-black border-b border-white/5" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-black border-t border-white/5" />

      {/* Top HUD Controls (Skip & Sound) */}
      <div className="absolute top-6 right-6 md:top-8 md:right-10 z-20 flex items-center gap-3">
        <button
          onClick={toggleSound}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-semibold hover:border-amber-400 transition"
        >
          {isAudioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 animate-pulse" />}
          <span>{isAudioMuted ? 'UNMUTE SOUND' : 'SOUND ON'}</span>
        </button>

        {onSkipToMain && (
          <button
            onClick={onSkipToMain}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-black tracking-wider uppercase transition shadow-lg shadow-yellow-400/30 cursor-pointer"
          >
            <span>DIRECT TO MAIN</span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        )}

        <button
          onClick={onComplete}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-200 text-xs font-bold tracking-wider uppercase transition shadow-lg shadow-amber-950/40 cursor-pointer"
        >
          <span>TIMESKIP ➔</span>
        </button>
      </div>

      {/* Center Cinematic Typography */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-950/40 text-amber-400 text-xs tracking-widest uppercase">
          <Compass className="w-3.5 h-3.5 animate-spin-slow" />
          <span>PROLOGUE: SCENE I</span>
        </div>

        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black tracking-widest text-slate-100 drop-shadow-[0_0_35px_rgba(245,158,11,0.6)] min-h-[4rem] flex items-center justify-center">
          {displayedText}
          <span className="inline-block w-1.5 h-8 md:h-12 bg-amber-400 ml-2 animate-pulse" />
        </h1>

        <p className="mt-4 text-xs md:text-sm uppercase tracking-[0.4em] text-slate-400 font-medium">
          Set sail upon the endless ocean • Where dreams become destiny
        </p>
      </div>
    </div>
  );
};

