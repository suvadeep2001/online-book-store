const express = require('express');
const { createPost } = require('../controllers/post');
// const { createPost } = require('../routes/post');

const router = express.Router();

router.route('/post/upload').post(createPost);

module.exports = router;