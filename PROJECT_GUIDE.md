# ⚓ ONE PIECE GRAND LINE — DEVELOPER & NETWORK GUIDE

Welcome to your complete One Piece website codebase! You have **100% full ownership and access** to every file in this directory: `/home/dinesh/Pavan/naruto`.

---

## 🌐 1. PERMANENT SERVER & IP ADDRESS ACCESS

### Access URLs:

- **On this computer**: [http://localhost:3000](http://localhost:3000)
- **On ANY phone, tablet, laptop, or device on your Wi-Fi network**:
  👉 **`http://192.168.0.25:3000`**

### Why It Never Stops Anymore:

The project now includes an independent production server (`server.js`) that runs completely detached in the background on your Linux system. It will **not stop** when the AI assistant closes or when you close the terminal.

#### Commands:

```bash
# 1. Start the server permanently in the background:
./start.sh

# 2. Stop the server anytime:
./stop.sh

# 3. Check live server logs:
tail -f server.log
```

---

## 🛠️ 2. FULL CODE ACCESS & HOW TO MAKE ANY CHANGES

All files are organized in clean, human-readable TypeScript/React and JSON-like data stores:

```
/home/dinesh/Pavan/naruto/
├── src/
│   ├── data/                   <-- 🎯 ALL LORE, BOUNTIES, FIGHTS, AND STATS
│   │   ├── arcsData.ts         <-- 15 canon arcs, legendary fights, quotes, chapters
│   │   ├── bountiesData.ts     <-- Real wanted posters, berry values, photo notes
│   │   ├── charactersData.ts   <-- Straw Hats, combat ratings, devil fruits, quotes
│   │   ├── devilFruitsData.ts  <-- Paramecia, Zoan, Logia awakenings & attacks
│   │   ├── worldMapData.ts     <-- Grand Line map coordinates, hazards, Log Pose
│   │   └── timelineData.ts     <-- 8 voyage eras, canon badges, sailing ship
│   │
│   ├── components/             <-- 🎨 VISUAL COMPONENTS
│   │   ├── hero/               <-- Gear 5 Sun God Nika white form & form switcher
│   │   ├── arcs/               <-- Arc movie poster gallery & full-screen theater
│   │   ├── characters/         <-- Straw Hat Crew sanctuaries (Zoro, Sanji, Brook...)
│   │   ├── bounties/           <-- Realistic parchment wanted poster board
│   │   ├── fruits/             <-- 3D glowing Devil Fruit encyclopedia
│   │   ├── map/                <-- Interactive nautical sea chart
│   │   ├── timeline/           <-- Chronological voyage scrubber with Sunny
│   │   ├── intro/              <-- Ocean scene 1 & Timeskip transition scene 2
│   │   ├── navigation/         <-- Floating glassmorphic HUD navbar & sound toggle
│   │   └── effects/            <-- Dynamic custom cursor & canvas particle engine
│   │
│   ├── audio/
│   │   └── soundEngine.ts      <-- Procedural Web Audio API sound synthesizer
│   ├── App.tsx                 <-- Master routing controller (isolated view system)
│   ├── index.css               <-- Tailwind CSS utilities & custom anime glow classes
│   └── main.tsx                <-- React application entry point
│
├── server.js                   <-- Standalone persistent production server (0.0.0.0:3000)
├── start.sh                    <-- Background startup daemon
├── stop.sh                     <-- Shutdown script
└── package.json                <-- Dependencies & scripts
```

---

## 📝 3. QUICK EXAMPLES OF CHANGES YOU CAN MAKE

### A. To Edit or Add a Bounty / Wanted Poster:

Open `src/data/bountiesData.ts`:

```ts
{
  id: 'luffy-bounty',
  name: 'MONKEY D. LUFFY',
  bounty: 3000000000,
  bountyFormatted: '3,000,000,000',
  imageUrl: 'your-custom-image-url-or-local-path.jpg',
  marineNote: 'Your custom text here...',
}
```

### B. To Add or Edit a Legendary Fight Scene:

Open `src/data/arcsData.ts` and locate the arc's `fights` array:

```ts
{
  id: 'custom-fight',
  combatants: 'Zoro vs. Mihawk',
  title: 'The World’s Greatest Swordsman',
  quote: 'I will never lose again!',
  speaker: 'Roronoa Zoro',
  description: 'Your fight description...',
  imageUrl: 'https://...'
}
```

### C. To Rebuild After Making Any Code Changes:

Whenever you edit code files, just run:

```bash
npm run build
```

And the background server at `http://192.168.0.25:3000` will immediately update with your changes!

---

## 🚀 4. SUMMARY OF COMMANDS

| Command         | What it does                                                                  |
| --------------- | ----------------------------------------------------------------------------- |
| `./start.sh`    | Starts the server permanently in the background at `http://192.168.0.25:3000` |
| `./stop.sh`     | Stops the server                                                              |
| `npm run build` | Compiles your code edits into the production `dist/` folder                   |
| `npm run dev`   | Runs the hot-reloading development server for instant live editing            |
