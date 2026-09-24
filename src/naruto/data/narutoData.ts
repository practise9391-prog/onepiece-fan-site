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

export interface GreatClan {
  id: string;
  name: string;
  japaneseName: string;
  symbol: string;
  village: string;
  specialty: string;
  kekkeiGenkaiOrSecret: string;
  notableMembers: string[];
  crestDescription: string;
  historyAndLegacy: string;
  signatureTechniques: string[];
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
  bounty: string;
  bingoThreatClass: 'S-Rank' | 'SS-Rank' | 'Calamity' | 'Celestial';
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
  era: 'part1' | 'shippuden' | 'boruto';
  eraLabel: string;
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
  category: 'Dojutsu' | 'Ninjutsu' | 'Senjutsu' | 'Kekkei Genkai' | 'Taijutsu';
  rank: 'Kekkei Mora' | 'S-Rank' | 'Secret Hiden' | 'Forbidden Kinjutsu';
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
  classification: 'Seven Swords of the Mist' | 'Legendary Artifact' | 'Spacetime Tool' | 'Divine Relic';
  origin: string;
  specialTrait: string;
  currentStatus: string;
  image: string;
}

// ----------------------------------------------------
// SHINOBI LEGENDS & MENTORS TREE
// ----------------------------------------------------
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
      },
      {
        name: 'Hinata Hyuga (Uzumaki)',
        relation: 'Wife & Princess of the Byakugan',
        epithet: 'The Byakugan Princess',
        image: './images/naruto/naruto-sage.png',
        achievements: 'Dove into the crater to protect Naruto from Pain; held Naruto’s hand when Neji died to restore his Will of Fire.',
        bestShotQuote: 'Because I love you, Naruto-kun! I’m not afraid to die if it means protecting you!',
        bestShotScene: 'Standing between Deva Path Pain and pinned-down Naruto, striking the black receivers with Twin Lion Fists.',
        legacy: 'Bore Boruto and Himawari, uniting the Uzumaki life force with the pure Otsutsuki-Hyuga Byakugan.'
      },
      {
        name: 'Boruto Uzumaki',
        relation: 'Son & Shinobi Prodigy',
        epithet: 'Two Blue Vortex / Shadow of the Leaf',
        image: './images/naruto/naruto-sage.png',
        achievements: 'Awakened the Jougan; defeated Momoshiki Otsutsuki; mastered Flying Thunder God and Rasengan Uzuhiko.',
        bestShotQuote: 'I don’t want to be Hokage. I want to be a shinobi like my master Sasuke, protecting the Leaf from the shadows!',
        bestShotScene: 'Donning Sasuke’s scratched forehead protector and slashing Momoshiki with the Giant Vanishing Rasengan.',
        legacy: 'Carries the Karma mark of Otsutsuki and defends the world after being framed by Omnipotence.'
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
      },
      {
        name: 'Sakura Haruno (Uchiha)',
        relation: 'Wife & Master of Byakugou',
        epithet: 'World’s Greatest Medical Specialist',
        image: './images/naruto/leaf-village.png',
        achievements: 'Defeated Sasori; unlocked the Strength of a Hundred Seal; struck Kaguya Otsutsuki from above during the final sealing.',
        bestShotQuote: 'Sasuke-kun, thank you for coming back. Welcome home.',
        bestShotScene: 'Reuniting with Sasuke after the war and receiving the affectionate Uchiha forehead tap.',
        legacy: 'Mother to Sarada Uchiha, bridging Uchiha prowess with monstrous Senju-tier chakra control.'
      },
      {
        name: 'Sarada Uchiha',
        relation: 'Daughter & Future Hokage Candidate',
        epithet: 'Heiress of the Uchiha Sharingan',
        image: './images/naruto/sasuke-rinnegan.png',
        achievements: 'Awakened the Mangekyo Sharingan through pure love and grief; masters Chidori and superhuman strength.',
        bestShotQuote: 'My dream is to become the Hokage, just like Lord Seventh!',
        bestShotScene: 'Awakening the sun-burst Mangekyo Sharingan pleading with Sasuke to save Boruto.',
        legacy: 'Carries the flame of the Uchiha, rewriting their destiny toward the Hokage seat.'
      }
    ]
  },
  {
    id: 'sakura',
    name: 'Sakura Haruno',
    japaneseName: '春野 サクラ',
    title: 'Supreme Medical Ninja / Fist of the Leaf',
    village: 'Hidden Leaf Village (Konohagakure)',
    clan: 'Haruno / Uchiha Clan',
    ninjaRank: 'Jonin / Head of Medical Department',
    natureTypes: ['Earth', 'Water', 'Yin', 'Yang'],
    quote: 'The things that are most important aren’t written in books. You have to learn them by experiencing them yourself!',
    description: 'Disciple of Fifth Hokage Tsunade. Perfected pinpoint chakra control to unleash devastating earth-shattering physical strikes and unlocked the legendary Strength of a Hundred Seal (Byakugou no In).',
    signatureJutsu: ['Cherry Blossom Clash (Oukashou)', 'Strength of a Hundred Seal', 'Katsuyu Summoning: Immense Network', 'Mitotic Regeneration'],
    image: './images/naruto/leaf-village.png',
    accentColor: '#ec4899',
    familyTree: [
      {
        name: 'Tsunade Senju',
        relation: 'Master & Mentor',
        epithet: 'Fifth Hokage & Legendary Sannin',
        image: './images/naruto/leaf-village.png',
        achievements: 'Pioneered modern military medicine; trained Sakura for three intense years in combat and regeneration.',
        bestShotQuote: 'People become stronger because they have memories they cannot forget.',
        bestShotScene: 'Watching proudly as Sakura awakened the diamond Byakugou mark on her forehead on the war battlefield.',
        legacy: 'Passed down the Katsuyu summon contract and the peerless medical arts of the Senju.'
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
      },
      {
        name: 'Minato Namikaze',
        relation: 'Sensei & Leader',
        epithet: 'Fourth Hokage',
        image: './images/naruto/minato.png',
        achievements: 'Led Team Minato through the Third Great Ninja War; perfected the Flying Thunder God.',
        bestShotQuote: 'Never forget what a shinobi stands for, Kakashi.',
        bestShotScene: 'Arriving in a flash of yellow lightning to save Kakashi and Rin from stone ninja encirclement.',
        legacy: 'Mentored Kakashi into becoming an Anbu captain and future Hokage.'
      }
    ]
  },
  {
    id: 'jiraiya',
    name: 'Jiraiya the Gallant',
    japaneseName: '自来也',
    title: 'Toad Sage of Mount Myoboku / Legendary Sannin',
    village: 'Hidden Leaf Village (Konohagakure)',
    clan: 'Leaf Veteran',
    ninjaRank: 'Jonin / Legendary Sannin',
    natureTypes: ['Fire', 'Earth', 'Water', 'Wind', 'Yin', 'Yang'],
    quote: 'The true measure of a shinobi is not how he lives, but how he dies. What they accomplished before dying that proves their worth.',
    description: 'Renowned author, wanderer, and legendary shinobi. Traveled the world seeking the Child of Prophecy who would bring salvation or destruction. Trained Minato Namikaze, Nagato, and Naruto Uzumaki.',
    signatureJutsu: ['Sage Mode: Toad Fusions', 'Spiraling Sphere (Rasengan)', 'Toad Flame Bombs', 'Dark Swamp (Yomi Numa)'],
    image: './images/naruto/naruto-sage.png',
    accentColor: '#f59e0b',
    familyTree: [
      {
        name: 'Hiruzen Sarutobi',
        relation: 'Master',
        epithet: 'Third Hokage (The Professor)',
        image: './images/naruto/leaf-village.png',
        achievements: 'Trained Jiraiya, Tsunade, and Orochimaru; mastered all five basic nature transformations.',
        bestShotQuote: 'Where tree leaves dance, one shall find flames.',
        bestShotScene: 'Testing young Jiraiya with the bell test alongside Tsunade and Orochimaru.',
        legacy: 'Instilled the core philosophy of the Will of Fire in Jiraiya.'
      }
    ]
  },
  {
    id: 'minato',
    name: 'Minato Namikaze',
    japaneseName: '波風 ミナト',
    title: 'Fourth Hokage / The Yellow Flash',
    village: 'Hidden Leaf Village (Konohagakure)',
    clan: 'Namikaze Clan',
    ninjaRank: 'Fourth Hokage',
    natureTypes: ['Lightning', 'Wind', 'Fire', 'Yin-Yang'],
    quote: 'You will face hardship, Naruto... but you have your mother’s strong spirit and my faith in you.',
    description: 'The fastest shinobi in history. Formulated the Rasengan after three years of studying the Tailed Beast Bomb and mastered the Flying Thunder God to teleport across battlefields instantaneously.',
    signatureJutsu: ['Flying Thunder God Level 2', 'Spiraling Sphere (Rasengan)', 'Reaper Death Seal', 'Eight Trigrams Sealing Style'],
    image: './images/naruto/minato.png',
    accentColor: '#eab308',
    familyTree: [
      {
        name: 'Jiraiya',
        relation: 'Sensei',
        epithet: 'Toad Sage',
        image: './images/naruto/naruto-sage.png',
        achievements: 'Taught Minato summoning techniques and recognized him as the once-in-a-generation genius.',
        bestShotQuote: 'Minato’s talent was something the world sees only once every several decades.',
        bestShotScene: 'Handing Minato his newly published book, inspiring Minato to name his unborn child Naruto.',
        legacy: 'Fostered Minato’s creative genius that birthed the Rasengan.'
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
  },
  {
    id: 'madara',
    name: 'Madara Uchiha',
    japaneseName: 'うちは マダラ',
    title: 'Ghost of the Uchiha / Legendary Founder',
    village: 'Hidden Leaf Village (Co-Founder / Rogue)',
    clan: 'Uchiha Clan',
    ninjaRank: 'Legendary Clan Head',
    natureTypes: ['Fire', 'Wind', 'Lightning', 'Earth', 'Water', 'Yin-Yang'],
    kekkeiGenkai: 'Eternal Mangekyo Sharingan, Rinnegan, Wood Release',
    quote: 'Wake up to reality! Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that only pain, suffering and futility exist.',
    description: 'Co-founder of Konohagakure alongside Hashirama Senju. The first mortal to unlock the Eternal Mangekyo Sharingan and re-awaken the legendary Rinnegan. Sought the Infinite Tsukuyomi to eradicate all conflict from humanity.',
    signatureJutsu: ['Tengai Shinsei (Double Meteors)', 'Majestic Attire: Susanoo', 'Limbo: Border Jail', 'Infinite Tsukuyomi'],
    image: './images/naruto/madara.png',
    accentColor: '#7c3aed',
    familyTree: [
      {
        name: 'Izuna Uchiha',
        relation: 'Younger Brother',
        epithet: 'Second-in-Command of the Uchiha',
        image: './images/naruto/madara.png',
        achievements: 'Fought Tobirama Senju during the Warring States period; gifted his eyes to Madara before dying.',
        bestShotQuote: 'Brother... protect our clan from the Senju at any cost.',
        bestShotScene: 'Handing over his Mangekyo Sharingan from his deathbed, enabling Madara to awaken the first Eternal Mangekyo.',
        legacy: 'His sacrifice forever ignited Madara’s quest for supreme power and protection.'
      },
      {
        name: 'Hashirama Senju',
        relation: 'Rival & Lifelong Friend',
        epithet: 'First Hokage (God of Shinobi)',
        image: './images/naruto/leaf-village.png',
        achievements: 'Founded the Leaf Village alongside Madara; defeated Madara at the historic Valley of the End clash.',
        bestShotQuote: 'I will protect our village, no matter what it takes! Even if it is a friend, a sibling, or my own child!',
        bestShotScene: 'Skipping stones across the river as boys, dreaming of building a peaceful village together.',
        legacy: 'His cells allowed Madara to fuse Senju and Uchiha chakra to awaken the Rinnegan.'
      }
    ]
  }
];

// ----------------------------------------------------
// GREAT CLANS OF THE SHINOBI WORLD
// ----------------------------------------------------
export const GREAT_CLANS: GreatClan[] = [
  {
    id: 'uzumaki',
    name: 'Uzumaki Clan',
    japaneseName: 'うずまき一族',
    symbol: 'Spiral / Whirlpool (渦巻)',
    village: 'Former Uzushio (Whirlpool) & Konoha',
    specialty: 'Fuinjutsu (Sealing Arts) & Monstrous Vitality',
    kekkeiGenkaiOrSecret: 'Adamantine Sealing Chains & Mind’s Eye of the Kagura',
    notableMembers: ['Naruto Uzumaki', 'Kushina Uzumaki', 'Nagato (Pain)', 'Karin Uzumaki', 'Mito Uzumaki', 'Boruto Uzumaki'],
    crestDescription: 'A red spiral symbol that Konohagakure adopted onto every official flak jacket as a token of friendship.',
    historyAndLegacy: 'Distant relatives of the Senju. Feared across the globe for their sealing jutsu that could tame Tailed Beasts, causing neighboring nations to annihilate Uzushiogakure during great wars.',
    signatureTechniques: ['Adamantine Sealing Chains (Kongo Fusa)', 'Reaper Death Seal (Shiki Fujin)', 'Eight Trigrams Sealing Style'],
    image: './images/naruto/naruto-sage.png',
    accentColor: '#ea580c'
  },
  {
    id: 'uchiha',
    name: 'Uchiha Clan',
    japaneseName: 'うちは一族',
    symbol: 'Paper Fan (Uchiwa / 団扇)',
    village: 'Hidden Leaf Village (Konohagakure)',
    specialty: 'Dojutsu (Eye Techniques) & Fire Release',
    kekkeiGenkaiOrSecret: 'Sharingan • Mangekyo Sharingan • Eternal Mangekyo Sharingan',
    notableMembers: ['Madara Uchiha', 'Sasuke Uchiha', 'Itachi Uchiha', 'Obito Uchiha', 'Shisui Uchiha', 'Fugaku Uchiha', 'Sarada Uchiha'],
    crestDescription: 'A red and white paper fan representing the ability to fan flames into an inferno.',
    historyAndLegacy: 'Descendants of Indra Otsutsuki. Governed by the Curse of Hatred born from profound love. Co-founded the Leaf Village and produced the most feared ocular jutsu in history.',
    signatureTechniques: ['Complete Body Susanoo', 'Amaterasu (Black Flames)', 'Tsukuyomi', 'Kotoamatsukami', 'Izanami & Izanagi'],
    image: './images/naruto/sasuke-rinnegan.png',
    accentColor: '#8b5cf6'
  },
  {
    id: 'senju',
    name: 'Senju Clan',
    japaneseName: '千手一族',
    symbol: 'Vajra Thunderbolt (千手)',
    village: 'Hidden Leaf Village (Konohagakure)',
    specialty: 'Monstrous Chakra Volume & Wood Release',
    kekkeiGenkaiOrSecret: 'Wood Style (Mokuton) & Will of Fire',
    notableMembers: ['Hashirama Senju', 'Tobirama Senju', 'Tsunade Senju', 'Butsuma Senju'],
    crestDescription: 'A stylized vajra pestle representing the hundred hands of battle readiness and spiritual strength.',
    historyAndLegacy: 'Descendants of Asura Otsutsuki. Renowned as the "Clan with a Thousand Skills". Founded the Hidden Leaf Village and laid the foundations of the modern ninja governing system.',
    signatureTechniques: ['Wood Style: True Several Thousand Hands', 'Wood Golem Jutsu', 'Flying Thunder God', 'Strength of a Hundred Byakugou'],
    image: './images/naruto/leaf-village.png',
    accentColor: '#10b981'
  },
  {
    id: 'hyuga',
    name: 'Hyuga Clan',
    japaneseName: '日向一族',
    symbol: 'Flame / Fan within Yin-Yang (日向)',
    village: 'Hidden Leaf Village (Konohagakure)',
    specialty: 'Taijutsu & 360-Degree Vision',
    kekkeiGenkaiOrSecret: 'Byakugan (All-Seeing White Eyes) & Gentle Fist',
    notableMembers: ['Neji Hyuga', 'Hinata Hyuga', 'Hiashi Hyuga', 'Hanabi Hyuga', 'Hizashi Hyuga'],
    crestDescription: 'A serene white crest representing the pure all-seeing sight inherited directly from Hamura Otsutsuki.',
    historyAndLegacy: 'The oldest noble clan in Konoha, split between Main and Branch families with the Cursed Seal. Their Byakugan perceives chakra networks, tenketsu points, and distances up to 20 kilometers.',
    signatureTechniques: ['Eight Trigrams Sixty-Four Palms', 'Eight Trigrams Palms Revolving Heaven (Kaiten)', 'Gentle Step Twin Lion Fists'],
    image: './images/naruto/leaf-village.png',
    accentColor: '#38bdf8'
  },
  {
    id: 'nara',
    name: 'Nara Clan',
    japaneseName: '奈良一族',
    symbol: 'Segmented Circle & Antlers',
    village: 'Hidden Leaf Village (Konohagakure)',
    specialty: 'Shadow Manipulation & Tactical Intellect',
    kekkeiGenkaiOrSecret: 'Shadow Imitation Jutsu (Hiden) & Medical Deer Forest',
    notableMembers: ['Shikamaru Nara', 'Shikaku Nara', 'Shikadai Nara', 'Yoshino Nara'],
    crestDescription: 'A minimalist geometric circle symbolizing chess strategy, tactical insight, and deer forest guardianship.',
    historyAndLegacy: 'Formed the legendary Ino-Shika-Cho trio with the Yamanaka and Akimichi clans across generations. Provided chief tactical advisers to every Hokage.',
    signatureTechniques: ['Shadow Possession Jutsu', 'Shadow Strangle Jutsu', 'Shadow Sewing Jutsu'],
    image: './images/naruto/leaf-village.png',
    accentColor: '#14b8a6'
  },
  {
    id: 'sarutobi',
    name: 'Sarutobi Clan',
    japaneseName: '猿飛一族',
    symbol: 'Jumping Monkey Crest',
    village: 'Hidden Leaf Village (Konohagakure)',
    specialty: 'Five Nature Transformation Mastery & Monkey King Bond',
    kekkeiGenkaiOrSecret: 'Secret Fire Ninjutsu & Adamantine Staff Enma Bond',
    notableMembers: ['Hiruzen Sarutobi', 'Asuma Sarutobi', 'Konohamaru Sarutobi', 'Sasuke Sarutobi', 'Mirai Sarutobi'],
    crestDescription: 'A dynamic red emblem reflecting agility, fierce loyalty, and mastery of blazing flame jutsu.',
    historyAndLegacy: 'One of the very first clans to ally with the Senju and Uchiha upon the founding of Konohagakure. Known for their fierce dedication to the Will of Fire.',
    signatureTechniques: ['Fire Style: Dragon Fire Technique', 'Fire Style: Ash Pile Burning', 'Reaper Death Seal'],
    image: './images/naruto/leaf-village.png',
    accentColor: '#f97316'
  },
  {
    id: 'otsutsuki',
    name: 'Otsutsuki Clan',
    japaneseName: '大筒木一族',
    symbol: 'Horned Celestial Crescent',
    village: 'Celestial Dimensions & Moon',
    specialty: 'Chakra Originators & Divine Tree Parasites',
    kekkeiGenkaiOrSecret: 'Rinne Sharingan • Karma Mark • Shinjutsu (God Arts)',
    notableMembers: ['Kaguya Otsutsuki', 'Hagoromo Otsutsuki (Sage of Six Paths)', 'Hamura Otsutsuki', 'Isshiki Otsutsuki', 'Momoshiki Otsutsuki'],
    crestDescription: 'A crescent moon bearing celestial horns, representing godhood, planetary harvesting, and immortality.',
    historyAndLegacy: 'An ancient alien species of cosmic parasites who travel across dimensions planting Divine Trees to consume the life energy of entire planets in the form of Chakra Fruits.',
    signatureTechniques: ['Amenominaka (Dimension Shift)', 'All-Killing Ash Bones', 'Expansive Truth-Seeking Orb', 'Daikokuten & Sukunahikona'],
    image: './images/naruto/madara.png',
    accentColor: '#a855f7'
  }
];

// ----------------------------------------------------
// HOKAGE MONUMENT RECORDS
// ----------------------------------------------------
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

// ----------------------------------------------------
// AKATSUKI & KARA MEMBERS
// ----------------------------------------------------
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
  },
  {
    id: 'obito',
    name: 'Obito Uchiha (Tobi)',
    ring: 'Jewel (玉)',
    kanji: '玉',
    finger: 'Left Thumb',
    partner: 'Deidara / Madara',
    bounty: '1,500,000,000 Ryo',
    bingoThreatClass: 'Calamity',
    philosophy: 'I am no one. I don’t want to be anyone. All that matters is completing the Eye of the Moon Plan.',
    signatureJutsu: 'Kamui Intangibility, Izanagi, Ten-Tails Jinchuriki Sword of Nunoboko',
    image: './images/naruto/sasuke-rinnegan.png'
  },
  {
    id: 'kisame',
    name: 'Kisame Hoshigaki',
    ring: 'South (南)',
    kanji: '南',
    finger: 'Left Ring',
    partner: 'Itachi Uchiha',
    bounty: '650,000,000 Ryo',
    bingoThreatClass: 'S-Rank',
    philosophy: 'A shark that eats its own kind cannot die a noble death... Itachi-san, I finally know who I am.',
    signatureJutsu: 'Water Prison Shark Dance, Super Exploding Water Colliding Wave, Samehada Fusion',
    image: './images/naruto/leaf-village.png'
  },
  {
    id: 'konan',
    name: 'Konan (Angel of Amegakure)',
    ring: 'White (白)',
    kanji: '白',
    finger: 'Right Middle',
    partner: 'Nagato (Pain)',
    bounty: '500,000,000 Ryo',
    bingoThreatClass: 'S-Rank',
    philosophy: 'Yahiko and Nagato’s will hasn’t vanished from this world! Naruto, we entrust their dreams to you!',
    signatureJutsu: 'Dance of the Shikigami, Paper Person of God Jutsu (600 Billion Paper Bombs)',
    image: './images/naruto/pain.png'
  },
  {
    id: 'jigen',
    name: 'Jigen / Isshiki Otsutsuki (Kara)',
    ring: 'Roman Numeral IV',
    kanji: '壱',
    finger: 'Leader of Kara',
    partner: 'Amado / Code',
    bounty: '3,000,000,000 Ryo',
    bingoThreatClass: 'Celestial',
    philosophy: 'Inferior creatures should grovel before the divine grandeur of the Otsutsuki.',
    signatureJutsu: 'Sukunahikona (Instant Micro-Shrinking), Daikokuten (Timeless Dimension Cubes)',
    image: './images/naruto/madara.png'
  },
  {
    id: 'code',
    name: 'Code (Kara Inner)',
    ring: 'Roman Numeral VI',
    kanji: '白',
    finger: 'Isshiki’s Devotee',
    partner: 'Eida & Daemon',
    bounty: '2,000,000,000 Ryo',
    bingoThreatClass: 'Celestial',
    philosophy: 'I will devour this planet’s chakra fruit and become an omniscient Otsutsuki God.',
    signatureJutsu: 'Claw Marks (Spatial Highway), White Karma Mark, Claw Grime Army',
    image: './images/naruto/sasuke-rinnegan.png'
  }
];

// ----------------------------------------------------
// 20 SCENE GENERATOR FOR ALL 24 ARCS
// ----------------------------------------------------
const generate20ScenesForArc = (
  arcTitle: string,
  prefix: string,
  baseImg: string,
  keyMoments: { title: string; tag: string; lesson: string; quote: string; speaker: string }[]
): StoryPlotScene[] => {
  return Array.from({ length: 20 }, (_, index) => {
    const sceneNum = index + 1;
    const moment = keyMoments[index % keyMoments.length];

    const badges = ['OPENING CLASH', 'CRITICAL MOMENT', 'TENSE DUEL', 'CHAKRA PEAK', 'CLIMAX'];
    const badge = badges[index % badges.length];

    return {
      id: `${prefix}-scene-${sceneNum}`,
      sceneNumber: sceneNum,
      title: `${sceneNum}. ${moment.title} — ${arcTitle}`,
      tagline: moment.tag,
      storySummary: `During this defining moment in ${arcTitle}, shinobi push past mortal limitations. Scene ${sceneNum} highlights the tactical brilliance, emotional stakes, and unbreakable Will of Fire that shaped the future of the ninja world.`,
      motivationLine: moment.lesson,
      imageUrl: baseImg,
      badge: badge,
      keyDialogue: `"${moment.quote}"`,
      speaker: moment.speaker
    };
  });
};

// ----------------------------------------------------
// THE 24 ARCS IN CHRONOLOGICAL ORDER (3 ERAS)
// ----------------------------------------------------
export const NARUTO_ARCS: NarutoArc[] = [
  // ---------------- PART 1: CLASSIC NARUTO ----------------
  {
    id: 'land-of-waves',
    era: 'part1',
    eraLabel: 'Part 1: Genin Era',
    title: 'Land of Waves Arc',
    japaneseTitle: '波の国編',
    subtitle: 'The Great Naruto Bridge & Demon of the Mist',
    episodes: 'Episodes 1–19',
    antagonists: ['Zabuza Momochi', 'Haku', 'Gato'],
    synopsis: 'Team 7 embarks on their first C-rank mission escorting bridge builder Tazuna to the Land of Waves. Confronted by Rogue Swordsman Zabuza and ice-user Haku, Naruto awakens Nine-Tails chakra and learns the tragic cost of being a shinobi tool.',
    keyClash: 'Team 7 vs Zabuza & Haku (The Bridge of Tears)',
    image: './images/naruto/leaf-village.png',
    storyPlotScenes: generate20ScenesForArc('Land of Waves Arc', 'low', './images/naruto/leaf-village.png', [
      { title: 'The Bell Test with Kakashi', tag: 'Team 7 Formed', lesson: 'Comrades come before rigid regulations; empathy is the ultimate shinobi virtue.', quote: 'Those who abandon their friends are worse than scum!', speaker: 'Kakashi Hatake' },
      { title: 'Demon of the Mist Strikes', tag: 'Zabuza’s Water Prison', lesson: 'Fear can paralyze you, but trusting your team can break through any fortress.', quote: 'Sasuke, let’s do that plan!', speaker: 'Naruto Uzumaki' },
      { title: 'The Demon Wind Shuriken Trick', tag: 'Shadow Shuriken Deception', lesson: 'Brainpower and unorthodox tactics overcome overwhelming raw strength.', quote: 'The real shuriken was hidden in the shadow!', speaker: 'Sasuke Uchiha' },
      { title: 'Tree Climbing Chakra Control', tag: 'Mounting the Forest', lesson: 'Mastering the fundamentals is the only way to endure the storms ahead.', quote: 'Balance the chakra at the sole of your foot!', speaker: 'Kakashi Hatake' },
      { title: 'Encounter with Haku in the Forest', tag: 'The Boy in Kimono', lesson: 'True strength is born only when you have someone precious to protect.', quote: 'When a person has something important to protect, they become truly strong.', speaker: 'Haku' },
      { title: 'The Demonic Ice Mirrors', tag: 'Crystal Prison', lesson: 'True loyalty will step into lethal danger without hesitation.', quote: 'My body moved on its own... idiot.', speaker: 'Sasuke Uchiha' },
      { title: 'Nine-Tails Red Chakra Awakening', tag: 'Feral Vengeance', lesson: 'Harness righteous fury, but never lose your humanity in the beast.', quote: 'I’m gonna kill you!', speaker: 'Naruto Uzumaki' },
      { title: 'Haku’s Final Sacrifice', tag: 'The Human Shield', lesson: 'Unconditional love can make someone willing to die with a smile.', quote: 'Zabuza-san... I have become your tool until the end.', speaker: 'Haku' },
      { title: 'Kakashi’s Lightning Blade Pierces', tag: 'Raikiri Flash', lesson: 'The path of a shinobi is paved with heart-wrenching choices.', quote: 'I will put an end to this.', speaker: 'Kakashi Hatake' },
      { title: 'Naruto’s Words Melt the Demon', tag: 'Tears in the Snow', lesson: 'Even the coldest killer carries a beating human heart.', quote: 'Kid... don’t say another word... Your words cut deeper than any blade.', speaker: 'Zabuza Momochi' },
      { title: 'Zabuza’s Final Charge with Kunai', tag: 'One-Man Army', lesson: 'Die for the things you cherish rather than living as a coward.', quote: 'If possible... I’d like to go to the same place as you, Haku.', speaker: 'Zabuza Momochi' },
      { title: 'Naming the Great Naruto Bridge', tag: 'Dawn of a Legend', lesson: 'A true hero inspires an entire oppressed country to rise up.', quote: 'This bridge connects our village to courage. We shall call it the Great Naruto Bridge!', speaker: 'Tazuna' }
    ])
  },
  {
    id: 'chunin-exams',
    era: 'part1',
    eraLabel: 'Part 1: Genin Era',
    title: 'Chunin Exams Arc',
    japaneseTitle: '中忍試験編',
    subtitle: 'Forest of Death & Preliminary Duels',
    episodes: 'Episodes 20–67',
    antagonists: ['Orochimaru', 'Gaara', 'Sound Genin'],
    synopsis: 'Genin from all five nations assemble in Konoha for the grueling Chunin Exams. Orochimaru infiltrates the Forest of Death, branding Sasuke with the Curse Mark, leading into the unforgettable preliminary battles.',
    keyClash: 'Rock Lee vs Gaara (Dropping the Weights)',
    image: './images/naruto/leaf-village.png',
    storyPlotScenes: generate20ScenesForArc('Chunin Exams Arc', 'ce', './images/naruto/leaf-village.png', [
      { title: 'The Written Test Mind Games', tag: 'Stage 1 Psychological War', lesson: 'Steely nerves under impossible pressure reveal real leadership.', quote: 'I’m not gonna run away! Even if I stay a genin forever, I will become Hokage!', speaker: 'Naruto Uzumaki' },
      { title: 'Forest of Death Infiltration', tag: 'Orochimaru’s Serpent', lesson: 'Facing monstrous predators tests the core of your resolve.', quote: 'You are like a caged bird waiting for the snake.', speaker: 'Orochimaru' },
      { title: 'Sasuke’s Curse Mark Ignition', tag: 'Purple Lightning Terror', lesson: 'Power gained through corruption exacts an agonizing toll on the soul.', quote: 'Which of your arms should I snap first?', speaker: 'Sasuke Uchiha' },
      { title: 'Sakura Cuts Her Hair', tag: 'Resolution of the Cherry Blossom', lesson: 'Shed your vanity and childish illusions to protect those who shield you.', quote: 'I’ve always watched their backs... now it’s my turn to protect them!', speaker: 'Sakura Haruno' },
      { title: 'Rock Lee Drops the Weights', tag: 'The Lotus of the Leaf', lesson: 'Hard work will surpass raw natural genius if you refuse to give up.', quote: 'Guy-sensei, please let me take them off!', speaker: 'Rock Lee' },
      { title: 'The Fifth Gate Open: Hidden Lotus', tag: 'Flesh-Tearing Speed', lesson: 'Ignite your entire youth in a blaze of passion for your ideals.', quote: 'A genius of hard work... show him the power of your youth, Lee!', speaker: 'Might Guy' },
      { title: 'Gaara’s Sand Coffin Crushes', tag: 'Armor of Sand', lesson: 'Enduring agony without love twists the spirit into a monster.', quote: 'Mother... give me blood.', speaker: 'Gaara of the Sand' },
      { title: 'Hinata vs Neji: Gentle Fist Duel', tag: 'Destiny vs Will', lesson: 'No one is chained by fate; your destiny is what you forge with your own fists.', quote: 'I never go back on my word... because that’s my ninja way too!', speaker: 'Hinata Hyuga' },
      { title: 'Naruto Sweeps Neji’s Arrogance', tag: 'The Loser Surpasses Destiny', lesson: 'A so-called failure can beat a genius through unbreakable tenacity.', quote: 'Unlike me, you’re not a failure! Stop blaming your destiny!', speaker: 'Naruto Uzumaki' },
      { title: 'Shikamaru’s 200 IQ Shadow Tactics', tag: 'Strategic Concession', lesson: 'Knowing when to retreat is just as wise as knowing when to strike.', quote: 'What a drag... I forfeit.', speaker: 'Shikamaru Nara' },
      { title: 'Meeting Master Jiraiya at Hot Springs', tag: 'The Toad Sage Appears', lesson: 'Seek unconventional mentors who challenge your boundaries.', quote: 'I am the Toad Sage of Mount Myoboku, Jiraiya the Gallant!', speaker: 'Jiraiya' },
      { title: 'Summoning Chief Gamabunta', tag: 'Chasm of Trust', lesson: 'Leap into the abyss of faith to tap into your deepest dormant reservoir.', quote: 'Hey big toad! You’re my servant from now on, dattebayo!', speaker: 'Naruto Uzumaki' }
    ])
  },
  {
    id: 'konoha-crush',
    era: 'part1',
    eraLabel: 'Part 1: Genin Era',
    title: 'Konoha Crush Arc',
    japaneseTitle: '木ノ葉崩し編',
    subtitle: 'Third Hokage’s Last Stand & Shukaku Unleashed',
    episodes: 'Episodes 68–80',
    antagonists: ['Orochimaru', 'Gaara (One-Tail Shukaku)'],
    synopsis: 'During the tournament finals, the Sand and Sound invade Konohagakure. Orochimaru traps Third Hokage Hiruzen Sarutobi inside a barrier for a duel of former master and student, while Naruto duels Gaara in the forest.',
    keyClash: 'Hiruzen Sarutobi vs Orochimaru & Naruto vs Shukaku',
    image: './images/naruto/leaf-village.png',
    storyPlotScenes: generate20ScenesForArc('Konoha Crush Arc', 'kc', './images/naruto/leaf-village.png', [
      { title: 'Feather Genjutsu Across Arena', tag: 'The Invasion Commences', lesson: 'Constant vigilance guards against surprise assault.', quote: 'Release the Genjutsu! Protect the village!', speaker: 'Kakashi Hatake' },
      { title: 'The Four Violet Flames Barrier', tag: 'Rooftop Deathmatch', lesson: 'When a leader is cornered, they protect their charges with their lives.', quote: 'Orochimaru, it ends here today.', speaker: 'Hiruzen Sarutobi' },
      { title: 'Edo Tensei: Hashirama & Tobirama', tag: 'Past Hokage Reanimated', lesson: 'Facing ghosts of the past demands utmost conviction.', quote: 'Monkey... you have grown old.', speaker: 'Hashirama Senju' },
      { title: 'Enma Adamantine Staff Unleashed', tag: 'Monkey King Synergy', lesson: 'True lifelong comrades fight shoulder-to-shoulder until the grave.', quote: 'Hiruzen, don’t hesitate! Crush him!', speaker: 'Enma' },
      { title: 'Reaper Death Seal Invoked', tag: 'Soul Sacrifice', lesson: 'A true Hokage gives their soul so the next generation may flourish.', quote: 'Where tree leaves dance, one shall find flames. The fire’s shadow will illuminate the village!', speaker: 'Hiruzen Sarutobi' },
      { title: 'Severing Orochimaru’s Arms', tag: 'Stripping the Snake’s Venom', lesson: 'Strip evil of the ability to weave harm, even at the cost of your life.', quote: 'I seal away your ninjutsu! You shall never cast another jutsu again!', speaker: 'Hiruzen Sarutobi' },
      { title: 'Gaara Transforms into Shukaku', tag: 'The Sand Monster Roars', lesson: 'Terror cannot be cured with hatred, only with overwhelming love.', quote: 'I exist only to kill everyone other than myself!', speaker: 'Gaara of the Sand' },
      { title: 'Naruto Headbutts Gaara', tag: 'Gaze of True Understanding', lesson: 'A shared wound of loneliness creates the deepest connection.', quote: 'I know your pain, Gaara... because I was just like you!', speaker: 'Naruto Uzumaki' },
      { title: 'Gamabunta Fox Transformation', tag: 'Claws on the Giant Tanuki', lesson: 'Synergize with allies to match colossal threats.', quote: 'Transform me into something with claws and fangs!', speaker: 'Gamabunta' },
      { title: 'Rain Over the Third Hokage’s Funeral', tag: 'Tears for Hiruzen', lesson: 'The Will of Fire is inherited, never extinguished by death.', quote: 'When a ninja dies, they do not disappear... they live in the hearts of those they protected.', speaker: 'Iruka Umino' }
    ])
  },
  {
    id: 'search-for-tsunade',
    era: 'part1',
    eraLabel: 'Part 1: Genin Era',
    title: 'Search for Tsunade Arc',
    japaneseTitle: '綱手捜索編',
    subtitle: 'The Rasengan & The Legendary Three-Way Deadlock',
    episodes: 'Episodes 81–100',
    antagonists: ['Orochimaru', 'Kabuto Yakushi', 'Itachi & Kisame (Briefly)'],
    synopsis: 'Jiraiya takes Naruto on a journey to find the legendary medical ninja Tsunade to become Fifth Hokage. Along the way, Itachi infiltrates Konoha, and Naruto masters the Rasengan to defeat Kabuto in a colossal three-way summoning deadlock.',
    keyClash: 'Three-Way Deadlock: Jiraiya & Tsunade vs Orochimaru',
    image: './images/naruto/minato.png',
    storyPlotScenes: generate20ScenesForArc('Search for Tsunade Arc', 'sft', './images/naruto/minato.png', [
      { title: 'Itachi and Kisame Infiltrate Konoha', tag: 'Akatsuki Knocks on the Door', lesson: 'The calm before the storm hides the deadliest predators.', quote: 'Foolish little brother... if you wish to kill me, hate me, detest me!', speaker: 'Itachi Uchiha' },
      { title: 'Kakashi Trapped in Tsukuyomi', tag: '72 Hours of Torture', lesson: 'Mental fortitude must guard against psychological annihilation.', quote: 'For the next 72 hours, I will stab you repeatedly.', speaker: 'Itachi Uchiha' },
      { title: 'Guy’s Dynamic Entry Saves Kakashi', tag: 'Fierce Green Beast', lesson: 'Arrive in the nick of time with blazing positivity.', quote: 'Konoha Senpu! Don’t look into his eyes!', speaker: 'Might Guy' },
      { title: 'Water Balloon Rasengan Step 1', tag: 'Rotation Mastered', lesson: 'Master microscopic chaos before shaping outward form.', quote: 'Spin the chakra in multiple directions inside the balloon!', speaker: 'Jiraiya' },
      { title: 'Rubber Ball Burst Step 2', tag: 'Power and Density', lesson: 'Pour unyielding pressure into your craft until it explodes into power.', quote: 'It’s 100 times harder than the water balloon!', speaker: 'Naruto Uzumaki' },
      { title: 'Blowing Up the Balloon Step 3', tag: 'Maintaining the Shell', lesson: 'Keep your boundless energy contained in a stable boundary.', quote: 'Combine rotation and power into a miniature typhoon!', speaker: 'Jiraiya' },
      { title: 'Tsunade Bets the First Hokage’s Necklace', tag: 'One Week Deadline', lesson: 'Bet on the impossible dreams of youth; they will surprise you.', quote: 'If you master that jutsu in three days, this necklace is yours.', speaker: 'Tsunade Senju' },
      { title: 'Naruto Lands the Rasengan on Kabuto', tag: 'The Spiraling Sphere Lands', lesson: 'Hold the hurricane in the palm of your hand through grit.', quote: 'RASENGAN!', speaker: 'Naruto Uzumaki' },
      { title: 'Tsunade Overcomes Her Hemophobia', tag: 'Fifth Hokage Awakens', lesson: 'Overcoming past grief is the only way to lead others.', quote: 'I am the Fifth Hokage of Konohagakure!', speaker: 'Tsunade Senju' },
      { title: 'Summoning Gamabunta, Katsuyu & Manda', tag: 'The Three-Way Deadlock', lesson: 'Colossal forces clash when titans contest the balance of power.', quote: 'Orochimaru, you have brought dishonor to our village!', speaker: 'Tsunade Senju' }
    ])
  },
  {
    id: 'sasuke-recovery',
    era: 'part1',
    eraLabel: 'Part 1: Genin Era',
    title: 'Sasuke Recovery Mission Arc',
    japaneseTitle: 'サスケ奪還編',
    subtitle: 'The Sound Four & The Valley of the End',
    episodes: 'Episodes 107–135',
    antagonists: ['Sound Four (Jirobo, Kidomaru, Sakon/Ukon, Tayuya)', 'Kimimaro', 'Sasuke'],
    synopsis: 'Sasuke abandons Konoha seduced by Orochimaru’s promise of power. Shikamaru leads Choji, Kiba, Neji, and Naruto on an all-or-nothing pursuit, culminating in fateful duels and the legendary clash at the Valley of the End.',
    keyClash: 'One-Tailed Naruto vs Curse Mark Level 2 Sasuke',
    image: './images/naruto/sasuke-rinnegan.png',
    storyPlotScenes: generate20ScenesForArc('Sasuke Recovery Mission Arc', 'srm', './images/naruto/sasuke-rinnegan.png', [
      { title: 'Rooftop Hospital Clash: Rasengan vs Chidori', tag: 'Rivals on the Edge', lesson: 'Ego and rivalry can blind closest brothers without communication.', quote: 'Kakashi arrived just in time to redirect the blast!', speaker: 'Kakashi Hatake' },
      { title: 'Shikamaru Assembles the Genin Squad', tag: 'The Recovery Formation', lesson: 'A true strategist utilizes each teammate’s unique specialty.', quote: 'Sasuke is our comrade. We bring him home, no matter what.', speaker: 'Shikamaru Nara' },
      { title: 'Choji Eats the Red Spinach Pill', tag: 'Butterfly Wings of Loyalty', lesson: 'Never underestimate a friend who fights for your respect.', quote: 'You can take my food, but if you mock my best friend, I’ll kill you!', speaker: 'Choji Akimichi' },
      { title: 'Neji Pierces Kidomaru’s Blind Spot', tag: 'The Bird Escapes its Cage', lesson: 'Sacrifice your flesh to secure certain victory.', quote: 'Naruto freed me from the darkness... now it is my turn to save Sasuke.', speaker: 'Neji Hyuga' },
      { title: 'Kiba and Akamaru: Wolf Fangs', tag: 'Bond of Man and Beast', lesson: 'A bond between man and companion will endure severe blood loss.', quote: 'Gatsuga! We won’t let them pass!', speaker: 'Kiba Inuzuka' },
      { title: 'Sand Siblings Arrive as Allies', tag: 'Redemption of Gaara', lesson: 'Former enemies can become your staunchest shields.', quote: 'We are shinobi of the Sand, allies of the Leaf!', speaker: 'Gaara of the Sand' },
      { title: 'Kimimaro’s Dance of the Clematis', tag: 'Bones of Devotion', lesson: 'Devotion without morality is tragic, yet undeniably formidable.', quote: 'I live only to be Lord Orochimaru’s vessel.', speaker: 'Kimimaro' },
      { title: 'Meeting at the Valley of the End', tag: 'Statues of Hashirama and Madara', lesson: 'Generational destiny repeats until someone breaks the hatred.', quote: 'Naruto, why do you keep chasing me?!', speaker: 'Sasuke Uchiha' },
      { title: 'Chidori vs Rasengan: Crimson & Black', tag: 'The Sphere and the Blade', lesson: 'Friendship that hurts is still real friendship.', quote: 'Because you’re my friend! That’s why I won’t let you go into darkness!', speaker: 'Naruto Uzumaki' },
      { title: 'Sasuke Leaves in the Heavy Rain', tag: 'The Scratched Leaf Headband', lesson: 'Defeat is merely the prologue to a greater vow.', quote: 'I promise... I will bring Sasuke back, dattebayo!', speaker: 'Naruto Uzumaki' }
    ])
  },

  // ---------------- PART 2: NARUTO SHIPPUDEN ----------------
  {
    id: 'kazekage-rescue',
    era: 'shippuden',
    eraLabel: 'Part 2: Shippuden Era',
    title: 'Kazekage Rescue Mission Arc',
    japaneseTitle: '風影奪還編',
    subtitle: 'Akatsuki Strikes & Granny Chiyo’s Sacrifice',
    episodes: 'Shippuden Episodes 1–32',
    antagonists: ['Sasori', 'Deidara'],
    synopsis: 'Three years later, Naruto returns to Konoha taller and stronger. Akatsuki abducts Fifth Kazekage Gaara. Team Kakashi and Team Guy rush to the Sand, teaming up with Elder Chiyo to defeat puppet master Sasori.',
    keyClash: 'Sakura & Granny Chiyo vs Sasori of the Red Sand',
    image: './images/naruto/leaf-village.png',
    storyPlotScenes: generate20ScenesForArc('Kazekage Rescue Arc', 'kr', './images/naruto/leaf-village.png', [
      { title: 'Return of the Orange Hero', tag: 'Konoha Reunited', lesson: 'Growth requires time away from home; return with renewed purpose.', quote: 'The village hasn’t changed a bit! I’m back!', speaker: 'Naruto Uzumaki' },
      { title: 'Gaara Protects the Sand from C3 Bomb', tag: 'Kazekage’s Shield', lesson: 'A true leader shields their entire village even while suffering fatal damage.', quote: 'I will protect my people with all the sand of the desert.', speaker: 'Gaara of the Sand' },
      { title: 'Deidara’s Clay Birds and Abduction', tag: 'Art is an Explosion', lesson: 'Arrogance in art leaves behind catastrophic ruin.', quote: 'Art is a fleeting moment! Art is an explosion! KATSU!', speaker: 'Deidara' },
      { title: 'Sakura Synthesizes the Antidote', tag: 'Medical Genius at Work', lesson: 'Preparation and knowledge turn lethal poisons into salvation.', quote: 'Three vials of antidote prepared. We have three minutes of combat immunity!', speaker: 'Sakura Haruno' },
      { title: 'Sasori’s Hundred Puppets Performance', tag: 'Human Puppetry Terror', lesson: 'Detaching your humanity turns you into an empty wooden shell.', quote: 'I transformed my own body into a puppet decades ago.', speaker: 'Sasori' },
      { title: 'Granny Chiyo’s White Secret: Ten Puppets', tag: 'Chikamatsu Masters', lesson: 'Wisdom of the elders can guide the strength of youth.', quote: 'Sakura, let me control your movements like a thread!', speaker: 'Chiyo' },
      { title: 'Parent Puppets Pierce the Core', tag: 'A Tragic Embrace', lesson: 'Even in absolute cynicism, the craving for parental love remains.', quote: 'In the end, he chose not to dodge his parents’ embrace.', speaker: 'Chiyo' },
      { title: 'Guy’s Morning Peacock (Asakujaku)', tag: 'Fists of Friction Fire', lesson: 'Punch the air so fast it ignites into brilliant peacock flames.', quote: 'Morning Peacock! Burn with the flames of youth!', speaker: 'Might Guy' },
      { title: 'Chiyo’s Reanimation Life Transfer', tag: 'Life for Gaara', lesson: 'The greatest redemption is offering your breath so the future may live.', quote: 'Naruto, change the shinobi world for us...', speaker: 'Chiyo' },
      { title: 'The Fists of Two Jinchuriki Touch', tag: 'Unspoken Brotherhood', lesson: 'Shared sorrow turns former outcasts into universal brothers.', quote: 'Thank you, Naruto.', speaker: 'Gaara of the Sand' }
    ])
  },
  {
    id: 'tenchi-bridge',
    era: 'shippuden',
    eraLabel: 'Part 2: Shippuden Era',
    title: 'Tenchi Bridge Mission Arc',
    japaneseTitle: '天地橋偵察編',
    subtitle: 'The Four-Tails Berserk & Reunion with Sasuke',
    episodes: 'Shippuden Episodes 33–53',
    antagonists: ['Orochimaru', 'Kabuto', 'Sasuke (Rogue)'],
    synopsis: 'Team Kakashi recruits Yamato and Sai to infiltrate Tenchi Bridge. Naruto loses control to the Nine-Tails, unleashing the monstrous Four-Tailed cloak against Orochimaru before confronting a cold, distant Sasuke in his hideout.',
    keyClash: 'Four-Tailed Naruto vs Orochimaru (Triple Rashomon)',
    image: './images/naruto/naruto-sage.png',
    storyPlotScenes: generate20ScenesForArc('Tenchi Bridge Arc', 'tb', './images/naruto/naruto-sage.png', [
      { title: 'Introduction of Sai and Captain Yamato', tag: 'The New Team 7', lesson: 'Building chemistry requires breaking past emotional walls.', quote: 'I have no emotions. I am merely a tool of the Foundation.', speaker: 'Sai' },
      { title: 'Ambush at Tenchi Bridge', tag: 'Kabuto the Double Spy', lesson: 'Treachery hides behind smiling masks of deference.', quote: 'Lord Orochimaru knew your plans all along.', speaker: 'Kabuto Yakushi' },
      { title: 'The Four-Tailed Cloak Emerges', tag: 'Skin Flayed by Hatred', lesson: 'Surrendering to rage destroys your own vessel and harms allies.', quote: 'Give me... your body... kill them all...', speaker: 'Kurama' },
      { title: 'Tailed Beast Bomb vs Triple Rashomon', tag: 'Cataclysmic Firepower', lesson: 'Colossal clashes reshape geography in seconds.', quote: 'Triple Rashomon! Even that barely withstood his blast!', speaker: 'Orochimaru' },
      { title: 'Yamato’s Hokage-Style Wood Seal', tag: 'Suppressing the Beast', lesson: 'Discipline and ancient seals keep primal monsters in check.', quote: 'Hokage-Style: Tenth Edict on Enlightenment! Suppress!', speaker: 'Yamato' },
      { title: 'Sakura Weeps Over Burned Naruto', tag: 'The Pain of Jinchuriki', lesson: 'Witnessing a comrade’s self-destructive agony cuts deeper than blades.', quote: 'Naruto... you did all this just to bring Sasuke back?', speaker: 'Sakura Haruno' },
      { title: 'Infiltrating Orochimaru’s Lair', tag: 'Sai’s True Mission', lesson: 'Human connection can awaken emotions in the most dormant heart.', quote: 'I want to understand bonds... like the one Naruto has with his brother.', speaker: 'Sai' },
      { title: 'Sasuke Standing on the Precipice', tag: 'The Sword of Kusanagi', lesson: 'Vengeance chills the warmest heart into sharp ice.', quote: 'Naruto... you should have spent that time training instead of chasing me.', speaker: 'Sasuke Uchiha' },
      { title: 'Suppressing the Nine-Tails in Naruto’s Mind', tag: 'Sasuke’s Sharingan Eye', lesson: 'The Uchiha eye has ancient dominion over the demon fox.', quote: 'Such ominous chakra... you remind me of Madara Uchiha.', speaker: 'Kurama' },
      { title: 'Sasuke Vanishes in Flames', tag: 'The Chasm Widens', lesson: 'Setbacks only fuel the engine of true persistence.', quote: 'I won’t give up. I will get stronger and save you, Sasuke!', speaker: 'Naruto Uzumaki' }
    ])
  },
  {
    id: 'akatsuki-suppression',
    era: 'shippuden',
    eraLabel: 'Part 2: Shippuden Era',
    title: 'Akatsuki Suppression Arc',
    japaneseTitle: '不死の破壊者・飛段・角都編',
    subtitle: 'Asuma’s Death & Wind Style: Rasenshuriken',
    episodes: 'Shippuden Episodes 72–88',
    antagonists: ['Hidan', 'Kakuzu (Zombie Duo)'],
    synopsis: 'The immortal Akatsuki duo Hidan and Kakuzu massacre the Fire Temple and mortally wound Asuma Sarutobi. Shikamaru executes a brilliant 200 IQ revenge plot, while Naruto debuts his completed Wind Style: Rasenshuriken.',
    keyClash: 'Shikamaru vs Hidan & Naruto vs Kakuzu',
    image: './images/naruto/leaf-village.png',
    storyPlotScenes: generate20ScenesForArc('Akatsuki Suppression Arc', 'as', './images/naruto/leaf-village.png', [
      { title: 'Cutting the Waterfall with Wind Chakra', tag: 'Nature Transformation Training', lesson: 'Divide the stream of your thoughts into razor-sharp focus.', quote: 'Cut the leaf in two! Then cut the entire waterfall!', speaker: 'Kakashi Hatake' },
      { title: 'Asuma’s Final Shogi Lesson', tag: 'The King of Konoha', lesson: 'Protect the unborn future children above all political titles.', quote: 'Shikamaru... the "King" of this village isn’t the Hokage.', speaker: 'Asuma Sarutobi' },
      { title: 'Hidan’s Blood Curse Ritual', tag: 'Curse Technique: Death Possession', lesson: 'Fanatical zealotry blinds the mind to empathy.', quote: 'Praise Lord Jashin! Feel my ecstasy of pain!', speaker: 'Hidan' },
      { title: 'Asuma’s Final Cigarette', tag: 'Smoke in the Rain', lesson: 'A mentor lives forever through the wisdom bequeathed to disciples.', quote: 'Smoke gets in my eyes... Shikamaru, take care of Kurenai and my child.', speaker: 'Asuma Sarutobi' },
      { title: 'Shikamaru’s Vow in Darkness', tag: 'Inheriting the Lighter', lesson: 'Channel paralyzing grief into cold, calculated strategic action.', quote: 'When I smoke this lighter, Asuma-sensei is right here with me.', speaker: 'Shikamaru Nara' },
      { title: 'Kakuzu’s Five Elemental Hearts', tag: 'Stolen Lifespans', lesson: 'Greed that hoards lives is fragile against genuine brotherhood.', quote: 'I have fought the First Hokage and lived! You cannot kill me!', speaker: 'Kakuzu' },
      { title: 'Shikamaru Traps Hidan in the Deer Forest', tag: 'Burying the Immortal', lesson: 'Patience and traps outsmart brute invulnerability.', quote: 'Lord Jashin is not your god anymore. I am your judge.', speaker: 'Shikamaru Nara' },
      { title: 'Detonating the Pit with Asuma’s Lighter', tag: 'Rest in Peace Asuma', lesson: 'Justice fulfilled brings quiet, mournful closure.', quote: 'Rot forever in this sacred forest of the Nara.', speaker: 'Shikamaru Nara' },
      { title: 'Wind Style: Rasenshuriken Unleashed', tag: 'The Screaming Vortex', lesson: 'Achieve what even the Fourth Hokage could not by combining shape and nature.', quote: 'WIND STYLE: RASENSHURIKEN!', speaker: 'Naruto Uzumaki' },
      { title: 'Microscopic Chakra Destruction', tag: 'Cellular Annihilation', lesson: 'Forbidden power demands wisdom in when to deploy it.', quote: 'His jutsu severs chakra channels at the cellular level. Astounding.', speaker: 'Tsunade Senju' }
    ])
  },
  {
    id: 'itachi-pursuit',
    era: 'shippuden',
    eraLabel: 'Part 2: Shippuden Era',
    title: 'Itachi Pursuit Mission Arc',
    japaneseTitle: 'イタチ追跡編',
    subtitle: 'Formation of Hebi & Deidara vs Sasuke',
    episodes: 'Shippuden Episodes 113–126',
    antagonists: ['Deidara', 'Tobi (Obito)'],
    synopsis: 'Sasuke absorbs Orochimaru and forms Team Hebi (Suigetsu, Karin, Jugo) to hunt down Itachi. Deidara ambushes Sasuke in an explosive clash of lightning versus earth, culminating in Deidara’s ultimate suicide blast C0.',
    keyClash: 'Sasuke Uchiha vs Deidara (Lightning vs Earth Art)',
    image: './images/naruto/sasuke-rinnegan.png',
    storyPlotScenes: generate20ScenesForArc('Itachi Pursuit Arc', 'ip', './images/naruto/sasuke-rinnegan.png', [
      { title: 'Sasuke Absorbs Orochimaru', tag: 'The Snake Transcended', lesson: 'Do not let a parasite consume you; turn its power toward your purpose.', quote: 'The fledgling hawk has surpassed the serpent.', speaker: 'Sasuke Uchiha' },
      { title: 'Recruiting Suigetsu, Karin & Jugo', tag: 'Team Hebi Formed', lesson: 'Assemble diverse talents bound by shared utility.', quote: 'Our sole mission is to find Itachi Uchiha.', speaker: 'Sasuke Uchiha' },
      { title: 'Deidara Ambush in the Clearing', tag: 'C1 and C2 Dragon', lesson: 'Underestimating an opponent based on prejudice invites defeat.', quote: 'Those eyes! Those smug Uchiha eyes make me sick!', speaker: 'Deidara' },
      { title: 'Chidori Pierces the Mines', tag: 'Elemental Superiority', lesson: 'Lightning grounds earth; analyze elemental affinities in battle.', quote: 'Your clay bombs are earth style. My lightning neutralizes them.', speaker: 'Sasuke Uchiha' },
      { title: 'Microscopic C4 Karura Inhaled', tag: 'Cellular Disintegration', lesson: 'Invisible threats require immediate self-electrocution to survive.', quote: 'I channeled Chidori through my own body to diffuse your bombs.', speaker: 'Sasuke Uchiha' },
      { title: 'Deidara Unseals the Mouth on His Chest', tag: 'C0 Ultimate Art', lesson: 'Ego-driven martyrdom achieves only empty destruction.', quote: 'My ultimate art! I will become art itself! KATSU!', speaker: 'Deidara' },
      { title: 'Manda Used as a Shield', tag: 'Narrow Escape', lesson: 'Quick thinking saves life when ten kilometers vaporize.', quote: 'Sasuke summoned Manda and slipped into another dimension!', speaker: 'Suigetsu Hozuki' },
      { title: 'Naruto Meets Itachi in the Forest', tag: 'The Crow with Shisui’s Eye', lesson: 'True faith in a brother can be entrusted to a rival.', quote: 'Sasuke is like a brother to me! I will protect him and the Leaf!', speaker: 'Naruto Uzumaki' },
      { title: 'Itachi Implants the Crow in Naruto', tag: 'Contingency for Peace', lesson: 'Plan multiple moves ahead for when your life ends.', quote: 'I gave you a portion of my power... pray you never have to use it.', speaker: 'Itachi Uchiha' },
      { title: 'The Uchiha Hideout Beckons', tag: 'The Final Confrontation Approaches', lesson: 'Destiny waits for no one once the gears are set in motion.', quote: 'Itachi is waiting for me in the sacred grounds.', speaker: 'Sasuke Uchiha' }
    ])
  },
  {
    id: 'tale-of-jiraiya',
    era: 'shippuden',
    eraLabel: 'Part 2: Shippuden Era',
    title: 'Tale of Jiraiya the Gallant Arc',
    japaneseTitle: '自来也豪傑物語編',
    subtitle: 'Infiltration of the Rain & The Six Paths of Pain',
    episodes: 'Shippuden Episodes 127–133',
    antagonists: ['Pain (Six Paths)', 'Konan'],
    synopsis: 'Jiraiya infiltrates the Hidden Rain Village alone to uncover the identity of Akatsuki’s leader. Confronted by his former war orphans Nagato, Yahiko, and Konan, Jiraiya awakens Sage Mode and sacrifices his life to decipher Pain’s secret.',
    keyClash: 'Jiraiya Sage Mode vs Six Paths of Pain',
    image: './images/naruto/naruto-sage.png',
    storyPlotScenes: generate20ScenesForArc('Tale of Jiraiya Arc', 'tj', './images/naruto/naruto-sage.png', [
      { title: 'Tsunade and Jiraiya at Sunset', tag: 'The Bet on Returning Alive', lesson: 'True friendship carries unspoken love that transcends words.', quote: 'Bet that I die, Tsunade. You always lose your bets.', speaker: 'Jiraiya' },
      { title: 'Infiltrating the Iron Pipes of Rain', tag: 'Toad Camouflage Infiltration', lesson: 'Information gathered at the front line decides future wars.', quote: 'The rain detects every intruder... Pain is vigilant.', speaker: 'Jiraiya' },
      { title: 'Konan’s Origami Butterfly Interception', tag: 'Former Students Meet', lesson: 'War twists gentle children into hardened soldiers.', quote: 'Sensei... you should not have come here.', speaker: 'Konan' },
      { title: 'Summoning Pa and Ma (Fukasaku & Shima)', tag: 'Toad Sage Fusion', lesson: 'Combine experience with nature chakra for enlightenment.', quote: 'Let’s sing the toad song and gather natural energy!', speaker: 'Fukasaku' },
      { title: 'Frog Song Genjutsu Traps Three Paths', tag: 'Sonic Dimension Capture', lesson: 'Illusions of sound pierce through even shared visual fields.', quote: 'Stone-sword through the heart! Three paths defeated!', speaker: 'Jiraiya' },
      { title: 'All Six Paths of Pain Appear', tag: 'Gods of the Rain', lesson: 'When faced with divine odds, do not flinch from the truth.', quote: 'We are Pain. We are God.', speaker: 'Pain' },
      { title: 'Jiraiya’s Throat Crushed', tag: 'Mortal Wounds', lesson: 'Even with broken bones, duty keeps the flame alive.', quote: 'I cannot die yet... not until I decipher who he really is!', speaker: 'Jiraiya' },
      { title: 'Carving 9, 31, 8 on Fukasaku’s Back', tag: 'The Dying Code', lesson: 'Knowledge passed down can save the entire world.', quote: 'Pa! Take this code back to Naruto!', speaker: 'Jiraiya' },
      { title: 'Sinking into the Cold Deep Ocean', tag: 'The Gallant Shinobi’s End', lesson: 'A life is measured by the legacy entrusted to the next generation.', quote: 'The sequel shall be titled... The Tale of Naruto Uzumaki. Truly perfect.', speaker: 'Jiraiya' },
      { title: 'Naruto Weeps with Melting Popsicle', tag: 'Grief of the Orphan', lesson: 'Grief shared with a teacher transforms into unbreakable resolve.', quote: 'Jiraiya-sensei will always watch over you, Naruto.', speaker: 'Iruka Umino' }
    ])
  },
  {
    id: 'fated-battle',
    era: 'shippuden',
    eraLabel: 'Part 2: Shippuden Era',
    title: 'Fated Battle Between Brothers Arc',
    japaneseTitle: '運命の兄弟対決編',
    subtitle: 'Sasuke vs Itachi & The Truth Revealed',
    episodes: 'Shippuden Episodes 134–143',
    antagonists: ['Itachi Uchiha', 'Tobi (Obito)'],
    synopsis: 'Sasuke reaches the Uchiha hideout for his lifelong revenge against Itachi. Genjutsu, Amaterasu, and the lightning beast Kirin clash against Itachi’s Susanoo. Itachi seals Orochimaru, taps Sasuke’s forehead, and dies with a loving smile.',
    keyClash: 'Sasuke’s Kirin vs Itachi’s Complete Susanoo',
    image: './images/naruto/itachi.png',
    storyPlotScenes: generate20ScenesForArc('Fated Battle Arc', 'fb', './images/naruto/itachi.png', [
      { title: 'Throne Room Genjutsu Mind Game', tag: 'Illusions of Murder', lesson: 'See through the surface narrative before passing judgment.', quote: 'How well do your Sharingan eyes see through my illusions?', speaker: 'Itachi Uchiha' },
      { title: 'Shurikenjutsu Ricochet Ballet', tag: 'Apex Weapon Mastery', lesson: 'Mastery of basic tools reaches transcendent heights.', quote: 'Every blade countered with pinpoint mathematical precision.', speaker: 'Zetsu' },
      { title: 'Fireball Clash: Goukakyuu Meets Goukakyuu', tag: 'Flames of the Clan', lesson: 'When equals clash, the heat illuminates the sky.', quote: 'Sasuke’s flame is overpowering Itachi’s!', speaker: 'Zetsu' },
      { title: 'Amaterasu Burns the Ceiling', tag: 'Black Flames of the Sun', lesson: 'Never blink before inextinguishable darkness.', quote: 'Amaterasu... black flames that burn for seven days and nights.', speaker: 'Itachi Uchiha' },
      { title: 'Heating the Atmosphere for Thunder', tag: 'Natural Storm Brewed', lesson: 'Harness the raw fury of nature instead of relying only on internal chakra.', quote: 'I didn’t miss. I heated the sky to summon thunder clouds!', speaker: 'Sasuke Uchiha' },
      { title: 'Kirin Strikes with the Speed of Light', tag: 'Roar of the Thunder Beast', lesson: 'Deliver your ultimate attack in one-thousandth of a second.', quote: 'Vanish with the thunderclap! KIRIN!', speaker: 'Sasuke Uchiha' },
      { title: 'Susanoo with Totsuka Blade Rises', tag: 'The Invincible Spirit', lesson: 'A true shield protects those it loves from demonic snakes.', quote: 'If Itachi didn’t have this armor, Kirin would have pulverized him.', speaker: 'Zetsu' },
      { title: 'Orochimaru’s Eight Branches Hydra Sealed', tag: 'Severing the Curse', lesson: 'Purge internal corruption with the sword of sealing.', quote: 'Totsuka Blade! Orochimaru is sealed in an eternal dream!', speaker: 'Itachi Uchiha' },
      { title: 'The Forehead Poke with Bloodied Fingers', tag: 'Forgive Me Sasuke', lesson: 'The deepest love can wear the disguise of ruthless cruelty.', quote: 'Forgive me, Sasuke... this is the last time.', speaker: 'Itachi Uchiha' },
      { title: 'Tobi Reveals the Hidden Truth of Itachi', tag: 'The Tears of the Martyr', lesson: 'History is written by survivors; honor the silent martyrs.', quote: 'Itachi murdered his clan to stop a war... and to save you, Sasuke.', speaker: 'Obito Uchiha' }
    ])
  },
  {
    id: 'pain-assault',
    era: 'shippuden',
    eraLabel: 'Part 2: Shippuden Era',
    title: 'Pain’s Assault on the Leaf Arc',
    japaneseTitle: 'ペイン来襲編',
    subtitle: 'Sage Mode Naruto vs The Six Paths of Pain',
    episodes: 'Shippuden Episodes 152–175',
    antagonists: ['Pain (Deva Path)', 'Konan'],
    synopsis: 'Pain obliterates Konohagakure with a colossal Shinra Tensei. Naruto teleports back in perfect Sage Mode atop Gamabunta, defeats the Six Paths of Pain, transforms into the Eight-Tails after Hinata is struck, and meets Minato before redeeming Nagato.',
    keyClash: 'Sage Naruto vs Deva Path Pain & Chibaku Tensei',
    image: './images/naruto/pain.png',
    storyPlotScenes: generate20ScenesForArc('Pain Assault Arc', 'pa', './images/naruto/pain.png', [
      { title: 'Training with Oil at Mount Myoboku', tag: 'Harmonizing with Nature', lesson: 'Stand perfectly still to absorb the vitality of the world.', quote: 'Become one with nature. Don’t move a muscle!', speaker: 'Fukasaku' },
      { title: 'Kakashi’s Lightning Blade vs Deva Path', tag: 'Protecting the Intel', lesson: 'Fight to your last breath to pass intel to the next generation.', quote: 'Choji, run! Don’t let my death be in vain!', speaker: 'Kakashi Hatake' },
      { title: 'Almighty Push Destroys the Leaf', tag: 'The Crater of Amegakure', lesson: 'Unchecked power leaves desolate wastelands in its wake.', quote: 'Know pain... feel pain... Shinra Tensei!', speaker: 'Pain' },
      { title: 'Sage Mode Naruto Appears in Smoke', tag: 'Hero of the Leaf', lesson: 'Arrive when all hope is lost, standing tall as a beacon.', quote: 'Tsunade-baachan... step back. Go have some tea.', speaker: 'Naruto Uzumaki' },
      { title: 'Throwing the Rasenshuriken', tag: 'Aerial Vortex Strike', lesson: 'Overcome previous flaws by hurling the hurricane through the sky.', quote: 'He threw the Rasenshuriken! It’s expanding in midair!', speaker: 'Gamabunta' },
      { title: 'Deva Path Pins Naruto to the Dirt', tag: 'Cycle of Hatred Philosophy', lesson: 'Questioning justice forces you to seek deeper peace.', quote: 'My justice seeks peace through shared suffering. What is your justice?', speaker: 'Pain' },
      { title: 'Hinata’s Confession and Twin Lion Fists', tag: 'Love Defies the God', lesson: 'Love gives courage to charge fearlessly into certain doom.', quote: 'Because I love you, Naruto-kun! Twin Lion Fists!', speaker: 'Hinata Hyuga' },
      { title: 'Eight-Tailed Beast Eruption', tag: 'Shattering Chibaku Tensei', lesson: 'When despair is absolute, fathers can bridge the rift.', quote: 'Tear off the seal! Give me your body!', speaker: 'Kurama' },
      { title: 'Minato Restores the Eight Trigrams Seal', tag: 'Reunion of Father and Son', lesson: 'A parent’s pride can heal the deepest psychological wounds.', quote: 'I sealed half of Nine-Tails in you because I believed you could master it!', speaker: 'Minato Namikaze' },
      { title: 'Talk No Jutsu in the Paper Tree', tag: 'Nagato’s Rinne Rebirth', lesson: 'True victory is turning an enemy’s heart toward redemption.', quote: 'I believe in the book you and Jiraiya-sensei wrote. Rinnegan: Gedo Art of Rebirth!', speaker: 'Nagato' }
    ])
  },
  {
    id: 'five-kage-summit',
    era: 'shippuden',
    eraLabel: 'Part 2: Shippuden Era',
    title: 'Five Kage Summit Arc',
    japaneseTitle: '五影会談編',
    subtitle: 'Sasuke Infiltrates & Obito Declares World War',
    episodes: 'Shippuden Episodes 197–214',
    antagonists: ['Danzo Shimura', 'Sasuke Uchiha', 'Tobi (Obito)'],
    synopsis: 'The five Kage gather in the neutral Land of Iron to address Akatsuki. Sasuke invades with his awakened Mangekyo Sharingan, duels the Raikage, slays Danzo Shimura, and Obito declares the Fourth Great Ninja War.',
    keyClash: 'Sasuke Uchiha vs Danzo Shimura (Izanagi Counter)',
    image: './images/naruto/sasuke-rinnegan.png',
    storyPlotScenes: generate20ScenesForArc('Five Kage Summit Arc', 'fks', './images/naruto/sasuke-rinnegan.png', [
      { title: 'Naruto Kneels Before the Raikage', tag: 'Begging for Sasuke’s Life', lesson: 'Humility and swallowing pride show true brotherly love.', quote: 'Please... don’t execute Sasuke! The cycle of revenge will never stop!', speaker: 'Naruto Uzumaki' },
      { title: 'The Five Kage Assemble in Iron Country', tag: 'Tense Diplomacy', lesson: 'Distrust among nations breeds the very soil where evil thrives.', quote: 'Peace cannot be built on backstabbing and covert operations.', speaker: 'Gaara' },
      { title: 'Sasuke Clashes with Raikage Ay', tag: 'Guillotine Drop vs Amaterasu', lesson: 'Unchecked hatred welcomes mutilation without blinking.', quote: 'I don’t care if I lose my arm! Raiger Bomb!', speaker: 'Fourth Raikage Ay' },
      { title: 'Mizukage’s Lava and Vapor Trap', tag: 'Melting the Susanoo', lesson: 'Every defense has an elemental vulnerability.', quote: 'Corrosive vapor... melt away the bones of his Susanoo!', speaker: 'Mei Terumi' },
      { title: 'Tsuchikage’s Particle Style: Atomic Dismantling', tag: 'Jinton Obliteration', lesson: 'Subatomic dismantling erases matter from existence.', quote: 'Particle Style: Atomic Dismantling Jutsu! Farewell, boy.', speaker: 'Onoki' },
      { title: 'Tobi’s Declaration of the Fourth Ninja War', tag: 'The Eye of the Moon', lesson: 'Stand united or perish together when extinction arrives.', quote: 'Hand over the Eight-Tails and Nine-Tails, or this means Fourth Shinobi World War!', speaker: 'Obito Uchiha' },
      { title: 'Danzo Unwraps the Arm of Ten Sharingan', tag: 'The Abomination of Izanagi', lesson: 'Hoarding power through theft rots the moral core of a leader.', quote: 'Ten Sharingan infused with Hashirama’s cells... Izanagi active!', speaker: 'Danzo Shimura' },
      { title: 'Sasuke Pierces Danzo through Karin', tag: 'Cold Hearted Vengeance', lesson: 'Obsession with vengeance discards even loyal allies.', quote: 'Karin, don’t move... you’re in the way of his heart.', speaker: 'Sasuke Uchiha' },
      { title: 'Reverse Four Symbols Sealing on the Bridge', tag: 'Danzo’s Final Stand', lesson: 'Even dark schemers believe their twisted deeds protected the village.', quote: 'Hiruzen... you were the leaf in the sun, I was the root in the dark.', speaker: 'Danzo Shimura' },
      { title: 'Naruto and Sasuke Cross Fists Again', tag: 'The Promise to Die Together', lesson: 'True understanding means taking on your friend’s hatred onto yourself.', quote: 'If we fight, we will both die. But I will bear your hatred with you!', speaker: 'Naruto Uzumaki' }
    ])
  },
  {
    id: 'fourth-shinobi-war-climax',
    era: 'shippuden',
    eraLabel: 'Part 2: Shippuden Era',
    title: 'Fourth Shinobi World War: Climax',
    japaneseTitle: '第四次忍界大戦・最高潮編',
    subtitle: 'Madara’s Rebirth & Kurama’s Link Unleashed',
    episodes: 'Shippuden Episodes 215–375',
    antagonists: ['Madara Uchiha', 'Obito Uchiha', 'Kabuto (Edo Tensei)'],
    synopsis: '80,000 Allied Shinobi march against White Zetsu and Edo Tensei legends. Naruto befriends Kurama, unlocking Bijuu Mode. Madara descends upon the Fourth Division, dropping two celestial meteors and demolishing the Five Kage.',
    keyClash: 'Madara Uchiha vs Allied Shinobi & Five Kage',
    image: './images/naruto/madara.png',
    storyPlotScenes: generate20ScenesForArc('Fourth Shinobi War Arc', 'fsw', './images/naruto/madara.png', [
      { title: 'Gaara’s Speech to the Allied Shinobi Forces', tag: '80,000 Fists Raised', lesson: 'Unite past enemies under the banner of common humanity.', quote: 'There are no Sand or Leaf here... only shinobi defending our future!', speaker: 'Gaara' },
      { title: 'Naruto Tames the Nine-Tails at the Waterfall', tag: 'Embracing the Inner Shadow', lesson: 'Self-acceptance disarms internal demons.', quote: 'Thank you for being part of me. You’re not a monster anymore.', speaker: 'Naruto Uzumaki' },
      { title: 'Itachi and Sasuke vs Dragon Sage Kabuto', tag: 'Izanami: Reclaiming Self', lesson: 'Accept who you are; illusions cannot fill an empty identity.', quote: 'Izanami determines fate by forcing you to accept your true self.', speaker: 'Itachi Uchiha' },
      { title: 'Itachi’s Final Farewell to Sasuke', tag: 'I Will Love You Always', lesson: 'Unconditional love liberates the soul from hatred.', quote: 'No matter what you choose to do from here... I will love you always.', speaker: 'Itachi Uchiha' },
      { title: 'Madara Steps off the Coffin', tag: 'The God of Shinobi Returns', lesson: 'Peerless legend commands the battlefield with effortless grace.', quote: 'Do you want these clones to use Susanoo or not?', speaker: 'Madara Uchiha' },
      { title: 'Tengai Shinsei: Double Meteors Fall', tag: 'Extinction from the Heavens', lesson: 'Overwhelming devastation demands miracles to survive.', quote: 'What will you do about the second meteor, Onoki?', speaker: 'Madara Uchiha' },
      { title: 'Kurama Links Fists with Naruto', tag: 'The Golden Avatar Arises', lesson: 'Turn centuries of hatred into incandescent golden fire.', quote: 'Open the gate! Let’s go, Kurama! We are partners from Konoha!', speaker: 'Naruto Uzumaki' },
      { title: 'Kakashi’s Kamui Unmasks Tobi as Obito', tag: 'Ghosts of Kannabi Bridge', lesson: 'Unresolved guilt twists noble dreamers into architects of nightmare.', quote: 'You are... Obito?! How are you alive?!', speaker: 'Kakashi Hatake' },
      { title: 'Ten-Tails Cataclysm Awakened', tag: 'Primal Natural Disaster', lesson: 'Nature’s primordial fury dwarfs mortal arrogance.', quote: 'The Ten-Tails is not a beast... it is the progenitor of the planet.', speaker: 'Madara Uchiha' },
      { title: 'Four Reanimated Hokage Join the Battlefield', tag: 'Generations Unite', lesson: 'All eras stand together to preserve tomorrow.', quote: 'First Hokage Hashirama Senju, taking the field!', speaker: 'Hashirama Senju' }
    ])
  },
  {
    id: 'kaguya-otsutsuki',
    era: 'shippuden',
    eraLabel: 'Part 2: Shippuden Era',
    title: 'Birth of the Ten-Tails’ Jinchuriki & Kaguya',
    japaneseTitle: '六道仙人・大筒木カグヤ編',
    subtitle: 'Six Paths Power & Sealing the Progenitor of Chakra',
    episodes: 'Shippuden Episodes 376–474',
    antagonists: ['Madara (Ten-Tails)', 'Kaguya Otsutsuki', 'Black Zetsu'],
    synopsis: 'Madara awakens the Infinite Tsukuyomi casting the world into eternal sleep. Black Zetsu betrays Madara to resurrect Kaguya Otsutsuki. Blessed with Six Paths power by Hagoromo, Naruto, Sasuke, Sakura, and Kakashi seal the Mother of Chakra.',
    keyClash: 'Team 7 vs Kaguya Otsutsuki (Planetary Six Paths Chibaku Tensei)',
    image: './images/naruto/madara.png',
    storyPlotScenes: generate20ScenesForArc('Kaguya Otsutsuki Arc', 'ko', './images/naruto/madara.png', [
      { title: 'Might Guy Opens the Eighth Gate of Death', tag: 'Night Guy (Yagai)', lesson: 'Sacrifice your life in a blazing crimson dragon of pure determination.', quote: 'I, Madara, declare you the strongest taijutsu user in the world!', speaker: 'Madara Uchiha' },
      { title: 'Meeting Hagoromo Otsutsuki', tag: 'Six Paths Yang & Yin Seals', lesson: 'Generational conflict can be healed by bestowing equal trust to both sons.', quote: 'Naruto, Sasuke... reconcile the feud of Asura and Indra.', speaker: 'Hagoromo Otsutsuki' },
      { title: 'Naruto Kicks Away the Truth-Seeking Orb', tag: 'Six Paths Senjutsu Awakened', lesson: 'Mastery over Yin-Yang creates life from ashes.', quote: 'I feel like I can change everything right now, dattebayo!', speaker: 'Naruto Uzumaki' },
      { title: 'Infinite Tsukuyomi Reflects on the Moon', tag: 'The World Encased in Cocoons', lesson: 'False peace is prison; struggle is necessary for genuine life.', quote: 'Shine down upon all creation! Infinite Tsukuyomi!', speaker: 'Madara Uchiha' },
      { title: 'Black Zetsu Betrays Madara', tag: 'The Mother Awakens', lesson: 'Arrogance blinds even the greatest schemer to betrayal from his own shadow.', quote: 'My will is not yours, Madara. I was born to resurrect Kaguya!', speaker: 'Black Zetsu' },
      { title: 'Kaguya Shinks into Dimensions: Acid and Ice', tag: 'Amenominaka Reality Warp', lesson: 'Adapt instantly when the entire laws of physics shift.', quote: 'This chakra... it is on an entirely different plane than Madara!', speaker: 'Sasuke Uchiha' },
      { title: 'Reverse Harem Jutsu Shocks the Goddess', tag: 'The Number One Unpredictable Ninja', lesson: 'Audacity and humor can crack divine composure.', quote: 'Reverse Harem Jutsu! Take that, God of Chakra!', speaker: 'Naruto Uzumaki' },
      { title: 'Obito Shields Kakashi with Kamui', tag: 'A Shinobi’s True Death', lesson: 'Redemption means dying so your brother can fulfill the future.', quote: 'Kakashi... stay here and become the Sixth Hokage. Protect Naruto.', speaker: 'Obito Uchiha' },
      { title: 'Double Kamui Perfect Susanoo Kakashi', tag: 'Kamui Raikiri Phasing', lesson: 'Shared eyes between brothers create peerless dimensional offense.', quote: 'Kamui Lightning Blade! Slicing through dimensions!', speaker: 'Kakashi Hatake' },
      { title: 'Six Paths: Chibaku Tensei Sealing', tag: 'Sun and Moon Touch the Goddess', lesson: 'Cooperation among mortal comrades can seal celestial deities.', quote: 'Together! SIX PATHS CHIBAKU TENSEI!', speaker: 'Team 7' }
    ])
  },
  {
    id: 'final-battle',
    era: 'shippuden',
    eraLabel: 'Part 2: Shippuden Era',
    title: 'The Final Battle: Naruto vs Sasuke',
    japaneseTitle: 'ナルトとサスケ・終末の谷編',
    subtitle: 'The Climax of Destiny at the Valley of the End',
    episodes: 'Shippuden Episodes 475–479',
    antagonists: ['Sasuke Uchiha (Revolution Mode)'],
    synopsis: 'With Kaguya sealed, Sasuke declares a revolution: execute the Five Kage and control the world through eternal fear. Naruto refuses to let him bear hatred alone, culminating in their cataclysmic clash at the Valley of the End where both lose an arm.',
    keyClash: 'Six Paths Kurama Avatar vs Indra’s Arrow Susanoo',
    image: './images/naruto/sasuke-rinnegan.png',
    storyPlotScenes: generate20ScenesForArc('Final Battle Arc', 'fb2', './images/naruto/sasuke-rinnegan.png', [
      { title: 'Sasuke Traps the Nine Tailed Beasts', tag: 'Chibaku Tensei Planetary Traps', lesson: 'Absolute power without companionship fosters tyrannical delusions.', quote: 'I will sever the past and burn it all away. I am the revolution.', speaker: 'Sasuke Uchiha' },
      { title: 'Arriving at the Ruined Statues', tag: 'Valley of the End Rematch', lesson: 'Where the journey fractured is where it must be healed.', quote: 'We started here, Sasuke. We finish here.', speaker: 'Naruto Uzumaki' },
      { title: 'Taijutsu Brawl in the River', tag: 'Raw Blood and Bruises', lesson: 'Strip away cosmic avatars; the heart speaks through raw exhaustion.', quote: 'Punching each other until their knuckles bleed.', speaker: 'Narrator' },
      { title: 'Indra’s Arrow vs Twin Super Rasenshuriken', tag: 'Apex Firepower Clash', lesson: 'When absolute lightning meets absolute wind, heaven ruptures.', quote: 'Indra’s Arrow! This is my ultimate strike!', speaker: 'Sasuke Uchiha' },
      { title: 'Brawling at Twilight without Chakra', tag: 'Stumbling Fists', lesson: 'True determination crawls forward even when chakra is bone dry.', quote: 'Just die! Why won’t you let me cut you down?!', speaker: 'Sasuke Uchiha' },
      { title: 'Kurama Hands Over His Last Spark', tag: 'The Sleeping Fox', lesson: 'Trust your partner with your very last droplet of life.', quote: 'Naruto... take this chakra and win!', speaker: 'Kurama' },
      { title: 'All Hands Help Shape the Final Rasengan', tag: 'Bonds of a Lifetime', lesson: 'You are never alone; every person who loved you pushes your strike.', quote: 'Jiraiya, Minato, Kushina, Kakashi, Sakura... their hands guide the sphere.', speaker: 'Narrator' },
      { title: 'The Explosive Cross of Rasengan and Chidori', tag: 'Arms Severed in the Flash', lesson: 'The collision that destroys separation for good.', quote: 'CHIDORI! — RASENGAN!', speaker: 'Sasuke & Naruto' },
      { title: 'Lying Side by Side Bleeding on Stone', tag: 'I Acknowledge You', lesson: 'Admitting your friend won is the ultimate victory of brotherhood.', quote: 'I lost, Naruto... If I die, your bonds will finally be unbroken.', speaker: 'Sasuke Uchiha' },
      { title: 'Waving the Rat Hand Sign of Reconciliation', tag: 'Releasing the Infinite Tsukuyomi', lesson: 'Two bloodied arms intertwined release the entire world from nightmare.', quote: 'Shut up, idiot. We’re gonna live and rebuild this world together.', speaker: 'Naruto Uzumaki' }
    ])
  },
  {
    id: 'konoha-hiden-wedding',
    era: 'shippuden',
    eraLabel: 'Part 2: Shippuden Era',
    title: 'Konoha Hiden & The Wedding Epilogue',
    japaneseTitle: '木ノ葉秘伝・祝言日和編',
    subtitle: 'Naruto & Hinata’s Wedding & The New Dawn',
    episodes: 'Shippuden Episodes 480–500',
    antagonists: ['Memories of War', 'Toneri Otsutsuki (The Last)'],
    synopsis: 'As peace flourishes across all five nations, Kakashi and the village secretly organize gifts for Naruto and Hinata’s historic wedding. Naruto asks Iruka to attend as his father, cementing the warmth that saved his life.',
    keyClash: 'Naruto & Hinata’s Red Thread of Fate',
    image: './images/naruto/leaf-village.png',
    storyPlotScenes: generate20ScenesForArc('Konoha Hiden Arc', 'kh', './images/naruto/leaf-village.png', [
      { title: 'Kakashi’s Secret Wedding Mission', tag: 'Mission: Perfect Gift', lesson: 'Show gratitude to those who carried peace on their shoulders.', quote: 'Each shinobi must present a wedding gift worthy of saving the world.', speaker: 'Kakashi Hatake' },
      { title: 'Shikamaru and Temari’s Hot Springs Date', tag: 'Blushing Strategist', lesson: 'Love catches even the most analytical tactical minds off guard.', quote: 'What a drag... but maybe not entirely.', speaker: 'Shikamaru Nara' },
      { title: 'Lee and Guy Running with Dumbbells', tag: 'Youthful Celebrations', lesson: 'Celebrate joy with unfiltered, sweat-drenched passion.', quote: 'Our gift shall be the muscle of youth!', speaker: 'Might Guy' },
      { title: 'Sasuke’s Hawk Carries "Congratulations"', tag: 'Word from the Shadows', lesson: 'A true brother sends congratulations across thousands of miles.', quote: 'A single slip of paper with one word: Congratulations.', speaker: 'Sakura Haruno' },
      { title: 'Naruto Visits Iruka’s Apartment', tag: 'Will You Attend as My Father?', lesson: 'The first person who believed in you is your true family.', quote: 'Iruka-sensei... would you attend my wedding as my father?', speaker: 'Naruto Uzumaki' },
      { title: 'Iruka’s Tears in the Hallway', tag: 'Fatherly Love', lesson: 'Joyful tears wash away years of sorrow and hardship.', quote: 'Of course I will, Naruto! I’m so proud of you!', speaker: 'Iruka Umino' },
      { title: 'Hinata in the White Wedding Kimono', tag: 'Princess of the Leaf', lesson: 'Purity of love shines brighter than any jewel.', quote: 'Naruto-kun... thank you for loving me.', speaker: 'Hinata Hyuga' },
      { title: 'Looking Up at the Hokage Stone Faces', tag: 'A Legacy Fulfilled', lesson: 'Honoring ancestors grounds your steps into tomorrow.', quote: 'Fourth Hokage Minato smiles down from the stone mountain.', speaker: 'Narrator' },
      { title: 'The Wedding Ceremony Under Cherry Blossoms', tag: 'Bonds of Konohagakure', lesson: 'Peace is not the absence of battle; it is the presence of love.', quote: 'Naruto and Hinata walk hand-in-hand beneath the falling petals.', speaker: 'Narrator' },
      { title: 'Naruto’s Hand Grips Hinata’s Hand', tag: 'Into the Bright Future', lesson: 'The Will of Fire continues forever in the hearts of tomorrow.', quote: 'Let’s go, Hinata!', speaker: 'Naruto Uzumaki' }
    ])
  },

  // ---------------- PART 3: BORUTO & TWO BLUE VORTEX ----------------
  {
    id: 'versus-momoshiki',
    era: 'boruto',
    eraLabel: 'Part 3: Boruto Era',
    title: 'Versus Momoshiki Arc',
    japaneseTitle: 'モモシキ襲来編',
    subtitle: 'The Chunin Exams & The Giant Vanishing Rasengan',
    episodes: 'Boruto Episodes 51–66',
    antagonists: ['Momoshiki Otsutsuki', 'Kinshiki Otsutsuki'],
    synopsis: 'Celestial invaders Momoshiki and Kinshiki crash the new era Chunin Exams to harvest Kurama’s chakra. Sasuke and the Four Kage launch a dimension rescue mission, where Boruto inherits Naruto’s gigantic Rasengan to defeat the celestial god.',
    keyClash: 'Naruto & Sasuke Tag Team vs Fused Momoshiki',
    image: './images/naruto/naruto-sage.png',
    storyPlotScenes: generate20ScenesForArc('Versus Momoshiki Arc', 'vm', './images/naruto/naruto-sage.png', [
      { title: 'Boruto’s Shinobi Gauntlet Deception', tag: 'Scientific Ninja Tools', lesson: 'Cheating bypasses the very struggle that builds ninja character.', quote: 'Scientific tools are useful, but rely on your own honed skills.', speaker: 'Naruto Uzumaki' },
      { title: 'Momoshiki Crashes the Arena Stadium', tag: 'Otsutsuki Red Pills', lesson: 'Celestial parasites feast on pills without understanding effort.', quote: 'Inferior creatures! Hand over the chakra of the Nine-Tails!', speaker: 'Momoshiki Otsutsuki' },
      { title: 'Naruto Shields the Entire Stadium', tag: 'Seventh Hokage’s Cape', lesson: 'A true Hokage absorbs the catastrophic blast so children live.', quote: 'Boruto, keep your head down! Kurama, full shield!', speaker: 'Naruto Uzumaki' },
      { title: 'Sasuke Mentors Boruto', tag: 'The Scratched Headband', lesson: 'To be a shinobi is to endure when all seems lost.', quote: 'Your father never gave up, no matter how hopeless it seemed.', speaker: 'Sasuke Uchiha' },
      { title: 'Dimension Gate to the Divine Tree Stump', tag: 'Five Kage Strike Force', lesson: 'March into celestial dimensions without hesitation.', quote: 'Let’s retrieve the Seventh Hokage!', speaker: 'Sasuke Uchiha' },
      { title: 'Naruto and Sasuke Fluid Tag-Team Combat', tag: 'The Apex Shinobi Duo', lesson: 'Decades of brotherhood move as one seamless weapon.', quote: 'Swapping positions with Amenotejikara and Rasengan!', speaker: 'Narrator' },
      { title: 'Majestic Attire Kurama Susanoo Slash', tag: 'Godly Fusion', lesson: 'Golden fox cloaked in purple armor cuts celestial stone.', quote: 'Cut him down!', speaker: 'Naruto & Sasuke' },
      { title: 'Fused Momoshiki Ingests Kinshiki', tag: 'Golden Rinnegan Monster', lesson: 'Desperate parasites sacrifice their own kin for power.', quote: 'Witness the divine majesty of a true Otsutsuki God!', speaker: 'Momoshiki Otsutsuki' },
      { title: 'The Father-Son Giant Rasengan', tag: 'The Weight of Naruto’s Life', lesson: 'Feel the entire history of sacrifices in the weight of the sphere.', quote: 'Look, Boruto... this is what your father had to carry.', speaker: 'Sasuke Uchiha' },
      { title: 'Momoshiki Bestows the Karma Seal', tag: 'Those Blue Eyes Shall Take Everything', lesson: 'Celestial curses plant seeds in the most shining victories.', quote: 'Those blue eyes of yours will one day take everything from you, boy.', speaker: 'Momoshiki Otsutsuki' }
    ])
  },
  {
    id: 'mujina-bandits',
    era: 'boruto',
    eraLabel: 'Part 3: Boruto Era',
    title: 'Mujina Bandits Arc',
    japaneseTitle: '貉強盗団編',
    subtitle: 'Hozuki Castle Infiltration & Corpse Clone Jutsu',
    episodes: 'Boruto Episodes 141–151',
    antagonists: ['Shojoki (Corpse Clone)'],
    synopsis: 'Team 7 infiltrates the notorious Hozuki Castle blood prison to protect an ex-gang member. They confront Shojoki, who devours human brains to steal their appearances and memories, uncovering the existence of the shadow organization Kara.',
    keyClash: 'Boruto Uzumaki vs Shojoki of the Mujina Bandits',
    image: './images/naruto/leaf-village.png',
    storyPlotScenes: generate20ScenesForArc('Mujina Bandits Arc', 'mb', './images/naruto/leaf-village.png', [
      { title: 'Infiltrating Hozuki Castle Blood Prison', tag: 'Prison Undercover', lesson: 'Gather intelligence beneath the radar of strict surveillance.', quote: 'Don’t blow our cover, Team 7.', speaker: 'Sarada Uchiha' },
      { title: 'Fire Style: Heavenly Prison Seal', tag: 'Sealed Chakra Chains', lesson: 'Surviving without chakra tests basic physical instincts.', quote: 'The seal ignites if you try to mold chakra.', speaker: 'Warden Mujo' },
      { title: 'Protecting Kokuri the Defector', tag: 'The Target of Revenge', lesson: 'Defectors who repent deserve a chance at honest life.', quote: 'I stole money, but I won’t let them kill innocent people.', speaker: 'Kokuri' },
      { title: 'Escape Across the Boiling Water Moat', tag: 'Midnight Flight', lesson: 'Coordinate precise timings to avoid boiling ocean whirlpools.', quote: 'Wait for the current to drop before jumping!', speaker: 'Mitsuki' },
      { title: 'Shojoki Reveals Corpse Clone Jutsu', tag: 'Consuming Brains for Memory', lesson: 'Cannibalistic techniques represent the darkest underbelly of crime.', quote: 'I eat your brains while you’re alive to steal everything you know!', speaker: 'Shojoki' },
      { title: 'Boruto’s Wind Style Gale Palm Speed', tag: 'High Velocity Strike', lesson: 'Use wind chakra as a propulsion rocket.', quote: 'Wind Style: Gale Palm!', speaker: 'Boruto Uzumaki' },
      { title: 'The Vanishing Rasengan Pierces Defense', tag: 'Invisible Trajectory', lesson: 'A weapon unseen strikes through impenetrable shields.', quote: 'Where did the jutsu go?! It hit me out of nowhere!', speaker: 'Shojoki' },
      { title: 'Karma Mark Pulsates on Boruto’s Palm', tag: 'Black Geometric Awakening', lesson: 'Alien artifacts react in moments of desperate adrenaline.', quote: 'My hand... what is this black pattern spreading on my skin?', speaker: 'Boruto Uzumaki' },
      { title: 'Shojoki Mentions the Secret Group: Kara', tag: 'Whispers of Kara', lesson: 'Pulling on a small thread uncovers a colossal hidden spider.', quote: 'There is a group far more terrifying than us... they call themselves Kara!', speaker: 'Shojoki' },
      { title: 'Sasuke and Sai Interrogate the Prisoner', tag: 'Investigating the Underworld', lesson: 'Stay ahead of underground organizations before they strike.', quote: 'Kara... we must investigate this organization immediately.', speaker: 'Sasuke Uchiha' }
    ])
  },
  {
    id: 'vessel-ao',
    era: 'boruto',
    eraLabel: 'Part 3: Boruto Era',
    title: 'Ao & The Vessel Arc',
    japaneseTitle: '器・青編',
    subtitle: 'Fallen War Hero & The Discovery of Kawaki',
    episodes: 'Boruto Episodes 178–187',
    antagonists: ['Ao (Cyborg Assassin)', 'Koji Kashin (Infiltration)'],
    synopsis: 'A Kara transport blimp crashes containing the "Vessel". Team 7 investigates and confronts Ao, former Mist hero now rebuilt as a Kara cybernetic killer. Boruto uses ninja strategy over raw technology, discovering the unconscious boy Kawaki.',
    keyClash: 'Boruto Uzumaki vs Ao & The Trigram Drones',
    image: './images/naruto/minato.png',
    storyPlotScenes: generate20ScenesForArc('Ao & The Vessel Arc', 'ao', './images/naruto/minato.png', [
      { title: 'The Memorial Service for War Dead', tag: 'Mourning the Ino-Shika-Cho Fathers', lesson: 'Never forget the sacrifices of those who fell at headquarters.', quote: 'Shikaku and Inoichi died so we could win that war.', speaker: 'Shikamaru Nara' },
      { title: 'The Airship Crash in the Fire Country', tag: 'Lost Cargo of Kara', lesson: 'A crashed vessel signals danger on the horizon.', quote: 'The transport airship went down. The Vessel has escaped.', speaker: 'Jigen' },
      { title: 'Meeting the Cyborg War Hero Ao', tag: 'Man Turned Machine', lesson: 'Losing your purpose can make you a tool for villainy.', quote: 'I am no longer a shinobi... I am merely a weapon for Kara.', speaker: 'Ao' },
      { title: 'Mugino’s Selfless Sacrificial Cave-In', tag: 'Protecting the Next Generation', lesson: 'Die holding down the threat so teammates can escape.', quote: 'Konohamaru! Take the kids and get out of here!', speaker: 'Mugino' },
      { title: 'Chakra Absorbing Gauntlet vs Ninja Tools', tag: 'Battle of Innovations', lesson: 'Technology is only as good as the mind that directs it.', quote: 'You rely too much on tools, old man!', speaker: 'Boruto Uzumaki' },
      { title: 'Trigram Mirror Drones Bombardment', tag: 'Laser Storm', lesson: 'Predict automated trajectories to find the blind spot.', quote: 'Drones fire laser bursts with automated homing!', speaker: 'Ao' },
      { title: 'Boruto Feints with Shadow Clone Blade', tag: 'Ninja Ingenuity Triumphs', lesson: 'Tricking the opponent’s eyes is the eternal foundation of a shinobi.', quote: 'You called yourself a weapon, but you’re still a human being!', speaker: 'Boruto Uzumaki' },
      { title: 'Koji Kashin Summons the Boiler Toad', tag: 'The Masked Infiltrator', lesson: 'Familiar techniques from a stranger spark deep mysteries.', quote: 'True Flames of Samadhi... they cannot be extinguished by water.', speaker: 'Koji Kashin' },
      { title: 'Ao Pushes Boruto Away from the Flames', tag: 'A Shinobi’s Final Act', lesson: 'The dying spark of a hero’s soul reignites when protecting youth.', quote: 'Boruto... you reminded me of who I used to be.', speaker: 'Ao' },
      { title: 'Finding the Boy with Karma in the Crater', tag: 'The Vessel Awoken', lesson: 'A wounded animal lashes out until met with genuine kindness.', quote: 'Who are you people?! Stay back or I’ll blow you to pieces!', speaker: 'Kawaki' }
    ])
  },
  {
    id: 'kawaki-kara-clash',
    era: 'boruto',
    eraLabel: 'Part 3: Boruto Era',
    title: 'Kawaki Arc: Kara Clash & Isshiki',
    japaneseTitle: 'カワキ編・大筒木イッシキ編',
    subtitle: 'Baryon Mode & The Ultimate Kurama Sacrifice',
    episodes: 'Boruto Episodes 188–220',
    antagonists: ['Jigen', 'Isshiki Otsutsuki', 'Boro'],
    synopsis: 'Naruto brings Kawaki into his home as an adoptive son. When Kara leader Jigen invades, Naruto and Sasuke fight in another dimension. Isshiki reincarnates, forcing Naruto to unleash the forbidden Baryon Mode at the cost of Kurama’s life.',
    keyClash: 'Baryon Mode Naruto vs Isshiki Otsutsuki',
    image: './images/naruto/naruto-sage.png',
    storyPlotScenes: generate20ScenesForArc('Kawaki Arc: Kara Clash', 'kac', './images/naruto/naruto-sage.png', [
      { title: 'Kawaki Breaks the Flower Vase', tag: 'A Sharded Heart', lesson: 'Patience and gentle warmth repair the most shattered trauma.', quote: 'You can stay in my house, Kawaki. You’re safe here.', speaker: 'Naruto Uzumaki' },
      { title: 'Training with Shadow Clones and Karma', tag: 'Brothers in Resonance', lesson: 'Resonance between identical curses can become mutual strength.', quote: 'Our Karma react to each other! Let’s practice, Boruto.', speaker: 'Kawaki' },
      { title: 'Delta Attacks the Leaf Village Suburbs', tag: 'Scientific Ninja Eyes', lesson: 'Stand between cybernetic lasers and your innocent children.', quote: 'I am the Seventh Hokage! You don’t touch my kids!', speaker: 'Naruto Uzumaki' },
      { title: 'Super-Huge Rasengan Overloads Delta', tag: 'Chakra Tank Capacity', lesson: 'Overwhelm absorption tech with limitless natural stamina.', quote: 'You absorb chakra? Let’s see you absorb all of this!', speaker: 'Naruto Uzumaki' },
      { title: 'Jigen Warps into the Uzumaki Living Room', tag: 'Kara Leader Invades', lesson: 'When domestic peace is invaded, take the battlefield elsewhere.', quote: 'Pardon the intrusion, Lord Seventh.', speaker: 'Jigen' },
      { title: 'Naruto Sealed in the Giant Golden Kettle', tag: 'Dimension Prison', lesson: 'Trust that your children and disciples will launch a rescue.', quote: 'Sasuke, escape and regroup! Don’t let both of us get captured!', speaker: 'Naruto Uzumaki' },
      { title: 'Team 7 and Kawaki vs Boro', tag: 'Chidori Shatters the Core', lesson: 'Next generation synergy overcomes regenerative monstrosities.', quote: 'Sarada’s Chidori pierced Boro’s regenerative core!', speaker: 'Kawaki' },
      { title: 'Isshiki Otsutsuki Awakens Fully', tag: 'Sukunahikona and Daikokuten', lesson: 'Facing god-tier shrink techniques requires sacrificing everything.', quote: 'Inferior vessels... you have only minutes left to live.', speaker: 'Isshiki Otsutsuki' },
      { title: 'Naruto Activates Baryon Mode', tag: 'Nuclear Fusion of Chakra', lesson: 'Burn your very lifespan like a star to protect what matters.', quote: 'Kurama... is this the ultimate mode? Let’s do it!', speaker: 'Naruto Uzumaki' },
      { title: 'Kurama’s Soul Fades into the Wind', tag: 'Farewell My Old Friend', lesson: 'The most painful sacrifice is losing the companion who lived in your soul.', quote: 'Have a good life, Naruto... don’t do anything reckless without me.', speaker: 'Kurama' }
    ])
  },
  {
    id: 'codes-assault',
    era: 'boruto',
    eraLabel: 'Part 3: Boruto Era',
    title: 'Code’s Assault Arc',
    japaneseTitle: 'コード強襲編',
    subtitle: 'The White Karma & Eida’s All-Seeing Eyes',
    episodes: 'Boruto Episodes 287–293',
    antagonists: ['Code', 'Eida', 'Daemon'],
    synopsis: 'Code, the fanatical devotee of Isshiki bearing the White Karma, awakens cybernetic cyborgs Eida and Daemon. Code infiltrates Konoha to sacrifice Kawaki or Boruto to the Ten-Tails, resulting in Momoshiki taking over Boruto’s body in a fatal duel.',
    keyClash: 'Boruto (Borushiki) vs Kawaki (Restored Karma)',
    image: './images/naruto/sasuke-rinnegan.png',
    storyPlotScenes: generate20ScenesForArc('Code’s Assault Arc', 'ca', './images/naruto/sasuke-rinnegan.png', [
      { title: 'Code Awakes Eida from Cryostasis', tag: 'Senrigan: All-Seeing Vision', lesson: 'Information omniscience tilts the playing field instantly.', quote: 'I can see everything happening anywhere in the world right now.', speaker: 'Eida' },
      { title: 'Daemon’s Absolute Reflection Art', tag: 'Intent Reflects Back', lesson: 'Hostility directed at mirrors only crushes the attacker.', quote: 'Any killing intent you direct at me reflects onto your own body!', speaker: 'Daemon' },
      { title: 'Code’s Black Claw Marks Across Trees', tag: 'Spatial Highway', lesson: 'Anticipate teleportation traps scattered across terrain.', quote: 'Code can step out of any claw mark anywhere on earth.', speaker: 'Amado' },
      { title: 'Boruto Takes the Byakugan Pills', tag: 'Suppressing the Alien', lesson: 'Experimental drugs carry unknown physical side effects.', quote: 'These pills might slow down Momoshiki’s extraction.', speaker: 'Amado' },
      { title: 'Kawaki Escapes Konoha’s Sensory Barrier', tag: 'Erasing Chakra Signature', lesson: 'Mask your aura to protect your beloved family alone.', quote: 'I will eliminate anyone who threatens Lord Seventh myself.', speaker: 'Kawaki' },
      { title: 'Momoshiki Takes Control of Boruto', tag: 'The Horn of Borushiki', lesson: 'The alien parasite strikes when the host’s vitality drops.', quote: 'Out of the way, inferior creature! I will deal with Code myself!', speaker: 'Momoshiki' },
      { title: 'Kawaki Restores Isshiki’s Karma Weapons', tag: 'Daikokuten Cubes Descend', lesson: 'Embracing dark tools for noble protection walks a razor-thin line.', quote: 'I will protect Lord Seventh... even if I have to become a monster.', speaker: 'Kawaki' },
      { title: 'Boruto Reclaims Consciousness', tag: 'Kill Me, Brother', lesson: 'A true shinobi chooses self-sacrifice before harming comrades.', quote: 'Kawaki... do it now while I’m holding Momoshiki back!', speaker: 'Boruto Uzumaki' },
      { title: 'Kawaki’s Fist Pierces Boruto’s Chest', tag: 'The Tragic Strike', lesson: 'Extreme decisions leave irrecoverable scars on the soul.', quote: 'Boruto collapses in the forest with a shattered heart.', speaker: 'Narrator' },
      { title: 'Momoshiki Sacrifices DNA to Resurrect Boruto', tag: '100% Otsutsuki Complete', lesson: 'Symbiosis ensures survival, but seals genetic transformation.', quote: 'I used my remaining data to repair your organs... you are now a pure Otsutsuki.', speaker: 'Momoshiki' }
    ])
  },
  {
    id: 'prophecy-omnipotence',
    era: 'boruto',
    eraLabel: 'Part 3: Boruto Era',
    title: 'Prophecy & Omnipotence Arc',
    japaneseTitle: '予言・全能編',
    subtitle: 'The World Inverted & Boruto Becomes the Outcast',
    episodes: 'Boruto Part 1 Climax',
    antagonists: ['Kawaki (Rogue Protector)', 'Eida (Omnipotence)'],
    synopsis: 'Fearing Otsutsuki threats against Naruto, Kawaki seals Naruto and Hinata inside the timeless Daikokuten dimension. When hunted, Kawaki compels Eida to cast the Shinjutsu "Omnipotence", rewriting human memories: Kawaki becomes Naruto’s beloved son, and Boruto becomes the framed traitor.',
    keyClash: 'Kawaki Seals Naruto & Eida Rewrites Reality',
    image: './images/naruto/leaf-village.png',
    storyPlotScenes: generate20ScenesForArc('Prophecy & Omnipotence Arc', 'po', './images/naruto/leaf-village.png', [
      { title: 'Kawaki Traps Naruto and Hinata in Daikokuten', tag: 'The Timeless Prison', lesson: 'Misguided love can commit monstrous acts in the name of protection.', quote: 'I will kill every Otsutsuki... and when it’s over, you can kill me, Lord Seventh.', speaker: 'Kawaki' },
      { title: 'Sasuke and the Shinobi Detect Naruto’s Disappearance', tag: 'Konoha on Red Alert', lesson: 'A leader’s sudden void plunges nations into chaos.', quote: 'The Seventh Hokage’s chakra has completely vanished from the village!', speaker: 'Ino Yamanaka' },
      { title: 'Kawaki Attacks Sarada: The Scar Across the Eye', tag: 'Protecting the Uchiha', lesson: 'Shield your comrades even if it costs your right eye.', quote: 'Boruto jumped in to take Kawaki’s blade across his right eye!', speaker: 'Narrator' },
      { title: 'Sarada Awakens the Mangekyo Sharingan', tag: 'Sun-Burst Eyes of Sorrow', lesson: 'True love and agony can awaken divine sight for protection.', quote: 'Papa, please! You must save Boruto! He isn’t the killer!', speaker: 'Sarada Uchiha' },
      { title: 'Eida Unleashes the Divine Art: Omnipotence', tag: 'The World Swapped in an Instant', lesson: 'Reality itself can be rewritten if god-tier shinjutsu is unleashed.', quote: 'Omnipotence... the absolute will that reshapes reality to desire.', speaker: 'Momoshiki' },
      { title: 'The Entire World Forgets Boruto', tag: 'The Framed Traitor', lesson: 'Waking up to find every friend now hates you tests mortal sanity.', quote: 'Why is everyone looking at me like I’m a monster?!', speaker: 'Boruto Uzumaki' },
      { title: 'Kawaki Takes Boruto’s Place as Hokage’s Son', tag: 'The New Prince of Konoha', lesson: 'Living a borrowed life builds an unbearable hollow identity.', quote: 'I am Kawaki Uzumaki, son of the Seventh Hokage.', speaker: 'Kawaki' },
      { title: 'Sasuke Trust His Daughter Over His Own Memories', tag: 'A Father’s Unshakable Faith', lesson: 'Trust the love of your daughter even when your own mind lies.', quote: 'My memories tell me you’re an enemy, Boruto... but my daughter’s tears tell me otherwise.', speaker: 'Sasuke Uchiha' },
      { title: 'Sasuke Takes Boruto into Exile', tag: 'Fugitives in the Wilderness', lesson: 'True mentorship stands beside the outcast against the entire world.', quote: 'Let’s go, Boruto. I will train you to survive this world.', speaker: 'Sasuke Uchiha' },
      { title: 'Boruto Ties Sasuke’s Headband', tag: 'I Am Still a Shinobi', lesson: 'No matter what the world believes, your ninja way remains unbroken.', quote: 'I’m my father’s son... and I will never give up on Kawaki! That is my ninja way!', speaker: 'Boruto Uzumaki' }
    ])
  },
  {
    id: 'two-blue-vortex-return',
    era: 'boruto',
    eraLabel: 'Part 3: Boruto Era',
    title: 'Two Blue Vortex: Boruto’s Return',
    japaneseTitle: 'BORUTO -TWO BLUE VORTEX- 帰還編',
    subtitle: 'Rasengan Uzuhiko & The Divine Tree Clones (Shinju)',
    episodes: 'Two Blue Vortex Chapters 1–15+',
    antagonists: ['Code', 'The Shinju (Jura, Hidari, Matsuri, Bug)'],
    synopsis: 'Three years into exile, Boruto returns to Konoha cloaked in black, wielding Sasuke’s sword. Code attacks with thousands of Claw Grimes, but Boruto unleashes the planet’s centrifugal force through Rasengan Uzuhiko before facing sentient Divine Tree clones (Shinju).',
    keyClash: 'Boruto Uzumaki vs Code & Jura (Rasengan Uzuhiko)',
    image: './images/naruto/minato.png',
    storyPlotScenes: generate20ScenesForArc('Two Blue Vortex: Return Arc', 'tbv', './images/naruto/minato.png', [
      { title: 'Code’s Claw Grimes Swarm Konohagakure', tag: 'Army of the Ten-Tails', lesson: 'Disasters strike precisely when peace feels routine.', quote: 'Thousands of claw Grimes are pouring from every alley!', speaker: 'Sarada Uchiha' },
      { title: 'Boruto Drops from the Sky onto Code’s Face', tag: 'The Return of the Blue Vortex', lesson: 'Arrive in absolute calm when the battlefield is in flames.', quote: 'Step off my village, Code. Or this is your grave.', speaker: 'Boruto Uzumaki' },
      { title: 'Wielding Sasuke’s Kusanagi Blade', tag: 'Inherited Swordsmanship', lesson: 'Carry the sword of your master with pristine precision.', quote: 'His stance... it’s identical to Lord Sasuke’s.', speaker: 'Sarada Uchiha' },
      { title: 'Flying Thunder God (Hiraishin) Deployed', tag: 'Grandfather’s Spacetime Technique', lesson: 'Revive lost legendary jutsu with modern calculated mastery.', quote: 'He used the Fourth Hokage’s Flying Thunder God!', speaker: 'Shikadai Nara' },
      { title: 'Rasengan Uzuhiko: Planetary Rotation', tag: 'Centrifugal Force of Earth', lesson: 'Harness the permanent spinning momentum of the earth itself.', quote: 'This isn’t my chakra... this is the rotation of the planet itself. You cannot stop it.', speaker: 'Boruto Uzumaki' },
      { title: 'Code Collapses into Permanent Vertigo', tag: 'Vibrations of the Globe', lesson: 'Mortal arrogance crumbles against the physics of the cosmos.', quote: 'My body... the world won’t stop spinning!', speaker: 'Code' },
      { title: 'The Sentient Divine Trees Awaken (Shinju)', tag: 'Jura, Hidari, Matsuri & Bug', lesson: 'Evolution of monsters breeds philosophical existential dread.', quote: 'We are the Shinju. We seek knowledge by consuming our targets.', speaker: 'Jura' },
      { title: 'Sasuke Turned into a Divine Tree', tag: 'The Thorn Soul Bulb', lesson: 'Sacrifice your flesh to buy years of survival for your student.', quote: 'Boruto... take my sword. Protect Sarada and the future.', speaker: 'Sasuke Uchiha' },
      { title: 'Jura Fires the Bijuu Bomb from his Eye', tag: 'Divine Tree Destroyer', lesson: 'Sentient trees fire Tailed Beast bombs with pinpoint microscopic precision.', quote: 'Let us see if the Seventh Hokage’s chakra resides within you.', speaker: 'Jura' },
      { title: 'Boruto and Kashin Koji’s Hidden Alliance', tag: 'Prescience & Ten Directions', lesson: 'Combine prophetic foresight with calculated counterstrikes to rewrite fate.', quote: 'We have seen every timeline, Boruto. Now we execute the winning one.', speaker: 'Kashin Koji' }
    ])
  }
];

// ----------------------------------------------------
// JUTSU & DOJUTSU COMPENDIUM
// ----------------------------------------------------
export const JUTSU_DOJUTSU: JutsuDojutsu[] = [
  {
    id: 'jutsu-sharingan',
    name: 'Eternal Mangekyo Sharingan',
    japaneseName: '永遠の万華鏡写輪眼',
    category: 'Dojutsu',
    rank: 'Kekkei Mora',
    user: 'Sasuke Uchiha & Madara Uchiha',
    description: 'The supreme evolution of the Uchiha ocular jutsu, achieved by transplanting a close blood relative’s Mangekyo Sharingan.',
    effect: 'Completely eliminates the blindness side-effect of standard Mangekyo, allowing perpetual use of Complete Body Susanoo, Amaterasu, and precognitive battle tracking.'
  },
  {
    id: 'jutsu-rinnegan',
    name: 'Six Paths Rinnegan',
    japaneseName: '輪廻眼',
    category: 'Dojutsu',
    rank: 'Kekkei Mora',
    user: 'Nagato (Pain), Madara Uchiha, Sasuke Uchiha, Hagoromo Otsutsuki',
    description: 'The most sublime of the Three Great Dojutsu, possessing the powers of divine creation and cosmic destruction.',
    effect: 'Grants control over all five basic chakra natures, the Six Paths techniques (Deva, Asura, Human, Animal, Preta, Naraka), planetary gravity, and spacetime shifts.'
  },
  {
    id: 'jutsu-rasenshuriken',
    name: 'Wind Style: Rasenshuriken',
    japaneseName: '風遁・螺旋手裏剣',
    category: 'Ninjutsu',
    rank: 'S-Rank',
    user: 'Naruto Uzumaki',
    description: 'An S-Rank forbidden jutsu created by infusing Wind Nature transformation into the microscopic spinning spheres of the Rasengan.',
    effect: 'Produces millions of microscopic wind blades that sever the target’s chakra circulatory network at a cellular level, rendering physical regeneration impossible.'
  },
  {
    id: 'jutsu-ftg',
    name: 'Flying Thunder God (Hiraishin)',
    japaneseName: '飛雷神の術',
    category: 'Ninjutsu',
    rank: 'S-Rank',
    user: 'Tobirama Senju, Minato Namikaze, Boruto Uzumaki',
    description: 'A revolutionary spacetime ninjutsu that teleports the user instantaneously to any formula-marked location across dimensions.',
    effect: 'Bypasses standard speed and barrier restrictions, enabling instantaneous strikes and redirection of massive Tailed Beast Bombs.'
  },
  {
    id: 'jutsu-baryon',
    name: 'Baryon Mode',
    japaneseName: '重粒子モード',
    category: 'Senjutsu',
    rank: 'Forbidden Kinjutsu',
    user: 'Naruto Uzumaki & Kurama',
    description: 'The ultimate form of Jinchuriki evolution, functioning like nuclear fusion where Naruto and Kurama’s chakras are consumed as raw fuel.',
    effect: 'Bestows reflexes and power that completely outclassed Isshiki Otsutsuki, shaving away the target’s lifespan with every direct strike at the cost of Kurama’s life.'
  },
  {
    id: 'jutsu-kamui',
    name: 'Kamui (Space-Time Dimensional Rift)',
    japaneseName: '神威',
    category: 'Dojutsu',
    rank: 'S-Rank',
    user: 'Obito Uchiha & Kakashi Hatake',
    description: 'A unique Mangekyo Sharingan dojutsu that connects the user’s physical body to an isolated, personal pocket dimension.',
    effect: 'Permits complete physical intangibility by phasing body parts into the dimension, or long-range spatial implosions that tear matter apart.'
  }
];

// ----------------------------------------------------
// POPULAR SHINOBI QUOTATIONS
// ----------------------------------------------------
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
  },
  {
    id: 'q-kakashi',
    speaker: 'Kakashi Hatake',
    title: 'Sixth Hokage',
    quote: 'In the ninja world, those who break the rules are scum, that’s true. But those who abandon their friends are worse than scum!',
    context: 'Teaching Team 7 during the bell test in the training grounds.',
    tagline: 'The Moral Anchor of Team 7',
    image: './images/naruto/kakashi.png',
    accentColor: '#0ea5e9'
  },
  {
    id: 'q-madara',
    speaker: 'Madara Uchiha',
    title: 'Ghost of the Uchiha',
    quote: 'Wake up to reality! Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that only pain, suffering and futility exist.',
    context: 'Speaking to Obito in the underground cavern of the Gedo Statue.',
    tagline: 'Architect of the Eye of the Moon',
    image: './images/naruto/madara.png',
    accentColor: '#7c3aed'
  }
];

// ----------------------------------------------------
// LEGENDARY SHINOBI WEAPONS
// ----------------------------------------------------
export const SHINOBI_WEAPONS: ShinobiWeapon[] = [
  {
    id: 'weapon-kubikiribocho',
    name: 'Kubikiribocho (Executioner’s Blade)',
    bearer: 'Zabuza Momochi / Suigetsu Hozuki',
    classification: 'Seven Swords of the Mist',
    origin: 'Forged in the Hidden Mist Village (Kirigakure).',
    specialTrait: 'Regenerates itself from breaks and cracks by absorbing the iron directly from the blood of its victims.',
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
    currentStatus: 'Currently bonded with Killer Bee of Kumogakure.',
    image: './images/naruto/sasuke-rinnegan.png'
  },
  {
    id: 'weapon-kusanagi',
    name: 'Sword of Kusanagi (Chidori Blade)',
    bearer: 'Sasuke Uchiha / Boruto Uzumaki',
    classification: 'Legendary Artifact',
    origin: 'A straight-bladed chokuto imbued with high-frequency lightning chakra.',
    specialTrait: 'Cannot be blocked by standard metal weapons when coated in high-frequency Chidori current; passed to Boruto in TBV.',
    currentStatus: 'Carried by Boruto Uzumaki in Two Blue Vortex.',
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
  },
  {
    id: 'weapon-totsuka',
    name: 'Sword of Totsuka & Yata Mirror',
    bearer: 'Itachi Uchiha (Susanoo)',
    classification: 'Divine Relic',
    origin: 'Ethereal spirit weapons wielded only by Itachi’s Complete Susanoo.',
    specialTrait: 'The Totsuka Blade seals anyone it pierces into a drunken dream world of eternal illusions; the Yata Mirror reflects all elemental attacks.',
    currentStatus: 'Dispersed into the heavens upon Itachi’s passing.',
    image: './images/naruto/itachi.png'
  }
];

// ----------------------------------------------------
// THE WILL OF FIRE SACRED NINDO (OATH)
// ----------------------------------------------------
export const NARUTO_OATH = {
  title: 'THE WILL OF FIRE SACRED NINDO',
  japaneseTitle: '火の意志 • 忍道',
  verse: `When the tree leaves dance, one shall find flames.
The fire’s shadow will illuminate the village, and once again, tree leaves shall bud anew.
I do not care how many times I stumble, fall, or bleed in the dirt.
I will never abandon my friends.
I will never take back what I have said.
For as long as there is breath in my chest and fire in my soul:
これがおれの忍道だ — THAT IS MY NINJA WAY!`,
  creed: 'THE WILL OF FIRE BURNS ETERNAL',
  masterMessage: '— Naruto Uzumaki, Seventh Hokage of the Hidden Leaf'
};
