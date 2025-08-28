const Ajv = require('ajv');
const ajv = new Ajv();
const postSchema = require('./postSchema');

const posts = [
  { id: 1, title: 'My First Post', content: 'This is the content...', tags: ['javascript', 'nodejs'] },
  { id: 2, title: 'Another Great Post', content: 'More amazing content here.', tags: ['express', 'web-dev'] },
];

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


const checkPostExists = (req, res, next) => {
    const postId = parseInt(req.params.postId);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ message: 'Post not found.' });
    }
    
    req.post = post;
    next();
};


module.exports = { validatePost, checkPostExists};