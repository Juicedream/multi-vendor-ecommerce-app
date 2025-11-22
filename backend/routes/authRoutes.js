// Node Modules
const router = require('express').Router();

// Custom Modules
const authControllers = require('../controllers/authControllers');

// Auth Routes
router.post('/admin-login', authControllers.admin_login)






module.exports = router;