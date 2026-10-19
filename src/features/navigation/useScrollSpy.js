import { useEffect, useState } from 'react'

// Какой раздел сейчас "под шапкой" — тот и подсвечиваем в меню.
export function useScrollSpy(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    let raf = 0
    const update = () => {
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      setActive(current)
    }
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [ids])
  return active
}
