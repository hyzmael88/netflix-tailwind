import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Account from './Pages/Account'
import ProtectedRoute from './Pages/ProtectedRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>}/>
      </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
