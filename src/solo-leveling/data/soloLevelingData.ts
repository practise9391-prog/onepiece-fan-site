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

export interface HunterDossier {
  id: string;
  name: string;
  title: string;
  koreanName: string;
  rank: 'National Level (Special S-Rank)' | 'S-Rank' | 'Beyond Measurement';
  guild: string;
  classType: string;
  signatureAbility: string;
  description: string;
  image: string;
  accentColor: string;
  familyTree: FamilyMentorMember[];
}

export interface ShadowSoldier {
  id: string;
  name: string;
  koreanName: string;
  grade: 'Grand Marshal' | 'General' | 'Marshal' | 'Elite Knight' | 'Knight';
  origin: string;
  ability: string;
  quote: string;
  description: string;
  image: string;
  glowColor: string;
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

export interface SoloLevelingArc {
  id: string;
  title: string;
  koreanTitle: string;
  subtitle: string;
  chapters: string;
  antagonists: string[];
  synopsis: string;
  keyClash: string;
  image: string;
  storyPlotScenes: StoryPlotScene[];
}

export interface SystemSkill {
  id: string;
  name: string;
  type: 'Passive' | 'Active' | 'Monarch Authority';
  manaCost: string;
  description: string;
  effect: string;
}

export interface SoloLevelingQuote {
  id: string;
  speaker: string;
  title: string;
  quote: string;
  context: string;
  tagline: string;
  image: string;
  accentColor: string;
}

export interface MonarchWeapon {
  id: string;
  name: string;
  bearer: string;
  rank: 'Mythic' | 'Legendary' | 'Unique';
  attackPower: string;
  origin: string;
  specialTrait: string;
  currentStatus: string;
  image: string;
}

export const TOP_HUNTERS: HunterDossier[] = [
  {
    id: 'jinwoo',
    name: 'Sung Jin-Woo',
    title: 'The Shadow Monarch (그림자 군주)',
    koreanName: '성진우',
    rank: 'Beyond Measurement',
    guild: 'Ahjin Guild (Master)',
    classType: 'Mage / Necromancer Assassin',
    signatureAbility: 'Shadow Extraction ("ARISE"), Ruler’s Authority, Shadow Exchange',
    description: 'Former "Weakest Hunter of All Mankind" (E-Rank). Chosen as the sole Player by the Architect, he inherited the primordial power of Ashborn, the Monarch of Shadows.',
    image: './images/solo-leveling/jinwoo.png',
    accentColor: '#3b82f6',
    familyTree: [
      {
        name: 'Sung Il-Hwan',
        relation: 'Father',
        epithet: 'Ruler’s Emissary / Missing S-Rank Hunter',
        image: './images/solo-leveling/jinwoo.png',
        achievements: 'Trapped inside an S-Rank dungeon for ten years; chosen by the Rulers as an emissary; shielded Jin-Woo against the Beast and Frost Monarchs to the death.',
        bestShotQuote: 'Jin-Woo... how much you have grown. Forgive your father for missing your graduation.',
        bestShotScene: 'Disintegrating into golden light in Jin-Woo’s arms at the summit of a ruined skyscraper after saving his life.',
        legacy: 'Transferred his love and protection, proving human family bonds transcend cosmic wars.'
      },
      {
        name: 'Ashborn',
        relation: 'Predecessor & Spiritual Father',
        epithet: 'The Greatest Fragment of Brilliant Light / Original Shadow Monarch',
        image: './images/solo-leveling/igris.png',
        achievements: 'Led the Army of the Dead for eons; selected Jin-Woo as his true inheritor and granted him the infinite Black Heart of the Monarch.',
        bestShotQuote: 'Death is not the end. To me, death is but a beginning. Take my power and walk the path you choose.',
        bestShotScene: 'Greeting Jin-Woo in the eternal domain of death, sitting peacefully on his throne before dissolving into Jin-Woo’s soul.',
        legacy: 'Bestowed the complete dominion of shadows, infinite mana pool, and the entire Shadow Army.'
      },
      {
        name: 'Go Gun-Hee',
        relation: 'Mentor & Grandfather Figure',
        epithet: 'Chairman of the Korean Hunters Association',
        image: './images/solo-leveling/jinwoo.png',
        achievements: 'Protected South Korea for decades despite a failing heart; recognized Jin-Woo’s greatness and shielded him from global political exploitation.',
        bestShotQuote: 'Hunter Sung Jin-Woo... please, protect this country. You are our proudest hunter.',
        bestShotScene: 'Fighting the Frost Monarch with burning golden Ruler aura inside his office despite knowing his heart would fail.',
        legacy: 'Left Jin-Woo full authority over Korea’s safety and absolute moral guidance.'
      }
    ]
  },
  {
    id: 'cha-haein',
    name: 'Cha Hae-In',
    title: 'The Sword Dance Huntress',
    koreanName: '차해인',
    rank: 'S-Rank',
    guild: 'Hunters Guild (Vice Master)',
    classType: 'Sword Master',
    signatureAbility: 'Sword of Light, Mana Scent Sensitivity',
    description: 'South Korea’s only female S-Rank hunter and vice-master of the prestigious Hunters Guild. Hypersensitive to the foul odor of mana, Jin-Woo is the only hunter whose scent smells comforting to her.',
    image: './images/solo-leveling/cha-haein.png',
    accentColor: '#f59e0b',
    familyTree: [
      {
        name: 'Song Chi-Yul',
        relation: 'Kendo Master',
        epithet: 'C-Rank Kumdo Swordsman',
        image: './images/solo-leveling/cha-haein.png',
        achievements: 'Taught Cha Hae-In classical sword techniques before her awakening; survived the Double Dungeon tragedy alongside Jin-Woo.',
        bestShotQuote: 'The blade does not seek blood; it seeks the truth within one’s heart.',
        bestShotScene: 'Holding the line with one arm against the Cartenon stone statues to let the youth escape.',
        legacy: 'Gave Cha Hae-In her flawless foundational sword form.'
      }
    ]
  }
];

export const SHADOW_ARMY: ShadowSoldier[] = [
  {
    id: 'bellion',
    name: 'Bellion',
    koreanName: '베르리온',
    grade: 'Grand Marshal',
    origin: 'Born from the World Tree / Original Servant of Ashborn',
    ability: 'Centipede Segmented Giant Blade & Planetary Shockwaves',
    quote: 'I have waited millennia for the true Shadow Monarch to awaken.',
    description: 'The supreme commander of the entire Shadow Army. Possesses two pairs of massive wings and wields a colossal segmented whip-sword. In a friendly duel, he withstood Beru’s full power without moving an inch.',
    image: './images/solo-leveling/igris.png',
    glowColor: 'rgba(147, 51, 234, 0.8)'
  },
  {
    id: 'beru',
    name: 'Beru (The Ant King)',
    koreanName: '베르',
    grade: 'General',
    origin: 'Jeju Island S-Rank Dungeon Ant Queen’s Offspring',
    ability: 'Gluttony (Stat & Skill Absorption), Healing Magic, Flight',
    quote: 'My Liege! All who dare stand in your path shall be slaughtered!',
    description: 'Extracted from the devastating Ant King who single-handedly slaughtered multiple Japanese S-Rank hunters. Fanatically loyal to Jin-Woo, weeping with emotion whenever his King praises him.',
    image: './images/solo-leveling/beru.png',
    glowColor: 'rgba(59, 130, 246, 0.8)'
  },
  {
    id: 'igris',
    name: 'Igris the Bloodred',
    koreanName: '핏빛의 이그리트',
    grade: 'Marshal',
    origin: 'Boss of the Job Change Quest (Throne Room of the Castle)',
    ability: 'Telekinetic Greatsword Mastery & Lightning Aura',
    quote: 'A knight kneels only to his sovereign king.',
    description: 'The first major knight extracted by Sung Jin-Woo. Possesses immaculate chivalric honor, bowing solemnly after each battle. Wields twin swords imbued with lightning and telekinesis.',
    image: './images/solo-leveling/igris.png',
    glowColor: 'rgba(239, 68, 68, 0.8)'
  }
];

// Helper to generate 20 story scenes for Solo Leveling Arcs
const generate20SoloLevelingScenes = (arcName: string, prefix: string, baseImg: string): StoryPlotScene[] => {
  const sceneTemplates = [
    { title: 'Dungeon Gate Opens', tag: 'Blue Gate Descent', lesson: 'Even in the deepest abyss, survival begins with a refusal to submit.' },
    { title: 'The Double Dungeon Rules', tag: 'Cartenon Temple', lesson: 'Praise the God, Bow to the God, Prove your Faith: heed the warning signs.' },
    { title: 'The Massacre of Comrades', tag: 'Despair and Betrayal', lesson: 'When fear takes hold, human weakness is laid bare.' },
    { title: 'Sacrifice on the Altar', tag: 'Sole Survivor', lesson: 'True power often demands that you willingly walk into the jaws of death.' },
    { title: 'Holographic Awakening', tag: 'System Activated', lesson: 'The moment you decide to endure is the moment you are chosen.' },
    { title: 'The Daily Quest Grind', tag: '100 Pushups & Running', lesson: 'Extraordinary strength is built on unyielding, monotonous discipline.' },
    { title: 'Subway Station Dungeon', tag: 'Blue Venom Fang', lesson: 'Conquer smaller beasts before you dare face the dragons.' },
    { title: 'Murder in the Dark', tag: 'Kill or Be Killed', lesson: 'Mercy toward ruthless enemies is cruelty toward yourself.' },
    { title: 'The Blood-Red Knight', tag: 'Igris Duel', lesson: 'Chivalry without strength is meaningless; earn your opponent’s respect.' },
    { title: 'The Command: ARISE', tag: 'Shadow Extraction', lesson: 'Defeat your obstacles and turn their remnant power into your stepping stones.' },
    { title: 'Red Gate Ice Desolation', tag: 'Snowfield Survival', lesson: 'Isolation reveals whether your resolve is genuine or dependent on others.' },
    { title: 'Baruka’s Frost Blades', tag: 'Ice Elf Chieftain', lesson: 'Speed and technique will always triumph over arrogant brute force.' },
    { title: 'Demon Castle Ascent', tag: 'Tower of 100 Floors', lesson: 'Keep climbing higher; the cure for your loved ones lies at the summit.' },
    { title: 'Slaying Monarch Baran', tag: 'Demon King Falls', lesson: 'No fortress is impregnable when your purpose is saving family.' },
    { title: 'The Jeju Island Nightmare', tag: 'Ant Swarm Invasions', lesson: 'When nations falter, only absolute supreme strength can turn the tide.' },
    { title: 'The Sovereign Arrives', tag: 'Shadow Army Deployed', lesson: 'A true king doesn’t merely fight; he alters the rules of reality.' },
    { title: 'Beru’s Total Kneeling', tag: 'Gluttony Extracted', lesson: 'Monsters recognize a monster far greater than themselves.' },
    { title: 'Architect’s True Intent', tag: 'Cartenon Rematch', lesson: 'Break free from the puppet master and rewrite the system yourself.' },
    { title: 'Ashborn’s Black Heart', tag: 'True Monarch Awakened', lesson: 'Embrace mortality fully to govern the eternity of death.' },
    { title: 'Antares Final Clash', tag: 'Dragon Monarch Slain', lesson: 'Stand as the shield of humanity, even if you must stand alone in the dark.' }
  ];

  return sceneTemplates.map((t, i) => ({
    id: `${prefix}-scene-${i + 1}`,
    sceneNumber: i + 1,
    title: `${t.title} — ${arcName}`,
    tagline: t.tag,
    storySummary: `In this pivotal sequence of ${arcName}, scene ${i + 1} showcases Sung Jin-Woo facing impossible odds. Through calculated strategy, unrelenting leveling, and the commanding power of the Shadow Army, he shatters the system limits.`,
    motivationLine: t.lesson,
    imageUrl: baseImg,
    badge: i < 5 ? 'SYSTEM' : i < 15 ? 'QUEST' : 'MONARCH',
    keyDialogue: `"[SYSTEM]: ${t.tag} — Player Sung Jin-Woo has exceeded all boundaries."`,
    speaker: 'Sung Jin-Woo'
  }));
};

export const SOLO_LEVELING_ARCS: SoloLevelingArc[] = [
  {
    id: 'cartenon',
    title: 'D-Rank Double Dungeon Arc',
    koreanTitle: '이중 던전 편',
    subtitle: 'The Courage of the Weak & Reawakening',
    chapters: 'Chapters 1–10',
    antagonists: ['God Statue of Cartenon Temple', 'Stone Sentinels'],
    synopsis: 'E-Rank hunter Sung Jin-Woo and his strike squad enter a dual-layer D-rank gate, only to discover a terrifying ancient temple of colossal stone gods that incinerates hunters in seconds.',
    keyClash: 'Sung Jin-Woo vs The Commandments of Cartenon',
    image: './images/solo-leveling/statue-god.png',
    storyPlotScenes: generate20SoloLevelingScenes('D-Rank Double Dungeon Arc', 'car', './images/solo-leveling/statue-god.png')
  },
  {
    id: 'job-change',
    title: 'Job Change Quest Arc',
    koreanTitle: '전직 퀘스트 편',
    subtitle: 'The Blood-Red Knight & Command: ARISE',
    chapters: 'Chapters 38–45',
    antagonists: ['Blood-Red Commander Igris', 'Infinite Marionette Knights'],
    synopsis: 'Jin-Woo enters the deepest castle dungeon to acquire a specialization class. After a vicious hand-to-hand brawl with Igris, he unlocks the hidden Necromancer class and the command "ARISE".',
    keyClash: 'Sung Jin-Woo vs Igris the Bloodred',
    image: './images/solo-leveling/igris.png',
    storyPlotScenes: generate20SoloLevelingScenes('Job Change Quest Arc', 'jc', './images/solo-leveling/igris.png')
  },
  {
    id: 'red-gate',
    title: 'Red Gate Arc',
    koreanTitle: '레드게이트 편',
    subtitle: 'Blizzard of the Frost Elves',
    chapters: 'Chapters 46–55',
    antagonists: ['Baruka (Frost Elf Leader)', 'Ice Bears'],
    synopsis: 'A routine White Tiger training raid turns into an S-Rank Red Gate trap. Jin-Woo takes charge, protecting hunter novices and slaying the chieftain Baruka with his growing shadow legion.',
    keyClash: 'Sung Jin-Woo vs Baruka',
    image: './images/solo-leveling/dungeon-gate.png',
    storyPlotScenes: generate20SoloLevelingScenes('Red Gate Arc', 'rg', './images/solo-leveling/dungeon-gate.png')
  },
  {
    id: 'demon-castle',
    title: 'Demon Castle Arc',
    koreanTitle: '악마성 편',
    subtitle: '100 Floors of Fire & Holy Water of Life',
    chapters: 'Chapters 80–89',
    antagonists: ['Demon King Baran', 'Wyvern Kaisel'],
    synopsis: 'To brew the Holy Water of Life and cure his mother’s eternal sleep disease, Jin-Woo conquers all 100 floors of the Demon Castle, taming the dragon Kaisel and executing Demon King Baran.',
    keyClash: 'Sung Jin-Woo & Igris vs Demon King Baran',
    image: './images/solo-leveling/jinwoo.png',
    storyPlotScenes: generate20SoloLevelingScenes('Demon Castle Arc', 'dc', './images/solo-leveling/jinwoo.png')
  },
  {
    id: 'jeju-island',
    title: 'Jeju Island S-Rank Raid Arc',
    koreanTitle: '제주도 레이드 편',
    subtitle: 'Fall of the Ant King & Birth of Beru',
    chapters: 'Chapters 90–105',
    antagonists: ['The Ant King (Beru)', 'Ant Queen'],
    synopsis: 'The joint Korea-Japan S-Rank expedition faces total annihilation when a winged mutant Ant King decapitates top hunters effortlessly. Jin-Woo shadow-exchanges to Jeju and executes the beast.',
    keyClash: 'Sung Jin-Woo vs Ant King (Total Annihilation)',
    image: './images/solo-leveling/beru.png',
    storyPlotScenes: generate20SoloLevelingScenes('Jeju Island Raid Arc', 'ji', './images/solo-leveling/beru.png')
  },
  {
    id: 'monarchs-war',
    title: 'Monarchs War & Final Climax',
    koreanTitle: '군주들의 전쟁 편',
    subtitle: 'Destruction Monarch Antares vs Shadow Monarch',
    chapters: 'Chapters 160–179',
    antagonists: ['Antares (Monarch of Destruction)', 'Rakan (Beast Monarch)', 'Sillad (Frost Monarch)'],
    synopsis: 'The primordial Monarchs invade Earth. Inheriting Ashborn’s complete divinity and the million-strong shadow host, Jin-Woo wages the ultimate war for humanity’s survival.',
    keyClash: 'Sung Jin-Woo vs Antares (Breath of Destruction vs Shadow Domain)',
    image: './images/solo-leveling/jinwoo.png',
    storyPlotScenes: generate20SoloLevelingScenes('Monarchs War Arc', 'mw', './images/solo-leveling/jinwoo.png')
  }
];

export const SYSTEM_SKILLS: SystemSkill[] = [
  {
    id: 'skill-arise',
    name: 'Shadow Extraction ("ARISE" / 일어나라)',
    type: 'Monarch Authority',
    manaCost: 'Variable based on Target Rank',
    description: 'Extracts the shadow from the corpse of a deceased target to enlist them permanently into the Shadow Army.',
    effect: 'Shadow soldiers retain combat memories, can regenerate infinitely as long as Jin-Woo has mana, and level up alongside their Monarch.'
  },
  {
    id: 'skill-ruler',
    name: 'Ruler’s Authority (지배자의 권능)',
    type: 'Monarch Authority',
    manaCost: '0 Mana (Pure Psychokinesis)',
    description: 'A primordial power granted by the Rulers allowing the user to manipulate objects and gravity purely through thought.',
    effect: 'Can crush colossal monsters, pull flying targets out of the sky, or wield invisible telekinetic blades.'
  },
  {
    id: 'skill-exchange',
    name: 'Shadow Exchange (그림자 교환)',
    type: 'Active',
    manaCost: '0 Mana (Cooldown: 2 hours)',
    description: 'Instantly teleports the user to the exact location of any shadow soldier deployed anywhere across the planet.',
    effect: 'Enables global instantaneous response, turning every shadow into an anchor point for the Monarch.'
  },
  {
    id: 'skill-domain',
    name: 'Domain of the Monarch (군주의 영역)',
    type: 'Monarch Authority',
    manaCost: 'Continuous Drain',
    description: 'Casts a pitch-black shadow over a massive radius, enhancing all shadow soldiers within by 50% combat stats.',
    effect: 'Turns the entire battlefield into the sovereign realm of death.'
  }
];

export const SOLO_LEVELING_QUOTES: SoloLevelingQuote[] = [
  {
    id: 'q-jinwoo',
    speaker: 'Sung Jin-Woo',
    title: 'The Shadow Monarch',
    quote: 'From now on... you are not my hunters. You are my prey. 일어나라 (ARISE)!',
    context: 'Declaring his sovereign command as shadows erupt from the fallen enemy ranks.',
    tagline: 'The Word that Conquers Death',
    image: './images/solo-leveling/jinwoo.png',
    accentColor: '#3b82f6'
  },
  {
    id: 'q-gogunhee',
    speaker: 'Go Gun-Hee',
    title: 'Chairman of Korean Hunters Association',
    quote: 'A hunter who uses his strength to protect others without demanding a price is not just strong... he is a true hero.',
    context: 'Speaking to Jin-Woo over tea in the Association headquarters.',
    tagline: 'The Golden Will of a Guardian',
    image: './images/solo-leveling/jinwoo.png',
    accentColor: '#eab308'
  },
  {
    id: 'q-ashborn',
    speaker: 'Ashborn',
    title: 'The Greatest Fragment of Brilliant Light',
    quote: 'You walked through the valley of death with unbroken courage. I grant you my heart, my army, and my throne. Rule as you see fit.',
    context: 'Handing the eternal Black Heart of the Monarch over to Jin-Woo.',
    tagline: 'The Coronation of the Dead',
    image: './images/solo-leveling/igris.png',
    accentColor: '#8b5cf6'
  }
];

export const MONARCH_WEAPONS: MonarchWeapon[] = [
  {
    id: 'kamish-wrath',
    name: 'Kamish’s Wrath (Twin Dragon Fangs)',
    bearer: 'Sung Jin-Woo',
    rank: 'Mythic',
    attackPower: '+1,500 Physical Attack',
    origin: 'Crafted from the sharpest fang of the ancient dragon Kamish by Thomas Andre’s master craftsman.',
    specialTrait: 'Inflicts 100% piercing damage, easily slicing through dragon scales and Monarch armor.',
    currentStatus: 'Wielded into the final war against Destruction Monarch Antares.',
    image: './images/solo-leveling/jinwoo.png'
  },
  {
    id: 'demon-king-daggers',
    name: 'Demon King’s Daggers',
    bearer: 'Sung Jin-Woo',
    rank: 'Legendary',
    attackPower: '+220 Attack Power',
    origin: 'Dropped by Demon King Baran at the 100th floor of the Demon Castle.',
    specialTrait: 'Channels "Storm of White Flames", releasing chain-lightning with every swing.',
    currentStatus: 'Used through the Jeju Island raid before being replaced by Kamish’s Wrath.',
    image: './images/solo-leveling/igris.png'
  },
  {
    id: 'knight-killer',
    name: 'Knight Killer Dagger',
    bearer: 'Sung Jin-Woo',
    rank: 'Unique',
    attackPower: '+75 Attack Power',
    origin: 'Purchased from the System Store prior to the Job Change Quest.',
    specialTrait: '+25% additional damage against heavy-armored opponents.',
    currentStatus: 'Shattered during the duel against Blood-Red Commander Igris.',
    image: './images/solo-leveling/dungeon-gate.png'
  }
];

export const SOLO_LEVELING_OATH = {
  title: 'THE MONARCH’S ETERNAL DECREE',
  koreanTitle: '군주의 영원한 맹세',
  verse: `I was once the weakest hunter on earth, discarded and left to die in the dark.
I asked for nothing, yet death gave me everything.
I do not fight for wealth, nor do I bow before the gods or monsters of the gates.
If the heavens send calamity upon this world,
I shall raise my army of millions from the shadows and slay the gods themselves.
All who threaten my family and my home shall hear one single word:
일어나라 — ARISE!`,
  creed: 'THE WEAKEST HAS BECOME ABSOLUTE',
  masterMessage: '— Sung Jin-Woo, The Shadow Monarch'
};
