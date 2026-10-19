import { useUser } from '@/entities/user/model/UserContext.js'

// Авторизация: "охранник". Показывает детей, только если у человека есть доступ.
//   <RequireAuth>                     — достаточно быть вошедшим
//   <RequireAuth role="admin">        — нужна роль admin
//   fallback — что показать остальным (по умолчанию ничего)
export default function RequireAuth({ role, fallback = null, children }) {
  const { user, status, hasRole } = useUser()
  if (status === 'loading') return null
  if (!user || (role && !hasRole(role))) return fallback
  return children
}
