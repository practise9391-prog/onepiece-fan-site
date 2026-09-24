export interface HashiraMember {
  id: string;
  name: string;
  japaneseName: string;
  title: string;
  breathingStyle: string;
  bladeColor: string;
  markStatus: string;
  quote: string;
  description: string;
  signatureForms: string[];
  image: string;
  accentColor: string;
}

export interface BreathingStyle {
  id: string;
  name: string;
  japaneseName: string;
  origin: string;
  derivation: string;
  color: string;
  description: string;
  forms: { number: string; name: string; description: string }[];
}

export interface DemonMoon {
  id: string;
  name: string;
  rank: string;
  bloodArt: string;
  nemesis: string;
  description: string;
  image: string;
  glowColor: string;
}

export interface DemonSlayerArc {
  id: string;
  title: string;
  subtitle: string;
  episodes: string;
  antagonists: string[];
  synopsis: string;
  keyClash: string;
  image: string;
}

export const HASHIRA_PILLARS: HashiraMember[] = [
  {
    id: 'rengoku',
    name: 'Kyojuro Rengoku',
    japaneseName: '煉獄 杏寿郎',
    title: 'Flame Hashira (炎柱)',
    breathingStyle: 'Flame Breathing (Honō no Kokyū)',
    bladeColor: 'Crimson Red with Flame Hamon Pattern',
    markStatus: 'Unawakened (Fought Upper Rank 3 through sheer human spirit)',
    quote: 'Set your heart ablaze! Stand tall and live with pride! No matter how weak or unworthy you feel, keep your heart burning!',
    description: 'The charismatic and unyieldingly valiant Flame Pillar. Raised to protect the weak by his late mother, he shielded all 200 passengers aboard the Mugen Train and fought Akaza to sunrise without letting a single life be lost.',
    signatureForms: ['First Form: Unknown Fire', 'Fifth Form: Flame Tiger', 'Ninth Form: Rengoku (Purgatory)'],
    image: './images/demon-slayer/rengoku.png',
    accentColor: '#f97316'
  },
  {
    id: 'giyu',
    name: 'Giyu Tomioka',
    japaneseName: '冨岡 義勇',
    title: 'Water Hashira (水柱)',
    breathingStyle: 'Water Breathing (Mizu no Kokyū)',
    bladeColor: 'Deep Ocean Blue',
    markStatus: 'Awakened (Water Dragon Mark during Infinity Castle Battle)',
    quote: 'The weak have no rights or choices! Their only fate is to be relentlessly crushed by the strong! Don’t cry! Don’t despair!',
    description: 'The stoic Water Hashira who spared Nezuko and directed Tanjiro to Urokodaki. Invented the legendary Eleventh Form of Water Breathing: Dead Calm, nullifying all incoming attacks.',
    signatureForms: ['Fourth Form: Striking Tide', 'Tenth Form: Constant Flux', 'Eleventh Form: Dead Calm (Nagi)'],
    image: './images/demon-slayer/giyu.png',
    accentColor: '#0ea5e9'
  },
  {
    id: 'shinobu',
    name: 'Shinobu Kocho',
    japaneseName: '胡蝶 しのぶ',
    title: 'Insect Hashira (蟲柱)',
    breathingStyle: 'Insect Breathing (Mushi no Kokyū)',
    bladeColor: 'Lavender Stinger Blade',
    markStatus: 'Specialist (Infused her own body with 37 kilograms of Wisteria poison)',
    quote: 'I might be the only slayer who cannot behead demons, but defeating them with poison is just as deadly.',
    description: 'A master apothecary whose stinger-tipped rapier injects lethal doses of concentrated Wisteria poison. Her supreme sacrifice enabled Kanao and Inosuke to defeat Upper Rank Two Doma.',
    signatureForms: ['Butterfly Dance: Caprice', 'Dance of the Bee Sting: True Flutter', 'Dance of the Dragonfly: Compound Eye Hexagon'],
    image: './images/demon-slayer/shinobu.png',
    accentColor: '#a855f7'
  },
  {
    id: 'muichiro',
    name: 'Muichiro Tokito',
    japaneseName: '時透 無一郎',
    title: 'Mist Hashira (霞柱)',
    breathingStyle: 'Mist Breathing (Kasumi no Kokyū)',
    bladeColor: 'Pure White & Mist Cyan',
    markStatus: 'Awakened (Demon Slayer Mark + Bright Red Nichirin + Transparent World)',
    quote: 'Remembering who I am gave me back my life. Now, nothing can hide from my mist.',
    description: 'Descendant of the First Sun Breather’s twin, Kokushibo. Became a Hashira in just two months at age 14. Single-handedly decapitated Upper Rank Five Gyokko with his Seventh Form: Obscuring Clouds.',
    signatureForms: ['Fourth Form: Shifting Flow Slash', 'Fifth Form: Sea of Clouds and Haze', 'Seventh Form: Obscuring Clouds (Oboro)'],
    image: './images/demon-slayer/infinity-castle.png',
    accentColor: '#06b6d4'
  },
  {
    id: 'tengen',
    name: 'Tengen Uzui',
    japaneseName: '宇髄 天元',
    title: 'Sound Hashira (音柱)',
    breathingStyle: 'Sound Breathing (Oto no Kokyū)',
    bladeColor: 'Twin Cleaver Swords Linked with Chain',
    markStatus: 'Retired Legend (Musical Score Technique mastered)',
    quote: 'We are going out with a flashy bang! I am the God of Festivals and Flashiness!',
    description: 'Former shinobi wielding dual explosive cleavers. In the Entertainment District, he analyzed Gyutaro’s blood demon attacks into a musical score rhythm, defeating him with one arm and eye.',
    signatureForms: ['First Form: Roar', 'Fourth Form: Constant Resounding Slashes', 'Fifth Form: String Performance'],
    image: './images/demon-slayer/tanjiro.png',
    accentColor: '#f59e0b'
  }
];

export const BREATHING_STYLES: BreathingStyle[] = [
  {
    id: 'sun',
    name: 'Sun Breathing (Hinokami Kagura)',
    japaneseName: '日の呼吸 / ヒノカミ神楽',
    origin: 'Created by Yoriichi Tsugikuni during the Sengoku Era',
    derivation: 'The Ancestral Mother of All Breathing Styles',
    color: '#ef4444',
    description: 'The supreme progenitor breathing style that mimics the pure searing heat of the sun, directly burning demon flesh and preventing cellular regeneration.',
    forms: [
      { number: 'Dance (Enbu)', name: 'Clear Blue Sky', description: 'A continuous circular high-speed flaming slash that cleanses darkness.' },
      { number: 'Raging Sun', name: 'Flame Dance', description: 'Two consecutive horizontal sweeps creating a defensive perimeter of fire.' },
      { number: 'Thirteenth Form', name: 'The Eternal Loop', description: 'Chaining all 12 sun breathing dances continuously to strike all 12 vital organs of Muzan simultaneously.' }
    ]
  },
  {
    id: 'water',
    name: 'Water Breathing',
    japaneseName: '水の呼吸',
    origin: 'Derived directly from Sun Breathing for adaptability',
    derivation: 'Branches into Flower, Serpent, and Insect Breathing',
    color: '#0ea5e9',
    description: 'The most flexible and defensive breathing style, mimicking the fluid and unstoppable nature of flowing water.',
    forms: [
      { number: 'First Form', name: 'Water Surface Slash (Minamo Giri)', description: 'A single concentrated horizontal strike that glides through demon necks.' },
      { number: 'Tenth Form', name: 'Constant Flux (Seisei Ruten)', description: 'A continuous flowing dragon strike that gains lethal momentum with each rotation.' },
      { number: 'Eleventh Form', name: 'Dead Calm (Nagi)', description: 'Created exclusively by Giyu Tomioka; ceases all movement to disperse any attack within reach.' }
    ]
  },
  {
    id: 'thunder',
    name: 'Thunder Breathing',
    japaneseName: '雷の呼吸',
    origin: 'Derived directly from Sun Breathing for explosive speed',
    derivation: 'Branches into Sound Breathing',
    color: '#facc15',
    description: 'Focuses entirely on explosive leg strength and muscle contraction to unleash lightning-fast, sound-breaking iaido slashes.',
    forms: [
      { number: 'First Form', name: 'Thunderclap and Flash (Hekireki Issen)', description: 'Dashes forward with supersonic speed and decapitates the target in the blink of an eye.' },
      { number: 'Sixfold', name: 'Sixfold Lightning Wave', description: 'Performs six consecutive Thunderclap and Flash strikes in a web of blinding electricity.' },
      { number: 'Seventh Form', name: 'Flaming Thunder God (Honoikazuchi no Kami)', description: 'Created by Zenitsu Agatsuma; manifests a golden lightning dragon that obliterates Upper Rank 6 Kaigaku.' }
    ]
  }
];

export const TWELVE_KIZUKI: DemonMoon[] = [
  {
    id: 'muzan',
    name: 'Muzan Kibutsuji',
    rank: 'Demon Progenitor & King of Demons (鬼舞辻 無惨)',
    bloodArt: 'Biokinesis & Shockwave Tendrils (Seven Hearts, Five Brains)',
    nemesis: 'Yoriichi Tsugikuni & The Demon Slayer Corps',
    description: 'The first and strongest demon, alive for over a thousand years. Ruthless, narcissistic, and obsessed with attaining immortality through the Blue Spider Lily or conquering the sun.',
    image: './images/demon-slayer/muzan.png',
    glowColor: 'rgba(239, 68, 68, 0.8)'
  },
  {
    id: 'kokushibo',
    name: 'Kokushibo (Michikatsu Tsugikuni)',
    rank: 'Upper Rank One (上弦の壱)',
    bloodArt: 'Crescent Moon Blades & Flesh Katana (Moon Breathing - 16 Forms)',
    nemesis: 'Yoriichi Tsugikuni (Twin Brother) & Hashira Alliance',
    description: 'The highest-ranking Upper Moon and former demon slayer who wields Moon Breathing. Consumed by jealousy for his brother Yoriichi, he sacrificed his humanity for eternity of swordsmanship.',
    image: './images/demon-slayer/infinity-castle.png',
    glowColor: 'rgba(168, 85, 247, 0.8)'
  },
  {
    id: 'akaza',
    name: 'Akaza (Hakuji)',
    rank: 'Upper Rank Three (上弦の参)',
    bloodArt: 'Destructive Death: Compass Needle (Soryu Martial Arts)',
    nemesis: 'Kyojuro Rengoku & Tanjiro Kamado',
    description: 'A martial artist demon who refuses to eat women. Senses battle spirit like radar through Compass Needle. Killed Flame Hashira Rengoku at the Mugen Train.',
    image: './images/demon-slayer/akaza.png',
    glowColor: 'rgba(56, 189, 248, 0.8)'
  }
];

export const DEMON_SLAYER_ARCS: DemonSlayerArc[] = [
  {
    id: 'mugen-train',
    title: 'Mugen Train Arc',
    subtitle: 'SET YOUR HEART ABLAZE',
    episodes: 'Episodes 27–34 / Movie',
    antagonists: ['Enmu (Lower 1)', 'Akaza (Upper 3)'],
    synopsis: 'Tanjiro, Nezuko, Zenitsu, and Inosuke board the Mugen Train alongside Flame Hashira Kyojuro Rengoku to investigate the disappearance of forty passengers, leading to a fateful duel with Akaza.',
    keyClash: 'Kyojuro Rengoku Ninth Form vs. Akaza Destructive Death: Annihilation',
    image: './images/demon-slayer/rengoku.png'
  },
  {
    id: 'entertainment-district',
    title: 'Entertainment District Arc',
    subtitle: 'FLAMBOYANT SHOWDOWN IN YOSHIWARA',
    episodes: 'Episodes 34–44',
    antagonists: ['Daki & Gyutaro (Upper Rank 6)'],
    synopsis: 'Tengen Uzui leads the trio into the dazzling Yoshiwara red-light district. Blood Demon Poison pushes them to their absolute limits as Tanjiro awakens the Sun Breathing Mark.',
    keyClash: 'Tengen Musical Score & Tanjiro Hinokami Decapitation',
    image: './images/demon-slayer/tanjiro.png'
  },
  {
    id: 'infinity-castle',
    title: 'Infinity Castle Arc (Final Battle)',
    subtitle: 'THE FINAL RAID ON MUZAN KIBUTSUJI',
    episodes: 'Upcoming Trilogy Films',
    antagonists: ['Muzan Kibutsuji', 'Kokushibo', 'Doma', 'Akaza', 'Nakime'],
    synopsis: 'Plunged into Nakime’s shifting multi-dimensional fortress, the entire Demon Slayer Corps and all surviving Hashira wage the ultimate, bloody war to erase demons from the earth forever.',
    keyClash: 'Corps in Unison vs. The Demon King Muzan',
    image: './images/demon-slayer/infinity-castle.png'
  }
];

