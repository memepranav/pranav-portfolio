import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Edit, 
  Trash2, 
  LogOut, 
  Home, 
  Save, 
  X,
  ExternalLink,
  Image,
  Tag,
  Calendar,
  BarChart3
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { projectsAPI } from '../utils/api'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import LoadingSpinner from '../components/LoadingSpinner'

const AdminDashboard = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    link: '',
    imageURL: '',
    featured: false,
    underConstruction: false
  })

  const { user, logout } = useAuth()

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await projectsAPI.getAll()
      if (response.data.success) {
        setProjects(response.data.data)
      }
    } catch (error) {
      console.error('Failed to fetch projects:', error)
      toast.error('Failed to load projects')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const openModal = (project = null) => {
    if (project) {
      setEditingProject(project)
      setFormData({
        title: project.title,
        description: project.description,
        tags: project.tags.join(', '),
        link: project.link,
        imageURL: project.imageURL || '',
        featured: project.featured || false,
        underConstruction: project.underConstruction || false
      })
    } else {
      setEditingProject(null)
      setFormData({
        title: '',
        description: '',
        tags: '',
        link: '',
        imageURL: '',
        featured: false,
        underConstruction: false
      })
    }
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setEditingProject(null)
    setFormData({
      title: '',
      description: '',
      tags: '',
      link: '',
      imageURL: '',
      featured: false,
      underConstruction: false
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const projectData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    }

    try {
      if (editingProject) {
        const response = await projectsAPI.update(editingProject._id, projectData)
        if (response.data.success) {
          toast.success('Project updated successfully!')
          fetchProjects()
        }
      } else {
        const response = await projectsAPI.create(projectData)
        if (response.data.success) {
          toast.success('Project created successfully!')
          fetchProjects()
        }
      }
      closeModal()
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to save project'
      toast.error(message)
    }
  }

  const handleDelete = async (projectId) => {
    if (!window.confirm('Are you sure you want to delete this project?')) {
      return
    }

    try {
      const response = await projectsAPI.delete(projectId)
      if (response.data.success) {
        toast.success('Project deleted successfully!')
        fetchProjects()
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to delete project'
      toast.error(message)
    }
  }

  const handleLogout = () => {
    logout()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-950">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-semibold text-gray-900">
                Admin Dashboard
              </h1>
              <div className="hidden sm:block text-sm text-gray-500">
                Welcome back, {user?.username}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-600"
                title="View Portfolio"
              >
                <Home className="w-5 h-5" />
              </Link>
              
              <button
                onClick={handleLogout}
                className="p-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-red-600"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{projects.length}</p>
                <p className="text-gray-500 text-sm">Total Projects</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <Tag className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {projects.filter(p => p.featured).length}
                </p>
                <p className="text-gray-500 text-sm">Featured Projects</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-50 rounded-lg">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {projects.filter(p => {
                    const date = new Date(p.createdAt)
                    const now = new Date()
                    const diffTime = Math.abs(now - date)
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
                    return diffDays <= 30
                  }).length}
                </p>
                <p className="text-gray-500 text-sm">Recent Projects</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Actions Bar */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Projects</h2>
          <motion.button
            onClick={() => openModal()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-5 h-5" />
            Add Project
          </motion.button>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative mb-4 h-32 bg-gray-100 rounded-lg overflow-hidden">
                  {project.imageURL ? (
                    <img
                      src={project.imageURL}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Image className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                  
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    {project.featured && (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                    {project.underConstruction && (
                      <span className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                        🚧 Under Construction
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg truncate text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                  
                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-500 rounded-full">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-600"
                      title="View Project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal(project)}
                        className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-blue-600"
                        title="Edit Project"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="p-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-red-600"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-xl p-12 max-w-md mx-auto shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">No Projects Yet</h3>
              <p className="text-gray-600 mb-6">
                Start building your portfolio by adding your first project.
              </p>
              <button
                onClick={() => openModal()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Your First Project
              </button>
            </div>
          </motion.div>
        )}
      </main>

      {/* Project Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-black"
                    placeholder="Enter project title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-black"
                    placeholder="Describe your project"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Link *
                  </label>
                  <input
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-black"
                    placeholder="https://github.com/username/project"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    name="imageURL"
                    value={formData.imageURL}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-black"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-black"
                    placeholder="React, Node.js, MongoDB (comma separated)"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="featured"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                      Featured Project
                    </label>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="underConstruction"
                      name="underConstruction"
                      checked={formData.underConstruction}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-orange-600 bg-white border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label htmlFor="underConstruction" className="text-sm font-medium text-gray-700">
                      Under Construction 🚧
                    </label>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Save className="w-5 h-5" />
                    {editingProject ? 'Update Project' : 'Create Project'}
                  </button>
                  
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AdminDashboard
