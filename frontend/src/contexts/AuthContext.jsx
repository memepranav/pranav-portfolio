import React, { createContext, useContext, useState, useEffect } from 'react'
import { authAPI } from '../utils/api'
import toast from 'react-hot-toast'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is authenticated on app load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken')
        const savedUser = localStorage.getItem('user')
        
        if (token && savedUser) {
          // Verify token with backend
          const response = await authAPI.verify()
          if (response.data.success) {
            setUser(JSON.parse(savedUser))
            setIsAuthenticated(true)
          } else {
            // Invalid token, clear storage
            localStorage.removeItem('authToken')
            localStorage.removeItem('user')
          }
        }
      } catch (error) {
        // Token is invalid or expired
        localStorage.removeItem('authToken')
        localStorage.removeItem('user')
        console.error('Auth verification failed:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (credentials) => {
    try {
      setLoading(true)
      const response = await authAPI.login(credentials)
      
      if (response.data.success) {
        const { token, user: userData } = response.data
        
        // Save to localStorage
        localStorage.setItem('authToken', token)
        localStorage.setItem('user', JSON.stringify(userData))
        
        // Update state
        setUser(userData)
        setIsAuthenticated(true)
        
        toast.success('Login successful!')
        return { success: true }
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed'
      toast.error(message)
      return { success: false, message }
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      await authAPI.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear state and storage
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
      setUser(null)
      setIsAuthenticated(false)
      toast.success('Logged out successfully')
    }
  }

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
