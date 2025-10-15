import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github, Mail, ChevronDown, Instagram, Youtube, MessageCircle, Phone, Gamepad2 } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import ContactSection from '../components/ContactSection'

const Portfolio = () => {
  const [projectsData] = useState(projects.sort((a, b) => {
    // Sort by featured first, then by order, then by creation date
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.order !== b.order) return a.order - b.order;
    return new Date(b.createdAt) - new Date(a.createdAt);
  }))
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  
  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    // Simulate loading for smooth UX
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-black overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Background Effects */}
      <div className="fixed inset-0 modern-grid opacity-40" />
      <div className="fixed inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent-50/30" />
      
      {/* Hero Section */}
      <motion.section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center"
        style={{ y, opacity }}
      >
        <Hero onScrollToProjects={() => scrollToSection('projects')} />
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('projects')}
        >
          <ChevronDown className="w-6 h-6 text-black" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="relative pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-16 right-16 w-28 h-28 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full opacity-20 blur-lg"
            animate={{
              x: [0, -25, 0],
              y: [0, 15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-32 left-16 w-36 h-36 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full opacity-15 blur-xl"
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-br from-cyan-200 to-teal-300 rounded-full opacity-25 blur-md"
            animate={{
              x: [0, 20, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Abstract Lines */}
          <motion.div 
            className="absolute top-24 left-1/3 w-48 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30"
            animate={{
              rotate: [12, 32, 12],
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-24 right-1/3 w-32 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-25"
            animate={{
              rotate: [-12, -32, -12],
              scaleX: [1, 0.8, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Geometric Elements */}
          <motion.div 
            className="absolute top-40 right-1/4 w-16 h-16 border-2 border-dashed border-gray-300 opacity-20"
            animate={{
              rotate: [45, 405, 45],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-16 left-1/3 w-6 h-24 bg-gradient-to-b from-gray-200 to-gray-300 opacity-20"
            animate={{
              rotate: [45, 65, 45],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-6 sm:mb-8">
              <span className="text-black">About Me</span>
            </h2>
            
            <div className="glass rounded-2xl p-6 sm:p-8 md:p-12">
              <p className="text-lg sm:text-xl text-black leading-relaxed mb-6 sm:mb-8">
                I'm a passionate developer who loves creating innovative digital experiences. 
                With expertise in modern web technologies, I build applications that are not only 
                functional but also visually stunning and user-friendly.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {['Python', 'HTML', 'CSS', 'C', 'C++'].map((tech) => (
                  <motion.div
                    key={tech}
                    className="glass-dark rounded-lg p-4 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="font-medium text-black">{tech}</span>
                  </motion.div>
                ))}
              </div>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full opacity-20 blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-25 blur-lg"
            animate={{
              x: [0, 15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-orange-200 to-yellow-300 rounded-full opacity-15 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-teal-200 to-blue-300 rounded-full opacity-30 blur-md"
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 sm:mb-6">
              <span className="text-black">Featured Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              A showcase of my latest work and creative endeavors
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="glass rounded-2xl p-6 animate-pulse">
                  <div className="h-48 bg-gray-300 rounded-lg mb-4" />
                  <div className="h-4 bg-gray-300 rounded mb-2" />
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-4" />
                  <div className="flex gap-2">
                    <div className="h-6 bg-gray-300 rounded-full w-16" />
                    <div className="h-6 bg-gray-300 rounded-full w-20" />
                  </div>
                </div>
              ))}
            </div>
          ) : projectsData.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {projectsData.map((project, index) => (
                <ProjectCard 
                  key={project._id} 
                  project={project} 
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-600">No projects available</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="relative py-8 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-4 left-16 w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-500 rounded-full opacity-15 blur-md"
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-2 right-20 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full opacity-20 blur-sm"
            animate={{
              x: [0, 10, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute bottom-2 left-1/3 w-8 h-8 border border-gray-600 opacity-15"
            animate={{
              rotate: [45, 225, 45],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-4 right-1/4 w-20 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-20"
            animate={{
              scaleX: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-white">
            © 2024 Pranav. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
