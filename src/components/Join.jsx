const JoinMarkup = `<div class="container">
          <div class="join-panel reveal">
            <div class="join-content">
              <div>
                <span class="eyebrow">Join community</span>
                <h2>Enter the next cohort with a project, a squad, and a standard.</h2>
                <p>Register to access shared cloud sandboxes, receive peer feedback, join study cohorts, and build work
                  you can talk about in interviews.</p>
                <div class="join-meta">
                  <span class="meta-item"><span class="meta-key">AWS Academy:</span> Authorized Partner</span>
                  <span class="meta-item"><span class="meta-key">Next Cohort:</span> Aug 2026</span>
                  <span class="meta-item"><span class="meta-key">Exam Focus:</span> AWS Certified Cloud
                    Practitioner</span>
                </div>
              </div>
              <a class="btn btn-primary" href="#contact">
                Become a Member
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>`;

export default function Join() {
  return (
    <section
      className="join"
      id="join"
      dangerouslySetInnerHTML={{ __html: JoinMarkup }}
    />
  );
}
