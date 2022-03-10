const express = require('express');
const { register } = require('../controllers/user');
const { login } = require('../controllers/user');

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);

module.exports = router;