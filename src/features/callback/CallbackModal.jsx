import { useEffect, useState } from 'react'
import { ArrowRight, Check, X } from 'lucide-react'
import { useUser } from '@/entities/user/model/UserContext.js'
import { usePhoneMask } from './usePhoneMask.js'

export default function CallbackModal({ open, product, onClose }) {
  const [sent, setSent] = useState(false)
  const [phone, onPhone] = usePhoneMask()
  const { user } = useUser() // вошедшему клиенту подставляем имя

  useEffect(() => {
    if (!open) return
    setSent(false)
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Закрыть"><X size={20} /></button>
        {sent ? (
          <div className="success-state">
            <span className="success-icon"><Check /></span>
            <h2>Заявка отправлена!</h2>
            <p>Спасибо. Мы свяжемся с вами в ближайшее рабочее время.</p>
            <button className="btn" onClick={onClose}>Отлично</button>
          </div>
        ) : (
          <>
            <span className="eyebrow">ОБРАТНЫЙ ЗВОНОК</span>
            <h2 id="modal-title">Давайте обсудим ваш проект</h2>
            {product && <span className="modal-product">Вас интересует: {product.name}</span>}
            <p className="modal-sub">Оставьте контакты — специалист ответит на вопросы и поможет рассчитать заказ.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="callback-form">
              <label>Ваше имя<input key={user?.id} defaultValue={user?.name} required minLength="2" placeholder="Как к вам обращаться?" /></label>
              <label>Номер телефона<input required value={phone} onChange={(e) => onPhone(e.target.value)} placeholder="+7 (___) ___-__-__" inputMode="tel" /></label>
              <label className="consent"><input type="checkbox" required /> <span>Согласен(на) на обработку персональных данных</span></label>
              <button className="btn btn-full" type="submit">Заказать звонок <ArrowRight size={17} /></button>
            </form>
            <p className="form-note">Нажимая кнопку, вы соглашаетесь с условиями обработки данных.</p>
          </>
        )}
      </div>
    </div>
  )
}
