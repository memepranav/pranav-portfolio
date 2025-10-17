import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { track } from '@vercel/analytics'
import Portfolio from './pages/Portfolio'
import About from './pages/About'

function App() {
  const testAnalytics = () => {
    track('test_analytics_click', { timestamp: new Date().toISOString() })
    console.log('Analytics test event sent!')
    alert('Analytics test sent! Check your Vercel dashboard in 5-10 minutes.')
  }

  return (
    <Router>
      <div className="min-h-screen bg-dark-950 text-white">
        {/* Temporary Analytics Test Button */}
        <div className="fixed top-4 right-4 z-50">
          <button 
            onClick={testAnalytics}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg transition-colors"
          >
            🧪 Test Analytics
          </button>
        </div>
        
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Portfolio />} />
        </Routes>
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  )
}

export default App
