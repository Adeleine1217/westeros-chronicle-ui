import TimelineCard from "./TimelineCard.jsx";

export default function Timeline({ eras }) {
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

      <div className="timeline-list">
        {eras.map((era, index) => (
          <TimelineCard key={era.id} era={era} index={index} />
        ))}
      </div>
    </section>
  );
}
