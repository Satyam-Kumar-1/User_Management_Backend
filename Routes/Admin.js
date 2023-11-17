const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/AdminControllers');

// Create Admin
router.post('/createadmin', adminController.createAdmin);

// Get All Admins
router.get('/getadmins', adminController.getAllAdmins);

module.exports = router;
