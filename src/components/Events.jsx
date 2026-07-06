const EventsMarkup = `<div class="container">
          <div class="section-header reveal">
            <div class="header-title-group">
              <span class="eyebrow">Events</span>
              <h2>Featured club events, past AWS Ahmedabad community events, and major LJ University activities.</h2>
            </div>
          </div>

          <div class="events-grid">
            <article class="glass-card event-card reveal">
              <div class="event-image">
                <img src="/images/innogration.jpeg" alt="AWS Student Builder Group inauguration event">
              </div>
              <div class="event-content">
                <div class="event-top">
                  <span class="event-tag">Hands-on Launch</span>
                  <span class="event-date">TBA</span>
                </div>
                <h3>AWS Student Builder Group Inauguration</h3>
                <p>Meet the team, get your lab environment credentials, explore our upcoming learning paths, and deploy
                  your very first cloud asset in under 30 minutes.</p>
                <div class="event-meta"><span>Time: TBA</span><span>Venue: LJIET Main Auditorium</span></div>
              </div>
            </article>
            <article class="glass-card event-card reveal">
              <div class="event-image">
                <img src="/images/event2.jpeg" alt="AWS cloud fundamentals workshop">
              </div>
              <div class="event-content">
                <div class="event-top">
                  <span class="event-tag">Workshop Series</span>
                  <span class="event-date">Coming Soon</span>
                </div>
                <h3>AWS Ahmedabad Community Events</h3>
                <p>A structured, lab-driven introduction to cloud essentials: compute configurations, simple storage
                  buckets, and user access controls. Perfect for beginners.</p>
                <div class="event-meta"><span>Lab-driven</span><span>No prior experience needed</span></div>
              </div>
            </article>
            <article class="glass-card event-card reveal">
              <div class="event-image">
                <img src="/images/event3.jpeg" alt="Serverless project sprint event">
              </div>
              <div class="event-content">
                <div class="event-top">
                  <span class="event-tag">Hack Session</span>
                  <span class="event-date">Coming Soon</span>
                </div>
                <h3>LJ University Technical Events</h3>
                <p>Form squads of three, design a serverless feedback application using AWS Lambda, and deploy it to a
                  live public URL during the workshop.</p>
                <div class="event-meta"><span>Team challenge</span><span>Winner showcase</span></div>
              </div>
            </article>
          </div>
        </div>`;

export default function Events() {
  return (
    <section
      className="section"
      id="events"
      dangerouslySetInnerHTML={{ __html: EventsMarkup }}
    />
  );
}
