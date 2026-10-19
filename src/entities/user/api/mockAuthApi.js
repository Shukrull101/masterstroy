
import { ApiError } from '@/shared/api/http.js'

const KEY = 'ms_mock_users'
const wait = (ms = 450) => new Promise((r) => setTimeout(r, ms))
const read = () => {
  const users = JSON.parse(localStorage.getItem(KEY) || 'null')
  if (users) return users

  const seed = [{ id: 1, name: 'Администратор', email: 'admin@master-stroy.ru', password: 'admin123', role: 'admin' }]
  localStorage.setItem(KEY, JSON.stringify(seed))
  return seed
}
const publicUser = ({ password, ...user }) => user

export const mockAuthApi = {
  async register({ name, email, password }) {
    await wait()
    const users = read()
    if (users.some((u) => u.email === email.toLowerCase())) throw new ApiError(409, 'Этот email уже зарегистрирован')
    const user = { id: Date.now(), name: name.trim(), email: email.toLowerCase(), password, role: 'user' }
    localStorage.setItem(KEY, JSON.stringify([...users, user]))
    return { user: publicUser(user), token: `mock.${user.id}` }
  },
  async login({ email, password }) {
    await wait()
    const user = read().find((u) => u.email === email.toLowerCase() && u.password === password)
    if (!user) throw new ApiError(401, 'Неверный email или пароль')
    return { user: publicUser(user), token: `mock.${user.id}` }
  },
  async me(token) {
    await wait(200)
    const id = Number(String(token).split('.')[1])
    const user = read().find((u) => u.id === id)
    if (!user) throw new ApiError(401, 'Сессия истекла')
    return { user: publicUser(user) }
  },
}
