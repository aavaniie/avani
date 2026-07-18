import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      {/* soft blurred blobs + dot grid sitting behind everything, fixed to the viewport */}
      <div className="bg-layer">
        <div className="blob blob-a"></div>
        <div className="blob blob-b"></div>
        <div className="blob blob-c"></div>
      </div>

      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
