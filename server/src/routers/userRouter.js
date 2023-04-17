const express = require('express');
const userAuth = require('../middleware/authentication');

const userControllers = require('../controllers/userControllers');

const router = express.Router();

/* Checks if a user exist if so returns the token otherwise error. */
router.post('/login', userControllers.loginUser);

/* Creates a user in the SQL DB with Email and hashed password. */
router.post('/register', userControllers.registerUser);

router.get('/user', userAuth, userControllers.getUserData);

router.post('/user', userAuth, userControllers.editUserData);

module.exports = router;
