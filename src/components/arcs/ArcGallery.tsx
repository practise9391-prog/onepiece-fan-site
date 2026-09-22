import React, { useState } from 'react';
import { ARCS, ArcData } from '../../data/arcsData';
import { sound } from '../../audio/soundEngine';
import { Compass, Sparkles, Film, Users, BookOpen, ChevronRight, Layers } from 'lucide-react';

interface ArcGalleryProps {
  onSelectArc: (arc: ArcData) => void;
}

export const ArcGallery: React.FC<ArcGalleryProps> = ({ onSelectArc }) => {
  const [selectedSaga, setSelectedSaga] = useState<string>('ALL');
  const [hoveredArcId, setHoveredArcId] = useState<string | null>(null);

  const sagas = [
    'ALL',
    'East Blue Saga',
    'Alabasta Saga',
    'Sky Island Saga',
    'Water 7 Saga',
    'Summit War Saga',
    'Fish-Man Island Saga',
    'Dressrosa Saga',
    'Four Emperors Saga',
    'Final Saga'
  ];

  const filteredArcs = selectedSaga === 'ALL'
    ? ARCS
    : ARCS.filter((arc) => arc.saga === selectedSaga);

  const handleCardClick = (arc: ArcData) => {
    sound.playClick(500, 0.1);
    sound.playThunder();
    onSelectArc(arc);
  };

  return (
    <section id="arcs" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
          <Film className="w-3.5 h-3.5" />
          <span>CANON SAGAS & EXPEDITIONS</span>
        </div>

        <h2 className="font-cinzelDeco text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">JOURNEY</span>
        </h2>

        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
          Step into fifteen monumental arcs of the Grand Line. Each chapter shaped the destinies of pirates, world governments, and the dawn of a new age.
        </p>

        {/* Saga Filter Bar */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {sagas.map((saga) => (
            <button
              key={saga}
              onClick={() => {
                sound.playHover();
                setSelectedSaga(saga);
              }}
              data-cursor="pointer"
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 ${
                selectedSaga === saga
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/30 scale-105'
                  : 'bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:border-amber-400/50 hover:text-white'
              }`}
            >
              {saga}
            </button>
          ))}
        </div>
      </div>

      {/* Cinematic Poster Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArcs.map((arc) => {
          const isHovered = hoveredArcId === arc.id;

          return (
            <div
              key={arc.id}
              onClick={() => handleCardClick(arc)}
              onMouseEnter={() => {
                setHoveredArcId(arc.id);
                sound.playHover();
              }}
              onMouseLeave={() => setHoveredArcId(null)}
              data-cursor="arc"
              className={`group relative h-[480px] sm:h-[520px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-200 transform-gpu preserve-3d border ${
                isHovered
                  ? 'scale-[1.03] z-20 shadow-[0_25px_60px_-15px_rgba(245,158,11,0.5)] border-amber-400'
                  : 'scale-100 z-10 border-white/10 hover:border-white/20 shadow-2xl shadow-black/80'
              }`}
              style={{
                borderColor: isHovered ? arc.accentColor : undefined,
                boxShadow: isHovered ? `0 20px 50px -10px ${arc.glowColor}` : undefined
              }}
            >
              {/* Background Backdrop Image with Parallax Scale */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-110 filter brightness-[0.6] group-hover:brightness-[0.85]"
                style={{
                  backgroundImage: `url(${arc.bgImage})`
                }}
              />

              {/* Dynamic Theme Color Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${arc.bgGradient} opacity-85 group-hover:opacity-75 transition-opacity duration-500`}
              />

              {/* Japanese Kanji Watermark in Background */}
              <div className="absolute top-4 right-4 pointer-events-none select-none font-serif text-5xl sm:text-6xl font-black text-white/5 group-hover:text-white/15 transition-colors duration-500">
                {arc.japaneseTitle}
              </div>

              {/* Top Card Badges */}
              <div className="relative z-10 p-6 flex items-start justify-between">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-bold text-amber-300 tracking-wider">
                  {arc.saga}
                </span>

                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10">
                  {arc.year}
                </span>
              </div>

              {/* Bottom Thematic Content Box */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 flex flex-col justify-end bg-gradient-to-t from-black via-black/90 to-transparent pt-16">
                {/* Episodes / Chapters Metadata */}
                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-300 mb-2">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-amber-400" />
                    {arc.episodes}
                  </span>
                  <span>•</span>
                  <span>{arc.chapters}</span>
                </div>

                {/* Arc Title */}
                <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>{arc.title}</span>
                  <ChevronRight className="w-6 h-6 text-amber-400 transform group-hover:translate-x-1.5 transition-transform" />
                </h3>

                {/* Arc Subtitle */}
                <p className="text-xs font-semibold text-amber-400/90 mt-1 uppercase tracking-wider">
                  {arc.subtitle}
                </p>

                {/* Short Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                  {arc.shortDesc}
                </p>

                {/* Key Characters Avatars / Pills */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="text-[10px] text-slate-300 truncate">
                      {arc.keyCharacters.slice(0, 3).join(', ')}
                      {arc.keyCharacters.length > 3 && ` +${arc.keyCharacters.length - 3}`}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 group-hover:text-amber-300 uppercase tracking-wider">
                    <span>ENTER ARC</span>
                    <Sparkles className="w-3 h-3 animate-spin-slow" />
                  </span>
                </div>
              </div>

              {/* Glowing Corner Accents */}
              <div
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: arc.accentColor }}
              />
              <div
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: arc.accentColor }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

