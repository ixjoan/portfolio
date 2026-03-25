import { useState } from 'react'
import './Contact.css'

/* ================================================
   CONTACT - Footer + Contacto Directo
   ================================================
   Para personalizar:
   - Cambia tu número de WhatsApp
   - Cambia tu email
   - Cambia el año del copyright y tu nombre
   ================================================ */

export default function Contact() {
  const [copied, setCopied] = useState(false)

  // 👇 CAMBIA ESTE EMAIL POR EL TUYO
  const email = 'monterojoanx23@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="contact" id="contact">
      <div className="container">
        {/* Header */}
        <div className="contact__header">
          <h2 className="section-title">Contacto Directo</h2>
          <div className="section-divider" style={{ margin: '8px auto' }} />
          <p className="contact__subtitle">
            ¿Buscas un perfil técnico comprometido? Conectemos hoy mismo.
          </p>
        </div>

        {/* Cards */}
        <div className="contact__grid">
          {/* WhatsApp */}
          {/* 👇 CAMBIA EL NÚMERO DE WHATSAPP */}
          <a
            href="https://wa.me/51992899715"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-card__icon">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div className="contact-card__info">
              <h3>Teléfono</h3>
              {/* 👇 CAMBIA TU NÚMERO */}
              <p>+51 992 899 715</p>
            </div>
            <div className="contact-card__arrow">
              <span>Llamar ahora</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </a>

          {/* Email */}
          <div className="contact-card">
            <div className="contact-card__icon">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div className="contact-card__info">
              <h3>Email</h3>
              <p>{email}</p>
            </div>
            <button className="contact-card__copy" onClick={copyEmail}>
              <span className="material-symbols-outlined">
                {copied ? 'check' : 'content_copy'}
              </span>
              {copied ? '¡Copiado!' : 'Copiar Email'}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="contact__footer">
          {/* 👇 CAMBIA AÑO Y NOMBRE */}
          <p>© 2026 Joan Montero. Todos los derechos reservados.</p>
          <p className="contact__made-with">
            Hecho con React + Vite ⚡
          </p>
        </div>
      </div>
    </footer>
  )
}
