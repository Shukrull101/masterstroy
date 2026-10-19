import { API_URL, http } from '@/shared/api/http.js'
import { mockAuthApi } from './mockAuthApi.js'


const realAuthApi = {
  register: (body) => http('/auth/register', { method: 'POST', body }),
  login: (body) => http('/auth/login', { method: 'POST', body }),
  me: (token) => http('/auth/me', { token }),
}


export const authApi = API_URL ? realAuthApi : mockAuthApi
