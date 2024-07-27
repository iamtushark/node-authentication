const { body } = require('express-validator');

const signupValidationRules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('phoneNumber').optional().isString().withMessage('Phone number must be a string'),
  body('role').optional().isIn(['admin', 'user']).withMessage('Role must be either admin or user')
];

module.exports = signupValidationRules