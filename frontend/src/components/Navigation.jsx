import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Mail, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', section: 'hero', icon: Home },
    { name: 'About', section: 'about', icon: User },
    { name: 'Projects', section: 'projects', icon: Briefcase },
    { name: 'Contact', section: 'contact', icon: Mail },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      // Better offsets for proper visibility
      let headerHeight = 100
      
      if (sectionId === 'contact') {
        headerHeight = 60 // Less offset for contact section
      } else if (sectionId === 'about') {
        headerHeight = 140 // More space for about section
      } else if (sectionId === 'projects') {
        headerHeight = 80 // Less offset to center the projects section better
      } else if (sectionId === 'hero') {
        headerHeight = 0 // No offset for hero section
      }
      
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black/10 ${
          scrolled ? 'glass' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 sm:h-20 relative">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-lg sm:text-2xl font-medium text-gray-800 tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="hidden sm:inline">Pranav's Portfolio</span>
                <span className="sm:hidden">Pranav</span>
              </Link>
            </div>

            {/* Spacer to push content to the right */}
            <div className="flex-1"></div>

            {/* Right Side Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div key={item.name} className="relative group">
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="relative text-sm font-medium text-black transition-all duration-300 px-3 py-2 rounded-lg overflow-hidden"
                  >
                    <motion.span
                      className="relative z-10 block"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {item.name}
                    </motion.span>
                    
                    {/* Hover Background */}
                    <motion.div
                      className="absolute inset-0 bg-gray-100 rounded-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                    
                    {/* Underline Effect */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </button>
                </motion.div>
              ))}
              
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 sm:p-3 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden glass border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.div key={item.name}>
                    <button
                      onClick={() => {
                        scrollToSection(item.section)
                        setIsOpen(false)
                      }}
                      className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-base font-medium text-black hover:text-gray-700 hover:bg-gray-100 transition-all duration-300"
                    >
                      <motion.div
                        className="flex items-center gap-3 w-full"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <item.icon className="w-5 h-5" />
                        {item.name}
                      </motion.div>
                    </button>
                  </motion.div>
                ))}
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

    </>
  )
}

export default Navigation
