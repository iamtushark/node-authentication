const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { serverConfig } = require("../config")
const { validate } = require('../middlewares');
const loginValidationRules = require("../validators/login")

const JWT_SECRET = serverConfig.JWT_SECRET;

exports.login = [...loginValidationRules, validate, async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ where: { email } });
		if (!user) {
			return res.status(400).json({ message: 'User not found.' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: 'Wrong Password' });
		}

		const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '2 days' });

		res.status(200).json({ token, message : "User Logged in successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
}];