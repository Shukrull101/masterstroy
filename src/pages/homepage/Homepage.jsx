import Header from '@/widgets/Header.jsx'
import Footer from '@/widgets/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Catalog from './sections/Catalog.jsx'
import About from './sections/About.jsx'
import Products from './sections/Products.jsx'
import Production from './sections/Production.jsx'
import Works from './sections/Works.jsx'
import Advantages from './sections/Advantages.jsx'
import Delivery from './sections/Delivery.jsx'

// Страница = сборка из готовых блоков, как конструктор.
export default function Homepage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <About />
        <Products />
        <Production />
        <Works />
        <Advantages />
        <Delivery />
      </main>
      <Footer />
    </>
  )
}
