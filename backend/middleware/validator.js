const { check, validationResult } = require('express-validator');

exports.validateUser = [
  check('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Name is Missing')
    .isLength({ min: 3, max: 20 })
    .withMessage('Name length between 3 and 20'),

  check('email').normalizeEmail().isEmail().withMessage('Invalid Email'),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Empty Password')
    .isLength({ min: 6, max: 20 })
    .withMessage('Password length between 6 and 20'),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (!error.length) return next();

  res.status(400).json({ success: false, error: error[0].msg });
};
