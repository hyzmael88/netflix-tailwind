import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { AuthContextProvider } from './components/context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
