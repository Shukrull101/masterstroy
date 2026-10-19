import { useInView } from '@/shared/hooks/useInView.js'

// Обёртка: элемент появляется, когда доходит до экрана.
// variant="up"   — мягкий подъём (карточки, текст)
// variant="wipe" — "укладка плитки": картинка раскрывается слева направо
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? 'is-in' : ''} ${className}`}
      style={{ '--d': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
