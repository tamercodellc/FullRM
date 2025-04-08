import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { LoginForm } from './pages/auth/login'
import { AuthVerification } from './pages/auth/authVerification'
import { SignUpForm } from './pages/auth/signup'
import { NavigationProvider } from './contexts/navigation-context'
import { AuthProvider } from './contexts/auth-context'
import { Toaster } from './components/ui/use-toast'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <NavigationProvider>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/verify" element={<AuthVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </NavigationProvider>
      <Toaster />
    </AuthProvider>
  )
}

export default App