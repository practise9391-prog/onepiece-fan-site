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
  storyScenes: StoryPlotScene[];
}

export const ARCS: ArcData[] = [
  // 1. EAST BLUE
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
    shortDesc: 'Monkey D. Luffy sets out into the sea in a wooden barrel with an indomitable dream: to find the One Piece and become the King of the Pirates.',
    fullSynopsis: 'The voyage begins in the calmest of the four seas. Luffy recruits swordsman Roronoa Zoro at Shells Town, navigator Nami at Orange Town, sniper Usopp at Syrup Village, and chivalrous chef Sanji at Baratie. Together, they confront Warlord Mihawk, shatter the tyrannical Fish-Man Arlong at Arlong Park, and make their final oath under the Loguetown execution scaffold before sailing up Reverse Mountain.',
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
        speaker: 'Roronoa Zoro',
        description: 'Mihawk parries Zoro’s Santoryu with a 3-inch pocket knife, acknowledging his fierce spirit. Drawing Black Blade Yoru, Mihawk slices Zoro’s chest open. Refusing to step backward because "scars on the back are a swordsman’s shame," Zoro earns Mihawk’s supreme respect.',
        imageUrl: './images/blades/yoru.png'
      },
      {
        id: 'luffy-vs-arlong',
        combatants: 'Monkey D. Luffy vs. Arlong the Saw-Tooth',
        title: 'Battle for Nami’s Freedom: Shattering the Map Room',
        location: 'Arlong Park Top Floor Cartography Room',
        outcome: 'Arlong defeated; Arlong Park completely demolished',
        keyClash: 'Gomu Gomu no Ono (Battle Axe) crushing through five floors',
        quote: 'I can’t use swords! I don’t know how to navigate! I can’t cook! And I can’t lie! I know I need help if I want to keep on living! But... I CAN BEAT YOU!',
        speaker: 'Monkey D. Luffy',
        description: 'Luffy destroys eight years of torturous maps that enslaved Nami, bringing down Arlong Park upon the tyrant fish-man.',
        imageUrl: './images/scenes/arlong-destruction.png'
      }
    ],
    iconicMoments: [
      { id: 'zoro-promise', title: 'Zoro’s Eternal Promise', quote: 'I WILL NEVER LOSE AGAIN! Got a problem with that, Pirate King?!', speaker: 'Roronoa Zoro', description: 'Cut down by Mihawk’s black blade Yoru, Zoro raises his white-hilted sword into the sky weeping tears of absolute conviction.', badge: 'Zoro’s Sacred Oath' },
      { id: 'nami-help', title: 'Luffy, Help Me', quote: 'OF COURSE I WILL!!!', speaker: 'Monkey D. Luffy', description: 'Nami stabs her Arlong tattoo until blood flows; Luffy gently places his treasure hat on her head and roars into the heavens.', badge: 'Tearful Plea' }
    ],
    chaptersList: [
      { id: 'c-romance-dawn', title: 'Romance Dawn', description: 'Shanks entrusts his straw hat to young Luffy. Luffy sets out to sea in a barrel.', episodes: 'Ep 1–3', imageUrl: './images/scenes/shanks-hat.png', highlights: ['Shanks sacrifice', 'Luffy barrel launch', 'Recruiting Zoro'] },
      { id: 'c-baratie', title: 'Baratie Restaurant', description: 'The floating ocean restaurant comes under siege by Don Krieg. Mihawk appears.', episodes: 'Ep 20–30', imageUrl: './images/arcs/baratie.png', highlights: ['Mihawk vs Zoro', 'Zoro sacred oath', 'Sanji joins'] },
      { id: 'c-arlong-park', title: 'Arlong Park', description: 'The Straw Hats march together to save Nami and demolish Arlong’s fortress.', episodes: 'Ep 31–44', imageUrl: './images/arcs/arlong-park.png', highlights: ['The Legendary Walk', 'Battle Axe destruction', 'Nami freed'] }
    ],
    storyScenes: [
      { id: 'eb-1', sceneNumber: 1, title: 'The Red-Haired Promise', tagline: 'A hat entrusted across generations to spark a revolution.', storySummary: 'Shanks loses his left arm saving young Luffy from the Sea King, giving him the iconic Straw Hat with the promise to return it once he becomes a great pirate.', motivationLine: 'True leadership is willing to sacrifice everything for the dreamers of tomorrow.', imageUrl: './images/scenes/shanks-hat.png', badge: 'Genesis of Faith', keyDialogue: 'This hat means a lot to me. Bring it back to me someday, once you become a great pirate!', speaker: 'Shanks' },
      { id: 'eb-2', sceneNumber: 2, title: 'Bursting from the Wine Barrel', tagline: 'The journey to freedom begins in the humblest way imaginable.', storySummary: 'Surviving a giant whirlpool inside a wooden sake barrel, Luffy pops out on Alvida’s ship and easily knocks out Iron Mace Alvida to liberate young Koby.', motivationLine: 'Never let circumstances dictate your beginnings. Start boldly, right where you are.', imageUrl: './images/arcs/east-blue.png', badge: 'Setting Sail' },
      { id: 'eb-3', sceneNumber: 3, title: 'The Demon Bound to the Cross', tagline: 'Honor shines brightest when facing certain execution.', storySummary: 'At Shells Town Marine base, Zoro is tied to a crucifix without food for protecting a little girl’s pet from tyrant Captain Morgan’s son Helmeppo.', motivationLine: 'Integrity is doing the honorable thing even when everyone else plays dirty.', imageUrl: './images/crew/zoro.png', badge: 'Swordsman’s Honor' },
      { id: 'eb-4', sceneNumber: 4, title: 'The First Mate Joins', tagline: 'Two men bound by ambition ready to conquer the world.', storySummary: 'Luffy retrieves Zoro’s three swords from the Marine base, smashes Captain Morgan, and recruits Zoro as the first official Straw Hat pirate.', motivationLine: 'Find comrades who dream as big as you do; their conviction will elevate your own.', imageUrl: './images/family/kuina.png', badge: 'Straw Hat First Mate' },
      { id: 'eb-5', sceneNumber: 5, title: 'Encounter with the Cat Burglar', tagline: 'A trickster navigator meets a reckless rubber captain.', storySummary: 'In Orange Town, Luffy meets Nami fleeing Buggy’s crew. Despite her hatred of pirates, Luffy’s genuine nature catches her off guard.', motivationLine: 'Real character dissolves even the deepest prejudices and earns trust without words.', imageUrl: './images/bounties/bounty-buggy.png', badge: 'Fate Intertwined' },
      { id: 'eb-6', sceneNumber: 6, title: 'Chouchou’s Unshakable Loyalty', tagline: 'Protecting the treasure of someone who is gone.', storySummary: 'A tiny terrier named Chouchou defends his late master’s pet food store against Buggy’s lion Mohji. Luffy defeats Mohji and retrieves the last box of pet food for the dog.', motivationLine: 'Treasure is not gold or diamonds; treasure is the memories and love we guard with our lives.', imageUrl: './images/arcs/east-blue.png', badge: 'Pure Devotion' },
      { id: 'eb-7', sceneNumber: 7, title: 'The Lies of Syrup Village', tagline: 'The boy who cried pirate to keep a sick girl smiling.', storySummary: 'Usopp runs through his village shouting false pirate warnings daily to give hope to ailing Kaya, unaware that real pirate Captain Kuro is plotting her murder.', motivationLine: 'A protective heart hides behind many eccentric masks. Look deeper before judging.', imageUrl: './images/crew/usopp.png', badge: 'Usopp’s Secret Heart' },
      { id: 'eb-8', sceneNumber: 8, title: 'The Slingshot of Justice', tagline: 'When a coward chooses to stand his ground.', storySummary: 'Usopp fights desperately on the sloping cliffs to stop Kuro’s Black Cat Pirates. Luffy destroys Kuro’s Shakushi stealth claws with Gomu Gomu no Bell.', motivationLine: 'Bravery isn’t the lack of fear; it’s standing tall when your knees are trembling.', imageUrl: './images/crew/usopp.png', badge: 'The Sniper Awakens' },
      { id: 'eb-9', sceneNumber: 9, title: 'Gift of the Going Merry', tagline: 'A beloved ship sets sail toward the horizon.', storySummary: 'In gratitude for saving Syrup Village, Kaya bestows the caravel Going Merry upon the crew. Usopp joins the Straw Hats as sniper.', motivationLine: 'When you protect others sincerely, the universe rewards you with the vessel for your dreams.', imageUrl: './images/crew/merry.png', badge: 'The Maiden Voyage' },
      { id: 'eb-10', sceneNumber: 10, title: 'The Ocean Restaurant Baratie', tagline: 'Where fighting cooks serve sea-battered souls.', storySummary: 'Luffy accidentally damages Chef Zeff’s ocean restaurant Baratie and works off his debt, witnessing Sanji give free food to starving pirate Gin.', motivationLine: 'Never let anyone starve in body or spirit. Compassion knows no enemy.', imageUrl: './images/family/zeff.png', badge: 'Sanji’s Code' },
      { id: 'eb-11', sceneNumber: 11, title: 'The Appearance of Hawk-Eyes', tagline: 'The apex of swordsmanship arrives to test mortal limits.', storySummary: 'Dracule Mihawk cuts Don Krieg’s massive galleon into kindling simply because they interrupted his nap, drawing Zoro into an inevitable duel.', motivationLine: 'Meeting the absolute pinnacle of your ambition shows you how much further you must climb.', imageUrl: './images/blades/yoru.png', badge: 'Apex of the Sea' },
      { id: 'eb-12', sceneNumber: 12, title: 'Zoro’s Sacred Oath', tagline: 'Tears of conviction cut deeper than steel.', storySummary: 'Slit across the chest by Yoru, Zoro raises his sword to the sky weeping: "Until I defeat this man... I will NEVER LOSE AGAIN! Got a problem with that, Pirate King?!"', motivationLine: 'Accept your losses with grace, let defeat forge your willpower, and swear never to break again.', imageUrl: './images/arcs/baratie.png', badge: 'The Oath of Never Defeated', keyDialogue: 'I will never lose again! Got a problem with that, Pirate King?!', speaker: 'Roronoa Zoro' },
      { id: 'eb-13', sceneNumber: 13, title: 'Tearful Farewell to Zeff', tagline: 'A debt of life repaid with a bow of tears.', storySummary: 'Sanji prostrates himself before owner Zeff on the Baratie dock: "Zeff-san... thank you for taking damn good care of me all these years!"', motivationLine: 'Never be too proud to fall to your knees and thank the mentors who built you.', imageUrl: './images/crew/sanji.png', badge: 'Chef’s Departure' },
      { id: 'eb-14', sceneNumber: 14, title: 'The Curse of Arlong Park', tagline: 'Eight years of silent tears buying a village’s life.', storySummary: 'Nami returns to Arlong Park, revealing she has been collecting 100,000,000 berries under Arlong’s extortion to purchase Cocoyasi Village’s freedom.', motivationLine: 'The heaviest burdens are often borne in complete silence by those who love the most.', imageUrl: './images/family/belle-mere.png', badge: 'Nami’s Secret Agony' },
      { id: 'eb-15', sceneNumber: 15, title: 'Luffy, Help Me', tagline: 'When all hope is stripped away, brotherhood answers.', storySummary: 'Marine Captain Nezumi confiscates Nami’s saved fortune under Arlong’s orders. In despair, Nami stabs her tattoo; Luffy places his hat on her head and roars: "OF COURSE I WILL!"', motivationLine: 'Asking for help is the ultimate act of courage. Real friends answer without hesitation.', imageUrl: './images/arcs/arlong-park.png', badge: 'Hat Entrusted', keyDialogue: 'Luffy... help me. — OF COURSE I WILL!!!', speaker: 'Nami & Luffy' },
      { id: 'eb-16', sceneNumber: 16, title: 'The Walk to Arlong Park', tagline: 'Four brothers marching to shatter an empire of tears.', storySummary: 'Luffy, Zoro, Sanji, and Usopp stride side by side in unison toward Arlong Park with unyielding determination to annihilate the fish-man regime.', motivationLine: 'When you stand for justice and your friends, you walk with the strength of an army.', imageUrl: './images/crew/luffy.png', badge: 'Legendary March' },
      { id: 'eb-17', sceneNumber: 17, title: 'Shattering the Map Room', tagline: 'Destroying the prison of ink and stone forever.', storySummary: 'Luffy unleashes Gomu Gomu no Battle Axe from high in the sky, smashing Arlong through the floorboards and collapsing the entire fortress.', motivationLine: 'Tear down any monument or institution that treats human freedom as property.', imageUrl: './images/scenes/arlong-destruction.png', badge: 'Arlong Defeated' },
      { id: 'eb-18', sceneNumber: 18, title: 'Smile at the Scaffold', tagline: 'Facing death with the laughter of a true king.', storySummary: 'Trapped on Gol D. Roger’s execution scaffold in Loguetown by Buggy and Alvida with a guillotine blade falling, Luffy smiles and says: "Sorry, I’m dead!" Lightning saves him.', motivationLine: 'Fear of death vanishes when you are living your destiny with zero regrets.', imageUrl: './images/quotes/speaker-roger.png', badge: 'The Scaffold Smile' },
      { id: 'eb-19', sceneNumber: 19, title: 'The Wind of the Revolution', tagline: 'A father’s storm clears the path for freedom.', storySummary: 'Marine Captain Smoker pins Luffy to the ground, but Revolutionary Dragon appears amidst green gusts of wind, declaring: "What reason is there to stop a man from setting sail?!"', motivationLine: 'Destiny bends in favor of those who relentlessly pursue freedom.', imageUrl: './images/family/dragon.png', badge: 'Dragon’s Intervention' },
      { id: 'eb-20', sceneNumber: 20, title: 'The Barrel Oath on Reverse Mountain', tagline: 'Five souls, five dreams, one endless ocean.', storySummary: 'Amidst a howling storm approaching Reverse Mountain, the original five Straw Hats place their feet on a wooden barrel, vowing their dreams to the Grand Line.', motivationLine: 'A shared dream backed by unbreakable bonds can conquer any storm on earth.', imageUrl: './images/scenes/vivi-x-mark.png', badge: 'The Grand Line Oath' }
    ]
  },

  // 2. ALABASTA
  {
    id: 'alabasta',
    title: 'Alabasta Kingdom',
    japaneseTitle: 'アラバスタ編',
    subtitle: 'The Desert Rebellion & The Mark of Friendship',
    saga: 'Alabasta Saga',
    episodes: 'Episodes 62–135',
    chapters: 'Chapters 101–217',
    year: '2001–2002',
    bgGradient: 'from-amber-950 via-yellow-950 to-slate-950',
    accentColor: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.4)',
    themeType: 'desert_ruins',
    bgImage: './images/arcs/alabasta.png',
    shortDesc: 'Princess Vivi joins the crew undercover to save her desert kingdom from the sinister Baroque Works criminal syndicate and Warlord Crocodile.',
    fullSynopsis: 'Entering the Grand Line, the Straw Hats ally with Nefertari Vivi to prevent a devastating civil war orchestrated by Warlord Sir Crocodile using the drought-inducing Dance Powder. After harrowing ordeals at Little Garden and Drum Island, the crew invades Alubarna, where Zoro cuts steel, Luffy battles through desert sandstorms, and the bond of comradeship is forever etched with a silent "X".',
    keyCharacters: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nefertari Vivi', 'Sir Crocodile', 'Nico Robin', 'Tony Tony Chopper', 'Portgas D. Ace', 'Bon Clay'],
    locations: ['Twin Capes', 'Whiskey Peak', 'Little Garden', 'Drum Island', 'Nanohana', 'Rainbase', 'Alubarna'],
    factions: [
      { name: 'Straw Hat Pirates', banner: 'Kingdom Saviors', members: ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper'] },
      { name: 'Baroque Works', banner: 'Secret Syndicate', members: ['Crocodile (Mr. 0)', 'Robin (Miss All Sunday)', 'Daz Bones (Mr. 1)', 'Bon Clay (Mr. 2)'] },
      { name: 'Alabasta Royal Army', banner: 'Kingdom Guards', members: ['King Cobra', 'Vivi', 'Pell', 'Chaka'] }
    ],
    fights: [
      {
        id: 'luffy-vs-crocodile-3',
        combatants: 'Monkey D. Luffy vs. Sir Crocodile',
        title: 'The Underground Tomb: Gomu Gomu no Storm',
        location: 'Alubarna Royal Tomb Ruins',
        outcome: 'Crocodile defeated; rain returns to Alabasta',
        keyClash: 'Blood-soaked fists punching through Desert Spada',
        quote: 'If this is the kingdom Vivi loved so much, then don’t you dare go destroying it!!',
        speaker: 'Monkey D. Luffy',
        description: 'Using his own blood to solidify Crocodile’s sand body, Luffy launches Gomu Gomu no Storm, blasting Crocodile through bedrock into the sky.',
        imageUrl: './images/arcs/alabasta.png'
      },
      {
        id: 'zoro-vs-mr1',
        combatants: 'Roronoa Zoro vs. Daz Bones (Mr. 1)',
        title: 'The Breath of All Things: Slicing Steel',
        location: 'Alubarna Streets',
        outcome: 'Zoro cuts steel; awakens Ryuo precursor',
        keyClash: 'Ittoryu Iai: Shishi Sonson vs. Spiral Hollow',
        quote: 'Can you hear it? The breath of the rocks, the breath of the trees... and the breath of steel.',
        speaker: 'Roronoa Zoro',
        description: 'Near death and covered in lacerations, Zoro enters absolute zen clarity, feeling the breath of steel and cleaving Mr. 1 in a single draw.',
        imageUrl: './images/blades/wado.png'
      }
    ],
    iconicMoments: [
      { id: 'x-mark', title: 'The Silent "X" Mark of Comradeship', quote: 'No matter what happens, this mark on our left arm is proof that we are comrades!', speaker: 'The Straw Hats & Vivi', description: 'Departing Alabasta under Navy fire, the crew silently raises their left arms displaying the black X mark.', badge: 'Eternal Bond', imageUrl: './images/scenes/vivi-x-mark.png' },
      { id: 'hiluluk-speech', title: 'Dr. Hiluluk’s Final Speech', quote: 'When does a man die? When he is forgotten!', speaker: 'Dr. Hiluluk', description: 'Surrounded by Wapol’s firing squad, Hiluluk smiles and drinks his potion as a true doctor who cured a kingdom.', badge: 'Immortality of Will', imageUrl: './images/quotes/speaker-hiriluk.png' }
    ],
    chaptersList: [
      { id: 'c-drum-island', title: 'Drum Island Arc', description: 'The crew searches for a doctor in the snowy kingdom of Drum, meeting Tony Tony Chopper.', episodes: 'Ep 78–91', imageUrl: './images/crew/chopper.png', highlights: ['Climbing Drum Rockies', 'Dr. Hiluluk sacrifice', 'Chopper joins'] },
      { id: 'c-alubarna-battle', title: 'Battle of Alubarna', description: 'Straw Hats clash against Baroque Works officer agents across the desert capital.', episodes: 'Ep 104–130', imageUrl: './images/scenes/vivi-x-mark.png', highlights: ['Zoro cuts steel', 'Luffy vs Crocodile', 'Pell sacrifice'] }
    ],
    storyScenes: [
      { id: 'ala-1', sceneNumber: 1, title: 'The Whale at the Twin Capes', tagline: 'Fifty years waiting for a melody that never stopped.', storySummary: 'Plunging down Reverse Mountain, the crew meets the colossal island-whale Laboon, who bashes his scarred head against the Red Line waiting for his lost pirate friends.', motivationLine: 'Promises are sacred. Never abandon the ones who gave you their trust.', imageUrl: './images/family/laboon.png', badge: 'Laboon’s Promise' },
      { id: 'ala-2', sceneNumber: 2, title: 'Whiskey Peak’s Fatal Welcoming', tagline: 'A town of bounty hunters learns the terror of Santoryu.', storySummary: 'The Baroque Works frontier agents attempt to poison and capture the crew; Zoro single-handedly takes down 100 assassins in the moonlit night.', motivationLine: 'Stay vigilant when flattery is abundant. True warriors never sleep on guard.', imageUrl: './images/blades/sandai-kitetsu.png', badge: 'Zoro’s 100-Man Cleave' },
      { id: 'ala-3', sceneNumber: 3, title: 'Vivi’s Desperate Secret', tagline: 'A princess risking life and name to save her homeland.', storySummary: 'Miss Wednesday is unmasked as Nefertari Vivi, crown princess of Alabasta. The Straw Hats promise to escort her home safely.', motivationLine: 'True nobility is measured by how much you are willing to bleed for your people.', imageUrl: './images/crew/nami.png', badge: 'Princess Revealed' },
      { id: 'ala-4', sceneNumber: 4, title: 'The Giants’ Century-Long Honor Duel', tagline: 'One hundred years of combat with broken weapons and intact honor.', storySummary: 'At Little Garden, giants Dorry and Brogy fight their daily duel for 100 years. Mr. 3 interferes by booby-trapping their beer; Luffy and Zoro avenge them.', motivationLine: 'Honor outlives physical strength. Stand tall by your principles regardless of time.', imageUrl: './images/arcs/alabasta.png', badge: 'Elbaph Warrior Honor' },
      { id: 'ala-5', sceneNumber: 5, title: 'Sanji’s "Mr. Prince" Ruse', tagline: 'Intellect and trickery striking from the shadows.', storySummary: 'Sanji discovers Mr. 0’s Den Den Mushi on Little Garden, posing as "Mr. Prince" to mislead Crocodile and keep the Straw Hats’ survival hidden.', motivationLine: 'Strategy and quick wits can conquer forces ten times larger than your own.', imageUrl: './images/crew/sanji.png', badge: 'Mr. Prince' },
      { id: 'ala-6', sceneNumber: 6, title: 'Nami’s Lethal Desert Fever', tagline: 'Racing against mortal sickness in a freezing wilderness.', storySummary: 'Nami contracts Five-Day Disease from an ancient bug on Little Garden; the crew diverts everything to Drum Island to find a doctor.', motivationLine: 'Never hesitate to alter your plans when the health and life of a comrade is on the line.', imageUrl: './images/crew/luffy.png', badge: 'Frantic Rescue' },
      { id: 'ala-7', sceneNumber: 7, title: 'Bare-Handed Ascent of Drum Rockies', tagline: 'Bleeding fingers climbing vertical ice for a friend.', storySummary: 'Luffy scales the 5,000-meter sheer icy cliff of Drum Castle in freezing sub-zero winds carrying both sick Nami and wounded Sanji on his back.', motivationLine: 'Love for your friends gives you superhuman strength to overcome physical agony.', imageUrl: './images/family/kureha.png', badge: 'Luffy’s Iron Ascent' },
      { id: 'ala-8', sceneNumber: 8, title: 'The Blue-Nosed Reindeer Monster', tagline: 'An outcast doctor with a heart purer than snow.', storySummary: 'Luffy meets Tony Tony Chopper, a reindeer ostracized by both humans and beasts for eating the Human-Human fruit and having a blue nose.', motivationLine: 'What makes you different is not a flaw; it is the unique gift you offer the world.', imageUrl: './images/crew/chopper.png', badge: 'The Outcast Healer' },
      { id: 'ala-9', sceneNumber: 9, title: 'Dr. Hiluluk’s Immortal Toast', tagline: 'A man dies when he is forgotten!', storySummary: 'Surrounded by King Wapol’s firing squad, Dr. Hiluluk raises his glass and drinks his own potion smiling, proving that his spirit will cure the country forever.', motivationLine: 'A bullet can end a heartbeat, but an inspiring ideal echoes through eternity.', imageUrl: './images/quotes/speaker-hiriluk.png', badge: 'Immortal Philosophy' },
      { id: 'ala-10', sceneNumber: 10, title: 'Shut Up and Come With Us!', tagline: 'The simplest invitation that dissolves lifelong loneliness.', storySummary: 'Luffy knocks out Wapol and roars at Chopper: "Shut up! Let’s go!" Chopper weeps tears of joy as Dr. Kureha fires Hiluluk’s pink cherry blossom snow into the sky.', motivationLine: 'True belonging doesn’t ask for explanations. It simply welcomes you home.', imageUrl: './images/crew/chopper.png', badge: 'Chopper Joins the Crew' },
      { id: 'ala-11', sceneNumber: 11, title: 'The Fire Fist of Nanohana', tagline: 'A loving brother watching over the reckless rookie.', storySummary: 'In the port of Nanohana, Portgas D. Ace appears, using his Flame-Flame fruit to incinerate Baroque Works bounty hunters and giving Luffy his Vivre Card.', motivationLine: 'Having older mentors and brothers guarding your back gives you wings to fly higher.', imageUrl: './images/quotes/speaker-ace.png', badge: 'Ace Reunites with Luffy' },
      { id: 'ala-12', sceneNumber: 12, title: 'People Die, Vivi!', tagline: 'Raw realism shattering naive ideals in the desert sand.', storySummary: 'When Vivi insists nobody should die in the civil war, Luffy stops her: "People die! We’re your friends—put our lives on the line with yours!"', motivationLine: 'True comrades don’t keep you comfortable; they hold you accountable and bleed beside you.', imageUrl: './images/arcs/alabasta.png', badge: 'Reality Check' },
      { id: 'ala-13', sceneNumber: 13, title: 'The Hook of the Warlord', tagline: 'The first brutal taste of Grand Line warlord power.', storySummary: 'In the dunes outside Rainbase, Crocodile impales Luffy with his golden hook, draining his moisture and burying him in quicksand.', motivationLine: 'Devastating defeat is not the end of the story; it is the brutal classroom of greatness.', imageUrl: './images/fruits/gura-gura.png', badge: 'Luffy Pierced' },
      { id: 'ala-14', sceneNumber: 14, title: 'Usopp’s Definition of a Man', tagline: 'A coward’s skull breaks, but his faith in Luffy remains solid.', storySummary: 'With his skull shattered by Mr. 4’s four-ton bat, Usopp stands back up: "There comes a time when a man must fight—when his friend’s dream is laughed at!"', motivationLine: 'Courage is defending what you believe in when all odds are stacked against your survival.', imageUrl: './images/crew/usopp.png', badge: 'Usopp’s Sacred Stand' },
      { id: 'ala-15', sceneNumber: 15, title: 'Sanji vs. Bon Clay: Okama Chivalry', tagline: 'A clash of kicks where mutual respect blossoms.', storySummary: 'Sanji defeats Mr. 2 Bon Clay after bypassing his Clone-Clone fruit transformations. They part ways as comrades bound by mutual warrior admiration.', motivationLine: 'Even amidst deadly clashes, real honor recognizes and respects a noble adversary.', imageUrl: './images/quotes/speaker-bonclay.png', badge: 'Okama Chivalry' },
      { id: 'ala-16', sceneNumber: 16, title: 'The Breath of Steel', tagline: 'Hearing the heartbeat of stone and steel in the heat of battle.', storySummary: 'Severely wounded by Mr. 1’s dice blades, Zoro enters total sensory clarity, feeling the "breath" of all matter and cleaving steel with Shishi Sonson.', motivationLine: 'Mastery arrives when you quiet your mind and tune in to the harmony of the universe.', imageUrl: './images/blades/wado.png', badge: 'Cutting Steel' },
      { id: 'ala-17', sceneNumber: 17, title: 'Gomu Gomu no Storm', tagline: 'Blood-soaked fists punching through the desert sky.', storySummary: 'Luffy uses his own blood to bypass Crocodile’s sand intangibility in the royal tomb, launching Gomu Gomu no Storm to launch Crocodile through the bedrock.', motivationLine: 'Use whatever you have left—even your own blood—to shatter impossible barriers.', imageUrl: './images/arcs/alabasta.png', badge: 'Crocodile Shattered' },
      { id: 'ala-18', sceneNumber: 18, title: 'Pell’s Winged Sacrifice', tagline: 'The Guardian Falcon who flew into the explosion.', storySummary: 'With the bomb set to incinerate Alubarna, Pell flies into the sky carrying the explosive clock, detonating it high in the atmosphere to save the capital.', motivationLine: 'Sacrificing oneself for the greater good is the highest duty of a kingdom’s guardian.', imageUrl: './images/arcs/alabasta.png', badge: 'Falcon Sacrifice' },
      { id: 'ala-19', sceneNumber: 19, title: 'The Silent "X" Mark of Comradeship', tagline: 'Words can be heard, but a silent oath echoes forever.', storySummary: 'With Marines surrounding them, the Straw Hats raise their left arms showing the black "X" mark, affirming that Princess Vivi will forever be their comrade.', motivationLine: 'True bonds don’t need words or physical proximity; loyalty lives in the soul.', imageUrl: './images/scenes/vivi-x-mark.png', badge: 'The Mark of Friendship' },
      { id: 'ala-20', sceneNumber: 20, title: 'The Stowaway Archaeologist', tagline: 'A demon child who found warmth on a pirate ship.', storySummary: 'Nico Robin appears aboard Going Merry after the departure, asking Luffy to let her join the crew since he saved her life when she wanted to die.', motivationLine: 'Open your heart to those seeking redemption; everyone deserves a family.', imageUrl: './images/crew/robin.png', badge: 'Robin Joins the Crew' }
    ]
  },

  // 3. SKYPIEA
  {
    id: 'skypiea',
    title: 'Sky Island Skypiea',
    japaneseTitle: '空島・スカイピア編',
    subtitle: 'The City of Gold & The 400-Year Oath',
    saga: 'Sky Island Saga',
    episodes: 'Episodes 136–206',
    chapters: 'Chapters 218–302',
    year: '2002–2004',
    bgGradient: 'from-sky-950 via-indigo-950 to-amber-950',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    themeType: 'cloud_temple',
    bgImage: './images/arcs/skypiea.png',
    shortDesc: 'A colossal galleon falls from the heavens; the Straw Hats ride the terrifying Knock Up Stream 10,000 meters above sea level to Skypiea.',
    fullSynopsis: 'Mocked in Mock Town by Bellamy for believing in a sky island, the Straw Hats find the Mont Blanc Cricket and ride the ocean-shattering Knock Up Stream to the White Sea. In the ancient Upper Yard, they uncover the lost City of Gold, clash with the Shandian warriors, and face God Enel, an invincible Logia tyrant whose 200,000,000 volt thunder meets its natural predator: Luffy’s rubber body.',
    keyCharacters: ['Monkey D. Luffy', 'Roronoa Zoro', 'God Enel', 'Wiper', 'Nico Robin', 'Mont Blanc Cricket', 'Gan Fall', 'Nami'],
    locations: ['Jaya', 'Mock Town', 'Knock Up Stream', 'Angel Beach', 'Upper Yard', 'Giant Jack', 'Ark Maxim'],
    factions: [
      { name: 'Straw Hat Pirates', banner: 'Sky Voyagers', members: ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper', 'Robin'] },
      { name: 'God’s Army', banner: 'Enel’s Priests', members: ['God Enel', 'Ohm', 'Shura', 'Satori', 'Gedatsu'] },
      { name: 'Shandian Tribe', banner: 'Warriors of Shandora', members: ['Wiper', 'Kamakiri', 'Braham', 'Genbo', 'Aisa'] }
    ],
    fights: [
      {
        id: 'luffy-vs-enel',
        combatants: 'Monkey D. Luffy vs. God Enel',
        title: 'Natural Enemy: Rubber vs. 200,000,000 Volts',
        location: 'Ark Maxim Deck & Sky Above Upper Yard',
        outcome: 'Enel defeated; Golden Bell rings across heaven and earth',
        keyClash: 'Gomu Gomu no Golden Rifle through Raigo',
        quote: 'You can be a god or whatever you want! But I’m rubber, and I’m going to ring that golden bell so Cricket knows Shandora was in the sky all along!',
        speaker: 'Monkey D. Luffy',
        description: 'Luffy is immune to Enel’s electricity. Weighing down his arm with a giant golden sphere, Luffy pierces Enel’s Raigo cloud and strikes the Golden Belfry bell.',
        imageUrl: './images/scenes/luffy-bell.png'
      }
    ],
    iconicMoments: [
      { id: 'enel-face', title: 'Enel’s Shocked Face', quote: 'W-What?! Lightning has no effect on you?!', speaker: 'God Enel', description: 'Enel’s god complex shatters into the most iconic jaw-dropping comedic shock face in manga history when 200,000,000 volts does zero damage to Luffy.', badge: 'Peak Comedy & Hype', imageUrl: './images/scenes/enel-shock.png' },
      { id: 'ring-the-bell', title: 'Ringing the Golden Bell', quote: 'Can you hear it, ossan?! THE CITY OF GOLD WAS UP HERE ALL ALONG!!', speaker: 'Monkey D. Luffy', description: 'The deep, celestial chime of the Shandorian Golden Bell echoes 10,000 meters down to Mont Blanc Cricket on Jaya, fulfilling Calgara and Noland’s 400-year promise.', badge: 'Fulfilling the 400-Year Oath', imageUrl: './images/scenes/luffy-bell.png' }
    ],
    chaptersList: [
      { id: 'c-jaya-mock', title: 'Jaya & Knock Up Stream', description: 'Bellamy mocks dreams in Mock Town. Blackbeard proclaims dreams never end. Going Merry flies.', episodes: 'Ep 144–152', imageUrl: './images/arcs/skypiea.png', highlights: ['Luffy one-punches Bellamy', 'Blackbeard dreams speech', 'Knock Up Stream launch'] },
      { id: 'c-upper-yard', title: 'Survival Game of Upper Yard', description: 'A deadly 4-way battle between Straw Hats, Shandians, Enel’s priests, and Enel himself.', episodes: 'Ep 153–182', imageUrl: './images/blades/wado.png', highlights: ['Zoro 36-pound cannon', 'Wiper reject dial', 'Enel shocked face'] },
      { id: 'c-golden-bell', title: 'The Light of Shandora', description: 'Luffy rings the sacred golden bell, concluding the 400-year tragic separation of sky and land.', episodes: 'Ep 183–195', imageUrl: './images/scenes/luffy-bell.png', highlights: ['Golden Rifle clash', 'Golden bell rings', 'Roger poneglyph carving'] }
    ],
    storyScenes: [
      { id: 'sky-1', sceneNumber: 1, title: 'The Galleon Falling From Heaven', tagline: 'The needle of destiny points straight up to the clouds.', storySummary: 'A 200-year-old skeleton-crewed galleon plunges from the clouds right in front of Going Merry. The Log Pose points straight to the sky.', motivationLine: 'Never doubt the impossible simply because narrow minds cannot fathom it.', imageUrl: './images/arcs/skypiea.png', badge: 'Sky Ship Anomaly' },
      { id: 'sky-2', sceneNumber: 2, title: 'The Mockery of Mock Town', tagline: 'The small-minded laugh when dreamers dare to look up.', storySummary: 'At the Mock Town tavern, Bellamy and his crew brutally beat and ridicule Luffy and Zoro for asking about Sky Island. Luffy orders Zoro not to fight back.', motivationLine: 'Fights without honor or purpose are beneath a person with a true destiny.', imageUrl: './images/crew/zoro.png', badge: 'Honor in Restraint' },
      { id: 'sky-3', sceneNumber: 3, title: 'People’s Dreams Have No End!', tagline: 'A drunken philosopher on the street shares eternal truth.', storySummary: 'Outside the pub, Marshall D. Teach cheers Luffy on: "People’s dreams... HAVE NO END! Let them laugh! If you don’t aim high, you’ll never reach the sky!"', motivationLine: 'Wisdom can come from anywhere. Never let cynics crush your desire to soar.', imageUrl: './images/bounties/bounty-blackbeard.png', badge: 'The Speech on Dreams' },
      { id: 'sky-4', sceneNumber: 4, title: 'The Legend of Mont Blanc Noland', tagline: 'The tragic explorer executed for telling the truth.', storySummary: 'Cricket reveals the story of his ancestor Noland, executed 400 years ago as a liar for claiming a City of Gold existed on Jaya that vanished into thin air.', motivationLine: 'Truth often takes centuries to be vindicated. Keep searching for evidence.', imageUrl: './images/arcs/skypiea.png', badge: 'The Liar of Lvneel' },
      { id: 'sky-5', sceneNumber: 5, title: 'One Punch for Bellamy', tagline: 'A single devastating fist silencing arrogant chatter.', storySummary: 'When Bellamy steals Cricket’s gold birds, Luffy walks to Mock Town alone and puts Bellamy through the dirt with a single decisive punch.', motivationLine: 'Actions speak louder than a million arrogant boasts.', imageUrl: './images/crew/luffy.png', badge: 'Bellamy Silenced' },
      { id: 'sky-6', sceneNumber: 6, title: 'Riding the Knock Up Stream', tagline: 'A wooden caravel ascending a column of ocean water.', storySummary: 'Going Merry catches the geothermal vertical water jet, spreading chicken-styled wooden wings to fly 10,000 meters straight up into the clouds.', motivationLine: 'Trust your vessel and seize the terrifying currents that launch you into the unknown.', imageUrl: './images/crew/merry.png', badge: 'Ascending to Heaven' },
      { id: 'sky-7', sceneNumber: 7, title: 'The Sea of Clouds: Angel Beach', tagline: 'Stepping upon the pristine White Sea.', storySummary: 'The crew discovers a paradise made of fluffy solid clouds, meeting Conis and Pagaya who explain Dials and Waver technology.', motivationLine: 'A brand new world demands curiosity, wonder, and an open mind.', imageUrl: './images/crew/nami.png', badge: 'Angel Beach' },
      { id: 'sky-8', sceneNumber: 8, title: 'The Judgments of God Enel', tagline: 'Thunder falling from clear skies to execute dissenters.', storySummary: 'Enel’s Mantra and Rumble-Rumble power unleash El Thor across the island, vaporizing anything that opposes his absolute heavenly rule.', motivationLine: 'Tyranny disguised as divinity remains fragile when challenged by the truth.', imageUrl: './images/arcs/skypiea.png', badge: 'Divine Judgment' },
      { id: 'sky-9', sceneNumber: 9, title: 'Campfire with the Wolves', tagline: 'Laughter and dancing on the eve of war.', storySummary: 'On the night before invading the Upper Yard, the Straw Hats sing around a roaring campfire and dance hand-in-hand with the native giant cloud wolves.', motivationLine: 'Joy is an invincible shield. Always celebrate life before stepping onto the battlefield.', imageUrl: './images/crew/luffy.png', badge: 'Campfire Harmony' },
      { id: 'sky-10', sceneNumber: 10, title: 'The 400-Year Sacred Oath', tagline: 'Calgara and Noland ringing the bell between worlds.', storySummary: 'A flashback reveals Shandian Great Warrior Calgara and Explorer Noland sharing an unbreakable brotherhood bound by the chiming Golden Bell.', motivationLine: 'Bonds between kindred spirits transcend cultures, borders, and oceans of time.', imageUrl: './images/arcs/skypiea.png', badge: 'Ancient Brotherhood' },
      { id: 'sky-11', sceneNumber: 11, title: 'Zoro’s 36-Pound Cannon', tagline: 'A flying blade cutting through the sky.', storySummary: 'Confronted by Braham’s flash guns and the Ordeal of Iron, Zoro unleashes Ittoryu 36-Pound Cannon, sending a flying wind-slash through the jungle.', motivationLine: 'Every new environment forces you to evolve your combat skills.', imageUrl: './images/blades/sandai-kitetsu.png', badge: 'Flying Slash Awakens' },
      { id: 'sky-12', sceneNumber: 12, title: 'Wiper’s Tenfold Reject Dial', tagline: 'Firing a cannon that destroys the user’s own bones.', storySummary: 'Berserker Wiper fires the ancient Reject Dial three times in one day to kill Enel, accepting the horrific recoil that shatters his shoulders.', motivationLine: 'Resolve means being willing to pay the ultimate price for your homeland’s honor.', imageUrl: './images/arcs/skypiea.png', badge: 'The Berserker’s Resolve' },
      { id: 'sky-13', sceneNumber: 13, title: 'The Invincible Logia Tyrant', tagline: 'Restarting a stopped heart with internal lightning defibrillation.', storySummary: 'Enel is struck down by Wiper’s Reject Dial, but uses his electrical power to jump-start his own heart, standing back up as an immortal god.', motivationLine: 'Do not despair when evil seems invincible; every tyrant has an unforeseen weakness.', imageUrl: './images/arcs/skypiea.png', badge: 'Heart Defibrillation' },
      { id: 'sky-14', sceneNumber: 14, title: 'Enel’s Shock: The Natural Enemy', tagline: 'A god looks upon rubber and feels genuine terror.', storySummary: 'Enel zaps Luffy with 200,000,000 Volts. Luffy blinks unharmed. Enel’s eyes and jaw drop in the most historic comedic shock face in anime.', motivationLine: 'No matter how grand your power, nature always holds a counter-balance to check arrogance.', imageUrl: './images/scenes/enel-shock.png', badge: 'Natural Enemy' },
      { id: 'sky-15', sceneNumber: 15, title: 'Sanji’s Cigarette on Ark Maxim', tagline: 'Sabotaging a god’s airship with effortless swagger.', storySummary: 'While Enel is distracted, Sanji infiltrates the Ark Maxim engine room, demolishing its main gear mechanisms: "I was just looking for a light."', motivationLine: 'Quiet competence working behind the scenes often turns the tide of catastrophic wars.', imageUrl: './images/crew/sanji.png', badge: 'Engine Sabotage' },
      { id: 'sky-16', sceneNumber: 16, title: 'The Golden Sphere Burden', tagline: 'A captain carrying gold to reach the heavens.', storySummary: 'Enel fuses a multi-ton solid gold sphere around Luffy’s arm to drag him down, but Luffy uses the added weight as the ultimate battering ram.', motivationLine: 'Take the burdens your enemies throw at you and turn them into your heaviest weapons.', imageUrl: './images/crew/luffy.png', badge: 'Gold Sphere Gauntlet' },
      { id: 'sky-17', sceneNumber: 17, title: 'Cutting Giant Jack Beanstalk', tagline: 'Nami and Zoro carving a highway to the storm.', storySummary: 'Nami on the Waver and Zoro with Santoryu slice down the thousand-meter Giant Jack beanstalk so Luffy can run up into the thunder clouds.', motivationLine: 'Teamwork paves the impossible road so the leader can deliver the decisive strike.', imageUrl: './images/crew/nami.png', badge: 'Giant Jack Falls' },
      { id: 'sky-18', sceneNumber: 18, title: 'Gomu Gomu no Golden Rifle', tagline: 'A fist of gold piercing the judgment cloud.', storySummary: 'Luffy stretches his arm back miles through the air, winding up the golden ball and smashing Enel through the clouds directly into the Golden Belfry.', motivationLine: 'Channel the hopes of an entire nation into your final, decisive effort.', imageUrl: './images/scenes/luffy-bell.png', badge: 'Golden Rifle Strike' },
      { id: 'sky-19', sceneNumber: 19, title: 'The Bell Rings Across 10,000 Meters', tagline: 'The Light of Shandora chimes across four centuries.', storySummary: 'The massive golden bell rings with a celestial resonance heard across the heavens and down to Cricket on Jaya, proving the City of Gold was in the sky.', motivationLine: 'Truth vindicated rings sweeter than all the gold on earth.', imageUrl: './images/scenes/luffy-bell.png', badge: 'The 400-Year Chime' },
      { id: 'sky-20', sceneNumber: 20, title: 'Roger’s Inscription on the Poneglyph', tagline: 'I have made it here and will guide this passage to the ends of the earth.', storySummary: 'Robin discovers the Shandora Poneglyph bearing Gol D. Roger’s handwritten script, realizing the true history must be carried to Laugh Tale.', motivationLine: 'Your journey is connected to a grand tapestry woven by pioneers who sailed before you.', imageUrl: './images/crew/robin.png', badge: 'Roger’s Message' }
    ]
  },

  // 4. ENIES LOBBY / WATER 7
  {
    id: 'enies-lobby',
    title: 'Water 7 & Enies Lobby',
    japaneseTitle: 'ウォーターセブン・エニエスロビー編',
    subtitle: 'The Shipwrights, CP9 & The Declaration of War',
    saga: 'Water 7 Saga',
    episodes: 'Episodes 229–325',
    chapters: 'Chapters 322–441',
    year: '2005–2007',
    bgGradient: 'from-blue-950 via-slate-950 to-orange-950',
    accentColor: '#0ea5e9',
    glowColor: 'rgba(14, 165, 233, 0.4)',
    themeType: 'waterfall_city',
    bgImage: './images/arcs/enies-lobby.png',
    shortDesc: 'A devastating fracture tears the crew apart over Going Merry; Nico Robin surrenders herself to Cipher Pol 9 to save her comrades.',
    fullSynopsis: 'In the Venice-like water metropolis of Water 7, Going Merry is declared irreparably broken, sparking an emotional duel between Luffy and Usopp. CP9 infiltrates the Galley-La company, framing the crew and taking Robin and Franky captive. Refusing to let Robin die, the Straw Hats charge the judicial stronghold of Enies Lobby, shoot down the World Government flag, unlock Gear 2nd, and fight across a Buster Call to hear Robin scream: "I WANT TO LIVE!"',
    keyCharacters: ['Monkey D. Luffy', 'Roronoa Zoro', 'Nico Robin', 'Franky', 'Usopp (Sogeking)', 'Rob Lucci', 'Going Merry', 'Spandam'],
    locations: ['Water 7', 'Shift Station', 'Sea Train Puffing Tom', 'Enies Lobby', 'Tower of Law', 'Bridge of Hesitation'],
    factions: [
      { name: 'Straw Hat Pirates', banner: 'World Defiers', members: ['Luffy', 'Zoro', 'Nami', 'Sanji', 'Chopper', 'Sogeking'] },
      { name: 'Cipher Pol 9', banner: 'World Government Assassins', members: ['Rob Lucci', 'Kaku', 'Jabura', 'Blueno', 'Kalifa', 'Kumadori', 'Fukuro'] },
      { name: 'Galley-La & Franky Family', banner: 'Water 7 Vanguard', members: ['Iceburg', 'Paulie', 'Peepley Lulu', 'Tilestone', 'Zambai'] }
    ],
    fights: [
      {
        id: 'luffy-vs-lucci-1',
        combatants: 'Monkey D. Luffy vs. Rob Lucci',
        title: 'The Ultimate Clash of Will: Jet Gatling vs. Rokuogan',
        location: 'Bridge of Hesitation Interior Pillar',
        outcome: 'Lucci pulverized; Luffy collapses from total exhaustion',
        keyClash: 'Gomu Gomu no Jet Gatling against Iron Body (Tekkai)',
        quote: 'As long as you are alive... you will keep coming after my comrades!! I won’t fall down!!',
        speaker: 'Monkey D. Luffy',
        description: 'Blasted point-blank by Lucci’s Sai Dai Rin: Rokuogan, Luffy refuses to fall backward. Pumping his legs in Gear 2nd, he unleashes a storm of Jet Gatling punches that demolishes Lucci through the brick tower.',
        imageUrl: './images/arcs/enies-lobby.png'
      }
    ],
    iconicMoments: [
      { id: 'i-want-to-live', title: 'I Want To Live!', quote: 'I WANT TO LIVE! TAKE ME OUT TO SEA WITH YOU!!', speaker: 'Nico Robin', description: 'Tears flood Robin’s eyes as she screams her deepest wish to live across the chasm to the Straw Hats assembled atop the courthouse.', badge: 'Peak Anime History', imageUrl: './images/crew/robin.png' },
      { id: 'merry-tears', title: 'Merry’s Final Words', quote: 'I was happy... thank you for loving me all this time.', speaker: 'Going Merry', description: 'The ship’s spirit speaks to her weeping crew as golden flames consume her hull under falling snow on the calm sea.', badge: 'Viking Funeral', imageUrl: './images/scenes/merry-funeral.png' }
    ],
    chaptersList: [
      { id: 'c-flag-shoot', title: 'Declaration of War', description: 'Sogeking burns the World Government flag; the Straw Hats challenge the entire world.', episodes: 'Ep 278', imageUrl: './images/crew/usopp.png', highlights: ['Snipe the flag', 'Robin’s tears', 'I want to live'] },
      { id: 'c-cp9-duels', title: 'Tower of Law Duels', description: 'Zoro’s Ashura, Sanji’s Diable Jambe, and Chopper’s Monster Point dismantle CP9.', episodes: 'Ep 285–302', imageUrl: './images/blades/enma.png', highlights: ['Ashura awakens', 'Diable Jambe', 'Monster Point'] },
      { id: 'c-merry-farewell', title: 'The Miracle Ship Farewell', description: 'Going Merry sails into the Buster Call cannon fire to rescue her crew, then says goodbye.', episodes: 'Ep 309–312', imageUrl: './images/scenes/merry-funeral.png', highlights: ['Merry rescue', 'Snow funeral', 'Franky builds Sunny'] }
    ],
    storyScenes: [
      { id: 'el-1', sceneNumber: 1, title: 'The Puffing Tom Sea Train', tagline: 'Riding iron tracks laid upon the open ocean.', storySummary: 'The crew encounters the train that rides on sea tracks, engineered by Master Tom to connect the islands of the Water 7 archipelago.', motivationLine: 'Engineering and human ingenuity can tame even the fiercest natural frontiers.', imageUrl: './images/family/tom.png', badge: 'Sea Train Wonder' },
      { id: 'el-2', sceneNumber: 2, title: 'The Verdict on Going Merry', tagline: 'The diagnosis that broke a pirate captain’s heart.', storySummary: 'Galley-La master shipwrights inspect the Going Merry and deliver the fatal truth: her keel is broken and she cannot sail to the next island.', motivationLine: 'Accepting painful realities is the hardest responsibility of leadership.', imageUrl: './images/crew/merry.png', badge: 'The Fatal Keel' },
      { id: 'el-3', sceneNumber: 3, title: 'Usopp’s Beating & Stolen Fortune', tagline: 'A crew member battered and robbed of his dignity.', storySummary: 'The Franky Family ambushes Usopp, stealing 200,000,000 berries meant for repairs. Bloodied and weeping, Usopp blames himself.', motivationLine: 'Despair makes us forget that our worth is not measured in money or physical strength.', imageUrl: './images/crew/usopp.png', badge: 'Usopp’s Agony' },
      { id: 'el-4', sceneNumber: 4, title: 'Annihilation of Franky House', tagline: 'Brotherhood avenging a fallen comrade.', storySummary: 'Luffy, Zoro, Sanji, and Chopper march into the Franky Family headquarters and pulverize the compound to dust for hurting Usopp.', motivationLine: 'Nobody touches a brother and walks away without answering to the whole crew.', imageUrl: './images/crew/luffy.png', badge: 'Franky House Pulverized' },
      { id: 'el-5', sceneNumber: 5, title: 'Luffy vs. Usopp Duel', tagline: 'Tears falling on the deck as brothers draw weapons.', storySummary: 'Unable to accept letting Going Merry die, Usopp challenges Luffy to a duel for ownership of the ship. Luffy defeats him in tears.', motivationLine: 'Sometimes the people we love hurt each other the deepest when grief clouds reason.', imageUrl: './images/crew/usopp.png', badge: 'Duel of Tears' },
      { id: 'el-6', sceneNumber: 6, title: 'CP9 Unmasked at Galley-La', tagline: 'Five years undercover in the shadows of power.', storySummary: 'Rob Lucci, Kaku, Kalifa, and Blueno reveal themselves as government assassins, attempting to assassinate Mayor Iceburg for Pluton blueprints.', motivationLine: 'Be vigilant; wolves often cloak themselves in the garments of trusted craftsmen.', imageUrl: './images/arcs/water7.png', badge: 'CP9 Betrayal' },
      { id: 'el-7', sceneNumber: 7, title: 'Robin’s Cold Departure', tagline: 'Walking into darkness so her friends can see the light.', storySummary: 'Nico Robin vanishes into CP9 custody, telling Luffy she will never return. In truth, she surrendered to save the Straw Hats from a Buster Call.', motivationLine: 'True selflessness willingly takes the blame if it keeps the innocent alive.', imageUrl: './images/crew/robin.png', badge: 'Robin’s Sacrifice' },
      { id: 'el-8', sceneNumber: 8, title: 'Aqua Laguna’s Monster Tidal Wave', tagline: 'The ocean swallowing the lower tiers of the city.', storySummary: 'The annual super-tsunami Aqua Laguna surges over Water 7 as the crew prepares to chase Robin on the experimental sea train Rocketman.', motivationLine: 'When the tides of life rise against you, ride them straight toward your objective.', imageUrl: './images/family/tom.png', badge: 'Aqua Laguna' },
      { id: 'el-9', sceneNumber: 9, title: 'The Rocketman Breaks Through', tagline: 'A train without brakes charging through storming waves.', storySummary: 'Zoro and Luffy blast a gaping hole through the giant Aqua Laguna wave so Rocketman can fly across the raging sea to Enies Lobby.', motivationLine: 'When there is no door forward, carve your own entrance through the wall.', imageUrl: './images/arcs/water7.png', badge: 'Rocketman Launch' },
      { id: 'el-10', sceneNumber: 10, title: 'The Birth of Sogeking', tagline: 'A mask of confidence born from a sniper’s heart.', storySummary: 'Unable to rejoin the crew directly, Usopp dons a cape and golden mask, declaring himself "Sogeking, King of Snipers from the Island of Snipers."', motivationLine: 'If your current self lacks confidence, adopt an alter ego until your inner strength catches up.', imageUrl: './images/crew/usopp.png', badge: 'Sogeking Born' },
      { id: 'el-11', sceneNumber: 11, title: 'Storming the Gates of Enies Lobby', tagline: 'Ten thousand soldiers cannot halt six determined pirates.', storySummary: 'Luffy breaches the front gate alone, knocking out hundreds of Marine soldiers while Galley-La and Franky Family storm the perimeter.', motivationLine: 'When you lead from the front, fear cannot find a single foothold in your ranks.', imageUrl: './images/arcs/enies-lobby.png', badge: 'Judicial Gates Fall' },
      { id: 'el-12', sceneNumber: 12, title: 'Assembly on the Courthouse Roof', tagline: 'Standing shoulder-to-shoulder against the world.', storySummary: 'The six Straw Hats line up on the courthouse roof opposite CP9 and the Tower of Law, ready to wage war against 170 nations for one woman.', motivationLine: 'Never measure your loyalty by the size of the opposition. Stand united.', imageUrl: './images/crew/luffy.png', badge: 'The Lineup of Defiance' },
      { id: 'el-13', sceneNumber: 13, title: 'Shoot Down That Flag!', tagline: 'Declaring war on the entire World Government.', storySummary: 'Luffy commands: "Sogeking, shoot down that flag." Sogeking fires Firebird Star, setting the World Government flag ablaze in front of horrified CP9.', motivationLine: 'When tyranny threatens your people, declare war openly and unapologetically.', imageUrl: './images/crew/usopp.png', badge: 'Flag Ablaze' },
      { id: 'el-14', sceneNumber: 14, title: 'I Want To Live!', tagline: 'The scream that shattered twenty years of self-hatred.', storySummary: 'Tears gush from Robin’s eyes as she screams her deepest wish: "I WANT TO LIVE! TAKE ME OUT TO SEA WITH YOU!"', motivationLine: 'Allowing yourself to want to live is the greatest victory against darkness.', imageUrl: './images/crew/robin.png', badge: 'I Want To Live!' },
      { id: 'el-15', sceneNumber: 15, title: 'Gear Second: Supersonic Blood Pump', tagline: 'My comrades aren’t strong, but I need them. I will become stronger than anyone!', storySummary: 'Luffy demonstrates Gear 2nd against Blueno, pumping his blood to steam-emitting supersonic speeds and obliterating Iron Body with Jet Bazooka.', motivationLine: 'Evolve your techniques when the lives of those depending on you are at stake.', imageUrl: './images/scenes/luffy-gear2nd.png', badge: 'Gear Second' },
      { id: 'el-16', sceneNumber: 16, title: 'Nine-Sword Style: Demonic Ashura', tagline: 'Illusion forged from iron will cutting through pasta beast.', storySummary: 'Zoro’s spirit manifests nine blades and three heads against Kaku’s Rankyaku, cleaving Kaku’s storm with Ashura: Ichibugin.', motivationLine: 'Let your spiritual intensity manifest physical results when all logic says you should fall.', imageUrl: './images/blades/wado.png', badge: 'Demon Ashura' },
      { id: 'el-17', sceneNumber: 17, title: 'Sanji’s Diable Jambe', tagline: 'The devil’s flame ignited on a chivalrous chef’s heel.', storySummary: 'Spinning at blinding speed, Sanji superheats his leg into blazing orange fire, smashing through Jabra’s wolf iron defense with Flambage Shot.', motivationLine: 'True passion burns away all hesitation and cuts through iron.', imageUrl: './images/crew/sanji.png', badge: 'Diable Jambe' },
      { id: 'el-18', sceneNumber: 18, title: 'Chopper’s Monster Point Rampage', tagline: 'Becoming a monster to protect human hearts.', storySummary: 'Cornered by Kumadori, Chopper consumes his 3rd Rumble Ball, transforming into an unstoppable behemoth that tosses Kumadori like a ragdoll.', motivationLine: 'Embrace whatever power is required to protect the vulnerable, even if it scares you.', imageUrl: './images/crew/chopper.png', badge: 'Monster Point Unleashed' },
      { id: 'el-19', sceneNumber: 19, title: 'Gomu Gomu no Jet Gatling', tagline: 'A thousand supersonic punches demolishing Lucci.', storySummary: 'Refusing to drop after Lucci’s Rokuogan, Luffy unloads a hurricane of Jet Gatling strikes, blasting Lucci through the brick tower as CP9 falls.', motivationLine: 'Your legs may buckle, but as long as your spirit stands, you cannot be defeated.', imageUrl: './images/arcs/enies-lobby.png', badge: 'Lucci Defeated' },
      { id: 'el-20', sceneNumber: 20, title: 'Going Merry’s Snowy Funeral', tagline: 'Thank you for loving me all this time.', storySummary: 'Going Merry miraculously arrives through the Buster Call to save the crew. On the calm sea under falling snow, Luffy lights her funeral pyre.', motivationLine: 'Grieve deeply for the vessels and people that carried you, and carry their love forward.', imageUrl: './images/scenes/merry-funeral.png', badge: 'Merry’s Farewell' }
    ]
  },

  // 5. MARINEFORD
  {
    id: 'marineford',
    title: 'Marineford Summit War',
    japaneseTitle: 'マリンフォード頂上戦争編',
    subtitle: 'The Fall of Titans & The Dawn of a New Era',
    saga: 'Summit War Saga',
    episodes: 'Episodes 457–516',
    chapters: 'Chapters 550–597',
    year: '2009–2011',
    bgGradient: 'from-red-950 via-slate-950 to-blue-950',
    accentColor: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    themeType: 'magma_ice_warzone',
    bgImage: './images/arcs/marineford.png',
    shortDesc: 'The greatest war of the pirate era explodes at Marineford as Whitebeard invades to rescue Portgas D. Ace from the execution scaffold.',
    fullSynopsis: 'Separated from his crew at Sabaody, Luffy infiltrates the impenetrable prison Impel Down and falls from the sky into Marineford with a crew of escaped convicts. A cataclysmic war erupts between the Whitebeard Pirates and the combined force of the Three Admirals and Seven Warlords. Ace is freed only to sacrifice his life shielding Luffy from Akainu, and Whitebeard roars with his dying breath that the One Piece is real.',
    keyCharacters: ['Monkey D. Luffy', 'Portgas D. Ace', 'Edward Newgate', 'Fleet Admiral Sengoku', 'Sakazuki (Akainu)', 'Kuzan (Aokiji)', 'Borsalino (Kizaru)', 'Marshall D. Teach', 'Red-Haired Shanks'],
    locations: ['Sabaody Archipelago', 'Impel Down', 'Marineford Plaza', 'Oris Plaza', 'Execution Scaffold'],
    factions: [
      { name: 'Whitebeard Pirates & Allies', banner: 'The Newgate Fleet', members: ['Whitebeard', 'Marco', 'Jozu', 'Vista', '43 Allied Crews'] },
      { name: 'Marineford HQ & Warlords', banner: 'World Government Might', members: ['Sengoku', 'Garp', 'Akainu', 'Aokiji', 'Kizaru', 'Mihawk', 'Doflamingo'] },
      { name: 'Impel Down Escapees', banner: 'The Wildcards', members: ['Luffy', 'Jinbe', 'Crocodile', 'Ivankov', 'Buggy', 'Mr. 3'] }
    ],
    fights: [
      {
        id: 'whitebeard-vs-akainu',
        combatants: 'Edward Newgate (Whitebeard) vs. Admiral Sakazuki (Akainu)',
        title: 'Wrath of a Father: Shattering the Marineford Plaza',
        location: 'Marineford Central Plaza',
        outcome: 'Akainu battered into subterranean abyss; plaza split in half',
        keyClash: 'Gura Gura seismic punch vs. Meigo Hellhound Magma',
        quote: 'You took my son’s life... don’t you dare think you can walk away from this, Akainu!!',
        speaker: 'Edward Newgate (Whitebeard)',
        description: 'Enraged by Ace’s death, Whitebeard batters Akainu with earthquake-infused fists, tearing open a tectonic chasm dividing the battlefield.',
        imageUrl: './images/fruits/gura-gura.png'
      }
    ],
    iconicMoments: [
      { id: 'ace-death', title: 'Ace’s Final Words', quote: 'Thank you for loving someone like me, who carried the blood of a demon!', speaker: 'Portgas D. Ace', description: 'With his back burnt through by Akainu to shield Luffy, Ace smiles with tears of gratitude as his Vivre Card burns to ashes.', badge: 'Tears of Blood', imageUrl: './images/scenes/ace-dies.png' },
      { id: 'one-piece-real', title: 'The One Piece Does Exist!', quote: 'THE ONE PIECE IS REAL! (ワンピースは実在する!!!)', speaker: 'Edward Newgate (Whitebeard)', description: 'Standing tall with 267 sword wounds and half his face melted, Whitebeard roars his final truth to the entire planet before dying upright.', badge: 'Death of a Titan', imageUrl: './images/quotes/speaker-roger.png' }
    ],
    chaptersList: [
      { id: 'c-summit-war-begins', title: 'The Summit War Commences', description: 'Whitebeard emerges beneath the ice; Luffy drops from the clouds with Impel Down allies.', episodes: 'Ep 459–470', imageUrl: './images/scenes/luffy-three-admirals.png', highlights: ['Tsunami waves', 'Luffy drops from sky', 'Whitebeard respect'] },
      { id: 'c-ace-rescue-death', title: 'Rescue & Tragedy of Ace', description: 'Ace is unlocked from the scaffold, only to sacrifice his life protecting Luffy from Akainu.', episodes: 'Ep 479–483', imageUrl: './images/scenes/ace-saves-luffy.png', highlights: ['Brothers fight', 'Akainu strike', 'Ace dies in Luffy’s arms'] },
      { id: 'c-whitebeard-death-shanks', title: 'The One Piece is Real!', description: 'Whitebeard dies standing upright. Shanks arrives to end the war. 3D2Y message delivered.', episodes: 'Ep 484–516', imageUrl: './images/scenes/luffy-3d2y.png', highlights: ['One Piece is real', 'Shanks stops war', '3D2Y training'] }
    ],
    storyScenes: [
      { id: 'mf-1', sceneNumber: 1, title: 'The Celestial Dragon in Sabaody', tagline: 'The fist that defied the gods of this world.', storySummary: 'At the Human Auction House, World Noble Saint Charlos shoots Hatchan. Luffy walks up the stairs silently and punches Charlos through the walls.', motivationLine: 'Never tolerate cruelty toward the innocent, regardless of who claims superiority.', imageUrl: './images/scenes/kuma-punch.png', badge: 'Celestial Dragon Punched' },
      { id: 'mf-2', sceneNumber: 2, title: 'Scattered Across the Sea', tagline: 'A captain watching his crew vanish one by one.', storySummary: 'Bartholomew Kuma uses his Paw-Paw pads to teleport every single Straw Hat away on Sabaody while Luffy beats his head against the ground in despair.', motivationLine: 'Bitter separation is sometimes the universe’s way of keeping you alive to grow stronger.', imageUrl: './images/crew/zoro.png', badge: 'Crew Dispersed' },
      { id: 'mf-3', sceneNumber: 3, title: 'Breaching Impel Down', tagline: 'Infiltrating the underwater hell alone for an older brother.', storySummary: 'Aided by Boa Hancock, Luffy sneaks into the World Government’s maximum security prison, descending through six deadly levels to reach Ace.', motivationLine: 'No fortress on earth can lock out a person driven by pure fraternal love.', imageUrl: './images/crew/luffy.png', badge: 'Impel Down Infiltration' },
      { id: 'mf-4', sceneNumber: 4, title: 'Magellan’s Venom Demon', tagline: 'Losing years of life to survive deadly poison.', storySummary: 'Warden Magellan covers Luffy in corrosive Hydra poison. Ivankov uses Healing Hormones to rescue him at the cost of 10 years of Luffy’s lifespan.', motivationLine: 'Survival often requires enduring agony that burns away everything but your will.', imageUrl: './images/quotes/speaker-bonclay.png', badge: 'Poison Survived' },
      { id: 'mf-5', sceneNumber: 5, title: 'Bon Clay’s Final Sacrifice', tagline: 'Scatter upon the sea of truth and blossom, Okama Way!', storySummary: 'Bentham stays behind disguised as Magellan to open the Gates of Justice so the escape ship can reach Marineford, bidding farewell over the Den Den Mushi.', motivationLine: 'Lay down your freedom so that your brothers may reach the dawn.', imageUrl: './images/quotes/speaker-bonclay.png', badge: 'Bentham’s Sacrifice' },
      { id: 'mf-6', sceneNumber: 6, title: 'The Execution Scaffold Revealed', tagline: 'The child of Gol D. Roger awaits the blade.', storySummary: 'Fleet Admiral Sengoku announces to the world that Portgas D. Ace is the biological son of the Pirate King Gol D. Roger.', motivationLine: 'A person’s bloodline does not define their destiny or character; their choices do.', imageUrl: './images/quotes/speaker-ace.png', badge: 'Roger’s Blood Revealed' },
      { id: 'mf-7', sceneNumber: 7, title: 'Whitebeard’s Submarine Entry', tagline: 'The Moby Dick emerges from the ocean depths.', storySummary: 'The Whitebeard fleet coats their ships and rises inside the crescent bay of Marineford, with the World’s Strongest Man smiling upon his son.', motivationLine: 'A true father shows up when the world turns against his children.', imageUrl: './images/bounties/bounty-whitebeard.png', badge: 'Moby Dick Emerges' },
      { id: 'mf-8', sceneNumber: 8, title: 'Falling From the Heavens', tagline: 'A battleship descending from the sky into the warzone.', storySummary: 'Luffy and his Impel Down alliance crash their frozen battleship from a tidal wave right into the middle of the Marineford battlefield.', motivationLine: 'Arrive with explosive energy that shatters the expectations of friend and foe alike.', imageUrl: './images/scenes/luffy-three-admirals.png', badge: 'Sky Fall Entrance' },
      { id: 'mf-9', sceneNumber: 9, title: 'Luffy vs. Whitebeard: Eye to Eye', tagline: 'A rookie challenging the strongest man on earth.', storySummary: 'Standing on the flagship, Luffy yells at Whitebeard: "I’m going to save Ace, and I’m the one who will be King of the Pirates!" Whitebeard grins.', motivationLine: 'Respect greatness, but never cower before it. Stand on your own two feet.', imageUrl: './images/bounties/bounty-whitebeard.png', badge: 'Eye-to-Eye Clash' },
      { id: 'mf-10', sceneNumber: 10, title: 'Confronting the Three Admirals', tagline: 'A rubber rookie facing the three titans of justice.', storySummary: 'Luffy hurls a broken mast and leaps directly in front of Akainu, Aokiji, and Kizaru, determined to run straight through their absolute defense.', motivationLine: 'When your objective is absolute, you charge through the strongest obstacles on earth.', imageUrl: './images/scenes/luffy-three-admirals.png', badge: 'Facing Three Admirals' },
      { id: 'mf-11', sceneNumber: 11, title: 'The Conqueror’s Burst', tagline: 'A scream that knocked out executioners across the plaza.', storySummary: 'As the execution blades descend on Ace’s neck, Luffy unleashes a massive burst of Conqueror’s Haki, knocking out thousands and shocking the Admirals.', motivationLine: 'When all physical options fail, the authority of your raw spirit takes over.', imageUrl: './images/crew/luffy.png', badge: 'Conqueror’s Haki Awakened' },
      { id: 'mf-12', sceneNumber: 12, title: 'Garp’s Heart on the Bridge', tagline: 'A grandfather choosing love over Marine absolute duty.', storySummary: 'Vice Admiral Garp blocks Luffy on the scaffold ramp, but closes his eyes and lets Luffy punch him off so he can reach Ace.', motivationLine: 'Love for family cuts deeper than any oath sworn to an institution.', imageUrl: './images/family/garp.png', badge: 'Garp’s Choice' },
      { id: 'mf-13', sceneNumber: 13, title: 'Fire and Rubber Reunited', tagline: 'Brothers fighting back-to-back on the burning plaza.', storySummary: 'Unlocked by Mr. 3’s wax key, Ace and Luffy fight side-by-side with flame and rubber, carving an escape route through the battlefield.', motivationLine: 'Reuniting with someone you fought so hard to save is pure ecstasy.', imageUrl: './images/quotes/speaker-ace.png', badge: 'Brothers Reunited' },
      { id: 'mf-14', sceneNumber: 14, title: 'Akainu’s Lethal Taunt', tagline: 'Words designed to bait a warrior into turning back.', storySummary: 'Admiral Sakazuki insults Whitebeard as a coward and loser of the old era; Ace turns back in fury to defend his captain’s name.', motivationLine: 'Defend your mentors, but beware of enemies baiting your loyalty into a trap.', imageUrl: './images/fruits/mera-mera.png', badge: 'Akainu’s Bait' },
      { id: 'mf-15', sceneNumber: 15, title: 'The Human Shield: Ace’s Sacrifice', tagline: 'A magma fist piercing flesh to keep a brother breathing.', storySummary: 'Akainu aims his magma fist at exhausted Luffy; Ace leaps in between, taking the lethal magma strike through his chest.', motivationLine: 'Greater love has no man than this: that he lay down his life for his brother.', imageUrl: './images/scenes/ace-saves-luffy.png', badge: 'Ace Shields Luffy' },
      { id: 'mf-16', sceneNumber: 16, title: 'Thank You for Loving Me', tagline: 'A dying smile washed in grateful tears.', storySummary: 'Lying in Luffy’s arms with his Vivre Card burning away, Ace smiles: "Thank you for loving someone like me... who carried the blood of a demon!"', motivationLine: 'No life is in vain if you found people who truly, unconditionally loved you.', imageUrl: './images/scenes/ace-dies.png', badge: 'Ace’s Last Smile' },
      { id: 'mf-17', sceneNumber: 17, title: 'Wrath of the Father: Sinking Akainu', tagline: 'Earthquake fists tearing the earth apart.', storySummary: 'Whitebeard strikes Akainu with devastating seismic fury, splitting Marineford Plaza in two to protect his remaining sons as they retreat.', motivationLine: 'A father’s righteous fury can move tectonic plates to protect his remaining children.', imageUrl: './images/fruits/gura-gura.png', badge: 'Whitebeard’s Wrath' },
      { id: 'mf-18', sceneNumber: 18, title: 'THE ONE PIECE IS REAL!', tagline: 'The roar that reignited the Great Pirate Era forever.', storySummary: 'Riddled with bullets from the Blackbeard Pirates, Whitebeard bellows his final words to the planet: "THE ONE PIECE... IS REAL!" and dies standing upright.', motivationLine: 'Truth cannot be killed by bullets. A great dying proclamation can liberate the world.', imageUrl: './images/quotes/speaker-roger.png', badge: 'The One Piece is Real' },
      { id: 'mf-19', sceneNumber: 19, title: 'Shanks Halts the War', tagline: 'A four-emperor presence demanding the bloodshed end.', storySummary: 'Red-Haired Shanks blocks Akainu’s magma fist with sword Gryphon, declaring: "If anyone still wants to fight... COME! WE WILL BE YOUR OPPONENTS!"', motivationLine: 'True strength is having the power to end slaughter and bring peace.', imageUrl: './images/bounties/bounty-shanks.png', badge: 'Shanks Ends the War' },
      { id: 'mf-20', sceneNumber: 20, title: '3D2Y: The Sacred Ringing', tagline: 'Two years to grow strong enough so no one dies again.', storySummary: 'Jinbe snaps Luffy out of his grief on Amazon Lily: "What is it that you STILL have?!" Luffy returns to Marineford, ringing the Ox Bell 16 times to signal the 2-year training.', motivationLine: 'Count what you still have left, train your weaknesses, and return invincible.', imageUrl: './images/scenes/luffy-3d2y.png', badge: '3D2Y Tattoo' }
    ]
  },

  // 6. DRESSROSA
  {
    id: 'dressrosa',
    title: 'Dressrosa Kingdom',
    japaneseTitle: 'ドレスローザ編',
    subtitle: 'The Heavenly Demon, Living Toys & Gear 4th',
    saga: 'Dressrosa Saga',
    episodes: 'Episodes 629–746',
    chapters: 'Chapters 700–801',
    year: '2013–2016',
    bgGradient: 'from-pink-950 via-slate-950 to-amber-950',
    accentColor: '#f43f5e',
    glowColor: 'rgba(244, 63, 94, 0.4)',
    themeType: 'spanish_palace',
    bgImage: './images/arcs/dressrosa.png',
    shortDesc: 'The Straw Hats and Trafalgar Law infiltrate Dressrosa to destroy Doflamingo’s SMILE factory and liberate an enslaved kingdom of living toys.',
    fullSynopsis: 'Under the glittering surface of the Kingdom of Passion lies a dark underworld where citizens are turned into forgotten toys by Sugar’s Hobby-Hobby fruit. Luffy enters the Corrida Colosseum tournament for Ace’s Mera Mera no Mi, reuniting with his thought-dead brother Sabo. When God Usopp knocks out Sugar, Doflamingo casts the apocalyptic Birdcage, forcing Luffy to unveil Gear Fourth: Bounce-Man.',
    keyCharacters: ['Monkey D. Luffy', 'Donquixote Doflamingo', 'Trafalgar D. Water Law', 'Sabo', 'Roronoa Zoro', 'Usopp', 'Kyros', 'Rebecca', 'Fujitora'],
    locations: ['Acacia', 'Corrida Colosseum', 'Green Bit', 'Underground Toy Factory', 'Flower Hill', 'Royal Palace'],
    factions: [
      { name: 'Straw Hat & Heart Alliance', banner: 'Kingdom Liberators', members: ['Luffy', 'Zoro', 'Usopp', 'Franky', 'Robin', 'Law'] },
      { name: 'Donquixote Pirates', banner: 'The Heavenly Demon Family', members: ['Doflamingo', 'Trebol', 'Diamante', 'Pica', 'Sugar', 'Senor Pink'] },
      { name: 'Colosseum Gladiators', banner: 'Future Grand Fleet', members: ['Cavendish', 'Bartolomeo', 'Sai', 'Ideone', 'Leo', 'Hajrudin', 'Orlumbus'] }
    ],
    fights: [
      {
        id: 'luffy-vs-doflamingo',
        combatants: 'Monkey D. Luffy vs. Donquixote Doflamingo',
        title: 'Clash Above the Plateau: King Kong Gun vs. God Thread',
        location: 'Dressrosa Skies Above the Central Plateau',
        outcome: 'Doflamingo crushed into bedrock; Birdcage collapses',
        keyClash: 'Gomu Gomu no King Kong Gun shattering 16 Holy Bullets',
        quote: 'You make people suffer and turn them into toys so you can rule over them... YOU SUFFOCATE THIS WHOLE COUNTRY! I’m going to blow you away!!',
        speaker: 'Monkey D. Luffy',
        description: 'Luffy inflates his Gear 4th fist into an island-sized fist, overpowering Doflamingo’s awakened String-String strings and sending him crashing through the earth.',
        imageUrl: './images/scenes/king-kong-gun.png'
      }
    ],
    iconicMoments: [
      { id: 'god-usopp-faces', title: 'The Miracle of "God" Usopp', quote: 'I am the man who will free you all! Count on me!!', speaker: 'Usopp', description: 'With a horrific spicy grape face, Usopp shocks Sugar into unconsciousness, restoring thousands of forgotten human memories and earning the title "God Usopp".', badge: 'Miracle of Dressrosa', imageUrl: './images/crew/usopp.png' },
      { id: 'sabo-reunion', title: 'Sabo is Alive!', quote: 'Luffy... I’m so glad you’re alive!', speaker: 'Sabo', description: 'In the Colosseum tunnels, Revolutionary Chief of Staff Sabo appears in front of Luffy, taking over his disguise to inherit Ace’s Mera Mera no Mi.', badge: 'Brother Reunited', imageUrl: './images/family/sabo.png' }
    ],
    chaptersList: [
      { id: 'c-colosseum', title: 'Corrida Colosseum', description: 'Gladiators battle for Ace’s Flame-Flame Fruit; Luffy reunites with brother Sabo.', episodes: 'Ep 634–663', imageUrl: './images/fruits/mera-mera.png', highlights: ['Lucy in Colosseum', 'Sabo arrives', 'Bartolomeo fanboying'] },
      { id: 'c-sop-operation', title: 'Operation SOP', description: 'Usopp snipes Sugar, breaking the toy curse and inciting an island-wide revolution.', episodes: 'Ep 664–678', imageUrl: './images/crew/usopp.png', highlights: ['God Usopp born', 'Doflamingo birdcage', 'Pica giant form'] },
      { id: 'c-gear-4', title: 'Gear Fourth Unleashed', description: 'Luffy unleashes Bounce-Man and King Kong Gun to destroy Doflamingo and liberate Dressrosa.', episodes: 'Ep 726–733', imageUrl: './images/scenes/king-kong-gun.png', highlights: ['Gear 4th debut', 'King Kong Gun', 'Grand Fleet formed'] }
    ],
    storyScenes: [
      { id: 'dr-1', sceneNumber: 1, title: 'The Island of Passion and Toys', tagline: 'A fairy-tale kingdom concealing living nightmares.', storySummary: 'The Straw Hats arrive in Dressrosa, amazed by walking toy soldiers and dancing women, unaware the toys are humans whose families forgot their existence.', motivationLine: 'Never let dazzling glamour blind you to hidden systemic cruelty.', imageUrl: './images/arcs/dressrosa.png', badge: 'Enchanted Facade' },
      { id: 'dr-2', sceneNumber: 2, title: 'Corrida Colosseum: The Fire Prize', tagline: 'A dead brother’s will contested in a gladiatorial cage.', storySummary: 'Doflamingo displays Ace’s resurrected Mera Mera no Mi as the tournament grand prize; Luffy enters disguised as "Lucy" to keep it from evil hands.', motivationLine: 'Honor the memory of your fallen loved ones by protecting what was sacred to them.', imageUrl: './images/fruits/mera-mera.png', badge: 'Colosseum Entry' },
      { id: 'dr-3', sceneNumber: 3, title: 'The One-Legged Soldier of Thunder', tagline: 'A forgotten father guarding his daughter with one limb.', storySummary: 'The toy soldier Kyros trains his daughter Rebecca, who has no memory that the brave tin soldier standing beside her is her biological father.', motivationLine: 'A father’s devotion endures even when all memory of his identity has been erased.', imageUrl: './images/arcs/dressrosa.png', badge: 'Forgotten Father' },
      { id: 'dr-4', sceneNumber: 4, title: 'Sabo’s Resurrection', tagline: 'A brother thought dead returns to inherit the flame.', storySummary: 'In the Colosseum corridor, Sabo reveals himself alive to Luffy. Luffy weeps uncontrollably, hugging him and letting him take the Lucy disguise.', motivationLine: 'Miracles happen when bonds are real. Lost loved ones can re-emerge to guide your destiny.', imageUrl: './images/family/sabo.png', badge: 'Sabo is Alive!' },
      { id: 'dr-5', sceneNumber: 5, title: 'The Miracle of "God" Usopp', tagline: 'A terrifying grimace breaking an eight-year curse.', storySummary: 'Usopp swallows the Tatababasco grape intended for Sugar, screaming with a face so grotesque that Sugar faints in terror, undoing all toy transmutations.', motivationLine: 'Even your perceived failures can trigger the greatest miracles if you never give up.', imageUrl: './images/crew/usopp.png', badge: 'God Usopp' },
      { id: 'dr-6', sceneNumber: 6, title: 'The Birdcage Descends', tagline: 'A cage of razor strings trapping an entire island in death.', storySummary: 'Enraged by the uprising, Doflamingo casts the Birdcage over Dressrosa, forcing citizens and gladiators to kill each other or die within hours.', motivationLine: 'When a tyrant is cornered, his cruelty intensifies; remain calm and strike the root.', imageUrl: './images/quotes/speaker-doflamingo.png', badge: 'The Birdcage' },
      { id: 'dr-7', sceneNumber: 7, title: 'Sabo Consumes the Flame Fruit', tagline: 'The Dragon’s Claw ignited with Fire Fist flames.', storySummary: 'Sabo shatters the Colosseum stage, claims the Mera Mera no Mi, and instantly unleashes Hiken: Fire Fist, inheriting Ace’s living flame.', motivationLine: 'Inherit the flames of your ancestors and carry them forward with your own purpose.', imageUrl: './images/fruits/mera-mera.png', badge: 'Flame Fist Inherited' },
      { id: 'dr-8', sceneNumber: 8, title: 'Zoro Slices the Mountain Pica', tagline: 'Over nine mountains and eight seas... there is nothing I cannot cut!', storySummary: 'Pica merges into a kilometer-tall stone colossus. Zoro is launched through the air and slices the colossal stone statue into pieces with Sanzen Sekai.', motivationLine: 'No obstacle is too gargantuan when your blade is backed by absolute focus.', imageUrl: './images/blades/shusui.png', badge: 'Zoro Bisects Pica' },
      { id: 'dr-9', sceneNumber: 9, title: 'Franky vs. Senor Pink: Hardboiled', tagline: 'Two manly men taking each other’s full force without dodging.', storySummary: 'Franky and Senor Pink exchange German suplexes and punches head-on without flinching, developing profound mutual respect for their tragic pasts.', motivationLine: 'True masculinity respects an opponent’s honor and carries sorrow with dignity.', imageUrl: './images/crew/franky.png', badge: 'Hardboiled Duel' },
      { id: 'dr-10', sceneNumber: 10, title: 'Trafalgar Law’s Vow to Corazon', tagline: 'A life saved by a smiling marine spy.', storySummary: 'A flashback reveals Donquixote Rosinante (Corazon) stealing the Op-Op fruit to cure young Law’s Amber Lead Syndrome, smiling as he died protecting him.', motivationLine: 'Someone loved you enough to die so you could live. Honor their sacrifice by living freely.', imageUrl: './images/fruits/ope-ope.png', badge: 'Corazon’s Smile' },
      { id: 'dr-11', sceneNumber: 11, title: 'Doflamingo’s String Awakening', tagline: 'Transmuting an entire city into piercing threads.', storySummary: 'Doflamingo unleashes Devil Fruit Awakening, turning buildings, ground, and streets into millions of white spear-like strings.', motivationLine: 'Expect your adversaries to unlock their highest potential; prepare to surpass it.', imageUrl: './images/fruits/ito-ito.png', badge: 'Paramecia Awakening' },
      { id: 'dr-12', sceneNumber: 12, title: 'Gear Fourth: Bounce-Man', tagline: 'Muscles inflated with armament haki to conquer the skies.', storySummary: 'Luffy bites into his forearm, coating his rubber body in jet-black Armament Haki and bouncing with immense compressive force as Bounce-Man.', motivationLine: 'Innovation means combining your unique traits into something never seen before.', imageUrl: './images/crew/luffy-gear4.png', badge: 'Gear 4th Bounce-Man' },
      { id: 'dr-13', sceneNumber: 13, title: 'Culverin & Leo Bazooka', tagline: 'Pummelling the Heavenly Demon across the kingdom.', storySummary: 'Luffy bends his punches through midair with Python and smashes Doflamingo into the plateau with Leo Bazooka.', motivationLine: 'Relentless momentum breaks through even the most arrogant defenses.', imageUrl: './images/crew/luffy-gear4.png', badge: 'Leo Bazooka' },
      { id: 'dr-14', sceneNumber: 14, title: 'Law’s Gamma Knife', tagline: 'Destroying the tyrant’s organs from within.', storySummary: 'Law teleports into Doflamingo’s guard, detonating a surgical blade of pure spatial electricity into Doflamingo’s internal organs.', motivationLine: 'Strike where the enemy feels most invulnerable.', imageUrl: './images/blades/kikoku.png', badge: 'Gamma Knife' },
      { id: 'dr-15', sceneNumber: 15, title: 'The Ten-Minute Stand', tagline: 'Gladiators and citizens shielding their exhausted champion.', storySummary: 'Luffy’s Haki runs out for 10 minutes. Gatz, Cavendish, and the Colosseum gladiators risk their lives to hold off Doflamingo until Luffy recovers.', motivationLine: 'When your leader falls, step into the gap and protect him with everything you have.', imageUrl: './images/arcs/dressrosa.png', badge: 'Ten-Minute Shield' },
      { id: 'dr-16', sceneNumber: 16, title: 'Holding Back the Birdcage', tagline: 'Zoro, Admirals, and civilians pushing against death.', storySummary: 'Zoro, Kin’emon, Franky, and Admiral Fujitora use Haki and barriers to physically shove back the shrinking Birdcage strings to buy precious seconds.', motivationLine: 'Every single hand matters when the collective survival of a community is at stake.', imageUrl: './images/blades/enma.png', badge: 'Pushing the Birdcage' },
      { id: 'dr-17', sceneNumber: 17, title: 'Gomu Gomu no King Kong Gun', tagline: 'A fist larger than a mountain smashing Doflamingo to dust.', storySummary: 'Luffy inflates Bounce-Man’s fist into a colossal King Kong Gun, smashing through Doflamingo’s Spider Web and 16 Holy Bullets, shattering him through bedrock.', motivationLine: 'Bring down your heaviest conviction to permanently end cycles of oppression.', imageUrl: './images/scenes/king-kong-gun.png', badge: 'King Kong Gun Finish' },
      { id: 'dr-18', sceneNumber: 18, title: 'The Birdcage Dissolves', tagline: 'Sunshine returning to a liberated land.', storySummary: 'With Doflamingo unconscious, the Birdcage dissolves into sparkles of light. Gatz announces through tears that Lucy has won.', motivationLine: 'No night is eternal. The dawn of liberty always breaks when champions refuse to yield.', imageUrl: './images/arcs/dressrosa.png', badge: 'Dressrosa Liberated' },
      { id: 'dr-19', sceneNumber: 19, title: 'Fujitora’s Dogeza Apology', tagline: 'An Admiral bowing before the world on his knees.', storySummary: 'Admiral Fujitora broadcasts his bow to King Riku on television, refusing to let the Marines take credit for what pirates accomplished.', motivationLine: 'True accountability requires having the courage to apologize publicly for systemic failures.', imageUrl: './images/arcs/dressrosa.png', badge: 'Fujitora’s Apology' },
      { id: 'dr-20', sceneNumber: 20, title: 'Formation of the Straw Hat Grand Fleet', tagline: '5,600 warriors pledging their lives to the future Pirate King.', storySummary: 'Seven pirate captains drink the sake of filial pledge aboard the Yonta Maria, forming the 5,600-strong Straw Hat Grand Fleet to serve Luffy.', motivationLine: 'Lead with genuine heart, and armies will willingly swear their lives to your banner.', imageUrl: './images/crew/sunny.png', badge: 'Grand Fleet Assembled' }
    ]
  },

  // 7. WHOLE CAKE ISLAND
  {
    id: 'whole-cake',
    title: 'Whole Cake Island',
    japaneseTitle: 'ホールケーキアイランド編',
    subtitle: 'Tea Party from Hell, Katakuri & Sanji’s Return',
    saga: 'Four Emperors Saga',
    episodes: 'Episodes 783–877',
    chapters: 'Chapters 825–902',
    year: '2016–2018',
    bgGradient: 'from-purple-950 via-pink-950 to-slate-950',
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    themeType: 'candy_confection',
    bgImage: './images/arcs/whole-cake.png',
    shortDesc: 'Luffy infiltrates Emperor Big Mom’s territory to rescue his cook Sanji from an arranged political marriage with Charlotte Pudding.',
    fullSynopsis: 'Tied by family blackmail to the Germa 66, Sanji leaves the crew to marry Pudding. Luffy leads a strike team to Totto Land, battling through the Seducing Woods and Sweet Commander Cracker. When Sanji beats Luffy to force him away, Luffy refuses to eat until Sanji returns. The crew crashes the catastrophic wedding tea party, Brook steals the Poneglyphs, and Luffy unlocks Snakeman in an epic 12-hour duel against Katakuri.',
    keyCharacters: ['Monkey D. Luffy', 'Sanji', 'Charlotte Katakuri', 'Charlotte Linlin (Big Mom)', 'Brook', 'Nami', 'Jinbe', 'Pedro', 'Charlotte Pudding'],
    locations: ['Zou', 'Totto Land', 'Whole Cake Chateau', 'Seducing Woods', 'Mirror World', 'Cacao Island'],
    factions: [
      { name: 'Sanji Retrieval Team', banner: 'Straw Hat Strike Force', members: ['Luffy', 'Nami', 'Chopper', 'Brook', 'Carrot', 'Pedro'] },
      { name: 'Big Mom Pirates', banner: 'Emperor Charlotte Family', members: ['Big Mom', 'Katakuri', 'Smoothie', 'Cracker', 'Perospero', 'Daifuku', 'Oven'] },
      { name: 'Fire Tank Pirates & Germa', banner: 'Tea Party Conspirators', members: ['Capone Bege', 'Vinsmoke Judge', 'Reiju', 'Ichiji', 'Niji', 'Yonji'] }
    ],
    fights: [
      {
        id: 'luffy-vs-katakuri',
        combatants: 'Monkey D. Luffy vs. Charlotte Katakuri',
        title: 'The Mirror World Duel: Snakeman vs. Mochi Thrust',
        location: 'Mirror World Sub-Dimension',
        outcome: 'Luffy victorious; Katakuri acknowledges him with profound respect',
        keyClash: 'Gomu Gomu no King Cobra vs. Zangiri Mochi',
        quote: 'You’re seeing pretty far into the future, aren’t you? ... One day, I will definitely come back and beat Big Mom, because I am the man who will be King of the Pirates!',
        speaker: 'Monkey D. Luffy',
        description: 'Over 12 agonizing hours, Luffy absorbs brutal punishment from the undefeated Katakuri to master Advanced Observation Haki, culminating in the lightning-fast Snakeman form.',
        imageUrl: './images/crew/luffy-gear4.png'
      }
    ],
    iconicMoments: [
      { id: 'jinbe-soul-pocus', title: 'Jinbe Defies Emperor Big Mom', quote: 'I am a man who desires to join the crew of the future King of the Pirates! Why should I fear a mere Emperor of the Sea?! STAY OR LIFE? STAY!', speaker: 'Jinbe', description: 'Big Mom’s Soul Pocus fails completely because Jinbe possesses zero fear standing before an Emperor of the Sea.', badge: 'Peak Chivalric Defiance', imageUrl: './images/crew/jinbe.png' },
      { id: 'pedro-sacrifice', title: 'Pedro’s Dawn Sacrifice', quote: 'Luffy and his crew will bring about the Dawn of the World! This is where my life fulfills its purpose!', speaker: 'Pedro', description: 'Pedro detonates dynamite strapped to his chest to blow up Perospero’s candy trap, allowing Thousand Sunny to escape with Coup de Burst.', badge: 'The Dawn of the World', imageUrl: './images/crew/sunny.png' }
    ],
    chaptersList: [
      { id: 'c-zou-departure', title: 'Zou & Raizo is Safe', description: 'The Minks reveal they sacrificed their city to protect ninja Raizo. The crew splits for Wano and Whole Cake.', episodes: 'Ep 751–779', imageUrl: './images/scenes/raizo-safe.png', highlights: ['Raizo is safe', 'Road Poneglyph revealed', 'Sanji letter'] },
      { id: 'c-tea-party-crash', title: 'The Wedding Tea Party Crash', description: 'Bege and Luffy shatter Mother Carmel’s portrait; Jinbe renounces Big Mom to join Luffy.', episodes: 'Ep 825–845', imageUrl: './images/bounties/bounty-bigmom.png', highlights: ['Carmel photo smashed', 'Jinbe stays', 'Chateau collapse'] },
      { id: 'c-katakuri-snakeman', title: 'Mirror World: Snakeman', description: 'Luffy unlocks Future Sight and Gear 4th Snakeman to overcome the undefeated Katakuri.', episodes: 'Ep 850–877', imageUrl: './images/crew/luffy-gear4.png', highlights: ['Snakeman debut', 'King Cobra clash', 'Katakuri respect'] }
    ],
    storyScenes: [
      { id: 'wc-1', sceneNumber: 1, title: 'The Elephant Island Zou', tagline: 'A thousand-year-old titan carrying an ancient civilization.', storySummary: 'The crew ascends the leg of giant elephant Zunesha, discovering Mokomo Dukedom destroyed by Jack of the Beast Pirates.', motivationLine: 'Ancient history walks among us; honor the custodians of forgotten ages.', imageUrl: './images/scenes/raizo-safe.png', badge: 'Zou Ancient Isle' },
      { id: 'wc-2', sceneNumber: 2, title: 'Raizo is Safe!', tagline: 'An entire nation tortured rather than betraying one friend.', storySummary: 'Despite having their limbs severed and city gassed, Inuarashi and Nekomamushi kneel before the samurai: "Raizo-dono is safe!"', motivationLine: 'Absolute loyalty is willing to suffer destruction before betraying a comrade.', imageUrl: './images/scenes/raizo-safe.png', badge: 'Raizo is Safe' },
      { id: 'wc-3', sceneNumber: 3, title: 'Sanji’s Farewell Letter', tagline: 'I’m going to meet a woman. I’ll be back.', storySummary: 'Sanji leaves a brief note and departs with Capone Bege to face his abusive Vinsmoke family and prevent the assassination of Zeff.', motivationLine: 'Sacrificing yourself to shield your mentors is noble, but never forget your crew is ready to fight with you.', imageUrl: './images/crew/sanji.png', badge: 'Sanji’s Letter' },
      { id: 'wc-4', sceneNumber: 4, title: 'Entering the Candy Archipelago', tagline: 'A sweet wonderland ruled by a soul-reaping Emperor.', storySummary: 'Luffy’s strike team arrives at Totto Land, sailing through seas of juice and islands of chocolate, cookies, and jam under Big Mom’s watchful eye.', motivationLine: 'Beware the sweetest paradises; sugar often masks the bitterest chains.', imageUrl: './images/arcs/whole-cake.png', badge: 'Totto Land Arrival' },
      { id: 'wc-5', sceneNumber: 5, title: 'The Endless Seducing Woods', tagline: 'Homies and illusions trapping the rescue party.', storySummary: 'Charlotte Brûlée uses her Mirror-Mirror powers and animate trees to trap the crew in shifting forest mazes.', motivationLine: 'Keep your eyes on the true objective when illusions attempt to confuse your direction.', imageUrl: './images/arcs/whole-cake.png', badge: 'Seducing Woods' },
      { id: 'wc-6', sceneNumber: 6, title: 'Gear 4th Tank-Man vs. Cracker', tagline: 'Eating an army of biscuit soldiers to achieve victory.', storySummary: 'With Nami’s rain softening the biscuits, Luffy eats Cracker’s soldiers for 11 hours, swelling into Tank-Man and blasting Cracker across the island.', motivationLine: 'Adapt your strategy to your opponent’s strengths; even eating can become a superpower.', imageUrl: './images/crew/luffy-gear4.png', badge: 'Tank-Man Cannonball' },
      { id: 'wc-7', sceneNumber: 7, title: 'Sanji’s Kicks in the Rain', tagline: 'Kicking the captain you love with tears in your soul.', storySummary: 'Sanji attacks Luffy with Diable Jambe, attempting to drive him away to protect him from Big Mom and Germa. Luffy refuses to fight back.', motivationLine: 'When someone you love pushes you away in pain, absorb the blow and refuse to leave.', imageUrl: './images/crew/sanji.png', badge: 'Sanji Kicks Luffy' },
      { id: 'wc-8', sceneNumber: 8, title: 'Without You, I Can’t Be Pirate King!', tagline: 'The hunger strike of an unyielding captain.', storySummary: 'Bruised and battered, Luffy shouts into the rain: "I won’t eat a single bite of food unless it’s made by you! I’ll stay right here waiting!"', motivationLine: 'Unconditional love sets a stake in the ground and waits patiently through the storm.', imageUrl: './images/crew/luffy.png', badge: 'The Hunger Oath' },
      { id: 'wc-9', sceneNumber: 9, title: 'Brook Infiltrates the Treasure Vault', tagline: 'The Soul King standing before an Emperor of the Sea.', storySummary: 'Brook slips into Big Mom’s locked treasure chamber, defeats her guards, and stores the rubbings of all three Road Poneglyphs inside his skull.', motivationLine: 'Stealth and audacity in the face of titans yield historic victories.', imageUrl: './images/crew/brook.png', badge: 'Poneglyph Rubbings' },
      { id: 'wc-10', sceneNumber: 10, title: 'Young Lady, Who Plans to Die?!', tagline: 'A 90-year-old skeleton looking down on an Emperor.', storySummary: 'Confronted by Big Mom herself, Brook looks her in the eye: "Young lady, what foolish person ever plans to die?! Roger was merely a green rookie!"', motivationLine: 'Courage does not belong only to the young. Age and experience can stare down gods.', imageUrl: './images/crew/brook.png', badge: 'Brook Defies Big Mom' },
      { id: 'wc-11', sceneNumber: 11, title: 'Pudding’s Cynical Mask Revealed', tagline: 'A three-eyed bride mocking a chef’s genuine heart.', storySummary: 'Outside her window in the pouring rain, Sanji overhears Pudding mocking his marriage proposal and revealing she plans to shoot him at the altar.', motivationLine: 'Heartbreak is devastating, but hearing the painful truth frees you from toxic illusions.', imageUrl: './images/crew/sanji.png', badge: 'Sanji’s Heartbreak' },
      { id: 'wc-12', sceneNumber: 12, title: 'The Soggy Bento of Salvation', tagline: 'Rain-soaked food eaten with the appetite of brotherhood.', storySummary: 'Sanji finds starving Luffy at their promised spot and opens his soaked lunchbox. Luffy devours every crumb, and Sanji weeps: "I want to go back to Sunny!"', motivationLine: 'No mistake is unforgivable when you return to those who love you unconditionally.', imageUrl: './images/crew/sanji.png', badge: 'Bento of Brotherhood' },
      { id: 'wc-13', sceneNumber: 13, title: 'Alliance with the Mafia Bege', tagline: 'A fragile pact forged inside a fortress man.', storySummary: 'Luffy and Sanji team up with Bege’s Fire Tank crew, planning to shatter Mother Carmel’s photo during the tea party to trigger Big Mom’s scream.', motivationLine: 'Unlikely alliances are forged when common enemies threaten both parties’ existence.', imageUrl: './images/arcs/whole-cake.png', badge: 'Mafia Alliance' },
      { id: 'wc-14', sceneNumber: 14, title: 'The Wedding Cake Explosion', tagline: 'Hundreds of clones bursting out of a wedding masterpiece.', storySummary: 'Luffy bursts out of the giant wedding cake with Brûlée’s mirror clones, causing absolute pandemonium at the royal tea party.', motivationLine: 'Crash impossible obstacles with joyous chaos that completely blindsides your foes.', imageUrl: './images/crew/luffy.png', badge: 'Cake Crash' },
      { id: 'wc-15', sceneNumber: 15, title: 'Jinbe Renounces Big Mom', tagline: 'Why should I fear a mere Emperor of the Sea?!', storySummary: 'Big Mom demands Jinbe’s lifespan with Soul Pocus. Because Jinbe feels zero fear, her power fails. Jinbe pours sake and joins the Straw Hats.', motivationLine: 'Fear only exists if you allow it. When your allegiance is absolute, fear dissolves.', imageUrl: './images/crew/jinbe.png', badge: 'Soul Pocus Denied' },
      { id: 'wc-16', sceneNumber: 16, title: 'Pedro’s Dawn Explosion', tagline: 'My life fulfills its purpose here so Sunny can sail!', storySummary: 'Trapped by Perospero’s candy maiden, Pedro lights dynamite strapped to his body, blowing up Perospero and triggering Sunny’s Coup de Burst.', motivationLine: 'A life lived for the dawn of others is never lost; it becomes the eternal sunrise.', imageUrl: './images/crew/sunny.png', badge: 'Pedro’s Sacrifice' },
      { id: 'wc-17', sceneNumber: 17, title: 'Sanji’s Masterpiece Wedding Cake', tagline: 'A chef’s pride that subdues an Emperor’s madness.', storySummary: 'With Pudding and Chiffon, Sanji bakes a cake so delicious it knocks Big Mom into a state of pure euphoric bliss, saving thousands from her hunger frenzy.', motivationLine: 'Defeat your enemies through the perfection of your craft, not through violence.', imageUrl: './images/crew/sanji.png', badge: 'Sanji’s Cake' },
      { id: 'wc-18', sceneNumber: 18, title: 'Mirror World: Learning Future Sight', tagline: 'Bleeding against an undefeated titan to see tomorrow.', storySummary: 'Trapped inside Mirror World, Luffy absorbs hundreds of blows from Katakuri, calming his mind to unlock Advanced Observation Haki.', motivationLine: 'Growth happens in the fire. Use your opponent’s superiority as your masterclass.', imageUrl: './images/crew/luffy.png', badge: 'Future Sight Awakens' },
      { id: 'wc-19', sceneNumber: 19, title: 'Gear Fourth: Snakeman', tagline: 'Supersonic unpredictability that outspeeds the future.', storySummary: 'Luffy unveils Gear 4th Snakeman, firing King Cobra punches that accelerate indefinitely around Katakuri’s Mochi defense.', motivationLine: 'When linear power cannot break through, adapt with fluid, accelerating speed.', imageUrl: './images/crew/luffy-gear4.png', badge: 'Snakeman Debut' },
      { id: 'wc-20', sceneNumber: 20, title: 'Katakuri’s Fedora Hat Tribute', tagline: 'A fallen warrior honored with respect on his lips.', storySummary: 'Luffy emerges victorious. Before leaving, he places Katakuri’s fedora over his mouth to protect Katakuri’s pride regarding his torn cheeks.', motivationLine: 'Treat a noble adversary with the highest honor after the battle is won.', imageUrl: './images/crew/luffy.png', badge: 'Mutual Respect' }
    ]
  },

  // 8. WANO COUNTRY
  {
    id: 'wano',
    title: 'Wano Country',
    japaneseTitle: 'ワノ国編',
    subtitle: 'The Land of Gold, Oden’s Will & Joy Boy Awakens',
    saga: 'Four Emperors Saga',
    episodes: 'Episodes 890–1085',
    chapters: 'Chapters 909–1057',
    year: '2019–2023',
    bgGradient: 'from-amber-950 via-purple-950 to-slate-950',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.5)',
    themeType: 'feudal_cherry_blossom',
    bgImage: './images/arcs/wano.png',
    shortDesc: 'The Straw Hats, Heart Pirates, and samurai alliance launch the Raid on Onigashima to defeat Emperor Kaido and liberate Wano.',
    fullSynopsis: 'In the isolated feudal realm of Wano, the tyrannical Beast Pirates and Shogun Orochi have starved the populace for twenty years. Luffy trains in Udon Prison to master Advanced Conqueror’s Haki and Ryuo. On the fateful night of the Fire Festival, 5,400 samurai raid Onigashima. After falling to Kaido, Luffy’s heart begins beating to the Drums of Liberation—awakening the Mythical Sun God Nika Gear 5.',
    keyCharacters: ['Monkey D. Luffy', 'Roronoa Zoro', 'Kozuki Oden', 'Kaido', 'Kozuki Momonosuke', 'Yamato', 'Sanji', 'Trafalgar Law', 'Eustass Kid'],
    locations: ['Kuri', 'Flower Capital', 'Udon Prison', 'Ringo Cemetery', 'Onigashima Skull Dome', 'Roof of Onigashima'],
    factions: [
      { name: 'Ninja-Pirate-Mink-Samurai Alliance', banner: 'The Kozuki Restoration', members: ['Luffy', 'Zoro', 'Momonosuke', 'Yamato', 'Law', 'Kid', 'Red Scabbards'] },
      { name: 'Beast Pirates', banner: 'Hundred Beasts Empire', members: ['Kaido', 'King', 'Queen', 'Jack', 'Tobiroppo', 'Numbers'] },
      { name: 'Big Mom Pirates Alliance', banner: 'Emperor Coalition', members: ['Big Mom', 'Perospero'] }
    ],
    fights: [
      {
        id: 'luffy-vs-kaido-gear5',
        combatants: 'Monkey D. Luffy vs. Kaido of the Beasts',
        title: 'Joy Boy Has Returned: Gear 5 vs. Flame Dragon Torch',
        location: 'Onigashima Sky Above the Flower Capital',
        outcome: 'Kaido plunged into the volcanic magma core; Wano liberated',
        keyClash: 'Gomu Gomu no Bajrang Gun vs. Kaen Daiko (Flame Dragon Torch)',
        quote: 'What kind of world do you want to make, Straw Hat?! — A world where my friends can eat as much food as they want!!',
        speaker: 'Kaido & Monkey D. Luffy',
        description: 'Luffy awakens Gear 5 Nika, turning the lightning clouds and Kaido’s dragon form into malleable rubber, finishing with an island-sized fist.',
        imageUrl: './images/scenes/bajrang-gun.png'
      },
      {
        id: 'zoro-vs-king',
        combatants: 'Roronoa Zoro vs. King the Conflagration',
        title: 'King of Hell: The Conqueror of Three Swords',
        location: 'Onigashima Exterior Rooftop Rubble',
        outcome: 'King defeated; Zoro claims the title "King of Hell"',
        keyClash: 'King of Hell Three-Sword Style: Dragon Damnation vs. Imperial Flaming Wings',
        quote: 'I promised my captain and my best friend... I will never lose again! I’ll become the King of Hell if that’s what it takes!',
        speaker: 'Roronoa Zoro',
        description: 'Zoro tames Enma’s insatiable thirst for Conqueror’s Haki, deducing King’s Lunarian flame secrets and slicing his flaming dragon imperial sword in two.',
        imageUrl: './images/blades/enma.png'
      }
    ],
    iconicMoments: [
      { id: 'joyboy-awakening', title: 'Joy Boy Has Returned! Gear 5 White Form', quote: 'The drums of liberation! Ha ha ha ha! This is my peak!!', speaker: 'Monkey D. Luffy', description: 'Zunesha announces across the sea: "Joy Boy has returned!" Luffy’s hair turns brilliant pure white as laughter erupts across Onigashima.', badge: 'Peak Anime History', imageUrl: './images/crew/luffy-gear5.png' },
      { id: 'zoro-scars-kaido', title: 'Ashura: Dead Man’s Game Scars Kaido', quote: 'This was the best I could do... I hope it at least leaves a scar.', speaker: 'Roronoa Zoro', description: 'With thirty broken bones, Zoro unleashes Kyutoryu Ashura, carving an indelible cross-scar into Kaido’s chest.', badge: 'Scar of an Emperor', imageUrl: './images/blades/enma.png' }
    ],
    chaptersList: [
      { id: 'c-act-1-2', title: 'Acts 1 & 2: Wano’s Agony', description: 'Luffy is defeated by Kaido in Kuri and imprisoned in Udon, mastering Advanced Ryuo with Hyogoro.', episodes: 'Ep 890–958', imageUrl: './images/arcs/wano.png', highlights: ['First Thunder Bagua', 'Udon prison training', 'Zoro gets Enma'] },
      { id: 'c-oden-flashback', title: 'Oden’s Legendary Voyage', description: 'The grand flashback of Kozuki Oden sailing with Whitebeard and Roger to Laugh Tale.', episodes: 'Ep 959–976', imageUrl: './images/bounties/oden.png', highlights: ['Roger vs Whitebeard', 'He laughed (Laugh Tale)', 'Oden boiled hour'] },
      { id: 'c-raid-onigashima', title: 'Raid on Onigashima & Gear 5', description: '5,400 samurai invade Onigashima. Zoro cuts King, Sanji beats Queen, and Luffy awakens Gear 5.', episodes: 'Ep 977–1085', imageUrl: './images/scenes/bajrang-gun.png', highlights: ['Roof Piece', 'Ashura scars Kaido', 'Drums of Liberation Gear 5'] }
    ],
    storyScenes: [
      { id: 'wn-1', sceneNumber: 1, title: 'Infiltration in Geisha and Ronin Attire', tagline: 'Blades resting in wooden sheaths amidst cherry blossoms.', storySummary: 'The crew gathers in Wano disguised as local samurai and merchants. Zoro is framed for magistrate murder and executes corrupt officials with a seppuku blade.', motivationLine: 'Never let false charges tarnish your honor; act with swift justice.', imageUrl: './images/arcs/wano.png', badge: 'Zoro’s Seppuku Cleave' },
      { id: 'wn-2', sceneNumber: 2, title: 'Tama’s Red Bean Soup and Ace’s Promise', tagline: 'A tiny girl who drank poisoned river water on her birthday.', storySummary: 'Luffy meets Otama, learning that Ace promised to return and turn Wano into a paradise where everyone can eat their fill.', motivationLine: 'Keep promises made to children; their faith in tomorrow depends on it.', imageUrl: './images/quotes/speaker-ace.png', badge: 'Ace’s Promise to Tama' },
      { id: 'wn-3', sceneNumber: 3, title: 'The Sky Dragon Descends', tagline: 'A storm of clouds bringing the strongest creature alive.', storySummary: 'Kaido appears above Kuri in colossal Eastern Azure Dragon form, vaporizing Oden Castle with a single blast of Bolo Breath.', motivationLine: 'Face terrifying colossi with steady hands and clear intent.', imageUrl: './images/arcs/wano.png', badge: 'Kaido Dragon Form' },
      { id: 'wn-4', sceneNumber: 4, title: 'The First Thunder Bagua', tagline: 'The crushing reality of Emperor Conqueror’s Haki.', storySummary: 'Enraged by Kaido attacking his crew, Luffy unleashes Gear 4th Elephant Gatling, but Kaido stands up sober and one-shots Luffy with Thunder Bagua.', motivationLine: 'Defeat reveals the exact mountain you must climb to reach the next tier of mastery.', imageUrl: './images/bounties/bounty-kaido.png', badge: 'Thunder Bagua Defeat' },
      { id: 'wn-5', sceneNumber: 5, title: 'Udon Prison: Mastering Ryuo', tagline: 'Turning iron labor into internal flow training.', storySummary: 'Luffy is shackled in sea-prism stone at Udon, training under old Yakuza boss Hyogoro to master Ryuo—flowing Haki that destroys enemies from within.', motivationLine: 'Transform your prison into your training dojo; no barrier can bind a willing mind.', imageUrl: './images/crew/luffy.png', badge: 'Ryuo Mastery' },
      { id: 'wn-6', sceneNumber: 6, title: 'Zoro Inherits the Hell Blade Enma', tagline: 'A blade that drains its wielder’s soul to cut dragons.', storySummary: 'Hiyori presents Kozuki Oden’s sword Enma to Zoro in exchange for Shusui. Enma immediately sucks Zoro’s arm dry of Haki, but Zoro tames it.', motivationLine: 'High-caliber tools demand masters who possess the inner strength to wield them.', imageUrl: './images/blades/enma.png', badge: 'Enma Tamed' },
      { id: 'wn-7', sceneNumber: 7, title: 'The Legend of Kozuki Oden', tagline: 'Born to be wild, sailing with Whitebeard and Roger.', storySummary: 'A glorious flashback reveals Oden’s boundless strength, his recruitment into Whitebeard’s crew, and his voyage with Gol D. Roger to Laugh Tale.', motivationLine: 'Live life with boundless curiosity; the greatest treasures are found over the horizon.', imageUrl: './images/bounties/oden.png', badge: 'Oden’s Voyage' },
      { id: 'wn-8', sceneNumber: 8, title: 'He Laughed: Laugh Tale Reached', tagline: 'The greatest pirate who looked upon the Void Century and wept tears of joy.', storySummary: 'Roger and his crew reach the final island, discovering Joy Boy’s treasure and bursting into laughter, naming the island "Laugh Tale."', motivationLine: 'The ultimate truth of human existence is meant to be greeted with joy, not solemn fear.', imageUrl: './images/bounties/bounty-roger.png', badge: 'He Laughed' },
      { id: 'wn-9', sceneNumber: 9, title: 'The Hour of Legends: Oden Boiled in Oil', tagline: 'Holding nine retainers above boiling oil for an hour.', storySummary: 'Oden holds a massive wooden plank bearing his nine retainers while standing in boiling oil for 60 minutes, shot smiling by Kaido: "I was born to boil!"', motivationLine: 'A leader bears the scalding agony so that the dawn may rise for his people.', imageUrl: './images/bounties/oden.png', badge: 'The Legendary Hour' },
      { id: 'wn-10', sceneNumber: 10, title: 'The 5,400 Samurai Raid', tagline: 'Rowing into a tempest on the night of the Fire Festival.', storySummary: 'Despite Orochi bombing the bridges, Kin’emon and the samurai sail into the storm, joined by Law, Kid, and the Straw Hats aboard Sunny.', motivationLine: 'When twenty years of hopes converge, no storm on earth can drown the fleet.', imageUrl: './images/crew/sunny.png', badge: 'The Raid Begins' },
      { id: 'wn-11', sceneNumber: 11, title: 'Jinbe Officially Steps Aboard', tagline: 'The Knight of the Sea claims his helmsman helm.', storySummary: 'Jinbe arrives at Onigashima in the nick of time, destroying Beast Pirate warships and formally drinking the cup of joining with Luffy.', motivationLine: 'A person of honor always fulfills his promise to return to his family.', imageUrl: './images/crew/jinbe.png', badge: 'Jinbe Returns' },
      { id: 'wn-12', sceneNumber: 12, title: 'Roof Piece: Five Supernovas vs. Two Emperors', tagline: 'The worst generation challenging the old era titans.', storySummary: 'Luffy, Zoro, Law, Kid, and Killer stand on the Onigashima roof facing Kaido and Big Mom. Luffy delivers Red Roc, slamming Kaido’s face into the ground.', motivationLine: 'The new era will not ask for permission; it takes the roof by storm.', imageUrl: './images/crew/luffy.png', badge: 'Roof Piece Red Roc' },
      { id: 'wn-13', sceneNumber: 13, title: 'Zoro Blocks Hakai & Scars Kaido', tagline: 'Thirty broken bones unleashing Nine-Sword Style Ashura.', storySummary: 'Zoro blocks Big Mom and Kaido’s combined Ocean Sovereignty for precious seconds, then unleashes Kyutoryu Ashura, carving an indelible cross-scar on Kaido.', motivationLine: 'Pour every drop of your soul into protecting your brothers from total annihilation.', imageUrl: './images/blades/enma.png', badge: 'Ashura Scars Kaido' },
      { id: 'wn-14', sceneNumber: 14, title: 'Sanji’s Ifrit Jambe', tagline: 'Blue plasma flames forged from chivalry and science.', storySummary: 'Sanji rejects Germa’s cold cruelty while mastering his awakened exoskeleton, combining it with Armament Haki to blast Queen with Ifrit Jambe: Boeuf Burst.', motivationLine: 'Use the tools of your lineage without letting them corrupt the warmth of your heart.', imageUrl: './images/crew/sanji.png', badge: 'Ifrit Jambe' },
      { id: 'wn-15', sceneNumber: 15, title: 'King of Hell Three-Sword Style', tagline: 'I’ll become the King of Hell if that’s what it takes!', storySummary: 'Zoro lets Enma consume his Conqueror’s Haki without restraint, discovering King’s Lunarian flame secrets and bisecting him with Dragon Damnation.', motivationLine: 'Embrace whatever darker depths are needed to fulfill the sacred oath to your captain.', imageUrl: './images/blades/enma.png', badge: 'King of Hell' },
      { id: 'wn-16', sceneNumber: 16, title: 'Law and Kid Sinking Big Mom', tagline: 'Surgical spatial silence sending an Emperor into magma.', storySummary: 'Law awakens K-ROOM to silence Big Mom’s cries while Kid’s Damned Punk railgun drives Emperor Charlotte Linlin miles down into the earth’s magma mantle.', motivationLine: 'Coordinated tactical intelligence can dethrone monsters who seemed immortal.', imageUrl: './images/fruits/ope-ope.png', badge: 'Big Mom Dethroned' },
      { id: 'wn-17', sceneNumber: 17, title: 'The CP0 Interference & Fatal Strike', tagline: 'A captain’s heartbeat silenced on the roof.', storySummary: 'CP0 agent Guernica interrupts the final clash, allowing Kaido’s club to crush Luffy’s skull. Kaido stands in grief as Luffy’s voice fades completely.', motivationLine: 'Darkest midnight always precedes the dawn. The end of physical life can birth the divine.', imageUrl: './images/arcs/wano.png', badge: 'Luffy’s Heart Stops' },
      { id: 'wn-18', sceneNumber: 18, title: 'Drums of Liberation: Gear 5 Awakens', tagline: 'Joy Boy has returned! The pure white laughter of liberation.', storySummary: 'Zunesha proclaims across the sea: "Joy Boy has returned!" Luffy’s hair turns blazing white; his heart beats to the Drums of Liberation as he laughs hysterically.', motivationLine: 'Freedom is the natural state of existence. Laugh in the face of tyranny.', imageUrl: './images/crew/luffy-gear5.png', badge: 'Gear 5 Nika' },
      { id: 'wn-19', sceneNumber: 19, title: 'Lightning Snatcher & Dragon Jump Rope', tagline: 'Cartoon freedom bending the laws of physics and reality.', storySummary: 'Luffy grabs real lightning bolts from storm clouds and spins Kaido around like a jump rope, laughing freely as the Warrior of Liberation.', motivationLine: 'Boundless imagination and joy will always triumph over cold, calculated cruelty.', imageUrl: './images/crew/luffy-gear5-action.png', badge: 'Lightning Grab' },
      { id: 'wn-20', sceneNumber: 20, title: 'Gomu Gomu no Bajrang Gun', tagline: 'A fist the size of an island plunging Kaido into the magma core.', storySummary: 'Luffy manifests an island-sized fist imbued with Conqueror’s Haki, overpowering Kaido’s Flame Dragon Torch and liberating Wano forever.', motivationLine: 'Create a world where your friends can eat as much food as they desire.', imageUrl: './images/scenes/bajrang-gun.png', badge: 'Bajrang Gun Victory' }
    ]
  },

  // 9. EGGHEAD ISLAND (FINAL SAGA)
  {
    id: 'egghead',
    title: 'Future Island Egghead',
    japaneseTitle: 'エッグヘッド編',
    subtitle: 'The 500-Year Future, Vegapunk & The Void Century Truth',
    saga: 'Final Saga',
    episodes: 'Episodes 1086–Present',
    chapters: 'Chapters 1058–Present',
    year: '2023–Present',
    bgGradient: 'from-cyan-950 via-slate-950 to-emerald-950',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    themeType: 'cyber_future',
    bgImage: './images/arcs/egghead.png',
    shortDesc: 'The Straw Hats arrive at Dr. Vegapunk’s island of the future, triggering a Buster Call from the Five Elders and unveiling the world’s sinking fate.',
    fullSynopsis: 'Arriving at Egghead Island—500 years in the scientific future—the Straw Hats meet Dr. Vegapunk and his six satellite clones. CP0 and Admiral Kizaru lay siege with a massive Buster Call armada. Saint Jaygarcia Saturn descends in monstrous yokai form, confronting Bartholomew Kuma and Bonney. As Vegapunk’s death triggers a worldwide video broadcast revealing that the ancient world was flooded, all Five Elders summon themselves onto the island.',
    keyCharacters: ['Monkey D. Luffy', 'Dr. Vegapunk', 'Bartholomew Kuma', 'Jewelry Bonney', 'Saint Jaygarcia Saturn', 'Admiral Kizaru', 'Rob Lucci', 'Gorosei (Five Elders)'],
    locations: ['Egghead Island', 'Fabriophase', 'Labophase', 'Punk Records', 'Scrap Heap', 'Hachinosu'],
    factions: [
      { name: 'Straw Hat & Vegapunk Defense', banner: 'The Future Escort', members: ['Luffy', 'Zoro', 'Sanji', 'Vegapunk Stella', 'Lilith', 'Atlas', 'Bonney', 'Kuma'] },
      { name: 'World Government & Buster Call', banner: 'Five Elders Extermination', members: ['Saint Saturn', 'Saint Nusjuro', 'Saint Warcury', 'Saint Ju Peter', 'Saint Mars', 'Kizaru', 'CP0'] },
      { name: 'Giant Warrior Pirates', banner: 'Warriors of Elbaph', members: ['Dorry', 'Brogy', 'Oimo', 'Kashi'] }
    ],
    fights: [
      {
        id: 'gear5-vs-saturn-kizaru',
        combatants: 'Monkey D. Luffy (Gear 5) vs. Admiral Kizaru & Saint Jaygarcia Saturn',
        title: 'Dawn Cymbals: Sun God vs. Light & Yokai Elder',
        location: 'Egghead Fabriophase Battlefield',
        outcome: 'Kizaru and Saturn flattened into flat pancakes; Star Gun lands clean',
        keyClash: 'Gomu Gomu no Dawn Cymbals flattening both enemies simultaneously',
        quote: 'You hurt my friends and shot the old man! I won’t let either of you leave this island in one piece!!',
        speaker: 'Monkey D. Luffy',
        description: 'Luffy flattens Kizaru and Saturn like dough with Dawn Cymbals, spinning them into the ocean and proving Gear 5 can tackle an Admiral and Gorosei simultaneously.',
        imageUrl: './images/crew/luffy-gear5-action.png'
      },
      {
        id: 'kuma-vs-saturn',
        combatants: 'Bartholomew Kuma vs. Saint Jaygarcia Saturn',
        title: 'The Punch of a Buccaneer Father: Avenging Ginny & Bonney',
        location: 'Egghead Island Fabriophase Central Plaza',
        outcome: 'Saturn punched through five city blocks; Buccaneer soul triumphant',
        keyClash: 'Armament-hardened mechanical fist crushing Saturn’s demon jaw',
        quote: 'My father told me about the Warrior of Liberation... Nika will come and set us all free!',
        speaker: 'Bartholomew Kuma',
        description: 'With zero self-awareness protocols active, Kuma’s paternal instinct overcomes World Government programming to smash Saturn’s face into rubble.',
        imageUrl: './images/scenes/kuma-punches-saturn.png'
      }
    ],
    iconicMoments: [
      { id: 'vegapunk-truth', title: 'The World is Sinking!', quote: 'Our world is sinking into the sea! Those who caused the flood 800 years ago still walk among us!', speaker: 'Dr. Vegapunk Stella', description: 'Vegapunk’s worldwide broadcast shocks every kingdom, pirate, and marine across all four seas.', badge: 'Void Century Revelation', imageUrl: './images/scenes/vegapunk-recording.png' },
      { id: 'kuma-past', title: 'The Purest Soul: Kuma’s Memory Bubble', quote: 'Bonney... happy tenth birthday. I will always love you.', speaker: 'Bartholomew Kuma', description: 'Bonney touches Kuma’s extracted memory bubble in the Labophase, seeing her father’s endless sacrifices as a slave, revolutionary, and protector.', badge: 'Tears of a Buccaneer', imageUrl: './images/scenes/kuma-punch.png' }
    ],
    chaptersList: [
      { id: 'c-future-island', title: 'The Future Island Egghead', description: 'Straw Hats explore Vegapunk’s 500-year future technology; CP0 deploys Seraphim.', episodes: 'Ch 1058–1075', imageUrl: './images/arcs/egghead.png', highlights: ['Vegapunk satellites', 'Luffy vs Lucci rematch', 'Devil Fruit origin'] },
      { id: 'c-saturn-kuma', title: 'The Buccaneer Father', description: 'Kuma’s tragic life revealed. Saint Saturn descends. Kuma lands the historic punch.', episodes: 'Ch 1076–1105', imageUrl: './images/scenes/kuma-punches-saturn.png', highlights: ['Kuma backstory', 'Saturn yokai form', 'Father’s punch'] },
      { id: 'c-vegapunk-broadcast', title: 'The World Sinks: Five Elders Arrive', description: 'Vegapunk broadcasts the Void Century truth; all Five Elders summon themselves.', episodes: 'Ch 1106–Present', imageUrl: './images/scenes/vegapunk-recording.png', highlights: ['Five Elders assembled', 'World is sinking', 'Joy Boy haki knot'] }
    ],
    storyScenes: [
      { id: 'eh-1', sceneNumber: 1, title: 'The Warm Vortex of Egghead', tagline: 'Entering an island 500 years in the scientific future.', storySummary: 'The Straw Hats navigate climate anomalies and giant mechanical sharks, rescuing Jewelry Bonney from a warm water eddy.', motivationLine: 'Venture boldly into unknown futures; breakthroughs lie just past the storm.', imageUrl: './images/arcs/egghead.png', badge: 'Egghead Arrival' },
      { id: 'eh-2', sceneNumber: 2, title: 'Meeting the Satellites of Vegapunk', tagline: 'Six bodies sharing one infinite supercomputer brain.', storySummary: 'Luffy meets Dr. Vegapunk’s satellite clones: Lilith (Evil), Shaka (Logic), Edison (Thinking), Pythagoras (Wisdom), Atlas (Violence), and York (Greed).', motivationLine: 'Great minds compartmentalize complexity, but integrity must unify them.', imageUrl: './images/fruits/nomi-nomi.png', badge: 'Vegapunk Satellites' },
      { id: 'eh-3', sceneNumber: 3, title: 'The Sleeping Ancient Giant Robot', tagline: 'A relic from 900 years ago powered by an unknown energy.', storySummary: 'Luffy and Chopper discover the giant Iron Giant Emet, which attacked Mary Geoise 200 years ago powered by the ancient drums of liberation.', motivationLine: 'Ancient wisdom often outstrips modern technology. Respect the past.', imageUrl: './images/arcs/egghead.png', badge: 'Ancient Robot Emet' },
      { id: 'eh-4', sceneNumber: 4, title: 'Luffy vs. Lucci Rematch: Gear 5 Toys with Leopard', tagline: 'The leopard pounces, but the sun god simply laughs.', storySummary: 'CP0 arrives to assassinate Vegapunk. Rob Lucci awakens his Leopard Zoan, but Gear 5 Luffy plays with him effortlessly, dodging with cartoon ease.', motivationLine: 'When you operate at your peak, former rivals cannot even touch your shadow.', imageUrl: './images/crew/luffy-gear5.png', badge: 'Lucci Rematch' },
      { id: 'eh-5', sceneNumber: 5, title: 'Green Blood: Paramecia Duplication', tagline: 'Synthesizing Devil Fruit lineage into immortal Seraphim.', storySummary: 'Dr. Vegapunk explains his Green Blood breakthrough, showing how child Warlord clones wield Hancock’s, Doflamingo’s, and Kuma’s powers.', motivationLine: 'Science without conscience creates weapons that threaten its own creators.', imageUrl: './images/fruits/green-blood.png', badge: 'Green Blood Tech' },
      { id: 'eh-6', sceneNumber: 6, title: 'The Origin of Devil Fruits', tagline: 'Devil fruits are the manifestations of human wishes for evolution.', storySummary: 'Vegapunk reveals his theory: Devil Fruits are born from human dreams of alternative futures, which is why the mother of all nature—the sea—rejects them.', motivationLine: 'Desire and human imagination are the most potent evolutionary forces on earth.', imageUrl: './images/fruits/nomi-nomi.png', badge: 'Devil Fruit Mystery' },
      { id: 'eh-7', sceneNumber: 7, title: 'Galaxy Impact: Garp Attacks Hachinosu', tagline: 'A grandfather’s fist destroying a pirate island from the clouds.', storySummary: 'Vice Admiral Garp leaps from his ship, destroying Pirate Island Hachinosu with Advanced Conqueror’s Galaxy Impact to rescue young Koby.', motivationLine: 'The old guard will gladly break cities to guarantee the safety of the future generation.', imageUrl: './images/family/garp.png', badge: 'Galaxy Impact' },
      { id: 'eh-8', sceneNumber: 8, title: 'Kuzan vs. Garp: Student vs. Teacher', tagline: 'Ice meets iron in a clash of conflicting moral justice.', storySummary: 'Former Admiral Kuzan battles his old mentor Garp on Hachinosu. Garp laughs as he is stabbed, securing Koby’s escape as the future of the Navy.', motivationLine: 'Passing the torch to the young is the ultimate victory of a noble life.', imageUrl: './images/family/garp.png', badge: 'Passing the Torch' },
      { id: 'eh-9', sceneNumber: 9, title: 'Divine Departure: Shanks Demolishes Kid', tagline: 'One sword slash ending a rookie crew’s ambition in three seconds.', storySummary: 'At Elbaph, Shanks sees Kid preparing to destroy his fleet with Damned Punk. Shanks leaps forward, wiping out Kid and Killer with Roger’s Kamusari.', motivationLine: 'True emperors protect their weak allies without hesitation or mercy.', imageUrl: './images/bounties/bounty-shanks.png', badge: 'Divine Departure' },
      { id: 'eh-10', sceneNumber: 10, title: 'The Buster Call Armada Descends', tagline: 'One hundred warships surrounding the Island of the Future.', storySummary: 'Admiral Kizaru and Saint Jaygarcia Saturn arrive at Egghead commanding 100 Marine battleships and 30,000 soldiers to wipe the island from history.', motivationLine: 'When authority feels threatened by truth, it resorts to overwhelming violence.', imageUrl: './images/arcs/egghead.png', badge: 'Egghead Buster Call' },
      { id: 'eh-11', sceneNumber: 11, title: 'Luffy Clashes with Light: Kizaru', tagline: 'Snatching light rays out of the sky with rubber hands.', storySummary: 'Luffy in Gear 5 clashes with Admiral Kizaru’s light-speed kicks, turning Kizaru’s laser beams into edible light and spinning him like a wheel.', motivationLine: 'Laughter and flexibility dismantle even the fastest, coldest military forces.', imageUrl: './images/crew/luffy-gear5-action.png', badge: 'Gear 5 vs Kizaru' },
      { id: 'eh-12', sceneNumber: 12, title: 'The Tragedy of Bartholomew Kuma', tagline: 'The gentlest soul who bore the world’s suffering.', storySummary: 'A heartbreaking flashback shows Kuma born a Buccaneer slave, loving Ginny, raising orphan Bonney, and trading his humanity to Vegapunk to cure Bonney.', motivationLine: 'True saints bear the agony of others without complaint, leaving a legacy of love.', imageUrl: './images/scenes/kuma-punch.png', badge: 'Kuma’s Memory' },
      { id: 'eh-13', sceneNumber: 13, title: 'The Paternal Punch: Kuma Smashes Saturn', tagline: 'Zero cybernetic programming can erase a father’s love.', storySummary: 'With self-destruct protocols broken, Kuma teleports into Egghead, clenching his fist with tears of rage and smashing Saint Saturn through five buildings.', motivationLine: 'A father’s love transcends death, programming, and worldly authority.', imageUrl: './images/scenes/kuma-punches-saturn.png', badge: 'The Father’s Punch' },
      { id: 'eh-14', sceneNumber: 14, title: 'The Dawn Cymbals Pancake', tagline: 'Flattening an Admiral and an Elder simultaneously.', storySummary: 'Luffy enlarges his hands into massive bronze-colored cymbals, clapping Saturn and Kizaru together into flat pizza dough and spinning them away.', motivationLine: 'Defy overwhelming odds with unshakeable audacity and creative play.', imageUrl: './images/crew/luffy-gear5-action.png', badge: 'Dawn Cymbals' },
      { id: 'eh-15', sceneNumber: 15, title: 'Dr. Vegapunk’s Fatal Wound', tagline: 'The death of the world’s greatest scientist triggers the fail-safe.', storySummary: 'Saturn and Kizaru fatally wound Vegapunk Stella. As his heart monitor stops, a video broadcast automatically transmits across the globe.', motivationLine: 'Prepare your truth so that even your death ensures the message reaches the world.', imageUrl: './images/fruits/nomi-nomi.png', badge: 'Vegapunk Falls' },
      { id: 'eh-16', sceneNumber: 16, title: 'The Worldwide Video Broadcast', tagline: 'The world is sinking into the sea!', storySummary: 'Vegapunk’s recorded face appears on Den Den Mushis across all oceans, announcing that the Ancient Kingdom was flooded by ancient weapons 800 years ago.', motivationLine: 'Truth revealed to the masses breaks the monopoly of despots forever.', imageUrl: './images/scenes/vegapunk-recording.png', badge: 'Vegapunk’s Broadcast' },
      { id: 'eh-17', sceneNumber: 17, title: 'Summoning of the Five Elders', tagline: 'Five demonic yokai summoning circles glowing in blood.', storySummary: 'Saturn summons the other four Gorosei: Warcury (Giant Boar), Nusjuro (Skeletal Horse), Ju Peter (Sandworm), and Mars (Giant Bird) directly onto Egghead.', motivationLine: 'When you strike at the heart of evil, expect the full monstrosity to reveal itself.', imageUrl: './images/arcs/egghead.png', badge: 'Five Elders Summoned' },
      { id: 'eh-18', sceneNumber: 18, title: 'The Elbaph Giants Arrive', tagline: 'Dorry and Brogy bringing the sun god back to the giants.', storySummary: 'Giant Warrior Pirates Dorry and Brogy smash through the Marine blockade to rescue Sun God Luffy: "We’ve come to fetch the Sun God!"', motivationLine: 'Old friends and ancient prophecies converge to guide you to your next destiny.', imageUrl: './images/arcs/egghead.png', badge: 'Giants of Elbaph' },
      { id: 'eh-19', sceneNumber: 19, title: 'Joy Boy’s Stored Conqueror’s Haki Knot', tagline: 'A knot tied 800 years ago dispelling demonic elders.', storySummary: 'The Ancient Robot Emet unties a rope knot containing Joy Boy’s concentrated Conqueror’s Haki, blasting all Five Elders back to Mary Geoise instantly.', motivationLine: 'Love and protection stored across eight centuries can still save comrades today.', imageUrl: './images/crew/luffy-gear5.png', badge: 'Joy Boy Haki Knot' },
      { id: 'eh-20', sceneNumber: 20, title: 'Setting Sail for Elbaph: Land of the Giants', tagline: 'Toward the sacred land of warriors where the final truth awaits.', storySummary: 'The Straw Hats escape Egghead aboard the Giant Warrior ship, drinking sake with Dorry, Brogy, and Bonney as they set sail for Elbaph.', motivationLine: 'Every ending is the open gate to a grander adventure on the horizon.', imageUrl: './images/crew/sunny.png', badge: 'Voyage to Elbaph' }
    ]
  }
];
