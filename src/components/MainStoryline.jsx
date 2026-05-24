import { useMemo, useState } from "react";

export default function MainStoryline({ books = [] }) {
  const [activeBookId, setActiveBookId] = useState(books[0]?.id);
  const activeBook = useMemo(
    () => books.find((book) => book.id === activeBookId) ?? books[0],
    [activeBookId, books]
  );

  if (!books.length || !activeBook) {
    return null;
  }

  return (
    <section
      className="series-section"
      id="main-series"
      aria-labelledby="main-series-title"
    >
      <div className="series-heading">
        <div>
          <p className="eyebrow">The main novels</p>
          <h2 id="main-series-title">The story after the crown breaks</h2>
        </div>
        <p>
          Five volumes trace the realm from court intrigue into civil war,
          aftermath, exile, reform, and the return of forces older than politics.
        </p>
      </div>

      <div className="series-shell">
        <div className="series-tabs" aria-label="Main series books">
          {books.map((book, index) => {
            const isActive = activeBook.id === book.id;

            return (
              <button
                className={`series-tab${isActive ? " series-tab--active" : ""}`}
                type="button"
                id={`series-tab-${book.id}`}
                aria-pressed={isActive}
                onClick={() => setActiveBookId(book.id)}
                key={book.id}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{book.title}</strong>
                <small>{book.mood}</small>
              </button>
            );
          })}
        </div>

        <article
          className="series-panel"
          id={`series-panel-${activeBook.id}`}
          aria-labelledby={`series-tab-${activeBook.id}`}
        >
          <div className="series-panel__header">
            <span>{activeBook.volume}</span>
            <h3>{activeBook.title}</h3>
            <p>{activeBook.span}</p>
          </div>

          <dl className="series-panel__meta">
            <div>
              <dt>Scale</dt>
              <dd>{activeBook.scale}</dd>
            </div>
            <div>
              <dt>Mood</dt>
              <dd>{activeBook.mood}</dd>
            </div>
          </dl>

          <p className="series-panel__summary">{activeBook.summary}</p>

          <div
            className="series-movement-grid"
            aria-label={`${activeBook.title} movements`}
          >
            {activeBook.movements.map((movement, index) => (
              <div className="series-movement" key={movement}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{movement}</p>
              </div>
            ))}
          </div>

          <div
            className="series-cast-strip"
            aria-label={`${activeBook.title} featured cast`}
          >
            {activeBook.characters.map((character) => (
              <span key={character}>{character}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
