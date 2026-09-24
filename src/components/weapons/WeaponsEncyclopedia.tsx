import React, { useState } from 'react';
import { LEGENDARY_BLADES, STRAW_HAT_WEAPONS, LegendaryBlade, StrawHatWeapon } from '../../data/weaponsData';
import { sound } from '../../audio/soundEngine';
import { Swords, Shield, Sparkles, MapPin, User, ChevronRight, X, Flame, Zap, Award } from 'lucide-react';

export const WeaponsEncyclopedia: React.FC = () => {
  const [sectionView, setSectionView] = useState<'blades' | 'crewWeapons'>('blades');
  const [selectedGrade, setSelectedGrade] = useState<string>('ALL');
  const [activeBlade, setActiveBlade] = useState<LegendaryBlade | null>(null);
  const [activeWeapon, setActiveWeapon] = useState<StrawHatWeapon | null>(null);

  const bladeGrades = [
    'ALL',
    'Supreme Grade (12 Saijo O Wazamono)',
    'Great Grade (21 O Wazamono)',
    'Skillful Grade (50 Ryo Wazamono)',
    'Ungraded / Special Cursed Blade'
  ];

  const filteredBlades = selectedGrade === 'ALL'
    ? LEGENDARY_BLADES
    : LEGENDARY_BLADES.filter((b) => b.grade === selectedGrade);

  const handleBladeClick = (blade: LegendaryBlade) => {
    sound.playSwordSlash();
    setActiveBlade(blade);
  };

  const handleWeaponClick = (weapon: StrawHatWeapon) => {
    sound.playClick(580, 0.1);
    setActiveWeapon(weapon);
  };

  return (
    <section id="blades" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
          <Swords className="w-3.5 h-3.5" />
          <span>MEITO MASTERWORKS & ARSENALS</span>
        </div>

        <h2 className="font-cinzelDeco text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-wider">
          LEGENDARY <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">BLADES & WEAPONS</span>
        </h2>

        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-medium">
          Master craftsmanship of the Grand Line: Supreme & Great Meito swords, their origins, wielders, and the evolving weapons of the Straw Hat Pirates.
        </p>

        {/* View Switcher: Blades vs Straw Hat Weapons */}
        <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-slate-900 border border-white/10 shadow-lg">
          <button
            onClick={() => {
              sound.playHover();
              setSectionView('blades');
            }}
            data-cursor="pointer"
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition cursor-pointer flex items-center gap-2 ${
              sectionView === 'blades'
                ? 'bg-amber-400 text-black shadow-lg font-black'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Swords className="w-4 h-4" />
            <span>LEGENDARY MEITO BLADES</span>
          </button>
          <button
            onClick={() => {
              sound.playHover();
              setSectionView('crewWeapons');
            }}
            data-cursor="pointer"
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition cursor-pointer flex items-center gap-2 ${
              sectionView === 'crewWeapons'
                ? 'bg-amber-400 text-black shadow-lg font-black'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>STRAW HATS ARSENAL</span>
          </button>
        </div>

        {/* Grade Filter for Blades */}
        {sectionView === 'blades' && (
          <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
            {bladeGrades.map((grade) => {
              const label = grade === 'ALL'
                ? 'ALL MEITO'
                : grade.split('(')[0].trim();
              return (
                <button
                  key={grade}
                  onClick={() => {
                    sound.playHover();
                    setSelectedGrade(grade);
                  }}
                  data-cursor="pointer"
                  className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition ${
                    selectedGrade === grade
                      ? 'bg-red-500 text-white shadow-md font-black scale-105'
                      : 'bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:border-amber-400/50 hover:text-white'
                  }`}
                >
                  {label.toUpperCase()}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* SECTION VIEW 1: LEGENDARY BLADES */}
      {sectionView === 'blades' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlades.map((blade) => (
            <div
              key={blade.id}
              onClick={() => handleBladeClick(blade)}
              onMouseEnter={() => sound.playHover()}
              data-cursor="pointer"
              className="group relative rounded-3xl p-6 bg-slate-950/85 border border-white/10 hover:border-amber-400/60 shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden"
              style={{
                boxShadow: `0 10px 30px -15px ${blade.accentColor}40`
              }}
            >
              {/* Top Badges */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-amber-300 font-bold uppercase truncate max-w-[190px]">
                    {blade.grade.split('(')[0].trim()}
                  </span>
                  {blade.isBlackBlade ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-red-500/50 text-[10px] font-mono text-red-400 font-bold">
                      KOKUTO (BLACK BLADE)
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {blade.type.split(' ')[0]}
                    </span>
                  )}
                </div>

                {/* Blade Image Display */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-black/60 border border-white/10 my-3 flex items-center justify-center p-3 group-hover:border-amber-400/40 transition-colors">
                  <div
                    className="absolute inset-0 opacity-20 filter blur-xl"
                    style={{ backgroundColor: blade.accentColor }}
                  />
                  <img
                    src={blade.image}
                    alt={blade.name}
                    className="relative z-10 max-h-full max-w-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.25)] group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500"
                  />
                </div>

                {/* Blade Info */}
                <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {blade.name}
                </h3>
                <div className="text-xs font-mono text-slate-400 italic">
                  {blade.japaneseName} • {blade.type}
                </div>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="text-slate-400">Current Wielder:</span>
                    <strong className="text-white truncate">{blade.currentWielder}</strong>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span className="text-slate-400">Present Location:</span>
                    <span className="text-slate-200 truncate">{blade.currentLocation}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-slate-400">
                  Smith: {blade.smith.split('(')[0]}
                </span>
                <span className="text-amber-400 font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                  <span>INSPECT BLADE</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SECTION VIEW 2: STRAW HAT WEAPONS */}
      {sectionView === 'crewWeapons' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRAW_HAT_WEAPONS.map((weapon) => (
            <div
              key={weapon.id}
              onClick={() => handleWeaponClick(weapon)}
              onMouseEnter={() => sound.playHover()}
              data-cursor="pointer"
              className="group relative rounded-3xl p-6 bg-slate-950/85 border border-white/10 hover:border-amber-400/60 shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden"
              style={{
                boxShadow: `0 10px 30px -15px ${weapon.themeColor}40`
              }}
            >
              <div>
                {/* Header Profile */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl overflow-hidden border-2 bg-black/60 shrink-0 p-0.5 flex items-center justify-center shadow-lg"
                    style={{ borderColor: weapon.themeColor }}
                  >
                    <img
                      src={weapon.characterImage}
                      alt={weapon.crewMember}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {weapon.crewMember}
                    </h3>
                    <div className="text-[11px] font-mono text-amber-400">
                      {weapon.weaponType.split('&')[0]}
                    </div>
                  </div>
                </div>

                {/* Weapon Visual */}
                {weapon.weaponImage && (
                  <div className="relative w-full h-36 rounded-2xl overflow-hidden bg-black/50 border border-white/10 my-3 flex items-center justify-center p-2">
                    <img
                      src={weapon.weaponImage}
                      alt={weapon.weaponName}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}

                <h4 className="font-cinzel text-base font-bold text-white mt-2">
                  {weapon.weaponName}
                </h4>

                <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                  {weapon.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold mb-1.5">
                    SIGNATURE TECHNIQUES:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {weapon.signatureTechniques.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-slate-400">
                  {weapon.crewMember} Arsenal
                </span>
                <span className="text-amber-400 font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                  <span>EXPAND SPECS</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Expanded Blade Inspector Modal */}
      {activeBlade && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase text-amber-400 font-bold">
                  {activeBlade.grade}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-black text-white mt-0.5">
                  {activeBlade.name}
                </h3>
                <div className="text-xs font-mono text-slate-400 italic">
                  {activeBlade.japaneseName} • {activeBlade.type}
                </div>
              </div>

              <button
                onClick={() => setActiveBlade(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Blade Center Display */}
            <div className="my-6 relative h-48 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center p-4 overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 filter blur-2xl"
                style={{ backgroundColor: activeBlade.accentColor }}
              />
              <img
                src={activeBlade.image}
                alt={activeBlade.name}
                className="relative z-10 max-h-full max-w-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                    PRESENT LOCATION & STATUS
                  </div>
                  <div className="font-bold text-sm text-amber-300 mt-1">
                    {activeBlade.currentLocation}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Wielder: {activeBlade.currentWielder}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                    FORGER / MASTER SMITH
                  </div>
                  <div className="font-bold text-sm text-slate-200 mt-1">
                    {activeBlade.smith}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Former Wielders: {activeBlade.formerWielders.join(', ')}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                  CANON HISTORY & TRAITS
                </div>
                <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                  {activeBlade.description}
                </p>
              </div>

              <div>
                <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>NOTABLE FEATS & CLASHES</span>
                </div>
                <ul className="space-y-1.5">
                  {activeBlade.notableFeats.map((feat, i) => (
                    <li
                      key={i}
                      className="text-xs text-slate-300 p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2"
                    >
                      <span className="text-amber-400 font-bold shrink-0">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => setActiveBlade(null)}
              className="w-full mt-6 py-2.5 rounded-xl bg-amber-400 text-black font-cinzel font-bold text-sm tracking-wider uppercase hover:bg-amber-300 transition"
            >
              CLOSE BLADE DOSSIER
            </button>
          </div>
        </div>
      )}

      {/* Expanded Straw Hat Weapon Inspector Modal */}
      {activeWeapon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-xl bg-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/20 bg-black/60 shrink-0 p-0.5 flex items-center justify-center">
                  <img
                    src={activeWeapon.characterImage}
                    alt={activeWeapon.crewMember}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-amber-400 font-bold">
                    {activeWeapon.crewMember} Arsenal
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {activeWeapon.weaponName}
                  </h3>
                  <div className="text-xs font-mono text-slate-400">
                    {activeWeapon.weaponType}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveWeapon(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-6 space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                  ORIGIN & CRAFTSMANSHIP
                </div>
                <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                  {activeWeapon.creatorOrOrigin}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <div className="text-[10px] font-mono text-amber-400 uppercase font-bold">
                  CURRENT ENHANCEMENTS
                </div>
                <p className="text-xs sm:text-sm text-amber-200 mt-1 leading-relaxed">
                  {activeWeapon.currentEnhancements}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                  TACTICAL CAPABILITIES
                </div>
                <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                  {activeWeapon.description}
                </p>
              </div>

              <div>
                <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider mb-2 font-bold">
                  SIGNATURE TECHNIQUES
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeWeapon.signatureTechniques.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveWeapon(null)}
              className="w-full py-2.5 rounded-xl bg-amber-400 text-black font-cinzel font-bold text-sm tracking-wider uppercase hover:bg-amber-300 transition"
            >
              CLOSE WEAPON DOSSIER
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

