import { useEffect } from 'react'

export function useStars() {
  useEffect(() => {
    const canvas = document.getElementById('stars-canvas')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let stars = []
    let animId

    function resize() {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }

    function initStars() {
      stars = []
      for (let i = 0; i < 200; i++) {
        stars.push({
          x:       Math.random() * canvas.width,
          y:       Math.random() * canvas.height,
          r:       Math.random() * 1.2 + 0.15,
          a:       Math.random() * 0.7 + 0.1,
          speed:   Math.random() * 0.004 + 0.001,
          twinkle: Math.random() * Math.PI * 2,
        })
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        s.twinkle += s.speed
        const alpha = s.a * (0.4 + 0.6 * Math.sin(s.twinkle))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(drawStars)
    }

    function shootingStar() {
      const x = Math.random() * canvas.width * 0.8
      const y = Math.random() * canvas.height * 0.4
      let progress = 0
      function draw() {
        progress += 0.018
        const len = 140
        const ex = x + Math.cos(0.75) * len * progress
        const ey = y + Math.sin(0.75) * len * progress
        const grad = ctx.createLinearGradient(x, y, ex, ey)
        grad.addColorStop(0,   'rgba(247,147,30,0)')
        grad.addColorStop(0.4, 'rgba(247,147,30,0.7)')
        grad.addColorStop(1,   'rgba(255,255,255,0)')
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(ex, ey)
        ctx.strokeStyle = grad
        ctx.lineWidth   = 1.5
        ctx.stroke()
        if (progress < 1) requestAnimationFrame(draw)
      }
      draw()
    }

    resize()
    initStars()
    drawStars()

    const shootInterval = setInterval(shootingStar, 3800)
    window.addEventListener('resize', () => { resize(); initStars() })

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(shootInterval)
    }
  }, [])
}
