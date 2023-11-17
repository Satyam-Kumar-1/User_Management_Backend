const express = require('express');
const { createUser } = require('../Controllers/userController');
const {getAllUsers}=require('../Controllers/userController');
const router = express.Router();

// Route for creating a new user
router.post('/create', createUser);

// Route for getting all users
router.get('/all', getAllUsers);

module.exports = router;
