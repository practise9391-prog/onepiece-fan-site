export interface WantedPoster {
  id: string;
  name: string;
  epithet: string;
  bounty: number;
  bountyFormatted: string;
  affiliation: 'Straw Hat Pirates' | 'Four Emperors' | 'Worst Generation' | 'Legendary Pirates';
  status: 'DEAD OR ALIVE' | 'ONLY ALIVE' | 'DEAD ONLY';
  marineNote: string;
  posterNote?: string;
  isGear5?: boolean;
  isSunnyFigurehead?: boolean;
  isConcertPoster?: boolean;
  imageUrl: string;
}

export const WANTED_POSTERS: WantedPoster[] = [
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
  {
    id: 'shanks-bounty',
    name: 'SHANKS',
    epithet: 'RED-HAIRED',
    bounty: 4048900000,
    bountyFormatted: '4,048,900,000',
    affiliation: 'Four Emperors',
    status: 'DEAD OR ALIVE',
    marineNote: 'Chief of the Red Hair Pirates and Emperor of the Sea. Wields Divine Departure (Kamusari).',
    posterNote: 'FOUR EMPERORS OFFICIAL POSTER',
    imageUrl: './images/bounties/bounty-shanks.png'
  },
  {
    id: 'kaido-bounty',
    name: 'KAIDO',
    epithet: 'KING OF THE BEASTS',
    bounty: 4611100000,
    bountyFormatted: '4,611,100,000',
    affiliation: 'Four Emperors',
    status: 'DEAD OR ALIVE',
    marineNote: 'Former Emperor of the Sea. Governor-General of the Beasts Pirates.',
    posterNote: 'EMPEROR CLASSIFIED NOTICE',
    imageUrl: './images/bounties/bounty-kaido.png'
  },
  {
    id: 'whitebeard-bounty',
    name: 'EDWARD NEWGATE',
    epithet: 'WHITEBEARD',
    bounty: 5046000000,
    bountyFormatted: '5,046,000,000',
    affiliation: 'Legendary Pirates',
    status: 'DEAD ONLY',
    marineNote: 'Strongest Man in the World. Captain of the Whitebeard Pirates.',
    posterNote: 'ARCHIVAL HISTORIC NOTICE',
    imageUrl: './images/bounties/bounty-whitebeard.png'
  },
  {
    id: 'roger-bounty',
    name: 'GOL D. ROGER',
    epithet: 'PIRATE KING',
    bounty: 5564800000,
    bountyFormatted: '5,564,800,000',
    affiliation: 'Legendary Pirates',
    status: 'DEAD ONLY',
    marineNote: 'The only crew in recorded history to circumnavigate the entire globe and reach Laugh Tale.',
    posterNote: 'PIRATE KING HISTORIC RECORD',
    imageUrl: './images/bounties/bounty-roger.png'
  }
];
