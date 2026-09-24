import React, { useState } from 'react';
import { ARCS, ArcData } from './data/arcsData';
import { sound } from './audio/soundEngine';
import { CustomCursor } from './components/effects/CustomCursor';
import { CanvasBackgrounds, BackgroundTheme } from './components/effects/CanvasBackgrounds';
import { OceanIntro } from './components/intro/OceanIntro';
import { TimeskipTransition } from './components/intro/TimeskipTransition';
import { Navbar } from './components/navigation/Navbar';
import { Gear5Hero } from './components/hero/Gear5Hero';
import { ArcGallery } from './components/arcs/ArcGallery';
import { ArcDetailModal } from './components/arcs/ArcDetailModal';
import { CharacterSanctuary } from './components/characters/CharacterSanctuary';
import { BountyBoard } from './components/bounties/BountyBoard';
import { DevilFruitGallery } from './components/fruits/DevilFruitGallery';
import { GrandLineMap } from './components/map/GrandLineMap';
import { VoyageTimeline } from './components/timeline/VoyageTimeline';
import { QuotesSanctuary } from './components/quotes/QuotesSanctuary';
import { WeaponsEncyclopedia } from './components/weapons/WeaponsEncyclopedia';
import { PirateKingOath } from './components/oath/PirateKingOath';
import { Compass, Anchor, ArrowUp } from 'lucide-react';

export type AppView = 'home' | 'arcs' | 'crew' | 'bounties' | 'devil-fruits' | 'quotes' | 'blades' | 'oath' | 'world' | 'timeline';

export const App: React.FC = () => {
  const [stage, setStage] = useState<'intro' | 'timeskip' | 'main'>('intro');
  const [selectedArc, setSelectedArc] = useState<ArcData | null>(null);
  const [activeTheme, setActiveTheme] = useState<BackgroundTheme>('gear5');
  const [currentView, setCurrentView] = useState<AppView>('home');

  // Handle dedicated view switching
  const handleNavigate = (viewId: string) => {
    sound.playClick(600, 0.08);
    const view = viewId as AppView;
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Set appropriate theme for the section
    if (view === 'home') {
      setActiveTheme('gear5');
    } else if (view === 'crew' || view === 'blades') {
      setActiveTheme('zoro');
    } else if (view === 'arcs' || view === 'world') {
      setActiveTheme('ocean');
    } else if (view === 'bounties' || view === 'oath') {
      setActiveTheme('gear5');
    } else {
      setActiveTheme('default');
    }
  };

  // Jump directly to an arc from the map or timeline
  const handleSelectArcById = (arcId: string) => {
    const arc = ARCS.find((a) => a.id === arcId);
    if (arc) {
      setCurrentView('arcs');
      setSelectedArc(arc);
    }
  };

  const scrollToTop = () => {
    sound.playClick(600, 0.08);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-amber-500 selection:text-black font-sans flex flex-col justify-between">
      {/* Dynamic Magnetic Cursor */}
      <CustomCursor />

      {/* STAGE 1: CINEMATIC OCEAN INTRO */}
      {stage === 'intro' && (
        <OceanIntro
          onComplete={() => setStage('timeskip')}
          onSkipToMain={() => setStage('main')}
        />
      )}

      {/* STAGE 2: TWO-YEAR TIMESKIP CINEMATIC TRANSITION */}
      {stage === 'timeskip' && (
        <TimeskipTransition onComplete={() => setStage('main')} />
      )}

      {/* STAGE 3: MAIN CINEMATIC EXPERIENCE */}
      {stage === 'main' && (
        <>
          {/* Dynamic Interactive HTML5 Canvas Particle Engine */}
          <CanvasBackgrounds theme={activeTheme} opacity={0.65} />

          {/* Floating HUD Navbar with Equalizer Audio Controller */}
          <Navbar
            activeSection={currentView}
            onNavigate={handleNavigate}
            onReplayIntro={() => setStage('intro')}
          />

          {/* Main Section Content Area - ONLY the active section is rendered */}
          <main className="relative z-10 pt-20 flex-1">
            {currentView === 'home' && (
              <Gear5Hero onNavigate={handleNavigate} />
            )}

            {currentView === 'arcs' && (
              <ArcGallery onSelectArc={(arc) => setSelectedArc(arc)} />
            )}

            {currentView === 'crew' && (
              <CharacterSanctuary
                onThemeChange={(theme) => setActiveTheme(theme as BackgroundTheme)}
              />
            )}

            {currentView === 'bounties' && (
              <BountyBoard />
            )}

            {currentView === 'devil-fruits' && (
              <DevilFruitGallery />
            )}

            {currentView === 'quotes' && (
              <QuotesSanctuary />
            )}

            {currentView === 'blades' && (
              <WeaponsEncyclopedia />
            )}

            {currentView === 'oath' && (
              <PirateKingOath />
            )}

            {currentView === 'world' && (
              <GrandLineMap onSelectArcById={handleSelectArcById} />
            )}

            {currentView === 'timeline' && (
              <VoyageTimeline onSelectArcById={handleSelectArcById} />
            )}
          </main>

          {/* Full-Screen Arc Detail Theater with Legendary Fights (When Arc Card is clicked) */}
          {selectedArc && (
            <ArcDetailModal
              arc={selectedArc}
              onClose={() => setSelectedArc(null)}
            />
          )}

          {/* Footer with Roger's Golden Quote & Grand Line Seals */}
          <footer className="relative z-10 border-t border-white/10 bg-black/90 py-12 px-4 sm:px-8 mt-12">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Compass className="w-6 h-6 text-amber-400 animate-spin-slow" />
                <span className="font-cinzelDeco text-xl font-bold tracking-widest text-white">
                  ONE PIECE
                </span>
                <Anchor className="w-5 h-5 text-amber-400" />
              </div>

              {/* Gol D. Roger Iconic Quote */}
              <blockquote className="font-serif italic text-sm sm:text-base text-amber-200/90 max-w-3xl mx-auto leading-relaxed border-y border-amber-500/20 py-3">
                "Inherited Will, the swelling of the changing era, and the dreams of people... As long as people seek freedom, these things will never cease to be!"
                <footer className="text-xs font-mono font-bold tracking-widest text-amber-400 mt-1 uppercase not-italic">
                  — Gol D. Roger, King of the Pirates
                </footer>
              </blockquote>

              <p className="text-xs text-slate-400 tracking-wider">
                Crafted with unwavering passion for Eiichiro Oda’s masterwork. Built with modern web technologies, zero-latency audio synthesis, and cinematic anime direction.
              </p>

              {/* Back to top button */}
              <div>
                <button
                  onClick={scrollToTop}
                  data-cursor="pointer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-amber-500/30 hover:border-amber-400 text-amber-300 text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:scale-105 cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>RETURN TO TOP DECK</span>
                </button>
              </div>

              <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                ONE PIECE © EIICHIRO ODA / SHUEISHA, TOEI ANIMATION • NON-PROFIT FAN TRIBUTE
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
