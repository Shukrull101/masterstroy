import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/shared/ui/Reveal.jsx'

// Выбор цвета меняет фильтр на фото (демо, пока нет отдельных фото на каждый цвет)
const FILTERS = ['none', 'grayscale(1)', 'sepia(.25)', 'sepia(.45) saturate(1.5)']

export default function ProductCard({ product, onOrder, delay = 0 }) {
  const [color, setColor] = useState(0)
  return (
    <Reveal as="article" className="product-card" delay={delay}>
      <div className="product-main">
        <div className="product-image">
          <img src={product.img} alt={product.alt} loading="lazy" style={{ filter: FILTERS[color] }} />
          <span className="product-tag">ХИТ ПРОДАЖ</span>
        </div>
        <div className="product-info">
          <span className="product-type">{product.type}</span>
          <h3>{product.name}</h3>
          <p>{product.size} · толщина {product.thick}</p>
          <strong className="product-price">{product.price}</strong>
          <div className="swatches" aria-label={`Цвет плитки ${product.name}`}>
            {product.colors.map((c, i) => (
              <button key={c} className={color === i ? 'swatch active' : 'swatch'} style={{ backgroundColor: c }} onClick={() => setColor(i)} aria-label={`Выбрать цвет ${i + 1}`} title={`Цвет ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="product-specs">
        <span className="spec-label">ХАРАКТЕРИСТИКИ</span>
        <div><span>Размер</span><b>{product.size}</b></div>
        <div><span>Толщина</span><b>{product.thick}</b></div>
        <div><span>Вес</span><b>{product.weight}</b></div>
        <div><span>Стоимость</span><b>{product.price.replace('от ', '')}</b></div>
        <button className="product-order" onClick={() => onOrder(product)} aria-label={`Заказать ${product.name}`}><ArrowUpRight size={20} /></button>
      </div>
    </Reveal>
  )
}
