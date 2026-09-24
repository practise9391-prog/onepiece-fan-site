export interface HakiMastery {
  type: 'Conqueror' | 'Armament' | 'Observation' | 'Special';
  title: string;
  level: string;
  description: string;
  iconName: string;
  badge: string;
}

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
  hakiMasteries: HakiMastery[];
  familyTree: FamilyMentorMember[];
  quote: string;
  description: string;
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
    hakiMasteries: [
      {
        type: 'Conqueror',
        title: 'Supreme King Infusion (Haoshoku Haki)',
        level: 'Emperor Tier (Advanced Coating)',
        description: 'Imbues fists, legs, and weapon-less attacks with black lightning that damages targets without direct contact and splits the heavens in two.',
        iconName: 'Crown',
        badge: 'SKY-SPLITTING'
      },
      {
        type: 'Armament',
        title: 'Ryuo / Internal Destruction (Busoshoku Haki)',
        level: 'Advanced Flowing Armor',
        description: 'Flows external invisible armor inside an opponent’s flesh and armor, shattering impenetrable scales like Kaido’s from the inside out.',
        iconName: 'Shield',
        badge: 'INTERNAL BURST'
      },
      {
        type: 'Observation',
        title: 'Future Vision (Kenbunshoku Haki)',
        level: 'Future Sight Master',
        description: 'Mastered during his life-or-death battle with Charlotte Katakuri in the Mirror World, allowing Luffy to see seconds into the future.',
        iconName: 'Eye',
        badge: 'FUTURE VISION'
      },
      {
        type: 'Special',
        title: 'Voice of All Things & Warrior of Liberation',
        level: 'Mythical Innate Sense',
        description: 'Can hear the voices of ancient Sea Kings, Zunesha the colossal elephant, and historical Poneglyphs, embodying the liberation heartbeat of Joy Boy.',
        iconName: 'Sparkles',
        badge: 'JOY BOY WILL'
      }
    ],
    familyTree: [
      {
        name: 'Monkey D. Garp',
        relation: 'Paternal Grandfather',
        epithet: 'Hero of the Marines / Garp the Fist',
        image: './images/family/garp.png',
        achievements: 'Cornered Gol D. Roger repeatedly across the seas. Destroyed Rocks D. Xebec at God Valley alongside Roger. Vaporized Pirate Island Hachinosu with Galaxy Impact.',
        bestShotQuote: 'Pirates are scum! But family is family! Why couldn’t you live the way I wanted you to, Ace?!',
        bestShotScene: 'Dropping from a flying battleship into Hachinosu, unleashing Conqueror’s Galaxy Impact that obliterated an entire city square.',
        legacy: 'Passed down the indomitable iron will, fearless laughter in mortal danger, and superhuman physical constitution to Luffy.'
      },
      {
        name: 'Monkey D. Dragon',
        relation: 'Father',
        epithet: 'Supreme Commander of the Revolutionary Army / World’s Worst Criminal',
        image: './images/family/dragon.png',
        achievements: 'Created the global Revolutionary Army to directly topple the corrupt World Nobles (Celestial Dragons). Directly declared war on Mary Geoise and destroyed their food reserves.',
        bestShotQuote: 'A nation that casts aside its own people is already dead! A day will surely come when our paths cross, Luffy!',
        bestShotScene: 'Appearing in a sudden tempest storm over the execution platform in Loguetown, grabbing Captain Smoker’s weapon with bare hands to free Luffy.',
        legacy: 'Instilled the eternal rebellion against absolute tyranny and the relentless quest for ultimate freedom.'
      },
      {
        name: 'Portgas D. Ace (Gol D. Ace)',
        relation: 'Sworn Older Brother',
        epithet: 'Fire Fist Ace / 2nd Division Commander',
        image: './images/quotes/speaker-ace.png',
        achievements: 'Sailed the Grand Line as Captain of the Spade Pirates. Refused Warlord status. Rose to 2nd Division Commander of the Whitebeard Pirates with a 550,000,000 ฿ bounty.',
        bestShotQuote: 'Thank you for loving me, even though I had the blood of a demon in my veins! I have no regrets in this life!',
        bestShotScene: 'Shielding Luffy’s back from Admiral Akainu’s molten magma fist at Marineford, smiling with tears of gratitude as his Vivre Card burned away.',
        legacy: 'Ace’s undying fire lives on in Luffy’s Red Hawk and Red Roc strikes, keeping their brotherhood eternal.'
      },
      {
        name: 'Sabo',
        relation: 'Sworn Older Brother',
        epithet: 'Flame Emperor / Chief of Staff of the Revolutionary Army',
        image: './images/family/sabo.png',
        achievements: 'Second-in-command of the entire Revolutionary Army. Infiltrated the Holy Land Mary Geoise, discovered the secret ruler of the world Imu, and inherited Ace’s Mera Mera no Mi.',
        bestShotQuote: 'If Luffy ever calls for help, no matter where I am in the world, I’ll drop everything and rush to his side!',
        bestShotScene: 'Shattering the Corrida Colosseum arena with Dragon Claw Fists and consuming the Mera Mera no Mi in front of Doflamingo’s executives.',
        legacy: 'Provides steadfast protective big-brother backing across the four seas, carrying forward the tripartite sake cup oath.'
      },
      {
        name: 'Curly Dadan',
        relation: 'Foster Mother',
        epithet: 'Boss of the Dadan Family / Mountain Bandit',
        image: './images/family/dadan.png',
        achievements: 'Raised Luffy, Ace, and Sabo on Mount Colubo. Defended the burning Gray Terminal against pirate captain Bluejam with her bare fists to save Ace.',
        bestShotQuote: 'How could you just stand there and watch Ace die, Garp?! What was more important than your own family?!',
        bestShotScene: 'Beating Vice Admiral Garp with a wooden club with tears streaming down her face after Marineford, weeping for her lost boy Ace.',
        legacy: 'Provided the wild, unconditional maternal warmth that allowed the three brothers to grow strong and unbreakable.'
      },
      {
        name: 'Red-Haired Shanks',
        relation: 'Mentor & Spiritual Idol',
        epithet: 'Emperor of the Sea / Chief of the Red Hair Pirates',
        image: './images/bounties/bounty-shanks.png',
        achievements: 'Sacrificed his left arm to save 7-year-old Luffy from the Lord of the Coast. Clashed with Whitebeard splitting the heavens. Ended the Paramount War at Marineford with a single command.',
        bestShotQuote: 'This hat means everything to me. Take good care of it, Luffy. One day, bring it back to me when you’ve become a great pirate!',
        bestShotScene: 'Placing his treasured Straw Hat onto young Luffy’s head on the Foosha Village pier, commissioning the boy’s destiny.',
        legacy: 'The sacred Straw Hat itself and the noble code of piracy: never drawing a weapon on a comrade and only using power to protect.'
      }
    ],
    quote: "I’m going to become the King of the Pirates! (海賊王に俺はなる！)",
    description: "Born in Foosha Village, Luffy's reckless optimism and sheer magnetic charisma have rallied an unshakeable crew. Having awakened the long-lost Warrior of Liberation, Joy Boy, he laughs in the face of tyranny and brings smiles wherever he voyages.",
    signatureMoves: ['Gomu Gomu no Bajrang Gun', 'Dawn Whip & Dawn Rocket', 'Gomu Gomu no Red Roc', 'Gomu Gomu no King Kong Gun'],
    themeKey: 'luffy',
    themeColor: '#facc15',
    accentBg: 'from-amber-500/20 via-yellow-500/10 to-transparent',
    cinematicMomentTitle: 'The Drums of Liberation',
    cinematicMomentText: 'His heartbeat pulses to the timeless rhythm: doom-dut-da-da. The sun rises over Wano as lightning becomes his plaything and laughter echoes across the sea.',
    avatarUrl: './images/crew/luffy.png'
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
    hakiMasteries: [
      {
        type: 'Conqueror',
        title: 'King of Hell Infusion (Haoshoku Haki)',
        level: 'Conqueror Blade Awakening',
        description: 'Unleashes raw Conqueror Haki through the cursed demonic blade Enma, creating emerald aura trails that slice through flame dragons.',
        iconName: 'Zap',
        badge: 'KING OF HELL'
      },
      {
        type: 'Armament',
        title: 'Black Blade Mastery (Koka Busoshoku)',
        level: 'Advanced Flowing Armor',
        description: 'Hardens three steel blades to withstand direct impacts from Kaido and Big Mom’s combined Hakai shockwave, permanently hardening blades toward Kokuto.',
        iconName: 'Shield',
        badge: 'BLACK BLADE PATH'
      },
      {
        type: 'Observation',
        title: 'Breath of All Things (Kenbunshoku Haki)',
        level: 'Swordsman Precision Intuition',
        description: 'Senses the life rhythm of steel, leaves, and mortal flesh, allowing him to cut what he wishes to cut and spare what he wishes to spare.',
        iconName: 'Eye',
        badge: 'BREATH OF STEEL'
      },
      {
        type: 'Special',
        title: 'Nine-Sword Style Demon Asura (Kyutoryu)',
        level: 'Spiritual Demonic Manifestation',
        description: 'Through immense spiritual pressure and willpower, Zoro creates an illusionary three-headed, six-armed demon Asura that scarred Kaido permanently.',
        iconName: 'Swords',
        badge: 'DEMON ASURA'
      }
    ],
    familyTree: [
      {
        name: 'Shimotsuki Ryuma',
        relation: 'Direct Ancestor (God of the Blade)',
        epithet: 'Sword God (Tosei) / King',
        image: './images/family/ryuma.png',
        achievements: 'Single-handedly defended ancient Wano Country from the World Nobles and foreign invaders. Slew a colossal dragon over the Flower Capital with Black Blade Shusui.',
        bestShotQuote: 'A sword’s greatest virtue is its connection to the master who wields it with unwavering spirit!',
        bestShotScene: 'His zombie avatar clashing with Zoro on Thriller Bark roof, bequeathing the National Treasure Shusui to Zoro as his worthy successor.',
        legacy: 'Zoro shares Ryuma’s exact facial silhouette, one-eyed scar, and legendary swordsman bloodline.'
      },
      {
        name: 'Shimotsuki Ushimaru',
        relation: 'Direct Great-Uncle / Ancestor',
        epithet: 'Daimyo of Ringo / Last Samurai Lord',
        image: './images/family/ushimaru.png',
        achievements: 'Direct descendant of Ryuma who ruled Ringo. Befriended Onimaru the Fox. Led the heroic samurai rebellion against Kaido rather than surrender.',
        bestShotQuote: 'Samurai do not feel hunger! Even facing death, a swordsman of Wano never bows his head!',
        bestShotScene: 'Cutting open the stone prison door for young Yamato, sacrificing his life to fight Kaido so the future could be born.',
        legacy: 'Hyogoro and Kawamatsu remarked that Zoro’s stance, blade strikes, and gaze are the spitting image of Ushimaru in his prime.'
      },
      {
        name: 'Kuina',
        relation: 'Childhood Rival & Sacred Promise',
        epithet: 'Heir of the Isshin Dojo',
        image: './images/family/kuina.png',
        achievements: 'Defeated Zoro in 2,001 consecutive duels. The daughter of master swordsmith Shimotsuki Koushirou.',
        bestShotQuote: 'Zoro, let’s make a promise! One of us will become the greatest swordsman in the world, and our name will reach the heavens!',
        bestShotScene: 'Handing young Zoro a bamboo shinai under the moonlit sky after their 2,001st duel, forging their eternal bond.',
        legacy: 'Zoro carries her treasured white-hilted Great Grade Meito, Wado Ichimonji, in his mouth during every three-sword strike.'
      }
    ],
    quote: "Scars on the back are a swordsman’s shame. (背中の傷は剣士の恥だ)",
    description: "The first to join Luffy, Zoro is relentless in his quest to dethrone Dracule Mihawk as the Greatest Swordsman in the World. Wielding Wado Ichimonji, Sandai Kitetsu, and the demonic blade Enma, he will cut through anything—even death itself.",
    signatureMoves: ['King of Hell Three Swords: Billion-fold Trichiliocosm', 'Dragon Twister: Dead Man’s Game', 'Asura: Blades Drawn Dead Man’s Game', 'Lion’s Song (Shishi Sonson)'],
    themeKey: 'zoro',
    themeColor: '#10b981',
    accentBg: 'from-emerald-600/20 via-teal-700/10 to-transparent',
    cinematicMomentTitle: 'Nothing Happened',
    cinematicMomentText: 'Standing in a pool of his own blood amidst the ruins of Thriller Bark, Zoro took upon himself every shred of Luffy’s accumulated agony from Bartholomew Kuma, never speaking a word of complaint.',
    avatarUrl: './images/crew/zoro.png'
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
    hakiMasteries: [
      {
        type: 'Observation',
        title: 'Emotional & Audio Observation (Kenbunshoku Haki)',
        level: 'Specialized Supreme Sensitivity',
        description: 'Can perceive women’s teardrops and subtle cries for help across entire metropolitan islands, dodging Katakuri’s jelly bean future snipe effortlessly.',
        iconName: 'Eye',
        badge: 'HEART OF COMPASSION'
      },
      {
        type: 'Armament',
        title: 'Incinerating Armor (Busoshoku Haki)',
        level: 'High-Density Flame Coating',
        description: 'Coats his legs in high-density invisible armor that channels volcanic heat into plasma without singeing his own skin.',
        iconName: 'Shield',
        badge: 'FLAME ARMOR'
      },
      {
        type: 'Special',
        title: 'Ifrit Jambe & Blue Plasma Flames',
        level: 'Awakened Exoskeleton Fusion',
        description: 'Combines genetic physical density, superhuman speed, and deep passion to generate celestial blue flames hotter than magma.',
        iconName: 'Flame',
        badge: 'CELESTIAL BLUE'
      },
      {
        type: 'Special',
        title: 'Germa Genetic Exoskeleton & Rapid Recovery',
        level: 'Awakened Cybernetic Biology',
        description: 'Steel broadswords shatter on contact with his neck. Broken bones realign instantaneously, giving him bulletproof defense without losing human emotion.',
        iconName: 'Zap',
        badge: 'STEEL BODY'
      }
    ],
    familyTree: [
      {
        name: 'Red-Leg Zeff',
        relation: 'Adoptive Father & Master Chef',
        epithet: 'Chef of the Sea / Former Captain of the Cook Pirates',
        image: './images/family/zeff.png',
        achievements: 'Sailed the Grand Line for an entire year as a pirate chef. Sacrificed his own leg on a barren desert rock so young Sanji could eat the remaining food and survive.',
        bestShotQuote: 'Don’t catch a cold, Sanji! A cook never refuses food to a starving man, no matter who they are!',
        bestShotScene: 'Standing at the Baratie deck with his towering chef’s hat, watching Sanji prostrate on the deck with tears streaming.',
        legacy: 'Instilled Sanji’s sacred chivalry: never kicking with his hands, never wasting a scrap of food, and feeding anyone in hunger.'
      },
      {
        name: 'Vinsmoke Judge',
        relation: 'Biological Father',
        epithet: 'Garuda / Supreme Commander of Germa 66',
        image: './images/family/judge.png',
        achievements: 'Former MADS scientist alongside Vegapunk and Queen. Mastered the Lineage Factor to clone an invincible high-tech cybernetic army and conquered the North Blue.',
        bestShotQuote: 'Tell me, Mugiwara! Why do you value this failure?! He has no royal pride, he cooks food for peasants, and he cries for women!',
        bestShotScene: 'Weeping at the Whole Cake wedding table with Charlotte Perospero’s candy gun pointed at his skull, saved by Sanji.',
        legacy: 'Sanji completely renounced Judge’s cold genetic cruelty to embrace human love and genuine culinary heart.'
      },
      {
        name: 'Vinsmoke Reiju',
        relation: 'Older Sister',
        epithet: 'Poison Pink',
        image: './images/family/reiju.png',
        achievements: 'Crown Princess of Germa 66. Immune to all lethal biological poisons. Secretly unlocked young Sanji’s prison cell so he could escape to the sea.',
        bestShotQuote: 'You are the only true human in the Vinsmoke family, Sanji. Mother sacrificed her life so you would have emotions. Never be ashamed of that!',
        bestShotScene: 'Helping Sanji escape the Germa castle as a child, shouting with tears through the rain: "Never come back! The sea is vast!"',
        legacy: 'The eternal family guardian who reminded Sanji that his compassionate heart is the greatest gift of his mother.'
      }
    ],
    quote: "Cooking is a gift from the gods. Spices are a gift from the devil. It looks like it was a little too spicy for you.",
    description: "Prince of the Germa Kingdom who renounced his cold bloodline, Sanji fights exclusively with his legs to protect the hands that feed people. His fiery passion burns hotter than magma, awakening the supersonic blue flames of Ifrit Jambe.",
    signatureMoves: ['Ifrit Jambe: Bœuf Burst', 'Diable Jambe: Flambage Shot', 'Concasser', 'Sky Walk (Geppo)'],
    themeKey: 'sanji',
    themeColor: '#3b82f6',
    accentBg: 'from-blue-600/20 via-indigo-600/10 to-transparent',
    cinematicMomentTitle: 'The Blue Flame of Passion',
    cinematicMomentText: 'Embracing his human compassion over Germa’s mechanical cruelty, his lightning-fast kicks transform from crimson flames into celestial blue incinerating heat.',
    avatarUrl: './images/crew/sanji.png'
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
    hakiMasteries: [
      {
        type: 'Observation',
        title: 'Superhuman Atmospheric Climate Intuition',
        level: 'Innate Weather Perception',
        description: 'Senses minuscule atmospheric pressure, temperature shifts, and approaching cyclones with her skin alone, steering through impossible Grand Line vortexes.',
        iconName: 'Eye',
        badge: 'WEATHER GODDESS'
      },
      {
        type: 'Special',
        title: 'Sorcery Clima-Tact & Zeus Synchronization',
        level: 'Emperor Soul Homie Wielder',
        description: 'Commands the living thundercloud homie Zeus (formerly belonging to Emperor Big Mom), firing homing lightning strikes with limitless electric yield.',
        iconName: 'CloudLightning',
        badge: 'ZEUS THUNDER'
      },
      {
        type: 'Special',
        title: 'Mirage Tempo & Weather Illusions',
        level: 'Thermal Refraction Mastery',
        description: 'Bends air temperature and light rays to turn completely invisible and create photorealistic decoys that confuse Emperor-level commanders.',
        iconName: 'Sparkles',
        badge: 'MIRAGE STEALTH'
      }
    ],
    familyTree: [
      {
        name: 'Belle-mère',
        relation: 'Adoptive Mother',
        epithet: 'Former Marine Soldier',
        image: './images/family/belle-mere.png',
        achievements: 'Rescued infant Nami and toddler Nojiko from the smoking ruins of Oykot Kingdom battlefields. Raised them in Cocoyasi Village with love and tangerine groves.',
        bestShotQuote: 'Even if the world gives up on you, never give up on yourself! Nami, Nojiko... I love you both so much!',
        bestShotScene: 'Looking Arlong directly in the eye, refusing to deny that Nami and Nojiko are her true daughters, taking the bullet with a warm smile.',
        legacy: 'Her tangerine trees travel aboard the Thousand Sunny, keeping her eternal maternal protection on every ocean voyage.'
      },
      {
        name: 'Nojiko',
        relation: 'Adoptive Older Sister',
        epithet: 'Cocoyasi Village Caretaker',
        image: './images/crew/nami.png',
        achievements: 'Got matching arm tattoos so Nami would never feel alone bearing the Arlong pirate tattoo mark. Watched over the village while Nami collected 100 million berries.',
        bestShotQuote: 'Don’t carry the whole world on your shoulders, little sister. We will always be here when you sail back!',
        bestShotScene: 'Taking a gunshot from Marine corrupt officer Nezumi to protect Nami’s buried treasure chest.',
        legacy: 'The emotional rock of Nami’s childhood that kept her spirit alive through eight years of solitary slavery.'
      }
    ],
    quote: "What good is treasure if I have to be alone?!",
    description: "Possessing an uncanny supernatural sixth sense for atmospheric weather fluctuations, Nami navigates the unpredictable vortexes of the Grand Line while commanding devastating thunderclouds with Zeus.",
    signatureMoves: ['Zeus Breeze Tempo', 'Thunderbolt Tempo', 'Mirage Tempo', 'Rain Tempo'],
    themeKey: 'nami',
    themeColor: '#f97316',
    accentBg: 'from-orange-600/20 via-amber-700/10 to-transparent',
    cinematicMomentTitle: 'Luffy Will Be Pirate King',
    cinematicMomentText: 'Even facing death with Ulti smashing her skull in Onigashima, Nami refused to lie, proudly shouting that Luffy would become the Pirate King.',
    avatarUrl: './images/crew/nami.png'
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
    hakiMasteries: [
      {
        type: 'Observation',
        title: 'Awakened Sniper Aura Sight (Kenbunshoku Haki)',
        level: 'Ultra-Long Range Awakening',
        description: 'Awakened during the climax of Dressrosa, allowing Usopp to see target emotional auras through multiple stone fortresses kilometers away.',
        iconName: 'Eye',
        badge: 'GOD VISION'
      },
      {
        type: 'Special',
        title: 'Black Kabuto & Pop Green Botany',
        level: 'Boin Archipelago Flora Mastery',
        description: 'Commands living carnivorous botanical weapon plants: Impact Wolf shockwaves, Bamboo Javelins, and Devil Trampolines with pinpoint slingshot accuracy.',
        iconName: 'Target',
        badge: 'CARNIVOROUS BOTANY'
      },
      {
        type: 'Special',
        title: 'Sogeking Persona & Tactical Fabrications',
        level: 'Psychological Warfare Master',
        description: 'Channeling the legendary sniper hero of the Sniper Island, Usopp incinerates World Government flags and turns despair into glorious battlefield triumph.',
        iconName: 'Crown',
        badge: 'HERO SOGEKING'
      }
    ],
    familyTree: [
      {
        name: 'Yasopp',
        relation: 'Father',
        epithet: 'Chaser / Senior Officer of Red Hair Pirates',
        image: './images/family/yasopp.png',
        achievements: 'The legendary sniper of Red-Haired Shanks. Said to be able to shoot the antenna off an ant from 100 paces away without damaging the body.',
        bestShotQuote: 'A pirate ship called to my soul, and I couldn’t refuse it! That is the skull mark we live and die by!',
        bestShotScene: 'Standing at Shanks’ side at Marineford and Elbaf, aiming his flintlock rifle with deadpan, surgical coolness.',
        legacy: 'Passed down the unrivaled sniper genetics, proud pirate ambition, and sharp tactical eyesight to Usopp.'
      },
      {
        name: 'Banchina',
        relation: 'Mother',
        epithet: 'Syrup Village Native',
        image: './images/crew/usopp.png',
        achievements: 'Loved Yasopp and supported his dream of sailing with Shanks. Passed away peacefully as young Usopp shouted stories to keep her spirits alive.',
        bestShotQuote: 'I am proud of your father for being a brave man of the sea, Usopp. Never resent him.',
        bestShotScene: 'Smiling softly in bed holding young Usopp’s hand, telling him to always hold his head high.',
        legacy: 'The reason Usopp began telling tall tales: to bring a smile to her face when sickness overtook her.'
      }
    ],
    quote: "Even if they face enemies they have no hope of beating... there are times when a man must stand and fight!",
    description: "Son of Red Hair sniper Yasopp, Usopp’s sharp marksmanship and quick-thinking fabrications have turned the tide of historic battles. Known across the seas as God Usopp after freeing thousands of toy slaves in Dressrosa.",
    signatureMoves: ['Kuro Kabuto: Special Black Star', 'Impact Wolf', 'Firebird Star', 'Golden Slumber Plant'],
    themeKey: 'usopp',
    themeColor: '#eab308',
    accentBg: 'from-amber-600/20 via-yellow-700/10 to-transparent',
    cinematicMomentTitle: 'The Long-Distance Shot That Saved Luffy',
    cinematicMomentText: 'Locking onto Sugar through kilometers of castle walls in Dressrosa using newly awakened Observation Haki, sinking the impossible shot that saved Luffy and Law.',
    avatarUrl: './images/crew/usopp.png'
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
    hakiMasteries: [
      {
        type: 'Special',
        title: 'Rumble Ball Seven Transformations',
        level: 'Medical Genetic Drug Mastery',
        description: 'Through chemical wavelength disruption, Chopper accesses seven distinct forms: Brain, Heavy, Arm, Jump, Guard, Kung Fu, and Horn Point at will.',
        iconName: 'Sparkles',
        badge: '7 POINTS EVOLUTION'
      },
      {
        type: 'Special',
        title: 'Monster Point Controlled Titan',
        level: 'Skyscraper Titan Form',
        description: 'Transforms into a towering mythical colossus that can trade blows with Queen the Plague and hold off CP0 without losing human sanity.',
        iconName: 'Zap',
        badge: 'TITAN BEAST'
      },
      {
        type: 'Special',
        title: 'Miracle Panacea Medical Science',
        level: 'Global Master Physician',
        description: 'Formulated the antidote for Queen’s lethal Ice Oni virus in minutes amidst a battlefield crossfire, curing thousands of friends and foes alike.',
        iconName: 'Shield',
        badge: 'MIRACLE CURE'
      }
    ],
    familyTree: [
      {
        name: 'Dr. Hiriluk',
        relation: 'Adoptive Father & Spiritual Mentor',
        epithet: 'Quack Doctor of Drum Island',
        image: './images/quotes/speaker-hiriluk.png',
        achievements: 'Dedicated thirty years of research to create a miracle chemical that turns snow into pink cherry blossoms to heal the hardened hearts of Drum Island.',
        bestShotQuote: 'When does a man die? When his heart stops? No! A man dies when he is forgotten! I have had a wonderful life!!',
        bestShotScene: 'Sitting cross-legged on the snowy steps of Drum Castle, drinking a cup of wine before detonating his own bomb to deny Wapol’s trap.',
        legacy: 'Chopper adopted Hiriluk’s skull and crossbones flag and swore to become a miracle doctor who can cure any sickness in the world.'
      },
      {
        name: 'Dr. Kureha',
        relation: 'Medical Mentor',
        epithet: 'Doctorine / 141-Year-Old Witch of Drum Island',
        image: './images/family/kureha.png',
        achievements: 'One of the greatest living medical geniuses on the planet. Taught Chopper rigorous anatomical science, surgery, pharmacology, and the secret "Will of D."',
        bestShotQuote: 'You want to know the secret to my youth?! Go out to the sea and become a true doctor, you clumsy reindeer!',
        bestShotScene: 'Firing Hiriluk’s chemical cannons from Drum Rock into the winter sky, blooming giant pink cherry blossom clouds over the island.',
        legacy: 'Equipped Chopper with world-class medical knowledge, diagnostic precision, and unshakeable medical ethics.'
      }
    ],
    quote: "There is no disease in this world that cannot be cured! I will become the panacea!",
    description: "A blue-nosed reindeer mentored by Dr. Hiluluk and Dr. Kureha on Drum Island. Having developed the Rumble Ball, he alters his genetic wavelengths into Walk, Heavy, Jump, Arm, Guard, Kung Fu, and Monster Point forms.",
    signatureMoves: ['Monster Point Palm Strike', 'Kung Fu Point Flurry', 'Horn Cannon', 'Brain Point Scope'],
    themeKey: 'chopper',
    themeColor: '#ec4899',
    accentBg: 'from-pink-600/20 via-rose-700/10 to-transparent',
    cinematicMomentTitle: 'The Miracle of Drum Island',
    cinematicMomentText: 'Standing atop the snowy drum rock as pink dust blossomed into the sky, Chopper swore to cure any ailment across the four seas.',
    avatarUrl: './images/crew/chopper.png'
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
    hakiMasteries: [
      {
        type: 'Armament',
        title: 'Fish-Man Karate & Dragon Claw Infusion',
        level: 'Clutch Armament Hardening',
        description: 'Learned internal shockwave strikes from Koala and Sabo during the timeskip, infusing giant blossomed hands with crushing black armament.',
        iconName: 'Shield',
        badge: 'CRUSHING CLAWS'
      },
      {
        type: 'Special',
        title: 'Demonio Fleur: Demonic Blossom Avatar',
        level: 'Awakened Demonic Form',
        description: 'Transforms her blossomed manifestation into a towering obsidian demon with fangs and bat wings, crushing Tobi Roppo Black Maria in seconds.',
        iconName: 'Sparkles',
        badge: 'DEMONIO FLEUR'
      },
      {
        type: 'Special',
        title: 'Decipherer of the Ancient Poneglyphs',
        level: 'Sole Living Scholar of Ohara',
        description: 'The only person on Earth capable of reading the ancient stone Poneglyphs to reveal the 100-Year Void Century and locate Laugh Tale.',
        iconName: 'Crown',
        badge: 'LIGHT OF OHARA'
      }
    ],
    familyTree: [
      {
        name: 'Nico Olvia',
        relation: 'Mother',
        epithet: 'Archaeologist of Ohara',
        image: './images/family/olvia.png',
        achievements: 'Led the global search for ancient history across the four seas. Returned to Ohara to protect the scholars and history of the world against the World Government.',
        bestShotQuote: 'Robin, live on! Our history must not be erased! The future will surely bring you comrades who cherish you!',
        bestShotScene: 'Embracing 8-year-old Robin in the burning Tree of Knowledge before running back into the fire to save the stone records.',
        legacy: 'Bestowed Robin’s profound love for archaeology, ancient truth, and the unyielding pride of Ohara’s scholars.'
      },
      {
        name: 'Jaguar D. Saul',
        relation: 'Protector & Mentor',
        epithet: 'Former Marine Vice Admiral / Giant of Elbaf',
        image: './images/quotes/speaker-saul.png',
        achievements: 'Refused the Buster Call bombardment on Ohara and rescued Olvia. Froze by Aokiji while shielding Robin, secretly surviving and saving the library books to Elbaf.',
        bestShotQuote: 'DERESHI-SHI-SHI! Laugh when things are tough! No one in this world is born to be completely alone! Go out to the sea and find your friends!',
        bestShotScene: 'Laughing heartily as Kuzan’s Ice Capsule froze his giant body, smiling to give 8-year-old Robin the courage to escape the Buster Call.',
        legacy: 'Saul’s iconic "DERESHI!" laugh kept Robin sane across twenty years of assassination attempts and hunted life.'
      }
    ],
    quote: "Fools who do not respect history are destined to repeat it.",
    description: "The sole survivor of the scholarly island of Ohara wiped out by a Buster Call at age eight. The only known living human capable of deciphering the ancient Poneglyph script, she journeys to reveal the 100-year Void Century.",
    signatureMoves: ['Demonio Fleur: Grand Jacuzzi Clutch', 'Mil Fleur: Gigantesco Mano', 'Cien Fleur: Wing', 'Seis Fleur: Clutch'],
    themeKey: 'robin',
    themeColor: '#8b5cf6',
    accentBg: 'from-indigo-700/20 via-purple-900/10 to-transparent',
    cinematicMomentTitle: 'I Want To Live!',
    cinematicMomentText: 'Tears streaming down her face across the Tower of Law, she finally allowed herself to reach out and scream the words she kept buried inside for twenty years.',
    avatarUrl: './images/crew/robin.png'
  },
  {
    id: 'franky',
    name: 'Franky',
    japaneseName: 'フランキー',
    epithet: 'Cyborg / Iron Man',
    role: 'Master Shipwright & Cybernetic Engineer',
    bounty: 394000000,
    bountyFormatted: '394,000,000 ฿',
    fightingStyle: 'Cola-Powered Weaponry & General Franky Mecha Pilot',
    hakiTypes: [],
    hakiMasteries: [
      {
        type: 'Special',
        title: 'BF-37 Cyborg Armored Chassis',
        level: 'Cola-Powered Heavy Weaponry',
        description: 'Rebuilt his entire body with titanium plating, high-pressure air compressors, and shoulder rocket artillery capable of blasting through steel fortifications.',
        iconName: 'Shield',
        badge: 'BF-37 SUPER'
      },
      {
        type: 'Special',
        title: 'Radical Beam & Vegapunk Lasers',
        level: 'High-Concentration Thermal Beam',
        description: 'Reverse-engineered Dr. Vegapunk’s classified laser designs during the timeskip on Karakuri Island, firing piercing plasma beams from his palms.',
        iconName: 'Zap',
        badge: 'RADICAL BEAM'
      },
      {
        type: 'Special',
        title: 'Iron Pirate General Franky (BF-38)',
        level: 'Gourd-Armored Colossus Mecha',
        description: 'A colossal piloted mecha forged from Wapometal memory alloy, wielding the giant sword Franken and General Cannon with devastating concussive force.',
        iconName: 'Wrench',
        badge: 'GENERAL FRANKY'
      }
    ],
    familyTree: [
      {
        name: 'Tom',
        relation: 'Master & Mentor',
        epithet: 'Master Shipwright of Water 7 / Horned Boxfish Fish-Man',
        image: './images/family/tom.png',
        achievements: 'Built the Pirate King Gol D. Roger’s ship, the Oro Jackson. Built the world’s first Sea Train, the Puffing Tom, saving Water 7 from economic collapse.',
        bestShotQuote: 'No matter what kind of ship you build, you must love it with all your heart! Stand tall and do it with a DON!!',
        bestShotScene: 'Punching Spandam straight in the teeth at the Judicial Court, declaring with immense pride that he was honored to build the ship for the Pirate King.',
        legacy: 'Franky inherited Tom’s unyielding shipwright pride and built the Thousand Sunny using Adam Wood to conquer the Grand Line.'
      }
    ],
    quote: "Existing is not a crime! Living is something you must do with all your might! SUPERRRR!!",
    description: "Apprentice of the legendary shipwright Tom who built the Pirate King’s ship Oro Jackson. Franky built the dream vessel Thousand Sunny from Adam Wood and rebuilt his own flesh into a cola-fueled heavy war weapon.",
    signatureMoves: ['Radical Beam', 'General Cannon', 'Coup de Vent', 'Franky Iron Boxing'],
    themeKey: 'franky',
    themeColor: '#06b6d4',
    accentBg: 'from-cyan-600/20 via-sky-700/10 to-transparent',
    cinematicMomentTitle: 'The Iron Pirate’s Soul',
    cinematicMomentText: 'Piloting the invincible Iron Pirate General Franky through the heart of battle, firing searing plasma Radical Beams with his signature "SUPERRR!" stance.',
    avatarUrl: './images/crew/franky.png'
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
    hakiMasteries: [
      {
        type: 'Special',
        title: 'Soul Projection & Underworld Chill',
        level: 'Paramecia Soul Evolution',
        description: 'Separates his soul from bone structure to pass through walls, coating his cane blade Soul Solid in the sub-zero chill of the underworld.',
        iconName: 'Sparkles',
        badge: 'UNDERWORLD FROST'
      },
      {
        type: 'Special',
        title: 'Nemuri Uta Flurry & Soul Music',
        level: 'Hypnotic Symphony Fencing',
        description: 'Blends swordplay with violin cadences that lull entire enemy platoons to deep sleep before they even realize their coats are sliced open.',
        iconName: 'Music',
        badge: 'SOUL SYMPHONY'
      },
      {
        type: 'Special',
        title: 'Soul King Natural Counter to Homies',
        level: 'Soul Dominion',
        description: 'His raw soul radiance directly exorcises Big Mom’s homies, standing tall against Zeus and Prometheus without fear.',
        iconName: 'Crown',
        badge: 'SOUL KING'
      }
    ],
    familyTree: [
      {
        name: 'Laboon',
        relation: 'Sacred Comradeship',
        epithet: 'The Island Whale of Reverse Mountain',
        image: './images/family/laboon.png',
        achievements: 'Waited 50 years at the entrance of the Grand Line, banging his head against Reverse Mountain waiting for the Rumbar Pirates’ return.',
        bestShotQuote: 'Binks’ Sake will be delivered! Wait for us, Laboon! A promise between men is etched into bone!',
        bestShotScene: 'The Rumbar Pirates singing Binks’ Sake one by one as poison took their lives, recording the song into a Tone Dial for Laboon.',
        legacy: 'Brook’s singular life mission across 50 years of fog: circumnavigate the globe with the Straw Hats and fulfill his promise to Laboon.'
      }
    ],
    quote: "Yo-ho-ho-ho! May I please see your panties? Ah, but I have no eyes to see with! Skull joke!",
    description: "A living skeleton who drifted 50 years alone in the fog of the Florian Triangle to fulfill a sacred promise to Laboon the whale. His violin music can heal spirits, lull foes to sleep, and his blade delivers the freezing frost of the netherworld.",
    signatureMoves: ['Soul Solid: Cold Soul Slash', 'Aubade Coup Droit', 'Lullaby Flurry', 'Party Music: Festival of Slumber'],
    themeKey: 'brook',
    themeColor: '#a855f7',
    accentBg: 'from-purple-700/20 via-fuchsia-900/10 to-transparent',
    cinematicMomentTitle: 'Binks’ Sake on the Moonlit Sea',
    cinematicMomentText: 'In Whole Cake Island, Brook defied Emperor Big Mom face to face, sleeping beside her and stealing rubbings of the Road Poneglyphs tucked inside his cranial cavity.',
    avatarUrl: './images/crew/brook.png'
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
    hakiMasteries: [
      {
        type: 'Armament',
        title: 'Master Hardening (Koka Busoshoku Haki)',
        level: 'High-Density Barrier Armor',
        description: 'Hardens forearms to block Emperor Big Mom’s flaming Napoleon blade and deflect Who’s-Who’s Fang Pistol without taking scratch damage.',
        iconName: 'Shield',
        badge: 'IRON BODY'
      },
      {
        type: 'Special',
        title: 'Secret Technique Fish-Man Karate: Vagabond Drill',
        level: 'Shockwave Fluid Resonance',
        description: 'Manipulates water vapor in the atmosphere and fluid within an opponent’s internal organs to deliver lethal internal shockwave explosions.',
        iconName: 'Droplets',
        badge: 'VAGABOND DRILL'
      },
      {
        type: 'Special',
        title: 'Fish-Man Jujutsu: Ocean Current Shoulder Throw',
        level: 'Ocean Fluid Manipulation',
        description: 'Lifts massive oceanic currents with bare hands like liquid boulders, steering through impossible tsunamis in the Green Room.',
        iconName: 'Compass',
        badge: 'OCEAN MASTER'
      }
    ],
    familyTree: [
      {
        name: 'Fisher Tiger',
        relation: 'Mentor & Captain of the Sun Pirates',
        epithet: 'Hero of the Slaves / Founder of the Sun Pirates',
        image: './images/family/fisher-tiger.png',
        achievements: 'Scaled the Red Line barehanded, invaded the holy city of Mary Geoise, and freed thousands of human and fish-man slaves (including Boa Hancock).',
        bestShotQuote: 'I know the humans are capable of goodness... but the demon inside my heart cannot forgive them! Do not inherit our hatred!!',
        bestShotScene: 'Refusing a human blood transfusion on his deathbed with a tearful smile, begging Jinbe and the Sun Pirates to fight for true peace.',
        legacy: 'Jinbe carries Tiger’s sun brand and unyielding honor, dedicating his life to bridging the ocean between humans and Fish-Men.'
      },
      {
        name: 'Queen Otohime',
        relation: 'Spiritual Guide',
        epithet: 'Mother of the Sea / Queen of Ryugu Kingdom',
        image: './images/family/otohime.png',
        achievements: 'Spent decades gathering millions of signatures from Fish-Man citizens to petition for peaceful coexistence and relocation under the true sun.',
        bestShotQuote: 'Do not let your children learn hatred! The future is a clean canvas that must be painted with love!',
        bestShotScene: 'Shielding a stranded World Noble with her fragile body to demonstrate mercy and forgiveness.',
        legacy: 'Jinbe honors her legacy by donating his blood to Luffy at Fish-Man Island, breaking centuries of racial taboo with a warm smile.'
      }
    ],
    quote: "I am a man who wants to be part of the future Pirate King’s crew... I cannot be intimidated by a mere Emperor of the Sea!",
    description: "A whale shark fish-man of supreme dignity and honor, Jinbe steer the Thousand Sunny through impossible tidal waves with surgical grace, wielding the moisture in the air and water of the ocean as lethal shockwaves.",
    signatureMoves: ['Fish-Man Karate Secret Technique: Vagabond Drill', 'Demon Brick Fist (Karakusagawaranage)', 'Ocean Current Shoulder Throw', 'Spear Wave'],
    themeKey: 'jinbe',
    themeColor: '#0284c7',
    accentBg: 'from-sky-700/20 via-blue-900/10 to-transparent',
    cinematicMomentTitle: 'A Mere Emperor of the Sea',
    cinematicMomentText: 'Refusing to yield a single second of his lifespan to Big Mom’s Soul Pocus, Jinbe stood unblinking: "If Luffy is to be King, why should I fear anyone?"',
    avatarUrl: './images/crew/jinbe.png'
  }
];
