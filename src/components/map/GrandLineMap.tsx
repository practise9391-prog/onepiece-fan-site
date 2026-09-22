import React, { useState } from 'react';
import { GRAND_LINE_LOCATIONS, MapLocation } from '../../data/worldMapData';
import { sound } from '../../audio/soundEngine';
import { Compass, MapPin, AlertTriangle, Clock, Sparkles, Navigation, Layers } from 'lucide-react';

interface GrandLineMapProps {
  onSelectArcById?: (arcId: string) => void;
}

export const GrandLineMap: React.FC<GrandLineMapProps> = ({ onSelectArcById }) => {
  const [selectedLoc, setSelectedLoc] = useState<MapLocation>(GRAND_LINE_LOCATIONS[0]);

  const handlePinClick = (loc: MapLocation) => {
    sound.playClick(580, 0.08);
    setSelectedLoc(loc);
  };

  const getHazardBadge = (lvl: string) => {
    switch (lvl) {
      case 'Cataclysmic': return 'bg-red-600 text-white';
      case 'Extreme': return 'bg-orange-500 text-black';
      case 'High': return 'bg-amber-500 text-black';
      case 'Moderate': return 'bg-yellow-400 text-black';
      default: return 'bg-emerald-500 text-black';
    }
  };

  return (
    <section id="world-map" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
          <Navigation className="w-3.5 h-3.5 animate-spin-slow" />
          <span>LOG POSE NAUTICAL CHART</span>
        </div>

        <h2 className="font-cinzelDeco text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">GRAND LINE</span> CHART
        </h2>

        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
          Trace the legendary sea route across the Calm Belt, Reverse Mountain, Paradise, and the uncharted tempests of the New World.
        </p>
      </div>

      {/* Interactive Map Canvas Container */}
      <div className="relative rounded-3xl border border-amber-500/30 bg-slate-950 p-4 sm:p-8 shadow-2xl overflow-hidden">
        {/* Ancient Nautical Map Backdrop Grids */}
        <div className="relative w-full h-[420px] sm:h-[500px] rounded-2xl bg-[#091522] border border-white/10 overflow-hidden shadow-inner">
          {/* Compass Rose in Corner */}
          <div className="absolute top-6 right-6 opacity-20 pointer-events-none">
            <Compass className="w-32 h-32 text-amber-300 animate-spin-slow" />
          </div>

          {/* Red Line Meridian (Vertical Dividing Landmass) */}
          <div className="absolute top-0 bottom-0 left-[26%] w-5 bg-gradient-to-r from-red-900/60 via-red-700/80 to-red-900/60 pointer-events-none border-x border-red-500/30">
            <div className="absolute top-1/2 -translate-y-1/2 -left-3 transform -rotate-90 text-[10px] font-mono font-bold text-red-300 uppercase tracking-widest whitespace-nowrap">
              RED LINE (REVERSE MOUNTAIN)
            </div>
          </div>

          {/* Calm Belt Lateral Strips */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-blue-950/40 border-b border-cyan-500/20 pointer-events-none flex items-center px-4 text-[9px] font-mono text-cyan-400/50">
            NORTH CALM BELT (SEA KINGS NEST)
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-blue-950/40 border-t border-cyan-500/20 pointer-events-none flex items-center px-4 text-[9px] font-mono text-cyan-400/50">
            SOUTH CALM BELT (SEA KINGS NEST)
          </div>

          {/* S-Curved Grand Line Navigation Path (Dotted Nautical Course) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 80 180 Q 200 240 280 260 T 450 140 T 650 300 T 850 190 T 1100 250"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeDasharray="6,6"
              className="opacity-40"
            />
          </svg>

          {/* Interactive Island Points */}
          {GRAND_LINE_LOCATIONS.map((loc) => {
            const isSelected = selectedLoc.id === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => handlePinClick(loc)}
                onMouseEnter={() => sound.playHover()}
                data-cursor="pointer"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{
                  left: `${loc.coords.x}%`,
                  top: `${loc.coords.y}%`
                }}
              >
                {/* Ping wave */}
                {isSelected && (
                  <span className="absolute -inset-2 rounded-full bg-amber-400 animate-ping opacity-60" />
                )}

                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? 'bg-amber-400 text-black shadow-[0_0_20px_#f59e0b] scale-125 font-black'
                      : 'bg-slate-900/90 text-amber-300 border border-amber-500/50 group-hover:scale-115 group-hover:bg-amber-500 group-hover:text-black'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                </div>

                {/* Island Label Tooltip */}
                <div
                  className={`absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider transition-all pointer-events-none ${
                    isSelected
                      ? 'text-amber-300 border border-amber-500/40 opacity-100 scale-100'
                      : 'text-slate-300 opacity-70 group-hover:opacity-100 group-hover:text-white'
                  }`}
                >
                  {loc.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Location Dossier Bar */}
        <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                {selectedLoc.seaRegion}
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-extrabold uppercase ${getHazardBadge(selectedLoc.hazardLevel)}`}>
                HAZARD: {selectedLoc.hazardLevel}
              </span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-white">
              {selectedLoc.name}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {selectedLoc.description}
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Log Pose Cycle: <strong className="text-slate-200">{selectedLoc.logPoseTime}</strong>
              </span>
            </div>
          </div>

          {/* Highlights & Jump to Arc Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {onSelectArcById && (
              <button
                onClick={() => {
                  sound.playClick(600, 0.1);
                  onSelectArcById(selectedLoc.associatedArcId);
                }}
                data-cursor="pointer"
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-cinzel font-bold text-xs uppercase tracking-wider transition shadow-lg shrink-0"
              >
                OPEN ARC CHRONICLE
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

