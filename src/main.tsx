import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AnimeUniverseRoot from './anime-universe/AnimeUniverseRoot.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnimeUniverseRoot />
  </StrictMode>,
)
