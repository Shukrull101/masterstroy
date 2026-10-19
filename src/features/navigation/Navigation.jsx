import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { nav, sectionIds } from '@/entities/siteData.js'
import { useScrollSpy } from './useScrollSpy.js'

export default function Navigation({ onCallback }) {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(sectionIds)
  return (
    <>
      <nav className={open ? 'main-nav nav-open' : 'main-nav'} aria-label="Главная навигация">
        {nav.map(([label, id]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <button className="mobile-nav-call" onClick={() => { setOpen(false); onCallback() }}>Заказать звонок</button>
      </nav>
      <button className="mobile-phone" onClick={onCallback} aria-label="Заказать звонок"><Phone size={20} /></button>
      <button className="burger" onClick={() => setOpen(!open)} aria-label={open ? 'Закрыть меню' : 'Открыть меню'}>{open ? <X /> : <Menu />}</button>
    </>
  )
}
