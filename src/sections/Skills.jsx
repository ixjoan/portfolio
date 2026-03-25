import './Skills.css'

/* ================================================
   SKILLS - Stack Tecnológico
   ================================================
   Para personalizar:
   - Agrega o elimina skills en el array
   - Cambia el color de cada una (color Tailwind-like)
   - Cambia el icono (Material Symbols)
   ================================================ */

const skills = [
  // 👇 EDITA ESTA LISTA CON TUS TECNOLOGÍAS
  { name: 'Java',        icon: 'coffee',       color: '#f97316' },
  { name: 'Spring Boot', icon: 'eco',          color: '#22c55e' },
  { name: 'SQL Server',  icon: 'database',     color: '#3b82f6' },
  { name: 'JavaScript',  icon: 'code_blocks',  color: '#eab308' },
  { name: 'Power BI',    icon: 'bar_chart',    color: '#60a5fa' },
  { name: 'Python',      icon: 'terminal',     color: '#818cf8' },
  { name: 'HTML & CSS',  icon: 'html',         color: '#f97316' },
  { name: 'Excel Avanz.',icon: 'table_chart',  color: '#4ade80' },
  // Puedes añadir más aquí:
  // { name: 'React', icon: 'hub', color: '#38bdf8' },
  // { name: 'Git',   icon: 'merge_type', color: '#fb923c' },
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
              <div
                className="skill-card__icon"
                style={{ color: skill.color, background: `${skill.color}18` }}
              >
                <span className="material-symbols-outlined">{skill.icon}</span>
              </div>
              <span className="skill-card__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
