export interface WantedPoster {
  id: string;
  name: string;
  epithet: string;
  bounty: number;
  bountyFormatted: string;
  affiliation: 'Straw Hat Pirates' | 'Four Emperors' | 'Legendary Pirates' | 'Roger Pirates';
  status: 'DEAD OR ALIVE' | 'ONLY ALIVE' | 'DEAD ONLY';
  marineNote: string;
  posterNote?: string;
  isGear5?: boolean;
  isSunnyFigurehead?: boolean;
  isConcertPoster?: boolean;
  isPirateKing?: boolean;
  imageUrl: string;
}

export const WANTED_POSTERS: WantedPoster[] = [
  // ================= STRAW HAT PIRATES =================
  {
    id: 'luffy-bounty',
    name: 'MONKEY D. LUFFY',
    epithet: 'STRAW HAT / SUN GOD NIKA',
    bounty: 3000000000,
    bountyFormatted: '3,000,000,000',
    affiliation: 'Straw Hat Pirates',
    status: 'DEAD OR ALIVE',
    isGear5: true,
    marineNote: 'Defeated Emperor Kaido of the Beasts. The Gorosei ordered the initial "D." erased and the photo removed, but Big News Morgans leaked the Gear 5 laughing white-haired photo worldwide!',
    posterNote: 'OFFICIAL POST-WANO GEAR 5 WHITE FORM WANTED POSTER',
    imageUrl: './images/bounties/bounty-luffy.png'
  },
  {
    id: 'zoro-bounty',
    name: 'RORONOA ZORO',
    epithet: 'KING OF HELL',
    bounty: 1111000000,
    bountyFormatted: '1,111,000,000',
    affiliation: 'Straw Hat Pirates',
    status: 'DEAD OR ALIVE',
    marineNote: 'Defeated King the Conflagration. Master of Santoryu and Enma Conqueror’s Infusion.',
    posterNote: 'POST-WANO OFFICIAL POSTER',
    imageUrl: './images/bounties/bounty-zoro.png'
  },
  {
    id: 'jinbe-bounty',
    name: 'JINBE',
    epithet: 'KNIGHT OF THE SEA',
    bounty: 1100000000,
    bountyFormatted: '1,100,000,000',
    affiliation: 'Straw Hat Pirates',
    status: 'DEAD OR ALIVE',
    marineNote: 'Former Warlord of the Sea and Sun Pirates Captain. Supreme master of Fish-Man Karate.',
    posterNote: 'OFFICIAL STRAW HAT HELMSMAN POSTER',
    imageUrl: './images/bounties/bounty-jinbe.png'
  },
  {
    id: 'sanji-bounty',
    name: 'SANJI',
    epithet: 'BLACK LEG',
    bounty: 1032000000,
    bountyFormatted: '1,032,000,000',
    affiliation: 'Straw Hat Pirates',
    status: 'DEAD OR ALIVE',
    marineNote: 'Defeated Queen the Plague. Possesses awakened genetic exoskeleton and supersonic blue Ifrit Jambe flames. Marine poster reverted from "Vinsmoke" back to "Sanji".',
    posterNote: 'POST-WANO OFFICIAL POSTER',
    imageUrl: './images/bounties/bounty-sanji.png'
  },
  {
    id: 'robin-bounty',
    name: 'NICO ROBIN',
    epithet: 'DEVIL CHILD',
    bounty: 930000000,
    bountyFormatted: '930,000,000',
    affiliation: 'Straw Hat Pirates',
    status: 'DEAD OR ALIVE',
    marineNote: 'Highest priority capture target for Cipher Pol and the Gorosei. Sole survivor of Ohara capable of deciphering ancient Poneglyphs to locate the One Piece.',
    posterNote: 'POST-WANO OFFICIAL POSTER',
    imageUrl: './images/bounties/bounty-robin.png'
  },
  {
    id: 'usopp-bounty',
    name: 'USOPP',
    epithet: 'GOD USOPP',
    bounty: 500000000,
    bountyFormatted: '500,000,000',
    affiliation: 'Straw Hat Pirates',
    status: 'DEAD OR ALIVE',
    marineNote: 'Official poster continues to feature his bruised, crying, bloody face from the Dressrosa Colosseum rebellion where he was revered as God Usopp.',
    posterNote: 'DRESSROSA / WANO OFFICIAL CANON POSTER',
    imageUrl: './images/bounties/bounty-usopp.png'
  },
  {
    id: 'franky-bounty',
    name: 'FRANKY',
    epithet: 'CYBORG',
    bounty: 394000000,
    bountyFormatted: '394,000,000',
    affiliation: 'Straw Hat Pirates',
    status: 'DEAD OR ALIVE',
    isSunnyFigurehead: true,
    marineNote: 'The Marine administrative department mistakenly printed a photograph of the Thousand Sunny’s roaring Lion Figurehead instead of Franky’s face, enraging him!',
    posterNote: 'THOUSAND SUNNY FIGUREHEAD POSTER',
    imageUrl: './images/bounties/bounty-franky.png'
  },
  {
    id: 'brook-bounty',
    name: 'BROOK',
    epithet: 'SOUL KING',
    bounty: 383000000,
    bountyFormatted: '383,000,000',
    affiliation: 'Straw Hat Pirates',
    status: 'DEAD OR ALIVE',
    isConcertPoster: true,
    marineNote: 'Official poster uses his worldwide concert tour promotional graphic with his flaming electric guitar and soul aura.',
    posterNote: 'SOUL KING WORLD TOUR POSTER',
    imageUrl: './images/bounties/bounty-brook.png'
  },
  {
    id: 'nami-bounty',
    name: 'NAMI',
    epithet: 'CAT BURGLAR',
    bounty: 366000000,
    bountyFormatted: '366,000,000',
    affiliation: 'Straw Hat Pirates',
    status: 'DEAD OR ALIVE',
    marineNote: 'Acquired Zeus the thunder homie from Big Mom. Photo taken by sneaky marine photographer while winking.',
    posterNote: 'POST-WANO OFFICIAL POSTER',
    imageUrl: './images/bounties/bounty-nami.png'
  },
  {
    id: 'chopper-bounty',
    name: 'TONY TONY CHOPPER',
    epithet: 'COTTON CANDY LOVER',
    bounty: 1000,
    bountyFormatted: '1,000',
    affiliation: 'Straw Hat Pirates',
    status: 'DEAD OR ALIVE',
    marineNote: 'World Government still stubbornly designates him as the Straw Hat pet mascot, raising his bounty from 100 to 1,000 Berries much to his despair.',
    posterNote: 'OFFICIAL 1,000 BERRIES POSTER',
    imageUrl: './images/bounties/bounty-chopper.png'
  },

  // ================= FOUR EMPERORS (ALL PREVIOUS & PRESENT) =================
  {
    id: 'whitebeard-yonko',
    name: 'EDWARD NEWGATE',
    epithet: 'WHITEBEARD (PREVIOUS EMPEROR)',
    bounty: 5046000000,
    bountyFormatted: '5,046,000,000',
    affiliation: 'Four Emperors',
    status: 'DEAD ONLY',
    marineNote: 'The Strongest Man in the World and supreme Emperor of the Sea. Wielded the Quake-Quake fruit capable of destroying the world.',
    posterNote: 'LEGENDARY PREVIOUS EMPEROR',
    imageUrl: './images/bounties/bounty-whitebeard.png'
  },
  {
    id: 'kaido-yonko',
    name: 'KAIDO',
    epithet: 'KING OF THE BEASTS (PREVIOUS EMPEROR)',
    bounty: 4611100000,
    bountyFormatted: '4,611,100,000',
    affiliation: 'Four Emperors',
    status: 'DEAD OR ALIVE',
    marineNote: 'The Strongest Creature Alive. Ruled Wano for 20 years with an iron fist until defeated by Sun God Nika.',
    posterNote: 'PREVIOUS EMPEROR CLASSIFIED NOTICE',
    imageUrl: './images/bounties/bounty-kaido.png'
  },
  {
    id: 'bigmom-yonko',
    name: 'CHARLOTTE LINLIN',
    epithet: 'BIG MOM (PREVIOUS EMPEROR)',
    bounty: 4388000000,
    bountyFormatted: '4,388,000,000',
    affiliation: 'Four Emperors',
    status: 'DEAD OR ALIVE',
    marineNote: 'Queen of Totto Land and master of the Soul-Soul Fruit. Defeated by Trafalgar Law and Eustass Kid.',
    posterNote: 'PREVIOUS EMPEROR CLASSIFIED NOTICE',
    imageUrl: './images/bounties/bounty-bigmom.png'
  },
  {
    id: 'shanks-yonko',
    name: 'SHANKS',
    epithet: 'RED-HAIRED (CURRENT EMPEROR)',
    bounty: 4048900000,
    bountyFormatted: '4,048,900,000',
    affiliation: 'Four Emperors',
    status: 'DEAD OR ALIVE',
    marineNote: 'Chief of the Red Hair Pirates and Emperor of the Sea. Wielder of supreme Conqueror’s Haki and Divine Departure.',
    posterNote: 'CURRENT EMPEROR OFFICIAL NOTICE',
    imageUrl: './images/bounties/bounty-shanks.png'
  },
  {
    id: 'blackbeard-yonko',
    name: 'MARSHALL D. TEACH',
    epithet: 'BLACKBEARD (CURRENT EMPEROR)',
    bounty: 3996000000,
    bountyFormatted: '3,996,000,000',
    affiliation: 'Four Emperors',
    status: 'DEAD OR ALIVE',
    marineNote: 'Admiral of the Blackbeard Pirates on Pirate Island Hachinosu. The only human to wield two Devil Fruits simultaneously: Yami Yami & Gura Gura.',
    posterNote: 'CURRENT EMPEROR OFFICIAL NOTICE',
    imageUrl: './images/bounties/bounty-blackbeard.png'
  },
  {
    id: 'buggy-yonko',
    name: 'BUGGY THE STAR CLOWN',
    epithet: 'THE GENIUS JESTER (CURRENT EMPEROR)',
    bounty: 3189000000,
    bountyFormatted: '3,189,000,000',
    affiliation: 'Four Emperors',
    status: 'DEAD OR ALIVE',
    marineNote: 'Former Roger Pirate apprentice, former Warlord, and newly appointed Emperor. Recognized by the Marines as figurehead leader of Cross Guild alongside Mihawk and Crocodile.',
    posterNote: 'CROSS GUILD EMPEROR NOTICE',
    imageUrl: './images/bounties/bounty-buggy.png'
  },
  {
    id: 'luffy-yonko-card',
    name: 'MONKEY D. LUFFY',
    epithet: 'STRAW HAT / JOY BOY (CURRENT EMPEROR)',
    bounty: 3000000000,
    bountyFormatted: '3,000,000,000',
    affiliation: 'Four Emperors',
    status: 'DEAD OR ALIVE',
    isGear5: true,
    marineNote: 'Elevated to Emperor of the Sea after toppling Kaido. Commanding the 5,600-strong Straw Hat Grand Fleet across the New World.',
    posterNote: 'NEW EMPEROR OF THE SEA',
    imageUrl: './images/bounties/bounty-luffy.png'
  },

  // ================= LEGENDARY PIRATES =================
  {
    id: 'rocks-legend',
    name: 'ROCKS D. XEBEC',
    epithet: 'CAPTAIN OF THE ROCKS PIRATES',
    bounty: 5000000000,
    bountyFormatted: 'CLASSIFIED (> 5B)',
    affiliation: 'Legendary Pirates',
    status: 'DEAD ONLY',
    marineNote: 'The most ferocious pirate crew in history: Whitebeard, Kaido, Big Mom, and Shiki sailed under him. Toppled at God Valley by Garp and Roger.',
    posterNote: 'GOD VALLEY ERA CLASSIFIED NOTICE',
    imageUrl: './images/bounties/rocks-xebec.png'
  },
  {
    id: 'shiki-legend',
    name: 'SHIKI',
    epithet: 'THE GOLDEN LION',
    bounty: 4500000000,
    bountyFormatted: '4,500,000,000',
    affiliation: 'Legendary Pirates',
    status: 'DEAD OR ALIVE',
    marineNote: 'Commander of the Golden Lion Armada. Clashed with Roger at the Battle of Edd War. First human ever to break out of Impel Down by cutting off his own legs.',
    posterNote: 'FLYING PIRATE HISTORIC RECORD',
    imageUrl: './images/bounties/bounty-shiki.png'
  },
  {
    id: 'whitebeard-legend-card',
    name: 'EDWARD NEWGATE',
    epithet: 'WHITEBEARD (PRIME)',
    bounty: 5046000000,
    bountyFormatted: '5,046,000,000',
    affiliation: 'Legendary Pirates',
    status: 'DEAD ONLY',
    marineNote: 'The man closest to the One Piece who never sought it. Equal in battle to Gol D. Roger.',
    posterNote: 'LEGENDARY TITAN RECORD',
    imageUrl: './images/bounties/bounty-whitebeard.png'
  },
  {
    id: 'rayleigh-legend-card',
    name: 'SILVERS RAYLEIGH',
    epithet: 'DARK KING / RIGHT HAND OF THE PIRATE KING',
    bounty: 2500000000,
    bountyFormatted: '2,500,000,000 (EST.)',
    affiliation: 'Legendary Pirates',
    status: 'DEAD OR ALIVE',
    marineNote: 'First Mate of the Roger Pirates. Master of all three advanced types of Haki. Mentored Monkey D. Luffy on Rusukaina Island.',
    posterNote: 'DARK KING HISTORIC RECORD',
    imageUrl: './images/bounties/bounty-rayleigh.png'
  },
  {
    id: 'oden-legend-card',
    name: 'KOZUKI ODEN',
    epithet: 'DAIMYO OF KURI / SAMURAI OF ODEN',
    bounty: 3500000000,
    bountyFormatted: '3,500,000,000 (EST.)',
    affiliation: 'Legendary Pirates',
    status: 'DEAD ONLY',
    marineNote: 'Sailed with Whitebeard and Roger to Laugh Tale. Wielder of Ame no Habakiri and Enma. The only warrior to permanently scar Kaido before Zoro.',
    posterNote: 'LEGENDARY SAMURAI RECORD',
    imageUrl: './images/bounties/oden.png'
  },
  {
    id: 'gaban-legend-card',
    name: 'SCOPPER GABAN',
    epithet: 'LEFT HAND OF THE PIRATE KING',
    bounty: 2200000000,
    bountyFormatted: '2,200,000,000 (EST.)',
    affiliation: 'Legendary Pirates',
    status: 'DEAD OR ALIVE',
    marineNote: 'Senior warrior of the Roger Pirates alongside Rayleigh. Dual axe berserker who stood on the final island Laugh Tale.',
    posterNote: 'ROGER PIRATES EXECUTIVE',
    imageUrl: './images/bounties/gaban.png'
  },

  // ================= ROGER PIRATES & PIRATE KING =================
  {
    id: 'roger-king-card',
    name: 'GOL D. ROGER',
    epithet: 'KING OF THE PIRATES',
    bounty: 5564800000,
    bountyFormatted: '5,564,800,000',
    affiliation: 'Roger Pirates',
    status: 'DEAD ONLY',
    isPirateKing: true,
    marineNote: 'The singular man to conquer the entire Grand Line and reach the final island Laugh Tale. Triggered the Great Age of Pirates.',
    posterNote: '👑 KING OF THE PIRATES (海賊王) OFFICIAL BOUNTY',
    imageUrl: './images/bounties/bounty-roger.png'
  },
  {
    id: 'rayleigh-roger-card',
    name: 'SILVERS RAYLEIGH',
    epithet: 'DARK KING / FIRST MATE',
    bounty: 2500000000,
    bountyFormatted: '2,500,000,000 (EST.)',
    affiliation: 'Roger Pirates',
    status: 'DEAD OR ALIVE',
    marineNote: 'The Dark King who accompanied Roger from the first day to the final island Laugh Tale.',
    posterNote: 'ROGER PIRATES VICE-CAPTAIN',
    imageUrl: './images/bounties/bounty-rayleigh.png'
  },
  {
    id: 'gaban-roger-card',
    name: 'SCOPPER GABAN',
    epithet: 'LEFT HAND AXEMAN',
    bounty: 2200000000,
    bountyFormatted: '2,200,000,000 (EST.)',
    affiliation: 'Roger Pirates',
    status: 'DEAD OR ALIVE',
    marineNote: 'Dual axe vanguard of the Roger Pirates, defending the Oro Jackson through countless sea battles.',
    posterNote: 'ROGER PIRATES EXECUTIVE',
    imageUrl: './images/bounties/gaban.png'
  },
  {
    id: 'oden-roger-card',
    name: 'KOZUKI ODEN',
    epithet: 'CHRONICLER & SWORDSMAN',
    bounty: 3500000000,
    bountyFormatted: '3,500,000,000 (EST.)',
    affiliation: 'Roger Pirates',
    status: 'DEAD ONLY',
    marineNote: 'Deciphered the Road Poneglyphs and carved Roger’s message on the Golden Bell of Shandora.',
    posterNote: 'PIRATE KING COMRADE',
    imageUrl: './images/bounties/oden.png'
  }
];
