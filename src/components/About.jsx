const AboutMarkup = `<div class="container">
          <div class="section-header reveal">
            <div class="header-title-group">
              <span class="eyebrow">ACTIVITIES & PURPOSE</span>
              <h2>Not a lecture hall. A hands-on cloud workspace.</h2>
            </div>
          </div>

          <div class="grid-3">
            <article class="glass-card about-card reveal">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M3 12h4l3 8 4-16 3 8h4" />
                </svg>
              </div>
              <h3>Build Sprints</h3>
              <p>We design and launch live serverless applications, containerized microservices, and secure databases
                during fast-paced coding sessions.</p>
            </article>
            <article class="glass-card about-card reveal">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Certification Tracks</h3>
              <p>Host structured study groups, practice test walkthroughs, and peer review sessions for the AWS
                Certified Cloud Practitioner exam.</p>
            </article>
            <article class="glass-card about-card reveal">
              <div class="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Hands-on Labs</h3>
              <p>Access guided sandboxes, code critiques, and collaborative project cohorts where you learn by coding,
                not just reading.</p>
            </article>
          </div>
        </div>`;

export default function About() {
  return (
    <section
      className="section"
      id="about"
      dangerouslySetInnerHTML={{ __html: AboutMarkup }}
    />
  );
}
