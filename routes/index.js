const express = require('express');
const router = express.Router();
const { forwardNotAuthenticated } = require('../config/authfuncs.js');

// Welcome Page only for not authenticated people, if he is authenticated(logged in) sends him directly to his home page.
router.get('/',forwardNotAuthenticated, (req, res) => res.render('index'));
//Signin page -"-
router.get('/SignIn',forwardNotAuthenticated, (req, res) => res.render('SignIn'));
//Admin Login page -"-
router.get('/AdminLogin',forwardNotAuthenticated, (req, res) => res.render('AdminLogin'));

module.exports = router;
