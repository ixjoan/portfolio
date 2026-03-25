import './Skills.css'

const skills = [
  { name: 'Java',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'React',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'SQL Server',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
  { name: 'Python',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Power BI',    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
  { name: 'JavaScript',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Git',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__header">
          <h2 className="section-title">Stack Tecnológico</h2>
          <div className="section-divider" />
          <p className="skills__subtitle">
            Dominio de herramientas para el desarrollo end-to-end y análisis de datos.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card">
              <div className="skill-card__icon">
                <img src={skill.logo} alt={skill.name} width="40" height="40" />
              </div>
              <span className="skill-card__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}