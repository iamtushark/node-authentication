const { StatusCodes } = require('http-status-codes');

const info = (req, res) => {
	return res.status(StatusCodes.OK).json({
		message: "API Is LIve",
	})
}

module.exports = {
	info
}