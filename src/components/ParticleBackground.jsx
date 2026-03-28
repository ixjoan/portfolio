import { useEffect, useRef } from 'react'
import './ParticleBackground.css'

export default function ParticleBackground() {
  const canvasRef = useRef(null)
  const cursorRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const cursorCanvas = cursorRef.current
    const ctx = canvas.getContext('2d')
    const cursorCtx = cursorCanvas.getContext('2d')
    let animId
    let particles = []
    let mouseTarget = { x: -100, y: -100 }
    let mouseSmooth = { x: -100, y: -100 }

    function init() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      cursorCanvas.width = window.innerWidth
      cursorCanvas.height = window.innerHeight
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
      cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height)

      const maxDist = 180
      const mouseDist = 150

      mouseSmooth.x += (mouseTarget.x - mouseSmooth.x) * 0.12
      mouseSmooth.y += (mouseTarget.y - mouseSmooth.y) * 0.12

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
          ctx.strokeStyle = `rgba(99, 102, 241, ${(1 - dm / mouseDist) * 0.8})`
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
            ctx.strokeStyle = `rgba(220, 230, 255, ${(1 - d / maxDist) * 0.2})`
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

      // Cursor en el canvas de encima
      if (window.innerWidth > 768) {
      cursorCtx.beginPath()
      cursorCtx.arc(mouseTarget.x, mouseTarget.y, 4, 0, Math.PI * 2)
      cursorCtx.fillStyle = 'rgba(99, 102, 241, 1)'
      cursorCtx.fill()

      cursorCtx.beginPath()
      cursorCtx.arc(mouseSmooth.x, mouseSmooth.y, 16, 0, Math.PI * 2)
      cursorCtx.strokeStyle = 'rgba(99, 102, 241, 0.5)'
      cursorCtx.lineWidth = 1.2
      cursorCtx.stroke()
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

  return (
    <>
      <canvas ref={canvasRef} className="particle-bg" />
      <canvas ref={cursorRef} className="cursor-bg" />
    </>
  )
}