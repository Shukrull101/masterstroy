import { useCallback, useMemo, useState } from 'react'
import { AuthContext } from './AuthContext.js'
import AuthModal from './AuthModal.jsx'

export default function AuthProvider({ children }) {
  const [state, setState] = useState({ open: false, mode: 'login' })
  const openAuth = useCallback((mode = 'login') => setState({ open: true, mode: mode === 'register' ? 'register' : 'login' }), [])
  const closeAuth = useCallback(() => setState((s) => ({ ...s, open: false })), [])
  const value = useMemo(() => ({ openAuth, closeAuth }), [openAuth, closeAuth])
  return (
    <AuthContext.Provider value={value}>
      {children}
      <AuthModal open={state.open} mode={state.mode} onMode={(mode) => setState({ open: true, mode })} onClose={closeAuth} />
    </AuthContext.Provider>
  )
}
