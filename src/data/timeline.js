export const timelineEras = [
  {
    id: "ancient-world",
    era: "Ancient World",
    title: "Before the Iron Throne",
    period: "Age of Heroes and older legends",
    location: "Westeros and the eastern continent",
    keyFigures: ["First kings", "forest peoples", "early dragonlords"],
    significance:
      "The archive begins with kingdoms, oral histories, and powers older than written law.",
    tone: "Mythic, distant, half-remembered",
    summary:
      "Before one crown claimed the realm, scattered powers rose from stone, oath, bloodline, and belief.",
    featured: true,
  },
  {
    id: "valyria-doom",
    era: "Valyria",
    title: "The Doom and the End of Dragonlord Empire",
    period: "Centuries before the conquest",
    location: "Valyrian Freehold and the smoking lands",
    keyFigures: ["Valyrian dragonlords", "surviving exiles"],
    significance:
      "The collapse of Valyria turns dragonfire from imperial certainty into a surviving inheritance.",
    tone: "Awe, ruin, and dread",
    summary:
      "An empire of fire vanishes into catastrophe, leaving behind fragments powerful enough to reshape the world.",
    featured: true,
  },
  {
    id: "dragonstone",
    era: "Dragonstone",
    title: "The Island Watch",
    period: "Before Aegon's Conquest",
    location: "Dragonstone",
    keyFigures: ["House Targaryen", "dragonkeepers", "island retainers"],
    significance:
      "A remote fortress becomes the bridge between a ruined empire and a future throne.",
    tone: "Watchful, volcanic, patient",
    summary:
      "On a black-stone island, the last great dragonlord house waits between exile and ambition.",
    featured: false,
  },
  {
    id: "aegons-conquest",
    era: "Conquest",
    title: "Aegon Raises a Realm",
    period: "The beginning of Targaryen rule",
    location: "The Seven Kingdoms",
    keyFigures: ["Aegon", "Visenya", "Rhaenys", "the great houses"],
    significance:
      "Separate kingdoms are forced into a single political order under dragon-backed monarchy.",
    tone: "Imperial, decisive, blazing",
    summary:
      "Crowns bend, fields burn, and a new capital begins as an idea carried on wings.",
    featured: true,
    chapterHref: "#aegons-conquest-chapter",
    chapterLabel: "Enter chapter",
  },
  {
    id: "targaryen-dynasty",
    era: "Dynasty",
    title: "The Long Targaryen Century",
    period: "Generations after the conquest",
    location: "King's Landing, Dragonstone, and the wider realm",
    keyFigures: ["Targaryen rulers", "small councils", "great houses"],
    significance:
      "The dynasty turns conquest into ceremony, law, succession crisis, and court memory.",
    tone: "Regal, fragile, ceremonial",
    summary:
      "The Iron Throne becomes an institution, but every succession keeps a blade hidden beneath the velvet.",
    featured: false,
  },
  {
    id: "dance-dragons",
    era: "Civil War",
    title: "The Dance of the Dragons",
    period: "Targaryen succession war",
    location: "Dragonstone, King's Landing, and contested skies",
    keyFigures: ["Rhaenyra", "Aegon II", "Daemon", "dragonriders"],
    significance:
      "A dynastic claim becomes a realm-breaking war that consumes dragons, heirs, and trust.",
    tone: "Tragic, intimate, catastrophic",
    summary:
      "The house of the dragon turns inward, and the realm learns that civil war can make monsters of inheritance.",
    featured: true,
  },
  {
    id: "fall-of-dragons",
    era: "Aftermath",
    title: "The Silence After Wings",
    period: "After the Dance",
    location: "The royal court and dragonpits",
    keyFigures: ["Later Targaryen kings", "maesters", "court factions"],
    significance:
      "The loss of dragons changes royal power from living terror to contested symbolism.",
    tone: "Elegiac, diminished, haunted",
    summary:
      "The throne remains, but the shadow above it is smaller, colder, and easier to challenge.",
    featured: false,
  },
  {
    id: "roberts-rebellion",
    era: "Rebellion",
    title: "The Crown Breaks",
    period: "Late Targaryen rule",
    location: "The Stormlands, the Trident, and King's Landing",
    keyFigures: ["Robert", "Rhaegar", "Aerys II", "Ned Stark"],
    significance:
      "A rebellion transforms private grievance, political fracture, and royal instability into regime change.",
    tone: "Storm-lit, furious, irreversible",
    summary:
      "Old vows fail under the weight of rage, and the dragon crown passes into enemy hands.",
    featured: false,
  },
  {
    id: "five-kings",
    era: "War",
    title: "The War of the Five Kings",
    period: "After Robert's death",
    location: "The Riverlands, North, Westerlands, Stormlands, and capital",
    keyFigures: ["Robb", "Joffrey", "Stannis", "Renly", "Balon"],
    significance:
      "Multiple claims fracture the realm, revealing how quickly royal authority becomes regional survival.",
    tone: "Splintered, brutal, uncertain",
    summary:
      "The map becomes a wound as crowns multiply and every road carries rumor, hunger, and banners.",
    featured: true,
  },
  {
    id: "return-of-dragons",
    era: "Return",
    title: "Daenerys and the Living Flame",
    period: "Across the narrow sea",
    location: "Essos",
    keyFigures: ["Daenerys", "freed peoples", "young dragons"],
    significance:
      "Dragons return not as relics of conquest, but as living forces attached to exile, liberation, and danger.",
    tone: "Radiant, volatile, liberating",
    summary:
      "Far from the Iron Throne, a lost dynasty finds fire again and changes the possible future of every crown.",
    featured: false,
  },
  {
    id: "north-wall-threat",
    era: "The North",
    title: "The Wall and the Old Cold",
    period: "Parallel to the wars of the south",
    location: "The North and the Wall",
    keyFigures: ["northern houses", "the Watch", "ancient threats"],
    significance:
      "While courts contest power, older dangers gather beyond the political map.",
    tone: "Severe, ancient, foreboding",
    summary:
      "The archive ends its first pass where history becomes warning: the realm remembers winter too late.",
    featured: false,
  },
];

export const featuredTimeline = timelineEras.filter((era) => era.featured);
