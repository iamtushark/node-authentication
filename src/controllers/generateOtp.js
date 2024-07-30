const { generateOtpValidationRules } = require("../validators")
const { validate } = require("../middlewares")
const { email: emailService } = require("../services")
const {successMessages, responseUtils, errorMessages }= require("../utils")

const {createResponse} = responseUtils

const generateOtp = [...generateOtpValidationRules, validate, async (req, res) => {
	const { email } = req.body;

	try {
		await emailService.createVerification(email)
		res.status(200).json(createResponse({message : successMessages.otpGenerated}));
	} catch (error) {
		//TODO: Implement Logger here and for all the errors.
		console.error(error)
		res.status(500).json(createResponse({error: errorMessages.otpNotGenerated }));
	}
}]

module.exports = generateOtp;