const TeamMarkup = `<div class="container">
          <div class="section-header reveal">
            <div class="header-title-group">
              <span class="eyebrow">Team</span>
              <h2>Leadership Team</h2>
            </div>
          </div>

          <div class="team-grid">
            <article class="glass-card member-card captain-card reveal">
              <div class="avatar"><div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:3rem;font-weight:bold;">FC</div></div>
              <div><h3>Dr. Faculty Coordinator</h3><div class="member-role">Faculty Coordinator</div><p>Guides the chapter, mentors student leaders, and supports club initiatives and industry collaboration.</p></div>
            </article>
            <article class="glass-card member-card captain-card reveal">
              <div class="avatar"><div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:3rem;font-weight:bold;">AD</div></div>
              <div><h3>Anjali Dubey</h3><div class="member-role">President / Chapter Lead</div><p>Coordinates club strategy, events, technical initiatives, and student engagement.</p></div>
            </article>
            <div class="core-members">
              <article class="glass-card member-card reveal">
                <div class="avatar"><div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:2.5rem;font-weight:bold;">JS</div></div>
                <h3>John Snow</h3>
                <div class="member-role">Cloud Technical Director</div>
                <p>Designs the hands-on lab guides, leads build code reviews, and manages our shared developer sandbox.
                </p>
              </article>
              <article class="glass-card member-card reveal">
                <div class="avatar"><div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:2.5rem;font-weight:bold;">JS</div></div>
                <h3>John Snow</h3>
                <div class="member-role">Bootcamps & Event Operations</div>
                <p>Schedules workshops, coordinates venue bookings, and ensures every attendee has internet and lab
                  credentials.</p>
              </article>
              <article class="glass-card member-card reveal">
                <div class="avatar"><div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:2.5rem;font-weight:bold;">JS</div></div>
                <h3>John Snow</h3>
                <div class="member-role">Student Engagement & Support</div>
                <p>Manages student onboarding, tracks cohort progress, and connects builders into cooperative project
                  squads.</p>
              </article>
              <article class="glass-card member-card reveal">
                <div class="avatar"><div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:2.5rem;font-weight:bold;">JS</div></div>
                <h3>John Snow</h3>
                <div class="member-role">Visual Design & Copy</div>
                <p>Creates all posters, code walkthrough graphics, event invites, and keeps our digital assets polished.
                </p>
              </article>
              <article class="glass-card member-card reveal">
                <div class="avatar"><div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:2.5rem;font-weight:bold;">JS</div></div>
                <h3>John Snow</h3>
                <div class="member-role">Logistics & Partnerships</div>
                <p>Manages resource requests, event catering, certifications vouchers coordination, and college
                  permissions.</p>
              </article>
            </div>
          </div>
        </div>`;

export default function Team() {
  return (
    <section
      className="section"
      id="team"
      dangerouslySetInnerHTML={{ __html: TeamMarkup }}
    />
  );
}
