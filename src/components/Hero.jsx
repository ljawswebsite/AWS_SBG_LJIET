const HeroMarkup = `<div class="hero-bg" aria-hidden="true"></div>
        <div class="container hero-grid">
          <div class="hero-copy reveal">
            <div class="hero-badge"><span class="badge-dot"></span> Active Cloud Learning Hub at LJIET</div>
            <h1>AWS Student Builder Group at <span class="text-gradient">LJ Institute of Engineering & Technology</span>
            </h1>
            <p class="lead">We are LJIET's official sandbox for cloud computing. We run hands-on lab sessions, weekend
              build sprints, collaborative AWS certification tracks, and serverless hackathons to turn raw student
              curiosity into shipped, production-ready cloud systems.</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#join">
                Join Community
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a class="btn btn-secondary" href="#events">
                Explore Events
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path
                    d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                </svg>
              </a>
            </div>

            <div class="stats-row" aria-label="Club highlights">
              <div class="stat-mini">
                <strong>95%+</strong>
                <span>members shipping hands-on projects</span>
              </div>
              <div class="stat-mini">
                <strong>12+</strong>
                <span>team-based cloud build sprints</span>
              </div>
              <div class="stat-mini">
                <strong>8wk</strong>
                <span>guided certification cohorts</span>
              </div>
            </div>
          </div>
        </div>`;

export default function Hero() {
  return (
    <section
      className="hero section"
      id="home"
      dangerouslySetInnerHTML={{ __html: HeroMarkup }}
    />
  );
}
