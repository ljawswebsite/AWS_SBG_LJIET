const ImpactMarkup = `<div class="container">
          <div class="impact-band reveal">
            <div class="section-header">
              <div class="header-title-group">
                <span class="eyebrow">OUR NUMBERS</span>
                <h2>Action over words.</h2>
              </div>
            </div>
            <div class="impact-grid">
              <div class="impact-item"><span class="impact-number counter" data-target="520">0</span><span
                  class="impact-label">Active Builders</span></div>
              <div class="impact-item"><span class="impact-number counter" data-target="38">0</span><span
                  class="impact-label">Cloud Bootcamps</span></div>
              <div class="impact-item"><span class="impact-number counter" data-target="26">0</span><span
                  class="impact-label">Project Showcases</span></div>
              <div class="impact-item"><span class="impact-number counter" data-target="140">0</span><span
                  class="impact-label">AWS Practice Labs</span></div>
            </div>
          </div>
        </div>`;

export default function Impact() {
  return (
    <section
      className="section"
      id="impact"
      dangerouslySetInnerHTML={{ __html: ImpactMarkup }}
    />
  );
}
