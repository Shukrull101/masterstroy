import { ArrowRight, Check } from 'lucide-react'
import { images } from '@/entities/siteData.js'
import Reveal from '@/shared/ui/Reveal.jsx'

export default function About() {
  return (
    <section className="about-section" id="about">
      <Reveal variant="wipe" className="about-image">
        <img src={images.truck.src} alt={images.truck.alt} loading="lazy" />
        <div className="image-label"><span>МАСТЕР СТРОЙ</span><b>Создаём основу<br />вашего пространства</b></div>
      </Reveal>
      <Reveal className="about-content" delay={150}>
        <span className="eyebrow eyebrow-orange">О КОМПАНИИ</span>
        <h2>Надёжная основа<br />для ваших проектов</h2>
        <p className="about-lead">«Мастер Строй» — производитель тротуарной плитки и бетонных изделий в Волоколамском районе.</p>
        <p className="muted">Мы объединяем современные технологии, внимательное отношение к качеству и практичный подход к каждому заказу. Помогаем подобрать покрытие для загородного дома, коммерческой территории или масштабного объекта.</p>
        <div className="about-points">
          <div><Check size={16} /> Стабильное качество продукции</div>
          <div><Check size={16} /> Поддержка на каждом этапе заказа</div>
          <div><Check size={16} /> Доставка до вашего объекта</div>
        </div>
        <a className="btn" href="#production">Подробнее о производстве <ArrowRight size={17} /></a>
      </Reveal>
    </section>
  )
}
