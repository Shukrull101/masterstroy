// "Курьер": единственное место, где мы ходим на сервер.
export const API_URL = import.meta.env.VITE_API_URL || ''

export class ApiError extends Error {
  constructor(status, message) { super(message); this.status = status }
}

export async function http(path, { method = 'GET', body, token } = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json', ...(token && { Authorization: `Bearer ${token}` }) },
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json().catch(() => null)
  if (!res.ok) throw new ApiError(res.status, data?.message || 'Ошибка запроса. Попробуйте ещё раз.')
  return data
}
