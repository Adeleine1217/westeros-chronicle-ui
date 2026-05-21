export default function TimelineCard({ era, index }) {
  const figures = era.keyFigures.join(", ");

  return (
    <article className="timeline-card">
      <div className="timeline-card__marker" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="timeline-card__body">
        <div className="timeline-card__kicker">
          <span>{era.era}</span>
          <span>{era.period}</span>
        </div>
        <h3>{era.title}</h3>
        <p className="timeline-card__summary">{era.summary}</p>

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
      </div>
    </article>
  );
}
