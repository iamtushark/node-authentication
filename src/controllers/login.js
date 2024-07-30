const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { serverConfig } = require("../config")
const { validate } = require('../middlewares');
const loginValidationRules = require("../validators/login")
const { successMessages, responseUtils, errorMessages } = require("../utils")

const { createResponse } = responseUtils
const JWT_SECRET = serverConfig.JWT_SECRET;

const login = [...loginValidationRules, validate, async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ where: { email } });
		if (!user) {
			return res.status(400).json(createResponse({ error: errorMessages.userNotFound }));
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json(createResponse({ error: errorMessages.wrongPassword }));
		}

		const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '2 days' });

		res.status(200).json(createResponse({ data: { token }, message: successMessages.userLoggedIn }));
	} catch (error) {
		console.error(error);
		res.status(500).json(createResponse({ error: errorMessages.internalServerError }));
	}
}];

module.exports = login