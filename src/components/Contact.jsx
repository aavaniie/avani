import '../styles/Contact.css'

function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact-inner">
        <div>
          <div className="section-tag">05 / contact</div>
          <h1 className="contact-title">
            Let's build
            <br />
            something
            <br />
            <span className="hl">amazing.</span>
          </h1>
          <p className="contact-sub">
            Currently open to Frontend Developer and React Developer opportunities. My inbox is
            basically an open tab, waiting.
          </p>
          <div className="social-row">
            <a href="#" className="social-pill">GitHub ↗</a>
            <a href="#" className="social-pill">LinkedIn ↗</a>
          </div>
        </div>

        <div className="browser contact-window">
          <div className="browser-bar">
            <div className="browser-dots"><span></span><span></span><span></span></div>
            <div className="browser-url">mailto:avanimkp@gmail.com</div>
          </div>
          <div className="browser-body">
            <div className="contact-row">
              <div className="contact-icon">
                <svg className="icon" viewBox="0 0 24 24">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="m3 6 9 7 9-7" />
                </svg>
              </div>
              <a href="mailto:avanimkp@gmail.com">avanimkp@gmail.com</a>
            </div>
            <div className="contact-row">
              <div className="contact-icon">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2.2Z" />
                </svg>
              </div>
              <a href="tel:+919847321012">+91 98473 21012</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
