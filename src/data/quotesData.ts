export interface QuoteItem {
  id: string;
  speaker: string;
  speakerRole: string;
  quote: string;
  japaneseQuote?: string;
  context: string;
  arc: string;
  category: 'Freedom & Dreams' | 'Justice & Truth' | 'Comradeship & Sacrifice' | 'Honor & Resolve';
  motivationLesson: string;
  speakerImage: string;
  accentColor: string;
}

export const POPULAR_QUOTES: QuoteItem[] = [
  {
    id: 'roger-freedom',
    speaker: 'Gol D. Roger',
    speakerRole: 'King of the Pirates',
    quote: 'Inherited Will, the destiny of the age, and the dreams of its people. As long as people continue to pursue the meaning of freedom, these things will never cease to be!',
    japaneseQuote: '受け継がれる意志、時代のうねり、人の夢…これらは止めることのできないものだ。人々が自由の答えを求める限り、それらは決して滅びない！',
    context: 'The timeless opening philosophy spoken by the King of the Pirates that sparked the Great Pirate Era.',
    arc: 'Loguetown / Romance Dawn',
    category: 'Freedom & Dreams',
    motivationLesson: 'Dreams never die. Time and tyranny cannot extinguish the human soul’s eternal thirst for true freedom.',
    speakerImage: './images/quotes/speaker-roger.png',
    accentColor: '#f59e0b'
  },
  {
    id: 'hiriluk-forgotten',
    speaker: 'Dr. Hiriluk',
    speakerRole: 'Quack Doctor of Drum Island',
    quote: 'When does a man die? When he is hit by a bullet? No. When he is ravaged by an incurable disease? No. When he drinks a soup made from a poisonous mushroom? No! A man dies when he is forgotten!',
    japaneseQuote: '人はいつ死ぬと思う…？ 心臓を銃で撃ち抜かれた時……違う。不治の病に犯された時……違う。猛毒キノコのスープを飲んだ時……違う!! 人に……忘れられた時さ…！',
    context: 'Facing Wapol’s firing squad, Hiriluk drinks his own potion smiling, proving that ideas and love outlive mortal flesh.',
    arc: 'Drum Island',
    category: 'Comradeship & Sacrifice',
    motivationLesson: 'True immortality is not living forever in the physical body, but living forever in the hearts of those you inspire.',
    speakerImage: './images/quotes/speaker-hiriluk.png',
    accentColor: '#ec4899'
  },
  {
    id: 'doflamingo-justice',
    speaker: 'Donquixote Doflamingo',
    speakerRole: 'Heavenly Demon / Former Warlord',
    quote: 'Pirates are evil? The Marines are righteous? These terms have always changed throughout history! Kids who have never seen peace and kids who have never seen war have different values! The ones standing at the top determine what is right and wrong! Justice will prevail? But of course it will! Whoever wins becomes Justice!',
    japaneseQuote: '海賊が悪…！？ 海軍が正義…！？ そんなものはいくらでも塗り替えられて来た…！ 勝者だけが正義だ!!!!',
    context: 'Proclaimed at Marineford while surveying the slaughter between the Whitebeard Pirates and the Navy.',
    arc: 'Marineford Summit War',
    category: 'Justice & Truth',
    motivationLesson: 'Never accept propaganda unquestioningly. Look through power structures and define morality by genuine compassion, not authority.',
    speakerImage: './images/quotes/speaker-doflamingo.png',
    accentColor: '#ef4444'
  },
  {
    id: 'ace-gratitude',
    speaker: 'Portgas D. Ace',
    speakerRole: 'Second Division Commander, Whitebeard Pirates',
    quote: 'Thank you for loving someone like me, who was good for nothing, and whose veins carried the blood of a demon!',
    japaneseQuote: '愛してくれて………ありがとう!!!',
    context: 'Ace’s dying words in Luffy’s arms after shielding him from Admiral Sakazuki’s magma fist.',
    arc: 'Marineford',
    category: 'Comradeship & Sacrifice',
    motivationLesson: 'No matter what guilt or shadows you carry from your past, you deserve love, and true family is bound by loyalty, not blood.',
    speakerImage: './images/quotes/speaker-ace.png',
    accentColor: '#f97316'
  },
  {
    id: 'saul-robin',
    speaker: 'Jaguar D. Saul',
    speakerRole: 'Former Vice Admiral / Giant',
    quote: 'No one is born into this world to be completely alone! Somewhere out there on the vast ocean, your comrades are waiting for you, Robin! Go meet them!',
    japaneseQuote: 'この世に生まれて一人ぼっちなんて事は絶対にないんだで！ 海は広いんだ…いつか必ず、お前を守ってくれる「仲間」に巡り会える！',
    context: 'Frozen by Kuzan at the burning ruins of Ohara, Saul gives child Robin the courage to laugh through tears ("Dereshi!").',
    arc: 'Ohara Flashback / Enies Lobby',
    category: 'Comradeship & Sacrifice',
    motivationLesson: 'Loneliness is temporary. Somewhere in this world, there are people whose souls match yours. Keep surviving until you find them.',
    speakerImage: './images/quotes/speaker-saul.png',
    accentColor: '#06b6d4'
  },
  {
    id: 'bon-clay-friendship',
    speaker: 'Bentham (Bon Clay)',
    speakerRole: 'Okama Way Practitioner / Straw Hat Brother',
    quote: 'One may stray from the path of a man, one may stray from the path of a woman, but there is no straying from the path of a HUMAN! Scatter upon the sea of truth and blossom, Okama Way!',
    japaneseQuote: '男の道をそれるとも 女の道をそれるとも 踏み外せぬは人の道！ 散らば諸友 真の空に 咲かせてみせよう オカマ道！',
    context: 'Bentham sacrifices himself at Impel Down disguised as Magellan to open the Gates of Justice for Luffy.',
    arc: 'Impel Down',
    category: 'Honor & Resolve',
    motivationLesson: 'Be unapologetically yourself. Stand true to your moral compass and sacrifice fearlessly for those you call friends.',
    speakerImage: './images/quotes/speaker-bonclay.png',
    accentColor: '#a855f7'
  },
  {
    id: 'whitebeard-onepiece',
    speaker: 'Edward Newgate (Whitebeard)',
    speakerRole: 'World’s Strongest Man / Emperor',
    quote: 'Just like there are people who inherited Roger’s will, someone will eventually inherit Ace’s will as well. You may sever their bloodline, but their fire will never be extinguished! ... THE ONE PIECE IS REAL!',
    japaneseQuote: '血縁を断てど、あいつらの炎が消えることはねェ…！「ひとつなぎの大秘宝（ワンピース）」は実在する!!!',
    context: 'Whitebeard’s last roar at Marineford before dying upright without a single retreating wound.',
    arc: 'Marineford',
    category: 'Freedom & Dreams',
    motivationLesson: 'Truth cannot be suppressed by violence. One person can rekindle hope for the entire world with their dying breath.',
    speakerImage: './images/bounties/bounty-whitebeard.png',
    accentColor: '#38bdf8'
  },
  {
    id: 'luffy-freedom',
    speaker: 'Monkey D. Luffy',
    speakerRole: 'Captain of the Straw Hat Pirates / Sun God Nika',
    quote: 'I don’t want to conquer anything. I just think the guy with the most freedom on this whole ocean is the King of the Pirates!',
    japaneseQuote: '支配なんかしねェよ。この海で一番自由な奴が海賊王だ！',
    context: 'Luffy’s retort to Silvers Rayleigh when asked if he can conquer the perilous Grand Line.',
    arc: 'Sabaody Archipelago',
    category: 'Freedom & Dreams',
    motivationLesson: 'Greatness is not about dominating others or accumulating power; it is having the supreme freedom to live on your own terms.',
    speakerImage: './images/crew/luffy.png',
    accentColor: '#eab308'
  },
  {
    id: 'zoro-shove',
    speaker: 'Roronoa Zoro',
    speakerRole: 'King of Hell / Straw Hat Swordsman',
    quote: 'When the world shoves you around, you just gotta stand up and shove back. It’s not like somebody’s gonna save you if you start babbling excuses.',
    japaneseQuote: '世間にどう思われても構わねェ。背中の傷は剣士の恥だ！',
    context: 'Zoro refusing to back down from impossible odds, embracing the harsh reality of the Grand Line.',
    arc: 'East Blue / Thriller Bark',
    category: 'Honor & Resolve',
    motivationLesson: 'Excuses solve nothing. When life pushes you down, take accountability, plant your feet, and push back ten times harder.',
    speakerImage: './images/crew/zoro.png',
    accentColor: '#10b981'
  },
  {
    id: 'shanks-friends',
    speaker: 'Red-Haired Shanks',
    speakerRole: 'Emperor of the Sea',
    quote: 'Listen up... You can pour drinks on me, you can throw food at me... You can even spit on me. I’ll just laugh that stuff off. But... Good reason or not... NOBODY HURTS A FRIEND OF MINE!',
    japaneseQuote: 'いいか、山賊…おれは酒や食い物を頭からぶっかけられようが、つばを吐きかけられようが、大抵の事は笑って見過ごしてやる…だがな!! どんな理由があろうと!! おれは友達を傷つける奴は許さない!!!!',
    context: 'Shanks drawing the line against Higuma the mountain bandit in Windmill Village.',
    arc: 'Romance Dawn',
    category: 'Comradeship & Sacrifice',
    motivationLesson: 'Humility and patience are superpowers, but defending those who cannot defend themselves is where your strength must shine.',
    speakerImage: './images/bounties/bounty-shanks.png',
    accentColor: '#dc2626'
  },
  {
    id: 'jinbe-what-you-have',
    speaker: 'Jinbe',
    speakerRole: 'Knight of the Sea / Straw Hat Helmsman',
    quote: 'Don’t just think about what you have lost! You can’t get back what is gone! What is it that you STILL have?!',
    japaneseQuote: '失った物ばかり数えるな！ 無いものは無い！ 確認せい!! お前にまだ残っておるものは何じゃ!!!',
    context: 'Jinbe snapping Luffy out of self-destructive grief on Amazon Lily after Ace’s tragic death.',
    arc: 'Post-War Arc',
    category: 'Honor & Resolve',
    motivationLesson: 'Grief makes us blind to our remaining blessings. Stop counting what is lost—stand up for what and who you still have left.',
    speakerImage: './images/crew/jinbe.png',
    accentColor: '#0ea5e9'
  },
  {
    id: 'blackbeard-dreams',
    speaker: 'Marshall D. Teach',
    speakerRole: 'Emperor Blackbeard',
    quote: 'People’s dreams... HAVE NO END! Zehahaha! Let them laugh! If you don’t aim high, you’ll never reach the sky!',
    japaneseQuote: '人の夢は!!! 終わらねェ!!!! 笑われていこうじゃねェか。高みを目指せば、出す拳の見つからねェ喧嘩もあるもんだ！',
    context: 'Blackbeard encouraging Luffy outside the bar in Mock Town after Bellamy mocked the Sky Island.',
    arc: 'Jaya',
    category: 'Freedom & Dreams',
    motivationLesson: 'Never let small-minded cynics laugh you out of your ambition. Those who dream the biggest will always be mocked by those who cannot fly.',
    speakerImage: './images/bounties/bounty-blackbeard.png',
    accentColor: '#6366f1'
  }
];

