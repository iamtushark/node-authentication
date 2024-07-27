const { User } = require('../models');


const userProfile = async (req, res) => {

	try {
		const user = await User.findOne({
			where: { id: req.user_id },
			attributes: ['id', 'name', 'email', 'phoneNumber', 'role']
		});
		if (!user) {
			return res.status(400).json({ message: 'User not found.' });
		}
		return res.status(200).json(user);

	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = userProfile