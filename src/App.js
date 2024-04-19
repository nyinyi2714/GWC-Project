import { Routes, Route } from 'react-router-dom'
import { Homepage, Login, Register, Profile, Upload } from './pages'
import Navbar from './components/Navbar/Navbar-Search'
import Modal from 'react-modal'
import './App.css'

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  )
}

export default App
