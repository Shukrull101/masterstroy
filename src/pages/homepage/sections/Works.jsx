import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { works } from '@/entities/siteData.js'
import Lightbox from '@/features/gallery/Lightbox.jsx'
import Reveal from '@/shared/ui/Reveal.jsx'
import SectionHeading from '@/widgets/SectionHeading.jsx'

export default function Works() {
  const [active, setActive] = useState(-1)
  return (
    <section className="section works-section" id="works">
      <div className="container">
        <SectionHeading eyebrow="РЕЗУЛЬТАТ ГОВОРИТ САМ ЗА СЕБЯ" title="Наши работы" description="Вдохновляющие примеры благоустройства — от уютных садовых дорожек до просторных площадок." />
        <div className="works-grid">
          {works.map((work, i) => (
            <Reveal as="button" variant="wipe" delay={(i % 3) * 90} className={`work-item work-${i + 1}`} key={work.src} onClick={() => setActive(i)} aria-label={`Открыть фотографию ${i + 1}`}>
              <img src={work.src} alt={work.alt} loading="lazy" />
              <span>Объект №{String(i + 1).padStart(2, '0')} <ArrowUpRight size={18} /></span>
            </Reveal>
          ))}
        </div>
      </div>
      {active >= 0 && <Lightbox images={works} index={active} onClose={() => setActive(-1)} onIndex={setActive} />}
    </section>
  )
}
