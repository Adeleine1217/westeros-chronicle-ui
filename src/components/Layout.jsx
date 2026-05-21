export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Main navigation">
        <a className="brand-mark" href="#top" aria-label="Westeros Chronicle home">
          <span className="brand-mark__sigil" aria-hidden="true">
            WC
          </span>
          <span>
            <strong>Westeros Chronicle</strong>
            <small>Interactive archive UI</small>
          </span>
        </a>

        <nav className="header-nav" aria-label="Archive sections">
          <a href="#chronicle">Timeline</a>
          <a href="#eras">Eras</a>
          <a href="#houses">Houses</a>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <p>
          Unofficial fan-made UI and storytelling project for educational and
          portfolio use. No copyrighted book text is reproduced.
        </p>
      </footer>
    </div>
  );
}
