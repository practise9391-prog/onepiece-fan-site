export type AnimeId = 'one-piece' | 'demon-slayer' | 'solo-leveling' | 'naruto';

export interface AnimeUniverseMeta {
  id: AnimeId;
  title: string;
  japaneseTitle: string;
  subtitle: string;
  tagline: string;
  themeColor: string;
  glowColor: string;
  accentGradient: string;
  bgGradient: string;
  heroImage: string;
  fallbackImage: string;
  author: string;
  genre: string;
  status: string;
  quote: string;
  quoteAuthor: string;
  description: string;
  features: string[];
}

export const ANIME_UNIVERSES: AnimeUniverseMeta[] = [
  {
    id: 'one-piece',
    title: 'ONE PIECE',
    japaneseTitle: 'ワンピース',
    subtitle: 'THE GRAND LINE & JOY BOY',
    tagline: 'THE DAWN OF FREEDOM • INHERITED WILL OF THE SEA',
    themeColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.6)',
    accentGradient: 'from-amber-400 via-yellow-300 to-amber-600',
    bgGradient: 'from-amber-950 via-slate-950 to-blue-950',
    heroImage: './images/crew/luffy-gear5.png',
    fallbackImage: './images/crew/luffy.png',
    author: 'Eiichiro Oda',
    genre: 'High Sea Adventure / Epic Shonen',
    status: 'Final Saga (Egghead)',
    quote: 'Inherited Will, the swelling of the changing era, and the dreams of people... These things will never cease to be!',
    quoteAuthor: 'Gol D. Roger',
    description: 'The pinnacle of piratical ambition. Follow Monkey D. Luffy, the Drums of Liberation Gear 5, and the Straw Hat Pirates across 15 legendary Grand Line sagas in pursuit of the ultimate treasure: the One Piece.',
    features: ['Gear 5 Sun God Nika', '15 Legendary Sagas', 'Supreme Meito Blades', 'All Emperor Bounties', 'Vegapunk Synthetic Fruits']
  },
  {
    id: 'demon-slayer',
    title: 'DEMON SLAYER',
    japaneseTitle: '鬼滅の刃',
    subtitle: 'KIMETSU NO YAIBA',
    tagline: 'SEVER THE BONDS OF GRIEF • BLADE OF WATER & FLAME',
    themeColor: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.65)',
    accentGradient: 'from-red-500 via-rose-400 to-teal-500',
    bgGradient: 'from-red-950 via-slate-950 to-teal-950',
    heroImage: './images/demon-slayer/tanjiro.png',
    fallbackImage: './images/demon-slayer/rengoku.png',
    author: 'Koyoharu Gotouge',
    genre: 'Dark Fantasy / Swordsmanship',
    status: 'Infinity Castle Trilogy',
    quote: 'No matter how many people you may lose, you have no choice but to go on living. No matter how devastating the blows may be!',
    quoteAuthor: 'Tanjiro Kamado',
    description: 'In Taisho-era Japan, Tanjiro Kamado takes up the Nichirin blade alongside his demon sister Nezuko to slay Muzan Kibutsuji and the Twelve Kizuki, wielding the legendary Sun Breathing and Hinokami Kagura.',
    features: ['Sun & Water Breathing Styles', 'The 9 Pillars (Hashira)', 'Twelve Demon Moons (Kizuki)', 'Mugen Train & Infinity Castle', 'Nichirin Forging Arsenal']
  },
  {
    id: 'solo-leveling',
    title: 'SOLO LEVELING',
    japaneseTitle: '나 혼자만 레벨업',
    subtitle: 'SHADOW MONARCH SYSTEM',
    tagline: 'ARISE • FROM WEAKEST E-RANK TO MONARCH OF SHADOWS',
    themeColor: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.7)',
    accentGradient: 'from-blue-500 via-indigo-400 to-purple-600',
    bgGradient: 'from-blue-950 via-slate-950 to-purple-950',
    heroImage: './images/solo-leveling/jinwoo.png',
    fallbackImage: './images/solo-leveling/igris.png',
    author: 'Chugong & DUBU (REDICE)',
    genre: 'Action / Supernatural / System Game',
    status: 'Arise: Season 2',
    quote: 'I am the Shadow Monarch. To those who threaten what I protect: ARISE.',
    quoteAuthor: 'Sung Jin-Woo',
    description: 'When dimensional Gates unleash monsters upon the modern world, the weakest E-Rank hunter Sung Jin-Woo is chosen by a mysterious Player System, allowing him to endlessly level up and command the immortal Shadow Army.',
    features: ['Interactive Hunter Status Window', 'Shadow Army (Igris, Beru, Bellion)', 'S-Rank & National Level Hunters', 'Double Dungeon Cartenon Temple', 'Monarch & Ruler Lore']
  },
  {
    id: 'naruto',
    title: 'NARUTO SHIPPUDEN',
    japaneseTitle: 'ナルト 疾風伝',
    subtitle: 'THE WILL OF FIRE',
    tagline: 'BELIEVE IT • THE TALE OF BONDS, SAGE POWER & HOKAGE',
    themeColor: '#ea580c',
    glowColor: 'rgba(234, 88, 12, 0.65)',
    accentGradient: 'from-orange-500 via-amber-400 to-sky-500',
    bgGradient: 'from-orange-950 via-slate-950 to-amber-950',
    heroImage: './images/naruto/naruto-sage.png',
    fallbackImage: './images/naruto/itachi.png',
    author: 'Masashi Kishimoto',
    genre: 'Shinobi Battle / Epic Shonen',
    status: 'Complete Masterpiece',
    quote: 'I won’t run away, and I never go back on my word! That is my nindo: my ninja way!',
    quoteAuthor: 'Naruto Uzumaki',
    description: 'The epic saga of an ostracized orphan bearing the Nine-Tails Fox beast, who turns loneliness into unbreakable bonds to unite the shinobi world and fulfill his destiny as the Seventh Hokage.',
    features: ['Sage Mode & Nine-Tails Chakra', 'The 7 Leaf Hokage Monuments', 'The Akatsuki Clan & Rings', 'Jutsu & Dojutsu (Sharingan, Rinnegan)', 'Fourth Great Ninja War']
  }
];
