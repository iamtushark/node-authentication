const jwt = require('jsonwebtoken');
const { serverConfig } = require('../config');


const authenticateJWT = (req, res, next) => {

	const tokenParts = req.header("Authorization")?.split(" ")

	if(!tokenParts){
		return res.status(401).json({ message: 'Access token is missing' });
	}

	if(tokenParts[0] !== "Bearer" && tokenParts.length !== 2){
		return res.status(401).json({ message: 'Invalid Access Token' });
	}

	const token = tokenParts[1];

	if (!token) {
		return res.status(401).json({ message: 'Access token is missing or invalid' });
	}

	jwt.verify(token, serverConfig.JWT_SECRET, (err, user) => {
		if (err) {
			return res.status(403).json({ message: 'Access token is invalid' });
		}

		req.user_id = user.id;
		next();
	});
};

module.exports = authenticateJWT;