// Node Modules
const router = require('express').Router();

// Custom Modules
const authControllers = require('../controllers/authControllers');
const { authMiddleware } = require('../middlewares/authMiddleware');

// Auth Routes
router
    .post('/admin-login', authControllers.admin_login)
    .get('/get-user', authMiddleware ,authControllers.getUser)






module.exports = router;