import { createContext, useContext } from 'react'

export const AuthContext = createContext(null)
export const useAuthModal = () => useContext(AuthContext) // { openAuth('login' | 'register') }
