import { useEffect, useRef } from 'react'

// Оранжевая "дорожка" сверху: сколько страницы уже пройдено.
export default function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    let raf = 0
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      ref.current?.style.setProperty('--p', max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])
  return <div className="scroll-progress" ref={ref} aria-hidden="true" />
}
