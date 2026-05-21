export default function ConquestChapter({ chapter }) {
  return (
    <section className="conquest-chapter" id={chapter.id} aria-labelledby="conquest-title">
      <div className="conquest-hero">
        <div className="conquest-hero__copy">
          <p className="eyebrow">Historical chapter 01</p>
          <h2 id="conquest-title">{chapter.chapterTitle}</h2>
          <p className="conquest-hero__subtitle">{chapter.subtitle}</p>
          <p className="conquest-hero__intro">{chapter.intro}</p>
        </div>
        <div className="conquest-hero__artifact" aria-hidden="true">
          <span>Dragonstone</span>
          <strong>Blackwater</strong>
          <i />
        </div>
      </div>

      <ChapterBlock label="Historical context" title="Before one realm">
        <div className="conquest-prose">
          {chapter.historicalContext.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </ChapterBlock>

      <ChapterBlock label="Key figures" title="Crowns, commanders, and witnesses">
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
      </ChapterBlock>

      <ChapterBlock label="Dragons" title="The argument in the sky">
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
      </ChapterBlock>

      <ChapterBlock label="Major locations" title="A map remade by fire">
        <div className="location-grid">
          {chapter.majorLocations.map((location) => (
            <article className="location-plaque" key={location.name}>
              <h4>{location.name}</h4>
              <p>{location.detail}</p>
            </article>
          ))}
        </div>
      </ChapterBlock>

      <ChapterBlock label="Timeline events" title="The conquest in motion">
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
      </ChapterBlock>

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

function ChapterBlock({ label, title, children }) {
  const titleId = `${label.toLowerCase().replaceAll(" ", "-")}-title`;

  return (
    <section className="conquest-block" aria-labelledby={titleId}>
      <div className="section-heading">
        <p className="eyebrow">{label}</p>
        <h3 id={titleId}>{title}</h3>
      </div>
      {children}
    </section>
  );
}
