import '../styles/Projects.css'

function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-tag">04 / projects</div>
        <h2 className="section-title">
          Things I've <span className="hl">shipped.</span>
        </h2>

        <div className="proj-grid">
          <div className="browser proj-card">
            <div className="browser-bar">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <div className="browser-url">hapxdigital.com</div>
            </div>
            <div className="proj-thumb">Hapx Digital</div>
            <div className="proj-body">
              <div className="proj-title">Hapx Digital <br />Client Project - Hapx Digital</div>
              <div className="proj-desc">
                Created a responsive, SEO‑optimized website for a branding firm, ensuring fast load times, cross‑browser
compatibility, and a user‑friendly design using modern HTML, CSS, and JavaScript practices
              </div>
              <div className="proj-stack">WordPress · CSS . JavaScript . Gutenberg</div>
              <div className="proj-links">
                {/* <a href="#">Live Demo</a> */}
              </div>
            </div>
          </div>

          <div className="browser proj-card">
            <div className="browser-bar">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <div className="browser-url">frangulf.ae</div>
            </div>
            <div className="proj-thumb">FranGulf</div>
            <div className="proj-body">
              <div className="proj-title">FranGulf <br />Client Project - Hapx Digital</div>
              <div className="proj-desc">
                Designed and developed the official website for Frangulf, a UAE‑based law firm, focusing on modern, responsive design and clear usability across devices.
              </div>
              <div className="proj-stack">WordPress · CSS . JavaScript . Gutenberg</div>
              <div className="proj-links">
                {/* <a href="#">Live Demo</a> */}
              </div>
            </div>
          </div>

          <div className="browser proj-card">
            <div className="browser-bar">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <div className="browser-url">samuhikpahal.org</div>
            </div>
            <div className="proj-thumb">Samuhik Pahal</div>
            <div className="proj-body">
              <div className="proj-title">Portfolio Website <br />Client Project – Midnay Tech Private Limited</div>
              <div className="proj-desc">
                Developed a fully responsive, high‑performance website for Samuhik Pahal, ensuring fast page speed, reliable behavior, and a consistent experience across devices and browsers.

              </div>
              <div className="proj-stack">WordPress · CSS . JavaScript . Gutenberg</div>
              <div className="proj-links">
                {/* <a href="#">Live Demo</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
