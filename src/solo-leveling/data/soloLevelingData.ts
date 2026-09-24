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
  howObtained: string;
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
  season: 'Season 1: The Foundations' | 'Season 2: Arise from the Shadow' | 'Season 3: The Monarchs & Cosmic War';
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

export interface MonarchLore {
  id: string;
  name: string;
  title: string;
  domain: string;
  vessel: string;
  description: string;
  image: string;
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

// 👑 TOP HUNTERS & MONARCH INHERITORS
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
    id: 'thomas-andre',
    name: 'Thomas Andre',
    title: 'Goliath / National Level Hunter',
    koreanName: '토마스 안드레',
    rank: 'National Level (Special S-Rank)',
    guild: 'Scavenger Guild (Master)',
    classType: 'Tanker / Ruler’s Vessel',
    signatureAbility: 'Capture, Reinforcement, Demolition',
    description: 'America’s strongest National Level Hunter and vessel of the Rulers. Surviving the Kamish dragon raid, he possesses diamond-hard skin and shockwaves that level cities. After Jin-Woo spared him, he gifted him Kamish’s Wrath.',
    image: './images/solo-leveling/jinwoo.png',
    accentColor: '#f59e0b',
    familyTree: [
      {
        name: 'Kamish the Dragon',
        relation: 'Great Calamity / Source of Weapons',
        epithet: 'Humanity’s Greatest Nightmare',
        image: './images/solo-leveling/dungeon-gate.png',
        achievements: 'Wiped out hundreds of elite hunters; required all five National Level Hunters to defeat.',
        bestShotQuote: 'My fangs shall pierce even the gods.',
        bestShotScene: 'His remains gifted to Jin-Woo as the twin daggers Kamish’s Wrath.',
        legacy: 'Provided the strongest weapon in the human world.'
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
    accentColor: '#ec4899',
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

// ⚔️ SHADOW ARMY (HOW JIN-WOO EXTRACTED THEM)
export const SHADOW_ARMY: ShadowSoldier[] = [
  {
    id: 'bellion',
    name: 'Bellion',
    koreanName: '베르리온',
    grade: 'Grand Marshal',
    origin: 'Born from the World Tree / Original Servant of Ashborn',
    howObtained: 'Inherited directly from Ashborn when the former Shadow Monarch surrendered his full authority and the Black Heart to Jin-Woo.',
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
    howObtained: 'Extracted from the decapitated corpse of the mutant Ant King on Jeju Island after Jin-Woo pummeled the beast with bare fists.',
    ability: 'Gluttony (Stat & Skill Absorption), Healing Magic, Supersonic Flight',
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
    howObtained: 'Extracted after an excruciating hand-to-hand brawl in the Job Change Castle on Jin-Woo’s third and final extraction attempt: "ARISE".',
    ability: 'Telekinetic Greatsword Mastery & Lightning Aura',
    quote: 'A knight kneels only to his sovereign king.',
    description: 'The first major knight extracted by Sung Jin-Woo. Possesses immaculate chivalric honor, bowing solemnly after each battle. Wields twin swords imbued with lightning and telekinesis.',
    image: './images/solo-leveling/igris.png',
    glowColor: 'rgba(239, 68, 68, 0.8)'
  },
  {
    id: 'iron',
    name: 'Iron (Kim Chul)',
    koreanName: '아이언',
    grade: 'Elite Knight',
    origin: 'A-Rank Hunter Kim Chul in the Red Gate Dungeon',
    howObtained: 'Extracted from Kim Chul after Igris cleaved him from behind to stop him from assassinating Jin-Woo during the snowy Red Gate trial.',
    ability: 'Taunt Roar, Superhuman Defense, Giant Warhammer Pulverization',
    quote: '*Pounds chest with massive warhammer and roars at the sky*',
    description: 'A towering armored giant who draws all enemy aggro with deafening battle roars and pulverizes frontlines with giant shields.',
    image: './images/solo-leveling/jinwoo.png',
    glowColor: 'rgba(16, 185, 129, 0.8)'
  }
];

// Helper to generate 20 story scenes per arc
const generate20Scenes = (arcName: string, prefix: string, baseImg: string): StoryPlotScene[] => {
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

// 🌌 ALL STORY SAGAS & ARCS IN CHRONOLOGICAL ORDER
export const SOLO_LEVELING_ARCS: SoloLevelingArc[] = [
  // SEASON 1: THE FOUNDATIONS
  {
    id: 'double-dungeon',
    season: 'Season 1: The Foundations',
    title: 'D-Rank Dungeon Arc (Double Dungeon)',
    koreanTitle: '이중 던전 편',
    subtitle: 'The Ultimate Catalyst & Courage of the Weak',
    chapters: 'Chapters 1–10',
    antagonists: ['God Statue of Cartenon Temple', 'Stone Sentinels'],
    synopsis: 'The ultimate catalyst. E-Rank hunter Sung Jin-Woo undergoes his terrifying near-death experience, gets chosen by the "System", and gains the unique ability to level up.',
    keyClash: 'Sung Jin-Woo vs The Commandments of Cartenon',
    image: './images/solo-leveling/statue-god.png',
    storyPlotScenes: generate20Scenes('D-Rank Dungeon Arc', 'dd', './images/solo-leveling/statue-god.png')
  },
  {
    id: 'subway-instance',
    season: 'Season 1: The Foundations',
    title: 'Instance Dungeons & Daily Quest Arc',
    koreanTitle: '일일 퀘스트 & 인스턴스 던전 편',
    subtitle: '100 Pushups & Subway Station Kasaka',
    chapters: 'Chapters 11–37',
    antagonists: ['Blue Poison-Fang Kasaka', 'D-Rank Giant Spiders'],
    synopsis: 'Surviving the brutal 100 pushups daily quest, Jin-Woo enters the subway instance dungeon. Testing his awakening against blue snakes and giant spiders, he forges Kasaka’s venom dagger.',
    keyClash: 'Sung Jin-Woo vs Blue Poison-Fang Kasaka',
    image: './images/solo-leveling/dungeon-gate.png',
    storyPlotScenes: generate20Scenes('Instance Dungeons Arc', 'id', './images/solo-leveling/dungeon-gate.png')
  },
  {
    id: 'job-change',
    season: 'Season 1: The Foundations',
    title: 'Job Change Arc (The Igris Fight)',
    koreanTitle: '전직 퀘스트 편',
    subtitle: 'The Blood-Red Knight & First Shadow Army',
    chapters: 'Chapters 38–45',
    antagonists: ['Blood-Red Commander Igris', 'Infinite Marionette Knights'],
    synopsis: 'The turning point for his combat class. Jin-Woo fights the legendary blood-red commander knight Igris and officially unlocks his Necromancer powers, creating his signature army of shadow soldiers with the command "ARISE".',
    keyClash: 'Sung Jin-Woo vs Igris the Bloodred',
    image: './images/solo-leveling/igris.png',
    storyPlotScenes: generate20Scenes('Job Change Arc', 'jc', './images/solo-leveling/igris.png')
  },

  // SEASON 2: ARISE FROM THE SHADOW
  {
    id: 'red-gate',
    season: 'Season 2: Arise from the Shadow',
    title: 'Red Gate Arc',
    koreanTitle: '레드게이트 편',
    subtitle: 'Blizzard of the Frost Elves & Baruka',
    chapters: 'Chapters 46–55',
    antagonists: ['Baruka (Frost Elf Chieftain)', 'Ice Bears'],
    synopsis: 'The first time Jin-Woo goes all-out in front of other human witnesses. Trapped in an icy, isolated A-Rank dungeon, he completely dismantles a horde of Ice Elves and asserts his dominance.',
    keyClash: 'Sung Jin-Woo vs Baruka',
    image: './images/solo-leveling/dungeon-gate.png',
    storyPlotScenes: generate20Scenes('Red Gate Arc', 'rg', './images/solo-leveling/dungeon-gate.png')
  },
  {
    id: 'demon-castle',
    season: 'Season 2: Arise from the Shadow',
    title: 'Demon Castle Arc',
    koreanTitle: '악마성 편',
    subtitle: '100 Floors of Fire & Holy Water of Life',
    chapters: 'Chapters 80–89',
    antagonists: ['Demon King Baran', 'Wyvern Kaisel'],
    synopsis: 'To brew the Holy Water of Life and cure his mother’s eternal sleep disease, Jin-Woo conquers all 100 floors of the Demon Castle, taming the dragon Kaisel and executing Demon King Baran.',
    keyClash: 'Sung Jin-Woo & Igris vs Demon King Baran',
    image: './images/solo-leveling/jinwoo.png',
    storyPlotScenes: generate20Scenes('Demon Castle Arc', 'dc', './images/solo-leveling/jinwoo.png')
  },
  {
    id: 'jeju-island',
    season: 'Season 2: Arise from the Shadow',
    title: 'Jeju Island Arc (The Ant Raid)',
    koreanTitle: '제주도 레이드 편',
    subtitle: 'Fall of the Ant King & Birth of Beru',
    chapters: 'Chapters 90–105',
    antagonists: ['The Ant King (Beru)', 'Ant Queen'],
    synopsis: 'The absolute peak of the first two seasons. Giant mutated ants slaughter humanity\'s strongest S-Rank hunters on a desolate island. Jin-Woo arrives to turn the tide in the anime\'s biggest, most brutal battle yet, cementing his place as an apex global hunter.',
    keyClash: 'Sung Jin-Woo vs Ant King (Total Annihilation)',
    image: './images/solo-leveling/beru.png',
    storyPlotScenes: generate20Scenes('Jeju Island Arc', 'ji', './images/solo-leveling/beru.png')
  },

  // SEASON 3: THE MONARCHS & COSMIC WAR
  {
    id: 'monarchs-war',
    season: 'Season 3: The Monarchs & Cosmic War',
    title: 'Monarchs War & Ahjin Guild Arc',
    koreanTitle: '군주들의 전쟁 편',
    subtitle: 'Invasion of the Primordial Monarchs',
    chapters: 'Chapters 160–175',
    antagonists: ['Rakan (Beast Monarch)', 'Sillad (Frost Monarch)', 'Antares (Destruction Monarch)'],
    synopsis: 'The primordial Monarchs invade Earth. Ashborn passes the infinite Black Heart of the Monarch to Jin-Woo, unlocking true omnipotent control over life and death.',
    keyClash: 'Sung Jin-Woo vs Beast & Frost Monarchs',
    image: './images/solo-leveling/jinwoo.png',
    storyPlotScenes: generate20Scenes('Monarchs War Arc', 'mw', './images/solo-leveling/jinwoo.png')
  },
  {
    id: 'final-battle',
    season: 'Season 3: The Monarchs & Cosmic War',
    title: 'Final Battle & Cup of Reincarnation Arc',
    koreanTitle: '최종 결전 & 윤회의 잔 편',
    subtitle: 'Rewriting History & Peaceful Modern World',
    chapters: 'Chapters 176–179 + Epilogue',
    antagonists: ['Antares (King of Dragons)'],
    synopsis: 'Jin-Woo clashes with Destruction Monarch Antares on the shores of Japan. Utilizing the Cup of Reincarnation, Jin-Woo enters the dimensional rift alone for 27 years to slay all Monarchs before returning to a peaceful modern world.',
    keyClash: 'Sung Jin-Woo vs Antares (Breath of Destruction vs Shadow Realm)',
    image: './images/solo-leveling/jinwoo.png',
    storyPlotScenes: generate20Scenes('Final Battle Arc', 'fb', './images/solo-leveling/jinwoo.png')
  },
  {
    id: 'ragnarok',
    season: 'Season 3: The Monarchs & Cosmic War',
    title: 'Solo Leveling: Ragnarok (Next Generation)',
    koreanTitle: '나 혼자만 레벨업: 라그나로크',
    subtitle: 'Sung Su-Ho Awakens as the Shadow Prince',
    chapters: 'Sequel Novel & Webtoon',
    antagonists: ['Outer Gods / Itarim Invaders'],
    synopsis: 'While Jin-Woo battles celestial Outer Gods at the edge of the universe, his son Sung Su-Ho awakens his dormant Shadow Monarch bloodline to defend Earth from new cosmic rifts.',
    keyClash: 'Sung Su-Ho vs Itarim Apostle',
    image: './images/solo-leveling/igris.png',
    storyPlotScenes: generate20Scenes('Ragnarok Arc', 'rn', './images/solo-leveling/igris.png')
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

export const MONARCHS_LORE: MonarchLore[] = [
  {
    id: 'ashborn',
    name: 'Ashborn',
    title: 'The Monarch of Shadows (그림자 군주)',
    domain: 'Death, Shadows, Rebirth',
    vessel: 'Sung Jin-Woo',
    description: 'Originally the Greatest Fragment of Brilliant Light. After being betrayed by other Rulers, he discovered the power of death and became the Shadow Monarch.',
    image: './images/solo-leveling/igris.png'
  },
  {
    id: 'antares',
    name: 'Antares',
    title: 'The Monarch of Destruction (파멸의 군주)',
    domain: 'Fire, Dragons, Annihilation',
    vessel: 'None (Manifested True Dragon Form)',
    description: 'The King of Berserk Dragons and the strongest of all Monarchs. Possesses the Breath of Destruction that erases matter from existence.',
    image: './images/solo-leveling/jinwoo.png'
  },
  {
    id: 'rakan',
    name: 'Rakan',
    title: 'The Beast Monarch (백수의 군주)',
    domain: 'Beasts, Fangs, Bloodlust',
    vessel: 'None',
    description: 'The King of Beasts. Relentless, feral, and coward when facing overwhelming power, he betrayed Jin-Woo before being hunted down.',
    image: './images/solo-leveling/dungeon-gate.png'
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
