import { Routes, Route } from 'react-router-dom'
import { Homepage, Login, Register } from './pages'
import Navbar from './components/Navbar/Navbar-Search'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
