import { useRef, useState } from "react";
import TimelineCard from "./TimelineCard.jsx";

export default function Timeline({ eras = [] }) {
  const [activeId, setActiveId] = useState(eras[0]?.id);
  const cardRefs = useRef({});

  const openEra = (eraId) => {
    setActiveId(eraId);

    window.setTimeout(() => {
      cardRefs.current[eraId]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 80);
  };

  if (!eras.length) {
    return null;
  }

  return (
    <section className="timeline-section" id="chronicle" aria-labelledby="timeline-title">
      <div className="section-heading">
        <p className="eyebrow">Preview timeline</p>
        <h2 id="timeline-title">A realm arranged by memory</h2>
        <p>
          The first prototype presents key historical movements as museum-like
          entries, ready to become filters, maps, and deeper reading paths.
        </p>
      </div>

      <div className="timeline-experience">
        <aside className="timeline-orbit" aria-label="Important events">
          <div className="timeline-orbit__plate">
            <span className="timeline-orbit__label">Chronicle gates</span>
            <div className="timeline-orbit__rings" aria-hidden="true" />

            <div className="timeline-orbit__buttons">
              {eras.map((era, index) => {
                const isActive = activeId === era.id;

                return (
                  <button
                    className={`timeline-orbit__button${
                      isActive ? " timeline-orbit__button--active" : ""
                    }`}
                    type="button"
                    onClick={() => openEra(era.id)}
                    aria-controls={`timeline-panel-${era.id}`}
                    aria-expanded={isActive}
                    key={era.id}
                  >
                    <span className="timeline-orbit__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="timeline-orbit__sigil" aria-hidden="true">
                      {era.era.charAt(0)}
                    </span>
                    <span className="timeline-orbit__name">{era.era}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div className="timeline-list">
          {eras.map((era, index) => (
            <TimelineCard
              key={era.id}
              era={era}
              index={index}
              isActive={activeId === era.id}
              onOpen={() => openEra(era.id)}
              panelRef={(node) => {
                if (node) {
                  cardRefs.current[era.id] = node;
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
