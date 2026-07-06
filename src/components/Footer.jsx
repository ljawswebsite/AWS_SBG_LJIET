const FooterMarkup = `<div class="container">
        <div class="footer-inner">
          <div>
            <a class="brand" href="#home" aria-label="AWS Student Builder Group home">
              <span class="brand-mark" aria-hidden="true"
                style="padding: 4px; display: inline-flex; align-items: center; justify-content: center;">
                <img src="/images/AWS_LJ_LOGO.jpg.jpeg" alt="AWS Logo"
                  style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px;">
              </span>
              <span class="brand-text"><span>AWS Student Builder Group</span><span>LJIET Chapter</span></span>
            </a>
            <p>A student developer community at LJ Institute of Engineering & Technology, focused on practical training,
              cloud certifications, and hands-on software building.</p>
          </div>
          <div>
            <h3>Club</h3>
            <ul class="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#domains">Domains</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>
          <div>
            <h3>Programs</h3>
            <ul class="footer-links">
              <li><a href="#events">Events</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#join">Join</a></li>
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <ul class="footer-links">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="https://github.com/ljawswebsite/AWS_SBG_LJIET" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; 2026 AWS Student Builder Group. All rights reserved.</span>
          <span>Built for students, faculty, sponsors, and future cloud leaders.</span>
        </div>
      </div>`;

export default function Footer() {
  return (
    <footer
      className="footer"
      dangerouslySetInnerHTML={{ __html: FooterMarkup }}
    />
  );
}
