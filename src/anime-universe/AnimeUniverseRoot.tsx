import React, { useState, useEffect } from 'react';
import { AnimeId, ANIME_UNIVERSES } from './data/animeUniverseData';
import { UniverseLanding } from './components/UniverseLanding';
import { AnimeIntroModal } from './components/AnimeIntroModal';
import { UniverseReturnButton } from './components/UniverseReturnButton';

// 🚨 PRESERVED ONE PIECE ENTRY POINT — 100% EXACT ORIGINAL UNMODIFIED CODE
import OnePieceApp from '../App';

// NEW ANIME HUBS
import { DemonSlayerApp } from '../demon-slayer/DemonSlayerApp';
import { SoloLevelingApp } from '../solo-leveling/SoloLevelingApp';
import { NarutoApp } from '../naruto/NarutoApp';

export const AnimeUniverseRoot: React.FC = () => {
  // Parse initial route from hash if present
  const getInitialRoute = (): AnimeId | 'landing' => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash === 'one-piece' || hash === 'demon-slayer' || hash === 'solo-leveling' || hash === 'naruto') {
      return hash as AnimeId;
    }
    return 'landing';
  };

  const [activeAnime, setActiveAnime] = useState<AnimeId | 'landing'>(getInitialRoute());
  const [transitioningTo, setTransitioningTo] = useState<AnimeId | null>(null);

  // Sync hash routing with browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'one-piece' || hash === 'demon-slayer' || hash === 'solo-leveling' || hash === 'naruto') {
        setActiveAnime(hash as AnimeId);
      } else if (!hash) {
        setActiveAnime('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectAnime = (id: AnimeId) => {
    setTransitioningTo(id);
  };

  const handleIntroComplete = () => {
    if (transitioningTo) {
      window.location.hash = `#/${transitioningTo}`;
      setActiveAnime(transitioningTo);
      setTransitioningTo(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReturnToUniverse = () => {
    window.location.hash = '';
    setActiveAnime('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const transitioningMeta = transitioningTo
    ? ANIME_UNIVERSES.find((a) => a.id === transitioningTo) || null
    : null;

  return (
    <div className="relative min-h-screen bg-black text-slate-100 font-sans">
      {/* Cinematic Transition Modal When Switching Anime */}
      {transitioningMeta && (
        <AnimeIntroModal
          anime={transitioningMeta}
          onComplete={handleIntroComplete}
        />
      )}

      {/* VIEW 0: ANIME UNIVERSE SELECTION HUB (INITIAL LANDING) */}
      {activeAnime === 'landing' && (
        <UniverseLanding onSelectAnime={handleSelectAnime} />
      )}

      {/* VIEW 1: ONE PIECE — 100% EXACT ORIGINAL EXISTING UNMODIFIED CODE */}
      {activeAnime === 'one-piece' && (
        <>
          <OnePieceApp />
          <UniverseReturnButton
            currentAnime="one-piece"
            onReturn={handleReturnToUniverse}
          />
        </>
      )}

      {/* VIEW 2: DEMON SLAYER */}
      {activeAnime === 'demon-slayer' && (
        <>
          <DemonSlayerApp />
          <UniverseReturnButton
            currentAnime="demon-slayer"
            onReturn={handleReturnToUniverse}
          />
        </>
      )}

      {/* VIEW 3: SOLO LEVELING */}
      {activeAnime === 'solo-leveling' && (
        <>
          <SoloLevelingApp />
          <UniverseReturnButton
            currentAnime="solo-leveling"
            onReturn={handleReturnToUniverse}
          />
        </>
      )}

      {/* VIEW 4: NARUTO SHIPPUDEN */}
      {activeAnime === 'naruto' && (
        <>
          <NarutoApp />
          <UniverseReturnButton
            currentAnime="naruto"
            onReturn={handleReturnToUniverse}
          />
        </>
      )}
    </div>
  );
};
export default AnimeUniverseRoot;
