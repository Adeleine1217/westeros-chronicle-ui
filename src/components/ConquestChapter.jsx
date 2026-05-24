import { useRef, useState } from "react";
import conquestHeroImage from "../assets/images/aegons-conquest-hero-aegon-visenya-rhaenys.png";

const conquestBlocks = [
  {
    id: "before-one-realm",
    label: "Historical context",
    title: "Before one realm",
    summary:
      "The old map begins as divided crowns, inherited borders, and rival memories waiting to be remade.",
    sigil: "R",
  },
  {
    id: "crowns-commanders-witnesses",
    label: "Key figures",
    title: "Crowns, commanders, and witnesses",
    summary:
      "Open the ledger of rulers, riders, commanders, and survivors who give the conquest its human shape.",
    sigil: "C",
  },
  {
    id: "argument-in-the-sky",
    label: "Dragons",
    title: "The argument in the sky",
    summary:
      "Three living weapons turn royal ambition into something visible, terrifying, and nearly impossible to answer.",
    sigil: "D",
  },
  {
    id: "map-remade-by-fire",
    label: "Major locations",
    title: "A map remade by fire",
    summary:
      "The campaign becomes geography: islands, burned keeps, surrendering kingdoms, and roads toward a capital.",
    sigil: "M",
  },
  {
    id: "conquest-in-motion",
    label: "Timeline events",
    title: "The conquest in motion",
    summary:
      "Follow the campaign as a sequence of landings, burnings, refusals, and symbols forged into rule.",
    sigil: "T",
  },
];

export default function ConquestChapter({ chapter }) {
  const [activeBlockId, setActiveBlockId] = useState(conquestBlocks[0].id);
  const blockRefs = useRef({});

  const openBlock = (blockId) => {
    setActiveBlockId(blockId);

    window.setTimeout(() => {
      blockRefs.current[blockId]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 80);
  };

  const blockContent = {
    "before-one-realm": (
      <div className="conquest-prose">
        {chapter.historicalContext.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    ),
    "crowns-commanders-witnesses": (
      <div className="conquest-card-grid conquest-card-grid--figures">
        {chapter.keyFigures.map((figure) => (
          <article className="archive-plaque" key={figure.name}>
            <p>{figure.role}</p>
            <h4>{figure.name}</h4>
            <span>{figure.archiveNote}</span>
            <strong>{figure.significance}</strong>
          </article>
        ))}
      </div>
    ),
    "argument-in-the-sky": (
      <div className="dragon-ledger">
        {chapter.dragons.map((dragon) => (
          <article className="dragon-card" key={dragon.name}>
            <div className="dragon-card__mark" aria-hidden="true" />
            <div>
              <p>Rider: {dragon.rider}</p>
              <h4>{dragon.name}</h4>
              <span>{dragon.archiveNote}</span>
              <strong>{dragon.meaning}</strong>
            </div>
          </article>
        ))}
      </div>
    ),
    "map-remade-by-fire": (
      <div className="location-grid">
        {chapter.majorLocations.map((location) => (
          <article className="location-plaque" key={location.name}>
            <h4>{location.name}</h4>
            <p>{location.detail}</p>
          </article>
        ))}
      </div>
    ),
    "conquest-in-motion": (
      <div className="conquest-event-list">
        {chapter.timelineEvents.map((event, index) => (
          <article className="conquest-event" key={event.title}>
            <div className="conquest-event__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <p>{event.period}</p>
              <h4>{event.title}</h4>
              <span>{event.summary}</span>
            </div>
          </article>
        ))}
      </div>
    ),
  };

  return (
    <section className="conquest-chapter" id={chapter.id} aria-labelledby="conquest-title">
      <div className="conquest-hero">
        <div className="conquest-hero__copy">
          <p className="eyebrow">Historical chapter 01</p>
          <h2 id="conquest-title">{chapter.chapterTitle}</h2>
          <p className="conquest-hero__subtitle">{chapter.subtitle}</p>
          <p className="conquest-hero__intro">{chapter.intro}</p>
        </div>
        <figure
          className="conquest-hero__visual arcane-frame arcane-frame--chapter"
          data-arcane-image
        >
          <img
            src={conquestHeroImage}
            alt="Aegon Targaryen standing with Visenya and Rhaenys on a stormy shoreline, with dragons, banners, and soldiers behind them in a dark fantasy scene."
          />
        </figure>
      </div>

      <div className="conquest-archive">
        <aside className="conquest-archive-nav" aria-label="Aegon's Conquest sections">
          <div className="conquest-archive-nav__plate">
            <span className="conquest-archive-nav__label">Conquest gates</span>
            <div className="conquest-archive-nav__rings" aria-hidden="true" />
            <div className="conquest-archive-nav__buttons">
              {conquestBlocks.map((block, index) => {
                const isActive = activeBlockId === block.id;

                return (
                  <button
                    className={`conquest-archive-nav__button${
                      isActive ? " conquest-archive-nav__button--active" : ""
                    }`}
                    type="button"
                    onClick={() => openBlock(block.id)}
                    aria-controls={`conquest-block-${block.id}`}
                    aria-expanded={isActive}
                    key={block.id}
                  >
                    <span className="conquest-archive-nav__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="conquest-archive-nav__sigil" aria-hidden="true">
                      {block.sigil}
                    </span>
                    <span className="conquest-archive-nav__name">{block.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="conquest-block-stack">
          {conquestBlocks.map((block, index) => (
            <ChapterBlock
              key={block.id}
              block={block}
              index={index}
              isActive={activeBlockId === block.id}
              onOpen={() => openBlock(block.id)}
              panelRef={(node) => {
                if (node) {
                  blockRefs.current[block.id] = node;
                }
              }}
            >
              {blockContent[block.id]}
            </ChapterBlock>
          ))}
        </div>
      </div>

      <section className="political-panel" aria-labelledby="political-meaning-title">
        <div>
          <p className="eyebrow">Political meaning</p>
          <h3 id="political-meaning-title">{chapter.politicalMeaning.headline}</h3>
        </div>
        <div className="political-panel__copy">
          {chapter.politicalMeaning.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul>
            {chapter.politicalMeaning.principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tone-panel" aria-labelledby="tone-title">
        <div>
          <p className="eyebrow">Emotional tone</p>
          <h3 id="tone-title">How this chapter should feel</h3>
        </div>
        <div className="tone-list" aria-label="Chapter emotional tone">
          {chapter.emotionalTone.map((tone) => (
            <span key={tone}>{tone}</span>
          ))}
        </div>
      </section>
    </section>
  );
}

function ChapterBlock({ block, index, isActive, onOpen, panelRef, children }) {
  const titleId = `${block.id}-title`;
  const contentId = `${block.id}-content`;

  return (
    <section
      className={`conquest-block${isActive ? " conquest-block--active" : ""}`}
      id={`conquest-block-${block.id}`}
      aria-labelledby={titleId}
      ref={panelRef}
    >
      <div
        className="conquest-block__shell"
        onClick={isActive ? undefined : onOpen}
      >
        <div className="conquest-block__seal" aria-hidden="true">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{block.sigil}</strong>
        </div>

        <div className="conquest-block__main">
          <div className="conquest-block__heading">
            <div>
              <p className="eyebrow">{block.label}</p>
              <h3 id={titleId}>{block.title}</h3>
              <p className="conquest-block__summary">{block.summary}</p>
            </div>
            <button
              className="conquest-block__toggle"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onOpen();
              }}
              aria-controls={contentId}
              aria-expanded={isActive}
              aria-label={isActive ? `${block.title} is open` : `Open ${block.title}`}
            >
              <span aria-hidden="true">{isActive ? "*" : "+"}</span>
            </button>
          </div>

          {isActive ? (
            <div className="conquest-block__reveal" id={contentId}>
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
