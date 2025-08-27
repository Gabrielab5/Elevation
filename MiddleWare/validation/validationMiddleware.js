const Ajv = require('ajv');
const ajv = new Ajv();

const postSchema = require('./postSchema');

const validatePost = (req, res, next) => {
    const validate = ajv.compile(postSchema);
    const valid = validate(req.body);

    if (!valid) {
        const errors = validate.errors.map(err => `${err.instancePath} ${err.message}`);
        return res.status(400).json({
            message: "Validation failed.",
            errors: errors
        });
    }

    next();
};

module.exports = { validatePost };