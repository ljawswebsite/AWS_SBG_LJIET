const GalleryMarkup = `<div class="container">
          <div class="section-header reveal">
            <div class="header-title-group">
              <span class="eyebrow">Gallery</span>
              <h2>Snapshots from our labs, coding sessions, and demo days.</h2>
            </div>
          </div>

          <div class="gallery-grid reveal">
            <figure class="gallery-item" data-caption="Cloud architecture lab"><img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                alt="Students working on laptops in a technology workshop"></figure>
            <figure class="gallery-item" data-caption="Hackathon build sprint"><img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=760&q=80"
                alt="Team collaborating during a hackathon"></figure>
            <figure class="gallery-item" data-caption="Industry expert Q&A"><img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=640&q=80"
                alt="Speaker presenting to a group"></figure>
            <figure class="gallery-item" data-caption="Live code reviews"><img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=760&q=80"
                alt="Team reviewing code and deployment work"></figure>
            <figure class="gallery-item" data-caption="AWS Certification study circle"><img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=640&q=80"
                alt="Students studying together"></figure>
            <figure class="gallery-item" data-caption="Project demo day"><img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
                alt="Students presenting a technical project"></figure>
          </div>
        </div>`;

export default function Gallery() {
  return (
    <section
      className="section"
      id="gallery"
      dangerouslySetInnerHTML={{ __html: GalleryMarkup }}
    />
  );
}
