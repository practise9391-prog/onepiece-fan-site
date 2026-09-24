export interface FightScene {
  id: string;
  combatants: string;
  title: string;
  location: string;
  outcome: string;
  description: string;
  keyClash: string;
  quote?: string;
  speaker?: string;
  imageUrl: string;
}

export interface IconicMoment {
  id: string;
  title: string;
  quote?: string;
  speaker?: string;
  description: string;
  badge: string;
  imageUrl?: string;
}

export interface Faction {
  name: string;
  banner: string;
  members: string[];
}

export interface ArcSectionChapter {
  id: string;
  title: string;
  description: string;
  episodes: string;
  imageUrl: string;
  highlights: string[];
}

export interface ArcData {
  id: string;
  title: string;
  japaneseTitle: string;
  subtitle: string;
  saga: string;
  episodes: string;
  chapters: string;
  year: string;
  bgGradient: string;
  accentColor: string;
  glowColor: string;
  themeType: string;
  bgImage: string;
  shortDesc: string;
  fullSynopsis: string;
  keyCharacters: string[];
  locations: string[];
  factions: Faction[];
  iconicMoments: IconicMoment[];
  fights: FightScene[];
  chaptersList: ArcSectionChapter[];
}

export const ARCS: ArcData[] = [
  {
    id: 'east-blue',
    title: 'East Blue',
    japaneseTitle: 'イーストブルー編',
    subtitle: 'The Romance Dawn & Gathering of the Crew',
    saga: 'East Blue Saga',
    episodes: 'Episodes 1–61',
    chapters: 'Chapters 1–100',
    year: '1999–2001',
    bgGradient: 'from-amber-950 via-slate-950 to-blue-950',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    themeType: 'ocean_sunset',
    bgImage: './images/arcs/east-blue.png',
    shortDesc: 'Monkey D. Luffy sets out into the sea in a wooden barrel with an indomitable dream: to find the One Piece and become the Pirate King.',
    fullSynopsis: 'The voyage begins in the calmest of the four seas. Luffy recruits swordsman Roronoa Zoro at Shells Town, deceitful navigator Nami at Orange Town, cowardly sniper Usopp at Syrup Village, and chivalrous chef Sanji at Baratie. Together, they confront Warlord Mihawk, shatter the tyrannical Fish-Man pirate Arlong at Arlong Park, and make their final oath under the Loguetown execution scaffold before sailing up Reverse Mountain.',
    keyCharacters: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Dracule Mihawk', 'Arlong', 'Red-Haired Shanks', 'Smoker'],
    locations: ['Windmill Village', 'Shells Town', 'Syrup Village', 'Baratie', 'Arlong Park', 'Loguetown'],
    factions: [
      { name: 'Straw Hat Pirates', banner: 'The Rookie Crew', members: ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji'] },
      { name: 'Arlong Pirates', banner: 'Sun Pirates Remnants', members: ['Arlong', 'Kuroobi', 'Chew', 'Hachi'] },
      { name: 'Marines Loguetown', banner: 'World Government', members: ['Smoker', 'Tashigi'] }
    ],
    fights: [
      {
        id: 'mihawk-vs-zoro',
        combatants: 'Dracule Mihawk vs. Roronoa Zoro',
        title: 'The World’s Greatest Swordsman vs. The Pirate Hunter',
        location: 'Ocean Restaurant Baratie Deck',
        outcome: 'Zoro defeated with honor; swears sacred oath to Luffy',
        keyClash: 'Three-Sword Onigiri shattered by Black Blade Yoru',
        quote: 'Luffy... can you hear me?! From this day forward... until I defeat this man and become the world’s greatest swordsman... I WILL NEVER LOSE AGAIN! Got a problem with that, King of the Pirates?!',
        speaker: 'Roronoa Zoro (Tears streaming, raising sword to the heavens)',
        description: 'Mihawk parries Zoro’s Santoryu with a 3-inch pocket knife (Kogatana), acknowledging his fierce spirit. Drawing the Supreme Grade Black Blade Yoru, Mihawk slices Zoro’s chest open. Refusing to step backward because "scars on the back are a swordsman’s shame," Zoro earns Mihawk’s supreme respect.',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'luffy-vs-arlong',
        combatants: 'Monkey D. Luffy vs. Saw-Tooth Arlong',
        title: 'Destruction of Arlong Park & Nami’s Freedom',
        location: 'Arlong Park Top Floor (Nami’s Mapping Room)',
        outcome: 'Luffy destroys the fortress and pulverizes Arlong',
        keyClash: 'Gomu Gomu no Axe vs Shark On Darts',
        quote: 'NAMI! YOU ARE MY COMRADE!!',
        speaker: 'Monkey D. Luffy',
        description: 'Enraged by the bloodstained charts Nami was forced to draw for eight years, Luffy smashes Arlong’s desks and kicks a colossal heel straight through Arlong’s spine, crashing the five-story tower to the ground in a cloud of dust.',
        imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'luffy-vs-don-krieg',
        combatants: 'Monkey D. Luffy vs. Don Krieg',
        title: 'Unbreakable Spear vs. The Iron Armor of the Armada',
        location: 'Wreckage of Baratie Sea Fin',
        outcome: 'Luffy punches through Krieg’s spiked mantle and battle spear',
        keyClash: 'Gomu Gomu no Bazooka through MH5 Poison Smoke',
        quote: 'You can have all the weapons in the world, but you don’t have the gut to stake your life on your dream!',
        speaker: 'Monkey D. Luffy',
        description: 'Krieg deploys diamond fists, flamethrowers, and poison gas. Luffy ignores bleeding wounds to punch Krieg directly through his spiked steel armor, proving that a single spear of conviction overcomes all artillery.',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
      }
    ],
    chaptersList: [
      {
        id: 'c-romance-dawn',
        title: 'Romance Dawn: The Boy in the Straw Hat',
        episodes: 'Episodes 1–3',
        description: 'Shanks gives his arm to save Luffy and entrusts him with the Straw Hat. Seven years later, Luffy recruits the demon swordsman Zoro at Shells Town.',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        highlights: ['Shanks’ Sacrifice', 'Zoro tied to execution cross', 'Captain Morgan defeated']
      },
      {
        id: 'c-orange-syrup',
        title: 'Orange Town & Syrup Village',
        episodes: 'Episodes 4–18',
        description: 'Luffy meets cat burglar Nami, defeats Buggy the Clown, and travels to Syrup Village to save Lady Kaya and recruit sniper Usopp aboard the Going Merry.',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
        highlights: ['Chouchou the loyal dog', 'Captain Kuro’s stealth walk', 'Going Merry gifted by Kaya']
      },
      {
        id: 'c-baratie',
        title: 'The Ocean Restaurant: Baratie',
        episodes: 'Episodes 19–30',
        description: 'Meeting sous-chef Sanji. The world’s greatest swordsman Dracule Mihawk appears, slicing a galleon in half and testing Zoro’s resolve.',
        imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=600&q=80',
        highlights: ['Mihawk vs Zoro', 'Zoro’s promise to never lose', 'Sanji’s tearful farewell to Zeff']
      },
      {
        id: 'c-arlong-park',
        title: 'Arlong Park: The Walk to Retribution',
        episodes: 'Episodes 31–44',
        description: 'Nami stabs her own arm in agony until Luffy leaves his Straw Hat on her head. The four Straw Hats march together in slow-motion to Arlong Park.',
        imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
        highlights: ['"Luffy, help me..."', 'The Walk to Arlong Park', 'Gomu Gomu no Axe destroys park']
      },
      {
        id: 'c-loguetown',
        title: 'Loguetown: The Town of the Beginning and the End',
        episodes: 'Episodes 45–61',
        description: 'Under Gol D. Roger’s execution scaffold, Buggy attempts to execute Luffy. Luffy smiles as divine lightning strikes the blade. The crew sets sail for Reverse Mountain.',
        imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
        highlights: ['Luffy smiles on the scaffold', 'Dragon’s green storm rescues Luffy', 'Barrel oath ceremony in storm']
      }
    ],
    iconicMoments: [
      { id: 'zoro-promise', title: 'Zoro’s Eternal Promise', quote: 'I WILL NEVER LOSE AGAIN! Got a problem with that, Pirate King?!', speaker: 'Roronoa Zoro', description: 'Cut down by Mihawk’s black blade Yoru, Zoro raises his white-hilted sword into the sky weeping tears of absolute conviction.', badge: 'Zoro’s Sacred Oath' },
      { id: 'nami-help', title: 'Luffy, Help Me', quote: 'OF COURSE I WILL!!!', speaker: 'Monkey D. Luffy', description: 'Nami stabs her Arlong tattoo until blood flows; Luffy gently places his treasure hat on her head and roars into the heavens.', badge: 'Tearful Plea' },
      { id: 'walk-arlong', title: 'The Walk to Arlong Park', quote: 'Which one of you is Arlong?', speaker: 'Monkey D. Luffy', description: 'Luffy, Zoro, Sanji, and Usopp stride shoulder-to-shoulder with unyielding rage to demolish the fish-man fortress.', badge: 'Legendary Walk' },
      { id: 'barrel-oath', title: 'The Barrel Oath on Reverse Mountain', quote: 'All Blue! Pirate King! World’s Greatest Swordsman! Brave Warrior of the Sea! World Map!', speaker: 'The Straw Hats', description: 'In a torrential sea storm, each of the five original Straw Hats rests their foot on a wooden sake barrel, vowing their life’s dream to the Grand Line.', badge: 'The Grand Line Oath' }
    ]
  },
  {
    id: 'alabasta',
    title: 'Alabasta',
    japaneseTitle: 'アラバスタ編',
    subtitle: 'Sand, Rebellion, and the Symbol of Friendship',
    saga: 'Alabasta Saga',
    episodes: 'Episodes 92–130',
    chapters: 'Chapters 155–217',
    year: '2001–2002',
    bgGradient: 'from-yellow-950 via-amber-950 to-stone-950',
    accentColor: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.45)',
    themeType: 'desert_sand',
    bgImage: './images/arcs/alabasta.png',
    shortDesc: 'A kingdom starved of rain by Warlord Crocodile teeters on the brink of civil war. The Straw Hats race across scorching dunes to protect Princess Vivi.',
    fullSynopsis: 'Baroque Works manipulates the rain in Alabasta using dance powder. Princess Vivi risks everything to stop a catastrophic clash between the Rebel Army and Royal Guard. In the underground tombs beneath Alubarna, Luffy coats his fists in his own blood to strike down Sir Crocodile, while Zoro unlocks the Breath of All Things to slice through steel.',
    keyCharacters: ['Monkey D. Luffy', 'Nefertari Vivi', 'Sir Crocodile', 'Portgas D. Ace', 'Nico Robin', 'Bon Clay', 'Mr. 1 (Daz Bonez)'],
    locations: ['Nanohana', 'Rainbase Casino', 'Yuba Oasis', 'Alubarna Palace', 'Royal Mausoleum'],
    factions: [
      { name: 'Straw Hat Pirates & Royal Guard', banner: 'The Liberators', members: ['Luffy', 'Zoro', 'Sanji', 'Vivi', 'Chaka', 'Pell'] },
      { name: 'Baroque Works', banner: 'Criminal Syndicate', members: ['Crocodile', 'Mr. 1 (Daz Bonez)', 'Mr. 2 (Bon Clay)', 'Miss Doublefinger'] }
    ],
    fights: [
      {
        id: 'luffy-vs-crocodile-3',
        combatants: 'Monkey D. Luffy vs. Sir Crocodile',
        title: 'Blood-Stained Fists vs. The Desert King',
        location: 'Ancient Underground Mausoleum',
        outcome: 'Luffy punches Crocodile through bedrock into the sky',
        keyClash: 'Gomu Gomu no Storm vs Desert Spada & Sables',
        quote: 'I don’t care who you are! I’m going to surpass you and become Pirate King!!',
        speaker: 'Monkey D. Luffy',
        description: 'Crocodile uses a poisoned scorpion hook. Luffy uses his own blood to solidify Crocodile’s sand body, launching him miles into the sky with hundreds of upward blood-soaked punches to Dvořák’s New World Symphony.',
        imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'zoro-vs-mr1',
        combatants: 'Roronoa Zoro vs. Mr. 1 (Daz Bonez)',
        title: 'The Breath of All Things: Slicing Steel',
        location: 'Alubarna City Gates',
        outcome: 'Zoro cuts Daz Bonez’s steel body in a single draw',
        keyClash: 'Lion’s Song (Iai: Shishi Sonson) vs Atomic Spurt',
        quote: 'Thank you. I have grown stronger because of you.',
        speaker: 'Roronoa Zoro',
        description: 'Bleeding from a hundred razor cuts, Zoro sits in stillness, sensing the heartbeat of the fallen stones, the leaves, and the iron blades inside Mr. 1’s body before drawing his blade in an instant flash of light.',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'sanji-vs-bon-clay',
        combatants: 'Sanji vs. Mr. 2 Bon Clay (Bentham)',
        title: 'The Battle of Passion & Ballet Kenpo',
        location: 'Alubarna Street Promenade',
        outcome: 'Sanji outmaneuvers Bon Clay’s Mane Mane transformations',
        keyClash: 'Veau Shot vs Swan Bombardier',
        quote: 'A real man forgives a woman’s lies.',
        speaker: 'Sanji',
        description: 'Bon Clay transforms into Nami to exploit Sanji’s chivalry. Sanji figures out that Bon Clay must return to his male form to attack, timing a bone-crushing Veau Shot kick that launches Bon Clay into a fountain.',
        imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80'
      }
    ],
    chaptersList: [
      {
        id: 'c-drum-island',
        title: 'Drum Island: The Cherry Blossom Miracle',
        episodes: 'Episodes 78–91',
        description: 'Nami falls dangerously ill. Luffy carries her up a vertical frozen mountain with bare hands. They defeat Warlock Wapol and recruit doctor Chopper.',
        imageUrl: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=600&q=80',
        highlights: ['Luffy climbs Drum Rockies', 'Dr. Hiluluk’s death speech', 'Pink sakura powder over snow']
      },
      {
        id: 'c-desert-journey',
        title: 'Crossing the Sand Dunes to Rainbase',
        episodes: 'Episodes 92–109',
        description: 'Meeting Fire Fist Ace in Nanohana. Infiltrating Crocodile’s casino Rainbase, where Crocodile leaves Luffy to suffocate in quicksand.',
        imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
        highlights: ['Ace enters the story', 'Sanji acts as Mr. Prince', 'Crocodile pierces Luffy with hook']
      },
      {
        id: 'c-alubarna-battle',
        title: 'The Battle of Alubarna & The Bomb',
        episodes: 'Episodes 110–130',
        description: 'The Straw Hats duel the Baroque Works officer agents while Princess Vivi searches desperately for the bomb clock in the royal square.',
        imageUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80',
        highlights: ['Pell flies bomb into sky', 'Zoro cuts steel', 'Luffy punches Crocodile through roof']
      }
    ],
    iconicMoments: [
      { id: 'x-mark', title: 'The Silent "X" Mark of Comradeship', quote: 'No matter what happens from here on out, this mark on our left arm is proof that we are comrades!', speaker: 'Nefertari Vivi & The Straw Hats', description: 'As the Going Merry departs, Marine ships pursue. The crew stands in profound silence raising their left arms bound with the black X mark.', badge: 'Eternal Bond' },
      { id: 'hiluluk-speech', title: 'Dr. Hiluluk’s Final Speech', quote: 'When does a man die? When he is hit by a bullet? No. When he is forgotten! A man dies when people forget him!', speaker: 'Dr. Hiluluk', description: 'Surrounded by Wapol’s firing squad, Hiluluk smiles and drinks his own potion as a true doctor who cured a kingdom.', badge: 'Philosophy of Immortality' }
    ]
  },
  {
    id: 'wano',
    title: 'Wano Country',
    japaneseTitle: 'ワノ国編',
    subtitle: 'Rooftop War of the Four Emperors & Sun God Nika Awakens',
    saga: 'Wano Country Saga',
    episodes: 'Episodes 890–1085',
    chapters: 'Chapters 909–1057',
    year: '2019–2023',
    bgGradient: 'from-amber-950 via-red-950 to-stone-950',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.6)',
    themeType: 'samurai_wano_flame',
    bgImage: './images/arcs/wano.png',
    shortDesc: 'The greatest raid in pirate history. The alliance storms Onigashima during the Fire Festival, unlocking Gear 5 and Sun God Nika.',
    fullSynopsis: 'Under Emperor Kaido and Orochi’s 20-year reign, Wano starved. The samurai alliance invades the skull fortress of Onigashima as Kaido lifts the island into the sky. On the rooftop, Luffy is struck down by Kaido, but his heart awakens the rhythm of the Drums of Liberation: Sun God Nika and Gear 5. Luffy turns into his pure white form, manipulating lightning and dropping an island-sized Bajrang Gun.',
    keyCharacters: ['Monkey D. Luffy (Gear 5)', 'Kaido of the Beasts', 'Roronoa Zoro (King of Hell)', 'Sanji (Ifrit Jambe)', 'Kozuki Oden', 'Yamato', 'Trafalgar Law', 'Eustass Kid'],
    locations: ['Flower Capital', 'Udon Prison', 'Ringo Graveyard', 'Onigashima Skull Rooftop', 'Bottom of Wano (Magma Chamber)'],
    factions: [
      { name: 'Ninja-Pirate-Mink-Samurai Alliance', banner: '5,400 Samurai of Kozuki', members: ['Luffy (Gear 5)', 'Zoro', 'Sanji', 'Law', 'Kid', 'Yamato', 'Akazaya Nine', 'Marco'] },
      { name: 'Beasts Pirates & Big Mom Alliance', banner: 'Two Emperors of the Sea', members: ['Kaido', 'Big Mom', 'King', 'Queen', 'Jack', 'Tobi Roppo'] }
    ],
    fights: [
      {
        id: 'luffy-vs-kaido-gear5',
        combatants: 'Monkey D. Luffy (Gear 5 White Form) vs. Emperor Kaido',
        title: 'Joy Boy Awakes: Sun God Nika vs. The Strongest Creature',
        location: 'Onigashima Skull Dome Rooftop & Clouds',
        outcome: 'Kaido buried into subterranean magma by island-sized Bajrang Gun',
        keyClash: 'Gomu Gomu no Bajrang Gun vs Flame Dragon Torch (Kaen Daiko)',
        quote: 'The drums of liberation! Ha ha ha ha! As long as I’m having fun, anything is possible! Joy Boy has returned!!',
        speaker: 'Monkey D. Luffy (Gear 5 Sun God Nika)',
        description: 'Luffy’s hair turns burning white, eyes pop with cartoon ecstasy, and his body bounces with pure freedom. He grabs lightning bolts out of the stormy clouds like jump-ropes, turns Kaido into a balloon, and coats an island-sized fist in Advanced Conqueror’s Haki to crush Kaido deep into Wano’s core.',
        imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'zoro-vs-king',
        combatants: 'Roronoa Zoro vs. King the Conflagration',
        title: 'The King of Hell Awakens vs. The Last Lunarian',
        location: 'Onigashima Outer Wall Fortress',
        outcome: 'Zoro cuts King’s imperial dragon fire and right wing off',
        keyClash: 'King of Hell Three Swords: Billion-Fold Trichiliocosm vs Imperial Flame Dragon',
        quote: 'I made a promise to my captain and my best friend... I will become the King of Hell!',
        speaker: 'Roronoa Zoro',
        description: 'Realizing King’s flame controls his invincibility and speed, Zoro unleashes Supreme Conqueror’s Haki through Enma, cloaking three swords in crackling green demonic lightning to slice through King’s 10,000-degree imperial dragon.',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'sanji-vs-queen',
        combatants: 'Sanji vs. Queen the Plague',
        title: 'Ifrit Jambe: Blue Flame of Passion vs. Cyborg Dinosaur',
        location: 'Onigashima Pleasure Hall',
        outcome: 'Sanji launches Queen completely off the island with 9 supersonic kicks',
        keyClash: 'Ifrit Jambe: Bœuf Burst vs Stealth Black Germa Tech',
        quote: 'My father gave me exoskeleton armor, but my mother gave me a human heart! A hotter flame... blue flames that burn everything!',
        speaker: 'Sanji',
        description: 'Sanji shatters the Germa raid suit, refusing to become an emotionless killer. Blending his awakened genetic exoskeleton with fiery passion, his kicks ignite with blazing blue plasma flames, obliterating Queen into the sky.',
        imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80'
      }
    ],
    chaptersList: [
      {
        id: 'c-act-1-2',
        title: 'Acts 1 & 2: Oden’s Land & Udon Prison',
        episodes: 'Episodes 890–958',
        description: 'Luffy meets Tama, clashes with Kaido, is thrown into Udon prison, and learns Advanced Armament Haki (Ryuo) with Old Man Hyogoro.',
        imageUrl: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=600&q=80',
        highlights: ['Kaido Thunder Bagua one-shot', 'Ryuo training in Udon', 'Big Mom invades Udon']
      },
      {
        id: 'c-oden-flashback',
        title: 'The Legend of Kozuki Oden & Roger’s Laugh',
        episodes: 'Episodes 959–976',
        description: 'Kozuki Oden voyages with Whitebeard and Gol D. Roger, reaching Laugh Tale. Returning to Wano, Oden endures the legendary hour in boiling oil.',
        imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
        highlights: ['Gol D. Roger laughs at Laugh Tale', 'Oden boiled in oil for 1 hour', 'Oden’s death with guns fired']
      },
      {
        id: 'c-raid-onigashima',
        title: 'The Fire Festival Raid & Rooftop Supernovas',
        episodes: 'Episodes 977–1085',
        description: 'The 5,400 samurai storm Onigashima. Five Supernovas clash against Kaido and Big Mom. Gear 5 awakens, liberating Wano forever.',
        imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
        highlights: ['Zoro cuts Kaido with Enma', 'Drums of Liberation beat', 'Gear 5 Bajrang Gun buries Kaido']
      }
    ],
    iconicMoments: [
      { id: 'joyboy-awakening', title: 'Joy Boy Has Returned! Gear 5 White Form', quote: 'The drums of liberation! Ha ha ha ha! This is my peak!!', speaker: 'Monkey D. Luffy', description: 'Zunesha announces across the sea: "Joy Boy has returned!" Luffy’s hair turns brilliant pure white as laughter erupts across Onigashima.', badge: 'Peak Anime History' },
      { id: 'zoro-scars-kaido', title: 'Ashura: Dead Man’s Game Scars Kaido', quote: 'This was the best I could do... I hope it at least leaves a scar.', speaker: 'Roronoa Zoro', description: 'With thirty broken bones, Zoro unleashes Kyutoryu Ashura, carving an indelible cross-scar into Kaido’s chest.', badge: 'Scar of an Emperor' }
    ]
  },
  {
    id: 'enies-lobby',
    title: 'Enies Lobby',
    japaneseTitle: 'エニエス・ロビー編',
    subtitle: 'Declaration of War on the World Government',
    saga: 'Water 7 Saga',
    episodes: 'Episodes 264–312',
    chapters: 'Chapters 375–430',
    year: '2006–2007',
    bgGradient: 'from-orange-950 via-red-950 to-slate-950',
    accentColor: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.55)',
    themeType: 'fire_justice_fortress',
    bgImage: './images/arcs/enies-lobby.png',
    shortDesc: 'Standing before the Court of Justice, the Straw Hats shoot down the World Government flag, demand Robin live, and unleash Gears 2 and 3.',
    fullSynopsis: 'To save Nico Robin from the World Government’s Buster Call, the Straw Hats invade the judicial island that knows no night. Luffy orders Sogeking to incinerate the World Government flag. Each Straw Hat pushes beyond mortal limits: Luffy unveils Gear Second and Gear Third, Zoro summons demon Asura, Sanji ignites Diable Jambe, and the soul of the Going Merry sails through cannon fire to save them.',
    keyCharacters: ['Monkey D. Luffy', 'Nico Robin', 'Rob Lucci', 'Sogeking', 'Roronoa Zoro', 'Spandam'],
    locations: ['Courthouse', 'Tower of Law', 'Bridge of Hesitation', 'Gate of Justice'],
    factions: [
      { name: 'Straw Hat Infiltration Unit', banner: 'War on the World', members: ['Luffy', 'Zoro', 'Sanji', 'Sogeking', 'Franky', 'Chopper', 'Nami'] },
      { name: 'Cipher Pol 9', banner: 'Assassination Elite', members: ['Rob Lucci', 'Kaku', 'Jabura', 'Blueno', 'Kumadori', 'Fukuro', 'Kalifa'] }
    ],
    fights: [
      {
        id: 'luffy-vs-lucci-1',
        combatants: 'Monkey D. Luffy vs. Rob Lucci',
        title: 'Gear 2 Jet Gatling vs. Ultimate Rokuogan',
        location: 'Bridge of Hesitation Pillar Room',
        outcome: 'Luffy unleashes final Jet Gatling through Lucci’s iron body',
        keyClash: 'Gomu Gomu no Jet Gatling vs Sai Dai Rin: Rokuogan',
        quote: 'As long as you’re alive... you will hunt my comrades! I will not let you take one step past this door!!',
        speaker: 'Monkey D. Luffy',
        description: 'Lucci’s Leopard hybrid form unleashes the secret martial technique Rokuogan, devastating Luffy’s internal organs. Refusing to fall while Robin watches, Luffy enters Gear Second and unloads hundreds of supersonic punches into Lucci’s chest.',
        imageUrl: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'zoro-vs-kaku',
        combatants: 'Roronoa Zoro vs. Kaku',
        title: 'Nine-Sword Asura vs. Four-Sword Sky Slicer',
        location: 'Tower of Law Lower Level',
        outcome: 'Zoro’s demon manifestation slices Kaku’s Rankyaku',
        keyClash: 'Demon Asura: Ichibugin vs Rankyaku Kiri Shigure',
        quote: 'Suffering is good on the path to carnage. Kyutoryu: Asura!!',
        speaker: 'Roronoa Zoro',
        description: 'Kaku transforms into an awakened giraffe Zoan wielding four swords. Zoro’s intense spirit manifests three heads and six arms, vaporizing Kaku’s slicing storm in a single stroke.',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80'
      }
    ],
    chaptersList: [
      {
        id: 'c-flag-shoot',
        title: 'Declaration of War: Shoot Down the Flag',
        episodes: 'Episodes 264–278',
        description: 'Standing on the Courthouse rooftop facing CP9 across the chasm, Luffy tells Sogeking to burn the flag of 170 allied nations.',
        imageUrl: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=600&q=80',
        highlights: ['"I want to live!"', 'Sogeking Firebird Star', 'Straw Hats shoulder to shoulder']
      },
      {
        id: 'c-cp9-duels',
        title: 'The Duels for the Keys to Robin’s Handcuffs',
        episodes: 'Episodes 279–302',
        description: 'Chopper enters Monster Point to crush Kumadori. Nami defeats Kalifa with Thunder Lance. Sanji ignites Diable Jambe against Jabra.',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
        highlights: ['Chopper Monster Point', 'Sanji Diable Jambe', 'Zoro Asura Nine-Sword']
      },
      {
        id: 'c-merry-farewell',
        title: 'The Miracle of Merry & The Viking Funeral',
        episodes: 'Episodes 303–312',
        description: 'The Going Merry appears through the Buster Call smoke to save her crew. In a snowy sea, Luffy sets torch to her broken keel.',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        highlights: ['Merry’s voice: "Let’s go home"', 'Snowfall on the sea', '"Thank you for loving me"']
      }
    ],
    iconicMoments: [
      { id: 'i-want-to-live', title: 'I Want To Live!', quote: 'I WANT TO LIVE! TAKE ME OUT TO SEA WITH YOU!!', speaker: 'Nico Robin', description: 'Tears flood Robin’s eyes as she screams her deepest wish to live across the gap to the Straw Hats.', badge: 'Peak Emotional Scene' },
      { id: 'merry-tears', title: 'Merry’s Final Words', quote: 'I was happy... thank you for loving me all this time.', speaker: 'Going Merry', description: 'The ship’s spirit speaks to her weeping crew as golden flames consume her hull under falling snow.', badge: 'Viking Funeral' }
    ]
  },
  {
    id: 'marineford',
    title: 'Marineford',
    japaneseTitle: 'マリンフォード頂上戦争編',
    subtitle: 'The Paramount War & The Death of Whitebeard',
    saga: 'Summit War Saga',
    episodes: 'Episodes 457–489',
    chapters: 'Chapters 550–580',
    year: '2010–2011',
    bgGradient: 'from-blue-950 via-slate-950 to-red-950',
    accentColor: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.55)',
    themeType: 'battlefield_ice_fire',
    bgImage: './images/arcs/marineford.png',
    shortDesc: 'The greatest war in modern history. The Whitebeard Pirates invade Marine Headquarters to save Fire Fist Ace from the execution scaffold.',
    fullSynopsis: 'Fifty thousand Marine elite soldiers and the Seven Warlords gather at Marineford to publicly execute Gol D. Roger’s son, Portgas D. Ace. Edward Newgate, the Strongest Man in the World, fractures the ocean as 43 allied New World pirate crews emerge. Falling from the sky aboard a stolen battleship, Luffy charges the three Admirals on sheer willpower.',
    keyCharacters: ['Monkey D. Luffy', 'Edward Newgate (Whitebeard)', 'Portgas D. Ace', 'Fleet Admiral Sengoku', 'Admiral Akainu', 'Red-Haired Shanks', 'Blackbeard'],
    locations: ['Execution Scaffold', 'Frozen Crescent Bay', 'Marineford Fortress', 'Oris Plaza'],
    factions: [
      { name: 'Whitebeard Pirates & Alliance', banner: 'Sons of the Sea Emperor', members: ['Whitebeard', 'Marco', 'Jozu', 'Vista', 'Luffy', 'Jinbe', 'Crocodile'] },
      { name: 'Marine Headquarters & Seven Warlords', banner: 'Absolute Justice', members: ['Sengoku', 'Garp', 'Akainu', 'Aokiji', 'Kizaru', 'Mihawk', 'Hancock'] }
    ],
    fights: [
      {
        id: 'whitebeard-vs-akainu',
        combatants: 'Edward Newgate (Whitebeard) vs. Admiral Akainu',
        title: 'Wrath of a Father vs. Molten Magma',
        location: 'Marineford Oris Plaza',
        outcome: 'Whitebeard splits Marineford island in half; Akainu falls into fissure',
        keyClash: 'Quake Fist to the Ribs vs Hellhound Magma Punch',
        quote: 'You took my son’s life... pay with your blood!!',
        speaker: 'Edward Newgate (Whitebeard)',
        description: 'Enraged by Ace’s death, Whitebeard appears behind Akainu. Even with half his skull melted away by molten magma, Whitebeard strikes Akainu with a seismic shockwave so massive it shatters Marine Headquarters fortress into two separated tectonic plates.',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'luffy-vs-three-admirals',
        combatants: 'Monkey D. Luffy vs. Akainu, Aokiji & Kizaru',
        title: 'The Rookie Stands Before the Three Admirals',
        location: 'Frozen Crescent Bay Ice Sheet',
        outcome: 'Luffy bypasses the admirals on sheer indomitable willpower',
        keyClash: 'Frozen Ship Mast Throw vs Ice Saber, Magma Fist & Light Beam',
        quote: 'Give Ace back to me!!',
        speaker: 'Monkey D. Luffy',
        description: 'Holding a frozen mast, 17-year-old Luffy drops right before the three supreme military commanders of the World Government alone, proving his willpower surpasses fear.',
        imageUrl: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80'
      }
    ],
    chaptersList: [
      {
        id: 'c-summit-war-begins',
        title: 'The Tsunami & Luffy Falls from the Sky',
        episodes: 'Episodes 457–468',
        description: 'Whitebeard splits the ocean with Quake punches. Aokiji freezes the tsunami. Suddenly, Luffy and 200 Impel Down escapees drop from the sky.',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
        highlights: ['Whitebeard splits ocean', 'Luffy sky drop with battleship', 'Conqueror’s Haki halts executioners']
      },
      {
        id: 'c-ace-rescue-death',
        title: 'Ace Freed & The Magma Fist',
        episodes: 'Episodes 469–483',
        description: 'Luffy frees Ace from the scaffold with Mr. 3’s key. Fighting back-to-back, Ace shields Luffy from Akainu’s magma fist with his own body.',
        imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=600&q=80',
        highlights: ['Ace & Luffy brother duo fight', 'Akainu burns Ace’s Vivre Card', 'Ace’s dying smile in Luffy’s arms']
      },
      {
        id: 'c-whitebeard-death-shanks',
        title: 'The One Piece is Real & Shanks Ends the War',
        episodes: 'Episodes 484–489',
        description: 'Whitebeard roars to the world that the One Piece is real and dies standing upright. Red-Haired Shanks blocks Akainu’s magma fist to end the slaughter.',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        highlights: ['"The One Piece is Real!"', 'Whitebeard dies standing without retreat scars', 'Shanks halts the war']
      }
    ],
    iconicMoments: [
      { id: 'ace-death', title: 'Ace’s Final Words', quote: 'Thank you for loving me, even though I had the blood of a demon in my veins!', speaker: 'Portgas D. Ace', description: 'With his back burnt through by Akainu to shield Luffy, Ace smiles with tears of gratitude as his Vivre Card burns to ashes.', badge: 'Tears of Blood' },
      { id: 'one-piece-real', title: 'The One Piece Does Exist!', quote: 'THE ONE PIECE IS REAL! (ワンピースは実在する!!!)', speaker: 'Edward Newgate (Whitebeard)', description: 'Standing tall with 267 sword wounds and half his face melted, Whitebeard roars his final truth to the entire planet before dying upright.', badge: 'Death of a Titan' }
    ]
  },
  {
    id: 'egghead',
    title: 'Egghead Island',
    japaneseTitle: 'エッグヘッド編',
    subtitle: 'The Island of the Future & The Void Century Truth',
    saga: 'Final Saga',
    episodes: 'Episodes 1086–Present',
    chapters: 'Chapters 1058–Present',
    year: '2023–Present',
    bgGradient: 'from-cyan-950 via-fuchsia-950 to-slate-950',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.65)',
    themeType: 'scifi_egghead_holo',
    bgImage: './images/arcs/egghead.png',
    shortDesc: 'The Island of the Future 500 years ahead in technology. The Straw Hats meet Dr. Vegapunk and clash against Admiral Kizaru and the Five Elders.',
    fullSynopsis: 'Egghead is not the island of the future, but a fragment of the past—the ancient high-tech Void Century civilization. Dr. Vegapunk seeks Luffy’s protection as the World Government deploys Admiral Kizaru and Saint Jaygarcia Saturn to execute him. As Vegapunk initiates a worldwide broadcast revealing that the world is sinking into the sea, all Five Elders manifest in their demonic yokai avatars.',
    keyCharacters: ['Monkey D. Luffy (Gear 5)', 'Dr. Vegapunk (Stella + Satellites)', 'Saint Jaygarcia Saturn', 'Admiral Kizaru', 'Bartholomew Kuma', 'Jewelry Bonney', 'Rob Lucci (Awakened)'],
    locations: ['Fabriophase', 'Labophase', 'Punk Records', 'Mother Flame Chamber', 'Egghead Coast'],
    factions: [
      { name: 'Straw Hat Pirates & Vegapunk Satellite Team', banner: 'Truth of the Void Century', members: ['Luffy (Gear 5)', 'Zoro', 'Sanji', 'Vegapunk Stella', 'Shaka', 'Lilith', 'Atlas', 'Bonney'] },
      { name: 'World Government Buster Fleet & Gorosei', banner: 'The Five Elders Yokai', members: ['Saturn', 'Warcury', 'Nusjuro', 'Mars', 'Ju Peter', 'Kizaru', 'CP0 Lucci'] }
    ],
    fights: [
      {
        id: 'gear5-vs-saturn-kizaru',
        combatants: 'Monkey D. Luffy (Gear 5 White Form) vs. Saint Saturn & Admiral Kizaru',
        title: 'Dawn Cymbal: Clapping the Elder & Admiral Like Pancakes',
        location: 'Egghead Island Coastline',
        outcome: 'Luffy flattens Saturn and Kizaru and spins them like pizza dough',
        keyClash: 'Dawn Cymbal & Booming Laughter vs Black Yokai Lightning & Light Kick',
        quote: 'You guys look just like two flat pancakes!! Have a spin!!',
        speaker: 'Monkey D. Luffy (Gear 5 White Form)',
        description: 'In his blinding white Joy Boy form, Luffy claps both Saint Jaygarcia Saturn and light-speed Admiral Kizaru together like copper cymbals, spins them like pizza dough, and flings them skipping across the ocean surface.',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'kuma-vs-saturn',
        combatants: 'Bartholomew Kuma vs. Saint Jaygarcia Saturn',
        title: 'The Fist of a Father That Shook the World',
        location: 'Fabriophase Research Ground',
        outcome: 'Kuma punches Saturn through multiple skyscraper laboratories',
        keyClash: 'Armament Clenched Fist of a Father vs Demonic Spider Leg Spear',
        quote: 'For Bonney!!',
        speaker: 'Bartholomew Kuma',
        description: 'Missing limbs and with his cybernetic self-destruct mechanism triggered, Kuma is propelled across half the world by love alone, clenching his fist with tears streaming to smash Saint Saturn into broken rubble.',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
      }
    ],
    chaptersList: [
      {
        id: 'c-future-island',
        title: 'Arrival on the Island of the Future',
        episodes: 'Episodes 1086–1100',
        description: 'Straw Hats enter Egghead, encountering light holograms, giant robotic sea beasts, and Dr. Vegapunk’s six distinct satellites.',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
        highlights: ['Holographic food machine', 'Giant Iron Giant Robot', 'Awakened Lucci vs Gear 5']
      },
      {
        id: 'c-saturn-kuma',
        title: 'The Descent of Saturn & Kuma’s Flashback',
        episodes: 'Episodes 1101–1115',
        description: 'Saint Saturn arrives on Egghead through black summoning circle. Kuma’s tragic life with Ginny and Bonney is revealed.',
        imageUrl: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=600&q=80',
        highlights: ['Kuma’s childhood & Buccaneer race', 'Kuma punches Saturn', 'Sanji protects Bonney']
      },
      {
        id: 'c-vegapunk-broadcast',
        title: 'The Worldwide Broadcast: The World is Sinking!',
        episodes: 'Episodes 1116–Present',
        description: 'Vegapunk’s posthumous transmission interrupts transponder snails across the planet. All Five Elders manifest their gigantic Yokai forms.',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
        highlights: ['"The world is sinking into the sea"', 'All 5 Elders summon simultaneously', 'Iron Giant awakens to Drums of Liberation']
      }
    ],
    iconicMoments: [
      { id: 'vegapunk-truth', title: 'The World is Sinking!', quote: 'Our world is sinking into the sea! Those who caused the flood 800 years ago still walk among us!', speaker: 'Dr. Vegapunk Stella', description: 'Vegapunk’s worldwide broadcast shocks every kingdom, pirate, and marine across all four seas.', badge: 'Void Century Revelation' }
    ]
  }
];
