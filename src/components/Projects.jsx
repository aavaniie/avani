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
              <div className="browser-url">expense-tracker.dev</div>
            </div>
            <div className="proj-thumb">Expense Tracker</div>
            <div className="proj-body">
              <div className="proj-title">Expense Tracker</div>
              <div className="proj-desc">
                React CRUD application with add, edit, update, delete and total expense
                calculation.
              </div>
              <div className="proj-stack">React · JavaScript</div>
              <div className="proj-links">
                <a href="#">Live Demo</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          </div>

          <div className="browser proj-card">
            <div className="browser-bar">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <div className="browser-url">movie-search.dev</div>
            </div>
            <div className="proj-thumb">Movie Search</div>
            <div className="proj-body">
              <div className="proj-title">Movie Search</div>
              <div className="proj-desc">
                Search movies using a REST API with dynamic results and responsive UI.
              </div>
              <div className="proj-stack">React · API</div>
              <div className="proj-links">
                <a href="#">Live Demo</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          </div>

          <div className="browser proj-card">
            <div className="browser-bar">
              <div className="browser-dots"><span></span><span></span><span></span></div>
              <div className="browser-url">portfolio.avani.dev</div>
            </div>
            <div className="proj-thumb">Portfolio Site</div>
            <div className="proj-body">
              <div className="proj-title">Portfolio Website</div>
              <div className="proj-desc">
                A creative frontend portfolio built with React featuring smooth animations and
                custom illustrations.
              </div>
              <div className="proj-stack">React</div>
              <div className="proj-links">
                <a href="#">Live Demo</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
