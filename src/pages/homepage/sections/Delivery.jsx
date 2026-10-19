import { ArrowRight, Clock3, Mail, MapPin, Phone, Truck } from 'lucide-react'
import { contacts, images } from '@/entities/siteData.js'
import { useCallbackModal } from '@/features/callback/CallbackContext.js'
import Reveal from '@/shared/ui/Reveal.jsx'
import SectionHeading from '@/widgets/SectionHeading.jsx'

export default function Delivery() {
  const { openCallback } = useCallbackModal()
  return (
    <section className="section delivery-section" id="delivery">
      <div className="container">
        <SectionHeading eyebrow="ПРИВЕЗЁМ НА ОБЪЕКТ" title="Доставка и контакты" description="Организуем доставку и поможем рассчитать необходимое количество материала." />
        <div className="delivery-grid">
          <Reveal className="delivery-left">
            <div className="delivery-orange">
              {/* грузовик едет по дороге */}
              <div className="road" aria-hidden="true"><Truck className="road-truck" size={30} /></div>
              <h3>Доставляем туда,<br />где строится ваше будущее</h3>
              <p>Доставляем тротуарную плитку и бетонные изделия по Волоколамску и ближайшим районам Московской области.</p>
              <button className="delivery-link" onClick={() => openCallback()}>Рассчитать доставку <ArrowRight size={17} /></button>
            </div>
            <img src={images.truck.src} alt={images.truck.alt} loading="lazy" />
          </Reveal>
          <Reveal className="contact-panel" id="contacts" delay={120}>
            <span className="eyebrow eyebrow-orange">БУДЕМ НА СВЯЗИ</span>
            <h3>Контакты отдела продаж</h3>
            <p className="contact-intro">Расскажите о задаче — подберём подходящее решение и ответим на вопросы.</p>
            <a href={contacts.phoneHref} className="contact-line"><span><Phone size={19} /></span><div><small>ПОЗВОНИТЕ НАМ</small><b>{contacts.phones[0]}</b></div></a>
            <a href={`mailto:${contacts.email}`} className="contact-line"><span><Mail size={19} /></span><div><small>НАПИШИТЕ НАМ</small><b>{contacts.email}</b></div></a>
            <div className="contact-line"><span><MapPin size={19} /></span><div><small>НАШЕ ПРОИЗВОДСТВО</small><b>Московская область, Волоколамский район</b></div></div>
            <div className="contact-hours"><Clock3 size={17} /><span>{contacts.hours}</span></div>
            <button className="btn btn-full" onClick={() => openCallback()}>Оставить заявку <ArrowRight size={17} /></button>
          </Reveal>
        </div>
        <div className="map-wrap">
          <iframe title="Карта Волоколамска" src="https://yandex.ru/map-widget/v1/?ll=35.9585%2C56.0358&z=11&pt=35.9585%2C56.0358%2Cpm2rdm" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          <div className="map-label"><MapPin size={18} /><div><b>Мастер Строй</b><span>Волоколамский район, Московская область</span></div></div>
        </div>
      </div>
    </section>
  )
}
