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
  familyTree: FamilyMentorMember[];
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
  bounty: string;
  bingoThreatClass: 'S-Rank' | 'SS-Rank' | 'Calamity';
  philosophy: string;
  signatureJutsu: string;
  image: string;
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

export interface NarutoArc {
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

export interface JutsuDojutsu {
  id: string;
  name: string;
  japaneseName: string;
  category: 'Dojutsu' | 'Ninjutsu' | 'Senjutsu' | 'Kekkei Genkai';
  rank: 'Kekkei Mora' | 'S-Rank' | 'Secret Hiden';
  user: string;
  description: string;
  effect: string;
}

export interface NarutoQuote {
  id: string;
  speaker: string;
  title: string;
  quote: string;
  context: string;
  tagline: string;
  image: string;
  accentColor: string;
}

export interface ShinobiWeapon {
  id: string;
  name: string;
  bearer: string;
  classification: 'Seven Swords of the Mist' | 'Legendary Artifact' | 'Spacetime Tool';
  origin: string;
  specialTrait: string;
  currentStatus: string;
  image: string;
}

export const SHINOBI_LEGENDS: ShinobiLegend[] = [
  {
    id: 'naruto',
    name: 'Naruto Uzumaki',
    japaneseName: 'うずまき ナルト',
    title: 'Seventh Hokage / Hero of the Hidden Leaf',
    village: 'Hidden Leaf Village (Konohagakure)',
    clan: 'Uzumaki Clan',
    ninjaRank: 'Hokage (Former Genin)',
    natureTypes: ['Wind (Affinity)', 'Fire', 'Water', 'Lightning', 'Earth', 'Yin-Yang'],
    quote: 'I’m not gonna run away, and I never go back on my word! That is my ninja way!',
    description: 'The child of prophecy who bore the Nine-Tails beast Kurama. Through sheer grit, compassion, and indomitable will, he befriended his inner demon, saved the shinobi world from the Infinite Tsukuyomi, and achieved his lifelong dream of becoming Hokage.',
    signatureJutsu: ['Rasengan', 'Wind Style: Rasenshuriken', 'Sage Mode: Frog Kumite', 'Kurama Chakra Avatar Mode', 'Six Paths Senjutsu'],
    image: './images/naruto/naruto-sage.png',
    accentColor: '#ea580c',
    familyTree: [
      {
        name: 'Minato Namikaze',
        relation: 'Father',
        epithet: 'The Yellow Flash of the Leaf (Fourth Hokage)',
        image: './images/naruto/minato.png',
        achievements: 'Created the Rasengan; wiped out 1,000 Iwagakure shinobi in seconds; sealed Kurama into infant Naruto to save the Leaf Village.',
        bestShotQuote: 'Naruto, trust in yourself. The reason I sealed half of the Nine-Tails in you is because you are my son!',
        bestShotScene: 'Appearing inside Naruto’s subconscious during the Pain battle, restoring the Eight Trigrams Seal with a proud fatherly smile.',
        legacy: 'Passed down the Flying Thunder God legacy and the incomplete Rasengan for Naruto to complete.'
      },
      {
        name: 'Kushina Uzumaki',
        relation: 'Mother',
        epithet: 'The Red-Hot Habanero',
        image: './images/naruto/naruto-sage.png',
        achievements: 'Held down the colossal full-sized Nine-Tails with Adamantine Sealing Chains immediately after giving birth.',
        bestShotQuote: 'Naruto, don’t be picky with food! Eat plenty and grow up big! Find a dream and don’t give up until it comes true!',
        bestShotScene: 'Weeping tears of joy hugging teenage Naruto inside the inner waterfall sanctuary as his hair turned golden.',
        legacy: 'Gave Naruto the boundless Uzumaki life force and his verbal tic "Dattebayo".'
      },
      {
        name: 'Jiraiya the Gallant',
        relation: 'Godfather & Master',
        epithet: 'Toad Sage of Mount Myoboku (Legendary Sannin)',
        image: './images/naruto/naruto-sage.png',
        achievements: 'Taught Minato and Naruto; wrote the Tale of the Utterly Gutsy Shinobi; uncovered Pain’s secret identity at the cost of his life.',
        bestShotQuote: 'A shinobi’s life is not measured by how they lived, but rather by what they managed to accomplish before their death.',
        bestShotScene: 'Sinking peacefully into the deep cold ocean of the Rain Village with a proud smile, carving the code 9, 31, 8 on Fukasaku’s back.',
        legacy: 'Gave Naruto his name, taught him the Rasengan, Toad Summoning, and the pursuit of true peace.'
      },
      {
        name: 'Iruka Umino',
        relation: 'First Teacher & Spiritual Father',
        epithet: 'Chunin Academy Instructor',
        image: './images/naruto/naruto-sage.png',
        achievements: 'Shielded Naruto with his own body against Mizuki’s giant shuriken; was the very first person in the world to acknowledge Naruto.',
        bestShotQuote: 'He is Naruto Uzumaki of the Hidden Leaf! He is no longer the monster fox... he is my exceptional student!',
        bestShotScene: 'Sitting beside Naruto eating warm ramen at Ichiraku after handing him his Genin forehead protector.',
        legacy: 'Saved Naruto from falling into the curse of hatred, grounding his heart in love.'
      }
    ]
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
    accentColor: '#8b5cf6',
    familyTree: [
      {
        name: 'Itachi Uchiha',
        relation: 'Elder Brother',
        epithet: 'Clan Martyr & Akatsuki Spy',
        image: './images/naruto/itachi.png',
        achievements: 'Prevented the Uchiha coup d’etat by shouldering eternal infamy; broke the Edo Tensei control through Shisui’s Kotoamatsukami.',
        bestShotQuote: 'No matter what you decide to do from now on... I will love you always.',
        bestShotScene: 'Touching Sasuke’s forehead with two fingers as the Edo Tensei light dissolved his soul into the heavens.',
        legacy: 'Transferred his Mangekyo Sharingan to Sasuke, unlocking the Eternal Mangekyo.'
      },
      {
        name: 'Fugaku Uchiha',
        relation: 'Father',
        epithet: 'Wicked Eye Fugaku (Clan Leader)',
        image: './images/naruto/sasuke-rinnegan.png',
        achievements: 'Led the Konoha Military Police Force; refused to fight his son Itachi to the death, accepting his fate with pride.',
        bestShotQuote: 'Do not hesitate, Itachi. Compared to you, our pain will end in an instant. You are truly a kind child.',
        bestShotScene: 'Kneeling beside his wife Mikoto in the tatami room, offering words of encouragement to Itachi before the end.',
        legacy: 'Instilled the proud heritage of the Uchiha crest and the Fire Style: Fireball Jutsu.'
      }
    ]
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
    accentColor: '#0ea5e9',
    familyTree: [
      {
        name: 'Sakumo Hatake',
        relation: 'Father',
        epithet: 'The White Fang of the Leaf (木ノ葉の白い牙)',
        image: './images/naruto/kakashi.png',
        achievements: 'A hero whose fame surpassed even the Legendary Sannin; chose to abort a mission to save the lives of his teammates.',
        bestShotQuote: 'Kakashi, I am proud of the shinobi you have become. Thank you for forgiving me.',
        bestShotScene: 'Sitting beside a small campfire in the purgatory borderland, reconciling with Kakashi before moving into the light.',
        legacy: 'Passed down the White Light Chakra Sabre and the true meaning of prioritizing teammates over rigid rules.'
      },
      {
        name: 'Obito Uchiha',
        relation: 'Teammate & Sworn Brother',
        epithet: 'The Masked Man / Ten-Tails Jinchuriki',
        image: './images/naruto/sasuke-rinnegan.png',
        achievements: 'Awakened Kamui; rescued Kakashi from the falling boulder; gave Kakashi his Sharingan as a promotion gift to Jonin.',
        bestShotQuote: 'Those who abandon their friends are worse than scum! Kakashi, take this Sharingan and protect Rin!',
        bestShotScene: 'Trapped beneath the crushing rock in the Kannabi Bridge cave, guiding Rin’s medical ninjutsu to transplant his left eye.',
        legacy: 'Gave Kakashi his signature Sharingan and the moral creed that shaped Team 7.'
      }
    ]
  },
  {
    id: 'itachi',
    name: 'Itachi Uchiha',
    japaneseName: 'うちは イタチ',
    title: 'The Shadow Martyr / Hero in the Dark',
    village: 'Hidden Leaf Village (Rogue / Akatsuki Spy)',
    clan: 'Uchiha Clan',
    ninjaRank: 'Anbu Captain / Akatsuki Rogue',
    natureTypes: ['Fire', 'Water', 'Wind', 'Yin', 'Yang'],
    kekkeiGenkai: 'Mangekyo Sharingan (Tsukuyomi & Amaterasu)',
    quote: 'It is not that by becoming Hokage people will acknowledge you. It is the one who is acknowledged by everyone that becomes Hokage.',
    description: 'An exceptional genius who graduated the academy at age 7 and became an Anbu captain at 13. He bore the weight of treason to protect Sasuke and peace, dying with a smile.',
    signatureJutsu: ['Tsukuyomi (Nightmare Realm)', 'Amaterasu (Inextinguishable Black Flames)', 'Totsuka Blade & Yata Mirror Susanoo', 'Izanami'],
    image: './images/naruto/itachi.png',
    accentColor: '#dc2626',
    familyTree: [
      {
        name: 'Shisui Uchiha',
        relation: 'Best Friend & Sworn Brother',
        epithet: 'Shisui of the Body Flicker (瞬身のシスイ)',
        image: './images/naruto/itachi.png',
        achievements: 'Mastered Kotoamatsukami (the ultimate mind-control genjutsu); sacrificed his remaining eye to Itachi to prevent clan warfare.',
        bestShotQuote: 'Itachi, take my left eye. You are the only friend I can trust to protect the Leaf Village and the honor of the Uchiha.',
        bestShotScene: 'Falling backward off the Naka River cliff into the roaring waters with a serene smile.',
        legacy: 'Awakened Itachi’s Mangekyo Sharingan and instilled the selfless definition of a true shinobi.'
      }
    ]
  }
];

export const HOKAGE_MONUMENT: HokageRecord[] = [
  {
    order: 'First Hokage (初代火影)',
    name: 'Hashirama Senju',
    title: 'God of Shinobi (忍の神)',
    reignFeat: 'Founded the Hidden Leaf Village alongside Madara Uchiha and subdued all nine Tailed Beasts.',
    signatureTechnique: 'Wood Style: True Several Thousand Hands (Shin Susenju)',
    description: 'Revered as the God of Shinobi. Wielded unique Wood Release capable of suppressing Tailed Beasts and possessed regenerative cells that defied mortal injury.',
    image: './images/naruto/leaf-village.png'
  },
  {
    order: 'Second Hokage (二代目火影)',
    name: 'Tobirama Senju',
    title: 'Architect of the Shinobi System',
    reignFeat: 'Created the Chunin Exams, Anbu Black Ops, Academy, and invented Shadow Clones, Flying Thunder God, and Edo Tensei.',
    signatureTechnique: 'Flying Thunder God Slash & Water Style Severing Wave',
    description: 'A brilliant strategist who formalized modern ninja governance. Sacrificed himself as a decoy against the Kinkaku Force to let Hiruzen escape.',
    image: './images/naruto/leaf-village.png'
  },
  {
    order: 'Third Hokage (三代目火影)',
    name: 'Hiruzen Sarutobi',
    title: 'The Professor (プロフェッサー)',
    reignFeat: 'Mastered all five chakra natures and all secret jutsu of the Leaf; trained the Legendary Sannin.',
    signatureTechnique: 'Reaper Death Seal & Enma Adamantine Staff',
    description: 'The longest reigning Hokage who guided the village through three great ninja wars with grandfatherly warmth, giving his soul to seal Orochimaru’s arms.',
    image: './images/naruto/leaf-village.png'
  },
  {
    order: 'Fourth Hokage (四代目火影)',
    name: 'Minato Namikaze',
    title: 'The Yellow Flash (木ノ葉の黄色い閃光)',
    reignFeat: 'Single-handedly turned the tide of the Third Great Ninja War; defeated Obito and sealed Kurama.',
    signatureTechnique: 'Flying Thunder God Level 2 & Spiraling Sphere (Rasengan)',
    description: 'The fastest ninja in history. Developed the Rasengan after observing the Tailed Beast Bomb and protected the village by sealing half of Kurama into Naruto.',
    image: './images/naruto/minato.png'
  },
  {
    order: 'Fifth Hokage (五代目火影)',
    name: 'Tsunade Senju',
    title: 'The Legendary Sucker / Medical Miracle',
    reignFeat: 'Revolutionized military medicine worldwide, healed the entire village during Pain’s assault.',
    signatureTechnique: 'Strength of a Hundred Seal & Heavenly Spear Foot',
    description: 'Granddaughter of Hashirama and world’s greatest medical ninja. Possesses monstrous superhuman strength and immortality via Mitotic Regeneration.',
    image: './images/naruto/leaf-village.png'
  },
  {
    order: 'Sixth Hokage (六代目火影)',
    name: 'Kakashi Hatake',
    title: 'Copy Ninja Kakashi',
    reignFeat: 'Rebuilt Konoha into a technological modern metropolis following the Fourth Great Ninja War.',
    signatureTechnique: 'Lightning Blade & Purple Electricity',
    description: 'Guided the transition of the ninja world into global peace alongside the other four Kage.',
    image: './images/naruto/kakashi.png'
  },
  {
    order: 'Seventh Hokage (七代目火影)',
    name: 'Naruto Uzumaki',
    title: 'Child of Prophecy / Orange Hokage',
    reignFeat: 'Ended the cycle of hatred, defeated Kaguya Otsutsuki, and united all five great nations in brotherhood.',
    signatureTechnique: 'Super Tailed Beast Rasenshuriken & Baryon Mode',
    description: 'The boy once shunned as a demon fox who rose to become the greatest Hokage and savior of the entire world.',
    image: './images/naruto/naruto-sage.png'
  }
];

export const AKATSUKI_MEMBERS: AkatsukiMember[] = [
  {
    id: 'pain',
    name: 'Pain (Nagato Uzumaki)',
    ring: 'Zero (零)',
    kanji: '零',
    finger: 'Right Thumb',
    partner: 'Konan',
    bounty: '1,200,000,000 Ryo',
    bingoThreatClass: 'Calamity',
    philosophy: 'Those who do not understand true pain can never understand true peace.',
    signatureJutsu: 'Almighty Push (Shinra Tensei) & Catastrophic Planetary Construction (Chibaku Tensei)',
    image: './images/naruto/pain.png'
  },
  {
    id: 'itachi-akatsuki',
    name: 'Itachi Uchiha',
    ring: 'Vermilion (朱)',
    kanji: '朱',
    finger: 'Right Ring',
    partner: 'Kisame Hoshigaki',
    bounty: '850,000,000 Ryo',
    bingoThreatClass: 'SS-Rank',
    philosophy: 'Self-sacrifice... a nameless shinobi who protects peace within its shadow.',
    signatureJutsu: 'Tsukuyomi & Amaterasu',
    image: './images/naruto/itachi.png'
  },
  {
    id: 'madara',
    name: 'Madara Uchiha',
    ring: 'Founder / Ghost of the Uchiha',
    kanji: '斑',
    finger: 'Leader Behind Shadows',
    partner: 'Obito Uchiha',
    bounty: '2,500,000,000 Ryo',
    bingoThreatClass: 'Calamity',
    philosophy: 'Wake up to reality! Nothing ever goes as planned in this accursed world.',
    signatureJutsu: 'Tengai Shinsei (Double Meteors), Perfect Susanoo, Infinite Tsukuyomi',
    image: './images/naruto/madara.png'
  }
];

// Helper to generate 20 story scenes for Naruto Arcs
const generate20NarutoScenes = (arcName: string, prefix: string, baseImg: string): StoryPlotScene[] => {
  const sceneTemplates = [
    { title: 'Bell Test in the Forest', tag: 'Team 7 Formed', lesson: 'Comrades come before rigid regulations; empathy is the greatest shinobi virtue.' },
    { title: 'The Demon of the Mist', tag: 'Zabuza Strikes', lesson: 'Even the coldest killer carries a human heart hidden beneath the blood.' },
    { title: 'The Mirror Ice Crystals', tag: 'Haku’s Devotion', lesson: 'To become a weapon for someone you love is the ultimate act of sacrifice.' },
    { title: 'Tears in the Falling Snow', tag: 'Bridge of Heroes', lesson: 'Grief bridges all divides; tears cleanse the bloodstained ninja world.' },
    { title: 'Written Exam Mind Games', tag: 'Chunin Stage 1', lesson: 'Resourcefulness and courage under pressure outrank simple book memorization.' },
    { title: 'Forest of Death Terrors', tag: 'Orochimaru’s Mark', lesson: 'Darkness will prey upon your insecurities; anchor yourself to your team.' },
    { title: 'Dropping the Leg Weights', tag: 'Rock Lee vs Gaara', lesson: 'Hard work will surpass raw genius if you refuse to give up.' },
    { title: 'The Reaper Death Seal', tag: 'Third Hokage Falls', lesson: 'A true leader gives their very soul so the next generation may flourish.' },
    { title: 'Search for Tsunade', tag: 'The Three-Way Deadlock', lesson: 'Confronting past grief is the only way to heal and lead others.' },
    { title: 'Rasengan Mastered', tag: 'Spiraling Sphere', lesson: 'Hold the hurricane in the palm of your hand through relentless practice.' },
    { title: 'Valley of the End Clash', tag: 'Brothers in Conflict', lesson: 'Friendship that hurts is still friendship; never cut the bonds that bind you.' },
    { title: 'Rescue of the Kazekage', tag: 'Sasori’s Puppets', lesson: 'The boy once despised as a monster can become the savior of former enemies.' },
    { title: 'Asuma’s Final Cigarette', tag: 'Shikamaru’s Vow', lesson: 'The "King" to protect in this village is the unborn future children.' },
    { title: 'Rasenshuriken Unleashed', tag: 'Wind Style Climax', lesson: 'Combine chakra shape and nature transformation to forge your own path.' },
    { title: 'The Sinking Toad Sage', tag: 'Tale of Jiraiya', lesson: 'Your legacy lives on in the hearts of the students you inspired.' },
    { title: 'Sage Mode Arrival', tag: 'Hero of Konoha', lesson: 'Stand tall in the ruins with the eyes of the mountain sage.' },
    { title: 'Talk No Jutsu in the Tree', tag: 'Nagato Redeemed', lesson: 'True peace cannot be forced by fear; it is forged by understanding.' },
    { title: 'Madara’s Meteor Shower', tag: 'God of War Awakens', lesson: 'Overwhelming despair demands that every nation put aside past hatred.' },
    { title: 'Kurama Links Fists', tag: 'Befriending the Fox', lesson: 'Turn inner hatred into golden light by acknowledging each other as partners.' },
    { title: 'The Sun and the Moon', tag: 'Final Valley Rebirth', lesson: 'The will of fire burns eternal as long as one person remembers tomorrow.' }
  ];

  return sceneTemplates.map((t, i) => ({
    id: `${prefix}-scene-${i + 1}`,
    sceneNumber: i + 1,
    title: `${t.title} — ${arcName}`,
    tagline: t.tag,
    storySummary: `This crucial moment in ${arcName} shows Naruto and his comrades pushing past mortal limits. Scene ${i + 1} captures the fierce clash of ideals, the mastery of advanced jutsu, and the unbreakable Will of Fire.`,
    motivationLine: t.lesson,
    imageUrl: baseImg,
    badge: i < 5 ? 'CLASH' : i < 15 ? 'BATTLE' : 'LEGEND',
    keyDialogue: `"${t.tag}: I never go back on my word! That is my ninja way!"`,
    speaker: i % 2 === 0 ? 'Naruto Uzumaki' : 'Kakashi Hatake'
  }));
};

export const NARUTO_ARCS: NarutoArc[] = [
  {
    id: 'land-of-waves',
    title: 'Land of Waves Arc',
    japaneseTitle: '波の国編',
    subtitle: 'The Great Naruto Bridge & Demon of the Mist',
    episodes: 'Episodes 1–19',
    antagonists: ['Zabuza Momochi', 'Haku', 'Gato'],
    synopsis: 'Team 7 embarks on their first C-rank mission escorting bridge-builder Tazuna. They confront Rogue Swordsman Zabuza and ice-user Haku, learning the bitter reality of the shinobi tool.',
    keyClash: 'Naruto & Sasuke vs Haku & Kakashi vs Zabuza',
    image: './images/naruto/leaf-village.png',
    storyPlotScenes: generate20NarutoScenes('Land of Waves Arc', 'low', './images/naruto/leaf-village.png')
  },
  {
    id: 'chunin-exams',
    title: 'Chunin Exams & Konoha Crush',
    japaneseTitle: '中忍試験 / 木ノ葉崩し編',
    subtitle: 'Orochimaru’s Treason & Third Hokage’s Stand',
    episodes: 'Episodes 20–80',
    antagonists: ['Orochimaru', 'Gaara of the Sand', 'Sound Four'],
    synopsis: 'Rookie Genin from across nations gather in the Leaf. Orochimaru places the Curse Mark on Sasuke and orchestrates an invasion, forcing Third Hokage Hiruzen into a duel to the death.',
    keyClash: 'Hiruzen Sarutobi vs Orochimaru & Naruto vs Gaara',
    image: './images/naruto/leaf-village.png',
    storyPlotScenes: generate20NarutoScenes('Chunin Exams Arc', 'ce', './images/naruto/leaf-village.png')
  },
  {
    id: 'sasuke-retrieval',
    title: 'Sasuke Retrieval Arc',
    japaneseTitle: 'サスケ奪還編',
    subtitle: 'The Tragic Clash at the Valley of the End',
    episodes: 'Episodes 107–135',
    antagonists: ['Sound Four (Kimimaro)', 'Curse Mark Sasuke'],
    synopsis: 'Sasuke defects to Orochimaru in pursuit of vengeance against Itachi. Shikamaru leads a squad of genin to retrieve him, culminating in the historic showdown between Rasengan and Chidori.',
    keyClash: 'One-Tailed Naruto vs Second State Curse Mark Sasuke',
    image: './images/naruto/sasuke-rinnegan.png',
    storyPlotScenes: generate20NarutoScenes('Sasuke Retrieval Arc', 'sr', './images/naruto/sasuke-rinnegan.png')
  },
  {
    id: 'pain-assault',
    title: 'Pain’s Assault on the Leaf',
    japaneseTitle: 'ペイン来襲編',
    subtitle: 'Sage Mode Naruto vs Six Paths of Pain',
    episodes: 'Episodes 152–175 (Shippuden)',
    antagonists: ['Pain (Six Paths)', 'Konan'],
    synopsis: 'Pain obliterates Konoha with a single Almighty Push to capture Kurama. Naruto returns from Mount Myoboku in perfect Sage Mode, defeating all six paths and redeeming Nagato.',
    keyClash: 'Sage Mode Naruto vs Deva Path Pain (Almighty Push vs Rasengan)',
    image: './images/naruto/pain.png',
    storyPlotScenes: generate20NarutoScenes('Pain Assault Arc', 'pa', './images/naruto/pain.png')
  },
  {
    id: 'five-kage-summit',
    title: 'Five Kage Summit Arc',
    japaneseTitle: '五影会談編',
    subtitle: 'Sasuke Infiltrates the Iron Country',
    episodes: 'Episodes 197–214 (Shippuden)',
    antagonists: ['Danzo Shimura', 'Mangekyo Sasuke', 'Tobi (Obito)'],
    synopsis: 'The leaders of the five great nations convene in the Land of Iron. Sasuke attacks the summit with his awakening Susanoo, executes Danzo, and Obito declares the Fourth Great Ninja War.',
    keyClash: 'Sasuke Uchiha vs Danzo Shimura (Izanagi Counter)',
    image: './images/naruto/sasuke-rinnegan.png',
    storyPlotScenes: generate20NarutoScenes('Five Kage Summit Arc', 'fks', './images/naruto/sasuke-rinnegan.png')
  },
  {
    id: 'fourth-shinobi-war',
    title: 'Fourth Shinobi World War',
    japaneseTitle: '第四次忍界大戦編',
    subtitle: 'Six Paths Rebirth & The Infinite Tsukuyomi',
    episodes: 'Episodes 261–479 (Shippuden)',
    antagonists: ['Madara Uchiha', 'Obito Uchiha', 'Kaguya Otsutsuki'],
    synopsis: 'The Allied Shinobi Forces face Edo Tensei legends and the Ten-Tails. Receiving Six Paths chakra from Hagoromo, Naruto and Sasuke seal Kaguya before concluding their destiny at the Final Valley.',
    keyClash: 'Naruto & Sasuke vs Madara & Final Valley Rematch',
    image: './images/naruto/madara.png',
    storyPlotScenes: generate20NarutoScenes('Fourth Shinobi War Arc', 'fsw', './images/naruto/madara.png')
  }
];

export const JUTSU_DOJUTSU: JutsuDojutsu[] = [
  {
    id: 'jutsu-sharingan',
    name: 'Eternal Mangekyo Sharingan',
    japaneseName: '永遠の万華鏡写輪眼',
    category: 'Dojutsu',
    rank: 'Kekkei Mora',
    user: 'Sasuke Uchiha & Madara Uchiha',
    description: 'The supreme evolution of the Uchiha ocular jutsu, achieved by transplanting a close relative’s Mangekyo Sharingan.',
    effect: 'Completely eliminates the blindness side-effect of standard Mangekyo, allowing perpetual use of Complete Body Susanoo and Amaterasu.'
  },
  {
    id: 'jutsu-rinnegan',
    name: 'Six Paths Rinnegan',
    japaneseName: '輪廻眼',
    category: 'Dojutsu',
    rank: 'Kekkei Mora',
    user: 'Nagato (Pain), Madara, Sasuke Uchiha, Hagoromo',
    description: 'The most sublime of the Three Great Dojutsu, possessing the powers of creation and destruction.',
    effect: 'Grants control over all five basic natures, the Six Paths techniques (Deva, Asura, Human, Animal, Preta, Naraka), and space-time swaps.'
  },
  {
    id: 'jutsu-rasenshuriken',
    name: 'Wind Style: Rasenshuriken',
    japaneseName: '風遁・螺旋手裏剣',
    category: 'Ninjutsu',
    rank: 'S-Rank',
    user: 'Naruto Uzumaki',
    description: 'An S-Rank forbidden jutsu created by infusing Wind Nature chakra into the microscopic rotation of the Rasengan.',
    effect: 'Produces millions of microscopic wind blades that sever the chakra network at a cellular level, rendering regeneration impossible.'
  }
];

export const NARUTO_QUOTES: NarutoQuote[] = [
  {
    id: 'q-naruto',
    speaker: 'Naruto Uzumaki',
    title: 'Seventh Hokage',
    quote: 'If you don’t like the hand that fate dealt you with, fight for a new one! I’m not gonna run away, and I never go back on my word! That is my ninja way!',
    context: 'His speech to Neji Hyuga in the Chunin Exams arena, shattering Neji’s belief in inescapable destiny.',
    tagline: 'Defier of Predestined Fate',
    image: './images/naruto/naruto-sage.png',
    accentColor: '#ea580c'
  },
  {
    id: 'q-jiraiya',
    speaker: 'Jiraiya the Gallant',
    title: 'Toad Sage of Mount Myoboku',
    quote: 'The true measure of a shinobi is not how he lives, but how he dies. It’s not what they did in life, but what they accomplished before dying that proves their worth.',
    context: 'Thinking of Naruto as he sinks into the cold waters of Amegakure with a contented smile.',
    tagline: 'The Gallant Mentor’s Final Chapter',
    image: './images/naruto/naruto-sage.png',
    accentColor: '#f59e0b'
  },
  {
    id: 'q-itachi',
    speaker: 'Itachi Uchiha',
    title: 'Shadow Martyr of the Leaf',
    quote: 'People live their lives bound by what they accept as correct and true. That’s how they define "reality". But what does it mean to be "correct"? Merely vague concepts... their "reality" may all be an illusion.',
    context: 'Explaining the nature of perception to Sasuke during their confrontation in the Uchiha hideout.',
    tagline: 'Wisdom Beyond the Veil',
    image: './images/naruto/itachi.png',
    accentColor: '#dc2626'
  },
  {
    id: 'q-pain',
    speaker: 'Pain (Nagato)',
    title: 'God of the Hidden Rain',
    quote: 'Love is the reason why there is pain. When we lose someone precious to us, hate is born... Learn to embrace the pain.',
    context: 'Hovering above the crater of the destroyed Leaf Village before Naruto.',
    tagline: 'The Philosophy of Suffering',
    image: './images/naruto/pain.png',
    accentColor: '#8b5cf6'
  }
];

export const SHINOBI_WEAPONS: ShinobiWeapon[] = [
  {
    id: 'weapon-kubikiribocho',
    name: 'Kubikiribocho (Executioner’s Blade)',
    bearer: 'Zabuza Momochi / Suigetsu Hozuki',
    classification: 'Seven Swords of the Mist',
    origin: 'Forged in the Hidden Mist Village (Kirigakure).',
    specialTrait: 'Regenerates itself from breaks by absorbing the iron directly from the blood of its victims.',
    currentStatus: 'Restored to the Kirigakure sword vault following the Fourth Great Ninja War.',
    image: './images/naruto/leaf-village.png'
  },
  {
    id: 'weapon-samehada',
    name: 'Samehada (Shark Skin)',
    bearer: 'Kisame Hoshigaki / Killer Bee',
    classification: 'Seven Swords of the Mist',
    origin: 'A sentient shark-skin broadsword that feeds on chakra rather than cutting flesh.',
    specialTrait: 'Shreds skin with shark scales; absorbs up to six tails of chakra in a single swipe and heals its wielder.',
    currentStatus: 'Currently bonded with Killer Bee.',
    image: './images/naruto/sasuke-rinnegan.png'
  },
  {
    id: 'weapon-kusanagi',
    name: 'Sword of Kusanagi (Chidori Blade)',
    bearer: 'Sasuke Uchiha',
    classification: 'Legendary Artifact',
    origin: 'A straight-bladed chokuto imbued with Sasuke’s lightning chakra.',
    specialTrait: 'Cannot be blocked by standard weapons when coated in high-frequency Chidori current.',
    currentStatus: 'Sasuke’s primary sidearm throughout Shippuden and beyond.',
    image: './images/naruto/sasuke-rinnegan.png'
  },
  {
    id: 'weapon-ftg-kunai',
    name: 'Flying Thunder God Kunai',
    bearer: 'Minato Namikaze',
    classification: 'Spacetime Tool',
    origin: 'Custom tri-pronged kunai engraved with the Flying Thunder God teleportation formula (忍愛之剣).',
    specialTrait: 'Acts as an instantaneous teleportation anchor anywhere on the battlefield.',
    currentStatus: 'Passed down as a sacred artifact of the Fourth Hokage.',
    image: './images/naruto/minato.png'
  }
];

export const NARUTO_OATH = {
  title: 'THE WILL OF FIRE SACRED NINDO',
  japaneseTitle: '火の意志 • 忍道',
  verse: `When the tree leaves dance, one shall find flames.
The fire’s shadow will illuminate the village, and once again, tree leaves shall bud anew.
I do not care how many times I stumble, fall, or bleed in the dirt.
I will never abandon my friends.
I will never take back what I have said.
For as long as there is breath in my chest and fire in my soul:
これがオレの忍道だ — THAT IS MY NINJA WAY!`,
  creed: 'THE WILL OF FIRE BURNS ETERNAL',
  masterMessage: '— Naruto Uzumaki, Seventh Hokage of the Hidden Leaf'
};
