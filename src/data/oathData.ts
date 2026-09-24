export interface CrewOath {
  id: string;
  crewMember: string;
  japaneseName: string;
  role: string;
  arc: string;
  episode: string;
  chapter: string;
  opponentOrContext: string;
  oathQuote: string;
  japaneseQuote?: string;
  circumstance: string;
  significance: string;
  characterImage: string;
  sceneImage: string;
  themeColor: string;
}

export const PIRATE_KING_OATHS: CrewOath[] = [
  {
    id: 'zoro-oath',
    crewMember: 'Roronoa Zoro',
    japaneseName: 'ロロノア・ゾロ',
    role: 'Combatant / Right Hand of the Pirate King',
    arc: 'Baratie Arc',
    episode: 'Episode 24',
    chapter: 'Chapter 52',
    opponentOrContext: 'Defeated by Dracule Mihawk with chest sliced open',
    oathQuote: 'Luffy... can you hear me?! If I don’t become the greatest swordsman in the world, it would make you look bad, wouldn’t it?! Until I defeat him and claim that title, I WILL NEVER LOSE AGAIN! Got a problem with that, KING OF THE PIRATES?!',
    japaneseQuote: 'ルフィ…聞こえるか？ お前が不安にさせやがって…おれが世界一の剣豪にでもならなきゃ困るんだろ…!! おれはもう!! 二度と敗けねェから!!!! 文句あるか、海賊王!!',
    circumstance: 'Laying soaked in his own blood after Black Blade Yoru cut him from collarbone to hip, Zoro raises the Wado Ichimonji into the heavens with unyielding tears.',
    significance: 'The very first Straw Hat to utter the words "King of the Pirates" to Luffy, cementing their eternal pact of mutual destiny.',
    characterImage: './images/crew/zoro.png',
    sceneImage: './images/arcs/baratie.png',
    themeColor: '#10b981'
  },
  {
    id: 'nami-oath',
    crewMember: 'Nami',
    japaneseName: 'ナミ',
    role: 'Navigator / Cat Burglar',
    arc: 'Wano Country (Raid on Onigashima)',
    episode: 'Episode 1013',
    chapter: 'Chapter 995',
    opponentOrContext: 'Trapped by Ulti (Tobi Roppo) with cracked skull',
    oathQuote: 'Luffy will... definitely become the King of the Pirates! He will never stop! Even if you kill me right now, I will NEVER say he can’t do it!',
    japaneseQuote: 'ルフィは…海賊王に…絶対なるのっ!!!!',
    circumstance: 'Ulti offers Nami her life on one condition: say Luffy will never become Pirate King. Weeping and facing execution, Nami refuses to betray Luffy’s dream.',
    significance: 'Known as the crew’s most pragmatic and self-preserving member, Nami chose death over dishonoring Luffy’s title.',
    characterImage: './images/crew/nami.png',
    sceneImage: './images/scenes/arlong-destruction.png',
    themeColor: '#f59e0b'
  },
  {
    id: 'usopp-oath',
    crewMember: 'Usopp',
    japaneseName: 'ウソップ',
    role: 'Sniper / "God" Usopp',
    arc: 'Alabasta Kingdom Arc',
    episode: 'Episode 115',
    chapter: 'Chapter 186',
    opponentOrContext: 'Vs. Mr. 4 & Miss Merry Christmas',
    oathQuote: 'There comes a time when a man has to stand and fight! That is when his friend’s dream is laughed at! Luffy will not die! I know he will become the King of the Pirates, and I WON’T LET ANYONE LAUGH AT HIS DREAM!',
    japaneseQuote: '男には…どうしても…戦いを避けちゃならねェ時がある…!! 仲間の夢を笑われた時だ!! ルフィは死なねェ!! あいつは必ず海賊王になる男だ!!!',
    circumstance: 'With his skull shattered by Mr. 4’s 4-ton steel bat and blood pouring over his face, Usopp forces himself back to his feet to protect Luffy’s honor.',
    significance: 'The defining transformation of Usopp from coward to true warrior of the sea who protects his captain’s ambition above his own life.',
    characterImage: './images/crew/usopp.png',
    sceneImage: './images/scenes/vivi-x-mark.png',
    themeColor: '#eab308'
  },
  {
    id: 'sanji-oath',
    crewMember: 'Sanji',
    japaneseName: 'サンジ',
    role: 'Chef / Left Hand of the Pirate King',
    arc: 'Whole Cake Island Arc',
    episode: 'Episode 825',
    chapter: 'Chapter 856',
    opponentOrContext: 'Rebuking Vinsmoke Judge & Germa 66',
    oathQuote: 'Monkey D. Luffy is the man who will become the King of the Pirates! I will be his shield and cook for him to the ends of the sea! Do not speak his name so lightly, Judge!',
    japaneseQuote: 'ルフィは海賊王になる男だ!! おれはその船の料理長だ!!',
    circumstance: 'After tearfully bringing Luffy his basket of soaked bento in the rain, Sanji completely severs all ties to the Vinsmoke family to return to his true family.',
    significance: 'Proved that even family bloodlines and blackmail could not sever the bond between the cook and his captain.',
    characterImage: './images/crew/sanji.png',
    sceneImage: './images/arcs/whole-cake.png',
    themeColor: '#3b82f6'
  },
  {
    id: 'chopper-oath',
    crewMember: 'Tony Tony Chopper',
    japaneseName: 'トニートニー・チョッパー',
    role: 'Doctor / Cotton Candy Lover',
    arc: 'Return to Sabaody / Post-Enies Lobby',
    episode: 'Episode 518',
    chapter: 'Chapter 595',
    opponentOrContext: '2-Year Training Resolution',
    oathQuote: 'I used to want to be human because I wanted friends. But now, I want to become a monster that can help Luffy! Luffy is going to be the King of the Pirates!',
    japaneseQuote: 'おれ、ルフィの役に立つ怪物（モンスター）になりたい!! ルフィは海賊王になる男だ!!!',
    circumstance: 'Chopper masters the devastating Monster Point form during the 2-year timeskip so that he can crush any enemy that threatens Luffy.',
    significance: 'He casts aside his deepest childhood trauma of being called a monster, transforming that title into a badge of pride for his captain.',
    characterImage: './images/crew/chopper.png',
    sceneImage: './images/arcs/alabasta.png',
    themeColor: '#ec4899'
  },
  {
    id: 'robin-oath',
    crewMember: 'Nico Robin',
    japaneseName: 'ニコ・ロビン',
    role: 'Archaeologist / Devil Child',
    arc: 'Wano Country (Raid on Onigashima)',
    episode: 'Episode 1044',
    chapter: 'Chapter 1021',
    opponentOrContext: 'Vs. Black Maria (Tobi Roppo)',
    oathQuote: 'Sanji is the wings of the future King of the Pirates! And our captain Monkey D. Luffy is the man who will reach Laugh Tale and reveal the truth of this world!',
    japaneseQuote: 'サンジは海賊王の両翼にふさわしい男よ！ そしてルフィは必ずラフテルに辿り着く！',
    circumstance: 'Robin steps in to rescue Sanji after he called for her help without hesitation, unleashing Demonio Fleur to pulverize Black Maria.',
    significance: 'The woman who once begged for death at Enies Lobby now fights with supreme demonic ferocity to ensure Luffy conquers the sea.',
    characterImage: './images/crew/robin.png',
    sceneImage: './images/arcs/enies-lobby.png',
    themeColor: '#8b5cf6'
  },
  {
    id: 'franky-oath',
    crewMember: 'Franky',
    japaneseName: 'フランキー',
    role: 'Shipwright / Iron Man',
    arc: 'Wano Country (Raid on Onigashima)',
    episode: 'Episode 988',
    chapter: 'Chapter 989',
    opponentOrContext: 'Directly running over Emperor Big Mom with Kurosai FR-U IV',
    oathQuote: 'Running away just because she’s an Emperor of the Sea?! Hey Nami, do you intend to make our captain the King of the Pirates or not?! We don’t back down from anyone!',
    japaneseQuote: '四皇だから逃げる〜〜!? おいナミ、お前…ウチの船長を「海賊王」にする気あんのかよ!!!',
    circumstance: 'While everyone is terrified by Emperor Big Mom’s presence, Franky rides his motorcycle directly into her face with a triumphant grin.',
    significance: 'Franky shows the fearless swagger expected of the crew that sails the Thousand Sunny, ship of the Pirate King.',
    characterImage: './images/crew/franky.png',
    sceneImage: './images/arcs/water7.png',
    themeColor: '#06b6d4'
  },
  {
    id: 'brook-oath',
    crewMember: 'Brook',
    japaneseName: 'ブルック',
    role: 'Musician / Soul King',
    arc: 'Whole Cake Island Arc',
    episode: 'Episode 818',
    chapter: 'Chapter 851',
    opponentOrContext: 'Face-to-Face with Emperor Big Mom in the Treasure Room',
    oathQuote: 'Young lady... What foolish person ever plans to die?! Roger was merely a green rookie back when I was sailing! Luffy will become the King of the Pirates!',
    japaneseQuote: 'お嬢さん…死ぬことを計画に入れるバカがどこにいますか？ ルフィさんは海賊王になるお方です！',
    circumstance: 'Alone in Big Mom’s vault, Brook steals the rubbings of all three Road Poneglyphs directly from under Big Mom’s nose and looks her in the eye without fear.',
    significance: 'The MVP of Whole Cake Island, Brook proved that age and mortality mean nothing when carrying out the captain’s mandate.',
    characterImage: './images/crew/brook.png',
    sceneImage: './images/arcs/whole-cake.png',
    themeColor: '#a855f7'
  },
  {
    id: 'jinbe-oath',
    crewMember: 'Jinbe',
    japaneseName: 'ジンベエ',
    role: 'Helmsman / Knight of the Sea',
    arc: 'Whole Cake Island Arc',
    episode: 'Episode 833',
    chapter: 'Chapter 863',
    opponentOrContext: 'Facing Emperor Big Mom’s Soul Pocus: "STAY OR LIFE?"',
    oathQuote: 'I am a man who desires to join the crew of the future King of the Pirates! Why should I fear a mere Emperor of the Sea?! Take my life if you can! STAY OR LIFE? STAY!',
    japaneseQuote: '未来の「海賊王」の仲間になろうという男が…「四皇」ごときに臆しておられるかァ!!! 寿命（ライフ）を取れるものなら取ってみせい!!',
    circumstance: 'Big Mom’s Soul Pocus rips the lifespan out of anyone who feels even a drop of fear. Because Jinbe felt zero fear before an Emperor, her power failed completely.',
    significance: 'One of the most jaw-dropping moments in anime history: an Emperor’s soul power made totally useless by sheer loyalty to Luffy.',
    characterImage: './images/crew/jinbe.png',
    sceneImage: './images/scenes/luffy-3d2y.png',
    themeColor: '#0284c7'
  },
  {
    id: 'barrel-oath-grandline',
    crewMember: 'Original Five Straw Hats',
    japaneseName: '麦わらの一味 (樽の誓い)',
    role: 'The Founding Five',
    arc: 'Reverse Mountain Entry',
    episode: 'Episode 61',
    chapter: 'Chapter 100',
    opponentOrContext: 'Entering the Grand Line in a massive ocean tempest',
    oathQuote: 'To find the All Blue! To become the Greatest Swordsman! To draw a Map of the World! To become a Brave Warrior of the Sea! AND TO BECOME THE KING OF THE PIRATES!',
    japaneseQuote: 'オールブルーを見つける為に！ 世界一の大剣豪！ 世界の海図を描く為！ 勇敢なる海の戦士になる為！ そして…海賊王だ!!!!',
    circumstance: 'Before plunging down the Reverse Mountain canal into the Grand Line, Luffy, Zoro, Nami, Usopp, and Sanji place their feet onto a sake barrel, binding their fates forever.',
    significance: 'The sacred founding ritual of the Straw Hat Pirates, launching the voyage that will overturn the World Government.',
    characterImage: './images/crew/luffy.png',
    sceneImage: './images/arcs/east-blue.png',
    themeColor: '#ef4444'
  }
];

