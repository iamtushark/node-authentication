const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { signupValidationRules } = require('../validators');
const { validate } = require('../middlewares');


const signup = [
  ...signupValidationRules,
  validate,
  async (req, res) => {
    const { name, email, password, phoneNumber, role } = req.body;

    try {
      // Check if the user already exists
      let user = await User.findOne({ where: { email } });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create new user
      user = await User.create({ name, email, password: hashedPassword, phoneNumber, role });

      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
];



module.exports = signup