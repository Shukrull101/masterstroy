import { useEffect, useRef } from 'react'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { images, stats } from '@/entities/siteData.js'
import { useInView } from '@/shared/hooks/useInView.js'
import { useCountUp } from '@/shared/hooks/useCountUp.js'

const LINES = ['Тротуарная плитка в Волоколамске',
'напрямую от производителя']

function Stat({ value, suffix, label, delay }) {
  const [ref, inView] = useInView({ threshold: 0.6 })
  const n = useCountUp(value, inView)
  return <div ref={ref} className="rise" style={{ '--d': `${delay}ms` }}><b>{n}{suffix}</b><span>{label}</span></div>
}

export default function Hero() {
  const ref = useRef(null)

  // Параллакс: фон чуть отстаёт от прокрутки
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => ref.current?.style.setProperty('--parallax', Math.min(window.scrollY * 0.2, 80)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  return (
    <section 
      ref={ref} 
      className="hero" 
      style={{ 
        backgroundImage: `linear-gradient(90deg, rgba(20,21,22,.78), rgba(20,21,22,.48)), url("${images.hero.src}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-content container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
        <span className="hero-kicker rise" style={{ '--d': '100ms' }}>
          <span /> ПРОИЗВОДСТВО В ВОЛОКОЛАМСКЕ
        </span>

        <h1>
          {LINES.map((line, i) => (
            <span className="line" key={line}>
              <span style={{ '--d': `${200 + i * 140}ms` }}>{line}</span>
            </span>
          ))}
        </h1>

        <p className="rise" style={{ '--d': '650ms', maxWidth: '600px', margin: '0 auto 24px auto' }}>
          Надёжные бетонные изделия для красивых дорожек, уютных дворов и долговечных площадок. Честные цены и доставка от «Мастер Строй».
        </p>

        <div className="hero-actions rise" style={{ '--d': '780ms', justifyContent: 'center' }}>
          <a className="btn" href="#catalog">Смотреть каталог <ArrowRight size={18} /></a>
          <a className="hero-link" href="#about">Узнать о компании <ArrowDownRight size={17} /></a>
        </div>

        <div className="hero-stats" style={{ justifyContent: 'center' }}>
          {stats.map((s, i) => <Stat key={s.label} {...s} delay={900 + i * 110} />)}
        </div>
      </div>
    </section>
  )
}