import '../styles/About.css'

function About() {
  return (
    <section className="alt" id="about">
      <div className="wrap">
        <div className="section-tag">01 / about</div>
        <h2 className="section-title">
          I don't just build websites, I build <span className="hl">experiences.</span>
        </h2>

        <div className="about-grid">
          <p className="about-lead">
            My background in production web development taught me how to translate designs into
            real products. Today I'm focused on mastering React and modern frontend development,
            while continuously learning Next.js and building polished web applications.
          </p>

          <div className="bring-list">
            <div className="bring-card">
              <div className="bring-icon">
                <svg className="icon" viewBox="0 0 24 24">
                  <polyline points="8 6 2 12 8 18" />
                  <polyline points="16 6 22 12 16 18" />
                </svg>
              </div>
              <div>
                <div className="bring-title">Frontend Craft</div>
                <div className="bring-text">
                  Responsive interfaces built with HTML, CSS, JavaScript and React. Clean code,
                  reusable components and attention to detail.
                </div>
              </div>
            </div>

            <div className="bring-card">
              <div className="bring-icon">
                <svg className="icon" viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 11 14 10 22 21 10 13 10 13 2" />
                </svg>
              </div>
              <div>
                <div className="bring-title">Performance First</div>
                <div className="bring-text">
                  Fast loading pages, optimized layouts and smooth interactions that make websites
                  feel effortless.
                </div>
              </div>
            </div>

            <div className="bring-card">
              <div className="bring-icon">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M21 12a9 9 0 1 1-3-6.7" />
                  <polyline points="21 3 21 9 15 9" />
                </svg>
              </div>
              <div>
                <div className="bring-title">Always Learning</div>
                <div className="bring-text">
                  Currently diving deeper into React, Next.js, APIs and modern frontend
                  architecture through personal projects and real-world development.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
