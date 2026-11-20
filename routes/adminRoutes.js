
const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/roleMiddleware');

router.get(
  '/dashboard',
  authMiddleware,
  authorizeRole('admin'),
  (req, res) => {
    res.status(200).json({
      message: 'Welcome to Admin Dashboard',
      admin: req.currentUser.name,
      role: req.currentUser.role
    });
  }
);

module.exports = router;
