const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));

app.use(express.json());

// Simple auth route without database
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'admin' && password === 'admin-cntrl@2025') {
    res.json({
      success: true,
      message: 'Authentication successful',
      token: 'demo-token-12345',
      user: { username: 'admin', role: 'admin' }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

// Store for demo projects (in-memory) - start empty
let projects = [];

// Get projects
app.get('/api/projects', (req, res) => {
  res.json({
    success: true,
    count: projects.length,
    data: projects
  });
});

// Add project
app.post('/api/projects', (req, res) => {
  const newProject = {
    _id: 'project-' + Date.now(),
    ...req.body,
    createdAt: new Date().toISOString()
  };
  projects.push(newProject);
  
  res.json({
    success: true,
    message: 'Project created successfully',
    data: newProject
  });
});

// Update project
app.put('/api/projects/:id', (req, res) => {
  const projectIndex = projects.findIndex(p => p._id === req.params.id);
  if (projectIndex !== -1) {
    projects[projectIndex] = { ...projects[projectIndex], ...req.body };
    res.json({
      success: true,
      message: 'Project updated successfully',
      data: projects[projectIndex]
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }
});

// Delete project
app.delete('/api/projects/:id', (req, res) => {
  const projectIndex = projects.findIndex(p => p._id === req.params.id);
  if (projectIndex !== -1) {
    const deletedProject = projects.splice(projectIndex, 1)[0];
    res.json({
      success: true,
      message: 'Project deleted successfully',
      data: deletedProject
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Portfolio API is running (demo mode)',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Demo server running on port ${PORT}`);
  console.log(`🌐 API Base URL: http://localhost:${PORT}/api`);
  console.log('✅ Ready for admin login: admin/admin');
  console.log('🎨 Sample HTML project included!');
});
