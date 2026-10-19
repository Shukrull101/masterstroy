import { Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { contacts, footerGroups } from '@/entities/siteData.js'
import { useCallbackModal } from '@/features/callback/CallbackContext.js'
import BackToTop from '@/features/navigation/BackToTop.jsx'
import Brand from './Brand.jsx'

export default function Footer() {
  const { openCallback } = useCallbackModal()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-contact">
            <Brand />
            <p className="footer-about">Бетонные изделия и тротуарная плитка напрямую от производителя в Волоколамске.</p>
            <a href={contacts.phoneHref}><Phone size={16} /> {contacts.phones[0]}</a>
            <a href={`mailto:${contacts.email}`}><Mail size={16} /> {contacts.email}</a>
            <span><MapPin size={16} /> Волоколамский район, Московская область</span>
            <div className="socials">
              <a href="https://instagram.com" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="https://t.me" aria-label="Telegram"><MessageCircle size={17} /></a>
            </div>
          </div>
          {footerGroups.map(([title, links]) => (
            <div className="footer-links" key={title}>
              <h3>{title}</h3>
              {links.map(([label, id]) => id === '#callback'
                ? <button key={label} onClick={() => openCallback()}>{label}</button>
                : <a key={label} href={`#${id}`}>{label}</a>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} «Мастер Строй». Все права защищены.</span>
          <a href="#home">Наверх ↑</a>
          <span>Сделано с вниманием к деталям</span>
        </div>
      </div>
      <BackToTop />
    </footer>
  )
}
