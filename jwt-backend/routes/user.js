const express = require('express');
const userController = require('../controller/user');
const { checkAuth } = require('../middleware/checkAuth');

const router = express.Router();

router.post('/signup', userController.signup)

router.post('/login',  userController.login)

module.exports = router;
