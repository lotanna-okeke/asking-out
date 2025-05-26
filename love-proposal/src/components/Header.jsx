import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-[#FECACA] shadow-lg"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/home" className="flex items-center space-x-2">
            <FaHeart className="text-[#BE185D] text-2xl" />
            <span className="text-xl font-[cursive] text-[#BE185D]">My Special Question</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/our-story" className="text-[#BE185D] hover:text-white transition">
              Our Story
            </Link>
            <Link to="/memories" className="text-[#BE185D] hover:text-white transition">
              Memories
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#BE185D] text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-2 bg-[#FECACA] rounded shadow p-4">
            <Link
              to="/our-story"
              className="text-[#BE185D] hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Our Story
            </Link>
            <Link
              to="/memories"
              className="text-[#BE185D] hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Memories
            </Link>
          </div>
        )}
      </nav>
    </motion.header>
  )
}