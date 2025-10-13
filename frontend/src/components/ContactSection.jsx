import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'

const ContactSection = () => {

  return (
    <section id="contact" className="relative pt-28 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-emerald-200 to-green-300 rounded-full opacity-20 blur-lg"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-16 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-15 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-24 left-1/3 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-25 blur-md"
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating Rectangles */}
        <motion.div 
          className="absolute top-32 right-1/4 w-16 h-4 bg-gradient-to-r from-gray-200 to-gray-300 opacity-20"
          animate={{
            rotate: [12, 52, 12],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-4 h-20 bg-gradient-to-b from-gray-200 to-gray-300 opacity-25"
          animate={{
            rotate: [-12, -52, -12],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Abstract Circles */}
        <motion.div 
          className="absolute top-16 left-1/2 w-12 h-12 border-2 border-gray-300 rounded-full opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-16 right-1/3 w-8 h-8 border-2 border-dashed border-gray-400 rounded-full opacity-30"
          animate={{
            scale: [1, 0.7, 1],
            rotate: [0, -180],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Gradient Lines */}
        <motion.div 
          className="absolute top-1/3 left-16 w-40 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-25"
          animate={{
            rotate: [45, 85, 45],
            scaleX: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-black">Get In Touch</span>
          </h2>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Info Only */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl w-full"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-black text-center">Let's Connect</h3>
              
              <div className="space-y-8">
                <motion.div
                  className="flex items-center gap-6"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 glass-dark rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-black text-lg">Email</p>
                    <a 
                      href="mailto:gamerzooze24@gmail.com" 
                      className="text-black hover:text-gray-700 transition-colors text-base"
                    >
                      gamerzooze24@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-6"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 glass-dark rounded-lg flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-black text-lg">Response Time</p>
                    <p className="text-black text-base">Usually within 24 hours</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 p-4 glass-dark rounded-lg">
                <p className="text-sm text-black text-center">
                  <span className="text-black font-medium">Pro tip:</span> Include details about your project, timeline, and budget for a faster response.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
