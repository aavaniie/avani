import '../styles/Header.css'

// simple sticky nav, nothing needs state here so it stays a plain function
function Header() {
  return (
    <header>
      <nav className="wrap">
        <div className="logo">AM.</div>

        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="nav-cta">Say hello →</a>
      </nav>
    </header>
  )
}

export default Header
