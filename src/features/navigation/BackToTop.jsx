import { ArrowUp } from 'lucide-react'
import { useScrolled } from './useScrolled.js'

export default function BackToTop() {
  const show = useScrolled(700)
  return (
    <button className={`to-top ${show ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Наверх" tabIndex={show ? 0 : -1}>
      <ArrowUp size={20} />
    </button>
  )
}
