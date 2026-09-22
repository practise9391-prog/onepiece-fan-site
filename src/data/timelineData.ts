export interface TimelineEra {
  id: string;
  eraName: string;
  yearRange: string;
  title: string;
  summary: string;
  ship: 'Going Merry' | 'Thousand Sunny';
  majorEvent: string;
  keyBountyLuffy: string;
  accentColor: string;
  iconName: string;
  relatedArcIds: string[];
  eraBadges: string[];
}

export const TIMELINE_ERAS: TimelineEra[] = [
  {
    id: 'era-east-blue',
    eraName: 'ERA I: THE ROMANCE DAWN',
    yearRange: 'Year 1520 (Age of Pirates)',
    title: 'Gathering the Original Five in East Blue',
    summary: 'A 17-year-old boy in a red vest and straw hat sails out in a barrel, recruiting Zoro at Shells Town, Nami at Orange Town, Usopp at Syrup Village, and Sanji at Baratie. Shattering Arlong Park and making an eternal vow under the Loguetown execution scaffold.',
    ship: 'Going Merry',
    majorEvent: 'The Straw Hat Pirates are formally born with 5 members; first bounty of 30,000,000 ฿.',
    keyBountyLuffy: '30,000,000 ฿',
    accentColor: '#f59e0b',
    iconName: 'Compass',
    relatedArcIds: ['east-blue'],
    eraBadges: ['Romance Dawn', 'Baratie', 'Arlong Park', 'Loguetown']
  },
  {
    id: 'era-paradise-1',
    eraName: 'ERA II: ENTERING PARADISE',
    yearRange: 'Grand Line: First Half',
    title: 'Reverse Mountain to Alabasta & Skypiea',
    summary: 'Descending Reverse Mountain into the Grand Line, the crew befriends Princess Vivi, shatters Warlord Crocodile’s Baroque Works, rides the Knock-Up Stream 10,000 meters into the clouds, rings the 400-year Golden Bell of Shandora, and defeats God Enel.',
    ship: 'Going Merry',
    majorEvent: 'Defeat of Warlord Crocodile shakes the Seven Warlords system; bounty jumps to 100,000,000 ฿.',
    keyBountyLuffy: '100,000,000 ฿',
    accentColor: '#eab308',
    iconName: 'Sun',
    relatedArcIds: ['alabasta', 'skypiea'],
    eraBadges: ['Whiskey Peak', 'Little Garden', 'Alabasta', 'Jaya', 'Skypiea']
  },
  {
    id: 'era-paradise-2',
    eraName: 'ERA III: DECLARATION OF WAR',
    yearRange: 'Water 7 & Judicial Enies Lobby',
    title: 'War on the World Government & Farewell to Merry',
    summary: 'To save archaeologist Nico Robin, the Straw Hats shoot down the World Government flag, defeat CP9’s top assassins, recruit cyborg shipwright Franky, and give the Going Merry a tearful Viking funeral before boarding the dream ship Thousand Sunny.',
    ship: 'Thousand Sunny',
    majorEvent: 'Luffy unveils Gear Second and Gear Third; entire crew receives bounties; Luffy reaches 300,000,000 ฿.',
    keyBountyLuffy: '300,000,000 ฿',
    accentColor: '#ef4444',
    iconName: 'Flame',
    relatedArcIds: ['water-7', 'enies-lobby', 'thriller-bark'],
    eraBadges: ['Water 7', 'Enies Lobby', 'Tower of Law', 'Going Merry Farewell']
  },
  {
    id: 'era-summit-war',
    eraName: 'ERA IV: THE PARAMOUNT WAR',
    yearRange: 'Summit War of Marineford',
    title: 'Separation at Sabaody & Ace’s Death',
    summary: 'Scattered across the globe by Bartholomew Kuma at Sabaody, Luffy infiltrates the greatest prison Impel Down and the battlefield of Marineford to save his brother Ace. Ace and Whitebeard fall, shattering Luffy’s spirit until Jinbe reminds him: "What do you still have?!"',
    ship: 'Thousand Sunny',
    majorEvent: 'Whitebeard proclaims the One Piece is real; Luffy rings the Ox Bell with the secret code: 3D2Y.',
    keyBountyLuffy: '400,000,000 ฿',
    accentColor: '#3b82f6',
    iconName: 'Skull',
    relatedArcIds: ['sabaody', 'marineford'],
    eraBadges: ['Sabaody Archipelago', 'Impel Down', 'Marineford Summit War']
  },
  {
    id: 'era-timeskip',
    eraName: 'ERA V: TWO-YEAR TIMESKIP (3D2Y)',
    yearRange: '2-Year Training Interval',
    title: 'Mastery of Haki Across the World',
    summary: 'For two years, the crew trains in isolation: Luffy masters all three colors of Haki with Rayleigh on Rusukaina, Zoro trains under Mihawk, Sanji under Ivankov, and each crew member develops new mastery for the savage New World.',
    ship: 'Thousand Sunny',
    majorEvent: 'The crew reunites at Sabaody Grove 42 stronger than ever, one-shotting Pacifistas.',
    keyBountyLuffy: '400,000,000 ฿',
    accentColor: '#10b981',
    iconName: 'Hourglass',
    relatedArcIds: ['fish-man-island'],
    eraBadges: ['Rusukaina Island', 'Kuraigana Island', 'Kamabakka Kingdom', 'Sabaody Reunion']
  },
  {
    id: 'era-new-world',
    eraName: 'ERA VI: CONQUEST OF THE NEW WORLD',
    yearRange: 'Dressrosa & Four Emperors Saga',
    title: 'Alliance with Law & Doflamingo’s Downfall',
    summary: 'Forging an alliance with Trafalgar Law on Punk Hazard, Luffy invades Dressrosa, unlocks Gear Fourth Boundman, shatters Doflamingo, and forms the 5,600-warrior Straw Hat Grand Fleet before discovering the Road Poneglyphs on Zou.',
    ship: 'Thousand Sunny',
    majorEvent: 'Bounty rises to 500,000,000 ฿; and after invading Big Mom’s Tea Party, jumps to 1.5 Billion (The Fifth Emperor).',
    keyBountyLuffy: '1,500,000,000 ฿',
    accentColor: '#f43f5e',
    iconName: 'Swords',
    relatedArcIds: ['punk-hazard', 'dressrosa', 'zou', 'whole-cake-island'],
    eraBadges: ['Fish-Man Island', 'Punk Hazard', 'Dressrosa', 'Zou', 'Whole Cake Island']
  },
  {
    id: 'era-wano-liberation',
    eraName: 'ERA VII: THE DAWN OF WANO',
    yearRange: 'The Fire Festival Raid on Onigashima',
    title: 'Dethroning Two Emperors & Awakening Sun God Nika',
    summary: 'The alliance storms Kaido’s fortress. Law and Kid drown Big Mom in subterranean magma. Cut down by Kaido, Luffy’s heartbeat awakens the Drums of Liberation: Gear 5 White Form and Sun God Nika, crushing Kaido with an island-sized fist.',
    ship: 'Thousand Sunny',
    majorEvent: 'Luffy is appointed Emperor of the Sea; bounty hits 3,000,000,000 ฿.',
    keyBountyLuffy: '3,000,000,000 ฿',
    accentColor: '#facc15',
    iconName: 'Sparkles',
    relatedArcIds: ['wano'],
    eraBadges: ['Kuri', 'Udon Prison', 'Onigashima Rooftop', 'Joy Boy Awakens']
  },
  {
    id: 'era-final-saga',
    eraName: 'ERA VIII: THE FINAL SAGA',
    yearRange: 'Egghead Island to Laugh Tale',
    title: 'The Truth of the Void Century & The World Sinks',
    summary: 'On the futuristic island of Egghead, the Straw Hats protect Dr. Vegapunk from CP0, Admiral Kizaru, and the apocalyptic descent of all Five Elders in their demonic Yokai forms, as Vegapunk reveals to the world that the planet is sinking into the sea.',
    ship: 'Thousand Sunny',
    majorEvent: 'The Great Cleansing begins; the race for the One Piece between Luffy, Shanks, Teach, and Buggy.',
    keyBountyLuffy: '3,000,000,000 ฿',
    accentColor: '#06b6d4',
    iconName: 'Zap',
    relatedArcIds: ['egghead'],
    eraBadges: ['Egghead Labophase', 'Five Elders Descent', 'Vegapunk Broadcast']
  }
];
