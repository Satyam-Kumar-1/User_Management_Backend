const User = require('../Models/Users');

// Function to generate a padded number with leading zeros
const generatePaddedNumber = (number, width) => {
  const numberString = number.toString();
  const padding = '0'.repeat(Math.max(0, width - numberString.length));
  return padding + numberString;
};

// Controller for creating a new user
const createUser = async (req, res) => {
  const { username, email, phone } = req.body;

  try {
    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    // Get the count of existing users
    const userCount = await User.countDocuments();

    // Generate the next user ID
    const userId = `U${generatePaddedNumber(userCount + 1, 4)}`;

    // Create a new user with the generated user ID
    const newUser = new User({ userId, username, email, phone });

    // Save the new user to the database
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
};

// Controller for getting all user details
const getAllUsers = async (req, res) => {
  try {
    // Retrieve all users from the database
    const allUsers = await User.find();

    res.status(200).json(allUsers);
  } catch (error) {
    console.error('Error getting all users:', error);
    res.status(500).json({ error: 'Error getting all users' });
  }
};

module.exports = {
  createUser,getAllUsers
};
