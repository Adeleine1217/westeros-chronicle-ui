import { useEffect, useState } from "react";

const navLinks = [
  { href: "#chronicle", label: "Timeline", id: "chronicle" },
  { href: "#main-series", label: "Storyline", id: "main-series" },
  { href: "#characters", label: "Characters", id: "characters" },
  { href: "#eras", label: "Eras", id: "eras" },
  { href: "#houses", label: "Houses", id: "houses" },
];

export default function Layout({ children }) {
  const [activeSection, setActiveSection] = useState(navLinks[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0.12, 0.28, 0.45],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <header
        className={`site-header${isMenuOpen ? " site-header--menu-open" : ""}`}
        aria-label="Main navigation"
      >
        <a className="brand-mark" href="#top" aria-label="Westeros Chronicle home">
          <span className="brand-mark__sigil" aria-hidden="true">
            WC
          </span>
          <span>
            <strong>Westeros Chronicle</strong>
            <small>Interactive history archive</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="archive-nav"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav
          className="header-nav"
          id="archive-nav"
          aria-label="Archive sections"
        >
          {navLinks.map((link) => (
            <a
              className={activeSection === link.id ? "is-active" : ""}
              href={link.href}
              aria-current={activeSection === link.id ? "page" : undefined}
              onClick={closeMenu}
              key={link.id}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <span className="site-footer__diamond" aria-hidden="true" />
        <div className="site-footer__inner">
          <p>
            Unofficial fan-made storytelling project for educational and
            portfolio use. No copyrighted book text is reproduced.
          </p>

          <div className="site-footer__links">
            <a
              className="creator-link footer-creator"
              href="https://adeleine1217.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              Created by Adeleine Wang
            </a>

            <nav className="footer-nav" aria-label="Footer sections">
              {navLinks.map((link) => (
                <a href={link.href} key={link.id}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
