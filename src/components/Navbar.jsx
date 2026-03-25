import { useState, useEffect } from 'react'
import './Navbar.css'

/* ================================================
   NAVBAR - Menú de navegación sticky
   ================================================
   Para personalizar:
   - Cambia "Tu Nombre" por tu nombre real
   - Cambia los links del nav si añades más secciones
   ================================================ */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'Sobre Mí' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">
            <span className="material-symbols-outlined">code</span>
          </span>
          {/* 👇 CAMBIA ESTO POR TU NOMBRE */}
          <span className="navbar__logo-text">Joan Montero</span>
        </a>

        {/* Links desktop */}
        <nav className="navbar__links">
          {links.map(link => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón menú mobile */}
        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <div className="navbar__mobile">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
