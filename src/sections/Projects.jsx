import './Projects.css'

/* ================================================
   PROJECTS - Certificaciones y Proyectos
   ================================================*/

const projects = [
  {
    title: 'Análisis de Datos Empresariales',
    desc: 'Dashboard avanzado en Power BI para la visualización de KPIs críticos y optimización de toma de decisiones.',
    tags: ['Power BI', 'SQL Server'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    githubUrl: '#',
  },
  {
    title: 'Sistema de Gestión Interna',
    desc: 'Módulos administrativos con Spring Boot, priorizando la seguridad y eficiencia del flujo de datos.',
    tags: ['Java', 'Spring Boot'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80',
    githubUrl: '#',
  },
  {
    title: 'Optimización de Consultas SQL',
    desc: 'Refactorización de procedimientos almacenados para reducir tiempos de respuesta en reportes de alta demanda.',
    tags: ['MySQL', 'Optimization'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80',
    githubUrl: '#',
  },
]

const certifications = [
  { name: 'IT Essentials (2023)', org: 'CISCO' },
  { name: 'CCNA: Intro (2023)', org: 'CISCO' },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* Header con certs */}
        <div className="projects__header">
          <div>
            <h2 className="section-title">Proyectos &amp; Logros</h2>
            <div className="section-divider" />
          </div>
          <div className="projects__certs">
            {certifications.map(c => (
              <div key={c.name} className="cert-badge">
                <span className="material-symbols-outlined">verified</span>
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="projects__grid">
          {projects.map(p => (
            <div key={p.title} className="project-card">
              {/* Imagen */}
              <div className="project-card__img-wrapper">
                <img src={p.image} alt={p.title} className="project-card__img" />
                <div className="project-card__overlay">
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="project-card__btn">
                    <span className="material-symbols-outlined">open_in_new</span>
                    Ver proyecto
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__tags">
                  {p.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
