export interface CharacterStats {
  attack: number;
  defense: number;
  speed: number;
  willpower: number;
  haki: number;
}

export interface CharacterProfile {
  id: string;
  name: string;
  japaneseName: string;
  epithet: string;
  role: string;
  bounty: number;
  bountyFormatted: string;
  devilFruit?: {
    name: string;
    type: string;
    awakening?: string;
  };
  fightingStyle: string;
  hakiTypes: string[];
  quote: string;
  description: string;
  stats: CharacterStats;
  signatureMoves: string[];
  themeKey: 'luffy' | 'zoro' | 'sanji' | 'brook' | 'chopper' | 'nami' | 'robin' | 'franky' | 'jinbe' | 'usopp';
  themeColor: string;
  accentBg: string;
  cinematicMomentTitle: string;
  cinematicMomentText: string;
  avatarUrl: string;
}

export const STRAW_HATS: CharacterProfile[] = [
  {
    id: 'luffy',
    name: 'Monkey D. Luffy',
    japaneseName: 'モンキー・D・ルフィ',
    epithet: 'Straw Hat Luffy / Sun God Nika',
    role: 'Captain of the Straw Hat Pirates & Emperor of the Sea',
    bounty: 3000000000,
    bountyFormatted: '3,000,000,000 ฿',
    devilFruit: {
      name: 'Hito Hito no Mi, Model: Nika (formerly Gomu Gomu no Mi)',
      type: 'Mythical Zoan',
      awakening: 'Gear 5: Gives the user’s rubber body limitless freedom and cartoon physics that affect the environment and opponents.'
    },
    fightingStyle: 'Rubber Body Acrobatics & Advanced Conqueror’s Infusion',
    hakiTypes: ["Conqueror's (Advanced)", "Armament (Advanced Ryuo)", "Observation (Future Sight)"],
    quote: "I’m going to become the King of the Pirates! (海賊王に俺はなる！)",
    description: "Born in Foosha Village, Luffy's reckless optimism and sheer magnetic charisma have rallied an unshakeable crew. Having awakened the long-lost Warrior of Liberation, Joy Boy, he laughs in the face of tyranny and brings smiles wherever he voyages.",
    stats: { attack: 99, defense: 95, speed: 96, willpower: 100, haki: 98 },
    signatureMoves: ['Gomu Gomu no Bajrang Gun', 'Dawn Whip & Dawn Rocket', 'Gomu Gomu no Red Roc', 'Gomu Gomu no King Kong Gun'],
    themeKey: 'luffy',
    themeColor: '#facc15',
    accentBg: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    cinematicMomentTitle: 'The Drums of Liberation',
    cinematicMomentText: 'His heartbeat pulses to the timeless rhythm: doom-dut-da-da. The sun rises over Wano as lightning becomes his plaything and laughter echoes across the sea.',
    avatarUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'zoro',
    name: 'Roronoa Zoro',
    japaneseName: 'ロロノア・ゾロ',
    epithet: 'Pirate Hunter / King of Hell',
    role: 'Combatant & Senior Swordsman',
    bounty: 1111000000,
    bountyFormatted: '1,111,000,000 ฿',
    fightingStyle: 'Santoryu (Three-Sword Style) & Kyutoryu (Nine-Sword Asura)',
    hakiTypes: ["Conqueror's (Advanced Infusion)", "Armament (Advanced Enma Master)", "Observation"],
    quote: "Scars on the back are a swordsman’s shame. (背中の傷は剣士の恥だ)",
    description: "The first to join Luffy, Zoro is relentless in his quest to dethrone Dracule Mihawk as the Greatest Swordsman in the World. Wielding Wado Ichimonji, Sandai Kitetsu, and the demonic blade Enma, he will cut through anything—even death itself.",
    stats: { attack: 97, defense: 96, speed: 92, willpower: 99, haki: 95 },
    signatureMoves: ['King of Hell Three Swords: Billion-fold Trichiliocosm', 'Dragon Twister: Dead Man’s Game', 'Asura: Blades Drawn Dead Man’s Game', 'Lion’s Song (Shishi Sonson)'],
    themeKey: 'zoro',
    themeColor: '#10b981',
    accentBg: 'from-emerald-600/20 via-teal-700/10 to-transparent',
    cinematicMomentTitle: 'Nothing Happened',
    cinematicMomentText: 'Standing in a pool of his own blood amidst the ruins of Thriller Bark, Zoro took upon himself every shred of Luffy’s accumulated agony from Bartholomew Kuma, never speaking a word of complaint.',
    avatarUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sanji',
    name: 'Vinsmoke Sanji',
    japaneseName: 'サンジ',
    epithet: 'Black Leg / Stealth Black',
    role: 'Head Chef & Martial Artist',
    bounty: 1032000000,
    bountyFormatted: '1,032,000,000 ฿',
    fightingStyle: 'Black Leg Style & Genetic Exoskeleton Resilience',
    hakiTypes: ["Observation (Exceptional)", "Armament (Hardened Flaming)"],
    quote: "Cooking is a gift from the gods. Spices are a gift from the devil. It looks like it was a little too spicy for you.",
    description: "Prince of the Germa Kingdom who renounced his cold bloodline, Sanji fights exclusively with his legs to protect the hands that feed people. His fiery passion burns hotter than magma, awakening the supersonic blue flames of Ifrit Jambe.",
    stats: { attack: 94, defense: 93, speed: 98, willpower: 96, haki: 90 },
    signatureMoves: ['Ifrit Jambe: Bœuf Burst', 'Diable Jambe: Flambage Shot', 'Concasser', 'Sky Walk (Geppo)'],
    themeKey: 'sanji',
    themeColor: '#3b82f6',
    accentBg: 'from-blue-600/20 via-indigo-600/10 to-transparent',
    cinematicMomentTitle: 'The Blue Flame of Passion',
    cinematicMomentText: 'Embracing his human compassion over Germa’s mechanical cruelty, his lightning-fast kicks transform from crimson flames into celestial blue incinerating heat.',
    avatarUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'jinbe',
    name: 'Jinbe',
    japaneseName: 'ジンベエ',
    epithet: 'Knight of the Sea / First Son of the Sea',
    role: 'Helmsman & Former Warlord of the Sea',
    bounty: 1100000000,
    bountyFormatted: '1,100,000,000 ฿',
    fightingStyle: 'Fish-Man Karate & Fish-Man Jujutsu Master',
    hakiTypes: ["Armament (High Mastery)", "Observation"],
    quote: "I am a man who wants to be part of the future Pirate King’s crew... I cannot be intimidated by a mere Emperor of the Sea!",
    description: "A whale shark fish-man of supreme dignity and honor, Jinbe steer the Thousand Sunny through impossible tidal waves with surgical grace, wielding the moisture in the air and water of the ocean as lethal shockwaves.",
    stats: { attack: 92, defense: 97, speed: 85, willpower: 97, haki: 91 },
    signatureMoves: ['Fish-Man Karate Secret Technique: Vagabond Drill', 'Demon Brick Fist (Karakusagawaranage)', 'Ocean Current Shoulder Throw', 'Spear Wave'],
    themeKey: 'jinbe',
    themeColor: '#0284c7',
    accentBg: 'from-sky-700/20 via-blue-900/10 to-transparent',
    cinematicMomentTitle: 'A Mere Emperor of the Sea',
    cinematicMomentText: 'Refusing to yield a single second of his lifespan to Big Mom’s Soul Pocus, Jinbe stood unblinking: "If Luffy is to be King, why should I fear anyone?"',
    avatarUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'brook',
    name: 'Brook',
    japaneseName: 'ブルック',
    epithet: 'Soul King / Humming Brook',
    role: 'Musician & Fencer',
    bounty: 383000000,
    bountyFormatted: '383,000,000 ฿',
    devilFruit: {
      name: 'Yomi Yomi no Mi (Revive-Revive Fruit)',
      type: 'Paramecia',
      awakening: 'Allows his soul to leave his skeleton body at will and manifest the freezing chill of the underworld.'
    },
    fightingStyle: 'Gentleman Iaido Fencing & Soul Music Hypnosis',
    hakiTypes: ["Observation"],
    quote: "Yo-ho-ho-ho! May I please see your panties? Ah, but I have no eyes to see with! Skull joke!",
    description: "A living skeleton who drifted 50 years alone in the fog of the Florian Triangle to fulfill a sacred promise to Laboon the whale. His violin music can heal spirits, lull foes to sleep, and his blade delivers the freezing frost of the netherworld.",
    stats: { attack: 85, defense: 78, speed: 94, willpower: 93, haki: 80 },
    signatureMoves: ['Soul Solid: Cold Soul Slash', 'Aubade Coup Droit', 'Lullaby Flurry', 'Party Music: Festival of Slumber'],
    themeKey: 'brook',
    themeColor: '#a855f7',
    accentBg: 'from-purple-700/20 via-fuchsia-900/10 to-transparent',
    cinematicMomentTitle: 'Binks’ Sake on the Moonlit Sea',
    cinematicMomentText: 'In Whole Cake Island, Brook defied Emperor Big Mom face to face, sleeping beside her and stealing rubbings of the Road Poneglyphs tucked inside his cranial cavity.',
    avatarUrl: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chopper',
    name: 'Tony Tony Chopper',
    japaneseName: 'トニートニー・チョッパー',
    epithet: 'Cotton Candy Lover',
    role: 'Doctor & Pharmacist',
    bounty: 1000,
    bountyFormatted: '1,000 ฿',
    devilFruit: {
      name: 'Hito Hito no Mi (Human-Human Fruit)',
      type: 'Zoan',
      awakening: 'Monster Point: 30-minute controlled transformation into a titanic skyscraper beast with immense crushing strength.'
    },
    fightingStyle: 'Rumble Ball Seven Transformations & Medical Kung Fu',
    hakiTypes: [],
    quote: "There is no disease in this world that cannot be cured! I will become the panacea!",
    description: "A blue-nosed reindeer mentored by Dr. Hiluluk and Dr. Kureha on Drum Island. Having developed the Rumble Ball, he alters his genetic wavelengths into Walk, Heavy, Jump, Arm, Guard, Kung Fu, and Monster Point forms.",
    stats: { attack: 88, defense: 90, speed: 82, willpower: 92, haki: 75 },
    signatureMoves: ['Monster Point Palm Strike', 'Kung Fu Point Flurry', 'Horn Cannon', 'Brain Point Scope'],
    themeKey: 'chopper',
    themeColor: '#ec4899',
    accentBg: 'from-pink-600/20 via-rose-700/10 to-transparent',
    cinematicMomentTitle: 'The Miracle of Drum Island',
    cinematicMomentText: 'Standing atop the snowy drum rock as pink dust blossomed into the sky, Chopper swore to cure any ailment across the four seas.',
    avatarUrl: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'robin',
    name: 'Nico Robin',
    japaneseName: 'ニコ・ロビン',
    epithet: 'Devil Child / Light of the Revolution',
    role: 'Archaeologist & Historian',
    bounty: 930000000,
    bountyFormatted: '930,000,000 ฿',
    devilFruit: {
      name: 'Hana Hana no Mi (Flower-Flower Fruit)',
      type: 'Paramecia',
      awakening: 'Demonio Fleur: Blossoms into a giant black demon with bat wings and colossal armament-clad limbs.'
    },
    fightingStyle: 'Joint-Locking Blossoms & Giant Demonic Limbs',
    hakiTypes: ["Armament", "Observation"],
    quote: "Fools who do not respect history are destined to repeat it.",
    description: "The sole survivor of the scholarly island of Ohara wiped out by a Buster Call at age eight. The only known living human capable of deciphering the ancient Poneglyph script, she journeys to reveal the 100-year Void Century.",
    stats: { attack: 89, defense: 84, speed: 82, willpower: 95, haki: 85 },
    signatureMoves: ['Demonio Fleur: Grand Jacuzzi Clutch', 'Mil Fleur: Gigantesco Mano', 'Cien Fleur: Wing', 'Seis Fleur: Clutch'],
    themeKey: 'robin',
    themeColor: '#8b5cf6',
    accentBg: 'from-indigo-700/20 via-purple-900/10 to-transparent',
    cinematicMomentTitle: 'I Want To Live!',
    cinematicMomentText: 'Tears streaming down her face across the Tower of Law, she finally allowed herself to reach out and scream the words she kept buried inside for twenty years.',
    avatarUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'nami',
    name: 'Nami',
    japaneseName: 'ナミ',
    epithet: 'Cat Burglar',
    role: 'Navigator & Cartographer',
    bounty: 366000000,
    bountyFormatted: '366,000,000 ฿',
    fightingStyle: 'Sorcery Clima-Tact & Zeus Lightning Homie Mastery',
    hakiTypes: ["Observation (Natural Climate Intuition)"],
    quote: "What good is treasure if I have to be alone?!",
    description: "Possessing an uncanny supernatural sixth sense for atmospheric weather fluctuations, Nami navigates the unpredictable vortexes of the Grand Line while commanding devastating thunderclouds with Zeus.",
    stats: { attack: 87, defense: 72, speed: 84, willpower: 90, haki: 75 },
    signatureMoves: ['Zeus Breeze Tempo', 'Thunderbolt Tempo', 'Mirage Tempo', 'Rain Tempo'],
    themeKey: 'nami',
    themeColor: '#f97316',
    accentBg: 'from-orange-600/20 via-amber-700/10 to-transparent',
    cinematicMomentTitle: 'Luffy Will Be Pirate King',
    cinematicMomentText: 'Even facing death with Ulti smashing her skull in Onigashima, Nami refused to lie, proudly shouting that Luffy would become the Pirate King.',
    avatarUrl: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'franky',
    name: 'Franky (Cutty Flam)',
    japaneseName: 'フランキー',
    epithet: 'Cyborg / Iron Man',
    role: 'Master Shipwright & Cybernetic Engineer',
    bounty: 394000000,
    bountyFormatted: '394,000,000 ฿',
    fightingStyle: 'Cola-Powered Weaponry & General Franky Mecha Pilot',
    hakiTypes: [],
    quote: "Existing is not a crime! Living is something you must do with all your might! SUPERRRR!!",
    description: "Apprentice of the legendary shipwright Tom who built the Pirate King’s ship Oro Jackson. Franky built the dream vessel Thousand Sunny from Adam Wood and rebuilt his own flesh into a cola-fueled heavy war weapon.",
    stats: { attack: 91, defense: 96, speed: 76, willpower: 94, haki: 70 },
    signatureMoves: ['Radical Beam', 'General Cannon', 'Coup de Vent', 'Franky Iron Boxing'],
    themeKey: 'franky',
    themeColor: '#06b6d4',
    accentBg: 'from-cyan-600/20 via-sky-700/10 to-transparent',
    cinematicMomentTitle: 'The Iron Pirate’s Soul',
    cinematicMomentText: 'Piloting the invincible Iron Pirate General Franky through the heart of battle, firing searing plasma Radical Beams with his signature "SUPERRR!" stance.',
    avatarUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'usopp',
    name: 'Usopp',
    japaneseName: 'ウソップ',
    epithet: 'God Usopp / Sniper King (Sogeking)',
    role: 'Sniper & Inventor',
    bounty: 500000000,
    bountyFormatted: '500,000,000 ฿',
    fightingStyle: 'Kabuto Slingshot & Pop Green Botanical Weaponry',
    hakiTypes: ["Observation (Ultra-Long Range Awakening)"],
    quote: "Even if they face enemies they have no hope of beating... there are times when a man must stand and fight!",
    description: "Son of Red Hair sniper Yasopp, Usopp’s sharp marksmanship and quick-thinking fabrications have turned the tide of historic battles. Known across the seas as God Usopp after freeing thousands of toy slaves in Dressrosa.",
    stats: { attack: 82, defense: 78, speed: 83, willpower: 92, haki: 84 },
    signatureMoves: ['Kuro Kabuto: Special Black Star', 'Impact Wolf', 'Firebird Star', 'Golden Slumber Plant'],
    themeKey: 'usopp',
    themeColor: '#eab308',
    accentBg: 'from-amber-600/20 via-yellow-700/10 to-transparent',
    cinematicMomentTitle: 'The Long-Distance Shot That Saved Luffy',
    cinematicMomentText: 'Locking onto Sugar through kilometers of castle walls in Dressrosa using newly awakened Observation Haki, sinking the impossible shot that saved Luffy and Law.',
    avatarUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80'
  }
];

