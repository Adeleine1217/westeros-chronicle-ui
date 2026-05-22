export default function TimelineCard({ era, index, isActive, onOpen, panelRef }) {
  const figures = era.keyFigures.join(", ");
  const panelId = `timeline-panel-${era.id}`;
  const detailsId = `timeline-details-${era.id}`;

  return (
    <article
      className={`timeline-card${isActive ? " timeline-card--active" : ""}`}
      id={panelId}
      ref={panelRef}
      aria-labelledby={`${panelId}-title`}
    >
      <div className="timeline-card__marker" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div
        className="timeline-card__body"
        onClick={isActive ? undefined : onOpen}
      >
        <div className="timeline-card__kicker">
          <span>{era.era}</span>
          <span>{era.period}</span>
        </div>

        <div className="timeline-card__title-row">
          <h3 id={`${panelId}-title`}>{era.title}</h3>
          <button
            className="timeline-card__toggle"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onOpen();
            }}
            aria-controls={detailsId}
            aria-expanded={isActive}
            aria-label={isActive ? `${era.title} is open` : `Open ${era.title}`}
          >
            <span aria-hidden="true">{isActive ? "*" : "+"}</span>
          </button>
        </div>

        <p className="timeline-card__summary">{era.summary}</p>

        {isActive ? (
          <div className="timeline-card__reveal" id={detailsId}>
            <dl className="timeline-card__details">
              <div>
                <dt>Location</dt>
                <dd>{era.location}</dd>
              </div>
              <div>
                <dt>Key figures</dt>
                <dd>{figures}</dd>
              </div>
              <div>
                <dt>Historical significance</dt>
                <dd>{era.significance}</dd>
              </div>
              <div>
                <dt>Emotional tone</dt>
                <dd>{era.tone}</dd>
              </div>
            </dl>

            {era.chapterHref ? (
              <a className="timeline-card__link" href={era.chapterHref}>
                {era.chapterLabel}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
