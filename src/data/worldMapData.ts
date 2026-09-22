export interface MapLocation {
  id: string;
  name: string;
  seaRegion: 'East Blue' | 'Grand Line (Paradise)' | 'New World' | 'Sky Island' | 'Deep Ocean';
  coords: { x: number; y: number }; // percentage on map
  description: string;
  hazardLevel: 'Low' | 'Moderate' | 'High' | 'Extreme' | 'Cataclysmic';
  logPoseTime: string;
  associatedArcId: string;
  highlights: string[];
}

export const GRAND_LINE_LOCATIONS: MapLocation[] = [
  {
    id: 'loc-east-blue',
    name: 'East Blue Sea',
    seaRegion: 'East Blue',
    coords: { x: 12, y: 38 },
    description: 'The calmest of the four oceans and birthplace of Gol D. Roger and Monkey D. Luffy.',
    hazardLevel: 'Low',
    logPoseTime: 'N/A (Normal Compass)',
    associatedArcId: 'east-blue',
    highlights: ['Foosha Village', 'Baratie Restaurant', 'Arlong Park', 'Loguetown Scaffold']
  },
  {
    id: 'loc-reverse-mtn',
    name: 'Reverse Mountain',
    seaRegion: 'Grand Line (Paradise)',
    coords: { x: 25, y: 50 },
    description: 'The raging convergence of all four seas rushing uphill into the Grand Line.',
    hazardLevel: 'High',
    logPoseTime: 'Instant Entry',
    associatedArcId: 'east-blue',
    highlights: ['Upward Rapids', 'Twin Capes Light', 'Laboon the Whale']
  },
  {
    id: 'loc-alabasta',
    name: 'Alabasta Kingdom',
    seaRegion: 'Grand Line (Paradise)',
    coords: { x: 33, y: 62 },
    description: 'Sprawling desert realm governed by the Nefertari Dynasty containing the ancient weapon Pluton tomb.',
    hazardLevel: 'Moderate',
    logPoseTime: '5 Days',
    associatedArcId: 'alabasta',
    highlights: ['Rainbase Casino', 'Alubarna Royal Palace', 'Underground Tomb of the Kings']
  },
  {
    id: 'loc-skypiea',
    name: 'Skypiea (White-White Sea)',
    seaRegion: 'Sky Island',
    coords: { x: 42, y: 20 },
    description: 'Mythical sky islands floating 10,000 meters above sea level supported by island clouds.',
    hazardLevel: 'High',
    logPoseTime: 'Unknown (Sky Dial Required)',
    associatedArcId: 'skypiea',
    highlights: ['Upper Yard (Jaya fragment)', 'Giant Jack Bean-stalk', 'Golden Bell of Shandora']
  },
  {
    id: 'loc-water7',
    name: 'Water 7 & Enies Lobby',
    seaRegion: 'Grand Line (Paradise)',
    coords: { x: 50, y: 48 },
    description: 'Metropolis of water shipwrights and the judicial island that knows no night.',
    hazardLevel: 'High',
    logPoseTime: '7 Days',
    associatedArcId: 'enies-lobby',
    highlights: ['Galley-La Docks', 'Tower of Law', 'Gate of Justice', 'Sea Train Tracks']
  },
  {
    id: 'loc-sabaody',
    name: 'Sabaody Archipelago',
    seaRegion: 'Grand Line (Paradise)',
    coords: { x: 60, y: 55 },
    description: 'Massive Yarukiman Mangrove roots secreting natural resin bubbles at the doorstep of the Red Line.',
    hazardLevel: 'High',
    logPoseTime: 'N/A (Coating Island)',
    associatedArcId: 'sabaody',
    highlights: ['Mangrove Groves 1-79', 'Shakky’s Bar', 'Human Auction Hall']
  },
  {
    id: 'loc-marineford',
    name: 'Marineford (Summit War)',
    seaRegion: 'Grand Line (Paradise)',
    coords: { x: 64, y: 38 },
    description: 'Former Marine Headquarters and site of the historic war that took the lives of Ace and Whitebeard.',
    hazardLevel: 'Cataclysmic',
    logPoseTime: 'Government Current',
    associatedArcId: 'marineford',
    highlights: ['Execution Scaffold', 'Frozen Crescent Bay', 'Justice Fortress']
  },
  {
    id: 'loc-fishman',
    name: 'Fish-Man Island',
    seaRegion: 'Deep Ocean',
    coords: { x: 66, y: 80 },
    description: 'Submerged illuminated realm 10,000 meters beneath sea level in the cavern passing through the Red Line.',
    hazardLevel: 'High',
    logPoseTime: 'Half Day',
    associatedArcId: 'fish-man-island',
    highlights: ['Ryugu Palace', 'Mermaid Cove', 'The Ancient Ark Noah']
  },
  {
    id: 'loc-dressrosa',
    name: 'Dressrosa',
    seaRegion: 'New World',
    coords: { x: 74, y: 58 },
    description: 'Passion-filled kingdom ruled by Doflamingo surrounded by fighting fish and flower meadows.',
    hazardLevel: 'High',
    logPoseTime: 'Variable Magnetic Pull',
    associatedArcId: 'dressrosa',
    highlights: ['Corrida Colosseum', 'Royal Flower Hill', 'Underground Toy Factory']
  },
  {
    id: 'loc-wholecake',
    name: 'Whole Cake Island (Totto Land)',
    seaRegion: 'New World',
    coords: { x: 82, y: 40 },
    description: 'Confectionery archipelago governed by Charlotte Linlin where food is alive and singing.',
    hazardLevel: 'Extreme',
    logPoseTime: 'Controlled by Homies',
    associatedArcId: 'whole-cake-island',
    highlights: ['Whole Cake Chateau', 'Mirror World', 'Seducing Woods']
  },
  {
    id: 'loc-wano',
    name: 'Wano Country',
    seaRegion: 'New World',
    coords: { x: 88, y: 62 },
    description: 'Isolated mountainous samurai fortress perched above towering waterfalls.',
    hazardLevel: 'Extreme',
    logPoseTime: 'Climb via Koi Fish',
    associatedArcId: 'wano',
    highlights: ['Flower Capital', 'Onigashima Skull Fortress', 'Mt. Fuji', 'Kozuki Castle']
  },
  {
    id: 'loc-egghead',
    name: 'Egghead Island (Future Island)',
    seaRegion: 'New World',
    coords: { x: 94, y: 35 },
    description: 'Super-technological island 500 years into the future powered by ancient Void Century energy.',
    hazardLevel: 'Cataclysmic',
    logPoseTime: 'Special Frequency',
    associatedArcId: 'egghead',
    highlights: ['Labophase Floating Dome', 'Punk Records Library', 'Mother Flame Factory']
  }
];

