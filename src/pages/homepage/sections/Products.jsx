import { products } from '@/entities/siteData.js'
import { useCallbackModal } from '@/features/callback/CallbackContext.js'
import ProductCard from '@/features/products/ProductCard.jsx'
import SectionHeading from '@/widgets/SectionHeading.jsx'

export default function Products() {
  const { openCallback } = useCallbackModal()
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <SectionHeading eyebrow="ВЫБИРАЮТ ЧАЩЕ ВСЕГО" title="Топ товаров" description="Популярные решения, которые сочетают аккуратный внешний вид, прочность и практичность." />
        <div className="products-grid">
          {products.map((p, i) => <ProductCard key={p.name} product={p} onOrder={openCallback} delay={(i % 2) * 90} />)}
        </div>
        <p className="price-note">* Цены указаны ориентировочно. Итоговая стоимость зависит от объёма заказа и выбранного цвета.</p>
      </div>
    </section>
  )
}
