import { useEffect, useState } from "react";
import aegonsConquestHero from "../assets/aegons-conquest-hero-aegon-visenya-rhaenys.png";
import archiveMap from "../assets/archive-map.svg";

export default function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const syncScrollState = () => {
      setHasScrolled(window.scrollY > 32);
    };

    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncScrollState);
    };
  }, []);

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
      <img
        className="hero__map-watermark"
        src={archiveMap}
        alt=""
        aria-hidden="true"
      />
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
      <a
        className={`hero__scroll-indicator${
          hasScrolled ? " hero__scroll-indicator--hidden" : ""
        }`}
        href="#chronicle"
        aria-label="Scroll to the chronicle"
      />
    </section>
  );
}
