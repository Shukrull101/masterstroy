import UserProvider from '@/entities/user/model/UserProvider.jsx'
import AuthProvider from '@/features/auth/AuthProvider.jsx'
import CallbackProvider from '@/features/callback/CallbackProvider.jsx'
import Homepage from '@/pages/homepage/Homepage.jsx'

// Провайдеры — как слои матрёшки: кто внутри, видит всё, что снаружи.
export default function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <CallbackProvider>
          <Homepage />
        </CallbackProvider>
      </AuthProvider>
    </UserProvider>
  )
}
