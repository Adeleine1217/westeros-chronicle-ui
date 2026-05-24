import Layout from "../components/Layout.jsx";
import Hero from "../components/Hero.jsx";
import Timeline from "../components/Timeline.jsx";
import EraSection from "../components/EraSection.jsx";
import HouseCard from "../components/HouseCard.jsx";
import ConquestChapter from "../components/ConquestChapter.jsx";
import MainStoryline from "../components/MainStoryline.jsx";
import CharacterIntroductions from "../components/CharacterIntroductions.jsx";
import { aegonsConquestChapter } from "../data/aegonsConquest.js";
import { featuredTimeline, timelineEras } from "../data/timeline.js";
import { houses } from "../data/houses.js";
import {
  characterGroups,
  mainCharacters,
  seriesBooks,
} from "../data/mainSeries.js";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <section className="intro-section" aria-labelledby="concept-title">
        <div className="intro-section__copy">
          <p className="eyebrow">Project concept</p>
          <h2 id="concept-title">A royal archive for interactive storytelling</h2>
          <p>
            Before the Iron Throne, there were dragonlords, ruined empires, and
            kingdoms that had not yet learned to fear fire from the sky.
          </p>
        </div>
        <div className="intro-section__note">
          <span>Phase 1 prototype</span>
          <strong>{timelineEras.length} timeline entries</strong>
          <p>
            Built as a UX and content strategy case study, with original
            summaries and reusable data structures.
          </p>
        </div>
      </section>

      <Timeline eras={featuredTimeline} />
      <ConquestChapter chapter={aegonsConquestChapter} />
      <MainStoryline books={seriesBooks} />
      <CharacterIntroductions
        characters={mainCharacters}
        groups={characterGroups}
      />
      <EraSection eras={featuredTimeline.slice(0, 4)} />

      <section className="house-section" id="houses" aria-labelledby="houses-title">
        <div className="section-heading">
          <p className="eyebrow">Power and inheritance</p>
          <h2 id="houses-title">Houses as archive lenses</h2>
          <p>
            The great houses frame Westeros through bloodlines, regional power,
            inherited symbols, and the stories each seat teaches the realm to
            remember.
          </p>
        </div>

        <div className="house-grid">
          {houses.map((house) => (
            <HouseCard house={house} key={house.id} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
