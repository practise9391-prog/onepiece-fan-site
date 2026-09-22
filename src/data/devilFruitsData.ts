export type FruitType = 'Paramecia' | 'Zoan' | 'Logia';

export interface DevilFruit {
  id: string;
  name: string;
  japaneseName: string;
  romanized: string;
  type: FruitType;
  subType?: string;
  user: string;
  previousUser?: string;
  meaning: string;
  appearanceDescription: string;
  abilityDescription: string;
  awakeningStatus: string;
  signatureAttacks: string[];
  themeGlow: string;
  gradient: string;
  patternType: 'swirl' | 'scales' | 'flames' | 'ripples' | 'electricity';
}

export const DEVIL_FRUITS: DevilFruit[] = [
  {
    id: 'nika',
    name: 'Human-Human Fruit, Model: Nika',
    japaneseName: 'ヒトヒトの実 モデル“ニカ”',
    romanized: 'Hito Hito no Mi, Model: Nika',
    type: 'Zoan',
    subType: 'Mythical Zoan',
    user: 'Monkey D. Luffy',
    previousUser: 'Joy Boy (Void Century)',
    meaning: 'Sun God / Warrior of Liberation',
    appearanceDescription: 'Round melon-like fruit covered in playful spiral curls with a golden-yellow and pure white sheen.',
    abilityDescription: 'Grants the user a rubber body with cartoon-like physics, boundless imagination, and the ability to turn surrounding matter and enemies into malleable rubber.',
    awakeningStatus: 'AWAKENED — Known as Gear 5. Heart beats to the Drums of Liberation.',
    signatureAttacks: ['Gomu Gomu no Bajrang Gun', 'Gomu Gomu no Dawn Rocket', 'Gomu Gomu no Star Gun', 'Gomu Gomu no Lightning Throw'],
    themeGlow: 'rgba(250, 204, 21, 0.7)',
    gradient: 'from-amber-400 via-yellow-200 to-white',
    patternType: 'swirl'
  },
  {
    id: 'ope-ope',
    name: 'Op-Op Fruit',
    japaneseName: 'オペオペの実',
    romanized: 'Ope Ope no Mi',
    type: 'Paramecia',
    user: 'Trafalgar D. Water Law',
    meaning: 'Operation / Surgical Modification',
    appearanceDescription: 'Heart-shaped red fruit with deep swirling surgical grooves, resembling a human heart.',
    abilityDescription: 'Allows the user to project a spherical territory ("ROOM") inside which they can manipulate, slice, teleport, and rearrange all matter and souls without causing harm.',
    awakeningStatus: 'AWAKENED — K-ROOM & R-ROOM. Allows coating weapons with spatial energy to pierce matter and bypass defense.',
    signatureAttacks: ['K-ROOM: Shock Wille', 'Puncture Wille', 'Gamma Knife', 'Takt & Shambles', 'Perennial Youth Operation'],
    themeGlow: 'rgba(6, 182, 212, 0.7)',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-900',
    patternType: 'ripples'
  },
  {
    id: 'mera-mera',
    name: 'Flame-Flame Fruit',
    japaneseName: 'メラメラの実',
    romanized: 'Mera Mera no Mi',
    type: 'Logia',
    user: 'Sabo',
    previousUser: 'Portgas D. Ace',
    meaning: 'Flame / Roaring Fire',
    appearanceDescription: 'Round orange fruit adorned with swirling flame-shaped teardrop tendrils.',
    abilityDescription: 'Allows the user to transform into, generate, and manipulate pure blazing fire at temperatures exceeding thousands of degrees.',
    awakeningStatus: 'Dormant (Innate Logia intangibility and catastrophic wildfire creation)',
    signatureAttacks: ['Dai Enkai: Entei (Flame Emperor)', 'Hiken (Fire Fist)', 'Hibarashira (Fire Pillar)', 'Dragon Talon Fire Claws'],
    themeGlow: 'rgba(249, 115, 22, 0.8)',
    gradient: 'from-orange-500 via-red-600 to-amber-300',
    patternType: 'flames'
  },
  {
    id: 'gura-gura',
    name: 'Tremor-Tremor Fruit',
    japaneseName: 'グラグラの実',
    romanized: 'Gura Gura no Mi',
    type: 'Paramecia',
    subType: 'Strongest Paramecia',
    user: 'Marshall D. Teach (Blackbeard)',
    previousUser: 'Edward Newgate (Whitebeard)',
    meaning: 'Earthquake / Vibration',
    appearanceDescription: 'Grey-white spherical pear covered in crack-like zigzag fault lines.',
    abilityDescription: 'Allows user to create devastating seismic vibrations, shattering the atmosphere, fracturing the sea, and triggering colossal tsunamis capable of destroying the world.',
    awakeningStatus: 'Extreme destructive potential capable of sinking entire tectonic plates.',
    signatureAttacks: ['Shima Yurashi (Island Shaking)', 'Gekishin (Severe Earthquake)', 'Atmosphere Splitting Strike'],
    themeGlow: 'rgba(148, 163, 184, 0.7)',
    gradient: 'from-slate-300 via-sky-600 to-slate-900',
    patternType: 'ripples'
  },
  {
    id: 'uon-azure-dragon',
    name: 'Fish-Fish Fruit, Model: Azure Dragon',
    japaneseName: 'ウオウオの実 モデル“青龍”',
    romanized: 'Uo Uo no Mi, Model: Seiryu',
    type: 'Zoan',
    subType: 'Mythical Zoan',
    user: 'Kaido of the Beasts',
    meaning: 'Mythological Eastern Dragon',
    appearanceDescription: 'Scaly blue and turquoise pinecone-like fruit resembling dragon skin.',
    abilityDescription: 'Permits full and hybrid transformation into a gargantuan Eastern Azure Dragon with impervious dragon scales, hovering on flame clouds, and unleashing vaporized elemental blasts.',
    awakeningStatus: 'Flame Dragon Torch (Kaen Daiko) — Engulfs the dragon in lava-temperature flames vaporizing anything near.',
    signatureAttacks: ['Bolo Breath', 'Tatsumaki Kaifuga', 'Kaen Daiko (Flame Dragon Torch)', 'Gundari Ryuseigun'],
    themeGlow: 'rgba(37, 99, 235, 0.75)',
    gradient: 'from-cyan-400 via-blue-700 to-emerald-950',
    patternType: 'scales'
  },
  {
    id: 'yami-yami',
    name: 'Dark-Dark Fruit',
    japaneseName: 'ヤミヤミの実',
    romanized: 'Yami Yami no Mi',
    type: 'Logia',
    subType: 'Unique Logia',
    user: 'Marshall D. Teach (Blackbeard)',
    meaning: 'Infinite Darkness & Gravitational Void',
    appearanceDescription: 'Dark violet tear-shaped bulb covered in twisting thorny whirlpool tentacles.',
    abilityDescription: 'Grants control over gravitational darkness that crushes cities, absorbs all light, and nullifies the Devil Fruit powers of anyone touched.',
    awakeningStatus: 'Unknown. Uniquely absorbs physical pain at twice the rate of a normal human.',
    signatureAttacks: ['Black Hole & Liberation', 'Kurouzu (Dark Water)', 'Dark Vortex'],
    themeGlow: 'rgba(147, 51, 234, 0.7)',
    gradient: 'from-purple-900 via-indigo-950 to-black',
    patternType: 'swirl'
  },
  {
    id: 'goro-goro',
    name: 'Rumble-Rumble Fruit',
    japaneseName: 'ゴロゴロの実',
    romanized: 'Goro Goro no Mi',
    type: 'Logia',
    user: 'God Enel',
    meaning: 'Lightning / Thunderclap',
    appearanceDescription: 'Bright yellow melon with sharp jagged lightning bolt ridges.',
    abilityDescription: 'Transforms user into pure electricity capable of 200,000,000 volt discharges, traveling through conductive metals, and restarting one’s own stopped heart.',
    awakeningStatus: 'Considered "Invincible" among Logia fruits by Marine analysts.',
    signatureAttacks: ['El Thor (Judgment of God)', '200,000,000 Volts: Amaru', 'Raigo (Thunder Greeting)', 'Volt Jump'],
    themeGlow: 'rgba(250, 204, 21, 0.8)',
    gradient: 'from-yellow-300 via-sky-400 to-amber-600',
    patternType: 'electricity'
  },
  {
    id: 'ito-ito',
    name: 'String-String Fruit',
    japaneseName: 'イトイトの実',
    romanized: 'Ito Ito no Mi',
    type: 'Paramecia',
    user: 'Donquixote Doflamingo',
    meaning: 'Thread / Puppeteer Strings',
    appearanceDescription: 'White-pink segmented fruit covered in braided thread patterns.',
    abilityDescription: 'Allows the user to create razor-sharp indestructible strings to fly by attaching to clouds, manipulate opponents like marionettes, and slice meteors in half.',
    awakeningStatus: 'AWAKENED — Transmutes entire buildings, streets, and ground into millions of piercing white strings.',
    signatureAttacks: ['Birdcage (Torikago)', 'God Thread (Senbon no Yaiba)', 'Parasite String', 'Overheat'],
    themeGlow: 'rgba(244, 63, 94, 0.75)',
    gradient: 'from-rose-400 via-pink-600 to-slate-900',
    patternType: 'swirl'
  }
];

