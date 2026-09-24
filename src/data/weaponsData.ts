export type BladeGrade =
  | 'Supreme Grade (12 Saijo O Wazamono)'
  | 'Great Grade (21 O Wazamono)'
  | 'Skillful Grade (50 Ryo Wazamono)'
  | 'Ungraded / Special Cursed Blade';

export interface LegendaryBlade {
  id: string;
  name: string;
  japaneseName: string;
  grade: BladeGrade;
  type: string;
  isBlackBlade: boolean;
  smith: string;
  formerWielders: string[];
  currentWielder: string;
  currentLocation: string;
  description: string;
  notableFeats: string[];
  image: string;
  accentColor: string;
}

export interface StrawHatWeapon {
  id: string;
  crewMember: string;
  weaponName: string;
  weaponType: string;
  creatorOrOrigin: string;
  currentEnhancements: string;
  description: string;
  signatureTechniques: string[];
  characterImage: string;
  weaponImage?: string;
  themeColor: string;
}

export const LEGENDARY_BLADES: LegendaryBlade[] = [
  {
    id: 'yoru',
    name: 'Yoru (Night)',
    japaneseName: '夜',
    grade: 'Supreme Grade (12 Saijo O Wazamono)',
    type: 'Cruciform Greatsword (Kokuto)',
    isBlackBlade: true,
    smith: 'Unknown Master Swordsmith of Ancient Era',
    formerWielders: ['Unknown Ancient Wielders'],
    currentWielder: 'Dracule Mihawk (World’s Strongest Swordsman)',
    currentLocation: 'In Mihawk’s possession (Cross Guild Headquarters / Kuraigana Island)',
    description: 'One of only two known permanently forged Black Blades (Kokuto) in the world. Decorated in a cross shape taller than a man, adorned with golden cabochon gems. Its cutting power can bisect colossal galleons and glaciers miles away with casual air pressure.',
    notableFeats: [
      'Bisected Don Krieg’s 50-ship armada in the East Blue',
      'Cleanly cleaved Aokiji’s colossal frozen tsunami at Marineford from across the battlefield',
      'Defeated Roronoa Zoro at Baratie with absolute precision'
    ],
    image: './images/blades/yoru.png',
    accentColor: '#e11d48'
  },
  {
    id: 'murakumogiri',
    name: 'Murakumogiri (Cloud Cutter)',
    japaneseName: 'むら雲切',
    grade: 'Supreme Grade (12 Saijo O Wazamono)',
    type: 'Heavy Polearm Naginata',
    isBlackBlade: false,
    smith: 'Ancient Master Weapon Craftsman',
    formerWielders: ['Edward Newgate (Whitebeard)'],
    currentWielder: 'None (Resting at Whitebeard’s Grave)',
    currentLocation: 'Sphinx Island (Whitebeard & Ace’s Gravesite, protected by Marco)',
    description: 'Whitebeard’s legendary naginata that clashed on equal footing with Gol D. Roger’s sword Ace. Capable of channeling Whitebeard’s earth-shattering Tremor vibrations and Advanced Conqueror’s Haki.',
    notableFeats: [
      'Clashed against Gol D. Roger’s Ace, splitting the sky without the blades touching',
      'Channeled Gura Gura tremors to shatter Marineford headquarters plaza',
      'Repelled Admiral Sakazuki’s magma strikes during the Summit War'
    ],
    image: './images/blades/murakumogiri.png',
    accentColor: '#38bdf8'
  },
  {
    id: 'enma',
    name: 'Enma (King of Hell)',
    japaneseName: '閻魔',
    grade: 'Great Grade (21 O Wazamono)',
    type: 'Katana (Hell King Blade)',
    isBlackBlade: false,
    smith: 'Shimotsuki Kozaburo (Wano Kuni)',
    formerWielders: ['Kozuki Oden', 'Kozuki Hiyori'],
    currentWielder: 'Roronoa Zoro',
    currentLocation: 'In Roronoa Zoro’s Santoryu arsenal (En Route to Elbaph)',
    description: 'The blade that can cut to the bottom of the underworld. Forged alongside Wado Ichimonji by Shimotsuki Kozaburo. Enma forcibly drains and discharges vast quantities of the wielder’s Ryuo/Conqueror’s Haki, allowing Zoro to awaken King of Hell Three-Sword Style.',
    notableFeats: [
      'Carved the only permanent cross-scar on Kaido’s impervious dragon skin (wielded by Oden)',
      'Tamed by Roronoa Zoro on Onigashima to cut through King the Conflagration’s imperial flames',
      'Has the potential to rank up into a Supreme Grade if Zoro turns it into a permanent Black Blade'
    ],
    image: './images/blades/enma.png',
    accentColor: '#9333ea'
  },
  {
    id: 'wado-ichimonji',
    name: 'Wado Ichimonji (Straight Road of Harmony)',
    japaneseName: '和道一文字',
    grade: 'Great Grade (21 O Wazamono)',
    type: 'Katana (Pure White Sheath)',
    isBlackBlade: false,
    smith: 'Shimotsuki Kozaburo (Wano Kuni)',
    formerWielders: ['Kuina', 'Shimotsuki Koushirou'],
    currentWielder: 'Roronoa Zoro',
    currentLocation: 'In Roronoa Zoro’s mouth blade position (The Soul of Kuina)',
    description: 'The sacred heirloom of the Shimotsuki clan. Possesses an unblemished pure white scabbard and circular tsuba. It survived Mihawk’s Yoru without a single scratch when Zoro’s two other swords shattered at Baratie.',
    notableFeats: [
      'Withstood Mihawk’s Black Blade Yoru without cracking',
      'Cut Mr. 1’s steel body in Alabasta when Zoro learned the Breath of All Things',
      'Carried into every single battle from East Blue to Egghead as Zoro’s heart'
    ],
    image: './images/blades/wado.png',
    accentColor: '#f8fafc'
  },
  {
    id: 'shusui',
    name: 'Shusui (Clear Autumn Water)',
    japaneseName: '秋水',
    grade: 'Great Grade (21 O Wazamono)',
    type: 'Black Blade Katana (Kokuto)',
    isBlackBlade: true,
    smith: 'Ancient Wano Swordsmith',
    formerWielders: ['Shimotsuki Ryuma (Sword God)', 'Roronoa Zoro'],
    currentWielder: 'National Treasure of Wano (Enshrined)',
    currentLocation: 'Ringo Cemetery, Wano Kuni (Returned to Sword God Ryuma’s grave)',
    description: 'The National Treasure of Wano. Forged into a permanent Black Blade through countless deadly battles by Sword God Ryuma, who once slew a western dragon above the Flower Capital. Bestowed upon Zoro after their duel in Thriller Bark, then traded for Enma.',
    notableFeats: [
      'Turned black permanently by Sword God Ryuma 400 years ago',
      'Unleashed destructive flying slashes so heavy they absorbed Zoro’s two other slashes',
      'Protected Wano’s sovereignty throughout the Golden Age of Samurai'
    ],
    image: './images/blades/shusui.png',
    accentColor: '#dc2626'
  },
  {
    id: 'sandai-kitetsu',
    name: 'Sandai Kitetsu (Third Generation Demon Splitter)',
    japaneseName: '三代鬼徹',
    grade: 'Skillful Grade (50 Ryo Wazamono)',
    type: 'Cursed Katana',
    isBlackBlade: false,
    smith: 'Tenguyama Hitetsu (Kozuki Sukiyaki)',
    formerWielders: ['Ipponmatsu (Loguetown Sword Merchant)'],
    currentWielder: 'Roronoa Zoro',
    currentLocation: 'In Roronoa Zoro’s Santoryu arsenal',
    description: 'A notorious cursed blade that brings a gruesome death to all who wield it. Zoro tested his luck against the curse in Loguetown by tossing it into the air and holding his arm out; the blade spun around his arm without harming him, earning Ipponmatsu’s eternal admiration.',
    notableFeats: [
      'Passed Zoro’s famous Loguetown gamble of destiny',
      'Known for its bloodthirsty sharp edge that cuts even when the user intends not to',
      'Fought through Alabasta, Enies Lobby, Thriller Bark, Dressrosa, and Onigashima'
    ],
    image: './images/blades/sandai-kitetsu.png',
    accentColor: '#ef4444'
  },
  {
    id: 'kikoku',
    name: 'Kikoku (Demon Cry)',
    japaneseName: '鬼哭',
    grade: 'Ungraded / Special Cursed Blade',
    type: 'Cursed Nodachi (Long Sword)',
    isBlackBlade: false,
    smith: 'Unknown Master Swordsmith',
    formerWielders: ['Trafalgar D. Water Law'],
    currentWielder: 'Trafalgar D. Water Law',
    currentLocation: 'Possessed by Law (Recovering with Bepo after clash with Blackbeard)',
    description: 'A giant nodachi with a cross guard wrapped in white fur and small "x" cross motifs along its black scabbard. Law channels his Op-Op Fruit spatial room energies through Kikoku to pierce mountains and slice opponents without shedding blood.',
    notableFeats: [
      'Channeled K-ROOM Shock Wille & Puncture Wille to pierce Big Mom deep into magma',
      'Cleanly bisected Vergo and the entire Punk Hazard mountain laboratory in one swing',
      'Clashed against Blackbeard’s Tremor strikes at Winner Island'
    ],
    image: './images/blades/kikoku.png',
    accentColor: '#06b6d4'
  }
];

export const STRAW_HAT_WEAPONS: StrawHatWeapon[] = [
  {
    id: 'zoro-arsenal',
    crewMember: 'Roronoa Zoro',
    weaponName: 'Santoryu (Three-Sword Style) Supreme Arsenal',
    weaponType: 'Meito Swords: Wado Ichimonji, Enma, Sandai Kitetsu',
    creatorOrOrigin: 'Shimotsuki Kozaburo & Tenguyama Hitetsu (Wano Kuni)',
    currentEnhancements: 'Advanced Conqueror’s Haki Infusion (King of Hell Mode) & Foxfire Style Flame Rending',
    description: 'Wields three distinct Meito blades simultaneously: Wado Ichimonji in his mouth, Enma in his right hand, and Sandai Kitetsu in his left hand. Can tame demonic Ryuo to unleash destructive strikes that slash through dragon scales.',
    signatureTechniques: ['Santoryu Ogi: Sanzen Sekai', 'King of Hell: Three-Sword Dragon Damnation', 'Kyutoryu: Ashura', 'Ittoryu Iai: Shishi Sonson'],
    characterImage: './images/crew/zoro.png',
    weaponImage: './images/blades/enma.png',
    themeColor: '#10b981'
  },
  {
    id: 'nami-clima-tact',
    crewMember: 'Nami',
    weaponName: 'Sorcery Clima-Tact & Zeus',
    weaponType: 'Weather Manipulation Staff & Living Thundercloud Homie',
    creatorOrOrigin: 'Engineered by Usopp, upgraded with Weatheria Weather Science, permanently merged with Zeus',
    currentEnhancements: 'Zeus can change shape into a spiky mace, homing thunderbolt spear, and storm cloud',
    description: 'Transforms atmospheric moisture, temperature, and electrical charges into localized tornados, mirages, and catastrophic lightning storms. Zeus provides sentient homing strikes that never miss their target.',
    signatureTechniques: ['Ninpo: Raitei (Thunderbolt)', 'Tornado Tempo', 'Mirage Tempo', 'Zeus Breeze Tempo'],
    characterImage: './images/crew/nami.png',
    weaponImage: './images/blades/clima-tact.png',
    themeColor: '#f59e0b'
  },
  {
    id: 'usopp-kabuto',
    crewMember: 'Usopp',
    weaponName: 'Kuro Kabuto (Black Kabuto) & Pop Greens',
    weaponType: 'Botanical Slingshot Arsenal',
    creatorOrOrigin: 'Forged by Usopp using Skypiea Breath Dials and seeds cultivated on Boin Archipelago',
    currentEnhancements: 'Growth infusion via water and fertilizer; morphs into giant predatory Bakun Sou plant',
    description: 'A heavy slingshot powered by internal dial springs. Fires vicious botanical Pop Greens that instantly sprout into man-eating plants, bamboo spike forests, impact-absorbing wolf wolves, and sleep-inducing gas.',
    signatureTechniques: ['Hissatsu: Midori Boshi (Devil & Skull Exploding Grass)', 'Totsugeki Ryuseigun', 'Impact Wolf', 'Bagworm Long-Range Sniper'],
    characterImage: './images/crew/usopp.png',
    themeColor: '#eab308'
  },
  {
    id: 'sanji-legs',
    crewMember: 'Sanji',
    weaponName: 'Ifrit Jambe & Germa Exoskeleton',
    weaponType: 'Superhuman Steel Body & Plasma Fire Martial Arts (Black Leg Style)',
    creatorOrOrigin: 'Chef Zeff’s martial heritage fused with awakened Germa 66 genetic modifications',
    currentEnhancements: 'Exoskeleton invulnerability + Armament Haki allows withstanding blue-hot lightning flames',
    description: 'Sanji uses no weapons with his hands, keeping them pure for cooking. His awakened genetic exoskeleton, immense speed, and Armament Haki ignite his legs with blistering blue plasma flames that shatter dinosaur armor.',
    signatureTechniques: ['Ifrit Jambe: Boeuf Burst', 'Diable Jambe: Flambage Shot', 'Concasser', 'Sky Walk (Geppo)'],
    characterImage: './images/crew/sanji.png',
    themeColor: '#3b82f6'
  },
  {
    id: 'franky-general',
    crewMember: 'Franky',
    weaponName: 'Iron Pirate "General Franky" & Radical Beam',
    weaponType: 'Giant Battle Shogun Mech & Vegapunk Laser Arsenal',
    creatorOrOrigin: 'Designed and manufactured by Franky using Wapometal memory alloy and Vegapunk blueprints',
    currentEnhancements: 'Kurosai FR-U IV motorcycle + Brachio Tank V modular fusion; internal Cola turbines',
    description: 'A 13-meter tall iron samurai robot impervious to cannonballs and missiles. Franky himself is a cyborg equipped with shoulder rocket launchers, machine guns in his knees, and the devastating Vegapunk Radical Beam.',
    signatureTechniques: ['Franky Radical Beam', 'General Cannon', 'General O-Kuwagata Sword', 'Weapons Left'],
    characterImage: './images/crew/franky.png',
    themeColor: '#06b6d4'
  },
  {
    id: 'brook-soul-solid',
    crewMember: 'Brook',
    weaponName: 'Soul Solid (Chilled Cane Sword)',
    weaponType: 'Concealed Shikomizue Cane Sword & Underworld Chill',
    creatorOrOrigin: 'Reforged and sharpened by the Longleg Tribe during the two-year timeskip',
    currentEnhancements: 'Imbued with the bitter frost of the Underworld through Brook’s Revive-Revive soul projection',
    description: 'A sleek cane sword that strikes faster than the blink of an eye. The blade is coated with the freezing winds of the realm of the dead, instantly turning wounds into solid ice and shattering enemy blades.',
    signatureTechniques: ['Aubade Coup D’Droit', 'Kasuriuta: Fubuki Giri (Blizzard Slash)', 'Soul Parade', 'Nemuriuta Flanc'],
    characterImage: './images/crew/brook.png',
    themeColor: '#a855f7'
  },
  {
    id: 'luffy-nika',
    crewMember: 'Monkey D. Luffy',
    weaponName: 'Gear 5 Nika Divine Rubber Body & Lightning Rod',
    weaponType: 'Mythical Sun God Rubber Physique & Environmental Transmutation',
    creatorOrOrigin: 'Awakening of the Mythical Zoan Hito Hito no Mi, Model: Nika',
    currentEnhancements: 'Infinite elasticity, cartoon freedom, and ability to grab lightning bolts out of the sky',
    description: 'Luffy’s own body is his ultimate divine weapon. In Gear 5, he laughs freely as the Warrior of Liberation, grabbing solid thunderbolts like javelins and turning enemies and the earth itself into bouncy rubber.',
    signatureTechniques: ['Gomu Gomu no Bajrang Gun', 'Gomu Gomu no Dawn Rocket', 'Gomu Gomu no Star Gun', 'Lightning Throw'],
    characterImage: './images/crew/luffy.png',
    weaponImage: './images/crew/luffy-gear5.png',
    themeColor: '#facc15'
  },
  {
    id: 'jinbe-karate',
    crewMember: 'Jinbe',
    weaponName: 'Fishman Karate & Fishman Jujutsu Secret Arts',
    weaponType: 'Aquatic Shockwave Martial Arts & Water Manipulation',
    creatorOrOrigin: 'Traditional Fish-Man martial heritage passed down from Ryugu Kingdom',
    currentEnhancements: 'Advanced Armament Haki (Kairagi) hardening + internal fluid shockwave rupture',
    description: 'Jinbe’s fists control the water molecules in the atmosphere and inside the living cells of his opponents. His strikes bypass external armor, detonating shockwaves directly into the enemy’s internal organs.',
    signatureTechniques: ['Gyojin Karate Ogi: Buraikan (Vagabond Drill)', 'Yari Gumo (Spear Wave)', 'Karakusagawara Seiken', 'Kairagi'],
    characterImage: './images/crew/jinbe.png',
    themeColor: '#0284c7'
  },
  {
    id: 'chopper-rumble',
    crewMember: 'Tony Tony Chopper',
    weaponName: 'Advanced Rumble Balls & Monster Point',
    weaponType: 'Chemical Bio-Resonance Pellets & Primal Behemoth Form',
    creatorOrOrigin: 'Invented and synthesized by Doctor Tony Tony Chopper; optimized with Caesar Clown’s formulas',
    currentEnhancements: 'Extends Monster Point duration to 30 continuous minutes with full mental consciousness',
    description: 'Chopper altered the wavelength of his Human-Human fruit transformations. By consuming a Rumble Ball, he unleashes Monster Point: a towering colossus capable of swatting away Vice Admirals and wrestling Queen the Plague.',
    signatureTechniques: ['Monster Point Palm Strike', 'Kung Fu Point Flurry', 'Heavy Point Claws', 'Brain Point Scope'],
    characterImage: './images/crew/chopper.png',
    themeColor: '#ec4899'
  },
  {
    id: 'robin-demon',
    crewMember: 'Nico Robin',
    weaponName: 'Demonio Fleur & Gigante Fleur',
    weaponType: 'Sprouting Limb Transmutation & Demonic Giant Form',
    creatorOrOrigin: 'Hana Hana no Mi mastery honed through revolutionary martial training with Sabo and Koala',
    currentEnhancements: 'Fishman Karate Palm Impact combined with Demonio Fleur dark-winged avatar',
    description: 'Robin can sprout thousands of limbs anywhere in her sight. In Demonio Fleur, she manifests a colossal demoness with bat wings, fangs, and blackened arms that crushes enemy spine and joints with bone-snapping force.',
    signatureTechniques: ['Demonio Fleur: Grand Jacuzzi Clutch', 'Gigante Fleur: Sea Serpent Slap', 'Mil Fleur: Gigantesco Mano', 'Cien Fleur: Wing'],
    characterImage: './images/crew/robin.png',
    themeColor: '#8b5cf6'
  }
];
