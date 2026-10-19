import { useEffect, useRef, useState } from 'react'
import { LogOut, User } from 'lucide-react'
import { useUser } from '@/entities/user/model/UserContext.js'
import { useAuthModal } from './AuthContext.js'
import RequireAuth from './RequireAuth.jsx'
import './auth.css'

export default function UserMenu() {
  const { user, status, clearSession } = useUser()
  const { openAuth } = useAuthModal()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => !ref.current?.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    window.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDown); window.removeEventListener('keydown', onKey) }
  }, [open])

  if (status === 'loading') return <div className="user-menu" aria-hidden="true" />
  if (!user) {
    return (
      <div className="user-menu">
        <button className="user-btn" onClick={() => openAuth('login')} aria-label="Войти"><User size={16} /><span className="user-label">Войти</span></button>
      </div>
    )
  }
  return (
    <div className="user-menu" ref={ref}>
      <button className="user-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Меню профиля">
        <span className="user-avatar">{user.name.slice(0, 1).toUpperCase()}</span>
        <span className="user-label">{user.name}</span>
      </button>
      {open && (
        <div className="user-dropdown">
          <b>{user.name}
            <RequireAuth role="admin"><span className="role-badge">админ</span></RequireAuth>
          </b>
          <small>{user.email}</small>
          <button onClick={() => { clearSession(); setOpen(false) }}><LogOut size={15} /> Выйти</button>
        </div>
      )}
    </div>
  )
}
