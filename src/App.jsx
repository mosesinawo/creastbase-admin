import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import UploadPage from './pages/upload/UploadPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assets" element={<Home />} />
          <Route path="/users" element={<Home />} />
          <Route path="/finance" element={<Home />} />
          <Route path="/assets/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
