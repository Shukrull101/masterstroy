
import { Factory, MessageCircle, Hammer, Truck, Wallet, ShieldCheck } from 'lucide-react'

import hero from '@/shared/assets/images/hero.png'
import factory from '@/shared/assets/images/fuctory.jpg'
import truck from '@/shared/assets/images/truck.jpg'

import work1 from '@/shared/assets/images/works/work-1.jpg'
import work2 from '@/shared/assets/images/works/work-2.jpg'
import work3 from '@/shared/assets/images/works/work-3.jpg'
import work4 from '@/shared/assets/images/works/work-4.jpg'
import work5 from '@/shared/assets/images/works/work-5.jpg'
import work6 from '@/shared/assets/images/works/work-2.jpg'
import work7 from '@/shared/assets/images/works/work-1.jpg'
import work8 from '@/shared/assets/images/works/work-5.jpg'

import category1 from '@/shared/assets/images/categories/category-1.png'
import category2 from '@/shared/assets/images/categories/category-2.png'
import category3 from '@/shared/assets/images/categories/category-3.png'
import category4 from '@/shared/assets/images/categories/category-4.png'
import category5 from '@/shared/assets/images/categories/category-5.png'
import category6 from '@/shared/assets/images/categories/category-6.png'
import category7 from '@/shared/assets/images/categories/category-1.png'
import category8 from '@/shared/assets/images/categories/category-4.png'

import product1 from '@/shared/assets/images/products/product-1.jpg'
import product2 from '@/shared/assets/images/products/product-2.jpg'
import product3 from '@/shared/assets/images/products/product-3.jpg'
import product4 from '@/shared/assets/images/products/product-4.jpg'
import product5 from '@/shared/assets/images/products/product-1.jpg'
import product6 from '@/shared/assets/images/products/product-3.jpg'

export const images = {
  hero: { src: hero, alt: 'Серая тротуарная плитка крупным планом' },
  factory: { src: factory, alt: 'Производственный цех по выпуску бетонных изделий' },
  truck: { src: truck, alt: 'Грузовик с бетонными изделиями на производственной площадке' },
}

export const nav = [
  ['Каталог', 'catalog'], ['О компании', 'about'], ['Топ товаров', 'products'],
  ['Наши работы', 'works'], ['Доставка', 'delivery'], ['Контакты', 'contacts'],
]

export const categories = [
  { name: 'Тротуарная плитка', img: category1, alt: 'Тротуарная плитка разных форм и цветов' },
  { name: 'Бордюрный камень', img: category2, alt: 'Бордюрный камень серого цвета' },
  { name: 'Водоотводные лотки', img: category3, alt: 'Бетонные водоотводные лотки' },
  { name: 'Ступени и лестницы', img: category4, alt: 'Бетонные ступени и лестница' },
  { name: 'Газонная решётка', img: category5, alt: 'Бетонная газонная решётка' },
  { name: 'Водостоки', img: category6, alt: 'Бетонные элементы водостока' },
  { name: 'Фасадные элементы', img: category7, alt: 'Фасадные элементы из бетона' },
  { name: 'Малые формы', img: category8, alt: 'Малые архитектурные формы из бетона' },
]

export const products = [
  { name: 'Плитка «Шестигранник»', type: 'Вибропрессованная плитка', size: '250 × 220 мм', thick: '60 мм', weight: '110 кг/м²', price: 'от 850 ₽/м²', img: product1, alt: 'Серая шестигранная тротуарная плитка', colors: ['#9da9a4','#55585b','#b8a89a','#8d6b61'] },
  { name: 'Плитка «Кирпичик»', type: 'Классическая форма', size: '200 × 100 мм', thick: '60 мм', weight: '120 кг/м²', price: 'от 720 ₽/м²', img: product2, alt: 'Прямоугольная плитка «Кирпичик» красно-коричневого цвета', colors: ['#9b7772','#696b6e','#c4b9a7','#b24d35'] },
  { name: 'Плитка «Квадрат»', type: 'Лаконичный дизайн', size: '300 × 300 мм', thick: '60 мм', weight: '115 кг/м²', price: 'от 790 ₽/м²', img: product3, alt: 'Квадратная серая тротуарная плитка', colors: ['#a4a9ac','#696d70','#b2a79b','#d1c7b6'] },
  { name: 'Плитка «Катушка»', type: 'Для дорожек и площадок', size: '200 × 165 мм', thick: '60 мм', weight: '118 кг/м²', price: 'от 810 ₽/м²', img: product4, alt: 'Фигурная плитка «Катушка» серого цвета', colors: ['#888d8f','#b8a69a','#7e5b56','#414345'] },
  { name: 'Брусчатка «Старый город»', type: 'Микс из трёх размеров', size: '180 / 120 / 90 мм', thick: '60 мм', weight: '125 кг/м²', price: 'от 920 ₽/м²', img: product5, alt: 'Брусчатка «Старый город» из трёх размеров', colors: ['#8d9192','#6d6967','#a78b79','#b54d36'] },
  { name: 'Плитка «Волна»', type: 'Для частных территорий', size: '225 × 112 мм', thick: '60 мм', weight: '120 кг/м²', price: 'от 760 ₽/м²', img: product6, alt: 'Волнообразная красно-коричневая плитка «Волна»', colors: ['#999e9f','#6c7072','#b3a293','#9b6a61'] },
]

export const benefits = [
  [Factory, 'Собственное производство', 'Контролируем каждый этап — от сырья до готового изделия.'],
  [MessageCircle, 'Помогаем выбрать', 'Подскажем форму, цвет и толщину под вашу задачу.'],
  [Hammer, 'Опытная команда', 'Знаем, как сделать покрытие красивым и долговечным.'],
  [Truck, 'Доставка на объект', 'Привезём заказ по Волоколамску и ближайшим районам.'],
  [Wallet, 'Цена от производителя', 'Без лишних посредников и неожиданных наценок.'],
  [ShieldCheck, 'Качество и гарантия', 'Изделия для ежедневных нагрузок и переменчивой погоды.'],
]

export const works = [
  { src: work1, alt: 'Садовая дорожка из красно-коричневой тротуарной плитки' },
  { src: work2, alt: 'Двор частного дома, выложенный разноцветной плиткой' },
  { src: work3, alt: 'Тротуарная плитка у дома рядом с газоном' },
  { src: work4, alt: 'Дорожка из плитки смешанных цветов вдоль участка' },
  { src: work5, alt: 'Узорчатая плиточная дорожка среди зелени' },
  { src: work6, alt: 'Площадка из жёлто-коричневой плитки с геометрическим узором' },
  { src: work7, alt: 'Дорожка к крыльцу, выложенная тротуарной плиткой' },
  { src: work8, alt: 'Благоустроенная территория с плиткой и бордюром' },
]

export const contacts = {
  phones: ['+7 (496) 123-45-67', '+7 (926) 123-45-67'],
  phoneHref: 'tel:+74961234567',
  email: 'info@master-stroy.example',
  hours: 'Пн–Сб: 9:00–18:00',
}

export const stats = [
  { value: 10, suffix: '+', label: 'лет опыта' },
  { value: 30, suffix: '+', label: 'видов изделий' },
  { value: 100, suffix: '%', label: 'своё производство' },
]

export const sectionIds = ['catalog', 'about', 'products', 'production', 'works', 'advantages', 'delivery', 'contacts']

export const footerGroups = [
  ['Каталог', [['Тротуарная плитка', 'catalog'], ['Бордюрный камень', 'catalog'], ['Водоотводные лотки', 'catalog'], ['Бетонные изделия', 'catalog']]],
  ['Компания', [['О нас', 'about'], ['Производство', 'production'], ['Наши работы', 'works'], ['Преимущества', 'advantages']]],
  ['Покупателям', [['Топ товаров', 'products'], ['Доставка и оплата', 'delivery'], ['Контакты', 'contacts'], ['Заказать звонок', '#callback']]],
]
