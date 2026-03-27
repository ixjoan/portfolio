import { useEffect, useRef } from 'react'
import './ParticleBackground.css'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    let mouseTarget = { x: 0, y: 0 }
    let mouseSmooth = { x: 0, y: 0 }

    function init() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      mouseTarget = { x: -100, y: -100 }
      mouseSmooth = { x: -100, y: -100 }
      particles = []
      const count = Math.floor((canvas.width * canvas.height) / 15000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 1,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const maxDist = 120
      const mouseDist = 150

      mouseSmooth.x += (mouseTarget.x - mouseSmooth.x) * 0.10
      mouseSmooth.y += (mouseTarget.y - mouseSmooth.y) * 0.10

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const dxm = p.x - mouseTarget.x
        const dym = p.y - mouseTarget.y
        const dm = Math.sqrt(dxm * dxm + dym * dym)

        if (dm < mouseDist) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(0, 200, 255, ${1 - dm / mouseDist})`
          ctx.lineWidth = 0.8
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouseTarget.x, mouseTarget.y)
          ctx.stroke()
        }

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < maxDist) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(180, 200, 255, ${(1 - d / maxDist) * 0.3})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(180, 200, 255, 0.6)'
        ctx.fill()
      }

      if (window.innerWidth > 768) {
        ctx.beginPath()
        ctx.arc(mouseTarget.x, mouseTarget.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 200, 255, 1)'
        ctx.fill()

        ctx.beginPath()
        ctx.arc(mouseSmooth.x, mouseSmooth.y, 16, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(0, 200, 255, 0.5)'
        ctx.lineWidth = 1.2
        ctx.stroke()
        }

      animId = requestAnimationFrame(draw)
    }
    
    const onMouseMove = (e) => {
      mouseTarget.x = e.clientX
      mouseTarget.y = e.clientY
    }

    const onResize = () => { init() }

    init()
    draw()
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-bg" />
}