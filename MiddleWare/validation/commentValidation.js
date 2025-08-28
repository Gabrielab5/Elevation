const { body } = require('express-validator');

const commentValidationRules = () => {
    return [
        body('content')
            .isString().withMessage('Comment content must be a string.')
            .isLength({ min: 5, max: 500 }).withMessage('Comment content must be between 5 and 500 characters.'),
        
        body('email')
            .isEmail().withMessage('Email must be a valid email address.')
    ];
};

module.exports = { commentValidationRules };