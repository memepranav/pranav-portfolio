import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Portfolio from './pages/Portfolio'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-950 text-white">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Portfolio />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  )
}

export default App
