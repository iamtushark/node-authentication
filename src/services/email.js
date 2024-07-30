const twilio = require("twilio");
const {serverConfig} = require("../config")

const client = twilio(serverConfig.TWILIO_SID, serverConfig.TWILIO_TOKEN);

async function createVerification(email) {
	const verification = await client.verify.v2
		.services(serverConfig.TWILIO_EMAIL_SERVICE_SID)
		.verifications.create({
			channel: "email",
			to: email
		});

	console.log(verification);
}

async function checkVerificationStatus(email, code) {
	const verificationCheck = await client.verify.v2
		.services(serverConfig.TWILIO_EMAIL_SERVICE_SID)
		.verificationChecks.create({
			channel: "email",
			to: email,
			code: code
		});

	console.log(verificationCheck)
	return verificationCheck.status
}


module.exports = { createVerification, checkVerificationStatus }