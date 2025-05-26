import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Story from './pages/Story'
import Memories from './pages/Memories'
import Proposal from './pages/Proposal'
import Response from './pages/Response'
import Landing from './pages/Landing'

function App() {
  const location = useLocation()
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    // Show header on all routes except landing
    setShowHeader(location.pathname !== '/')
  }, [location])

  return (
    <div className="min-h-screen bg-[#FDF2F8]">
      {showHeader && <Header />}
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/our-story" element={<Story />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/response" element={<Response />} />
        </Routes>
      </main>
    </div>
  )
}

export default App