const ContactMarkup = `<div class="container">
          <div class="section-header reveal">
            <div class="header-title-group">
              <span class="eyebrow">Contact</span>
              <h2>Have questions about certifications or events? Drop us a line.</h2>
            </div>
          </div>

          <div class="contact-layout">
            <aside class="glass-card contact-card reveal">
              <h3>Visit our Cloud Lab</h3>
              <p>We welcome students from every branch and year. No prior AWS experience required, just curiosity and
                consistency.</p>
              <ul class="contact-list">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M4 4h16v16H4z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg><span><strong>Email</strong><a
                      href="mailto:awsclub@ljiet.edu.in">awsclub@ljiet.edu.in</a></span></li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg><span><strong>Campus</strong>LJ University Campus, Block B, Lab 302</span></li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.58 2.6a2 2 0 0 1-.45 2.11L8 9.67a16 16 0 0 0 6.33 6.33l1.24-1.24a2 2 0 0 1 2.11-.45c.83.26 1.7.46 2.6.58A2 2 0 0 1 22 16.92Z" />
                  </svg><span><strong>Office Hours</strong>Wednesdays, 4:00 PM - 5:30 PM</span></li>
              </ul>
            </aside>

            <form class="glass-card contact-card contact-form reveal">
              <div class="form-row">
                <div class="field">
                  <label for="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" autocomplete="name">
                </div>
                <div class="field">
                  <label for="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" autocomplete="email">
                </div>
              </div>
              <div class="field">
                <label for="interest">Interest</label>
                <input id="interest" name="interest" type="text" placeholder="Cloud, DevOps, AI/ML, Security, Web">
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us what you want to build or learn."></textarea>
              </div>
              <button class="btn btn-primary" type="submit">Send Message</button>
            </form>
          </div>
        </div>`;

export default function Contact() {
  return (
    <section
      className="section"
      id="contact"
      dangerouslySetInnerHTML={{ __html: ContactMarkup }}
    />
  );
}
