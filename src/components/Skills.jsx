import '../styles/Skills.css'

// keeping this as a plain array so adding/removing a skill later is a one-line change
const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Responsive Design',
  'Git',
  'REST APIs',
  'WordPress',
  'Python',
  'Django',
  'SQL',
  'Next.js (Learning)',
]

function Skills() {
  // duplicating the list once so the marquee loops without a visible seam
  const marqueeSkills = [...skills, ...skills]

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-tag">02 / toolbox</div>
        <h2 className="section-title">
          Tabs I keep <span className="hl">open</span> all day.
        </h2>
      </div>

      <div className="marquee-outer wrap">
        <div className="marquee-track">
          {marqueeSkills.map((skill, index) => (
            <div className="tab-pill" key={`${skill}-${index}`}>
              <span className="tabdot"></span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
