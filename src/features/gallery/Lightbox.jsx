import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

// Просмотр фото: стрелки клавиатуры, Esc и свайп на телефоне.
export default function Lightbox({ images, index, onClose, onIndex }) {
  const touchX = useRef(null)
  const total = images.length
  const go = (d) => onIndex((index + d + total) % total)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onIndex((index + 1) % total)
      if (e.key === 'ArrowLeft') onIndex((index - 1 + total) % total)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [index, total, onClose, onIndex])

  return (
    <div
      className="lightbox"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
      }}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Закрыть"><X /></button>
      <button className="lightbox-prev" onClick={() => go(-1)} aria-label="Предыдущее фото">‹</button>
      <img key={index} className="lightbox-img" src={images[index].src} alt={images[index].alt} />
      <button className="lightbox-next" onClick={() => go(1)} aria-label="Следующее фото">›</button>
      <span className="lightbox-count">{index + 1} / {total}</span>
    </div>
  )
}
