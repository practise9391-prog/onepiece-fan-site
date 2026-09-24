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

export interface HunterDossier {
  id: string;
  name: string;
  title: string;
  rank: 'National Level (Special S-Rank)' | 'S-Rank' | 'Beyond Measurement';
  guild: string;
  classType: string;
  signatureAbility: string;
  description: string;
  image: string;
  accentColor: string;
}

export interface GateDungeon {
  id: string;
  name: string;
  rank: string;
  type: string;
  boss: string;
  significance: string;
  description: string;
  image: string;
}

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
  },
  {
    id: 'iron',
    name: 'Iron',
    koreanName: '아이언',
    grade: 'Elite Knight',
    origin: 'Extracted from A-Rank Hunter Kim Chul in the Red Gate',
    ability: 'Taunt Roar & Giant Tower Shield Defense',
    quote: '*Pounds chest with massive warhammer and roars*',
    description: 'A towering armored giant who draws all enemy aggro with deafening battle roars and pulverizes frontlines with giant shields.',
    image: './images/solo-leveling/jinwoo.png',
    glowColor: 'rgba(16, 185, 129, 0.8)'
  }
];

export const TOP_HUNTERS: HunterDossier[] = [
  {
    id: 'jinwoo',
    name: 'Sung Jin-Woo',
    title: 'The Shadow Monarch (그림자 군주)',
    rank: 'Beyond Measurement',
    guild: 'Ahjin Guild (Master)',
    classType: 'Mage / Necromancer Assassin',
    signatureAbility: 'Shadow Extraction ("ARISE"), Ruler’s Authority, Shadow Exchange',
    description: 'Former "Weakest Hunter of All Mankind" (E-Rank). Chosen as the sole Player by the Architect, he inherited the primordial power of Ashborn, the Monarch of Shadows.',
    image: './images/solo-leveling/jinwoo.png',
    accentColor: '#3b82f6'
  },
  {
    id: 'cha-haein',
    name: 'Cha Hae-In',
    title: 'Sword Dancer (무희)',
    rank: 'S-Rank',
    guild: 'Hunters Guild (Vice-Master)',
    classType: 'Fighter / Master Swordsman',
    signatureAbility: 'Sword of Light & Quicken Senses',
    description: 'The 9th ranked S-Rank hunter in Korea and its sole female S-Rank. Sensitive to the unpleasant mana smell of normal hunters, Jin-Woo is the only hunter who smells pleasant to her.',
    image: './images/solo-leveling/cha-haein.png',
    accentColor: '#f59e0b'
  },
  {
    id: 'thomas-andre',
    name: 'Thomas Andre',
    title: 'Goliath / National Level Hunter',
    rank: 'National Level (Special S-Rank)',
    guild: 'Scavenger Guild (USA)',
    classType: 'Tanker / Vessel of the Rulers',
    signatureAbility: 'Reinforcement & Black Hole Gravitational Pull',
    description: 'One of the five hunters who cleared the First Dragon Kamish raid. Possesses monstrous physical strength directly channelled from the Rulers of Light.',
    image: './images/solo-leveling/dungeon-gate.png',
    accentColor: '#eab308'
  }
];

export const GATES_AND_DUNGEONS: GateDungeon[] = [
  {
    id: 'double-dungeon',
    name: 'The Cartenon Temple (Double Dungeon)',
    rank: 'D-Rank Gate (Hidden SSS-Tier Secret)',
    type: 'The Architect’s Trial Sanctuary',
    boss: 'The Colossal God Statue with Crimson Smiling Eyes',
    significance: 'The birthplace of the Shadow Monarch: where Jin-Woo was sacrificed and chosen as the Player.',
    description: 'Governed by three commandments: "Worship the God, Praise the God, Prove Your Faith." Anyone who moves without understanding the rules is vaporized by laser eye beams.',
    image: './images/solo-leveling/statue-god.png'
  },
  {
    id: 'jeju-island',
    name: 'Jeju Island S-Rank Gate',
    rank: 'S-Rank Calamity Gate',
    type: 'Giant Ant Colony Infestation',
    boss: 'The Ant King (Beru)',
    significance: 'The national crisis that wiped out Korea’s 3rd S-Rank raid team and showed the world Jin-Woo’s supreme might.',
    description: 'Four years after the island was lost to mutant evolved ants, a joint raid between Korea and Japan is annihilated until Sung Jin-Woo arrives via Shadow Exchange to exterminate the hive.',
    image: './images/solo-leveling/beru.png'
  },
  {
    id: 'red-gate',
    name: 'The Red Gate: Ice World',
    rank: 'B-Rank Red Gate (Dimensional Trap)',
    type: 'Isolated Sub-Zero Survival Trial',
    boss: 'Baruka, King of the Ice Elves',
    significance: 'Where Jin-Woo protected high school students and extracted the shadow Iron.',
    description: 'A cursed dimensional anomaly that locks hunters inside until the boss is killed. The sub-zero temperature freezes normal human blood within hours.',
    image: './images/solo-leveling/dungeon-gate.png'
  }
];
