const Admin = require('../Models/Admin');
const bcrypt=require('bcryptjs');
// Create Admin
exports.createAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingAdmin = await Admin.findOne({ username });

    if (existingAdmin) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create a new admin
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      username,
      password:hashedPassword, 
    });

    // Save the admin to the database
    await newAdmin.save();

    res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
  } catch (error) {
    console.error('Error creating admin:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get All Admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    console.error('Error getting admins:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
