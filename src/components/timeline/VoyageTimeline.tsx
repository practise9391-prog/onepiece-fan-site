import React, { useState } from 'react';
import { TIMELINE_ERAS, TimelineEra } from '../../data/timelineData';
import { sound } from '../../audio/soundEngine';
import {
  Compass,
  Ship,
  Sparkles,
  History,
  Sun,
  Flame,
  Skull,
  Hourglass,
  Swords,
  Zap,
  ArrowRight
} from 'lucide-react';

interface VoyageTimelineProps {
  onSelectArcById?: (arcId: string) => void;
}

export const VoyageTimeline: React.FC<VoyageTimelineProps> = ({ onSelectArcById }) => {
  const [selectedEraIndex, setSelectedEraIndex] = useState<number>(0);
  const currentEra = TIMELINE_ERAS[selectedEraIndex];

  const handleSelectEra = (index: number) => {
    sound.playClick(480 + index * 40, 0.08);
    setSelectedEraIndex(index);
  };

  const renderEraIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-4 h-4 text-yellow-400" />;
      case 'Flame': return <Flame className="w-4 h-4 text-red-400" />;
      case 'Skull': return <Skull className="w-4 h-4 text-blue-400" />;
      case 'Hourglass': return <Hourglass className="w-4 h-4 text-emerald-400" />;
      case 'Swords': return <Swords className="w-4 h-4 text-rose-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-yellow-300" />;
      case 'Zap': return <Zap className="w-4 h-4 text-cyan-400" />;
      default: return <Compass className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="timeline" className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
          <History className="w-3.5 h-3.5" />
          <span>CHRONOLOGY OF DESTINY</span>
        </div>

        <h2 className="font-cinzelDeco text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider">
          VOYAGE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">TIMELINE</span>
        </h2>

        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
          Witness the evolution of the Straw Hat voyage across 8 canonical eras, with authentic arc milestones, bounties, and battlegrounds.
        </p>
      </div>

      {/* Interactive Horizontal Timeline Scrubber with Sailing Ship */}
      <div className="relative my-10 p-6 rounded-3xl bg-slate-950/80 border border-white/10 shadow-2xl overflow-hidden">
        {/* Animated Thousand Sunny / Going Merry Ship Indicator along path */}
        <div className="relative h-16 flex items-center mb-6">
          {/* Horizontal Track Line */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-amber-600 via-yellow-400 to-cyan-400 rounded-full" />

          {/* Animated Sailing Ship Icon */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-500 ease-out z-20 flex flex-col items-center pointer-events-none"
            style={{
              left: `${(selectedEraIndex / (TIMELINE_ERAS.length - 1)) * 90 + 5}%`
            }}
          >
            <div className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-[0_0_25px_#f59e0b] animate-bounce">
              <Ship className="w-5 h-5" />
            </div>
            <span className="text-[9px] font-mono font-black text-amber-300 uppercase tracking-widest mt-1 whitespace-nowrap bg-black/80 px-2 py-0.5 rounded border border-amber-500/30">
              {currentEra.ship}
            </span>
          </div>
        </div>

        {/* Timeline Era Nodes Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {TIMELINE_ERAS.map((era, i) => {
            const isSelected = selectedEraIndex === i;
            return (
              <button
                key={era.id}
                onClick={() => handleSelectEra(i)}
                onMouseEnter={() => sound.playHover()}
                data-cursor="pointer"
                className={`p-3 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-400 text-black border-amber-300 shadow-lg scale-105 font-black'
                    : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-amber-400/40 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`text-[9px] font-mono uppercase tracking-widest ${isSelected ? 'text-black' : 'text-amber-400'}`}>
                    ERA 0{i + 1}
                  </div>
                  {renderEraIcon(era.iconName)}
                </div>
                <div className="font-cinzel text-xs font-bold truncate mt-2">
                  {era.title.split(' ')[0]} {era.title.split(' ')[1] || ''}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Era Spotlight Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                {renderEraIcon(currentEra.iconName)}
                <span>{currentEra.eraName} • {currentEra.yearRange}</span>
              </span>
              <h3 className="font-cinzel text-2xl sm:text-4xl font-black text-white mt-1">
                {currentEra.title}
              </h3>
            </div>

            {/* Captain's Bounty Milestone */}
            <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-right">
              <div className="text-[10px] font-mono uppercase text-amber-400 font-bold">
                LUFFY'S BOUNTY IN THIS ERA
              </div>
              <div className="font-mono text-xl font-black text-white">
                {currentEra.keyBountyLuffy}
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              {currentEra.summary}
            </p>

            {/* Era Milestones / Badges */}
            <div className="flex items-center gap-2 flex-wrap pt-2">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold mr-1">
                CANON LOCALES:
              </span>
              {currentEra.eraBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 text-xs font-medium text-amber-300"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs font-mono uppercase tracking-wider text-amber-300 block mb-0.5">
                    MAJOR HISTORIC IMPACT:
                  </strong>
                  <span className="text-xs sm:text-sm text-slate-300">
                    {currentEra.majorEvent}
                  </span>
                </div>
              </div>

              {/* Jump to associated Arc button */}
              {onSelectArcById && currentEra.relatedArcIds.length > 0 && (
                <button
                  onClick={() => {
                    sound.playClick(600, 0.1);
                    onSelectArcById(currentEra.relatedArcIds[0]);
                  }}
                  data-cursor="pointer"
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-cinzel font-black uppercase tracking-wider flex items-center gap-1.5 transition shrink-0 cursor-pointer shadow-md"
                >
                  <span>EXPLORE ARC</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
