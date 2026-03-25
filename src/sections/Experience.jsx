import './Experience.css'

/* ================================================
   EXPERIENCE - Línea de tiempo de Experiencia y Educación
   ================================================
   Para personalizar:
   - Agrega o edita items en el array
   - type: 'work' = punto morado | 'edu' = punto vacío
   - side: 'left' | 'right' controla en qué lado va la tarjeta
   ================================================ */

const timeline = [
  {
    side: 'left',
    type: 'work',
    date: 'Diciembre 2025 - Actualidad',
    title: 'Agencia Online Consigue Ventas',   // 👇 CAMBIA POR TU EMPRESA
    role: 'Web Developer',
    items: [
      'Desarrollo de interfaces modernas y responsivas.',
      'Integración de bases de datos y mejora de sistemas existentes.',
      'Despliegue técnico y documentación de procesos.',
    ],
  },
  {
    side: 'right',
    type: 'edu',
    date: 'Agosto 2025 - Presente',
    title: 'Universidad Peruana de Ciencias Aplicadas (UPC)', // 👇 TU UNIVERSIDAD
    role: 'Ingeniería de Sistemas - 7° Ciclo',
    desc: 'Continuidad académica enfocada en la gestión estratégica de TI y arquitecturas de software complejas.',
  },
  {
    side: 'left',
    type: 'edu',
    date: '2023 - Julio 2025',
    title: 'Instituto San Ignacio de Loyola (ISIL)',           // 👇 TU INSTITUTO
    role: 'Técnico en Sistemas de Información',
    desc: 'Graduado con sólidos conocimientos en ciclo de vida de desarrollo y soporte técnico avanzado.',
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experiencia &amp; Educación</h2>
        <div className="section-divider" />

        <div className="timeline">
          <div className="timeline__line" />

          {timeline.map((item, i) => (
            <div key={i} className={`timeline__item timeline__item--${item.side}`}>
              {/* Tarjeta */}
              <div className="timeline__card">
                <span className="timeline__date">{item.date}</span>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__role">{item.role}</p>
                {item.items && (
                  <ul className="timeline__list">
                    {item.items.map((li, j) => <li key={j}>{li}</li>)}
                  </ul>
                )}
                {item.desc && <p className="timeline__desc">{item.desc}</p>}
              </div>

              {/* Punto en la línea */}
              <div className={`timeline__dot timeline__dot--${item.type}`} />

              {/* Espacio del otro lado */}
              <div className="timeline__spacer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
