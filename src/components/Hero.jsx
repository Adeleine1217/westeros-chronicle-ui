import aegonsConquestHero from "../assets/aegons-conquest-hero-aegon-visenya-rhaenys.png";

export default function Hero() {
  return (
    <section
      className="hero arcane-frame arcane-frame--hero"
      id="top"
      data-arcane-image
    >
      <div className="hero__backdrop">
        <img
          className="hero__image"
          src={aegonsConquestHero}
          alt="Aegon Targaryen with Visenya and Rhaenys standing on a volcanic shore beneath a stormy sky in a dark fantasy scene."
        />
      </div>
      <div className="hero__content">
        <p className="eyebrow">A cinematic historical archive</p>
        <h1>Walk Through the History of Westeros</h1>
        <p className="hero__lede">
          An interactive, fan-made chronicle of crowns, dragons, betrayals,
          wars, and the long shadow of winter.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#chronicle">
            Enter the Chronicle
          </a>
          <a className="button button--quiet" href="#eras">
            Preview eras
          </a>
        </div>
      </div>
    </section>
  );
}
