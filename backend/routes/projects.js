const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { verifyToken } = require('../middleware/auth');

// GET /api/projects - Get all projects (public)
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find()
      .sort({ featured: -1, order: 1, createdAt: -1 });
    
    res.json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// GET /api/projects/:id - Get single project (public)
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// POST /api/projects - Create new project (protected)
router.post('/', verifyToken, async (req, res) => {
  try {
    const { title, description, tags, link, imageURL, featured, order } = req.body;

    const project = new Project({
      title,
      description,
      tags: tags || [],
      link,
      imageURL,
      featured: featured || false,
      order: order || 0
    });

    const savedProject = await project.save();

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: savedProject
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// PUT /api/projects/:id - Update project (protected)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { title, description, tags, link, imageURL, featured, order } = req.body;

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        tags: tags || [],
        link,
        imageURL,
        featured: featured || false,
        order: order || 0
      },
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      message: 'Project updated successfully',
      data: project
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

// DELETE /api/projects/:id - Delete project (protected)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      message: 'Project deleted successfully',
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

module.exports = router;
