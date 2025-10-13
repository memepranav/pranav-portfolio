const express = require('express');
const router = express.Router();
const { authenticateAdmin, verifyToken } = require('../middleware/auth');

// POST /api/auth/login - Admin login
router.post('/login', authenticateAdmin);

// GET /api/auth/verify - Verify token
router.get('/verify', verifyToken, (req, res) => {
  res.json({
    success: true,
    message: 'Token is valid',
    user: req.user
  });
});

// POST /api/auth/logout - Logout (client-side token removal)
router.post('/logout', (req, res) => {
  res.json({
    success: true,
    message: 'Logged out successfully'
  });
});

module.exports = router;
