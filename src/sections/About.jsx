import './About.css'

/* ================================================
   ABOUT - Sección "Sobre Mí"
   ================================================
   Para personalizar:
   - Cambia el texto de descripción
   - Cambia las 3 tarjetas de valores
   ================================================ */

export default function About() {
  const values = [
    {
      icon: 'rocket_launch',
      title: 'Proactividad',
      desc: 'Iniciativa constante en cada reto.',
    },
    {
      icon: 'dynamic_feed',
      title: 'Adaptabilidad',
      desc: 'Flexibilidad ante entornos cambiantes.',
    },
    {
      icon: 'groups',
      title: 'Trabajo en Equipo',
      desc: 'Sinergia para lograr objetivos comunes.',
    },
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <h2 className="section-title">Sobre mí</h2>
          <div className="section-divider" />
        </div>

        {/* 👇 CAMBIA ESTA DESCRIPCIÓN POR LA TUYA */}
        <p className="about__text">
          Profesional con sólida base técnica en sistemas y experiencia en entornos ágiles.
          Combino habilidades de desarrollo de software con un fuerte interés por el análisis
          de datos y la optimización de procesos. Mi objetivo es integrarme a un equipo donde
          pueda potenciar mis competencias tecnológicas con proactividad y rigor técnico.
        </p>

        {/* Tarjetas de valores */}
        <div className="about__values">
          {values.map(v => (
            <div key={v.title} className="about__value-card">
              <span className="material-symbols-outlined about__value-icon">{v.icon}</span>
              <h4 className="about__value-title">{v.title}</h4>
              <p className="about__value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}