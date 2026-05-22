export default function HouseCard({ house }) {
  return (
    <details className={`house-card house-card--${house.accent}`}>
      <summary className="house-card__summary">
        <span className="house-card__crest" aria-hidden="true">
          {house.name
            .replace("House ", "")
            .slice(0, 1)}
        </span>
        <span className="house-card__intro">
          <span className="house-card__seat">{house.seat}</span>
          <span className="house-card__title">{house.name}</span>
          <span className="house-card__note">{house.archiveNote}</span>
        </span>
      </summary>

      <div className="house-card__body">
        <dl className="house-card__facts">
          <div>
            <dt>Region</dt>
            <dd>{house.region}</dd>
          </div>
          <div>
            <dt>Words</dt>
            <dd>{house.words}</dd>
          </div>
          <div>
            <dt>Sigil</dt>
            <dd>{house.sigil}</dd>
          </div>
        </dl>

        <p className="house-card__supplement">{house.supplement}</p>

        <ul
          className="house-card__themes"
          aria-label={`${house.name} archive themes`}
        >
          {house.themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </div>
    </details>
  );
}
