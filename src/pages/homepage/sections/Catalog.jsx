import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { categories } from '@/entities/siteData.js'
import Reveal from '@/shared/ui/Reveal.jsx'
import SectionHeading from '@/widgets/SectionHeading.jsx'

export default function Catalog() {
  return (
    <section className="section catalog-section" id="catalog">
      <div className="container">
        <SectionHeading eyebrow="НАШ АССОРТИМЕНТ" title="Каталог продукции" description="Всё необходимое для благоустройства частных и общественных территорий." />
        <div className="category-grid">
          {categories.map((cat, i) => (
            <Reveal as="a" href="#products" className="category-card" key={cat.name} delay={(i % 4) * 70}>
              <div className="category-image">
                <img src={cat.img} alt={cat.alt} loading="lazy" />
                <span className="category-number">0{i + 1}</span>
                <span className="category-arrow"><ArrowUpRight size={18} /></span>
              </div>
              <h3>{cat.name}</h3>
            </Reveal>
          ))}
        </div>
        <div className="center-action"><a className="btn btn-outline" href="#products">Весь каталог <ArrowRight size={17} /></a></div>
      </div>
    </section>
  )
}
