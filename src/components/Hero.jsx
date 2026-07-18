import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            Frontend Developer · Open to work
          </div>

          <h1 className="hero-title">
            I build interfaces the <span className="accent-indigo">internet</span> actually enjoys{' '}
            <span className="accent-pink">using.</span>
          </h1>

          <p className="hero-sub">
Frontend developer with 3+ years of experience building responsive, user-focused websites using HTML, CSS, JavaScript, React, and WordPress. Currently expanding my expertise in Next.js, Django, REST APIs, and SQL to build fast, scalable, and modern web applicatio
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">View my work →</a>
            <a href="#contact" className="btn btn-link">Let's talk →</a>
          </div>

          <div className="stat-strip">
            <div className="stat-item">
              <span className="stat-num">4+</span>
              <span className="stat-label">Years building</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">3</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">3+</span>
              <span className="stat-label">Live products</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <svg className="deco deco-planet" width="52" height="52" viewBox="0 0 52 52" fill="none">
            <circle cx="26" cy="26" r="12" fill="var(--pink)" />
            <ellipse
              cx="26"
              cy="26"
              rx="24"
              ry="7"
              transform="rotate(-18 26 26)"
              stroke="var(--yellow)"
              strokeWidth="2.5"
            />
          </svg>

          <svg className="deco deco-coffee" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 14h18v11a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8V14Z" stroke="var(--mint)" strokeWidth="2" />
            <path d="M26 17h3a4 4 0 0 1 0 8h-3" stroke="var(--mint)" strokeWidth="2" />
            <path
              d="M13 10c0-2 2-2 2-4M18 10c0-2 2-2 2-4"
              stroke="var(--mint)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <svg className="deco deco-star" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 2 L18 12 L28 15 L18 18 L15 28 L12 18 L2 15 L12 12 Z" fill="var(--yellow)" />
          </svg>

          <div className="deco deco-tag">
            <svg className="icon" style={{ width: '14px', height: '14px', stroke: '#fff' }} viewBox="0 0 24 24">
              <polyline points="8 6 2 12 8 18" />
              <polyline points="16 6 22 12 16 18" />
            </svg>
            Hire me
          </div>

          <div className="browser code-window">
            <div className="browser-bar">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <div className="browser-url">avani.dev/hero.jsx</div>
            </div>
            <div className="browser-body">
              <div className="code-line"><span className="c">// what I actually do</span></div>
              <div className="code-line"><span className="k">const</span> avani = {'{'}</div>
              <div className="code-line">&nbsp;&nbsp;role: <span className="s">'Frontend Developer'</span>,</div>
              <div className="code-line">&nbsp;&nbsp;stack: [<span className="s">'React'</span>, <span className="s">'JS'</span>],</div>
              <div className="code-line">&nbsp;&nbsp;status: <span className="s">'shipping'</span></div>
              <div className="code-line">{'}'}<span className="cursor-blink"></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
