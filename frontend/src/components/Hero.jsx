import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = ({ onScrollToProjects }) => {
  return (
    <div className="relative z-10 w-full h-screen px-4 sm:px-8 lg:px-16">
      {/* Mobile-First Responsive Layout - Properly Centered */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full h-full pt-20 pb-16 lg:py-0">
        
        {/* Main Content - Full width on mobile, half on desktop */}
        <div className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left">

          {/* Main Title - Responsive sizing */}
          <motion.h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black mb-6 lg:mb-8 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block text-black">PORTFOLIO</span>
            <motion.span
              className="block text-black"
              style={{ fontSize: '0.9em' }}
            >
              SHOWCASE.
            </motion.span>
          </motion.h1>

          {/* Description - Better mobile spacing */}
          <motion.p
            className="text-base sm:text-lg text-black mb-8 lg:mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium px-4 lg:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            The development showcase that keeps your flow with modern tools and built-in graphics
          </motion.p>

          {/* Dotted Line - Centered on mobile */}
          <div className="w-32 border-b-2 border-dotted border-gray-400 mb-8 lg:mb-10 mx-auto lg:mx-0"></div>
        </div>

        {/* Right Side Stats - Bottom on mobile, right on desktop */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center mt-12 lg:mt-0">
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0, x: 0, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-row lg:flex-col gap-8 lg:gap-8 justify-center lg:justify-end">
              <div className="text-center lg:text-right">
                <div className="text-xs sm:text-sm text-black">Web based</div>
                <div className="text-base sm:text-lg font-semibold text-black">/01</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-xs sm:text-sm text-black">Collaborative</div>
                <div className="text-base sm:text-lg font-semibold text-black">/02</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-xs sm:text-sm text-black">Real-time</div>
                <div className="text-base sm:text-lg font-semibold text-black">/03</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Abstract geometric shapes - Red */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`red-shape-${i}`}
            className={`absolute ${i % 2 === 0 ? 'w-2 h-8' : 'w-8 h-2'} bg-red-500/20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Abstract geometric shapes - Gold/Orange */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`gold-shape-${i}`}
            className={`absolute ${i % 3 === 0 ? 'w-3 h-6' : i % 3 === 1 ? 'w-6 h-3' : 'w-4 h-4 rounded-full'} bg-amber-500/15`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              rotate: [360, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>


      {/* Futuristic Holographic Design - Responsive */}
      <div className="absolute top-1/2 right-1/4 lg:right-1/3 transform -translate-y-1/2 -z-10 scale-50 sm:scale-75 lg:scale-100">
        <motion.div
          className="relative w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96"
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          {/* Holographic Cube */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Cube Faces */}
            <div className="relative w-32 h-32" style={{ transformStyle: 'preserve-3d' }}>
              {/* Front Face */}
              <div 
                className="absolute inset-0 border-2 border-cyan-400/60 bg-gradient-to-br from-cyan-400/20 to-blue-600/20"
                style={{ 
                  transform: 'translateZ(64px)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
                }}
              />
              {/* Back Face */}
              <div 
                className="absolute inset-0 border-2 border-teal-400/60 bg-gradient-to-br from-teal-400/20 to-blue-600/20"
                style={{ 
                  transform: 'translateZ(-64px) rotateY(180deg)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)'
                }}
              />
              {/* Left Face */}
              <div 
                className="absolute inset-0 border-2 border-green-400/60 bg-gradient-to-br from-green-400/20 to-emerald-600/20"
                style={{ 
                  transform: 'rotateY(-90deg) translateZ(64px)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
                }}
              />
              {/* Right Face */}
              <div 
                className="absolute inset-0 border-2 border-orange-400/60 bg-gradient-to-br from-orange-400/20 to-red-600/20"
                style={{ 
                  transform: 'rotateY(90deg) translateZ(64px)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 20px rgba(251, 146, 60, 0.3)'
                }}
              />
              {/* Top Face */}
              <div 
                className="absolute inset-0 border-2 border-yellow-400/60 bg-gradient-to-br from-yellow-400/20 to-amber-600/20"
                style={{ 
                  transform: 'rotateX(90deg) translateZ(64px)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 20px rgba(250, 204, 21, 0.3)'
                }}
              />
              {/* Bottom Face */}
              <div 
                className="absolute inset-0 border-2 border-sky-400/60 bg-gradient-to-br from-sky-400/20 to-blue-600/20"
                style={{ 
                  transform: 'rotateX(-90deg) translateZ(64px)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)'
                }}
              />
            </div>
          </motion.div>

          {/* Floating Wireframe Spheres */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`sphere-${i}`}
              className="absolute w-24 h-24 rounded-full border-2 border-dashed border-cyan-400/40"
              style={{
                left: `${30 + i * 25}%`,
                top: `${20 + i * 30}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 1,
              }}
            >
              <div className="absolute inset-2 rounded-full border border-dotted border-teal-400/30" />
            </motion.div>
          ))}

          {/* Digital Grid Lines */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                style={{
                  top: `${15 + i * 15}%`,
                  left: '10%',
                  right: '10%',
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scaleX: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Holographic Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`holo-particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Pulsing Energy Ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-cyan-400/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="absolute inset-8 rounded-full border border-dashed border-teal-400/20" />
            <div className="absolute inset-16 rounded-full border border-dotted border-green-400/20" />
          </motion.div>

          {/* Glitch Effect Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-transparent to-teal-400/5"
            animate={{
              x: [-10, 10, -10],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 3,
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
