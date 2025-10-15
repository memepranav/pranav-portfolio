import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-black">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8">About Me</h1>
          
          <div className="max-w-4xl">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              I'm a passionate developer who loves creating innovative digital experiences. 
              With expertise in modern web technologies, I build applications that are not only 
              functional but also visually stunning and user-friendly.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              This portfolio showcases some of my work, including anime-themed projects 
              and modern web applications. I enjoy experimenting with new technologies 
              and creating unique user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About