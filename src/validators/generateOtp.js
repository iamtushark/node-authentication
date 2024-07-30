const { body } = require('express-validator');

const generateOtpValidationRules = [
  body('email').isEmail().withMessage('Valid email is required'),
];

module.exports = generateOtpValidationRules