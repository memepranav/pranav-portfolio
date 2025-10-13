import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Youtube, MessageCircle, Gamepad2 } from 'lucide-react'
import Navigation from '../components/Navigation'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-black overflow-x-hidden">
      <Navigation />
      
      {/* Background Effects */}
      <div className="fixed inset-0 modern-grid opacity-40" />
      <div className="fixed inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent-50/30" />
      
      {/* About Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
              <span className="text-black">About Me</span>
            </h1>
            
            <div className="glass rounded-2xl p-8 md:p-12">
              <p className="text-xl text-black leading-relaxed mb-8">
                I'm a passionate developer who loves creating innovative digital experiences. 
                With expertise in modern web technologies, I build applications that are not only 
                functional but also visually stunning and user-friendly.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
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
              
              <div className="flex justify-center gap-6">
                {[
                  { icon: Instagram, href: 'https://instagram.com/your_username', label: 'Instagram', color: 'hover:text-pink-400' },
                  { icon: Youtube, href: 'https://youtube.com/@your_channel', label: 'YouTube', color: 'hover:text-red-400' },
                  { icon: MessageCircle, href: 'https://wa.me/your_number', label: 'WhatsApp', color: 'hover:text-green-400' },
                  { icon: Gamepad2, href: 'https://discord.gg/your_server', label: 'Discord', color: 'hover:text-indigo-400' }
                ].map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-dark rounded-full hover:shadow-glow transition-all duration-300 ${color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6 text-black transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
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

export default About
