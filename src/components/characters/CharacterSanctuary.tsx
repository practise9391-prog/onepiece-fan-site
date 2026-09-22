import React, { useState } from 'react';
import { STRAW_HATS, CharacterProfile } from '../../data/charactersData';
import { sound } from '../../audio/soundEngine';
import {
  Swords,
  Flame,
  Music,
  Snowflake,
  CloudLightning,
  BookMarked,
  Wrench,
  Droplets,
  Sparkles,
  Smile,
  Shield,
  Zap,
  Quote,
  X,
  Target
} from 'lucide-react';

interface CharacterSanctuaryProps {
  onThemeChange?: (theme: string) => void;
}

export const CharacterSanctuary: React.FC<CharacterSanctuaryProps> = ({ onThemeChange }) => {
  const [selectedChar, setSelectedChar] = useState<CharacterProfile>(STRAW_HATS[0]);
  const [inspectingChar, setInspectingChar] = useState<CharacterProfile | null>(null);
  const [isSlashActive, setIsSlashActive] = useState(false);

  const handleSelectChar = (char: CharacterProfile) => {
    // Sound FX & special thematic transitions
    if (char.themeKey === 'zoro') {
      sound.playSwordSlash();
      setIsSlashActive(true);
      setTimeout(() => setIsSlashActive(false), 700);
    } else if (char.themeKey === 'sanji') {
      sound.playFireBurst();
    } else if (char.themeKey === 'luffy') {
      sound.startDrumsOfLiberation();
      setTimeout(() => sound.stopDrumsOfLiberation(), 2500);
    } else if (char.themeKey === 'nami') {
      sound.playThunder();
    } else {
      sound.playClick(520, 0.08);
    }

    setSelectedChar(char);
    if (onThemeChange) {
      onThemeChange(char.themeKey);
    }
  };

  const getThemeIcon = (key: string) => {
    switch (key) {
      case 'luffy': return <Smile className="w-4 h-4 text-yellow-400" />;
      case 'zoro': return <Swords className="w-4 h-4 text-emerald-400" />;
      case 'sanji': return <Flame className="w-4 h-4 text-orange-400" />;
      case 'brook': return <Music className="w-4 h-4 text-purple-400" />;
      case 'chopper': return <Snowflake className="w-4 h-4 text-pink-400" />;
      case 'nami': return <CloudLightning className="w-4 h-4 text-amber-400" />;
      case 'robin': return <BookMarked className="w-4 h-4 text-indigo-400" />;
      case 'franky': return <Wrench className="w-4 h-4 text-cyan-400" />;
      case 'jinbe': return <Droplets className="w-4 h-4 text-sky-400" />;
      case 'usopp': return <Target className="w-4 h-4 text-yellow-500" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="crew" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Zoro Animated Sword Slash Screen Flash */}
      {isSlashActive && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_50px_#10b981] transform -rotate-12 animate-sword-flash" />
        </div>
      )}

      {/* Section Title */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
          <Swords className="w-3.5 h-3.5" />
          <span>THE STRAW HAT GRAND CREW</span>
        </div>

        <h2 className="font-cinzelDeco text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider">
          CREW <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">SANCTUARY</span>
        </h2>

        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
          Ten legends bound by an unbreakable bond. Select a comrade to transform the realm into their unique visual theme and battle atmosphere.
        </p>

        {/* Character Selector Pills */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {STRAW_HATS.map((char) => {
            const isSelected = selectedChar.id === char.id;
            return (
              <button
                key={char.id}
                onClick={() => handleSelectChar(char)}
                data-cursor={char.themeKey === 'zoro' ? 'zoro' : char.themeKey === 'sanji' ? 'sanji' : 'pointer'}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                  isSelected
                    ? 'text-black shadow-lg scale-105 font-black'
                    : 'bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:border-amber-400/50 hover:text-white'
                }`}
                style={{
                  backgroundColor: isSelected ? char.themeColor : undefined,
                  boxShadow: isSelected ? `0 10px 25px -5px ${char.themeColor}88` : undefined
                }}
              >
                {getThemeIcon(char.themeKey)}
                <span>{char.name.split(' ').pop()}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Thematic Character Stage */}
      <div
        className={`relative rounded-3xl p-6 sm:p-10 border transition-all duration-700 bg-gradient-to-br ${selectedChar.accentBg} bg-slate-950/90 shadow-2xl overflow-hidden`}
        style={{ borderColor: `${selectedChar.themeColor}60` }}
      >
        {/* Japanese Kanji Background Watermark */}
        <div className="absolute right-6 bottom-4 select-none pointer-events-none font-serif text-7xl sm:text-9xl font-black text-white/5">
          {selectedChar.japaneseName}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Avatar & Bounties & Quick Action */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div
              className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-2 shadow-2xl transition-transform duration-500 hover:scale-105"
              style={{ borderColor: selectedChar.themeColor }}
            >
              <img
                src={selectedChar.avatarUrl}
                alt={selectedChar.name}
                className="w-full h-full object-cover filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 inset-x-0 font-mono text-xs font-bold text-amber-300">
                {selectedChar.bountyFormatted}
              </div>
            </div>

            <div className="mt-4">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-amber-400">
                {selectedChar.role}
              </span>
            </div>

            <button
              onClick={() => {
                sound.playClick(600, 0.1);
                setInspectingChar(selectedChar);
              }}
              data-cursor="pointer"
              className="mt-5 px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:scale-105 active:scale-95"
              style={{
                backgroundColor: selectedChar.themeColor,
                color: '#000000'
              }}
            >
              VIEW FULL DOSSIER
            </button>
          </div>

          {/* Right Column: Character Lore, Stats & Signature Techniques */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.3em] font-bold text-amber-400 mb-1">
                {selectedChar.epithet}
              </div>
              <h3 className="font-cinzel text-3xl sm:text-5xl font-black text-white">
                {selectedChar.name}
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedChar.description}
              </p>
            </div>

            {/* Special Cinematic Moment Highlight (e.g. Zoro "Nothing Happened") */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2" style={{ color: selectedChar.themeColor }}>
                <Sparkles className="w-4 h-4" />
                <span>SIGNATURE CINEMATIC MOMENT: {selectedChar.cinematicMomentTitle.toUpperCase()}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                "{selectedChar.cinematicMomentText}"
              </p>
            </div>

            {/* Combat Stats Bars */}
            <div className="space-y-2.5 bg-black/40 p-5 rounded-2xl border border-white/5">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                COMBAT ATTRIBUTES & HAKI RATING
              </div>

              {[
                { label: 'ATTACK POWER', val: selectedChar.stats.attack },
                { label: 'DEFENSIVE TOUGHNESS', val: selectedChar.stats.defense },
                { label: 'AGILITY / SPEED', val: selectedChar.stats.speed },
                { label: 'CONQUEROR WILLPOWER', val: selectedChar.stats.willpower },
                { label: 'HAKI MASTERY', val: selectedChar.stats.haki },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-slate-400 w-36 shrink-0 truncate">
                    {stat.label}
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${stat.val}%`,
                        backgroundColor: selectedChar.themeColor
                      }}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-white w-8 text-right">
                    {stat.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Signature Moves Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mr-2">
                TECHNIQUES:
              </span>
              {selectedChar.signatureMoves.map((move) => (
                <span
                  key={move}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200"
                >
                  {move}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Character Dossier Modal */}
      {inspectingChar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  {inspectingChar.epithet}
                </span>
                <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white">
                  {inspectingChar.name}
                </h2>
              </div>
              <button
                onClick={() => setInspectingChar(null)}
                data-cursor="pointer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quote */}
            <div className="my-5 p-4 rounded-2xl bg-amber-500/10 border-l-4 border-amber-400 text-amber-200 italic text-sm sm:text-base flex items-start gap-2">
              <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>"{inspectingChar.quote}"</div>
            </div>

            {/* Devil Fruit Details if present */}
            {inspectingChar.devilFruit && (
              <div className="mb-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono uppercase text-amber-400 tracking-wider font-bold">
                  DEVIL FRUIT: {inspectingChar.devilFruit.type.toUpperCase()}
                </div>
                <div className="font-cinzel text-lg font-bold text-white mt-1">
                  {inspectingChar.devilFruit.name}
                </div>
                {inspectingChar.devilFruit.awakening && (
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    <strong>Awakening:</strong> {inspectingChar.devilFruit.awakening}
                  </p>
                )}
              </div>
            )}

            {/* Fighting Style & Haki Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                  FIGHTING STYLE
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">
                  {inspectingChar.fightingStyle}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                  HAKI PROFICIENCY
                </div>
                <div className="text-xs sm:text-sm font-bold text-amber-300 mt-1">
                  {inspectingChar.hakiTypes.length > 0 ? inspectingChar.hakiTypes.join(', ') : 'None / Scientific Mastery'}
                </div>
              </div>
            </div>

            <button
              onClick={() => setInspectingChar(null)}
              className="w-full py-3 rounded-xl bg-amber-400 text-black font-bold font-cinzel text-sm uppercase tracking-wider hover:bg-amber-300 transition"
            >
              CLOSE PROFILE
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

