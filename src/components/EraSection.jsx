export default function EraSection({ eras }) {
  return (
    <section className="era-section" id="eras" aria-labelledby="eras-title">
      <div className="section-heading">
        <p className="eyebrow">Archive wings</p>
        <h2 id="eras-title">Featured eras for the first build</h2>
        <p>
          These entries establish the voice of the project: original, concise,
          and interpretive rather than encyclopedic.
        </p>
      </div>

      <div className="era-grid">
        {eras.map((era) => (
          <article className="era-panel" key={era.id}>
            <p>{era.era}</p>
            <h3>{era.title}</h3>
            <span>{era.tone}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
