const NavbarMarkup = `<nav class="nav-inner" aria-label="Primary navigation">
        <a class="brand" href="#home" aria-label="LJ University home">
          <img class="brand-logo" src="/images/lj.png" alt="LJ University logo">
        </a>

        <div class="nav-links" id="navLinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#domains">Domains</a>
          <a href="#events">Events</a>
          <a href="#team">Leadership Team</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div class="nav-actions">
          <div class="aws-status-pill">
            <span class="status-dot"></span>
            <span class="status-text">LJ INSTITUTE OF ENGINEERING AND TECHNOLOGY</span>
          </div>
          <a class="aws-logo-link" href="#home" aria-label="AWS Student Builder Group home">
            <img class="aws-logo" src="/images/AWS_LJ_LOGO.jpg.jpeg" alt="AWS Student Builder Group logo">
          </a>
          <button class="menu-toggle" id="menuToggle" type="button" aria-label="Open navigation menu"
            aria-expanded="false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>`;

export default function Navbar() {
  return (
    <header
      className="navbar"
      id="navbar"
      dangerouslySetInnerHTML={{ __html: NavbarMarkup }}
    />
  );
}
