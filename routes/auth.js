const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

// API dang nhap
router.post('/login', authController.login);

module.exports = router;