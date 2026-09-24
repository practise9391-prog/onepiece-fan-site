export interface FamilyMentorMember {
  name: string;
  relation: string;
  epithet: string;
  image: string;
  achievements: string;
  bestShotQuote: string;
  bestShotScene: string;
  legacy: string;
}

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
  familyTree: FamilyMentorMember[];
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
  bountyRating: string;
  nemesis: string;
  description: string;
  image: string;
  glowColor: string;
  humanPast: string;
}

export interface StoryPlotScene {
  id: string;
  sceneNumber: number;
  title: string;
  tagline: string;
  storySummary: string;
  motivationLine: string;
  imageUrl: string;
  badge: string;
  keyDialogue?: string;
  speaker?: string;
}

export interface DemonSlayerArc {
  id: string;
  title: string;
  japaneseTitle: string;
  subtitle: string;
  episodes: string;
  antagonists: string[];
  synopsis: string;
  keyClash: string;
  image: string;
  storyPlotScenes: StoryPlotScene[];
}

export interface DemonSlayerQuote {
  id: string;
  speaker: string;
  title: string;
  japaneseName: string;
  quote: string;
  context: string;
  tagline: string;
  image: string;
  accentColor: string;
}

export interface NichirinBlade {
  id: string;
  name: string;
  bearer: string;
  bladeColor: string;
  meaning: string;
  craftsman: string;
  specialTrait: string;
  currentStatus: string;
  image: string;
}

export const HASHIRA_PILLARS: HashiraMember[] = [
  {
    id: 'tanjiro',
    name: 'Tanjiro Kamado',
    japaneseName: '竈門 炭治郎',
    title: 'Sun Breathing Inheritor / Demon Slayer',
    breathingStyle: 'Sun Breathing (Hinokami Kagura) & Water Breathing',
    bladeColor: 'Pure Pitch Black (Sun Affinity)',
    markStatus: 'Awakened (Flame Crest Forehead Mark & Transparent World)',
    quote: 'No matter how many people you may lose, you have no choice but to go on living. No matter how devastating the blows may be!',
    description: 'A kind-hearted youth who joined the Demon Slayer Corps to find a cure for his demonized sister Nezuko. By unlocking the Sun Breathing inherited through the Hinokami Kagura dance, he carried humanity’s hopes against Muzan.',
    signatureForms: ['Dance of the Fire God (Enbu)', 'Clear Blue Sky', 'Burning Bones, Summer Sun', 'Dragon Sun Halo Head Dance', 'Thirteenth Form'],
    image: './images/demon-slayer/tanjiro.png',
    accentColor: '#ef4444',
    familyTree: [
      {
        name: 'Tanjuro Kamado',
        relation: 'Father & First Mentor',
        epithet: 'Master of the Hinokami Kagura',
        image: './images/demon-slayer/tanjiro.png',
        achievements: 'Performed the ceremonial Sun Dance from dusk till dawn without exhaustion in sub-zero snow; decapitated a giant bear with a single hand-axe using Transparent World.',
        bestShotQuote: 'Tanjiro, keep breathing. This Kagura dance and these Hanafuda earrings must be passed down to you without interruption.',
        bestShotScene: 'The snowy mountain ritual under the falling embers of the ceremonial bonfire.',
        legacy: 'Passed down the sacred Sun Breathing forms disguised as a charcoal seller family dance.'
      },
      {
        name: 'Sakonji Urokodaki',
        relation: 'Master & Water Cultivator',
        epithet: 'Former Water Hashira',
        image: './images/demon-slayer/giyu.png',
        achievements: 'Trained Giyu Tomioka and Tanjiro Kamado; guaranteed Nezuko’s innocence with his own life before the Master of the Mansion.',
        bestShotQuote: 'Make your decision in two seconds! If you are too slow, your sister and comrades will die!',
        bestShotScene: 'Standing resolute before the Master of the Mansion, writing the blood pledge to commit seppuku if Nezuko ever hurts a human.',
        legacy: 'Instilled the core fundamentals of Total Concentration Breathing and unyielding resolve.'
      },
      {
        name: 'Kyojuro Rengoku',
        relation: 'Spiritual Big Brother & Mentor',
        epithet: 'Flame Hashira (炎柱)',
        image: './images/demon-slayer/rengoku.png',
        achievements: 'Protected all 200 passengers aboard the Mugen Train; fought Upper Rank 3 Akaza alone to sunrise without retreating an inch.',
        bestShotQuote: 'Set your heart ablaze! Grit your teeth and look forward! Even if time stops for no one, keep burning!',
        bestShotScene: 'Holding Akaza in place with his bare neck and bare muscles while the sun rises over the horizon.',
        legacy: 'Transferred the flaming tsuba (sword guard) to Tanjiro, inspiring his Hinokami Kagura mastery.'
      }
    ]
  },
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
    accentColor: '#f97316',
    familyTree: [
      {
        name: 'Ruka Rengoku',
        relation: 'Mother',
        epithet: 'The Moral Compass of the Flame Clan',
        image: './images/demon-slayer/rengoku.png',
        achievements: 'Instilled the sacred creed that those born strong exist solely to protect the weak.',
        bestShotQuote: 'Do you know why you were born stronger than others? It is to help those who are weaker.',
        bestShotScene: 'Appearing as a gentle spirit at the dawn of the Mugen Train battle, smiling and saying: "You did splendidly."',
        legacy: 'Gave Kyojuro the unconditional devotion to protect human lives at any personal cost.'
      },
      {
        name: 'Shinjuro Rengoku',
        relation: 'Father & Predecessor',
        epithet: 'Former Flame Hashira',
        image: './images/demon-slayer/rengoku.png',
        achievements: 'Guarded the Flame Breathing ancestral scrolls; later wept tears of pride and defended the Ubuyashiki estate during the Infinity Castle battle.',
        bestShotQuote: 'Kyojuro... you were my proudest son. Forgive your foolish old father.',
        bestShotScene: 'Breaking down in tears holding Kyojuro’s final farewell letter delivered by Tanjiro.',
        legacy: 'Trained Kyojuro in swordsmanship before falling into grief, leaving Kyojuro to learn from scrolls.'
      }
    ]
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
    accentColor: '#0ea5e9',
    familyTree: [
      {
        name: 'Sabito',
        relation: 'Sworn Brother & Savior',
        epithet: 'The Peach-Haired Hero',
        image: './images/demon-slayer/giyu.png',
        achievements: 'Single-handedly defeated almost every demon on Mt. Fujikasane during the Final Selection to protect all participants before falling to the Hand Demon.',
        bestShotQuote: 'Giyu, live! Don’t you ever waste the life that your sister and I bought for you with our blood!',
        bestShotScene: 'Appearing as a spirit atop the sacred boulder, guiding Tanjiro’s blade with unmatched elegance.',
        legacy: 'Half of Giyu’s iconic split haori pattern belongs to Sabito’s green-and-yellow geometric design.'
      },
      {
        name: 'Tsutako Tomioka',
        relation: 'Elder Sister',
        epithet: 'Guardian of Giyu’s Childhood',
        image: './images/demon-slayer/giyu.png',
        achievements: 'Hid Giyu in a secret storage closet the night before her wedding, sacrificing her life to save him from a demon raid.',
        bestShotQuote: 'Stay quiet, Giyu. No matter what sounds you hear, you must survive.',
        bestShotScene: 'Hiding young Giyu in the dark wardrobe while confronting the demon alone.',
        legacy: 'The solid red-maroon half of Giyu’s haori is made from Tsutako’s kimono.'
      }
    ]
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
    accentColor: '#a855f7',
    familyTree: [
      {
        name: 'Kanae Kocho',
        relation: 'Elder Sister & Mentor',
        epithet: 'Former Flower Hashira',
        image: './images/demon-slayer/shinobu.png',
        achievements: 'Founded the Butterfly Mansion sanctuary; rescued Kanao Tsuyuri from slavery; fought Upper Rank 2 Doma till sunrise.',
        bestShotQuote: 'Shinobu, smile. A smile brings warmth to those who are suffering.',
        bestShotScene: 'Dying in Shinobu’s arms at dawn, sharing the description and blood art of Doma so Shinobu could defeat him.',
        legacy: 'Left Shinobu her iconic butterfly-wing haori and unyielding kindness.'
      },
      {
        name: 'Kanao Tsuyuri',
        relation: 'Adoptive Sister & Tsuguko',
        epithet: 'Flower Breathing Master',
        image: './images/demon-slayer/shinobu.png',
        achievements: 'Mastered Equinoctial Vermilion Eye; avenged Kanae and Shinobu by beheading weakened Upper Rank 2 Doma; injected the humanization cure into Tanjiro.',
        bestShotQuote: 'Master Shinobu told me to follow my heart. Right now, my heart screams to defeat you!',
        bestShotScene: 'Decapitating Doma alongside Inosuke Hashibira amidst the collapsing icy lotus temple.',
        legacy: 'Inherited the dual butterfly hairpins of both Kanae and Shinobu.'
      }
    ]
  },
  {
    id: 'zenitsu',
    name: 'Zenitsu Agatsuma',
    japaneseName: '我妻 善逸',
    title: 'Thunder Breathing Master',
    breathingStyle: 'Thunder Breathing (Kaminari no Kokyū)',
    bladeColor: 'Golden Lightning Yellow',
    markStatus: 'Awakened (Godspeed & Seventh Form Creator)',
    quote: 'If you can only do one thing, master it to perfection! Hone it to the ultimate extreme!',
    description: 'A cowardly boy who transforms into an unstoppable blinding thunder god when he falls unconscious. Created the Seventh Form: Honoikazuchi no Kami to defeat his corrupted former senior Kaigaku.',
    signatureForms: ['First Form: Thunderclap and Flash', 'Sixfold, Eightfold, Godspeed', 'Seventh Form: Honoikazuchi no Kami (Flaming Thunder God)'],
    image: './images/demon-slayer/zenitsu.png',
    accentColor: '#eab308',
    familyTree: [
      {
        name: 'Jigoro Kuwajima',
        relation: 'Grandfather & Master',
        epithet: 'Former Roaring Thunder Hashira',
        image: './images/demon-slayer/zenitsu.png',
        achievements: 'Nurtured Zenitsu when he was abandoned in debt; believed in Zenitsu’s potential when no one else in the world did.',
        bestShotQuote: 'Zenitsu, it’s fine if you can only master the first form. Hone that single form until it shines brighter than lightning!',
        bestShotScene: 'Pulling Zenitsu out from the tree after he was struck by lightning, wrapping him in bandages with tears of pride.',
        legacy: 'Passed down the yellow triangle-pattern haori and the essence of Thunder Breathing.'
      }
    ]
  },
  {
    id: 'inosuke',
    name: 'Inosuke Hashibira',
    japaneseName: '嘴平 伊之助',
    title: 'Beast Breathing Creator',
    breathingStyle: 'Beast Breathing (Kedamono no Kokyū)',
    bladeColor: 'Indigo-Gray Serrated Twin Blades',
    markStatus: 'Awakened (Spatial Awareness & Joint Dislocation)',
    quote: 'Coming through! Step aside! Lord Inosuke has arrived! Pig Assault!',
    description: 'Raised by wild boars in the mountains, he forged his own jagged dual-blade combat system. Possesses superhuman tactile spatial awareness and the heart of an indomitable beast.',
    signatureForms: ['First Fang: Pierce', 'Fifth Fang: Crazy Cutting', 'Seventh Fang: Spatial Awareness', 'Explosive Rushing Chops'],
    image: './images/demon-slayer/inosuke.png',
    accentColor: '#38bdf8',
    familyTree: [
      {
        name: 'Kotoha Hashibira',
        relation: 'Mother',
        epithet: 'The Loving Songstress',
        image: './images/demon-slayer/inosuke.png',
        achievements: 'Escaped domestic abuse and sheltered young Inosuke; dropped infant Inosuke into a flowing river to save his life from Doma.',
        bestShotQuote: 'Inosuke, live... Even if I die, please grow up strong and happy...',
        bestShotScene: 'Singing the gentle finger-promise lullaby before casting Inosuke into the rushing river below the cliff.',
        legacy: 'Her memory gave Inosuke the boundless rage to avenge her against Upper Rank 2 Doma.'
      }
    ]
  }
];

export const TWELVE_KIZUKI: DemonMoon[] = [
  {
    id: 'muzan',
    name: 'Muzan Kibutsuji',
    rank: 'Demon Progenitor & King of Demons (鬼の始祖)',
    bloodArt: 'Biokinesis, Black Blood Thorns, Flesh Whips & Shockwaves',
    bountyRating: 'Supreme Extinction Threat (Cataclysm)',
    nemesis: 'Yoriichi Tsugikuni & The Entire Demon Slayer Corps',
    description: 'The first and supreme demon, born over 1,000 years ago in the Heian period. Immortal, ruthless, and terrifyingly powerful. He sought the Blue Spider Lily and Nezuko’s sun-resistant blood to conquer mortality.',
    image: './images/demon-slayer/muzan.png',
    glowColor: 'rgba(239, 68, 68, 0.9)',
    humanPast: 'Suffered from a terminal disease in the Heian era; murdered his physician in fury before discovering the experimental medicine granted demonic immortality.'
  },
  {
    id: 'kokushibo',
    name: 'Kokushibo (Michikatsu Tsugikuni)',
    rank: 'Upper Rank One (上弦の壱)',
    bloodArt: 'Moon Breathing (16 Forms) & Flesh Katana Crescent Blades',
    bountyRating: 'Immortal Calamity (S-Class Threat)',
    nemesis: 'Yoriichi Tsugikuni, Gyomei, Sanemi, Muichiro, Genya',
    description: 'Twin brother of Yoriichi Tsugikuni. Driven by bitter jealousy of his brother’s unmatched genius, he betrayed humanity and became Muzan’s greatest general for four centuries.',
    image: './images/demon-slayer/akaza.png',
    glowColor: 'rgba(168, 85, 247, 0.9)',
    humanPast: 'Michikatsu Tsugikuni, eldest samurai twin of the Sengoku era who feared death before ever surpassing his brother.'
  },
  {
    id: 'doma',
    name: 'Doma',
    rank: 'Upper Rank Two (上弦の弐)',
    bloodArt: 'Cryokinesis (Freezing Blood Lotus & Bodhisattva Ice Avatar)',
    bountyRating: 'Glacial Massacre (A-Class Threat)',
    nemesis: 'Shinobu Kocho, Kanao Tsuyuri, Inosuke Hashibira',
    description: 'Leader of the Eternal Paradise Cult. Completely devoid of human emotion, he feigns warmth while feasting on his followers. His frozen mist destroys the lungs of demon slayers.',
    image: './images/demon-slayer/infinity-castle.png',
    glowColor: 'rgba(56, 189, 248, 0.9)',
    humanPast: 'Revered as a golden-eyed divine child by his parents, he grew up emotionless, feeling nothing but condescending pity for human despair.'
  },
  {
    id: 'akaza',
    name: 'Akaza (Hakuji)',
    rank: 'Upper Rank Three (上弦の参)',
    bloodArt: 'Destructive Death (Compass Needle & Shockwave Annihilation)',
    bountyRating: 'Martial Absolute (A-Class Threat)',
    nemesis: 'Kyojuro Rengoku, Tanjiro Kamado, Giyu Tomioka',
    description: 'A master martial artist who seeks the pinnacle of strength. Refused to consume women. Wields the Compass Needle technique that detects the fighting spirit of enemies.',
    image: './images/demon-slayer/akaza.png',
    glowColor: 'rgba(244, 63, 94, 0.9)',
    humanPast: 'Hakuji, a devoted son and fiancé who protected his ailing father and sickly love Koyuki. When rival dojo members poisoned their well, Hakuji slaughtered 67 swordsmen with bare fists.'
  }
];

export const BREATHING_STYLES: BreathingStyle[] = [
  {
    id: 'sun',
    name: 'Sun Breathing (Hinokami Kagura)',
    japaneseName: '日の呼吸 / ヒノカミ神楽',
    origin: 'Created by Yoriichi Tsugikuni during the Sengoku Golden Era',
    derivation: 'The Primordial Breathing Style from which all other styles branch',
    color: '#ef4444',
    description: 'The original, purest, and most devastating breathing technique. Direct sunlight energy is channeled into the blade, causing burning wounds that stop demon regeneration.',
    forms: [
      { number: 'First Form', name: 'Dance (Enbu)', description: 'A high-speed vertical slash with continuous searing flames.' },
      { number: 'Second Form', name: 'Clear Blue Sky', description: 'A full 360-degree aerial spinning wheel of flame.' },
      { number: 'Seventh Form', name: 'Sunflower Thrust', description: 'A single point high-velocity piercing strike.' },
      { number: 'Thirteenth Form', name: 'Continuous Cycle', description: 'Linking all twelve forms continuously to target Muzan’s twelve vital organs.' }
    ]
  },
  {
    id: 'flame',
    name: 'Flame Breathing',
    japaneseName: '炎の呼吸',
    origin: 'Branch of Sun Breathing developed by the ancestral Rengoku clan',
    derivation: 'Direct offshoot of Sun Breathing',
    color: '#f97316',
    description: 'Emphasizes explosive, blazing single-strike impacts that incinerate the battlefield.',
    forms: [
      { number: 'First Form', name: 'Unknowing Fire', description: 'Charges forward at breakneck speed and decapitates the enemy in a single slash.' },
      { number: 'Fifth Form', name: 'Flame Tiger', description: 'A series of slashes that envelop the swordsman in the shape of a roaring flame tiger.' },
      { number: 'Ninth Form', name: 'Rengoku (Purgatory)', description: 'The ultimate esoteric art of the Flame Hashira, gouging the earth in a devastating inferno dash.' }
    ]
  },
  {
    id: 'water',
    name: 'Water Breathing',
    japaneseName: '水の呼吸',
    origin: 'Branch of Sun Breathing developed for adaptable, fluid swordsmanship',
    derivation: 'Direct offshoot of Sun Breathing',
    color: '#0ea5e9',
    description: 'The most widely learned style due to its gentle fluidity and ability to deflect, absorb, and redirect attacks.',
    forms: [
      { number: 'First Form', name: 'Water Surface Slash', description: 'A clean horizontal slash like the calm surface of a lake.' },
      { number: 'Tenth Form', name: 'Constant Flux', description: 'A continuous flowing dragon strike that grows exponentially in power with each rotation.' },
      { number: 'Eleventh Form', name: 'Dead Calm (Nagi)', description: 'Created exclusively by Giyu Tomioka; ceases all movement to disperse any attack.' }
    ]
  },
  {
    id: 'thunder',
    name: 'Thunder Breathing',
    japaneseName: '雷の呼吸',
    origin: 'Focuses on immense speed and explosive leg muscle contractions',
    derivation: 'Direct offshoot of Sun Breathing',
    color: '#eab308',
    description: 'Channels electric speed into lightning-fast iaido draws, moving faster than human vision.',
    forms: [
      { number: 'First Form', name: 'Thunderclap and Flash', description: 'Dashes forward with lightning speed and decapitates the demon in the blink of an eye.' },
      { number: 'Seventh Form', name: 'Honoikazuchi no Kami', description: 'Created by Zenitsu; summons a colossal golden lightning dragon that tears the heavens.' }
    ]
  }
];

// Helper to generate 20 story scenes for Demon Slayer Arcs
const generate20DemonSlayerScenes = (arcName: string, prefix: string, baseImg: string): StoryPlotScene[] => {
  const sceneTemplates = [
    { title: 'The Call to Arms', tag: 'Destiny Begins', lesson: 'Courage is choosing to move forward even when grief shatters your world.' },
    { title: 'Crucible of Training', tag: 'Honing the Spirit', lesson: 'Every strike against the stone sharpens your resolve to protect others.' },
    { title: 'The Demon’s Lair', tag: 'Shadows in the Mist', lesson: 'Evil flourishes in silence; justice demands unwavering vigilance.' },
    { title: 'Clash of Blades', tag: 'Steel and Blood', lesson: 'True strength is born not from malice, but from a vow to defend human warmth.' },
    { title: 'Total Concentration Unleashed', tag: 'Breathing Awakened', lesson: 'Master your breath, and you master the storm raging within.' },
    { title: 'The Memory of Family', tag: 'Inherited Warmth', lesson: 'The love of those who passed fuels the fire that keeps you standing.' },
    { title: 'Severing the Threads', tag: 'Bonds of Steel', lesson: 'False bonds formed by terror will always crumble before genuine love.' },
    { title: 'A Brother’s Stand', tag: 'Unbreakable Oath', lesson: 'A promise between siblings is stronger than any curse of mortality.' },
    { title: 'The Pillar’s Arrival', tag: 'Overwhelming Might', lesson: 'When darkness seems absolute, a true pillar carries the sky upon their back.' },
    { title: 'Dance of the Sun', tag: 'Hinokami Kagura', lesson: 'When all standard forms fail, dig into your bloodline’s forgotten fire.' },
    { title: 'Gourd Shattered', tag: 'Constant Concentration', lesson: 'Consistency in quiet moments prepares you for the roaring chaos of battle.' },
    { title: 'Nightmare Aboard the Engine', tag: 'Dream Invaded', lesson: 'Wake yourself from sweet illusions to face the harsh, honorable truth.' },
    { title: 'Defending the Innocent', tag: '200 Souls Protected', lesson: 'The duty of the strong is to make sure the weak never feel forsaken.' },
    { title: 'The Duel with Upper Rank', tag: 'To the Death', lesson: 'Human lives are precious precisely because they are fragile and fleeting.' },
    { title: 'Set Your Heart Ablaze', tag: 'Eternal Flame', lesson: 'Live with pride; even if your body breaks, your heart must burn on.' },
    { title: 'The Dawn Triumphs', tag: 'Sunlight Breaks', lesson: 'No night lasts forever; the sunrise always burns away the shadows.' },
    { title: 'The Mark Awakens', tag: 'Crest of Fire', lesson: 'When heart rate surpasses 200 and blood boils, mortal limits dissolve.' },
    { title: 'Bright Red Nichirin', tag: 'Heat of the Sun', lesson: 'Grip your blade with everything you possess until the cold metal turns red.' },
    { title: 'Transparent World', tag: 'See Through All Illusion', lesson: 'Calm the mind, empty the self, and the truth of the universe opens.' },
    { title: 'The Ultimate Sacrifice', tag: 'Dawn of a Demon-Free World', lesson: 'Inherited will never dies; it passes like an unquenchable torch to tomorrow.' }
  ];

  return sceneTemplates.map((t, i) => ({
    id: `${prefix}-scene-${i + 1}`,
    sceneNumber: i + 1,
    title: `${t.title} — ${arcName}`,
    tagline: t.tag,
    storySummary: `During the harrowing events of the ${arcName}, scene ${i + 1} proved to be a defining turning point. The Demon Slayer Corps confronted overwhelming demonic pressure, relying on Total Concentration Breathing and unwavering bonds to overcome the crisis.`,
    motivationLine: t.lesson,
    imageUrl: baseImg,
    badge: i < 5 ? 'CLASH' : i < 15 ? 'BATTLE' : 'CLIMAX',
    keyDialogue: `"${t.tag}: As long as we breathe, we will protect human life!"`,
    speaker: i % 2 === 0 ? 'Tanjiro Kamado' : 'Kyojuro Rengoku'
  }));
};

export const DEMON_SLAYER_ARCS: DemonSlayerArc[] = [
  {
    id: 'final-selection',
    title: 'Final Selection Arc',
    japaneseTitle: '最終選別編',
    subtitle: 'Mount Fujikasane Wisteria Trials',
    episodes: 'Episodes 1–5',
    antagonists: ['Hand Demon', 'Temple Demon'],
    synopsis: 'Following the brutal slaughter of his family and Nezuko’s transformation, Tanjiro spends two grueling years training under Sakonji Urokodaki on Mt. Sagiri before facing the 7-day survival trial on Wisteria Mountain.',
    keyClash: 'Tanjiro Kamado vs Hand Demon (Water Breathing First Form)',
    image: './images/demon-slayer/tanjiro.png',
    storyPlotScenes: generate20DemonSlayerScenes('Final Selection Arc', 'fs', './images/demon-slayer/tanjiro.png')
  },
  {
    id: 'natagumo',
    title: 'Mount Natagumo Arc',
    japaneseTitle: '那田蜘蛛山編',
    subtitle: 'The Spider Demon Clan & Hinokami Kagura',
    episodes: 'Episodes 15–21',
    antagonists: ['Rui (Lower Rank Five)', 'Spider Demon Family'],
    synopsis: 'The Demon Slayer Corps faces complete slaughter on Mount Natagumo. Tanjiro and Nezuko unlock the sacred Hinokami Kagura dance to cut through Rui’s razor steel spider threads.',
    keyClash: 'Tanjiro & Nezuko vs Rui (Dance of the Fire God + Blood Burst)',
    image: './images/demon-slayer/giyu.png',
    storyPlotScenes: generate20DemonSlayerScenes('Mount Natagumo Arc', 'nat', './images/demon-slayer/giyu.png')
  },
  {
    id: 'mugen-train',
    title: 'Mugen Train Arc',
    japaneseTitle: '無限列車編',
    subtitle: 'Flame Hashira’s Last Stand & Akaza’s Clash',
    episodes: 'Episodes 26–34 / Movie',
    antagonists: ['Enmu (Lower Rank One)', 'Akaza (Upper Rank Three)'],
    synopsis: 'Over forty passengers vanish aboard the locomotive. Joined by Flame Hashira Kyojuro Rengoku, the young slayers sever Enmu’s dream control, before Akaza arrives for a historic battle.',
    keyClash: 'Kyojuro Rengoku vs Akaza (Ninth Form: Rengoku vs Destructive Death)',
    image: './images/demon-slayer/rengoku.png',
    storyPlotScenes: generate20DemonSlayerScenes('Mugen Train Arc', 'mugen', './images/demon-slayer/rengoku.png')
  },
  {
    id: 'entertainment-district',
    title: 'Entertainment District Arc',
    japaneseTitle: '遊郭編',
    subtitle: 'Yoshiwara Red-Light District & Upper Rank Six',
    episodes: 'Season 2 (11 Episodes)',
    antagonists: ['Daki & Gyutaro (Upper Rank Six)'],
    synopsis: 'Sound Hashira Tengen Uzui infiltrates the pleasure district to locate his missing shinobi wives. A catastrophic war breaks out against the sibling demons Daki and Gyutaro.',
    keyClash: 'Tengen Uzui & Tanjiro vs Gyutaro (Musical Score & Sun Breathing)',
    image: './images/demon-slayer/inosuke.png',
    storyPlotScenes: generate20DemonSlayerScenes('Entertainment District Arc', 'ed', './images/demon-slayer/inosuke.png')
  },
  {
    id: 'swordsmith-village',
    title: 'Swordsmith Village Arc',
    japaneseTitle: '刀鍛冶の里編',
    subtitle: 'Awakening the Demon Slayer Mark',
    episodes: 'Season 3 (11 Episodes)',
    antagonists: ['Hantengu (Upper Rank Four)', 'Gyokko (Upper Rank Five)'],
    synopsis: 'Tanjiro travels to the hidden village of swordsmiths to repair his sword. Upper Moons invade the sanctuary, forcing Muichiro Tokito and Mitsuri Kanroji to awaken their Marks.',
    keyClash: 'Muichiro vs Gyokko & Tanjiro vs Hantengu (Bright Red Blade)',
    image: './images/demon-slayer/shinobu.png',
    storyPlotScenes: generate20DemonSlayerScenes('Swordsmith Village Arc', 'sv', './images/demon-slayer/shinobu.png')
  },
  {
    id: 'infinity-castle',
    title: 'Infinity Castle Arc',
    japaneseTitle: '無限城編',
    subtitle: 'The Final Decisive War Against Muzan',
    episodes: 'The Climax Trilogy',
    antagonists: ['Muzan Kibutsuji', 'Kokushibo', 'Doma', 'Akaza', 'Nakime'],
    synopsis: 'The entire Demon Slayer Corps falls into Nakime’s non-Euclidean sliding fortress. Every Pillar fights to the death to decapitate the Upper Moons and drag Muzan into the sunlight.',
    keyClash: 'All Hashira & Tanjiro vs Muzan Kibutsuji (Thirteenth Form)',
    image: './images/demon-slayer/infinity-castle.png',
    storyPlotScenes: generate20DemonSlayerScenes('Infinity Castle Arc', 'ic', './images/demon-slayer/infinity-castle.png')
  }
];

export const DEMON_SLAYER_QUOTES: DemonSlayerQuote[] = [
  {
    id: 'q-rengoku',
    speaker: 'Kyojuro Rengoku',
    title: 'Flame Hashira',
    japaneseName: '煉獄 杏寿郎',
    quote: 'Set your heart ablaze! Stand tall and live with pride! No matter how weak or unworthy you feel, keep your heart burning, grit your teeth, and move forward.',
    context: 'His dying words to Tanjiro, Inosuke, and Zenitsu as the morning sun rises over the Mugen Train.',
    tagline: 'The Eternal Flame of Humanity',
    image: './images/demon-slayer/rengoku.png',
    accentColor: '#f97316'
  },
  {
    id: 'q-tanjiro',
    speaker: 'Tanjiro Kamado',
    title: 'Sun Breathing Inheritor',
    japaneseName: '竈門 炭治郎',
    quote: 'Those who regret their own actions, who were tortured by what they’d become... I will never trample upon them! Demons were once human too!',
    context: 'Replying to Giyu Tomioka on Mt. Natagumo after laying his hand gently upon the decaying spider demon.',
    tagline: 'Compassion Stronger Than Steel',
    image: './images/demon-slayer/tanjiro.png',
    accentColor: '#ef4444'
  },
  {
    id: 'q-giyu',
    speaker: 'Giyu Tomioka',
    title: 'Water Hashira',
    japaneseName: '冨岡 義勇',
    quote: 'The weak have no rights and no choices! Their only fate is to be relentlessly crushed by the strong! If you want your sister back, pick up your blade and stand up!',
    context: 'Confronting young Tanjiro in the snow of Mt. Kumotori to shock him out of helpless despair.',
    tagline: 'The Cold Slap of Reality',
    image: './images/demon-slayer/giyu.png',
    accentColor: '#0ea5e9'
  },
  {
    id: 'q-shinobu',
    speaker: 'Shinobu Kocho',
    title: 'Insect Hashira',
    japaneseName: '胡蝶 しのぶ',
    quote: 'I may be the only Hashira who cannot sever a demon’s head, but as long as I can create a poison strong enough to melt their flesh, victory is certain.',
    context: 'Speaking to Tanjiro on the roof of the Butterfly Mansion about her vow to avenge her sister Kanae.',
    tagline: 'Lethal Grace & Scientific Will',
    image: './images/demon-slayer/shinobu.png',
    accentColor: '#a855f7'
  }
];

export const NICHIRIN_BLADES: NichirinBlade[] = [
  {
    id: 'blade-tanjiro',
    name: 'Black Sun Nichirin Katana',
    bearer: 'Tanjiro Kamado',
    bladeColor: 'Pitch Black (Sun Breathing Affinity)',
    meaning: 'The black blade is the rarest color in Corps history, formerly thought to bring early death, but actually signifies affinity for Sun Breathing.',
    craftsman: 'Hotaru Haganezuka',
    specialTrait: 'Turns Bright Red under intense grip and friction, nullifying Muzan’s regeneration.',
    currentStatus: 'Forged from a 300-year-old Sengoku blade found inside the Yoriichi Type Zero doll.',
    image: './images/demon-slayer/tanjiro.png'
  },
  {
    id: 'blade-rengoku',
    name: 'Crimson Flame Hamon Nichirin',
    bearer: 'Kyojuro Rengoku',
    bladeColor: 'Flaming Crimson Red with Roaring Fire Pattern',
    meaning: 'Signifies explosive passion, high thermal endurance, and direct mastery of Flame Breathing.',
    craftsman: 'Swordsmith Village Chief Tecchin Tecchikawahara',
    specialTrait: 'Its flaming flame-shaped tsuba was later mounted onto Tanjiro’s sword.',
    currentStatus: 'Tsuba preserved and wielded by Tanjiro Kamado into the Infinity Castle.',
    image: './images/demon-slayer/rengoku.png'
  },
  {
    id: 'blade-giyu',
    name: 'Ocean Depths Nichirin Blade',
    bearer: 'Giyu Tomioka',
    bladeColor: 'Deep Cobalt Blue',
    meaning: 'Represents calmness, fluidity, and absolute adaptability like water.',
    craftsman: 'Swordsmith Village Guild',
    specialTrait: 'Engraved with "Destroyer of Demons" (悪鬼滅殺). Turned red during clash against Akaza.',
    currentStatus: 'Active service in the Final Battle.',
    image: './images/demon-slayer/giyu.png'
  },
  {
    id: 'blade-zenitsu',
    name: 'Lightning Streak Katana',
    bearer: 'Zenitsu Agatsuma',
    bladeColor: 'Golden Yellow with Crackling Lightning Hamon',
    meaning: 'Signifies unmatched blinding speed, explosive acceleration, and thunderous power.',
    craftsman: 'Swordsmith Village Masters',
    specialTrait: 'Allows instant frictionless drawing for Godspeed and Seventh Form.',
    currentStatus: 'Wielded to decapitate Upper Moon Kaigaku.',
    image: './images/demon-slayer/zenitsu.png'
  }
];

export const DEMON_SLAYER_OATH = {
  title: 'THE SACRED OATH OF THE DEMON SLAYER CORPS',
  japaneseTitle: '鬼殺隊の誓い • 悪鬼滅殺',
  verse: `We do not fight for glory, nor do we fight for personal salvation.
We fight so that no child shall ever weep in the snow beside a shattered door.
We fight so that the gentle people of this world may see tomorrow’s sunrise.
Until the very last demon is burned to ash by the morning sun,
we shall breathe, we shall hold our swords, and we shall set our hearts ablaze!`,
  creed: '悪鬼滅殺 — DESTROY ALL WICKED DEMONS',
  masterMessage: '— Kagaya Ubuyashiki (97th Leader of the Demon Slayer Corps)'
};
