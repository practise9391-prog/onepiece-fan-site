export interface ShinobiLegend {
  id: string;
  name: string;
  japaneseName: string;
  title: string;
  village: string;
  clan: string;
  ninjaRank: string;
  natureTypes: string[];
  kekkeiGenkai?: string;
  quote: string;
  description: string;
  signatureJutsu: string[];
  image: string;
  accentColor: string;
}

export interface HokageRecord {
  order: string;
  name: string;
  title: string;
  reignFeat: string;
  signatureTechnique: string;
  description: string;
  image: string;
}

export interface AkatsukiMember {
  id: string;
  name: string;
  ring: string;
  kanji: string;
  finger: string;
  partner: string;
  philosophy: string;
  signatureJutsu: string;
  image: string;
}

export interface NarutoArc {
  id: string;
  title: string;
  subtitle: string;
  episodes: string;
  synopsis: string;
  keyClash: string;
  image: string;
}

export const SHINOBI_LEGENDS: ShinobiLegend[] = [
  {
    id: 'naruto',
    name: 'Naruto Uzumaki',
    japaneseName: 'うずまき ナルト',
    title: 'Seventh Hokage / Hero of the Leaf',
    village: 'Hidden Leaf Village (Konohagakure)',
    clan: 'Uzumaki Clan',
    ninjaRank: 'Hokage (Former Genin)',
    natureTypes: ['Wind (Affinity)', 'Fire', 'Water', 'Lightning', 'Earth', 'Yin-Yang'],
    quote: 'I’m not gonna run away, and I never go back on my word! That is my ninja way!',
    description: 'The child of prophecy who bore the Nine-Tails beast Kurama. Through sheer grit, compassion, and indomitable will, he befriended his inner demon, saved the shinobi world from the Infinite Tsukuyomi, and achieved his lifelong dream of becoming Hokage.',
    signatureJutsu: ['Rasengan', 'Wind Style: Rasenshuriken', 'Sage Mode: Frog Kumite', 'Kurama Chakra Avatar Mode', 'Six Paths Senjutsu'],
    image: './images/naruto/naruto-sage.png',
    accentColor: '#ea580c'
  },
  {
    id: 'sasuke',
    name: 'Sasuke Uchiha',
    japaneseName: 'うちは サスケ',
    title: 'The Supporting Kage / Lone Shadow',
    village: 'Hidden Leaf Village (Konohagakure)',
    clan: 'Uchiha Clan',
    ninjaRank: 'Rogue Shinobi / Shadow Hokage',
    natureTypes: ['Lightning (Affinity)', 'Fire', 'Wind', 'Earth', 'Water', 'Yin'],
    kekkeiGenkai: 'Eternal Mangekyo Sharingan & Six Tomoe Rinnegan',
    quote: 'I have long since closed my eyes... My only goal is in the darkness. But now, I will protect the world from the shadows.',
    description: 'Sole survivor of the Uchiha clan massacre. Mastered the Curse Mark and Orochimaru’s arts before awakening the Eternal Mangekyo Sharingan and Six Paths Rinnegan. Stands as Naruto’s sole equal.',
    signatureJutsu: ['Chidori', 'Kirin (Natural Thunder)', 'Amaterasu (Blaze Style)', 'Complete Body Susanoo', 'Amenotejikara (Space-Time Swap)'],
    image: './images/naruto/sasuke-rinnegan.png',
    accentColor: '#8b5cf6'
  },
  {
    id: 'kakashi',
    name: 'Kakashi Hatake',
    japaneseName: 'はたけ カカシ',
    title: 'Sixth Hokage / Copy Ninja Kakashi',
    village: 'Hidden Leaf Village (Konohagakure)',
    clan: 'Hatake Clan',
    ninjaRank: 'Hokage (Former Anbu Captain)',
    natureTypes: ['Lightning', 'Earth', 'Water', 'Fire', 'Wind', 'Yin-Yang'],
    kekkeiGenkai: 'Obito’s Sharingan (Former Double Kamui)',
    quote: 'In the ninja world, those who break the rules are scum, that’s true. But those who abandon their friends are worse than scum!',
    description: 'Prodigy son of the White Fang. Renowned across all five great nations for copying over 1,000 jutsu. Guided Team 7 and served as Sixth Hokage following the Fourth Great Ninja War.',
    signatureJutsu: ['Lightning Blade (Raikiri)', 'Kamui (Space-Time Dimension)', 'Double Kamui Perfect Susanoo', 'Purple Electricity'],
    image: './images/naruto/kakashi.png',
    accentColor: '#0ea5e9'
  },
  {
    id: 'itachi',
    name: 'Itachi Uchiha',
    japaneseName: 'うちは イタチ',
    title: 'Hero of the Shadows / Martyr of the Leaf',
    village: 'Hidden Leaf Village (Akatsuki Infiltrator)',
    clan: 'Uchiha Clan',
    ninjaRank: 'Anbu Captain / S-Rank Rogue',
    natureTypes: ['Fire', 'Water', 'Wind', 'Yin-Yang'],
    kekkeiGenkai: 'Mangekyo Sharingan',
    quote: 'Those who forgive themselves, and are able to accept their true nature... They are the strong ones!',
    description: 'A pacifist genius who chose to bear the hatred of the entire world and eliminate his own clan to prevent a world-ending civil war, protecting his younger brother Sasuke above all else.',
    signatureJutsu: ['Tsukuyomi (Infinite Mind Illusion)', 'Amaterasu (Black Flame)', 'Totsuka Blade & Yata Mirror Susanoo', 'Izanami'],
    image: './images/naruto/itachi.png',
    accentColor: '#dc2626'
  },
  {
    id: 'minato',
    name: 'Minato Namikaze',
    japaneseName: '波風 ミナト',
    title: 'Fourth Hokage / The Yellow Flash of the Leaf',
    village: 'Hidden Leaf Village (Konohagakure)',
    clan: 'Namikaze Clan',
    ninjaRank: 'Fourth Hokage',
    natureTypes: ['Fire', 'Wind', 'Lightning', 'Yin-Yang'],
    quote: 'Because I am the Fourth Hokage, it is my duty to protect the village and our child!',
    description: 'The fastest shinobi in human history. Flea on Sight orders were issued to enemy armies during the Third Shinobi War. Sacrificed his soul with the Reaper Death Seal to seal the Nine-Tails inside infant Naruto.',
    signatureJutsu: ['Flying Thunder God (Hiraishin)', 'Rasengan (Creator)', 'Reaper Death Seal (Shiki Fujin)', 'Nine-Tails Yin Chakra Mode'],
    image: './images/naruto/minato.png',
    accentColor: '#facc15'
  }
];

export const HOKAGE_MONUMENT: HokageRecord[] = [
  {
    order: 'First Hokage (初代)',
    name: 'Hashirama Senju',
    title: 'God of Shinobi (忍の神)',
    reignFeat: 'Founded the Hidden Leaf Village with Madara Uchiha and pacified the Warring States Era',
    signatureTechnique: 'Wood Style: True Several Thousand Hands (Shin Suusenju)',
    description: 'Reincarnation of Asura Otsutsuki. Possessed unmatched life force and Senjutsu, capturing all nine Tailed Beasts alone to distribute them for global peace balance.',
    image: './images/naruto/leaf-village.png'
  },
  {
    order: 'Second Hokage (二代目)',
    name: 'Tobirama Senju',
    title: 'Architect of Shinobi Infrastructure',
    reignFeat: 'Created the Academy, Anbu, Chunin Exams, and Police Force',
    signatureTechnique: 'Flying Raijin, Shadow Clones, and Reanimation Jutsu (Edo Tensei)',
    description: 'A pragmatic genius and supreme Water Style user who pioneered the foundational forbidden jutsu utilized throughout shinobi history.',
    image: './images/naruto/leaf-village.png'
  },
  {
    order: 'Fourth Hokage (四代目)',
    name: 'Minato Namikaze',
    title: 'The Yellow Flash of the Leaf (木ノ葉の黄色い閃光)',
    reignFeat: 'Ended the Third Shinobi War and saved Konoha from the Nine-Tails cataclysm',
    signatureTechnique: 'Flying Thunder God Level 2 & Spiralling Sphere (Rasengan)',
    description: 'Revered as the fastest ninja in existence; sealed half of Kurama into himself and half into his newborn son Naruto.',
    image: './images/naruto/minato.png'
  },
  {
    order: 'Seventh Hokage (七代目)',
    name: 'Naruto Uzumaki',
    title: 'Hero of the Hidden Leaf & Child of Prophecy',
    reignFeat: 'Defeated Kaguya Otsutsuki, ended the cycle of hatred, and ushered in worldwide shinobi unity',
    signatureTechnique: 'Super Mini-Tailed Beast Rasenshuriken & Six Paths Senjutsu',
    description: 'The seventh master of Konoha whose stone face smiles upon the village he saved from destruction.',
    image: './images/naruto/naruto-sage.png'
  }
];

export const AKATSUKI_MEMBERS: AkatsukiMember[] = [
  {
    id: 'pain',
    name: 'Pain (Deva Path / Nagato)',
    ring: 'Zero (零 - Rei)',
    kanji: '零',
    finger: 'Right Thumb',
    partner: 'Konan',
    philosophy: 'To know peace, the world must feel true pain.',
    signatureJutsu: 'Almighty Push (Shinra Tensei) & Planetary Devastation (Chibaku Tensei)',
    image: './images/naruto/pain.png'
  },
  {
    id: 'itachi-akatsuki',
    name: 'Itachi Uchiha',
    ring: 'Vermilion (朱 - Shu)',
    kanji: '朱',
    finger: 'Right Ring',
    partner: 'Kisame Hoshigaki',
    philosophy: 'Sacrificing identity to ensure peace from within the shadows.',
    signatureJutsu: 'Tsukuyomi & Ephemeral Crow Genjutsu',
    image: './images/naruto/itachi.png'
  },
  {
    id: 'madara',
    name: 'Madara Uchiha',
    ring: 'True Founder / Ghost of the Uchiha',
    kanji: '滅',
    finger: 'Supreme Leader',
    partner: 'Obito Uchiha',
    philosophy: 'Wake up to reality! Wherever there is light, there are always shadows.',
    signatureJutsu: 'Tengai Shinsei (Two Meteors Falling) & Perfect Susanoo',
    image: './images/naruto/madara.png'
  }
];

export const NARUTO_ARCS: NarutoArc[] = [
  {
    id: 'pain-assault',
    title: 'Pain’s Assault on Konoha',
    subtitle: 'THE ALMIGHTY PUSH & SAGE OF THE LEAF',
    episodes: 'Shippuden Ep 152–175',
    synopsis: 'Following Jiraiya’s tragic death, Pain destroys Konoha with Shinra Tensei. Naruto arrives in Sage Mode atop giant toads to confront Nagato and break the cycle of vengeance.',
    keyClash: 'Sage Naruto Rasengan vs. Deva Path Almighty Push',
    image: './images/naruto/pain.png'
  },
  {
    id: 'fourth-ninja-war',
    title: 'Fourth Great Ninja War',
    subtitle: 'THE CLASH OF ALL NATIONS AGAINST MADARA & KAGUYA',
    episodes: 'Shippuden Ep 261–479',
    synopsis: 'The Five Great Nations unite into the Shinobi Alliance to combat Obito, Madara, and the Ten-Tails. Naruto and Sasuke receive Six Paths chakra to seal Kaguya Otsutsuki.',
    keyClash: 'Naruto & Sasuke Six Paths Chibaku Tensei vs. Kaguya',
    image: './images/naruto/madara.png'
  },
  {
    id: 'final-valley',
    title: 'The Final Valley: Naruto vs. Sasuke',
    subtitle: 'THE RESOLUTION OF ASHURA & INDRA’S DESTINY',
    episodes: 'Shippuden Ep 475–479',
    synopsis: 'At the Valley of the End where their journey began, Naruto and Sasuke clash with everything they possess. Their final Rasengan and Chidori shatter their arms, reuniting their brotherhood.',
    keyClash: 'Six Paths Sage Kurama Rasenshuriken vs. Indra’s Arrow',
    image: './images/naruto/sasuke-rinnegan.png'
  }
];

