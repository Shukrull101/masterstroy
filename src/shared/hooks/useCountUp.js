import { useEffect, useState } from 'react'

// Счётчик 0 → target, как спидометр. При prefers-reduced-motion сразу показывает итог.
export function useCountUp(target, start, duration = 1400) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setValue(target); return }
    let raf, t0
    const tick = (t) => {
      t0 ??= t
      const p = Math.min((t - t0) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3)))) // easeOutCubic
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])
  return value
}
