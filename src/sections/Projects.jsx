import './Projects.css'

/* ================================================
   PROJECTS - Certificaciones y Proyectos
   ================================================*/

const projects = [
  {
    title: 'Café de Barrio',
    desc: 'Aplicación web para gestión de pedidos de una cafetería, con sistema de autenticación de usuarios.',
    tags: ['React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    liveUrl: 'https://cafedebarrio.vercel.app/login',
    githubUrl: 'https://github.com/ixjoan/cafe-de-barrio',
  },
  {
    title: 'TechStore',
    desc: 'Mini e-commerce con backend en Java y frontend en TypeScript. Proyecto en desarrollo, próximo a desplegar.',
    tags: ['Java', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80',
    githubUrl: 'https://github.com/ixjoan/techstore',
  },
  {
    title: 'Ti Corporación Perú',
    desc: 'Sitio web corporativo para empresa de climatización en Trujillo, con catálogo de servicios y formulario de contacto.',
    tags: ['WordPress', 'SEO'],
    image: 'https://camaralalibertad.org.pe/directorio/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-22-at-11.28.09-AM-2-ti-corporacion.jpeg',
    liveUrl: 'https://ticorperu.net/',
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
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" className="project-card__btn">
                      <span className="material-symbols-outlined">open_in_new</span>
                      Ver demo
                    </a>
                  )}
                  {p.githubUrl && p.githubUrl !== '#' && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className="project-card__btn project-card__btn--secondary">
                      <span className="material-symbols-outlined">code</span>
                      Código
                    </a>
                  )}
                  {!p.liveUrl && p.githubUrl === '#' && (
                    <span className="project-card__btn project-card__btn--secondary">
                      Próximamente
                    </span>
                  )}
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