import { useCallback, useEffect, useMemo, useState } from 'react'
import { authApi } from '../api/authApi.js'
import { UserContext } from './UserContext.js'

const TOKEN_KEY = 'ms_token'
// Токен в localStorage — просто для учебного проекта. В проде надёжнее httpOnly-cookie.
const getToken = () => localStorage.getItem(TOKEN_KEY)

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [status, setStatus] = useState(getToken() ? 'loading' : 'guest') // loading | guest | authed

  // При загрузке страницы: есть токен — спрашиваем сервер "кто я?"
  useEffect(() => {
    const token = getToken()
    if (!token) return
    authApi.me(token)
      .then(({ user }) => { setUser(user); setStatus('authed') })
      .catch(() => { localStorage.removeItem(TOKEN_KEY); setStatus('guest') })
  }, [])

  const setSession = useCallback((user, token) => {
    localStorage.setItem(TOKEN_KEY, token)
    setUser(user)
    setStatus('authed')
  }, [])
  const clearSession = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY)
    setUser(null)
    setStatus('guest')
  }, [])
  const hasRole = useCallback((role) => user?.role === role, [user])

  const value = useMemo(() => ({ user, status, setSession, clearSession, hasRole }), [user, status, setSession, clearSession, hasRole])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
