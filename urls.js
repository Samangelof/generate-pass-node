const express = require('express');
const router = express.Router();
const viewGeneratePass = require('./views.js');


router.get('/generate-password', viewGeneratePass);
// postman params: 
// http://localhost:3003/generate-password?length=12&includeNumbers=true&includeSymbols=true&includeLowercase=true&includeUppercase=true

module.exports = router;
