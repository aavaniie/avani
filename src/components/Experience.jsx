import '../styles/Experience.css'

function Experience() {
  return (
    <section className="alt" id="experience">
      <div className="wrap">
        <div className="section-tag">03 / experience</div>
        <h2 className="section-title">
          Roles that built the <span className="hl">resume.</span>
        </h2>

        <div className="timeline">
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="browser tl-card">
              <div className="browser-bar">
                <div className="browser-dots"><span></span><span></span><span></span></div>
                <div className="browser-url">softroniics.com</div>
              </div>
              <div className="browser-body">
                <div className="tl-role">Python Developer Intern</div>
                <div className="tl-org">Softroniics</div>
                <div className="tl-desc">
                  Building backend fundamentals with Django, SQL and REST APIs while integrating
                  modern frontend workflows.
                </div>
                <div className="tl-date">Sep 2025 — Present</div>
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="browser tl-card">
              <div className="browser-bar">
                <div className="browser-dots"><span></span><span></span><span></span></div>
                <div className="browser-url">hapxdigital.com</div>
              </div>
              <div className="browser-body">
                <div className="tl-role">Contract Web Developer</div>
                <div className="tl-org">Hapx Digital</div>
                <div className="tl-desc">
                  Developing and maintaining production websites with responsive layouts,
                  performance improvements and UI enhancements.
                </div>
                <div className="tl-date">Feb 2025 — Present</div>
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="browser tl-card">
              <div className="browser-bar">
                <div className="browser-dots"><span></span><span></span><span></span></div>
                <div className="browser-url">midnay.com</div>
              </div>
              <div className="browser-body">
                <div className="tl-role">Frontend Developer</div>
                <div className="tl-org">Midnay Tech Private Limited</div>
                <div className="tl-desc">
                  Built SEO-friendly responsive websites and transformed design mockups into
                  production-ready interfaces.
                </div>
                <div className="tl-date">Apr 2023 — Dec 2024</div>
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="browser tl-card">
              <div className="browser-bar">
                <div className="browser-dots"><span></span><span></span><span></span></div>
                <div className="browser-url">midnay.com</div>
              </div>
              <div className="browser-body">
                <div className="tl-role">Trainee</div>
                <div className="tl-org">Midnay Tech Private Limited</div>
                <div className="tl-desc">
                  Learned frontend fundamentals while contributing to live projects and improving
                  UI consistency.
                </div>
                <div className="tl-date">Dec 2022 — Apr 2023</div>
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="browser tl-card">
              <div className="browser-bar">
                <div className="browser-dots"><span></span><span></span><span></span></div>
                <div className="browser-url">tenzotech.com</div>
              </div>
              <div className="browser-body">
                <div className="tl-role">Junior Python Developer</div>
                <div className="tl-org">Tenzotech</div>
                <div className="tl-desc">
                  Built internal tools and strengthened programming fundamentals using Python.
                </div>
                <div className="tl-date">Jun 2022 — Dec 2022</div>
              </div>
            </div>
          </div>
        </div>

        {/* education lives here since it's really just the earliest stop on this same timeline */}
        <div className="edu-wrap">
          <div className="section-tag">education</div>
          <div className="browser edu-card">
            <div className="browser-bar">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <div className="browser-url">aputk.ac.in/transcript</div>
            </div>
            <div className="browser-body">
              <div className="edu-cap">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                  <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
                </svg>
              </div>
              <div>
                <div className="edu-degree">Bachelor of Technology</div>
                <div className="edu-field">Electronics &amp; Communication Engineering</div>
                <div className="edu-school">APJ Abdul Kalam Technological University</div>
                <div className="edu-date">2017 – 2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
