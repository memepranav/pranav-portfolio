import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    })
  }

  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
    >
      <motion.div
        className="glass rounded-2xl p-3 sm:p-4 h-full border border-white/5 transition-all duration-500 overflow-hidden"
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        {/* Project Image */}
        <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-primary-900/20 to-accent-900/20">
          {project.imageURL ? (
            <motion.img
              src={project.imageURL}
              alt={project.title}
              className="w-full h-32 sm:h-40 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <div className="w-full h-32 sm:h-40 flex items-center justify-center">
              <div className="text-4xl sm:text-6xl font-bold text-primary-400/20">
                {project.title.charAt(0)}
              </div>
            </div>
          )}
          
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          
          {/* Status badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {project.featured && (
              <motion.div
                className="px-2 py-1 bg-accent-500/90 backdrop-blur-sm rounded-full text-xs font-medium text-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Featured
              </motion.div>
            )}
            {project.underConstruction && (
              <motion.div
                className="px-2 py-1 bg-blue-600/90 backdrop-blur-sm rounded-full text-xs font-medium text-white shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                🚧 Under Construction
              </motion.div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Title and Date */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
            <h3 className="text-base sm:text-lg font-semibold text-black leading-tight">
              {project.title}
            </h3>
            {project.createdAt && (
              <div className="flex items-center gap-1 text-xs text-gray-500 shrink-0">
                <Calendar className="w-3 h-3" />
                {formatDate(project.createdAt)}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tag}
                </motion.span>
              ))}
              {project.tags.length > 4 && (
                <span className="px-3 py-1 text-xs font-medium bg-gray-500/10 text-gray-400 rounded-full border border-gray-500/20">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              View Project
            </motion.a>
            
            {/* GitHub link if it's a GitHub URL */}
            {project.link.includes('github.com') && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-dark rounded-lg hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4 text-gray-400" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%)',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
