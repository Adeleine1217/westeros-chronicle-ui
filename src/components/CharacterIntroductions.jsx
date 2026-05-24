import { useMemo, useState } from "react";

export default function CharacterIntroductions({
  characters = [],
  groups = [],
}) {
  const [activeGroup, setActiveGroup] = useState(groups[0]?.id ?? "all");
  const visibleCharacters = useMemo(() => {
    if (activeGroup === "all") {
      return characters;
    }

    return characters.filter((character) => character.group === activeGroup);
  }, [activeGroup, characters]);

  if (!characters.length) {
    return null;
  }

  return (
    <section
      className="character-section"
      id="characters"
      aria-labelledby="characters-title"
    >
      <div className="character-heading">
        <div>
          <p className="eyebrow">Character introductions</p>
          <h2 id="characters-title">People who carry the archive</h2>
        </div>
        <p>
          The central cast is organized by dramatic function: family lines,
          royal power, exile, and the witnesses who make the wars legible.
        </p>
      </div>

      <div className="character-toolbar" aria-label="Character groups">
        {groups.map((group) => {
          const isActive = activeGroup === group.id;

          return (
            <button
              className={`character-filter${
                isActive ? " character-filter--active" : ""
              }`}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveGroup(group.id)}
              key={group.id}
            >
              {group.label}
            </button>
          );
        })}
      </div>

      <div className="character-grid">
        {visibleCharacters.map((character) => (
          <article className="character-card" key={character.id}>
            <div className="character-card__mark" aria-hidden="true">
              {character.name
                .split(" ")
                .map((part) => part.slice(0, 1))
                .join("")
                .slice(0, 2)}
            </div>
            <div className="character-card__body">
              <p>{character.house}</p>
              <h3>{character.name}</h3>
              <span>{character.role}</span>
              <strong>{character.arc}</strong>
              <p className="character-card__intro">{character.introduction}</p>
              <div className="character-card__meta">
                <span>{character.entryPoint}</span>
                {character.traits.map((trait) => (
                  <span key={trait}>{trait}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
