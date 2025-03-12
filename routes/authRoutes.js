// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  loginUser, 
  getUserProfile 
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Auth routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);

// Test protected route
router.get('/home', protect, (req, res) => {
  res.json({ 
    message: 'Welcome to the home page!', 
    user: req.user.username 
  });
});

module.exports = router;