import { Clock3, MapPin, Phone } from 'lucide-react'
import { contacts } from '@/entities/siteData.js'
import { useCallbackModal } from '@/features/callback/CallbackContext.js'
import UserMenu from '@/features/auth/UserMenu.jsx'
import Navigation from '@/features/navigation/Navigation.jsx'
import ScrollProgress from '@/features/navigation/ScrollProgress.jsx'
import { useScrolled } from '@/features/navigation/useScrolled.js'
import Brand from './Brand.jsx'

export default function Header() {
  const { openCallback } = useCallbackModal()
  const scrolled = useScrolled(30)
  const call = () => openCallback()
  return (
    <>
      <span id="home" />
      <ScrollProgress />
      <div className="topbar">
        <div className="topbar-inner container">
          <div className="top-info"><MapPin size={15} /><span>Московская область,<br />Волоколамский район</span></div>
          <div className="top-info top-hours"><Clock3 size={15} /><span>Пн–Сб: 9:00–18:00<br />Вс: по договорённости</span></div>
          <a className="top-info top-phone" href={contacts.phoneHref}><Phone size={15} /><span>{contacts.phones[0]}<br />{contacts.phones[1]}</span></a>
          <button className="top-call" onClick={call}>Заказать звонок</button>
        </div>
      </div>
      <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner container">
          <Brand />
          <Navigation onCallback={call} />
          <UserMenu />
        </div>
      </header>
    </>
  )
}
