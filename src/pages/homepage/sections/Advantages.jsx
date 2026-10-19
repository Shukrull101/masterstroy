import { benefits } from '@/entities/siteData.js'
import Reveal from '@/shared/ui/Reveal.jsx'
import SectionHeading from '@/widgets/SectionHeading.jsx'

export default function Advantages() {
  return (
    <section className="advantages-section" id="advantages">
      <div className="container">
        <SectionHeading eyebrow="ПОЧЕМУ НАС ВЫБИРАЮТ" title="Наши преимущества" description="Работаем так, чтобы вам было спокойно на каждом этапе." light />
        <div className="benefits-grid">
          {benefits.map(([Icon, title, text], i) => (
            <Reveal as="article" className="benefit-card" key={title} delay={(i % 3) * 90}>
              <span className="benefit-icon"><Icon size={23} /></span>
              <span className="benefit-num">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
