export type FruitType = 'Paramecia' | 'Zoan' | 'Logia' | 'Synthetic & Vegapunk Tech';

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
  patternType: 'swirl' | 'scales' | 'flames' | 'ripples' | 'electricity' | 'cyber';
  image?: string;
}

export const DEVIL_FRUITS: DevilFruit[] = [
  {
    id: 'nika',
    name: 'Human-Human Fruit, Model: Nika',
    japaneseName: 'ヒトヒトの実 モデル“ニカ”',
    romanized: 'Hito Hito no Mi, Model: Nika',
    type: 'Zoan',
    subType: 'Mythical Zoan (World Government: Gomu Gomu no Mi)',
    user: 'Monkey D. Luffy',
    previousUser: 'Joy Boy (Void Century 800 Years Ago)',
    meaning: 'Sun God / Warrior of Liberation',
    appearanceDescription: 'Melon-shaped fruit covered in joyful spiral curls with pure white and sun-golden radiance.',
    abilityDescription: 'Grants the user a rubber body with cartoon-like physics, boundless imagination, and the ability to turn surrounding matter and enemies into malleable rubber.',
    awakeningStatus: 'AWAKENED — Known as Gear 5. Heart beats to the Drums of Liberation. Turns imagination into reality.',
    signatureAttacks: ['Gomu Gomu no Bajrang Gun', 'Gomu Gomu no Dawn Rocket', 'Gomu Gomu no Star Gun', 'Gomu Gomu no Lightning Throw'],
    themeGlow: 'rgba(250, 204, 21, 0.7)',
    gradient: 'from-amber-400 via-yellow-200 to-white',
    patternType: 'swirl',
    image: './images/crew/luffy-gear5.png'
  },
  {
    id: 'momo-artificial',
    name: 'Artificial Fish-Fish Fruit, Model: Azure Dragon',
    japaneseName: '人造悪魔の実 ウオウオの実 モデル“青龍”',
    romanized: 'Jinzō Akuma no Mi: Uo Uo no Mi, Model: Seiryu',
    type: 'Synthetic & Vegapunk Tech',
    subType: 'Dr. Vegapunk Masterpiece (Deemed "Failure" purely for Pink Color)',
    user: 'Kozuki Momonosuke',
    previousUser: 'Synthesized from Kaido’s Lineage Factor',
    meaning: 'Artificial Mythical Eastern Dragon',
    appearanceDescription: 'Flawless fruit created by Dr. Vegapunk in Punk Hazard research lab; reproduces Kaido’s dragon form in pink pigmentation.',
    abilityDescription: 'Replicates the complete Mythical Zoan abilities of Kaido: full dragon transformation, flight through Flame Clouds (Homuragumo), and devastating destructive elemental breath.',
    awakeningStatus: 'Synthetic Perfection — Successfully created island-supporting flame clouds to catch Onigashima and fired massive Bolo Breaths.',
    signatureAttacks: ['Homuragumo (Flame Clouds)', 'Bolo Breath (Blast Breath)', 'Tatsumaki', 'Dragon Biting Cleave'],
    themeGlow: 'rgba(244, 114, 182, 0.8)',
    gradient: 'from-pink-400 via-rose-500 to-amber-300',
    patternType: 'scales',
    image: './images/fruits/momo-artificial.png'
  },
  {
    id: 'green-blood',
    name: 'Vegapunk Green Blood (Seraphim Paramecia Synthesis)',
    japaneseName: 'グリーンブラッド (熾天使能力再現)',
    romanized: 'Gurīn Buraddo',
    type: 'Synthetic & Vegapunk Tech',
    subType: 'Lineage Factor Paramecia Duplication',
    user: 'Seraphim Pacifistas (S-Snake, S-Hawk, S-Bear, S-Shark)',
    previousUser: 'Cloned from Warlords: Boa Hancock, Doflamingo, Kuma, Jinbe',
    meaning: 'Synthetic Blood granting eternal Paramecia duplication',
    appearanceDescription: 'Luminescent emerald fluid pulsating through cybernetic tubes in Seraphim wrists, imbued with genetically coded Lineage Factors.',
    abilityDescription: 'Allows synthetic reproduction of Paramecia devil fruit powers: S-Snake wields Mero Mero no Mi petrification, S-Bear wields Nikyu Nikyu no Mi repulsion pads, S-Shark wields Sui Sui no Mi ground swimming.',
    awakeningStatus: 'Technological Transcendence — Enables immortal Lunarian cyborgs to wield awakened Devil Fruit parameters without eating fruit.',
    signatureAttacks: ['Mero Mero Mellow (S-Snake)', 'Ursus Shock Pad Cannon (S-Bear)', 'Ground Swimmer Torpedo (S-Shark)', 'Dice Slicing Slash (S-Hawk)'],
    themeGlow: 'rgba(34, 197, 94, 0.8)',
    gradient: 'from-emerald-400 via-green-600 to-teal-900',
    patternType: 'cyber',
    image: './images/fruits/green-blood.png'
  },
  {
    id: 'smile-fruit',
    name: 'SMILE Artificial Zoan Fruit',
    japaneseName: '人造悪魔の実 “SMILE”',
    romanized: 'SMILE (Jinzō Zoan)',
    type: 'Synthetic & Vegapunk Tech',
    subType: 'Caesar Clown & Doflamingo SAD Production',
    user: 'Beast Pirates Gifters & Pleasurers of Wano',
    meaning: 'Artificial Animal Transformation / Sorrowful Mask',
    appearanceDescription: 'Apples or melons patterned with small grinning polka-dot circles instead of traditional Devil Fruit spirals.',
    abilityDescription: 'Provides 10% chance to mutate a bodily limb into a real beast (e.g. lion belly, sheep horns). The 90% failure rate robs the user of the ability to swim and leaves them smiling and laughing perpetually regardless of grief.',
    awakeningStatus: 'Defective Chemical Mutation — Highly unstable, incurable tragic side effect manufactured with Caesar Clown’s SAD chemical in Dressrosa.',
    signatureAttacks: ['Gifter Beast Chimera Assault', 'Lion Torso Roar', 'Bat Hearing Pulse', 'Gazelle Super Sprint'],
    themeGlow: 'rgba(234, 88, 12, 0.8)',
    gradient: 'from-amber-500 via-orange-600 to-purple-900',
    patternType: 'swirl',
    image: './images/fruits/smile-fruit.png'
  },
  {
    id: 'nomi-nomi',
    name: 'Brain-Brain Fruit',
    japaneseName: 'ノミノミの実',
    romanized: 'Nomi Nomi no Mi',
    type: 'Synthetic & Vegapunk Tech',
    subType: 'Paramecia (Punk Records Nexus)',
    user: 'Dr. Vegapunk Stella',
    meaning: 'Brain / Infinite Knowledge Archive',
    appearanceDescription: 'A brain-textured fruit eaten by Vegapunk that allowed his brain to grow endlessly without biological limit.',
    abilityDescription: 'Enables the user’s brain to store boundless amounts of scientific and historical information without ever forgetting. Vegapunk severed his giant head and linked it as "Punk Records" via antenna to his 6 satellite clones.',
    awakeningStatus: 'Technological Hive Mind — Daily synchronization between Stella, Shaka, Lilith, Edison, Pythagoras, Atlas, and York.',
    signatureAttacks: ['Punk Records Data Synchronization', 'Mother Flame Architecture', 'Ancient Kingdom Technological Recall', 'Seraphim Neural Commands'],
    themeGlow: 'rgba(56, 189, 248, 0.8)',
    gradient: 'from-cyan-300 via-sky-500 to-indigo-900',
    patternType: 'cyber',
    image: './images/fruits/nomi-nomi.png'
  },
  {
    id: 'ope-ope',
    name: 'Op-Op Fruit',
    japaneseName: 'オペオペの実',
    romanized: 'Ope Ope no Mi',
    type: 'Paramecia',
    subType: 'Supreme Medical Paramecia (Worth ฿5,000,000,000)',
    user: 'Trafalgar D. Water Law',
    meaning: 'Operation / Surgical Spatial Manipulation',
    appearanceDescription: 'Heart-shaped red strawberry fruit with deep surgical spiral grooves.',
    abilityDescription: 'Projects a spherical boundary ("ROOM") where the user becomes the omnipotent surgeon: telekinetically slicing, swapping souls, teleporting matter, and piercing internal organs without causing bleeding.',
    awakeningStatus: 'AWAKENED — K-ROOM & R-ROOM. Coats sword with spatial phase energy to penetrate miles through bedrock and silence all sound.',
    signatureAttacks: ['K-ROOM: Shock Wille', 'Puncture Wille', 'R-ROOM: Silence', 'Gamma Knife', 'Perennial Youth Operation'],
    themeGlow: 'rgba(6, 182, 212, 0.7)',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-900',
    patternType: 'ripples',
    image: './images/fruits/ope-ope.png'
  },
  {
    id: 'gura-gura',
    name: 'Tremor-Tremor Fruit',
    japaneseName: 'グラグラの実',
    romanized: 'Gura Gura no Mi',
    type: 'Paramecia',
    subType: 'Strongest Paramecia in Existence',
    user: 'Marshall D. Teach (Blackbeard)',
    previousUser: 'Edward Newgate (Whitebeard)',
    meaning: 'Earthquake / Atmospheric Fracture',
    appearanceDescription: 'Grey-white spherical pear covered in jagged crack-like zigzag fault lines.',
    abilityDescription: 'Allows user to create devastating seismic vibrations, shattering the atmosphere, fracturing the sea, and triggering colossal tsunamis capable of destroying the world.',
    awakeningStatus: 'Planetary Cataclysm — Capable of tilting the sea and sinking entire tectonic landmasses.',
    signatureAttacks: ['Shima Yurashi (Island Shaking)', 'Gekishin (Severe Earthquake)', 'Atmosphere Splitting Strike', 'Tsunami Quake Slam'],
    themeGlow: 'rgba(148, 163, 184, 0.7)',
    gradient: 'from-slate-300 via-sky-600 to-slate-900',
    patternType: 'ripples',
    image: './images/fruits/gura-gura.png'
  },
  {
    id: 'yami-yami',
    name: 'Dark-Dark Fruit',
    japaneseName: 'ヤミヤミの実',
    romanized: 'Yami Yami no Mi',
    type: 'Logia',
    subType: 'Unique Gravitational Logia',
    user: 'Marshall D. Teach (Blackbeard)',
    meaning: 'Infinite Darkness & Devil Fruit Nullification',
    appearanceDescription: 'Dark violet tear-shaped bulb covered in swirling thorny whirlpool tentacles.',
    abilityDescription: 'Grants control over gravitational darkness that crushes cities, absorbs all light, and nullifies the Devil Fruit powers of anyone touched. Unlike other Logia, it absorbs physical attacks at amplified pain.',
    awakeningStatus: 'Unique Double-Fruit Nexus — Enabled Teach to seize Whitebeard’s Tremor fruit upon his death.',
    signatureAttacks: ['Black Hole & Liberation', 'Kurouzu (Dark Water)', 'Dark Vortex Gravity Pull', 'Infinite Void'],
    themeGlow: 'rgba(147, 51, 234, 0.7)',
    gradient: 'from-purple-900 via-indigo-950 to-black',
    patternType: 'swirl',
    image: './images/fruits/yami-yami.png'
  },
  {
    id: 'mera-mera',
    name: 'Flame-Flame Fruit',
    japaneseName: 'メラメラの実',
    romanized: 'Mera Mera no Mi',
    type: 'Logia',
    subType: 'Elemental Logia',
    user: 'Sabo (Chief of Staff of Revolutionary Army)',
    previousUser: 'Portgas D. Ace (Fire Fist)',
    meaning: 'Flame / Roaring Wildfire',
    appearanceDescription: 'Round orange fruit adorned with swirling flame-shaped teardrop tendrils.',
    abilityDescription: 'Allows the user to transform into, generate, and manipulate pure blazing fire at temperatures exceeding thousands of degrees.',
    awakeningStatus: 'Inherited Will of Fire — Re-manifested in Sabo’s Revolutionary dragon claw martial arts.',
    signatureAttacks: ['Dai Enkai: Entei (Flame Emperor)', 'Hiken (Fire Fist)', 'Hibarashira (Fire Pillar)', 'Dragon Talon Fire Fists'],
    themeGlow: 'rgba(249, 115, 22, 0.8)',
    gradient: 'from-orange-500 via-red-600 to-amber-300',
    patternType: 'flames',
    image: './images/fruits/mera-mera.png'
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
    appearanceDescription: 'Scaly blue and turquoise pinecone-like fruit resembling dragon scales.',
    abilityDescription: 'Permits full and hybrid transformation into a gargantuan Eastern Azure Dragon with impervious dragon scales, hovering on flame clouds, and unleashing vaporized elemental blasts.',
    awakeningStatus: 'Flame Dragon Torch (Kaen Daiko) — Engulfs the dragon in lava-temperature flames vaporizing anything near.',
    signatureAttacks: ['Bolo Breath', 'Tatsumaki Kaifuga', 'Kaen Daiko (Flame Dragon Torch)', 'Gundari Ryuseigun'],
    themeGlow: 'rgba(37, 99, 235, 0.75)',
    gradient: 'from-cyan-400 via-blue-700 to-emerald-950',
    patternType: 'scales',
    image: './images/arcs/wano.png'
  },
  {
    id: 'goro-goro',
    name: 'Rumble-Rumble Fruit',
    japaneseName: 'ゴロゴロの実',
    romanized: 'Goro Goro no Mi',
    type: 'Logia',
    subType: 'Invincible Lightning Logia',
    user: 'God Enel',
    meaning: 'Lightning / 200,000,000 Volts',
    appearanceDescription: 'Bright yellow melon with sharp jagged lightning bolt ridges.',
    abilityDescription: 'Transforms user into pure electricity capable of 200,000,000 volt discharges, traveling through conductive metals, and restarting one’s own stopped heart.',
    awakeningStatus: 'Considered "Invincible" among Logia fruits by Marine analysts; counteracted only by rubber.',
    signatureAttacks: ['El Thor (Judgment of God)', '200,000,000 Volts: Amaru', 'Raigo (Thunder Greeting)', 'Mantra Electric Radar'],
    themeGlow: 'rgba(250, 204, 21, 0.8)',
    gradient: 'from-yellow-300 via-sky-400 to-amber-600',
    patternType: 'electricity',
    image: './images/arcs/skypiea.png'
  },
  {
    id: 'ito-ito',
    name: 'String-String Fruit',
    japaneseName: 'イトイトの実',
    romanized: 'Ito Ito no Mi',
    type: 'Paramecia',
    subType: 'Awakened Paramecia',
    user: 'Donquixote Doflamingo',
    meaning: 'Thread / Heavenly Puppeteer',
    appearanceDescription: 'White-pink segmented fruit covered in braided thread patterns.',
    abilityDescription: 'Allows the user to create razor-sharp indestructible strings to fly by attaching to clouds, manipulate opponents like marionettes, and slice meteors in half.',
    awakeningStatus: 'AWAKENED — Transmutes entire buildings, streets, and ground into millions of piercing white strings.',
    signatureAttacks: ['Birdcage (Torikago)', 'God Thread (Senbon no Yaiba)', 'Parasite String', 'Overheat'],
    themeGlow: 'rgba(244, 63, 94, 0.75)',
    gradient: 'from-rose-400 via-pink-600 to-slate-900',
    patternType: 'swirl',
    image: './images/quotes/speaker-doflamingo.png'
  }
];
