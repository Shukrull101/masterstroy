import { useState } from 'react'
import { Factory, PackageCheck, Play, ShieldCheck } from 'lucide-react'
import { images } from '@/entities/siteData.js'
import Reveal from '@/shared/ui/Reveal.jsx'
import Brand from '@/widgets/Brand.jsx'
import SectionHeading from '@/widgets/SectionHeading.jsx'

const FEATURES = [
  [Factory, 'Современное оборудование', 'Технологичный процесс и точная геометрия изделий.'],
  [ShieldCheck, 'Контроль качества', 'Проверяем сырьё, прочность и внешний вид продукции.'],
  [PackageCheck, 'Готовность к объёмам', 'Планируем производство под ваши сроки и задачи.'],
]

export default function Production() {
  const [playing, setPlaying] = useState(false)
  return (
    <section className="production-section" id="production">
      <div className="container">
        <SectionHeading eyebrow="КАК МЫ РАБОТАЕМ" title="О производстве" description="Технологии, опыт и контроль качества на каждом этапе." light />
        <div className="production-layout">
          <Reveal className="production-details">
            <Brand light />
            <p className="production-intro">Мы производим бетонные изделия, рассчитанные на ежедневные нагрузки и российский климат.</p>
            {FEATURES.map(([Icon, title, text]) => (
              <div className="production-feature" key={title}><span><Icon size={20} /></span><div><b>{title}</b><p>{text}</p></div></div>
            ))}
          </Reveal>
          <Reveal variant="wipe" className="video-card" delay={120}>
            {playing ? (
              <div className="video-message">
                <Play size={28} /><h3>Видео о производстве</h3>
                <p>Добавьте ссылку на ролик «История одного успеха» в компонент Production.</p>
                <button className="btn btn-small" onClick={() => setPlaying(false)}>Назад к превью</button>
              </div>
            ) : (
              <>
                {/* если фото не загрузится — подставим запасное */}
                <img src={images.factory.src} onError={(e) => { e.currentTarget.src = images.hero.src }} alt={images.factory.alt} loading="lazy" />
                <button className="play-button" onClick={() => setPlaying(true)} aria-label="Воспроизвести видео"><Play fill="currentColor" size={25} /></button>
                <div className="video-caption"><span>Мастер Строй</span><b>История одного успеха</b><small>НАШЕ ПРОИЗВОДСТВО</small></div>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
