const { User } = require('../models');
const { createResponse } = require('../utils/response');
const errorMessages = require("../utils/error")


const userProfile = async (req, res) => {

	try {
		const user = await User.findOne({
			where: { id: req.user_id },
			attributes: ['id', 'name', 'email', 'phoneNumber', 'role']
		});
		if (!user) {
			return res.status(400).json(createResponse({ error: errorMessages.userNotFound }));
		}
		return res.status(200).json(createResponse({ data: user }));

	} catch (error) {
		console.error(error);
		res.status(500).json(createResponse({ error: errorMessages.internalServerError }));
	}
};

module.exports = userProfile