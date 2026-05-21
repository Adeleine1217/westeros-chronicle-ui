export default function HouseCard({ house }) {
  return (
    <article className={`house-card house-card--${house.accent}`}>
      <div className="house-card__crest" aria-hidden="true">
        {house.name
          .replace("House ", "")
          .slice(0, 1)}
      </div>
      <div>
        <p>{house.seat}</p>
        <h3>{house.name}</h3>
        <span>{house.archiveNote}</span>
      </div>
    </article>
  );
}
